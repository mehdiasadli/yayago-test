import { NextRequest, NextResponse } from 'next/server';
import { headers as nextHeaders } from 'next/headers';
import { stripe } from '@/lib/stripe';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  const signature = (await nextHeaders()).get('stripe-signature');
  if (!webhookSecret || !signature) return NextResponse.json({ ok: false }, { status: 400 });

  const rawBody = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook error: ${err.message}` }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as any;
        // If mode=subscription → session.subscription contains sub id
        // If mode=payment → session.payment_intent contains PI id
        // Read session.metadata & subscription_data.metadata you set earlier.
        // TODO: mark subscription active in your DB / mark booking paid, etc.
        break;
      }
      case 'invoice.payment_succeeded':
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        // Sync subscription status & item quantities into your DB
        break;
      }
      case 'payment_intent.succeeded': {
        // For one-time bookings if you used mode=payment without Checkout Session
        break;
      }
      default:
        // no-op
        break;
    }
  } catch (e) {
    return NextResponse.json({ error: 'Handler error' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
