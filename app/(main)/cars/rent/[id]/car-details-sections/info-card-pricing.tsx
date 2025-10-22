interface InfoCardPricingProps {
  pricePerDay: number;
  currency: string;
}

export default function InfoCardPricing({ pricePerDay, currency }: InfoCardPricingProps) {
  return (
    <div className='mb-6 pb-6 border-b-2 border-gray-200'>
      <div className='flex items-baseline gap-2 mb-2'>
        <span className='text-4xl font-bold text-primary'>{pricePerDay}</span>
        <span className='text-xl font-semibold text-gray-600'>{currency}</span>
        <span className='text-gray-500'>/ day</span>
      </div>
      {/* <div className='text-sm text-gray-600'>
        <div>
          Weekly: {(pricePerDay * 7 * 0.9).toFixed(0)} {currency} (10% off)
        </div>
        <div>
          Monthly: {(pricePerDay * 30 * 0.8).toFixed(0)} {currency} (20% off)
        </div>
      </div> */}
    </div>
  );
}
