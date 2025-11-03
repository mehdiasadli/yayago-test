import { Card, CardContent } from '@/components/ui/card';
import { TGetCarByIdResponse } from '@/features/cars/cars.types';
import { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn, mapEnumLabel } from '@/lib/utils';

interface InfoCardSpecsProps {
  features: { Icon: LucideIcon; label: string; value: string | number }[];
  car: TGetCarByIdResponse;
}

export default function InfoCardSpecs({ features, car }: InfoCardSpecsProps) {
  const old = (
    <div className='grid grid-cols-2 gap-3 mb-6'>
      {features.map((feature, index) => (
        <div key={index} className='flex items-center gap-2'>
          <feature.Icon className='w-4 h-4 text-primary flex-shrink-0' strokeWidth={2} />
          <span className='text-sm text-gray-700 capitalize'>
            {feature.value} {feature.label}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className='mb-6 flex flex-wrap gap-2'>
      <Badge>
        {car.seatCount} Seat{car.seatCount === 1 ? '' : 's'}
      </Badge>
      <Badge>
        {car.doorCount} Door{car.doorCount === 1 ? '' : 's'}
      </Badge>
      <Badge>{mapEnumLabel(car.transmission, { defaultValue: 'Unknown Transmission' })}</Badge>
      <Badge>{mapEnumLabel(car.fuelType, { defaultValue: 'Unknown Fuel Type' })}</Badge>
      <Badge>{mapEnumLabel(car.carType, { defaultValue: 'Unknown Body Type' })}</Badge>
      {typeof car.engineVolume === 'string' && car.engineVolume !== '' && <Badge>{car.engineVolume}</Badge>}
      {typeof car.horsePower === 'number' && car.horsePower !== 0 && <Badge>{car.horsePower} HP</Badge>}
      {typeof car.torque === 'number' && car.torque !== 0 && <Badge>{car.torque} Nm</Badge>}
      {typeof car.maxSpeed === 'number' && car.maxSpeed !== 0 && <Badge>{car.maxSpeed} km/h</Badge>}
      {typeof car.color === 'string' && car.color !== '' && <Badge>{car.color}</Badge>}
    </div>
  );
}
