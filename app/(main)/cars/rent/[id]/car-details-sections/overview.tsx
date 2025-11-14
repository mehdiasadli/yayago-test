import WhatsIncluded from './whats-included';
import Requirements from './requirements';
import TermsConditions from './terms-conditions';

interface OverviewProps {
  carId: number;
  name: string;
}

export default function Overview({ carId, name }: OverviewProps) {
  return (
    <div className='bg-white border border-slate-200 rounded-2xl p-6 shadow-sm'>
      <h2 className='text-2xl font-bold text-gray-900 mb-3'>Overview</h2>
      <div className='prose max-w-none text-gray-700 text-sm leading-relaxed'>
        <p className='mb-3'>
          Experience a comfortable and stylish drive with the <span className='font-semibold'>{name}</span>. Perfect for
          city cruising and weekend getaways, this car is carefully maintained and ready for your next trip.
        </p>
        <p className='mb-0'>
          Check what other drivers think, review what&apos;s included in the rental, and make sure you meet the
          requirements before booking.
        </p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mt-5'>
        <TermsConditions />
        <WhatsIncluded />
        <Requirements />
      </div>
    </div>
  );
}
