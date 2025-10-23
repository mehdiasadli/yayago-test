import { TGetCarsResponse } from '@/features/cars/cars.types';

export function getCarFilters(cars?: TGetCarsResponse) {
  if (!cars || cars.length === 0) {
    return {
      minYear: 0,
      maxYear: 0,
      minPrice: 0,
      maxPrice: 0,
      brands: [],
      transmissions: [],
      fuelTypes: [],
      carTypes: [],
      colors: [],
      doorCounts: [],
      seatCounts: [],
    };
  }

  const minYear = Math.min(...cars.map((c) => c.year));
  const maxYear = Math.max(...cars.map((c) => c.year));
  const minPrice = Math.min(...cars.map((c) => c.pricePerDay));
  const maxPrice = Math.max(...cars.map((c) => c.pricePerDay));

  const brands = uniq(cars.map((c) => c.brand));
  const transmissions = uniq(removeNullables(cars.map((c) => c.transmission)));
  const fuelTypes = uniq(removeNullables(cars.map((c) => c.fuelType)));
  const carTypes = uniq(removeNullables(cars.map((c) => c.carType)));
  const colors = uniq(removeNullables(cars.map((c) => c.color)));
  const doorCounts = uniq(removeNullables(cars.map((c) => c.doorCount)));
  const seatCounts = uniq(removeNullables(cars.map((c) => c.seatCount)));

  return {
    minYear,
    maxYear,
    minPrice,
    maxPrice,
    brands,
    transmissions,
    fuelTypes,
    carTypes,
    colors,
    doorCounts,
    seatCounts,
  };
}

function uniq<T>(array: T[]): T[] {
  return array.filter((item, index, self) => self.findIndex((t) => t === item) === index);
}

function removeNullables<T>(array: (T | null | undefined)[]): T[] {
  return array.filter((item) => item !== null && item !== undefined) as T[];
}
