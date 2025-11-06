import { notFound } from 'next/navigation';
import CheckoutForm from './checkout-form';
import z from 'zod';

interface CheckoutPageProps {
  searchParams: Promise<{
    tier?: string;
    interval?: string;
    email: string;
    userId: string;
    successRedirectUrl: string;
  }>;
}

const tierEnumSchema = z.enum(['basic', 'premium', 'elegant']);
const intervalEnumSchema = z.enum(['month', 'year']);

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const { tier, interval, email, userId, successRedirectUrl } = await searchParams;

  if (!tier || !interval || !email || !userId || !successRedirectUrl) {
    notFound();
  }

  const tierEnum = tierEnumSchema.safeParse(tier);
  const intervalEnum = intervalEnumSchema.safeParse(interval);

  if (!tierEnum.success || !intervalEnum.success) {
    notFound();
  }

  return (
    <main>
      <CheckoutForm
        tier={tierEnum.data}
        interval={intervalEnum.data}
        email={email}
        userId={userId}
        successRedirectUrl={successRedirectUrl}
      />
    </main>
  );
}
