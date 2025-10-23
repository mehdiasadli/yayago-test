'use client';

import { Label } from '../ui/label';
import { Slider } from '../ui/slider';

interface YearRangeProps {
  yearRange: [number, number];
  setYearRange: (yearRange: [number, number]) => void;
  minYear: number;
  maxYear: number;
}

export default function YearRange({ yearRange, setYearRange, minYear, maxYear }: YearRangeProps) {
  return (
    <div className='*:not-first:mt-3'>
      <Label className='tabular-nums text-md'>
        Year from {yearRange?.[0] ?? minYear} to {yearRange?.[1] ?? maxYear}
      </Label>
      <div className='flex items-center gap-4'>
        <Slider
          value={yearRange ?? [minYear, maxYear]}
          onValueChange={(value) => setYearRange(value as [number, number])}
          min={minYear}
          max={maxYear}
          aria-label='Year range slider'
        />
      </div>
    </div>
  );
}
