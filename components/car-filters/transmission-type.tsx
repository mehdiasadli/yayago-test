import { CarTransmissionEnumSchema } from '@/features/cars/cars.enums';
import { useId } from 'react';
import { Badge } from '../ui/badge';
import { Checkbox } from '../ui/checkbox';
import { CheckIcon } from 'lucide-react';
import { Label } from '../ui/label';

const TRANSMISSION_TYPES = CarTransmissionEnumSchema.options.map((transmission) => ({
  value: transmission,
  label: transmission.replace(/_/g, ' ').charAt(0).toUpperCase() + transmission.slice(1).toLowerCase(),
}));

interface TransmissionTypeProps {
  transmissions?: string[];
  setTransmissions: (transmissions: string[]) => void;
}

export default function TransmissionType({ transmissions, setTransmissions }: TransmissionTypeProps) {
  const id = useId();

  return (
    <div className='space-y-2'>
      <Label className='text-md'>Transmission Type</Label>
      <div className='flex flex-wrap gap-2'>
        {TRANSMISSION_TYPES.map((transmission) => (
          <Badge
            key={transmission.value}
            className='relative outline-none has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50 has-data-[state=unchecked]:bg-muted has-data-[state=unchecked]:text-muted-foreground'
          >
            <Checkbox
              id={`${id}-${transmission.value}`}
              className='peer sr-only after:absolute after:inset-0'
              checked={transmissions?.includes(transmission.value)}
              onCheckedChange={() =>
                setTransmissions(
                  transmissions?.includes(transmission.value)
                    ? transmissions?.filter((t) => t !== transmission.value)
                    : [...(transmissions ?? []), transmission.value]
                )
              }
            />
            <CheckIcon size={12} className='hidden peer-data-[state=checked]:block' aria-hidden='true' />
            <label
              htmlFor={`${id}-${transmission.value}`}
              className='cursor-pointer select-none after:absolute after:inset-0'
            >
              {transmission.label}
            </label>
          </Badge>
        ))}
      </div>
    </div>
  );
}
