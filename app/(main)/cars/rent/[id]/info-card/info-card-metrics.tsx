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
}

export default function InfoCardMetrics({ id, viewCount, favoriteCount }: InfoCardMetricsProps) {
  const { status } = useSession();

  const { data: reviewsCount } = useQuery(createGetReviewsCountQueryOptions(id));
  const { data: averageRating } = useQuery(createGetAverageRatingQueryOptions(id));

  const container =
    typeof averageRating === 'number' && typeof reviewsCount === 'number' ? (
      <div className='flex items-center gap-1 text-yellow-600 hover:underline hover:text-yellow-500'>
        <Star className='w-4 h-4' strokeWidth={2} />
        {averageRating === 0 ? (
          'No reviews yet'
        ) : (
          <span>
            {averageRating.toFixed(1)} ({reviewsCount === 0 ? 'No' : reviewsCount}{' '}
            {reviewsCount === 1 ? 'review' : 'reviews'})
          </span>
        )}
      </div>
    ) : null;

  return (
    <div className='flex items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b-2 border-gray-200'>
      <div className='flex items-center gap-1 text-primary'>
        <Eye className='w-4 h-4' strokeWidth={2} />
        <span>{viewCount} views</span>
      </div>
      <div className='flex items-center gap-1 text-red-500'>
        <Heart className='w-4 h-4' strokeWidth={2} />
        <span>{favoriteCount} favorites</span>
      </div>
      {status === 'authenticated' ? (
        <Link href={`/cars/rent/${id}/reviews#reviews-section`}>{container}</Link>
      ) : (
        container
      )}
    </div>
  );
}
