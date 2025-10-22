'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { AnimateIcon } from '../animate-ui/icons/icon';
import { ChevronRight } from '../animate-ui/icons/chevron-right';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const faqs = [
  {
    id: '1',
    question: 'How do I rent a car on YayaGo?',
    answer:
      'Renting a car is simple! Browse our available vehicles, select your desired dates and location, complete the booking form with your details, and confirm your payment. You can pick up your car at the scheduled time from your chosen location.',
  },
  {
    id: '2',
    question: 'What documents do I need to rent a car?',
    answer:
      "You'll need a valid driver's license (held for at least 1 year), a government-issued ID or passport, and a credit card for the security deposit. International visitors may need an International Driving Permit (IDP) depending on their country of origin.",
  },
  {
    id: '3',
    question: 'Is insurance included in the rental price?',
    answer:
      'Yes, basic insurance coverage is included in all our rental prices. This covers collision damage waiver (CDW) and third-party liability. Additional coverage options are available for purchase during booking for extra peace of mind.',
  },
  {
    id: '4',
    question: 'Can I cancel or modify my reservation?',
    answer:
      'Yes, you can cancel or modify your reservation up to 24 hours before your scheduled pickup time for a full refund. Cancellations made within 24 hours may be subject to a cancellation fee. Please check our cancellation policy for detailed terms.',
  },
  {
    id: '5',
    question: 'How much can I earn by listing my car?',
    answer:
      'Earnings vary based on your car type, location, and availability. On average, car owners earn $2,000-$3,500 per month. Luxury and high-demand vehicles can earn even more. YayaGo provides 100% insurance coverage and 24/7 support for all listed vehicles.',
  },
  {
    id: '6',
    question: 'What is your fuel policy?',
    answer:
      'We operate on a full-to-full fuel policy. You receive the car with a full tank and return it with a full tank. If you return the car without refueling, a refueling charge plus a service fee will be applied to your final bill.',
  },
];

export default function FAQs() {
  return (
    <section
      id='faqs'
      className='relative py-20 md:py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden'
    >
      {/* Background Decorations */}
      <div className='absolute top-20 -right-32 w-96 h-96 bg-primary/5 blur-3xl' />
      <div className='absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 blur-3xl' />

      <div className='relative max-w-5xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12 md:mb-16'>
          <div className='inline-block mb-4'>
            <span className='px-4 py-2 bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase'>
              Got Questions?
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight'>
            Frequently Asked Questions
          </h2>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
            Find answers to common questions about renting and listing cars on YayaGo
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className='mb-12'>
          <Accordion type='single' collapsible className='space-y-4'>
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className='bg-white border border-gray-200 px-6 md:px-8 shadow-xs hover:shadow-sm hover:border-primary/30 transition-all duration-300 data-[state=open]:shadow-lg data-[state=open]:border-primary/50'
              >
                <AccordionTrigger className='text-left py-6 hover:no-underline group'>
                  <span className='text-lg md:text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 pr-4'>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className='pb-6 pt-2'>
                  <p className='text-base md:text-lg text-gray-600 leading-relaxed'>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* View All FAQs Button */}
        <div className='text-center'>
          <AnimateIcon animateOnHover>
            <Button asChild className='h-12 w-50' variant='link'>
              <Link href='/support/faq'>
                <span>View All FAQs</span>
                <ChevronRight
                  className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1'
                  strokeWidth={2.5}
                />
              </Link>
            </Button>
          </AnimateIcon>
        </div>

        {/* Contact CTA */}
        <div className='mt-12 text-center p-8 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20'>
          <h3 className='text-2xl font-bold text-gray-900 mb-2'>Still have questions?</h3>
          <p className='text-gray-600 mb-6'>Our support team is here to help you 24/7</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild variant='default' size='lg'>
              <Link href='/support/contact'>Contact Support</Link>
            </Button>
            <Button asChild variant='outline' size='lg'>
              <Link href='/support/help'>Visit Help Center</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
