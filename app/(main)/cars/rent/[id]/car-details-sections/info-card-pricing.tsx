import { cn } from '@/lib/utils';

interface InfoCardPricingProps {
  pricePerDay: number;
  currency: string;
  className?: string;
  priceTextSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | `${2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}xl`;
  currencyTextSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | `${2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}xl`;
  dividerTextSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | `${2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}xl`;
  dividerTextColor?: string;
}

export default function InfoCardPricing({
  pricePerDay,
  priceTextSize = '3xl',
  currencyTextSize = 'xl',
  dividerTextSize = 'sm',
  dividerTextColor = 'gray-600',
  currency,
  className,
}: InfoCardPricingProps) {
  return (
    <div className={cn('mb-6 pb-6 border-b-2 border-gray-200', className)}>
      <div className='flex items-baseline gap-2 mb-2'>
        <span className={`text-${priceTextSize} font-bold text-primary`}>{pricePerDay}</span>
        <span className={`text-${currencyTextSize} font-semibold text-${dividerTextColor}`}>
          {currency} <span className={`text-${dividerTextSize} text-${dividerTextColor}`}>/ day</span>
        </span>
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
