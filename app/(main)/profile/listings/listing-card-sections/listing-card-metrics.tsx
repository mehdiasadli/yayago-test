import { Eye, Heart, Star } from 'lucide-react';

interface ListingCardMetricsProps {
  viewCount?: number | null;
  averageRating?: number | null;
  reviewCount?: number | null;
  favoriteCount?: number | null;
}

export default async function ListingCardMetrics({
  viewCount = 0,
  averageRating = 0,
  reviewCount = 0,
  favoriteCount = 0,
}: ListingCardMetricsProps) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-5 gap-4 mb-4'>
      <div>
        <div className='flex items-center gap-1.5 mb-1'>
          <Eye className='w-4 h-4 text-gray-500' strokeWidth={2} />
          <span className='text-xs text-gray-600'>Views</span>
        </div>
        <div className='text-lg font-bold text-gray-900'>{viewCount}</div>
      </div>

      <div>
        <div className='flex items-center gap-1.5 mb-1'>
          <Heart className='w-4 h-4 text-gray-500' strokeWidth={2} />
          <span className='text-xs text-gray-600'>Favorites</span>
        </div>
        <div className='text-lg font-bold text-gray-900'>{favoriteCount}</div>
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
          {reviewCount === 0 ? 'No reviews yet' : `${averageRating?.toFixed(1)} (${reviewCount})`}
        </div>
      </div>

      {/* <div>
              <div className='flex items-center gap-1.5 mb-1'>
                <DollarSign className='w-4 h-4 text-gray-500' strokeWidth={2} />
                <span className='text-xs text-gray-600'>Earnings</span>
              </div>
              <div className='text-lg font-bold text-gray-900'>{listing.totalEarnings} AED</div>
            </div> */}
    </div>
  );
}
