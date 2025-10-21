import { MapPin } from 'lucide-react';

interface HostSectionProps {
  location?: string;
  host: string;
}

export default function HostSection({ location = 'JLT, Dubai', host }: HostSectionProps) {
  return (
    <>
      {/* Location */}
      <div className='flex items-center gap-1.5 text-md font-medium mt-1'>
        <MapPin className='w-3.5 h-3.5 text-gray-500' strokeWidth={2} />
        <span className='text-gray-800 line-clamp-1'>{location}</span>
      </div>

      {/* Host */}
      <div className='mb-3'>
        <div className='text-xs text-gray-500'>
          Hosted by <span className='text-gray-700 font-medium'>{host || 'Unknown Host'}</span>
        </div>
      </div>
    </>
  );
}
