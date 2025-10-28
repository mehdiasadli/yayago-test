import { TGetUserByIdResponse } from '@/features/users/users.types';
import { Car, CheckCircle, Clock, Eye } from 'lucide-react';

interface ListingsStatsProps {
  addedCars: TGetUserByIdResponse['addedCars'];
}

export default function ListingsStats({ addedCars }: ListingsStatsProps) {
  const total = addedCars.length;

  const active = addedCars.filter((car) => car.status === 'AVAILABLE').length;
  const rented = addedCars.filter((car) => car.status === 'OCCUPIED').length;

  const totalViews = addedCars.reduce((acc, car) => acc + (car.viewCount || 0), 0);

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
      <div className='bg-white border-2 border-gray-200 p-6'>
        <div className='flex items-center gap-3 mb-2'>
          <div className='w-10 h-10 bg-primary/10 flex items-center justify-center'>
            <Car className='w-5 h-5 text-primary' strokeWidth={2} />
          </div>
          <div>
            <div className='text-2xl font-bold text-gray-900'>{total}</div>
            <div className='text-xs text-gray-600'>Total Listings</div>
          </div>
        </div>
      </div>

      <div className='bg-white border-2 border-gray-200 p-6'>
        <div className='flex items-center gap-3 mb-2'>
          <div className='w-10 h-10 bg-green-100 flex items-center justify-center'>
            <CheckCircle className='w-5 h-5 text-green-600' strokeWidth={2} />
          </div>
          <div>
            <div className='text-2xl font-bold text-gray-900'>{active}</div>
            <div className='text-xs text-gray-600'>Active</div>
          </div>
        </div>
      </div>

      <div className='bg-white border-2 border-gray-200 p-6'>
        <div className='flex items-center gap-3 mb-2'>
          <div className='w-10 h-10 bg-blue-100 flex items-center justify-center'>
            <Clock className='w-5 h-5 text-blue-600' strokeWidth={2} />
          </div>
          <div>
            <div className='text-2xl font-bold text-gray-900'>{rented}</div>
            <div className='text-xs text-gray-600'>Rented</div>
          </div>
        </div>
      </div>

      <div className='bg-white border-2 border-gray-200 p-6'>
        <div className='flex items-center gap-3 mb-2'>
          <div className='w-10 h-10 bg-yellow-100 flex items-center justify-center'>
            <Eye className='w-5 h-5 text-yellow-600' strokeWidth={2} />
          </div>
          <div>
            <div className='text-2xl font-bold text-gray-900'>{totalViews}</div>
            <div className='text-xs text-gray-600'>Total Views</div>
          </div>
        </div>
      </div>
    </div>
  );
}
