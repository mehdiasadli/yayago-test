import { Calendar, Heart, DollarSign, Star } from 'lucide-react';
import { TGetUserByIdResponse } from '@/features/users/users.types';

interface FavoritesStatsProps {
  favoriteCount: number;
  availableCarsCount: number;
  featuredCarsCount: number;
  startingFromPrice: number;
}

export default function FavoritesStats({
  favoriteCount,
  availableCarsCount,
  featuredCarsCount,
  startingFromPrice,
}: FavoritesStatsProps) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
      <div className='bg-white border-2 border-gray-200 p-6'>
        <div className='flex items-center gap-3 mb-2'>
          <div className='w-10 h-10 bg-red-100 flex items-center justify-center'>
            <Heart className='w-5 h-5 text-red-600 fill-red-600' strokeWidth={2} />
          </div>
          <div>
            <div className='text-2xl font-bold text-gray-900'>{favoriteCount}</div>
            <div className='text-xs text-gray-600'>Saved Cars</div>
          </div>
        </div>
      </div>

      <div className='bg-white border-2 border-gray-200 p-6'>
        <div className='flex items-center gap-3 mb-2'>
          <div className='w-10 h-10 bg-green-100 flex items-center justify-center'>
            <Calendar className='w-5 h-5 text-green-600' strokeWidth={2} />
          </div>
          <div>
            <div className='text-2xl font-bold text-gray-900'>{availableCarsCount}</div>
            <div className='text-xs text-gray-600'>Available Now</div>
          </div>
        </div>
      </div>

      <div className='bg-white border-2 border-gray-200 p-6'>
        <div className='flex items-center gap-3 mb-2'>
          <div className='w-10 h-10 bg-yellow-100 flex items-center justify-center'>
            <Star className='w-5 h-5 text-yellow-600' strokeWidth={2} />
          </div>
          <div>
            <div className='text-2xl font-bold text-gray-900'>{featuredCarsCount}</div>
            <div className='text-xs text-gray-600'>Featured</div>
          </div>
        </div>
      </div>

      {startingFromPrice > 0 && (
        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-primary/10 flex items-center justify-center'>
              <DollarSign className='w-5 h-5 text-primary' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>₼{startingFromPrice}</div>
              <div className='text-xs text-gray-600'>Starting From</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
