'use client';

import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';

import { postSubscriptionCheckoutSession } from '@/features/stripe/stripe.actions';
import { PlanTier, PriceInterval } from '@/lib/stripe';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface CheckoutFormProps {
  tier: PlanTier;
  interval: PriceInterval;
  email: string;
  userId: string;
  successRedirectUrl: string;
}

export default function CheckoutForm({ tier, interval, email, userId, successRedirectUrl }: CheckoutFormProps) {
  const fetchClientSecret = useCallback(async () => {
    const stripeResponse = await postSubscriptionCheckoutSession({
      tier,
      interval,
      email,
      userId,
      successRedirectUrl,
    });

    return stripeResponse.clientSecret;
  }, [tier, interval, email, userId, successRedirectUrl]);

  const options = { fetchClientSecret };

  return (
    <div id='checkout'>
      <EmbeddedCheckoutProvider options={options} stripe={stripePromise}>
        <EmbeddedCheckout className='pt-6' />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
