'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PricingCards } from '@/components/pricing-cards';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { plans } from '@/data/pricing';
import { parseAsBoolean, useQueryState } from 'nuqs';

const addons = [
  {
    name: 'Featured Cars',
    description: 'Highlight your cars on the homepage and search results',
    price: 99,
    currency: 'AED',
    period: 'month',
    perCar: true,
  },
];

export default function PricingContent() {
  const [isYearly, setIsYearly] = useQueryState(
    'yearly',
    parseAsBoolean.withDefault(false).withOptions({
      clearOnDefault: true,
      history: 'replace',
    })
  );

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
          <PricingCards plans={plans} />
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
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight'>Have questions?</h2>
          </div>

          <div className='mt-12 text-center'>
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
