'use client';

import Stripe from 'stripe';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ResultContentProps {
  status: Stripe.Checkout.Session.Status;
  paymentStatus: Stripe.Checkout.Session.PaymentStatus;
  redirectUrl: string;
}

export default function ResultContent({ status, paymentStatus, redirectUrl }: ResultContentProps) {
  const router = useRouter();

  useEffect(() => {
    if (status === 'complete' && paymentStatus === 'paid') {
      toast.success('Payment successful');
      router.push(redirectUrl);
    } else {
      toast.error('Payment failed. Please try again.');
      router.push(redirectUrl);
    }
  }, [status, paymentStatus, router, redirectUrl]);

  return null;
}
