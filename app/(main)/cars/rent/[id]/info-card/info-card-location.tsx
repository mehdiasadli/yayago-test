import { getInitials } from '@/lib/utils';

interface InfoCardHostInfoProps {
  location: string;
  hostName: string;
}

export default function InfoCardHostInfo({ location, hostName }: InfoCardHostInfoProps) {
  const initials = getInitials(hostName);

  return (
    <div className='flex items-center gap-2 mb-3 p-3 bg-gray-50 border border-gray-200'>
      <div className='w-12 h-12 bg-primary/10 flex items-center justify-center font-bold text-primary text-lg'>
        {initials}
      </div>
      <div>
        <div className='text-sm font-semibold text-gray-900'>{hostName}</div>
        <div className='text-xs text-gray-600'>{location}</div>
      </div>
    </div>
  );
}
