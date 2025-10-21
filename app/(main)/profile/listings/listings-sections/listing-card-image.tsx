import { CheckCircle, Clock } from 'lucide-react';
import { Car, Camera } from 'lucide-react';

interface ListingCardImageProps {
  available: boolean;
}

export default function ListingCardImage({ available }: ListingCardImageProps) {
  return (
    <div className='lg:w-80 h-64 lg:h-auto bg-gray-200 flex items-center justify-center flex-shrink-0 relative group'>
      <Car className='w-16 h-16 text-gray-400' strokeWidth={2} />
      <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3'>
        <button className='px-4 py-2 bg-white text-gray-900 hover:bg-gray-100 transition-colors flex items-center gap-2'>
          <Camera className='w-4 h-4' />
          Update Photos
        </button>
      </div>

      {/* Status Badge */}
      <div className='absolute top-4 left-4'>
        {available ? (
          <div className='flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-white text-xs font-bold'>
            <CheckCircle className='w-3.5 h-3.5' strokeWidth={2} />
            ACTIVE
          </div>
        ) : (
          <div className='flex items-center gap-1.5 px-3 py-1.5 bg-blue-500 text-white text-xs font-bold'>
            <Clock className='w-3.5 h-3.5' strokeWidth={2} />
            RENTED
          </div>
        )}
      </div>
    </div>
  );
}
