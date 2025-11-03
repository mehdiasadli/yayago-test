import { queryOptions, useQuery } from '@tanstack/react-query';
import { CarsApi } from './cars.api';
import { TGetCarsQuery, TSearchCarsQuery } from './cars.types';

export const carsQueryKeys = {
  index: () => ['cars'] as const,

  list: () => [...carsQueryKeys.index(), 'list'] as const,
  listWithQuery: (query: TGetCarsQuery) => [...carsQueryKeys.list(), query] as const,

  search: (query: TSearchCarsQuery) => [...carsQueryKeys.index(), 'search', query] as const,

  featured: () => [...carsQueryKeys.index(), 'featured'] as const,

  details: () => [...carsQueryKeys.index(), 'details'] as const,
  detailsById: (id: string) => [...carsQueryKeys.details(), id] as const,
};

export const createSearchCarsQueryOptions = (query: TSearchCarsQuery = {}) =>
  queryOptions({
    queryKey: carsQueryKeys.search(query),
    queryFn: async () => {
      const response = await CarsApi.searchCars(query);

      if (!response.success) {
        throw new Error(response.message);
      }

      return response.data;
    },
  });

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

export const createGetFeaturedCarsQueryOptions = (query: TGetCarsQuery = {}) =>
  queryOptions({
    queryKey: carsQueryKeys.featured(),
    queryFn: async () => {
      const cars = await CarsApi.getCars(query);

      if (!cars.success) {
        throw new Error(cars.message);
      }

      return cars.data.cars.filter((car) => car.featured === true);
    },
  });

export function useCars() {
  return useQuery(createGetCarsQueryOptions());
}
