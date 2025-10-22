import { Info } from 'lucide-react';

interface PricingProps {
  pricePerDay: number;
  currency: string;
}

export default function Pricing({ pricePerDay, currency }: PricingProps) {
  return (
    <div className='bg-white border-2 border-gray-200 p-6'>
      <h2 className='text-2xl font-bold text-gray-900 mb-4'>Pricing Breakdown</h2>
      <div className='space-y-4'>
        <div className='flex items-center justify-between py-3 border-b border-gray-200'>
          <div>
            <div className='font-semibold text-gray-900'>Daily Rate</div>
            <div className='text-sm text-gray-600'>Standard daily rental rate</div>
          </div>
          <div className='text-2xl font-bold text-primary'>
            {pricePerDay} {currency}
          </div>
        </div>
        {/* Weekly Rate */}
        {/* <div className='flex items-center justify-between py-3 border-b border-gray-200'>
          <div>
            <div className='font-semibold text-gray-900'>Weekly Rate</div>
            <div className='text-sm text-gray-600'>7 days or more (10% discount)</div>
          </div>
          <div className='text-2xl font-bold text-green-600'>
            {(pricePerDay * 0.9).toFixed(0)} {currency}/day
          </div>
        </div> */}
        {/* Monthly Rate */}
        {/* <div className='flex items-center justify-between py-3'>
          <div>
            <div className='font-semibold text-gray-900'>Monthly Rate</div>
            <div className='text-sm text-gray-600'>30 days or more (20% discount)</div>
          </div>
          <div className='text-2xl font-bold text-green-600'>
            {(pricePerDay * 0.8).toFixed(0)} {currency}/day
          </div>
        </div> */}
      </div>

      <div className='mt-6 p-4 bg-blue-50 border-2 border-blue-200 text-blue-900'>
        <div className='flex items-start gap-3'>
          <Info className='w-5 h-5 flex-shrink-0 mt-0.5' strokeWidth={2} />
          <div className='text-sm'>
            <strong>Security Deposit:</strong> A refundable security deposit of ₼1,000-3,000 is required depending on
            the vehicle class. The deposit is fully refunded upon return of the vehicle in good condition.
          </div>
        </div>
      </div>
    </div>
  );
}
