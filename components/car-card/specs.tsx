import { mapEnumLabel } from '@/lib/utils';
import { Users, DoorOpen, Fuel } from 'lucide-react';

interface SpecsProps {
  seatCount?: number | null;
  doorCount?: number | null;
  fuelType?: string | null;
  engineVolume?: string | null;
}

export default function Specs({ seatCount, doorCount, fuelType, engineVolume }: SpecsProps) {
  return (
    <div className='grid grid-cols-2 gap-x-3 gap-y-2 mb-3'>
      <div className='flex items-center gap-1.5'>
        <Users className='w-3.5 h-3.5 text-gray-500' strokeWidth={2.5} />
        <span className='text-xs text-gray-600'>
          {seatCount || 0} Seat{seatCount === 1 ? '' : 's'}
        </span>
      </div>
      <div className='flex items-center gap-1.5'>
        <DoorOpen className='w-3.5 h-3.5 text-gray-500' strokeWidth={2.5} />
        <span className='text-xs text-gray-600'>
          {doorCount || 0} Door{doorCount === 1 ? '' : 's'}
        </span>
      </div>
      <div className='flex items-center gap-1.5'>
        <Fuel className='w-3.5 h-3.5 text-gray-500' strokeWidth={2.5} />
        <span className='text-xs text-gray-600 capitalize'>
          {mapEnumLabel(fuelType, { defaultValue: 'Unknown Fuel' })}
        </span>
      </div>
      <div className='flex items-center gap-1.5'>
        <Fuel className='w-3.5 h-3.5 text-gray-500' strokeWidth={2.5} />
        <span className='text-xs text-gray-600 capitalize'>
          {mapEnumLabel(engineVolume, { defaultValue: 'Unknown Volume' })}
        </span>
      </div>
    </div>
  );
}
