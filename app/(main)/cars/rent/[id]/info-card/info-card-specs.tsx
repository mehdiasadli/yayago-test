import { TGetCarByIdResponse } from '@/features/cars/cars.types';
import { LucideIcon } from 'lucide-react';
import { mapEnumLabel } from '@/lib/utils';

interface InfoCardSpecsProps {
  features: { Icon: LucideIcon; label: string; value: string | number }[];
  car: TGetCarByIdResponse;
}

export default function InfoCardSpecs({ features, car }: InfoCardSpecsProps) {
  const specItems: { Icon?: LucideIcon; label: string; value: string | number }[] = [
    {
      label: 'Seats',
      value: car.seatCount ?? '—',
    },
    {
      label: 'Doors',
      value: car.doorCount ?? '—',
    },
    {
      label: 'Transmission',
      value: mapEnumLabel(car.transmission, { defaultValue: 'Unknown' }),
    },
    {
      label: 'Fuel Type',
      value: mapEnumLabel(car.fuelType, { defaultValue: 'Unknown' }),
    },
    {
      label: 'Body Type',
      value: mapEnumLabel(car.carType, { defaultValue: 'Unknown' }),
    },
  ];

  if (typeof car.engineVolume === 'string' && car.engineVolume !== '') {
    specItems.push({
      label: 'Engine',
      value: car.engineVolume,
    });
  }

  if (typeof car.horsePower === 'number' && car.horsePower !== 0) {
    specItems.push({
      label: 'Power',
      value: `${car.horsePower} HP`,
    });
  }

  if (typeof car.torque === 'number' && car.torque !== 0) {
    specItems.push({
      label: 'Torque',
      value: `${car.torque} Nm`,
    });
  }

  if (typeof car.maxSpeed === 'number' && car.maxSpeed !== 0) {
    specItems.push({
      label: 'Top Speed',
      value: `${car.maxSpeed} km/h`,
    });
  }

  if (typeof car.color === 'string' && car.color !== '') {
    specItems.push({
      label: 'Color',
      value: car.color,
    });
  }

  return (
    <div className='rounded-xl border border-slate-200 bg-white/60 px-4 py-4 sm:px-5 sm:py-5'>
      <h3 className='text-sm font-semibold text-slate-900 mb-3'>Key specifications</h3>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
        {specItems.map((spec) => (
          <div key={spec.label} className='rounded-lg bg-slate-50 px-3 py-2'>
            <div className='text-[11px] uppercase tracking-wide text-slate-500'>{spec.label}</div>
            <div className='text-sm font-medium text-slate-900 mt-0.5'>{spec.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
