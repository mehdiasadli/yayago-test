import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { CheckCircle } from 'lucide-react';

const inclusions = [
  'Comprehensive Insurance',
  'Roadside Assistance 24/7',
  'Free Delivery & Pickup',
  'Unlimited Support',
  'GPS Navigation Included',
  'Child Seat Available',
  'Additional Driver Option',
  'Flexible Cancellation',
];

export default function WhatsIncluded() {
  return (
    <div className='bg-white border-2 border-gray-200 px-6 py-3'>
      <Accordion type='single' collapsible>
        <AccordionItem value='whats-included'>
          <AccordionTrigger>
            <div className='flex items-center gap-2'>
              <CheckCircle className='w-6 h-6 text-green-600' strokeWidth={2} />
              <h2 className='text-lg font-bold text-gray-900'>What's Included</h2>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              {inclusions.map((item, index) => (
                <div key={index} className='flex items-center gap-2 text-gray-700'>
                  <CheckCircle className='w-5 h-5 text-green-600 flex-shrink-0' strokeWidth={2} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
