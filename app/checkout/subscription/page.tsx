import { notFound } from 'next/navigation';
import SubscriptionCheckoutForm from './subscription-checkout-form';
import z from 'zod';

const subscriptionCheckoutFormSchema = z.object({
  tier: z.enum(['basic', 'premium', 'elegant']),
  interval: z.enum(['month', 'year']),
  email: z.string().email(),
  userId: z.string().optional(),
  successRedirectUrl: z.string().min(1),
});

interface SubscriptionCheckoutPageProps {
  searchParams: Promise<z.infer<typeof subscriptionCheckoutFormSchema>>;
}

export default async function SubscriptionCheckoutPage({ searchParams }: SubscriptionCheckoutPageProps) {
  const params = await searchParams;

  const validatedParams = subscriptionCheckoutFormSchema.safeParse(params);

  if (!validatedParams.success) {
    notFound();
  }

  return (
    <main>
      <SubscriptionCheckoutForm
        tier={validatedParams.data.tier}
        interval={validatedParams.data.interval}
        email={validatedParams.data.email}
        userId={validatedParams.data.userId}
        successRedirectUrl={validatedParams.data.successRedirectUrl}
      />
    </main>
  );
}
