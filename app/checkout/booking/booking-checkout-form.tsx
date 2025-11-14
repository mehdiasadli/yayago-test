'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { createStripeIntent } from '@/features/stripe/stripe.actions';
import { toast } from 'sonner';
import { Loader2, Car, Calendar } from 'lucide-react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface BookingCheckoutFormProps {
  email: string;
  amountAED: number;
  bookingId: string;
  carId: string;
  carTitle: string;
  successRedirectUrl: string;
}

function PaymentForm({
  clientSecret,
  amount,
  carTitle,
  bookingId,
  successRedirectUrl,
}: {
  clientSecret: string;
  amount: number;
  carTitle: string;
  bookingId: string;
  successRedirectUrl: string;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.error('Payment system is not ready. Please wait a moment.');
      return;
    }

    // Check if PaymentElement is properly mounted
    const paymentElement = elements.getElement('payment');
    if (!paymentElement) {
      toast.error('Payment form is not ready. Please wait a moment.');
      return;
    }

    setIsProcessing(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/checkout/result?type=booking&booking_id=${bookingId}&redirect_url=${encodeURIComponent(successRedirectUrl)}`,
        },
        redirect: 'if_required',
      });

      if (error) {
        // Payment failed
        console.error('Payment error:', error);
        toast.error(error.message || 'Payment failed');
        setIsProcessing(false);
      } else if (paymentIntent) {
        // Handle different payment intent statuses
        switch (paymentIntent.status) {
          case 'succeeded':
            toast.success('Payment successful! Your booking is confirmed.');
            window.location.href = `/checkout/result?intent_id=${paymentIntent.id}&type=booking&booking_id=${bookingId}&redirect_url=${encodeURIComponent(successRedirectUrl)}`;
            break;
          case 'processing':
            toast.info('Payment is being processed...');
            window.location.href = `/checkout/result?intent_id=${paymentIntent.id}&type=booking&booking_id=${bookingId}&redirect_url=${encodeURIComponent(successRedirectUrl)}`;
            break;
          case 'requires_payment_method':
            toast.error('Payment failed. Please try a different payment method.');
            setIsProcessing(false);
            break;
          case 'requires_action':
          case 'requires_confirmation':
            toast.info('Additional authentication required...');
            // Will be redirected by Stripe
            break;
          default:
            console.log('Unhandled payment status:', paymentIntent.status);
            toast.info('Payment status: ' + paymentIntent.status);
            window.location.href = `/checkout/result?intent_id=${paymentIntent.id}&type=booking&booking_id=${bookingId}&redirect_url=${encodeURIComponent(successRedirectUrl)}`;
        }
      }
    } catch (err) {
      console.error('Payment error:', err);
      toast.error('An unexpected error occurred');
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      {/* Booking Summary */}
      <Card className='border-primary/20'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Car className='w-5 h-5 text-primary' />
            Booking Summary
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-3'>
          <div className='flex justify-between'>
            <span className='text-gray-600'>Vehicle:</span>
            <span className='font-semibold'>{carTitle}</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-gray-600'>Booking ID:</span>
            <span className='font-mono text-sm'>{bookingId}</span>
          </div>
          <div className='border-t pt-3 mt-3 flex justify-between items-center'>
            <span className='text-lg font-semibold'>Total Amount:</span>
            <span className='text-2xl font-bold text-primary'>{amount} AED</span>
          </div>
        </CardContent>
      </Card>

      {/* Payment Details */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
          <CardDescription>Enter your card information to complete the booking</CardDescription>
        </CardHeader>
        <CardContent>
          <PaymentElement
            onReady={() => setIsReady(true)}
            onLoadError={(error) => {
              console.error('PaymentElement load error:', error);
              toast.error('Failed to load payment form. Please refresh the page.');
            }}
          />
        </CardContent>
      </Card>

      {/* Submit Button */}
      <Button type='submit' disabled={!stripe || !isReady || isProcessing} className='w-full' size='lg'>
        {isProcessing ? (
          <>
            <Loader2 className='mr-2 h-5 w-5 animate-spin' />
            Processing Payment...
          </>
        ) : (
          `Pay ${amount} AED & Confirm Booking`
        )}
      </Button>

      {/* Security Notice */}
      <p className='text-xs text-center text-gray-500'>🔒 Your payment information is encrypted and secure</p>
    </form>
  );
}

export default function BookingCheckoutForm({
  email,
  amountAED,
  bookingId,
  carId,
  carTitle,
  successRedirectUrl,
}: BookingCheckoutFormProps) {
  const [clientSecret, setClientSecret] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        setIsLoading(true);
        const response = await createStripeIntent({
          amount: amountAED,
          customerEmail: email,
          description: `Car Booking: ${carTitle} (Booking ID: ${bookingId})`,
        });

        if (response.success && response.data) {
          setClientSecret(response.data.clientSecret);
        } else {
          setError(response.message || 'Failed to initialize payment');
          toast.error(response.message || 'Failed to initialize payment');
        }
      } catch (err) {
        console.error('Error creating payment intent:', err);
        setError('An unexpected error occurred');
        toast.error('Failed to initialize payment');
      } finally {
        setIsLoading(false);
      }
    };

    createPaymentIntent();
  }, [amountAED, email, carTitle, bookingId]);

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center space-y-4'>
          <Loader2 className='h-12 w-12 animate-spin mx-auto text-primary' />
          <p className='text-muted-foreground'>Initializing payment...</p>
        </div>
      </div>
    );
  }

  if (error || !clientSecret) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <Card className='max-w-md'>
          <CardHeader>
            <CardTitle className='text-destructive'>Payment Initialization Failed</CardTitle>
            <CardDescription>{error || 'Unable to initialize payment. Please try again.'}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => window.history.back()} variant='outline' className='w-full'>
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const appearance = {
    theme: 'stripe' as const,
    variables: {
      colorPrimary: '#0ea5e9',
    },
  };

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-2xl mx-auto'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Complete Your Booking</h1>
          <p className='text-gray-600'>Secure payment for {carTitle}</p>
        </div>

        <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
          <PaymentForm
            clientSecret={clientSecret}
            amount={amountAED}
            carTitle={carTitle}
            bookingId={bookingId}
            successRedirectUrl={successRedirectUrl}
          />
        </Elements>

        <div className='mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg'>
          <div className='flex items-start gap-3'>
            <Calendar className='w-5 h-5 text-blue-600 mt-0.5' />
            <div className='text-sm text-blue-900'>
              <p className='font-semibold mb-1'>Important Notice</p>
              <p>
                After successful payment, you will receive a confirmation email with booking details and pickup
                instructions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
