'use client';

import { Switch } from '../ui/switch';
import { Label } from '../ui/label';

interface CarFiltersTogglesProps {
  featuredOnly?: boolean;
  setFeaturedOnly: (featuredOnly: boolean) => void;
  noDepositOnly?: boolean;
  setNoDepositOnly: (noDepositOnly: boolean) => void;
}

export default function CarFiltersToggles({
  featuredOnly,
  setFeaturedOnly,
  noDepositOnly,
  setNoDepositOnly,
}: CarFiltersTogglesProps) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='relative flex w-full items-start justify-between gap-2 rounded-md border border-input p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50'>
        <Switch
          id={'featured-only'}
          checked={featuredOnly}
          onCheckedChange={setFeaturedOnly}
          className='order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 data-[state=checked]:[&_span]:translate-x-2 data-[state=checked]:[&_span]:rtl:-translate-x-2'
        />
        <Label htmlFor={'featured-only'}>Featured Only</Label>
      </div>

      <div className='relative flex w-full items-start justify-between gap-2 rounded-md border border-input p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50'>
        <Switch
          id={'no-deposit-only'}
          checked={noDepositOnly}
          onCheckedChange={setNoDepositOnly}
          className='order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 data-[state=checked]:[&_span]:translate-x-2 data-[state=checked]:[&_span]:rtl:-translate-x-2'
        />
        <Label htmlFor={'no-deposit-only'}>No Deposit Only</Label>
      </div>
    </div>
  );
}
