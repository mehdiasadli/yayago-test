import { notFound } from 'next/navigation';
import z from 'zod';
import BookingCheckoutForm from './booking-checkout-form';

const bookingCheckoutFormSchema = z.object({
  email: z.string().email(),
  amountAED: z.coerce.number().positive(),
  bookingId: z.string(),
  carId: z.string(),
  carTitle: z.string().min(1),
  successRedirectUrl: z.string().min(1),
});

interface BookingCheckoutPageProps {
  searchParams: Promise<z.infer<typeof bookingCheckoutFormSchema>>;
}

export default async function BookingCheckoutPage({ searchParams }: BookingCheckoutPageProps) {
  const params = await searchParams;

  const validatedParams = bookingCheckoutFormSchema.safeParse(params);

  if (!validatedParams.success) {
    notFound();
  }

  return (
    <main>
      <BookingCheckoutForm
        email={validatedParams.data.email}
        amountAED={validatedParams.data.amountAED}
        bookingId={validatedParams.data.bookingId}
        carId={validatedParams.data.carId}
        carTitle={validatedParams.data.carTitle}
        successRedirectUrl={validatedParams.data.successRedirectUrl}
      />
    </main>
  );
}
