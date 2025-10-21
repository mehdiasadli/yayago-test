import { CirclePercent, Route } from 'lucide-react';

interface PricingSectionProps {
  pricePerDay: number;
  currency: string;
  km?: number;
  discount?: number | null;
}

function calculateDiscountedPrice(pricePerDay: number, discount?: number | null) {
  if (!discount) return pricePerDay;

  return Number((pricePerDay * (1 - discount / 100)).toFixed(2));
}

export default function PricingSection({ pricePerDay, currency, km = 100, discount = null }: PricingSectionProps) {
  const discountedPrice = calculateDiscountedPrice(pricePerDay, discount);
  const hasDiscount = Boolean(discount && discount > 0);

  return (
    <div className='mt-auto pt-3 border-t border-gray-200'>
      {hasDiscount && (
        <div className='flex items-center gap-1 text-xs text-gray-500'>
          <CirclePercent className='w-3 h-3 text-green-500' strokeWidth={2.5} />
          <span className='text-green-500'>{discount}% off</span>
        </div>
      )}

      <div className='flex items-end justify-between mt-2'>
        <div className='flex items-baseline gap-1'>
          <span className='text-2xl font-bold text-gray-900'>{hasDiscount ? discountedPrice : pricePerDay}</span>
          <span className='text-sm font-semibold text-gray-600'>{currency}</span>
          <span className='text-xs text-gray-500'>/ day</span>
        </div>

        <div className='flex items-center gap-1 text-xs text-gray-500'>
          <Route className='w-3 h-3' strokeWidth={2.5} />
          <span>{km} km</span>
        </div>
      </div>
    </div>
  );
}
