import { queryOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { CarsApi } from './cars.api';

export const carsQueryKeys = {
  index: () => ['cars'] as const,

  list: () => [...carsQueryKeys.index(), 'list'] as const,

  details: () => [...carsQueryKeys.index(), 'details'] as const,
  detailsById: (id: string) => [...carsQueryKeys.details(), id] as const,
};

export const createGetCarsQueryOptions = () =>
  queryOptions({
    queryKey: carsQueryKeys.list(),
    queryFn: async () => {
      const cars = await CarsApi.getCars();

      if (!cars.success) {
        throw new Error(cars.message);
      }

      return cars.data;
    },
  });

export function useCars() {
  return useQuery(createGetCarsQueryOptions());
}
