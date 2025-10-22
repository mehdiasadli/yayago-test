import { dubaiLocations } from '@/data/locations';
import { notFound } from 'next/navigation';
import CarDetailsContent from '@/app/(main)/cars/rent/[id]/car-details-sections/content';
import { carsService } from '@/lib/api/services';
import { CarsApi } from '@/features/cars/cars.api';

// Make this page dynamic to avoid build-time API calls
export const dynamic = 'force-dynamic';

interface CarDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: CarDetailsPageProps) {
  const { id } = await params;

  try {
    const car = await carsService.getCarById(Number(id));

    if (!car) {
      return {
        title: 'Car Not Found | YayaGo',
      };
    }

    return {
      title: `${car.year} ${car.brand} ${car.model} - Rent in Dubai | YayaGo`,
      description: `Rent ${car.year} ${car.brand} ${car.model} for ₼${car.pricePerDay}/day. 4 seats, Automatic transmission, Petrol engine. Available in Dubai.`,
      openGraph: {
        title: `${car.year} ${car.brand} ${car.model} - Rent in Dubai | YayaGo`,
        description: `Rent ${car.year} ${car.brand} ${car.model} for ₼${car.pricePerDay}/day. 4 seats, Automatic transmission, Petrol engine. Available in Dubai.`,
      },
    };
  } catch (error) {
    return {
      title: 'Car Not Found | YayaGo',
    };
  }
}

export default async function CarDetailsPage({ params }: CarDetailsPageProps) {
  const { id } = await params;
  const carData = await CarsApi.getCarById({ id: +id });

  if (!carData.success) {
    notFound();
  }

  const car = carData.data;
  const location = dubaiLocations.find((l) => l.key === 'Dubai');

  return <CarDetailsContent car={car} location={location} similarCars={[]} />;
}
