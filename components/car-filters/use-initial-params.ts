import { TGetCarsQuery, TSearchCarsQuery } from '@/features/cars/cars.types';
import { useSearchParams } from 'next/navigation';
import qs from 'qs';

export function useInitialParams(): TSearchCarsQuery {
  const searchParams = useSearchParams();
  const object = qs.parse(searchParams.toString());

  return {
    q: object.q,
    brand: object.brand,
    location: object.location,
    carTypes: object.carTypes,
    transmissions: object.transmissions,
    fuelTypes: object.fuelTypes,
    priceRange: object.priceRange,
    yearRange: object.yearRange,
    featuredOnly: object.featuredOnly === 'true',
    noDepositOnly: object.noDepositOnly === 'true',
    sortBy: object.sortBy,
    page: object.page || 0,
    limit: object.limit || 20,
  } as TGetCarsQuery;
}
