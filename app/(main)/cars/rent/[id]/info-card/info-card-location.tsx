import { getInitials } from '@/lib/utils';
import { MapPin } from 'lucide-react';

interface InfoCardHostInfoProps {
  location: string;
  hostName: string;
}

export default function InfoCardHostInfo({ location, hostName }: InfoCardHostInfoProps) {
  const initials = getInitials(hostName);

  return (
    <div className='rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-4 flex items-center gap-3'>
      <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary text-sm'>
        {initials}
      </div>
      <div className='flex flex-col'>
        <div className='text-sm font-semibold text-slate-900'>{hostName}</div>
        <div className='flex items-center gap-1.5 text-xs text-slate-600'>
          <MapPin className='w-3 h-3' />
          <span>{location}</span>
        </div>
        <p className='text-[11px] text-slate-500 mt-1'>Trusted host for premium rentals.</p>
      </div>
    </div>
  );
}
