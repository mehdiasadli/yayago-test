import { cars, brands } from '@/data/cars';
import { dubaiLocations } from '@/data/locations';
import { notFound } from 'next/navigation';
import CarDetailsContent from '@/components/car-details-content';

interface CarDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: CarDetailsPageProps) {
  const { id } = await params;

  const car = cars.find((c) => c.id === Number(id));
  if (!car) {
    return {
      title: 'Car Not Found | YayaGo',
    };
  }

  const brandName = brands.find((b) => b.key === car.brand)?.name || car.brand;
  return {
    title: `${car.year} ${brandName} ${car.model} - Rent in Dubai | YayaGo`,
    description: `Rent ${car.year} ${brandName} ${car.model} for ₼${car.pricePerDay}/day. ${car.seats} seats, ${car.transmission} transmission, ${car.engine} engine. Available in Dubai.`,
  };
}

export async function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id.toString(),
  }));
}

export default async function CarDetailsPage({ params }: CarDetailsPageProps) {
  const { id } = await params;
  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    notFound();
  }

  const brand = brands.find((b) => b.key === car.brand);
  const location = dubaiLocations.find((l) => l.key === car.location);

  // Get similar cars (same brand or body type)
  const similarCars = cars
    .filter(
      (c) =>
        c.id !== car.id &&
        (c.brand === car.brand || c.bodyType === car.bodyType) &&
        Math.abs(c.pricePerDay - car.pricePerDay) < 300
    )
    .slice(0, 4);

  return <CarDetailsContent car={car} brand={brand} location={location} similarCars={similarCars} />;
}
