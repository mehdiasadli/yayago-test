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
    <Card id={`review-${review.carId}-${review.id}`}>
      <CardHeader>
        <CardTitle>
          <div className='flex items-center justify-between gap-2'>
            <div>
              <h3 className='text-lg font-bold'>{review.userFullName}</h3>
              <div className='text-xs text-gray-500 font-medium'>
                {formatDistanceToNow(review.createdAt, { addSuffix: true })}
              </div>
            </div>
            <Rating rating={review.rating} />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-gray-500'>{review.comment}</p>
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
