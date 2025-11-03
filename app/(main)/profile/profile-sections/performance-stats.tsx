import { TGetUserByIdResponse } from '@/features/users/users.types';
import { Activity, TrendingUp, Star, Calendar } from 'lucide-react';

interface PerformanceStatsProps {
  addedCars: TGetUserByIdResponse['addedCars'];
}

export default function PerformanceStats({ addedCars }: PerformanceStatsProps) {
  const currentlyRented = addedCars.filter((car) => !car.available);

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
      {/* <div className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 hover:shadow-lg transition-all'>
        <div className='flex items-center justify-between mb-3'>
          <div className='w-10 h-10 bg-green-100 flex items-center justify-center'>
            <TrendingUp className='w-5 h-5 text-green-600' strokeWidth={2} />
          </div>
        </div>
        <div className='text-2xl md:text-3xl font-bold text-gray-900 mb-1'>12,450 AED</div>
        <div className='text-sm text-gray-600 mb-2'>Total Earnings</div>
        <div className='text-xs text-green-600 font-semibold'>+18% this month</div>
      </div> */}

      <div className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 hover:shadow-lg transition-all'>
        <div className='flex items-center justify-between mb-3'>
          <div className='w-10 h-10 bg-blue-100 flex items-center justify-center'>
            <Activity className='w-5 h-5 text-blue-600' strokeWidth={2} />
          </div>
        </div>
        <div className='text-2xl md:text-3xl font-bold text-gray-900 mb-1'>{addedCars.length}</div>
        <div className='text-sm text-gray-600 mb-2'>Active Listings</div>
        <div className='text-xs text-gray-500'>{currentlyRented.length} rented currently</div>
      </div>

      {/* <div className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 hover:shadow-lg transition-all'>
        <div className='flex items-center justify-between mb-3'>
          <div className='w-10 h-10 bg-yellow-100 flex items-center justify-center'>
            <Star className='w-5 h-5 text-yellow-600' strokeWidth={2} />
          </div>
        </div>
        <div className='text-2xl md:text-3xl font-bold text-gray-900 mb-1'>4.8</div>
        <div className='text-sm text-gray-600 mb-2'>Average Rating</div>
        <div className='text-xs text-gray-500'>24 reviews</div>
      </div> */}

      {/* <div className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 hover:shadow-lg transition-all'>
        <div className='flex items-center justify-between mb-3'>
          <div className='w-10 h-10 bg-purple-100 flex items-center justify-center'>
            <Calendar className='w-5 h-5 text-purple-600' strokeWidth={2} />
          </div>
        </div>
        <div className='text-2xl md:text-3xl font-bold text-gray-900 mb-1'>28</div>
        <div className='text-sm text-gray-600 mb-2'>Total Rentals</div>
        <div className='text-xs text-gray-500'>12 this month</div>
      </div> */}
    </div>
  );
}
