'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PricingCards } from '@/components/pricing-cards';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

type IconName = 'Zap' | 'Star' | 'Crown' | 'Infinity';

interface PlanConfig {
  name: string;
  icon: IconName;
  price: number | null;
  currency: string;
  period: string;
  description: string;
  cars: number | string;
  bonus?: string;
  extraCarPrice?: number;
  features: string[];
  unavailable: string[];
  popular: boolean;
  color: string;
  isCorporate?: boolean;
}

const getPlans = (isYearly: boolean): PlanConfig[] => [
  {
    name: 'Basic',
    icon: 'Zap',
    price: isYearly ? 9990 : 999,
    currency: 'AED',
    period: isYearly ? 'year' : 'month',
    description: 'Perfect for individuals starting their car rental journey',
    cars: 10,
    bonus: isYearly ? '+5 bonus cars for yearly subscribers' : '+2 bonus cars for first joiners',
    extraCarPrice: 99,
    features: [
      'Up to 10 cars',
      isYearly ? '5 bonus cars included' : '2 bonus cars for first joiners',
      'Basic listing features',
      'Standard support',
      'Mobile app access',
      'Basic analytics',
      'Email notifications',
      'Secure payments',
      'Standard insurance',
    ],
    unavailable: ['Priority support', 'Featured listings', 'Advanced analytics', 'Dedicated account manager'],
    popular: false,
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Premium',
    icon: 'Star',
    price: isYearly ? 19990 : 1999,
    currency: 'AED',
    period: isYearly ? 'year' : 'month',
    description: 'Ideal for growing businesses with multiple vehicles',
    cars: 25,
    extraCarPrice: 79,
    features: [
      'Up to 25 cars',
      'Advanced listing features',
      'Priority support',
      'Mobile app access',
      'Advanced analytics',
      'SMS & Email notifications',
      'Secure payments',
      'Premium insurance',
      'Calendar management',
      'Custom branding',
      'Featured listings',
    ],
    unavailable: ['Dedicated account manager', 'API access'],
    popular: true,
    color: 'from-primary to-primary-dark',
  },
  {
    name: 'Elegant',
    icon: 'Crown',
    price: isYearly ? 49990 : 4999,
    currency: 'AED',
    period: isYearly ? 'year' : 'month',
    description: 'For established businesses managing large fleets',
    cars: 60,
    extraCarPrice: 69,
    features: [
      'Up to 60 cars',
      'Premium listing features',
      'Priority support 24/7',
      'Mobile & Web app access',
      'Advanced analytics & reports',
      'SMS, Email & Push notifications',
      'Secure payments',
      'Premium insurance',
      'Calendar management',
      'Custom branding',
      'Featured listings',
      'API access',
      'Multi-location support',
      'White-label options',
    ],
    unavailable: [],
    popular: false,
    color: 'from-amber-600 to-amber-800',
  },
  {
    name: 'Corporate',
    icon: 'Infinity',
    price: null,
    currency: 'AED',
    period: 'custom',
    description: 'Tailored solutions for enterprise-level operations',
    cars: 'unlimited',
    features: [
      'Unlimited cars',
      'Enterprise listing features',
      'Dedicated account manager',
      'Priority support 24/7',
      'Mobile & Web app access',
      'Advanced analytics & reports',
      'SMS, Email & Push notifications',
      'Secure payments',
      'Premium insurance',
      'Calendar management',
      'Custom branding',
      'Featured listings',
      'API access',
      'Multi-location support',
      'White-label solution',
      'Custom integrations',
      'Tailored features',
    ],
    unavailable: [],
    popular: false,
    color: 'from-purple-600 to-purple-900',
    isCorporate: true,
  },
];

