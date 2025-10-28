interface PricingProps {
  pricePerDay: number;
  pricePerWeek?: number;
  pricePerMonth?: number;
  currency: string;
}

export default function Pricing({ pricePerDay, pricePerWeek, pricePerMonth, currency }: PricingProps) {
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
            {pricePerDay} {currency} <span className='text-sm text-gray-600'>/ day</span>
          </div>
        </div>
        {/* Weekly Rate */}
        {pricePerWeek && (
          <div className='flex items-center justify-between py-3 border-b border-gray-200'>
            <div>
              <div className='font-semibold text-gray-900'>Weekly Rate</div>
              <div className='text-sm text-gray-600'>7 days or more</div>
            </div>
            <div className='text-2xl font-bold text-green-600'>
              {pricePerWeek} {currency} <span className='text-sm text-gray-600'>/ week</span>
            </div>
          </div>
        )}
        {/* Monthly Rate */}
        {pricePerMonth && (
          <div className='flex items-center justify-between py-3'>
            <div>
              <div className='font-semibold text-gray-900'>Monthly Rate</div>
              <div className='text-sm text-gray-600'>30 days or more</div>
            </div>
            <div className='text-2xl font-bold text-green-600'>
              {pricePerMonth} {currency} <span className='text-sm text-gray-600'>/ month</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
