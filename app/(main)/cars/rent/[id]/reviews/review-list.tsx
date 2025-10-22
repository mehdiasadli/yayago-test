'use client';

import { createGetReviewsQueryOptions } from '@/features/reviews/reviews.queries';
import { useQuery } from '@tanstack/react-query';
import ReviewCard from './review-card';

interface ReviewListProps {
  carId: string;
  userId: string;
}

export default function ReviewList({ carId, userId }: ReviewListProps) {
  const { data: reviews, status } = useQuery(createGetReviewsQueryOptions(carId));

  if (status === 'pending') {
    return <div className='text-center text-gray-500'>Loading...</div>;
  }

  if (status === 'error' || !reviews) {
    return null;
  }

  if (reviews.length === 0) {
    return (
      <div>
        <p>No reviews yet. Be the first to review this car.</p>
      </div>
    );
  }

  return (
    <div className='space-y-1'>
      {reviews
        .filter((r) => r.userId !== Number(userId))
        .map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
    </div>
  );
}
