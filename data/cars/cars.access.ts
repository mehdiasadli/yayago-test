import { CarSchema } from './car.schema';
import { generateCars } from './cars.mock';

export async function getCars(length?: number) {
  try {
    const cars = await generateCars(length ?? 10);
    const data = CarSchema.array().parse(cars);
    return data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    return [];
  }
}
