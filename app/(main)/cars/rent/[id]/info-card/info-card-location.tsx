import { MapPin } from 'lucide-react';

interface InfoCardLocationProps {
  location: string;
}

export default function InfoCardLocation({ location }: InfoCardLocationProps) {
  return (
    <div className='flex items-center gap-2 mb-3 p-3 bg-gray-50 border border-gray-200'>
      <MapPin className='w-5 h-5 text-primary flex-shrink-0' strokeWidth={2} />
      <div>
        <div className='text-sm font-semibold text-gray-900'>{location}</div>
        <div className='text-xs text-gray-600'>Dubai, UAE</div>
      </div>
    </div>
  );
}
