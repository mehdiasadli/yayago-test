import { CheckCircle } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <CheckCircle className='w-4- h-4 text-green-200' strokeWidth={2} />
          <h2 className='font-bold'>What's Included</h2>
        </Button>
      </DialogTrigger>
      <DialogContent className='flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5'>
        <DialogHeader className='contents space-y-0 text-left'>
          <DialogTitle className='border-b px-6 py-4 text-base'>What's Included</DialogTitle>

          <div className='overflow-y-auto'>
            <DialogDescription asChild>
              <div className='space-y-2 px-6 pb-6 pt-6'>
                {inclusions.map((item, index) => (
                  <div key={index} className='flex items-center gap-2 text-gray-700'>
                    <CheckCircle className='w-5 h-5 text-green-600 flex-shrink-0' strokeWidth={2} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </DialogDescription>
            <DialogFooter className='px-6 pb-6 sm:justify-start'>
              <DialogClose asChild>
                <Button type='button'>Close</Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
