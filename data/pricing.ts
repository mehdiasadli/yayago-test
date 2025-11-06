import { PlanTier } from '@/lib/stripe';
import { Crown, Infinity, LucideIcon, Star, Zap } from 'lucide-react';

export type PricingPlan = {
  name: string;
  Icon: LucideIcon;
  price: {
    month: number;
    year: number;
  } | null;
  currency: string;
  tier?: PlanTier;
  description: string;
  cars: number | string;
  extraCarPrice?: number;
  features: string[];
  popular: boolean;
  color: string;
  isCorporate?: boolean;
};

export const plans: PricingPlan[] = [
  {
    name: 'Basic',
    Icon: Zap,
    price: {
      month: 999,
      year: 9990,
    },
    currency: 'AED',
    tier: 'basic',
    description: 'Perfect for individuals starting their car rental journey',
    cars: 10,
    features: [
      'Basic listing features',
      'Standard support',
      'Basic analytics',
      'Email notifications',
      'Secure payments',
      'Standard insurance',
    ],
    popular: false,
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Premium',
    Icon: Star,
    price: {
      month: 1999,
      year: 19990,
    },
    currency: 'AED',
    tier: 'premium',
    description: 'Ideal for growing businesses with multiple vehicles',
    cars: 25,
    features: [
      'Advanced listing features',
      'Priority support',
      'Advanced analytics',
      'SMS & Email notifications',
      'Premium insurance',
      'Featured listings',
    ],
    popular: true,
    color: 'from-primary to-primary-dark',
  },
  {
    name: 'Elegant',
    Icon: Crown,
    price: {
      month: 4999,
      year: 49990,
    },
    currency: 'AED',
    tier: 'elegant',
    description: 'For established businesses managing large fleets',
    cars: 60,
    features: [
      'Priority support 24/7',
      'Advanced analytics & reports',
      'Premium insurance',
      'Custom branding',
      'Multi-location support',
      'White-label options',
    ],
    popular: false,
    color: 'from-amber-600 to-amber-800',
  },
  {
    name: 'Corporate',
    Icon: Infinity,
    price: null,
    currency: 'AED',
    description: 'Tailored solutions for enterprise-level operations',
    cars: 'unlimited',
    isCorporate: true,
    features: [
      'Enterprise listing features',
      'Dedicated account manager',
      'Premium insurance',
      'Calendar management',
      'API access',
      'Custom integrations',
      'Tailored features',
    ],
    popular: false,
    color: 'from-purple-600 to-purple-900',
  },
];
