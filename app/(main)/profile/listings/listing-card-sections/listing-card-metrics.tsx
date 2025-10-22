import { ReviewsApi } from '@/features/reviews/reviews.api';
import { Eye, Star } from 'lucide-react';

interface ListingCardMetricsProps {
  carId: number;
  viewCount?: number | null;
}

export default async function ListingCardMetrics({ carId, viewCount = 0 }: ListingCardMetricsProps) {
  const averageRating = await ReviewsApi.getCarAverageRating({ carId }).then((res) => (res.success ? res.data : 0));
  const reviewCount = await ReviewsApi.getCarReviewCount({ carId }).then((res) => (res.success ? res.data : 0));

  return (
    <div className='grid grid-cols-2 md:grid-cols-5 gap-4 mb-4'>
      <div>
        <div className='flex items-center gap-1.5 mb-1'>
          <Eye className='w-4 h-4 text-gray-500' strokeWidth={2} />
          <span className='text-xs text-gray-600'>Views</span>
        </div>
        <div className='text-lg font-bold text-gray-900'>{viewCount}</div>
      </div>

      {/* <div>
              <div className='flex items-center gap-1.5 mb-1'>
                <Calendar className='w-4 h-4 text-gray-500' strokeWidth={2} />
                <span className='text-xs text-gray-600'>Rentals</span>
              </div>
              <div className='text-lg font-bold text-gray-900'>{listing.rentals}</div>
            </div> */}

      <div>
        <div className='flex items-center gap-1.5 mb-1'>
          <Star className='w-4 h-4 text-gray-500' strokeWidth={2} />
          <span className='text-xs text-gray-600'>Rating</span>
        </div>
        <div className='text-lg font-bold text-gray-900'>
          {averageRating || 0} ({reviewCount})
        </div>
      </div>

      {/* <div>
              <div className='flex items-center gap-1.5 mb-1'>
                <DollarSign className='w-4 h-4 text-gray-500' strokeWidth={2} />
                <span className='text-xs text-gray-600'>Earnings</span>
              </div>
              <div className='text-lg font-bold text-gray-900'>₼{listing.totalEarnings}</div>
            </div> */}
    </div>
  );
}
