import { notFound } from 'next/navigation';
import ResultContent from './result-content';

interface CheckoutResultPageProps {
  searchParams: Promise<{
    intent_id?: string;
    payment_intent?: string; // Stripe's default param name when redirecting back
    type?: 'booking' | 'subscription';
    booking_id?: string;
    redirect_url?: string;
  }>;
}

export default async function CheckoutResultPage({ searchParams }: CheckoutResultPageProps) {
  const params = await searchParams;

  // Support both our custom intent_id and Stripe's payment_intent parameter
  const intentId = params.intent_id || params.payment_intent;
  const type = params.type;
  const bookingId = params.booking_id;
  const redirectUrl = params.redirect_url || '/';

  if (!intentId || !type) {
    notFound();
  }

  return <ResultContent intentId={intentId} type={type} bookingId={bookingId} redirectUrl={redirectUrl} />;
}
