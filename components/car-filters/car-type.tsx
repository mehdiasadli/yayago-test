import { CarTypeEnumSchema } from '@/features/cars/cars.enums';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { useId } from 'react';

const CAR_TYPES = CarTypeEnumSchema.options.map((carType) => ({
  value: carType,
  label: carType.replace(/_/g, ' ').charAt(0).toUpperCase() + carType.slice(1).toLowerCase(),
}));

interface CarTypeProps {
  carTypes?: string[];
  setCarTypes: (carTypes: string[]) => void;
}

export default function CarType({ carTypes, setCarTypes }: CarTypeProps) {
  const id = useId();

  return (
    <div className='space-y-2'>
      <Label className='text-md'>Car Type</Label>
      <div className='grid grid-cols-2 gap-3'>
        {CAR_TYPES.map((item) => (
          <div
            key={`${item.value}`}
            className='relative flex cursor-pointer gap-4 rounded-md border border-input p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50'
          >
            <div className='flex justify-between gap-2'>
              <Checkbox
                id={`${id}-${item.value}`}
                value={item.value}
                className='order-1 after:absolute after:inset-0'
                checked={carTypes?.includes(item.value)}
                onCheckedChange={() =>
                  setCarTypes(
                    carTypes?.includes(item.value)
                      ? carTypes?.filter((c) => c !== item.value)
                      : [...(carTypes ?? []), item.value]
                  )
                }
              />
              {/* <item.Icon className='opacity-60' size={16} aria-hidden='true' /> */}
            </div>
            <Label htmlFor={`${id}-${item.value}`}>{item.label}</Label>
          </div>
        ))}
      </div>
    </div>
  );
}
