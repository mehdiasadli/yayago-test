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
        <span className='text-xs text-gray-600'>{seatCount || 0} Seats</span>
      </div>
      <div className='flex items-center gap-1.5'>
        <DoorOpen className='w-3.5 h-3.5 text-gray-500' strokeWidth={2.5} />
        <span className='text-xs text-gray-600'>{doorCount || 0} Doors</span>
      </div>
      <div className='flex items-center gap-1.5'>
        <Fuel className='w-3.5 h-3.5 text-gray-500' strokeWidth={2.5} />
        <span className='text-xs text-gray-600 capitalize'>{fuelType || 'Fuel Type'}</span>
      </div>
      <div className='flex items-center gap-1.5'>
        <Fuel className='w-3.5 h-3.5 text-gray-500' strokeWidth={2.5} />
        <span className='text-xs text-gray-600 capitalize'>{engineVolume || 'Engine Volume'}</span>
      </div>
    </div>
  );
}
