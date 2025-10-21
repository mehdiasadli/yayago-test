import { queryOptions } from '@tanstack/react-query';
import { FavoritesApi } from './favorites.api';

export const favoriteQueryKeys = {
  index: () => ['favorites'] as const,

  check: () => [...favoriteQueryKeys.index(), 'check'] as const,
  checkById: (carId: string) => [...favoriteQueryKeys.check(), carId] as const,
};

export const createCheckFavoriteQueryOptions = (carId: string) =>
  queryOptions({
    queryKey: favoriteQueryKeys.checkById(carId),
    queryFn: async () => {
      const response = await FavoritesApi.checkFavorite({ carId: +carId });

      if (!response.success) {
        throw new Error(response.message);
      }

      return response.data;
    },
  });
