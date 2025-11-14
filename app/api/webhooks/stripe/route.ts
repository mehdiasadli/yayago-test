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
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as any;
        // Payment was successful
        // You can access metadata via paymentIntent.metadata
        // Example: paymentIntent.metadata.type (booking or subscription)
        // Example: paymentIntent.metadata.userId
        // Example: paymentIntent.metadata.bookingId

        console.log('Payment succeeded:', paymentIntent.id);
        console.log('Amount:', paymentIntent.amount);
        console.log('Metadata:', paymentIntent.metadata);

        // TODO: Update your database based on payment type
        // if (paymentIntent.metadata.type === 'booking') {
        //   // Mark booking as paid
        // } else if (paymentIntent.metadata.type === 'subscription') {
        //   // Activate subscription
        // }
        break;
      }
      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as any;
        // Payment failed
        console.log('Payment failed:', paymentIntent.id);
        console.log('Failure reason:', paymentIntent.last_payment_error?.message);

        // TODO: Notify user or take appropriate action
        break;
      }
      case 'payment_intent.canceled': {
        const paymentIntent = event.data.object as any;
        // Payment was canceled
        console.log('Payment canceled:', paymentIntent.id);

        // TODO: Clean up any pending bookings or subscriptions
        break;
      }
      case 'payment_intent.processing': {
        const paymentIntent = event.data.object as any;
        // Payment is being processed (e.g., bank transfer)
        console.log('Payment processing:', paymentIntent.id);
        break;
      }
      case 'payment_intent.requires_action': {
        const paymentIntent = event.data.object as any;
        // Payment requires additional action (e.g., 3D Secure)
        console.log('Payment requires action:', paymentIntent.id);
        break;
      }
      // Subscription-related events (if you implement recurring subscriptions later)
      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object as any;
        console.log('Subscription updated:', subscription.id);
        // TODO: Sync subscription status into your DB
        break;
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as any;
        console.log('Subscription deleted:', subscription.id);
        // TODO: Deactivate subscription in your DB
        break;
      }
      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as any;
        console.log('Invoice payment succeeded:', invoice.id);
        // TODO: Handle recurring subscription payment
        break;
      }
      case 'invoice.payment_failed': {
        const invoice = event.data.object as any;
        console.log('Invoice payment failed:', invoice.id);
        // TODO: Notify user about failed recurring payment
        break;
      }
      default:
        console.log(`Unhandled event type: ${event.type}`);
        break;
    }
  } catch (e) {
    console.error('Webhook handler error:', e);
    return NextResponse.json({ error: 'Handler error' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
