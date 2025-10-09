import LeasingCalculator from '@/components/leasing-calculator';
import { Button } from '@/components/ui/button';
import {
  CheckCircle,
  TrendingDown,
  Shield,
  Clock,
  Award,
  Percent,
  FileText,
  ArrowRight,
  Zap,
  DollarSign,
  Calendar,
} from 'lucide-react';

export const metadata = {
  title: 'Car Leasing in Dubai | Flexible Plans | YayaGo',
  description:
    'Get your dream car with our flexible leasing options. No large upfront payment, flexible terms, and hassle-free process. Partner with leading leasing companies in Dubai.',
};

export default function LeasingPage() {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Low Monthly Payments',
      description: 'Spread the cost over time with affordable monthly installments that fit your budget.',
    },
    {
      icon: DollarSign,
      title: 'No Large Down Payment',
      description: 'Get started with minimal upfront costs. Drive your dream car today.',
    },
    {
      icon: Shield,
      title: 'Comprehensive Insurance',
      description: 'Full insurance coverage included in your monthly payment for peace of mind.',
    },
    {
      icon: Calendar,
      title: 'Flexible Terms',
      description: 'Choose from 1 to 5 year lease terms that work best for your situation.',
    },
    {
      icon: Zap,
      title: 'Quick Approval',
      description: 'Fast processing and approval in as little as 24 hours with minimal documentation.',
    },
    {
      icon: Award,
      title: 'Upgrade Options',
      description: 'Upgrade to a newer model anytime during your lease period.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Choose Your Car',
      description: 'Browse our extensive collection and select the vehicle that suits your needs and lifestyle.',
    },
    {
      number: '02',
      title: 'Calculate Your Lease',
      description: 'Use our calculator to determine your monthly payments based on down payment and lease term.',
    },
    {
      number: '03',
      title: 'Submit Application',
      description: 'Click the button below to be redirected to our leasing partner for quick and easy application.',
    },
    {
      number: '04',
      title: 'Get Approved',
      description: 'Receive approval within 24-48 hours with minimal documentation required.',
    },
    {
      number: '05',
      title: 'Drive Away',
      description: 'Complete the paperwork and drive away in your new car the same day.',
    },
  ];

  const features = [
    'Fixed monthly payments',
    'Maintenance packages available',
    'Roadside assistance included',
    'Option to purchase at lease end',
    'Early termination options',
    'Gap insurance available',
    'No hidden fees',
    'Transparent pricing',
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20 px-6 lg:px-8 border-b-2 border-primary'>
        <div className='max-w-7xl mx-auto'>
          <div className='max-w-3xl'>
            <div className='inline-block mb-4'>
              <span className='px-4 py-2 bg-primary/20 text-primary text-sm font-semibold tracking-wide uppercase border border-primary'>
                Flexible Financing
              </span>
            </div>
            <h1 className='text-5xl md:text-6xl font-bold mb-6 tracking-tight'>
              Drive Your Dream Car with Flexible Leasing
            </h1>
            <p className='text-xl text-gray-300 leading-relaxed mb-8'>
              Partner with Dubai's leading leasing companies through YayaGo. Get approved fast, enjoy low monthly
              payments, and drive away in your dream car today.
            </p>
            <div className='flex flex-wrap gap-4'>
              <Button asChild size='lg' className='h-14 px-8 text-lg font-semibold'>
                <a href='#calculator'>
                  Calculate Your Lease
                  <ArrowRight className='ml-2 w-5 h-5' strokeWidth={2} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-white border-b-2 border-gray-200'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>Why Choose Leasing?</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Leasing offers flexibility, affordability, and convenience. Here's why thousands of drivers in Dubai
              choose to lease their vehicles.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className='bg-gray-50 border-2 border-gray-200 p-8 hover:border-primary hover:shadow-lg transition-all group'
              >
                <div className='w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors'>
                  <benefit.icon className='w-7 h-7 text-primary' strokeWidth={2} />
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>{benefit.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-gray-50 border-b-2 border-gray-200'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>How Leasing Works</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Our streamlined process makes it easy to lease your dream car in just a few simple steps.
            </p>
          </div>

          <div className='grid md:grid-cols-5 gap-8'>
            {steps.map((step, index) => (
              <div key={index} className='relative flex flex-col'>
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className='hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/30' />
                )}

                <div className='relative bg-white border-2 border-gray-200 p-6 hover:border-primary transition-all h-full flex flex-col'>
                  <div className='text-5xl font-bold text-primary/20 mb-4'>{step.number}</div>
                  <h3 className='text-lg font-bold text-gray-900 mb-3'>{step.title}</h3>
                  <p className='text-sm text-gray-600 leading-relaxed'>{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-16 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 p-8'>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-6'>
              <div className='flex-shrink-0'>
                <Clock className='w-12 h-12 text-primary' strokeWidth={2} />
              </div>
              <div className='flex-1'>
                <h3 className='text-2xl font-bold text-gray-900 mb-3'>Fast Approval Process</h3>
                <p className='text-gray-700 leading-relaxed'>
                  Our partner leasing companies offer quick approval in 24-48 hours with minimal documentation. All you
                  need is your Emirates ID, driver's license, and proof of income. Bad credit? No problem! We work with
                  multiple lenders to find the best option for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-white border-b-2 border-gray-200'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>
              What's Included in Your Lease
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Our comprehensive leasing packages include everything you need for a worry-free driving experience.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {features.map((feature, index) => (
              <div key={index} className='flex items-center gap-3 p-4 bg-gray-50 border-2 border-gray-200'>
                <CheckCircle className='w-6 h-6 text-green-600 flex-shrink-0' strokeWidth={2} />
                <span className='text-gray-900 font-medium'>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leasing Calculator */}
      <section id='calculator' className='py-20 md:py-24 px-6 lg:px-8 bg-gray-50 border-b-2 border-gray-200'>
        <LeasingCalculator />
      </section>

      {/* CTA Section */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='mb-8'>
            <div className='w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-primary'>
              <FileText className='w-10 h-10 text-primary' strokeWidth={2} />
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 tracking-tight'>Ready to Start Your Leasing Journey?</h2>
            <p className='text-xl text-gray-300 leading-relaxed mb-8'>
              Apply now with our trusted leasing partner and get approved in as little as 24 hours. Drive your dream car
              today with flexible payment options tailored to your needs.
            </p>
          </div>

          <div className='flex justify-center mb-8'>
            <Button asChild size='lg' className='h-16 px-10 text-lg font-semibold'>
              <a href='https://google.com' target='_blank' rel='noopener noreferrer'>
                Apply for Leasing Now
                <ArrowRight className='ml-2 w-5 h-5' strokeWidth={2} />
              </a>
            </Button>
          </div>

          <div className='grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t-2 border-white/20'>
            <div className='flex flex-col items-center'>
              <div className='text-3xl font-bold text-primary mb-2'>24-48h</div>
              <div className='text-gray-300'>Approval Time</div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='text-3xl font-bold text-primary mb-2'>1-5 Years</div>
              <div className='text-gray-300'>Flexible Terms</div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='text-3xl font-bold text-primary mb-2'>100%</div>
              <div className='text-gray-300'>Transparent Process</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
