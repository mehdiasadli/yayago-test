'use client';

import { Button } from '@/components/ui/button';
import { PricingPlan } from '@/data/pricing';
import { Check, Mail } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

function getCheckoutUrl(plan: PricingPlan, isYearly: boolean, userEmail?: string, userId?: string) {
  if (!userEmail || !userId) {
    return `/auth?callbackUrl=${encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL + `/pricing`)}`;
  }

  if (plan.isCorporate || !plan.tier) {
    return '/support/contact';
  }

  const interval = isYearly ? 'year' : 'month';
  const tier = plan.tier;
  const emailParam = encodeURIComponent(userEmail);
  const successRedirectUrl = encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL + '/');

  return `/checkout?tier=${tier}&interval=${interval}&email=${emailParam}&userId=${userId}&successRedirectUrl=${successRedirectUrl}`;
}

interface PricingCardsProps {
  plans: PricingPlan[];
  isYearly?: boolean;
}

export function PricingCards({ plans, isYearly = false }: PricingCardsProps) {
  const { data: session } = useSession();

  return (
    <div>
      {/* Pricing Cards Grid */}
      <div className='grid lg:grid-cols-4 gap-8'>
        {plans.map((plan) => {
          return (
            <div
              key={plan.name}
              className={`relative bg-white border-2 rounded-2xl ${
                plan.popular ? 'border-primary shadow-2xl scale-[1.05]' : 'border-gray-200 shadow-lg'
              } overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                plan.popular ? '' : 'hover:border-primary/50 hover:-translate-y-1'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className='absolute top-6 -right-10 rotate-45 bg-primary text-primary-foreground px-12 py-1.5 text-xs font-bold uppercase tracking-wider z-10 shadow-lg'>
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-br ${plan.color} text-white p-8 relative overflow-hidden`}>
                {/* Decorative Pattern */}
                <div className='absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16' />
                <div className='absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12' />

                <div className='relative z-10'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg'>
                      <plan.Icon className='w-7 h-7' strokeWidth={2} />
                    </div>
                    <h3 className='text-2xl font-bold'>{plan.name}</h3>
                  </div>
                  <p className='text-white/90 text-sm mb-6 leading-relaxed min-h-[40px]'>{plan.description}</p>

                  {/* Pricing */}
                  {plan.isCorporate ? (
                    <div className='space-y-2'>
                      <div className='text-4xl font-bold'>Custom Pricing</div>
                      <p className='text-sm text-white/80'>Tailored to your needs</p>
                    </div>
                  ) : (
                    <div className='space-y-2'>
                      <div className='flex items-baseline gap-2'>
                        <span className='text-5xl font-bold'>{isYearly ? plan.price?.year : plan.price?.month}</span>
                        <div className='flex flex-col'>
                          <span className='text-lg font-semibold'>{plan.currency}</span>
                          <span className='text-sm text-white/80'>/{isYearly ? 'year' : 'month'}</span>
                        </div>
                      </div>
                      {isYearly && (
                        <p className='text-xs text-white/70'>
                          {Math.round((plan.price?.year || 0) / 12)} AED/month billed annually
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className='p-8'>
                {/* Cars Info */}
                <div className='mb-6 pb-6 border-b-2 border-gray-100'>
                  <div className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2'>
                    Vehicle Capacity
                  </div>
                  <div className='text-2xl font-bold text-gray-900 mb-1'>
                    {typeof plan.cars === 'number' ? `Up to ${plan.cars} cars` : `${plan.cars} cars`}
                  </div>
                  {plan.extraCarPrice && (
                    <div className='text-sm text-gray-600 mt-2'>+{plan.extraCarPrice} AED per additional car</div>
                  )}
                </div>

                {/* CTA Button */}
                {plan.isCorporate ? (
                  <Link href='/support/contact' className='block mb-6'>
                    <Button
                      variant='outline'
                      className='w-full h-12 text-base font-semibold border-2 hover:bg-gray-50 transition-all duration-300'
                    >
                      <Mail className='w-5 h-5 mr-2' />
                      Contact Us
                    </Button>
                  </Link>
                ) : (
                  <Link
                    href={getCheckoutUrl(plan, isYearly, session?.user?.email, session?.user?.id)}
                    className='block mb-6'
                  >
                    <Button className='w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300'>
                      Get Started
                    </Button>
                  </Link>
                )}

                {/* Features */}
                <div className='space-y-3'>
                  <div className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3'>
                    What's included:
                  </div>
                  {plan.features.map((feature) => (
                    <div key={feature} className='flex items-start gap-3'>
                      <div className='w-5 h-5 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5'>
                        <Check className='w-3.5 h-3.5 text-primary' strokeWidth={3} />
                      </div>
                      <span className='text-sm text-gray-700 leading-relaxed'>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className='mt-16 text-center space-y-3'>
        <p className='text-gray-600 text-base'>
          All plans include a <span className='font-semibold text-gray-900'>14-day free trial</span>. No credit card
          required.
        </p>
        <p className='text-sm text-gray-500'>
          Need a custom enterprise solution?{' '}
          <Link href='/support/contact' className='text-primary hover:underline font-semibold'>
            Contact our sales team
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
