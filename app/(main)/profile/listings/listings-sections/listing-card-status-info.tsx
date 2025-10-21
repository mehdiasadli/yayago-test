import { AlertCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ListingCardStatusInfoProps {
  status: 'rented' | 'pending' | 'active' | 'inactive' | 'blocked';
  availability?: string;
}

export default function ListingCardStatusInfo({ status, availability }: ListingCardStatusInfoProps) {
  if (status === 'rented') {
    return (
      <div className='bg-blue-50 border border-blue-200 p-3 mb-4'>
        <div className='flex items-center gap-2 text-sm'>
          <Clock className='w-4 h-4 text-blue-700' strokeWidth={2} />
          <span className='text-blue-900 font-semibold'>{availability}</span>
        </div>
      </div>
    );
  }

  if (status === 'pending') {
    return (
      <div className='bg-yellow-50 border border-yellow-200 p-3 mb-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-sm'>
            <AlertCircle className='w-4 h-4 text-yellow-700' strokeWidth={2} />
            <span className='text-yellow-900 font-semibold'>Action Required: Update documents</span>
          </div>
          <Button size='sm' variant='outline' className='text-xs'>
            Update Now
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
