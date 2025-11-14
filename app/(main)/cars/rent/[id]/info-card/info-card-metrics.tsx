'use client';

import {
  createGetAverageRatingQueryOptions,
  createGetReviewsCountQueryOptions,
} from '@/features/reviews/reviews.queries';
import { useQuery } from '@tanstack/react-query';
import { Eye, Heart, Star } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface InfoCardMetricsProps {
  id: string;
  viewCount: number;
  favoriteCount: number;
  averageRating: number;
  reviewCount: number;
  onOpenReviews?: () => void;
}

export default function InfoCardMetrics({ id, viewCount, favoriteCount, onOpenReviews }: InfoCardMetricsProps) {
  const { status } = useSession();

  const { data: reviewsCount } = useQuery({
    ...createGetReviewsCountQueryOptions(id),
    enabled: status === 'authenticated',
  });
  const { data: averageRating } = useQuery({
    ...createGetAverageRatingQueryOptions(id),
    enabled: status === 'authenticated',
  });

  return (
    <div className='flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-600'>
      <div className='flex items-center gap-1.5 text-primary/80'>
        <Eye className='w-4 h-4' strokeWidth={2} />
        <span>{viewCount} views</span>
      </div>
      <div className='flex items-center gap-1.5 text-red-500/80'>
        <Heart className='w-4 h-4' strokeWidth={2} />
        <span>{favoriteCount} favorites</span>
      </div>

      {typeof averageRating === 'number' && typeof reviewsCount === 'number' && (
        <>
          <span className='h-3 w-px bg-gray-200' />
          {status === 'authenticated' && onOpenReviews ? (
            <button
              type='button'
              onClick={onOpenReviews}
              className='inline-flex items-center gap-1.5 text-yellow-600 hover:text-yellow-500 hover:underline'
            >
              <Star className='w-4 h-4' strokeWidth={2} />
              {averageRating === 0 ? (
                <span>No reviews yet</span>
              ) : (
                <span>
                  {averageRating.toFixed(1)} ({reviewsCount === 0 ? 'No' : reviewsCount}{' '}
                  {reviewsCount === 1 ? 'review' : 'reviews'})
                </span>
              )}
            </button>
          ) : (
            <div className='inline-flex items-center gap-1.5 text-yellow-600'>
              <Star className='w-4 h-4' strokeWidth={2} />
              {averageRating === 0 ? (
                <span>No reviews yet</span>
              ) : (
                <span>
                  {averageRating.toFixed(1)} ({reviewsCount === 0 ? 'No' : reviewsCount}{' '}
                  {reviewsCount === 1 ? 'review' : 'reviews'})
                </span>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
