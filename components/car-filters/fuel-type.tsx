import { CarFuelTypeEnumSchema } from '@/features/cars/cars.enums';
import { useId, useState } from 'react';
import { Badge } from '../ui/badge';
import { Checkbox } from '../ui/checkbox';
import { CheckIcon } from 'lucide-react';
import { Label } from '../ui/label';

const FUEL_TYPES = CarFuelTypeEnumSchema.options.map((fuel) => ({
  value: fuel,
  label: fuel.replace(/_/g, ' ').charAt(0).toUpperCase() + fuel.slice(1).toLowerCase(),
}));

interface FuelTypeProps {
  fuelTypes?: string[];
  setFuelTypes: (fuelTypes: string[]) => void;
}

export default function FuelType({ fuelTypes, setFuelTypes }: FuelTypeProps) {
  const id = useId();

  return (
    <div className='space-y-2'>
      <Label className='text-md'>Fuel Type</Label>
      <div className='flex flex-wrap gap-2'>
        {FUEL_TYPES.map((fuel) => (
          <Badge
            key={fuel.value}
            className='relative outline-none has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50 has-data-[state=unchecked]:bg-muted has-data-[state=unchecked]:text-muted-foreground'
          >
            <Checkbox
              id={`${id}-${fuel.value}`}
              className='peer sr-only after:absolute after:inset-0'
              checked={fuelTypes?.includes(fuel.value)}
              onCheckedChange={() =>
                setFuelTypes(
                  fuelTypes?.includes(fuel.value)
                    ? fuelTypes?.filter((f) => f !== fuel.value)
                    : [...(fuelTypes ?? []), fuel.value]
                )
              }
            />
            <CheckIcon size={12} className='hidden peer-data-[state=checked]:block' aria-hidden='true' />
            <label htmlFor={`${id}-${fuel.value}`} className='cursor-pointer select-none after:absolute after:inset-0'>
              {fuel.label}
            </label>
          </Badge>
        ))}
      </div>
    </div>
  );
}
