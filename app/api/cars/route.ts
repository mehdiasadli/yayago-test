import { CarSchema } from '@/data/cars/car.schema';
import { generateCars } from '@/data/cars/cars.mock';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const length = new URL(request.url).searchParams.get('length');
    const cars = await generateCars(length ? parseInt(length) : 10);
    const data = CarSchema.array().parse(cars);

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch cars' }, { status: 500 });
  }
}
