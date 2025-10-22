interface HostInfoProps {
  host: string;
}

export default function HostInfo({ host }: HostInfoProps) {
  return (
    <div className='bg-white border-2 border-gray-200 p-6'>
      <h3 className='text-lg font-bold text-gray-900 mb-4'>Hosted By</h3>
      <div className='flex items-center gap-4'>
        <div className='w-12 h-12 bg-primary/10 flex items-center justify-center font-bold text-primary text-lg'>
          {host
            ?.split(' ')
            .map((name) => name.charAt(0).toUpperCase())
            .join('')}
        </div>
        <div className='flex-1'>
          <div className='font-semibold text-gray-900'>{host}</div>
        </div>
      </div>
    </div>
  );
}
