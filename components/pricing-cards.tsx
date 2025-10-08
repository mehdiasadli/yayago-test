'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, X, Star, Zap, Crown, Infinity } from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  Zap,
  Star,
  Crown,
  Infinity,
};

interface PricingPlan {
  name: string;
  icon: 'Zap' | 'Star' | 'Crown' | 'Infinity';
  price: number;
  currency: string;
  period: string;
  description: string;
  cars: number | string;
  extraCarPrice: number;
  features: string[];
  unavailable: string[];
  popular: boolean;
  color: string;
}

interface PricingCardsProps {
  plans: PricingPlan[];
}

export function PricingCards({ plans }: PricingCardsProps) {
  const [isYearly, setIsYearly] = useState(false);

  // Calculate yearly price with 20% discount
  const calculateYearlyPrice = (monthlyPrice: number) => {
    const yearlyTotal = monthlyPrice * 12;
    const discountedYearly = yearlyTotal * 0.8; // 20% discount
    return Math.round(discountedYearly);
  };

  const getDisplayPrice = (monthlyPrice: number) => {
    if (isYearly) {
      return calculateYearlyPrice(monthlyPrice);
    }
    return monthlyPrice;
  };

  const getOriginalYearlyPrice = (monthlyPrice: number) => {
    return monthlyPrice * 12;
  };

  return (
    <div>
      {/* Billing Period Switcher */}
      <div className='flex justify-center mb-16'>
        <div className='relative inline-flex items-center bg-white border-2 border-gray-200 p-1.5 shadow-lg'>
          {/* Animated Background */}
          <div
            className={`absolute top-1.5 h-[calc(100%-12px)] bg-primary transition-all duration-300 ease-in-out shadow-md ${
              isYearly ? 'left-[calc(50%+3px)] w-[calc(50%-9px)]' : 'left-1.5 w-[calc(50%-9px)]'
            }`}
          />

          {/* Monthly Button */}
          <button
            onClick={() => setIsYearly(false)}
            className={`relative z-10 px-8 py-3 text-sm font-semibold transition-colors duration-300 ${
              !isYearly ? 'text-white' : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            Monthly
          </button>

          {/* Yearly Button */}
          <button
            onClick={() => setIsYearly(true)}
            className={`relative z-10 px-8 py-3 text-sm font-semibold transition-colors duration-300 flex items-center gap-2 ${
              isYearly ? 'text-white' : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            Yearly
            <span className='inline-flex items-center px-2 py-0.5 bg-green-500 text-white text-xs font-bold'>-20%</span>
          </button>
        </div>
      </div>

      {/* Save Message */}
      {isYearly && (
        <div className='text-center mb-12 animate-in fade-in duration-300'>
          <p className='text-lg font-semibold text-green-600'>
            🎉 Save 20% with yearly billing — That's 2 months free!
          </p>
        </div>
      )}

      {/* Pricing Cards Grid */}
      <div className='grid lg:grid-cols-4 gap-8'>
        {plans.map((plan) => {
          const Icon = iconMap[plan.icon];
          const displayPrice = getDisplayPrice(plan.price);
          const originalYearlyPrice = getOriginalYearlyPrice(plan.price);

          return (
            <div
              key={plan.name}
              className={`relative bg-white border-2 ${
                plan.popular ? 'border-primary shadow-2xl scale-105' : 'border-gray-200 shadow-lg'
              } overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                plan.popular ? '' : 'hover:border-primary/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className='absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold uppercase tracking-wider z-10'>
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-br ${plan.color} text-white p-8`}>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center'>
                    <Icon className='w-6 h-6' strokeWidth={2} />
                  </div>
                  <h3 className='text-2xl font-bold'>{plan.name}</h3>
                </div>
                <p className='text-white/90 text-sm mb-6 leading-relaxed'>{plan.description}</p>

                {/* Pricing */}
                <div className='space-y-2'>
                  {isYearly && (
                    <div className='flex items-center gap-2'>
                      <span className='text-lg text-white/60 line-through'>{originalYearlyPrice}</span>
                      <span className='px-2 py-0.5 bg-green-500 text-white text-xs font-bold'>SAVE 20%</span>
                    </div>
                  )}
                  <div className='flex items-baseline gap-2'>
                    <span className='text-5xl font-bold'>{displayPrice}</span>
                    <div className='flex flex-col'>
                      <span className='text-lg font-semibold'>{plan.currency}</span>
                      <span className='text-sm text-white/80'>/{isYearly ? 'year' : 'month'}</span>
                    </div>
                  </div>
                  {isYearly && <p className='text-xs text-white/70'>{plan.price} AED/month billed annually</p>}
                </div>
              </div>

              {/* Body */}
              <div className='p-8'>
                {/* Cars Info */}
                <div className='mb-6 pb-6 border-b border-gray-200'>
                  <div className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2'>
                    Vehicle Capacity
                  </div>
                  <div className='text-2xl font-bold text-gray-900 mb-1'>
                    {typeof plan.cars === 'number' ? `Up to ${plan.cars} cars` : `${plan.cars} cars`}
                  </div>
                  {typeof plan.cars === 'number' && (
                    <div className='text-sm text-gray-600'>+{plan.extraCarPrice} AED per additional car</div>
                  )}
                </div>

                {/* CTA Button - Moved above features */}
                <Link href='/auth/register' className='block mb-6'>
                  <Button
                    className={`w-full h-12 text-base font-semibold ${
                      plan.popular
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    } transition-all duration-300`}
                  >
                    Get Started
                  </Button>
                </Link>

                {/* Features */}
                <div className='space-y-3'>
                  {plan.features.map((feature) => (
                    <div key={feature} className='flex items-start gap-3'>
                      <div className='w-5 h-5 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5'>
                        <Check className='w-3.5 h-3.5 text-primary' strokeWidth={3} />
                      </div>
                      <span className='text-sm text-gray-700'>{feature}</span>
                    </div>
                  ))}
                  {plan.unavailable.map((feature) => (
                    <div key={feature} className='flex items-start gap-3 opacity-40'>
                      <div className='w-5 h-5 bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5'>
                        <X className='w-3.5 h-3.5 text-gray-400' strokeWidth={3} />
                      </div>
                      <span className='text-sm text-gray-500 line-through'>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className='mt-12 text-center space-y-2'>
        <p className='text-gray-600 text-sm'>
          All plans include a 14-day free trial. No credit card required.{' '}
          <Link href='/support/contact' className='text-primary hover:underline font-semibold'>
            Need a custom plan?
          </Link>
        </p>
        {isYearly && (
          <p className='text-sm text-gray-500'>
            Yearly subscriptions are billed annually. You can cancel anytime and receive a prorated refund.
          </p>
        )}
      </div>
    </div>
  );
}
