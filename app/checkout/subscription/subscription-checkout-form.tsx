'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { createStripeIntent } from '@/features/stripe/stripe.actions';
import { PlanTier, PriceInterval } from '@/lib/stripe';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { plans } from '@/data/pricing';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface CheckoutFormProps {
  tier: PlanTier;
  interval: PriceInterval;
  email: string;
  userId?: string;
  successRedirectUrl: string;
}

function PaymentForm({
  clientSecret,
  amount,
  planName,
  interval,
  successRedirectUrl,
}: {
  clientSecret: string;
  amount: number;
  planName: string;
  interval: PriceInterval;
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
          return_url: `${window.location.origin}/checkout/result?type=subscription&redirect_url=${encodeURIComponent(successRedirectUrl)}`,
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
            toast.success('Payment successful!');
            window.location.href = `/checkout/result?intent_id=${paymentIntent.id}&type=subscription&redirect_url=${encodeURIComponent(successRedirectUrl)}`;
            break;
          case 'processing':
            toast.info('Payment is being processed...');
            window.location.href = `/checkout/result?intent_id=${paymentIntent.id}&type=subscription&redirect_url=${encodeURIComponent(successRedirectUrl)}`;
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
            window.location.href = `/checkout/result?intent_id=${paymentIntent.id}&type=subscription&redirect_url=${encodeURIComponent(successRedirectUrl)}`;
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
      <Card>
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
          <CardDescription>Enter your card information to complete the subscription</CardDescription>
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

      <div className='flex flex-col gap-4'>
        <div className='flex justify-between items-center text-lg font-semibold'>
          <span>Total:</span>
          <span className='text-2xl text-primary'>
            {amount} AED / {interval}
          </span>
        </div>
        <Button type='submit' disabled={!stripe || !isReady || isProcessing} className='w-full' size='lg'>
          {isProcessing ? (
            <>
              <Loader2 className='mr-2 h-5 w-5 animate-spin' />
              Processing...
            </>
          ) : (
            `Pay ${amount} AED`
          )}
        </Button>
      </div>
    </form>
  );
}

export default function SubscriptionCheckoutForm({
  tier,
  interval,
  email,
  userId,
  successRedirectUrl,
}: CheckoutFormProps) {
  const [clientSecret, setClientSecret] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  const plan = plans.find((p) => p.tier === tier);
  const amount = plan?.price?.[interval] || 0;
  const planName = plan?.name || '';

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        setIsLoading(true);
        const response = await createStripeIntent({
          amount,
          customerEmail: email,
          description: `${planName} Plan - ${interval}ly subscription`,
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
  }, [amount, email, planName, interval]);

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
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Complete Your Subscription</h1>
          <p className='text-gray-600'>
            Subscribe to the {planName} plan - {interval}ly billing
          </p>
        </div>

        <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
          <PaymentForm
            clientSecret={clientSecret}
            amount={amount}
            planName={planName}
            interval={interval}
            successRedirectUrl={successRedirectUrl}
          />
        </Elements>

        <div className='mt-6 text-center text-sm text-gray-500'>
          <p>🔒 Secure payment powered by Stripe</p>
        </div>
      </div>
    </div>
  );
}
