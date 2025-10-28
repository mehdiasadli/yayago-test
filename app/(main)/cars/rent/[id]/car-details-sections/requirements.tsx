import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const requirements = [
  "Valid Driver's License (minimum 1 year)",
  'Passport or Emirates ID',
  'Minimum age: 21 years',
  'Credit card for security deposit',
  'International drivers must have IDP',
];

export default function Requirements() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='link'>
          <h2 className='font-bold'>Requirements</h2>
        </Button>
      </DialogTrigger>
      <DialogContent className='flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5'>
        <DialogHeader className='contents space-y-0 text-left'>
          <DialogTitle className='border-b px-6 py-4 text-base'>Requirements</DialogTitle>

          <div className='overflow-y-auto'>
            <DialogDescription asChild>
              <div className='space-y-2 px-6 pb-6 pt-6'>
                <ul className='space-y-3'>
                  {requirements.map((req, index) => (
                    <li key={index} className='flex items-center gap-2 text-gray-700'>
                      <span className='text-primary font-bold'>•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </DialogDescription>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
