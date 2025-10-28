import { cn } from '@/lib/utils';

interface InfoCardPricingProps {
  pricePerDay: number;
  pricePerWeek?: number;
  pricePerMonth?: number;
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
  pricePerWeek,
  pricePerMonth,
  currency,
  className,
}: InfoCardPricingProps) {
  return (
    <div className={cn('mb-6 pb-3 border-b-2 border-gray-200', className)}>
      <div className='flex items-baseline gap-2 mb-2'>
        <span className={`text-${priceTextSize} font-bold text-primary`}>{pricePerDay}</span>
        <span className={`text-${currencyTextSize} font-semibold text-${dividerTextColor}`}>
          {currency} <span className={`text-${dividerTextSize} text-${dividerTextColor}`}>/ day</span>
        </span>
      </div>
      {(pricePerWeek || pricePerMonth) && (
        <div className='text-sm text-gray-600'>
          {pricePerWeek && (
            <div>
              Weekly: <span className='font-bold text-primary'>{pricePerWeek}</span> {currency}
            </div>
          )}
          {pricePerMonth && (
            <div>
              Monthly: <span className='font-bold text-primary'>{pricePerMonth}</span> {currency}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
