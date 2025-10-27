import { Shield } from 'lucide-react';
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

const termsConditions = [
  'Daily Mileage: 100km per day included. Additional kilometers charged at ₼1.50/km.',
  'Fuel Policy: The vehicle is provided with a full tank and must be returned with a full tank.',
  'Insurance: Comprehensive insurance included with an excess of ₼1,500 per incident.',
  'Late Return: A grace period of 1 hour is provided. After that, late returns are charged at hourly rates.',
  'Cancellation: Free cancellation up to 48 hours before rental start. Cancellations within 48 hours incur a 25% fee.',
];

export default function TermsConditions() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <Shield className='w-4 h-4 text-blue-200' strokeWidth={2} />
          <h2 className='font-bold'>Terms & Conditions</h2>
        </Button>
      </DialogTrigger>
      <DialogContent className='flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5'>
        <DialogHeader className='contents space-y-0 text-left'>
          <DialogTitle className='border-b px-6 py-4 text-base'>Terms & Conditions</DialogTitle>

          <div className='overflow-y-auto'>
            <DialogDescription asChild>
              <div className='space-y-2 px-6 pb-6 pt-6'>
                <ul className='space-y-3'>
                  {termsConditions.map((req, index) => (
                    <li key={index} className='flex items-center gap-2 text-gray-700'>
                      <span className='text-primary font-bold'>•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
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
