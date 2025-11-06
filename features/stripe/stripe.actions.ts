'use server';

import { PlanTier, PriceInterval, stripe, STRIPE_PRICE_LOOKUPS } from '@/lib/stripe';
import Stripe from 'stripe';

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

async function getPriceIdByLookupKey(lookupKey: string) {
  const list = await stripe.prices.list({
    lookup_keys: [lookupKey],
    active: true,
    expand: ['data.product'],
  });

  const price = list.data[0];

  if (!price) {
    throw new Error(`Price with lookup key ${lookupKey} not found`);
  }

  return price.id;
}

async function findOrCreateCustomerByEmail(email: string, userId?: string) {
  const list = await stripe.customers.list({ email, limit: 1 });

  if (list.data.length > 0) return list.data[0];

  return stripe.customers.create({
    email,
    metadata: userId ? { userId } : undefined,
  });
}

interface CommonCheckoutInput {
  email: string;
  userId?: string;
  customerId?: string;
  successRedirectUrl?: string;
}

interface SubscriptionCheckoutInput extends CommonCheckoutInput {
  tier: PlanTier;
  interval: PriceInterval;
  additionalCars?: number; // number of extra cars
  featuredSlots?: number; // how many featured slots
}

export async function postSubscriptionCheckoutSession(input: SubscriptionCheckoutInput) {
  const {
    email,
    userId,
    tier,
    interval,
    additionalCars = 0,
    featuredSlots = 0,
    successRedirectUrl = `${appUrl}/`,
  } = input;

  const customer = await findOrCreateCustomerByEmail(email, userId);

  const planLookup = STRIPE_PRICE_LOOKUPS.plans[tier][interval];

  const planPriceId = await getPriceIdByLookupKey(planLookup);

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [{ price: planPriceId, quantity: 1 }];

  if (additionalCars > 0) {
    const addonLookup = STRIPE_PRICE_LOOKUPS.addons.extraCar[tier][interval];
    const addonPriceId = await getPriceIdByLookupKey(addonLookup);
    line_items.push({ price: addonPriceId, quantity: additionalCars });
  }

  if (featuredSlots > 0) {
    const addonLookup = STRIPE_PRICE_LOOKUPS.addons.featuredSlot[interval];
    const addonPriceId = await getPriceIdByLookupKey(addonLookup);
    line_items.push({ price: addonPriceId, quantity: featuredSlots });
  }

  const returnUrl = `${appUrl}/checkout/result?session_id={CHECKOUT_SESSION_ID}&redirect_url=${encodeURIComponent(successRedirectUrl)}`;

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    mode: 'subscription',
    customer_email: email,
    line_items,
    return_url: returnUrl,
    allow_promotion_codes: true,
    phone_number_collection: { enabled: true },
    subscription_data: {
      metadata: {
        userId: userId ?? '',
        tier,
        interval,
        additionalCars: String(additionalCars),
        featuredSlots: String(featuredSlots),
      },
    },
    automatic_tax: { enabled: true },
    expires_at: Math.floor(Date.now() / 1000) + 30 * 60,
  });

  if (!session.client_secret) {
    throw new Error('Failed to create Stripe session');
  }

  return {
    clientSecret: session.client_secret,
    sessionId: session.id,
  };
}

interface BookingCheckoutInput extends CommonCheckoutInput {
  bookingId: string;
  carId: string;
  carTitle: string;
  amountAED: number;
  quantity?: number;
}

export async function postBookingCheckoutSession(input: BookingCheckoutInput) {
  const {
    email,
    userId,
    customerId,
    bookingId,
    carId,
    carTitle,
    amountAED,
    quantity = 1,
    successRedirectUrl = `${appUrl}/`,
  } = input;

  const amountInFils = Math.round(amountAED * 100);
  const customer = await findOrCreateCustomerByEmail(email, userId);
  const returnUrl = `${appUrl}/checkout/result?session_id={CHECKOUT_SESSION_ID}&redirect_url=${encodeURIComponent(successRedirectUrl)}`;

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    mode: 'payment',
    customer: customer.id,
    customer_email: email,
    return_url: returnUrl,
    line_items: [
      {
        price_data: {
          currency: 'aed',
          product_data: {
            name: 'Car Booking',
            description: carTitle,
            metadata: { bookingId, carId },
          },
          unit_amount: amountInFils,
        },
        quantity,
      },
    ],
    metadata: { bookingId, carId, userId: userId ?? '' },
    automatic_tax: { enabled: true },
    expires_at: Math.floor(Date.now() / 1000) + 30 * 60,
  });

  if (!session.client_secret) {
    throw new Error('Failed to create Stripe session');
  }

  return {
    clientSecret: session.client_secret,
    sessionId: session.id,
  };
}

export async function getStripeSession(sessionId: string) {
  return await stripe.checkout.sessions.retrieve(sessionId, { expand: ['subscription', 'customer', 'payment_intent'] });
}

export async function createBillingPortalSession(customerId: string, returnPath = '/') {
  const portal = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${appUrl}${returnPath}`,
  });

  return { url: portal.url };
}

interface UpdateSubscriptionAddonsInput {
  subscriptionId: string;
  tier: PlanTier;
  interval: PriceInterval;
  additionalCars?: number;
  featuredSlots?: number;
}

export async function updateSubscriptionAddons(input: UpdateSubscriptionAddonsInput) {
  const { subscriptionId, tier, interval, additionalCars, featuredSlots } = input;

  const sub = await stripe.subscriptions.retrieve(subscriptionId);
  const items = sub.items.data;

  const extraCarLookup = STRIPE_PRICE_LOOKUPS.addons.extraCar[tier][interval];
  const extraCarPriceId = await getPriceIdByLookupKey(extraCarLookup);
  const featuredSlotLookup = STRIPE_PRICE_LOOKUPS.addons.featuredSlot[interval];
  const featuredSlotPriceId = await getPriceIdByLookupKey(featuredSlotLookup);

  const updates: Stripe.SubscriptionUpdateParams.Item[] = [];

  function upsertItem(existing: Stripe.SubscriptionItem | undefined, price: string, quantity: number | undefined) {
    if (!quantity) return;

    if (existing) {
      updates.push({ id: existing.id, price, quantity });
    } else {
      updates.push({ price, quantity });
    }
  }

  const existingExtra = items.find((i) => i.price.id === extraCarPriceId);
  const existingFeatured = items.find((i) => i.price.id === featuredSlotPriceId);

  upsertItem(existingExtra, extraCarPriceId, additionalCars);
  upsertItem(existingFeatured, featuredSlotPriceId, featuredSlots);

  return stripe.subscriptions.update(subscriptionId, {
    items: updates,
    proration_behavior: 'create_prorations',
  });
}

export async function switchPlan(opts: { subscriptionId: string; newTier: PlanTier; newInterval: PriceInterval }) {
  const { subscriptionId, newTier, newInterval } = opts;
  const sub = await stripe.subscriptions.retrieve(subscriptionId);
  const baseItem = sub.items.data[0]; // you always put plan first in our session
  if (!baseItem) throw new Error('Subscription has no items');

  const newPriceId = await getPriceIdByLookupKey(STRIPE_PRICE_LOOKUPS.plans[newTier][newInterval]);

  return stripe.subscriptions.update(subscriptionId, {
    items: [{ id: baseItem.id, price: newPriceId, quantity: 1 }],
    proration_behavior: 'create_prorations',
  });
}
