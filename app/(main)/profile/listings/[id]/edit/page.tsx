import { CarsApi } from '@/features/cars/cars.api';
import { notFound } from 'next/navigation';
import EditCarForm from './edit-car-form';

interface EditListingPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditListingPage({ params }: EditListingPageProps) {
  const { id } = await params;
  const carData = await CarsApi.getCarById({ id: +id });

  if (!carData.success) {
    notFound();
  }

  const car = carData.data;

  return (
    <div>
      <EditCarForm car={car} />
    </div>
  );
}
