import { queryOptions } from '@tanstack/react-query';
import { ReviewsApi } from './reviews.api';

export const reviewsQueryKeys = {
  index: () => ['reviews'] as const,

  list: () => [...reviewsQueryKeys.index(), 'list'] as const,
  listById: (carId: string) => [...reviewsQueryKeys.list(), carId] as const,

  count: () => [...reviewsQueryKeys.index(), 'count'] as const,
  countByCarId: (carId: string) => [...reviewsQueryKeys.count(), carId] as const,

  averageRating: () => [...reviewsQueryKeys.index(), 'average-rating'] as const,
  averageRatingByCarId: (carId: string) => [...reviewsQueryKeys.averageRating(), carId] as const,
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

export const createGetReviewsCountQueryOptions = (carId: string) =>
  queryOptions({
    queryKey: reviewsQueryKeys.countByCarId(carId),
    queryFn: async () => {
      const count = await ReviewsApi.getCarReviewCount({ carId: +carId });

      if (!count.success) {
        throw new Error(count.message);
      }

      return count.data || 0;
    },
    enabled: !!carId,
  });

export const createGetAverageRatingQueryOptions = (carId: string) =>
  queryOptions({
    queryKey: reviewsQueryKeys.averageRatingByCarId(carId),
    queryFn: async () => {
      const averageRating = await ReviewsApi.getCarAverageRating({ carId: +carId });

      if (!averageRating.success) {
        throw new Error(averageRating.message);
      }

      return averageRating.data || 0;
    },
    enabled: !!carId,
  });
