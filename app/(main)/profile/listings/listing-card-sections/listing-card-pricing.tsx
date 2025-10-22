interface ListingCardPricingProps {
  currency: string;
  pricePerDay: number;
}

export default function ListingCardPricing({ currency, pricePerDay }: ListingCardPricingProps) {
  return (
    <div className='grid grid-cols-3 gap-4 mb-4 pb-4 border-b-2 border-gray-100'>
      <div>
        <div className='text-xs text-gray-600 mb-1'>Daily Rate</div>
        <div className='text-xl font-bold text-gray-900'>
          {pricePerDay} {currency}
        </div>
      </div>
      {/* <div>
              <div className='text-xs text-gray-600 mb-1'>Weekly Rate</div>
              <div className='text-xl font-bold text-gray-900'>₼{listing.weeklyRate}</div>
            </div>
            <div>
              <div className='text-xs text-gray-600 mb-1'>Monthly Rate</div>
              <div className='text-xl font-bold text-gray-900'>₼{listing.monthlyRate}</div>
            </div> */}
    </div>
  );
}
