import { queryOptions, useQuery } from '@tanstack/react-query';
import { CarsApi } from './cars.api';
import { TGetCarsQuery } from './cars.types';

export const carsQueryKeys = {
  index: () => ['cars'] as const,

  list: () => [...carsQueryKeys.index(), 'list'] as const,
  listWithQuery: (query: TGetCarsQuery) => [...carsQueryKeys.list(), query] as const,

  details: () => [...carsQueryKeys.index(), 'details'] as const,
  detailsById: (id: string) => [...carsQueryKeys.details(), id] as const,
};

export const createGetCarsQueryOptions = (query: TGetCarsQuery = {}) =>
  queryOptions({
    queryKey: carsQueryKeys.listWithQuery(query),
    queryFn: async () => {
      const cars = await CarsApi.getCars(query);

      if (!cars.success) {
        throw new Error(cars.message);
      }

      return cars.data;
    },
  });

export function useCars() {
  return useQuery(createGetCarsQueryOptions());
}
