import { faker } from '@faker-js/faker';
import { Car } from './car.schema';
import { delay } from '@/lib/utils';

const currencies = ['AED', 'USD'];

// High-quality car images from Unsplash
const carImagePool = [
  'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', // Audi R8
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', // Mercedes AMG
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80', // Audi
  'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80', // Porsche 911
  'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80', // BMW
  'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80', // Tesla
  'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80', // Lamborghini
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', // Ferrari
  'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80', // Range Rover
  'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', // Mercedes G-Wagon
  'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80', // Porsche Cayenne
  'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', // BMW M Series
];

export async function generateCars(length: number = 10, error?: string, ms?: number): Promise<Car[]> {
  await delay(ms ?? 1000);

  if (typeof error === 'string') {
    throw new Error(error);
  }

  return Array.from({ length }).map((_, i) => {
    // Get 2-5 random unique images for each car
    const imageCount = faker.number.int({ min: 2, max: 5 });
    const shuffledImages = faker.helpers.shuffle([...carImagePool]);
    const carImages = shuffledImages.slice(0, imageCount);

    return {
      id: i + 1,
      available: faker.datatype.boolean(0.9),
      year: faker.number.int({ min: 2018, max: 2024 }),
      pricePerDay: faker.number.int({ min: 100, max: 10_000 }),
      brand: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      currency: faker.helpers.arrayElement(currencies),
      images: carImages,
    };
  });
}
