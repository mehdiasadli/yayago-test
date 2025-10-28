import { AlertCircle, Ban, CheckCircle, Clock, EyeOff, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TCarStatus } from '@/features/cars/cars.types';
import Link from 'next/link';

interface ListingCardStatusInfoProps {
  status?: TCarStatus | null;
}

export default function ListingCardStatusInfo({ status }: ListingCardStatusInfoProps) {
  if (!status) return null;

  if (status === 'APPROVED') {
    return (
      <div className='bg-blue-50 border border-blue-200 p-3 mb-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-sm'>
            <CheckCircle className='w-4 h-4 text-blue-700' strokeWidth={2} />
            <span className='text-blue-900 font-semibold'>Car is approved. You can make it available for rent.</span>
          </div>
          <Button size='sm' className='text-xs bg-green-500 hover:bg-green-600'>
            Make Available
          </Button>
        </div>
      </div>
    );
  }

  if (status === 'OCCUPIED') {
    return (
      <div className='bg-blue-50 border border-blue-200 p-3 mb-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-sm'>
            <Clock className='w-4 h-4 text-blue-700' strokeWidth={2} />
            <span className='text-blue-900 font-semibold'>Car is currently rented.</span>
          </div>
          <Button size='sm' className='text-xs bg-blue-500 hover:bg-blue-600'>
            View Rental
          </Button>
        </div>
      </div>
    );
  }

  if (status === 'PENDING') {
    return (
      <div className='bg-yellow-50 border border-yellow-200 p-3 mb-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-sm'>
            <AlertCircle className='w-4 h-4 text-yellow-700' strokeWidth={2} />
            <span className='text-yellow-900 font-semibold'>
              Car is pending approval. Please wait for it to be approved.
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'AVAILABLE') {
    return (
      <div className='bg-green-50 border border-green-200 p-3 mb-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-sm'>
            <CheckCircle className='w-4 h-4 text-green-700' strokeWidth={2} />
            <span className='text-green-900 font-semibold'>Car is available for rent.</span>
          </div>
          <div className='flex items-center gap-2'>
            <Button size='sm' className='text-xs bg-red-500 hover:bg-red-600'>
              Inactivate
            </Button>
            <Button size='sm' className='text-xs bg-gray-500 hover:bg-gray-600'>
              Disable
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'DISABLED') {
    return (
      <div className='bg-gray-50 border border-gray-200 p-3 mb-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-sm'>
            <EyeOff className='w-4 h-4 text-gray-700' strokeWidth={2} />
            <span className='text-gray-900 font-semibold'>
              Car is disabled. You can enable it to make it available for rent.
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <Button size='sm' className='text-xs bg-green-500 hover:bg-green-600'>
              Activate
            </Button>
            <Button size='sm' className='text-xs bg-red-500 hover:bg-red-600'>
              Inactivate
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'INACTIVE') {
    return (
      <div className='bg-red-50 border border-red-200 p-3 mb-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-sm'>
            <XCircle className='w-4 h-4 text-red-700' strokeWidth={2} />
            <span className='text-red-900 font-semibold'>
              Car is inactivated. You can activate it to make it available for rent.
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <Button size='sm' className='text-xs bg-green-500 hover:bg-green-600'>
              Activate
            </Button>
            <Button size='sm' className='text-xs bg-gray-500 hover:bg-gray-600'>
              Disable
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'REJECTED') {
    return (
      <div className='bg-red-50 border border-red-200 p-3 mb-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-sm'>
            <XCircle className='w-4 h-4 text-red-700' strokeWidth={2} />
            <span className='text-red-900 font-semibold'>
              Car is rejected by admins. You can edit it and submit it again.
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <Button size='sm' className='text-xs bg-amber-500 hover:bg-amber-600'>
              Edit Listing
            </Button>
            <Button asChild size='sm' className='text-xs bg-gray-500 hover:bg-gray-600'>
              <Link href='/support/contact'>Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'BLOCKED') {
    return (
      <div className='bg-red-50 border border-red-200 p-3 mb-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-sm'>
            <Ban className='w-4 h-4 text-red-700' strokeWidth={2} />
            <span className='text-red-900 font-semibold'>
              Car is blocked by admins. You can contact support to unblock it.
            </span>
          </div>
          <Button asChild size='sm' className='text-xs bg-gray-500 hover:bg-gray-600'>
            <Link href='/support/contact'>Contact Support</Link>
          </Button>
        </div>
      </div>
    );
  }
}
