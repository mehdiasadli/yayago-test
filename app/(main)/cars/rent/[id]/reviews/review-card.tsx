import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TGetCarReviewsResponse } from '@/features/reviews/reviews.types';
import { Star } from 'lucide-react';
import { format, formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';

interface ReviewCardProps {
  review: TGetCarReviewsResponse[number];
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card id={`review-${review.carId}-${review.id}`} className='border-slate-200 rounded-xl shadow-sm'>
      <CardHeader className='pb-3'>
        <CardTitle>
          <div className='flex items-center justify-between gap-2'>
            <div>
              <h3 className='text-sm sm:text-base font-semibold text-slate-900'>{review.userFullName}</h3>
              <div className='text-[11px] text-slate-500 font-medium'>
                {formatDistanceToNow(review.createdAt, { addSuffix: true })}
              </div>
            </div>
            <Rating rating={review.rating} />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className='pt-0'>
        <p className='text-sm text-slate-700'>{review.comment}</p>
      </CardContent>
    </Card>
  );
}

function Rating({ rating }: { rating: number }) {
  return (
    <div className='flex items-center gap-2'>
      <div className='flex items-center'>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'h-4 w-4',
              i < Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'fill-muted text-muted'
            )}
          />
        ))}
      </div>
    </div>
  );
}
