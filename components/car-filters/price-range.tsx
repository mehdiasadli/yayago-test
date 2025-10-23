'use client';

import { Label } from '../ui/label';
import { Slider } from '../ui/slider';

interface PriceRangeProps {
  priceRange?: [number, number];
  setPriceRange: (priceRange: [number, number]) => void;
  minPrice: number;
  maxPrice: number;
  currency: string;
}

export default function PriceRange({ priceRange, setPriceRange, minPrice, maxPrice, currency }: PriceRangeProps) {
  const formatPrice = (price: number) => {
    return price === maxPrice ? `${currency} ${price.toLocaleString()}+` : `${currency} ${price.toLocaleString()}`;
  };

  return (
    <div className='*:not-first:mt-3'>
      <Label className='tabular-nums text-md'>
        Price from {formatPrice(priceRange?.[0] ?? 0)} to {formatPrice(priceRange?.[1] ?? 0)}
      </Label>
      <div className='flex items-center gap-4'>
        <Slider
          value={priceRange}
          onValueChange={(value) => setPriceRange(value as [number, number])}
          min={minPrice}
          max={maxPrice}
          aria-label='Price range slider'
        />
      </div>
    </div>
  );
}
