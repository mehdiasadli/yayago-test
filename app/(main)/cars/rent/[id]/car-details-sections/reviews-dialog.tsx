'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { createGetReviewsQueryOptions } from '@/features/reviews/reviews.queries';
import AddReview from '../reviews/add-review-form';
import ReviewCard from '../reviews/review-card';

interface ReviewsDialogProps {
  carId: number;
  carName: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ReviewsDialog({ carId, carName, open, onOpenChange }: ReviewsDialogProps) {
  const { data: session } = useSession();

  const { data: reviews = [], status } = useQuery(createGetReviewsQueryOptions(carId.toString()));

  const userId = session?.user?.id;
  const userReview = reviews.find((r) => userId && r.userId === Number(userId));
  const otherReviews = reviews.filter((r) => !userId || r.userId !== Number(userId));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-2xl sm:max-w-3xl max-h-[85vh] flex flex-col'>
        <DialogHeader className='pb-3'>
          <DialogTitle className='text-lg sm:text-xl font-semibold'>
            Reviews for <span className='font-bold'>{carName}</span>
          </DialogTitle>
        </DialogHeader>

        <div className='flex-1 overflow-y-auto space-y-4 pr-1'>
          {session?.user && (
            <AddReview carId={carId} userId={session.user.id} userReview={userReview} />
          )}

          <div className='space-y-2'>
            {status === 'pending' && (
              <p className='text-sm text-slate-500'>Loading reviews...</p>
            )}
            {status === 'error' && (
              <p className='text-sm text-red-500'>Failed to load reviews.</p>
            )}
            {status === 'success' && otherReviews.length === 0 && !userReview && (
              <p className='text-sm text-slate-500'>No reviews yet. Be the first to review this car.</p>
            )}

            {status === 'success' &&
              otherReviews.map((review) => <ReviewCard key={review.id} review={review} />)}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}


