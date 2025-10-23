import { TGetCarsQuery } from '@/features/cars/cars.types';
import qs from 'qs';

export function getInitialParams(): TGetCarsQuery {
  const currentParams = new URLSearchParams(window.location.search);
  return qs.parse(currentParams.toString()) as TGetCarsQuery;
}
