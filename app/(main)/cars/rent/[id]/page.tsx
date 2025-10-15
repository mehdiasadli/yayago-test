import { dubaiLocations } from '@/data/locations';
import { notFound } from 'next/navigation';
import CarDetailsContent from '@/components/car-details-content';
import { carsService } from '@/lib/api/services';

interface CarDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: CarDetailsPageProps) {
  const { id } = await params;

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
}

export async function generateStaticParams() {
  const cars = await carsService.getAllCars();

  return (cars || []).map((car) => ({
    id: car.id.toString(),
  }));
}

export default async function CarDetailsPage({ params }: CarDetailsPageProps) {
  const { id } = await params;
  const car = await carsService.getCarById(Number(id));

  if (!car) {
    notFound();
  }

  const location = dubaiLocations.find((l) => l.key === 'Dubai');

  // Get similar cars (same brand or body type)
  const similarCars = ((await carsService.getAllCars()) || [])
    .filter((c) => c.id !== car.id && c.brand === car.brand && Math.abs(c.pricePerDay - car.pricePerDay) < 300)
    .slice(0, 4);

  return <CarDetailsContent car={car} location={location} similarCars={similarCars} />;
}
