'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Loader2, Clock } from 'lucide-react';
import { StripeApi } from '@/features/stripe/stripe.api';
import { toast } from 'sonner';

interface ResultContentProps {
  intentId: string;
  type: 'booking' | 'subscription';
  bookingId?: string;
  redirectUrl: string;
}

export default function ResultContent({ intentId, type, bookingId, redirectUrl }: ResultContentProps) {
  const router = useRouter();
  const [status, setStatus] = useState<
    | 'loading'
    | 'succeeded'
    | 'processing'
    | 'requires_action'
    | 'requires_payment_method'
    | 'requires_confirmation'
    | 'requires_capture'
    | 'failed'
    | 'canceled'
  >('loading');

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const response = await StripeApi.getIntentStatus({ intentId });

        if (response.success && response.data) {
          // The backend returns status in uppercase with underscores (e.g., "REQUIRES_PAYMENT_METHOD")
          // Convert to lowercase (e.g., "requires_payment_method")
          const normalizedStatus = response.data.status.toLowerCase() as typeof status;

          // Treat requires_payment_method and similar statuses as failed for better UX
          if (
            normalizedStatus === 'requires_payment_method' ||
            normalizedStatus === 'requires_confirmation' ||
            normalizedStatus === 'requires_capture'
          ) {
            setStatus('failed');
          } else {
            setStatus(normalizedStatus);
          }

          // Show appropriate toast based on status
          if (normalizedStatus === 'succeeded') {
            toast.success('Payment successful!');
          } else if (normalizedStatus === 'processing') {
            toast.info('Payment is being processed...');
          } else if (normalizedStatus === 'failed' || normalizedStatus === 'canceled') {
            toast.error('Payment was not completed');
          } else if (normalizedStatus === 'requires_payment_method') {
            toast.error('Payment failed. Please try a different payment method.');
          } else if (normalizedStatus === 'requires_action') {
            toast.warning('Additional authentication required. Please complete the verification.');
          }
        } else {
          setStatus('failed');
          toast.error('Failed to check payment status');
        }
      } catch (error) {
        console.error('Error checking payment status:', error);
        setStatus('failed');
        toast.error('Failed to check payment status');
      }
    };

    checkPaymentStatus();
  }, [intentId]);

  const handleContinue = () => {
    if (status === 'succeeded') {
      // For successful payments, redirect to the success URL
      router.push(redirectUrl);
    } else {
      // For failed/canceled payments, go back
      router.back();
    }
  };

  // Group statuses for easier handling
  const isSuccess = status === 'succeeded';
  const isProcessing = status === 'processing';
  const requiresAction =
    status === 'requires_action' ||
    status === 'requires_payment_method' ||
    status === 'requires_confirmation' ||
    status === 'requires_capture';
  const isFailed = status === 'failed' || status === 'canceled';

  if (status === 'loading') {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <Card className='max-w-md w-full'>
          <CardContent className='pt-6'>
            <div className='text-center space-y-4'>
              <Loader2 className='h-16 w-16 animate-spin mx-auto text-primary' />
              <h2 className='text-2xl font-bold'>Checking Payment Status</h2>
              <p className='text-muted-foreground'>Please wait while we verify your payment...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 p-4'>
      <Card className='max-w-2xl w-full'>
        <CardHeader className='text-center pb-4'>
          {isSuccess && (
            <>
              <div className='mx-auto mb-4 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center'>
                <CheckCircle2 className='w-12 h-12 text-green-600' />
              </div>
              <CardTitle className='text-3xl font-bold text-green-600'>Payment Successful!</CardTitle>
              <CardDescription className='text-lg mt-2'>
                Your {type === 'booking' ? 'booking' : 'subscription'} has been confirmed
              </CardDescription>
            </>
          )}

          {isProcessing && (
            <>
              <div className='mx-auto mb-4 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center'>
                <Clock className='w-12 h-12 text-blue-600' />
              </div>
              <CardTitle className='text-3xl font-bold text-blue-600'>Payment Processing</CardTitle>
              <CardDescription className='text-lg mt-2'>
                Your payment is being processed. This may take a few moments.
              </CardDescription>
            </>
          )}

          {requiresAction && (
            <>
              <div className='mx-auto mb-4 w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center'>
                <Clock className='w-12 h-12 text-yellow-600' />
              </div>
              <CardTitle className='text-3xl font-bold text-yellow-600'>Action Required</CardTitle>
              <CardDescription className='text-lg mt-2'>
                Please complete the additional verification steps to confirm your payment.
              </CardDescription>
            </>
          )}

          {isFailed && (
            <>
              <div className='mx-auto mb-4 w-20 h-20 bg-red-100 rounded-full flex items-center justify-center'>
                <XCircle className='w-12 h-12 text-red-600' />
              </div>
              <CardTitle className='text-3xl font-bold text-red-600'>
                Payment {status === 'canceled' ? 'Canceled' : 'Failed'}
              </CardTitle>
              <CardDescription className='text-lg mt-2'>
                {status === 'canceled'
                  ? 'Your payment was canceled. No charges were made.'
                  : 'We were unable to process your payment. Please try again.'}
              </CardDescription>
            </>
          )}
        </CardHeader>

        <CardContent className='space-y-6'>
          {/* Payment Details */}
          <div className='bg-gray-50 rounded-lg p-6 space-y-3'>
            <h3 className='font-semibold text-lg mb-3'>Payment Details</h3>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Type:</span>
              <span className='font-semibold capitalize'>{type}</span>
            </div>
            {bookingId && (
              <div className='flex justify-between'>
                <span className='text-gray-600'>Booking ID:</span>
                <span className='font-mono text-sm'>{bookingId}</span>
              </div>
            )}
            <div className='flex justify-between'>
              <span className='text-gray-600'>Payment ID:</span>
              <span className='font-mono text-xs break-all'>{intentId}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Status:</span>
              <span className='font-semibold capitalize'>{status.replace(/_/g, ' ')}</span>
            </div>
          </div>

          {/* Next Steps */}
          {isSuccess && (
            <div className='bg-green-50 border border-green-200 rounded-lg p-4'>
              <h4 className='font-semibold text-green-900 mb-2'>What's Next?</h4>
              <ul className='text-sm text-green-800 space-y-1 list-disc list-inside'>
                {type === 'booking' ? (
                  <>
                    <li>You will receive a confirmation email with booking details</li>
                    <li>Check your email for pickup instructions</li>
                    <li>Prepare required documents for vehicle pickup</li>
                  </>
                ) : (
                  <>
                    <li>Your subscription is now active</li>
                    <li>You will receive a confirmation email</li>
                    <li>Access all premium features in your dashboard</li>
                  </>
                )}
              </ul>
            </div>
          )}

          {isProcessing && (
            <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
              <p className='text-sm text-blue-800'>
                Your payment is being verified. You will receive an email confirmation once it's complete. This usually
                takes a few minutes.
              </p>
            </div>
          )}

          {requiresAction && (
            <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-4'>
              <p className='text-sm text-yellow-800'>
                Your payment requires additional verification. Please complete the requested action to proceed. If you
                need assistance, contact our support team.
              </p>
            </div>
          )}

          {isFailed && (
            <div className='bg-red-50 border border-red-200 rounded-lg p-4 space-y-2'>
              <h4 className='font-semibold text-red-900'>What went wrong?</h4>
              <p className='text-sm text-red-800'>
                {status === 'canceled'
                  ? 'You canceled the payment. No charges were made to your account.'
                  : 'The payment could not be processed. This may happen due to:'}
              </p>
              {status !== 'canceled' && (
                <ul className='text-sm text-red-800 list-disc list-inside space-y-1'>
                  <li>Insufficient funds or card limit reached</li>
                  <li>Card declined by your bank</li>
                  <li>Incorrect card details or expired card</li>
                  <li>Payment authentication failed</li>
                </ul>
              )}
              <p className='text-sm text-red-800 font-medium mt-2'>
                Please try again with a different payment method or contact your bank for assistance.
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className='flex gap-3'>
            {isSuccess && (
              <Button onClick={handleContinue} className='flex-1' size='lg'>
                Continue to {type === 'booking' ? 'Dashboard' : 'Home'}
              </Button>
            )}

            {isFailed && (
              <>
                <Button onClick={() => router.back()} variant='outline' className='flex-1' size='lg'>
                  Try Again
                </Button>
                <Button onClick={() => router.push('/')} variant='ghost' className='flex-1' size='lg'>
                  Go to Home
                </Button>
              </>
            )}

            {(isProcessing || requiresAction) && (
              <>
                <Button onClick={() => window.location.reload()} variant='outline' className='flex-1' size='lg'>
                  Refresh Status
                </Button>
                <Button onClick={() => router.push('/')} variant='ghost' className='flex-1' size='lg'>
                  Go to Home
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
