import { queryOptions } from '@tanstack/react-query';
import { ReviewsApi } from './reviews.api';

export const reviewsQueryKeys = {
  index: () => ['reviews'] as const,

  list: () => [...reviewsQueryKeys.index(), 'list'] as const,
  listById: (carId: string) => [...reviewsQueryKeys.list(), carId] as const,
};

export const createGetReviewsQueryOptions = (carId: string) =>
  queryOptions({
    queryKey: reviewsQueryKeys.list(),
    queryFn: async () => {
      const reviews = await ReviewsApi.getCarReviews({ carId: +carId });

      if (!reviews.success) {
        throw new Error(reviews.message);
      }

      return reviews.data;
    },
    enabled: !!carId,
  });
