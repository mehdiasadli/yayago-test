import { Button } from '@/components/ui/button';
import { Check, X, Star, Zap, Crown, Infinity } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Pricing Plans',
  description:
    'Choose the perfect plan for your car rental business. Flexible pricing plans with powerful features to help you grow.',
};

const plans = [
  {
    name: 'Basic',
    icon: Zap,
    price: 249,
    currency: 'AED',
    period: 'month',
    description: 'Perfect for individuals starting their car rental journey',
    cars: 5,
    extraCarPrice: 49,
    features: [
      'Up to 5 cars',
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
    color: 'from-gray-600 to-gray-800',
  },
  {
    name: 'Premium',
    icon: Star,
    price: 499,
    currency: 'AED',
    period: 'month',
    description: 'Ideal for growing businesses with multiple vehicles',
    cars: 12,
    extraCarPrice: 39,
    features: [
      'Up to 12 cars',
      'Advanced listing features',
      'Priority support',
      'Mobile app access',
      'Advanced analytics',
      'SMS & Email notifications',
      'Secure payments',
      'Premium insurance',
      'Calendar management',
      'Custom branding',
    ],
    unavailable: ['Dedicated account manager', 'API access'],
    popular: true,
    color: 'from-primary to-primary-dark',
  },
  {
    name: 'Elegant',
    icon: Crown,
    price: 999,
    currency: 'AED',
    period: 'month',
    description: 'For established businesses managing large fleets',
    cars: 50,
    extraCarPrice: 29,
    features: [
      'Up to 50 cars',
      'Premium listing features',
      'Priority support 24/7',
      'Mobile & Web app access',
      'Advanced analytics & reports',
      'SMS, Email & Push notifications',
      'Secure payments',
      'Premium insurance',
      'Calendar management',
      'Custom branding',
      'API access',
      'Multi-location support',
    ],
    unavailable: ['Dedicated account manager'],
    popular: false,
    color: 'from-amber-600 to-amber-800',
  },
  {
    name: 'Lord of Cars',
    icon: Infinity,
    price: 2999,
    currency: 'AED',
    period: 'month',
    description: 'Ultimate solution for enterprise-level operations',
    cars: 'unlimited',
    extraCarPrice: 0,
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
      'API access',
      'Multi-location support',
      'White-label solution',
      'Custom integrations',
    ],
    unavailable: [],
    popular: false,
    color: 'from-purple-600 to-purple-900',
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
              Simple Pricing
            </span>
          </div>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight'>
            Choose Your Perfect Plan
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Flexible pricing plans designed to grow with your business. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-4 gap-8'>
            {plans.map((plan, index) => {
              const Icon = plan.icon;
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
                    <div className='absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold uppercase tracking-wider'>
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
                    <div className='flex items-baseline gap-2'>
                      <span className='text-5xl font-bold'>{plan.price}</span>
                      <div className='flex flex-col'>
                        <span className='text-lg font-semibold'>{plan.currency}</span>
                        <span className='text-sm text-white/80'>/{plan.period}</span>
                      </div>
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

                    {/* Features */}
                    <div className='space-y-4 mb-8'>
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

                    {/* CTA Button */}
                    <Link href='/list-your-car'>
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
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className='mt-12 text-center'>
            <p className='text-gray-600 text-sm'>
              All plans include a 14-day free trial. No credit card required.{' '}
              <Link href='/support/contact' className='text-primary hover:underline font-semibold'>
                Need a custom plan?
              </Link>
            </p>
          </div>
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
                className='bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6 hover:border-primary/30 hover:shadow-lg transition-all'
              >
                <div className='flex items-start justify-between mb-4'>
                  <h3 className='text-xl font-bold text-gray-900'>{addon.name}</h3>
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
              <div key={index} className='bg-white border border-gray-200 p-6 hover:border-primary/30 transition-all'>
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
