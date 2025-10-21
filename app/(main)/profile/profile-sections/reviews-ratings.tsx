import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ReviewsRatings() {
  return (
    <div className='bg-white border-2 border-gray-200 overflow-hidden'>
      <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
        <h2 className='text-2xl font-bold text-gray-900'>Reviews & Ratings</h2>
        <p className='text-gray-600 mt-1'>What renters say about you</p>
      </div>

      <div className='p-8'>
        {/* Rating Summary */}
        <div className='flex flex-col md:flex-row gap-8 mb-8 pb-8 border-b-2 border-gray-100'>
          <div className='text-center md:text-left'>
            <div className='text-6xl font-bold text-gray-900 mb-2'>4.8</div>
            <div className='flex items-center justify-center md:justify-start gap-1 mb-2'>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  strokeWidth={2}
                />
              ))}
            </div>
            <div className='text-sm text-gray-600'>Based on 24 reviews</div>
          </div>

          <div className='flex-1 space-y-2'>
            {[
              { stars: 5, count: 18, percentage: 75 },
              { stars: 4, count: 4, percentage: 17 },
              { stars: 3, count: 2, percentage: 8 },
              { stars: 2, count: 0, percentage: 0 },
              { stars: 1, count: 0, percentage: 0 },
            ].map((rating) => (
              <div key={rating.stars} className='flex items-center gap-3'>
                <div className='text-sm font-semibold text-gray-700 w-12'>{rating.stars} star</div>
                <div className='flex-1 h-2 bg-gray-200'>
                  <div className='h-full bg-yellow-400' style={{ width: `${rating.percentage}%` }} />
                </div>
                <div className='text-sm text-gray-600 w-12 text-right'>{rating.count}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <div className='space-y-6'>
          <h3 className='text-lg font-bold text-gray-900 mb-4'>Recent Reviews</h3>

          {/* Review 1 */}
          <div className='border-l-4 border-primary pl-6 py-2'>
            <div className='flex items-center gap-3 mb-2'>
              <div className='w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold text-sm'>
                AM
              </div>
              <div className='flex-1'>
                <div className='font-semibold text-gray-900'>Ahmad Mammadov</div>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <div className='flex items-center gap-0.5'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className='w-3.5 h-3.5 fill-yellow-400 text-yellow-400' />
                    ))}
                  </div>
                  <span>•</span>
                  <span>2 days ago</span>
                </div>
              </div>
            </div>
            <p className='text-gray-700 leading-relaxed'>
              Excellent experience! The car was in perfect condition, clean, and John was very professional and flexible
              with timing. Highly recommended!
            </p>
          </div>

          {/* Review 2 */}
          <div className='border-l-4 border-primary pl-6 py-2'>
            <div className='flex items-center gap-3 mb-2'>
              <div className='w-10 h-10 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-sm'>
                LA
              </div>
              <div className='flex-1'>
                <div className='font-semibold text-gray-900'>Leyla Aliyeva</div>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <div className='flex items-center gap-0.5'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3.5 h-3.5 ${star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span>•</span>
                  <span>1 week ago</span>
                </div>
              </div>
            </div>
            <p className='text-gray-700 leading-relaxed'>
              Great car and smooth rental process. John responded quickly to my messages and was very helpful. Will
              definitely rent again!
            </p>
          </div>

          {/* Review 3 */}
          <div className='border-l-4 border-primary pl-6 py-2'>
            <div className='flex items-center gap-3 mb-2'>
              <div className='w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-sm'>
                RH
              </div>
              <div className='flex-1'>
                <div className='font-semibold text-gray-900'>Rashad Hasanov</div>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <div className='flex items-center gap-0.5'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className='w-3.5 h-3.5 fill-yellow-400 text-yellow-400' />
                    ))}
                  </div>
                  <span>•</span>
                  <span>2 weeks ago</span>
                </div>
              </div>
            </div>
            <p className='text-gray-700 leading-relaxed'>
              Perfect rental experience from start to finish. The car was exactly as described and John made the whole
              process very easy. 5 stars!
            </p>
          </div>
        </div>

        <div className='mt-6'>
          <Button variant='outline' className='w-full hover:bg-gray-50'>
            View All Reviews
          </Button>
        </div>
      </div>
    </div>
  );
}
