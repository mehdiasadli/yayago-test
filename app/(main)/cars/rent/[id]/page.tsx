import { notFound } from 'next/navigation';
import { carsService } from '@/lib/api/services';
import { CarsApi } from '@/features/cars/cars.api';
import Overview from './car-details-sections/overview';
import Pricing from './car-details-sections/pricing';

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

  return (
    <div className='space-y-6'>
      {/* Overview */}
      <Overview name={`${car.brand} ${car.model} ${car.year}`} />

      {/* Pricing Breakdown */}
      <Pricing
        pricePerDay={car.pricePerDay}
        pricePerWeek={car.pricePerWeek || undefined}
        pricePerMonth={car.pricePerMonth || undefined}
        currency={car.currency}
      />
    </div>
  );
}
