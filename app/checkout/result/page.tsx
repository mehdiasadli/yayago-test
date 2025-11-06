import { getStripeSession } from '@/features/stripe/stripe.actions';
import { notFound } from 'next/navigation';
import ResultContent from './result-content';

interface CheckoutResultPageProps {
  searchParams: Promise<{
    session_id?: string;
    redirect_url?: string;
  }>;
}

export default async function CheckoutResultPage({ searchParams }: CheckoutResultPageProps) {
  const { session_id, redirect_url = '/' } = await searchParams;

  if (!session_id) {
    notFound();
  }

  const session = await getStripeSession(session_id);

  if (!session) {
    notFound();
  }

  if (!session.status || !session.payment_status) {
    notFound();
  }

  return <ResultContent status={session.status} paymentStatus={session.payment_status} redirectUrl={redirect_url} />;
}
