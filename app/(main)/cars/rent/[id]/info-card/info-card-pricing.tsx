import { cn } from '@/lib/utils';

interface InfoCardPricingProps {
  pricePerDay: number;
  pricePerWeek?: number;
  pricePerMonth?: number;
  currency: string;
  className?: string;
}

export default function InfoCardPricing({
  pricePerDay,
  pricePerWeek,
  pricePerMonth,
  currency,
  className,
}: InfoCardPricingProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-4 sm:px-5 sm:py-5 flex flex-col gap-3',
        className
      )}
    >
      <div className='flex items-baseline justify-between gap-3'>
        <div>
          <div className='text-xs uppercase tracking-wide text-slate-500'>From</div>
          <div className='flex items-baseline gap-2'>
            <span className='text-2xl sm:text-3xl font-bold text-primary'>{pricePerDay}</span>
            <span className='text-sm sm:text-base font-semibold text-slate-700'>
              {currency}{' '}
              <span className='text-xs sm:text-sm font-normal text-slate-500'>
                / day
              </span>
            </span>
          </div>
        </div>
        {(pricePerWeek || pricePerMonth) && (
          <div className='text-right space-y-1 text-xs sm:text-sm text-slate-600'>
            {pricePerWeek && (
              <div>
                <span className='font-medium text-slate-700'>Weekly</span>{' '}
                <span className='font-semibold text-primary'>
                  {pricePerWeek} {currency}
                </span>
              </div>
            )}
            {pricePerMonth && (
              <div>
                <span className='font-medium text-slate-700'>Monthly</span>{' '}
                <span className='font-semibold text-primary'>
                  {pricePerMonth} {currency}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      <p className='text-[11px] sm:text-xs text-slate-500'>
        No hidden fees. Final price confirmed before you pay.
      </p>
    </div>
  );
}
