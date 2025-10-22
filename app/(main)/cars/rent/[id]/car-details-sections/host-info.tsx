interface HostInfoProps {
  host: string;
}

export default function HostInfo({ host }: HostInfoProps) {
  const initials = host
    ?.split(' ')
    .map((n) => n.charAt(0).toUpperCase())
    .join('');

  return (
    <div className='bg-white border-2 border-gray-200 p-2 mb-6'>
      <div className='flex items-center gap-4'>
        <div className='w-12 h-12 bg-primary/10 flex items-center justify-center font-bold text-primary text-lg'>
          {initials}
        </div>
        <div className='flex-1'>
          <div className='font-semibold text-gray-900'>{host}</div>
        </div>
      </div>
    </div>
  );
}
