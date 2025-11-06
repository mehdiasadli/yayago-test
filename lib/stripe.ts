import { Stripe } from 'stripe';

const apiKey = process.env.STRIPE_SECRET_KEY;

if (!apiKey) {
  throw new Error('STRIPE_SECRET_KEY is not set');
}

export const STRIPE_PRICE_LOOKUPS = {
  plans: {
    basic: { month: 'plan_basic_monthly', year: 'plan_basic_yearly' },
    premium: { month: 'plan_premium_monthly', year: 'plan_premium_yearly' },
    elegant: { month: 'plan_elegant_monthly', year: 'plan_elegant_yearly' },
  },
  addons: {
    extraCar: {
      basic: { month: 'addon_extra_car_basic_monthly', year: 'addon_extra_car_basic_yearly' },
      premium: { month: 'addon_extra_car_premium_monthly', year: 'addon_extra_car_premium_yearly' },
      elegant: { month: 'addon_extra_car_elegant_monthly', year: 'addon_extra_car_elegant_yearly' },
    },
    featuredSlot: {
      month: 'addon_featured_slot_monthly',
      year: 'addon_featured_slot_yearly',
    },
  },
} as const;

export type PlanTier = keyof typeof STRIPE_PRICE_LOOKUPS.plans;
export type PriceInterval = 'month' | 'year';

export const stripe = new Stripe(apiKey);
