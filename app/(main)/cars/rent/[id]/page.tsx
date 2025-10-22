import { notFound } from 'next/navigation';
import { carsService } from '@/lib/api/services';
import { CarsApi } from '@/features/cars/cars.api';
import Overview from './car-details-sections/overview';
import WhatsIncluded from './car-details-sections/whats-included';
import Requirements from './car-details-sections/requirements';
import Pricing from './car-details-sections/pricing';
import TermsConditions from './car-details-sections/terms-conditions';

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
    <div className='lg:col-span-2 space-y-6'>
      {/* Overview */}
      <Overview name={`${car.brand} ${car.model} ${car.year}`} />

      <div className='flex flex-col lg:flex-row items-start lg:items-start gap-4'>
        {/* What's Included */}
        <div className='flex-1 w-full'>
          <WhatsIncluded />
        </div>

        {/* Requirements */}
        <div className='flex-1 w-full'>
          <Requirements />
        </div>
      </div>

      {/* Pricing Breakdown */}
      <Pricing pricePerDay={car.pricePerDay} currency={car.currency} />

      {/* Terms & Conditions */}
      <TermsConditions />
    </div>
  );
}
