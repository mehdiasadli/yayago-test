import { CarsApi } from '@/features/cars/cars.api';
import { notFound } from 'next/navigation';
import { dubaiLocations } from '@/data/locations';
import CarDetailsLayoutContent from './layout-content';

interface CarDetailsLayoutProps {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: CarDetailsLayoutProps) {
  const { id } = await params;

  const carData = await CarsApi.getCarById({ id: +id });

  if (!carData.success) {
    return {
      title: 'Car Not Found',
    };
  }

  const car = carData.data;
  const title = `${car.brand} ${car.model} ${car.year} - Rent in Dubai`;
  const description = `Rent ${car.brand} ${car.model} ${car.year} for ${car.pricePerDay} ${car.currency}/day. Available in Dubai.`;

  return {
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

export default async function CarDetailsLayout({ params, children }: CarDetailsLayoutProps) {
  const { id } = await params;
  const carData = await CarsApi.getCarById({ id: +id });

  if (!carData.success) {
    notFound();
  }

  const car = carData.data;
  const location = dubaiLocations.find((l) => l.key === 'Dubai');

  return (
    <div className='min-h-screen bg-gray-50 pt-20'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-8'>
        <CarDetailsLayoutContent locationName={location?.name || 'Dubai, UAE'} car={car}>
          {children}
        </CarDetailsLayoutContent>
      </div>
    </div>
  );
}
