import { TGetCarByIdResponse } from '@/features/cars/cars.types';
import InfoCardSpecs from '../info-card/info-card-specs';

interface SpecificationsProps {
  car: TGetCarByIdResponse;
}

export default function Specifications({ car }: SpecificationsProps) {
  return (
    <section className='bg-white border border-slate-200 rounded-2xl p-6 shadow-sm'>
      <h2 className='text-2xl font-bold text-gray-900 mb-4'>Specifications</h2>
      <InfoCardSpecs car={car} features={[]} />
    </section>
  );
}


