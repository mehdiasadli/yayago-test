import { TGetCarByIdResponse } from '@/features/cars/cars.types';
import CarCard from '../../../../../../components/car-card/car-card';

interface SimilarCarsProps {
  similarCars: TGetCarByIdResponse[];
}

export default function SimilarCars({ similarCars }: SimilarCarsProps) {
  return (
    <div className='mt-12'>
      <div className='mb-6'>
        <h2 className='text-3xl font-bold text-gray-900 mb-2'>Similar Cars</h2>
        <p className='text-gray-600'>You might also be interested in these vehicles</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {similarCars.map((similarCar) => (
          <CarCard key={similarCar.id} car={similarCar} />
        ))}
      </div>
    </div>
  );
}
