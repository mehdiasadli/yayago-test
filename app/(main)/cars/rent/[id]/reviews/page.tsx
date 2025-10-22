import { ReviewsApi } from '@/features/reviews/reviews.api';
import { redirect } from 'next/navigation';
import ReviewCard from './review-card';
import AddReview from './add-review-form';
import ReviewList from './review-list';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { createGetReviewsQueryOptions } from '@/features/reviews/reviews.queries';
import { auth } from '@/lib/auth';
import { TGetCarReviewsResponse } from '@/features/reviews/reviews.types';
import { Session } from 'next-auth';

interface ReviewsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ReviewsPage({ params }: ReviewsPageProps) {
  const { id } = await params;

  const session = await auth();
  const reviewsData = await ReviewsApi.getCarReviews({ carId: +id });
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(createGetReviewsQueryOptions(id));

  if (!session?.user) {
    return redirect(`/cars/rent/${id}`);
  }

  const userReview = reviewsData.success
    ? reviewsData.data.find((r) => r.userId === Number(session.user.id))
    : undefined;

  return (
    <div id='reviews-section' className='space-y-6'>
      <AddReview carId={+id} userId={session.user.id} userReview={userReview} />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <ReviewList carId={id} userId={session.user.id} />
      </HydrationBoundary>
    </div>
  );
}