const addons = [
  {
    name: 'Featured Cars',
    description: 'Highlight your cars on the homepage and search results',
    price: 99,
    currency: 'AED',
    period: 'month',
    perCar: true,
  },
  {
    name: 'Premium Photos',
    description: 'Professional photography service for your vehicles',
    price: 299,
    currency: 'AED',
    period: 'per car',
    perCar: false,
  },
  {
    name: 'Social Media Boost',
    description: 'Promote your cars on our social media channels',
    price: 199,
    currency: 'AED',
    period: 'month',
    perCar: false,
  },
  {
    name: 'Priority Placement',
    description: 'Your cars appear first in search results',
    price: 149,
    currency: 'AED',
    period: 'month',
    perCar: false,
  },
  {
    name: 'SEO Optimization',
    description: 'Optimize your listings for search engines',
    price: 249,
    currency: 'AED',
    period: 'month',
    perCar: false,
  },
  {
    name: 'Advanced Insurance',
    description: 'Enhanced insurance coverage for peace of mind',
    price: 399,
    currency: 'AED',
    period: 'month',
    perCar: false,
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const plans = getPlans(isYearly);

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
        {/* Animated Background Pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse' />
          <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000' />
        </div>

        {/* Grid Pattern */}
        <div
          className='absolute inset-0 opacity-5'
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className='relative max-w-4xl mx-auto text-center'>
          <div className='inline-block mb-6'>
            <span className='px-4 py-2 bg-primary/20 text-primary-foreground text-sm font-semibold tracking-wide uppercase backdrop-blur-sm border border-primary/30'>
              Simple & Transparent Pricing
            </span>
          </div>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight'>
            Choose Your Perfect Plan
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8'>
            Flexible pricing plans designed to grow with your business. No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className='flex items-center justify-center gap-4 mt-8'>
            <Label
              htmlFor='billing-toggle'
              className={`text-base font-semibold transition-colors ${!isYearly ? 'text-white' : 'text-gray-400'}`}
            >
              Monthly
            </Label>
            <Switch
              id='billing-toggle'
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className='data-[state=checked]:bg-primary'
            />
            <Label
              htmlFor='billing-toggle'
              className={`text-base font-semibold transition-colors ${isYearly ? 'text-white' : 'text-gray-400'}`}
            >
              Yearly
            </Label>
            {isYearly && (
              <span className='ml-2 px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full border border-green-500/30'>
                Save up to 17%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto'>
          <PricingCards plans={plans} isYearly={isYearly} />
        </div>
      </section>

      {/* Add-ons Section */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-white border-t border-gray-100'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-block mb-4'>
              <span className='px-4 py-2 bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase'>
                Boost Your Success
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight'>Optional Add-ons</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Enhance your listing with powerful add-ons to maximize visibility and bookings
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {addons.map((addon) => (
              <div
                key={addon.name}
                className='group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 p-6 rounded-xl hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
              >
                <div className='flex items-start justify-between mb-4'>
                  <h3 className='text-xl font-bold text-gray-900 group-hover:text-primary transition-colors'>
                    {addon.name}
                  </h3>
                  <div className='text-right'>
                    <div className='text-2xl font-bold text-primary'>{addon.price}</div>
                    <div className='text-xs text-gray-500 uppercase'>
                      {addon.currency}/{addon.period}
                    </div>
                  </div>
                </div>
                <p className='text-sm text-gray-600 leading-relaxed'>{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight'>
              Frequently Asked Questions
            </h2>
            <p className='text-xl text-gray-600'>Everything you need to know about our pricing</p>
          </div>

          <div className='space-y-6'>
            {[
              {
                question: 'Can I change my plan later?',
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the charges accordingly.",
              },
              {
                question: 'What happens if I exceed my car limit?',
                answer:
                  "You'll be charged the additional car rate specified in your plan. Alternatively, you can upgrade to a higher plan for better value.",
              },
              {
                question: 'Is there a setup fee?',
                answer:
                  'No, there are no setup fees or hidden charges. You only pay the monthly subscription fee and any add-ons you choose.',
              },
              {
                question: 'Can I cancel my subscription?',
                answer:
                  "Yes, you can cancel anytime. Your subscription remains active until the end of your billing period, and you won't be charged again.",
              },
              {
                question: 'What are the benefits of yearly billing?',
                answer:
                  'Yearly billing saves you up to 17% compared to monthly billing. Plus, Basic plan subscribers get 5 bonus cars instead of 2!',
              },
              {
                question: 'Do you offer refunds?',
                answer:
                  "We offer a 14-day money-back guarantee. If you're not satisfied within the first 14 days, we'll refund your payment in full.",
              },
              {
                question: 'What payment methods do you accept?',
                answer:
                  'We accept all major credit cards, debit cards, and bank transfers. All payments are processed securely.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className='bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-primary/30 hover:shadow-lg transition-all duration-300'
              >
                <h3 className='text-lg font-bold text-gray-900 mb-3'>{faq.question}</h3>
                <p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className='mt-12 text-center'>
            <p className='text-gray-600 mb-6'>Still have questions?</p>
            <Link href='/support/contact'>
              <Button variant='outline' size='lg' className='hover:bg-primary hover:text-primary-foreground'>
                Contact Our Sales Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
