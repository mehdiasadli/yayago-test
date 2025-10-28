import { TCarStatus } from '@/features/cars/cars.types';
import { Ban, CheckCircle, Clock, EyeOff, TriangleAlert, XCircle } from 'lucide-react';
import { Car, Camera } from 'lucide-react';
import Image from 'next/image';

interface ListingCardImageProps {
  status?: TCarStatus | null;
  imageUrl?: string | null;
  name: string;
}

export default function ListingCardImage({ status, imageUrl, name }: ListingCardImageProps) {
  return (
    <div className='lg:w-80 h-64 lg:h-auto bg-gray-200 flex items-center justify-center flex-shrink-0 relative group'>
      {imageUrl ? (
        <Image src={imageUrl} className='object-cover' alt={name} width={320} height={320} priority />
      ) : (
        <Car className='w-full h-full object-cover text-gray-400' strokeWidth={2} />
      )}

      <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3'>
        <button className='px-4 py-2 bg-white text-gray-900 hover:bg-gray-100 transition-colors flex items-center gap-2'>
          <Camera className='w-4 h-4' />
          Update Photos
        </button>
      </div>

      {/* Status Badge */}
      <div className='absolute top-4 left-4'>
        <StatusBadge status={status} />
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status?: TCarStatus | null }) {
  if (!status) return null;

  switch (status) {
    case 'PENDING':
      return (
        <div className='flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 text-white text-xs font-bold'>
          <Clock className='w-3.5 h-3.5' strokeWidth={2} />
          PENDING
        </div>
      );
    case 'REJECTED':
      return (
        <div className='flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-white text-xs font-bold'>
          <TriangleAlert className='w-3.5 h-3.5 text-red-500' strokeWidth={2} />
          REJECTED
        </div>
      );
    case 'AVAILABLE':
      return (
        <div className='flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-white text-xs font-bold'>
          <CheckCircle className='w-3.5 h-3.5' strokeWidth={2} />
          AVAILABLE
        </div>
      );
    case 'BLOCKED':
      return (
        <div className='flex items-center gap-1.5 px-3 py-1.5 bg-red-500 text-white text-xs font-bold'>
          <Ban className='w-3.5 h-3.5' strokeWidth={2} />
          BLOCKED
        </div>
      );
    case 'INACTIVE':
      return (
        <div className='flex items-center gap-1.5 px-3 py-1.5 bg-gray-500 text-white text-xs font-bold'>
          <XCircle className='w-3.5 h-3.5' strokeWidth={2} />
          INACTIVE
        </div>
      );
    case 'OCCUPIED':
      return (
        <div className='flex items-center gap-1.5 px-3 py-1.5 bg-blue-500 text-white text-xs font-bold'>
          <Car className='w-3.5 h-3.5' strokeWidth={2} />
          RENTED
        </div>
      );
    case 'DISABLED':
      return (
        <div className='flex items-center gap-1.5 px-3 py-1.5 bg-gray-500 text-white text-xs font-bold'>
          <EyeOff className='w-3.5 h-3.5' strokeWidth={2} />
          DISABLED
        </div>
      );
    case 'APPROVED':
      return (
        <div className='flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-white text-xs font-bold'>
          <CheckCircle className='w-3.5 h-3.5' strokeWidth={2} />
          APPROVED
        </div>
      );
    default:
      return null;
  }
}
