import type { Metadata } from 'next';
import { Suspense } from 'react';
import { faqs } from '@/data/faqs';
import FAQContent from '@/components/faq-content';
import { HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ)',
  description:
    'Find answers to common questions about Yayago car rental services. Learn about booking, payments, insurance, requirements, and more.',
  keywords: [
    'FAQ',
    'frequently asked questions',
    'car rental help',
    'Yayago support',
    'booking questions',
    'rental policy',
    'Dubai car rental FAQ',
  ],
  openGraph: {
    title: 'Frequently Asked Questions | Yayago',
    description: 'Find answers to common questions about Yayago car rental services.',
    type: 'website',
  },
};

export default function FAQPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-16 px-6 lg:px-8 border-b-2 border-primary'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center'>
            {/* Icon */}
            <div className='w-20 h-20 bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-6'>
              <HelpCircle className='w-10 h-10 text-primary' strokeWidth={2} />
            </div>

            {/* Badge */}
            <div className='inline-block mb-4'>
              <span className='px-4 py-2 bg-primary/20 text-primary text-sm font-semibold tracking-wide uppercase border border-primary'>
                Help Center
              </span>
            </div>

            {/* Title */}
            <h1 className='text-5xl md:text-6xl font-bold mb-6 tracking-tight'>Frequently Asked Questions</h1>

            {/* Description */}
            <p className='text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto'>
              Find quick answers to the most common questions about booking, payments, insurance, and more. Can't find
              what you're looking for? Our support team is always ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className='bg-white border-b-2 border-gray-200 py-8'>
        <div className='max-w-5xl mx-auto px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='text-center'>
              <div className='text-4xl font-bold text-primary mb-2'>{faqs.length}+</div>
              <div className='text-gray-600 font-medium'>Questions Answered</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-primary mb-2'>24/7</div>
              <div className='text-gray-600 font-medium'>Support Available</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-primary mb-2'>&lt; 2 min</div>
              <div className='text-gray-600 font-medium'>Average Response Time</div>
            </div>
          </div>
        </div>
      </section>

      <Suspense
        fallback={
          <div className='max-w-5xl mx-auto px-6 lg:px-8 py-12'>
            <div className='text-center py-20'>
              <div className='inline-block animate-spin w-12 h-12 border-4 border-primary border-t-transparent'></div>
              <p className='mt-4 text-gray-600'>Loading FAQs...</p>
            </div>
          </div>
        }
      >
        <FAQContent faqs={faqs} />
      </Suspense>
    </div>
  );
}
