'use client';

import { useId, useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Star } from 'lucide-react';

interface RatingInputProps {
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}

export default function RatingInput({ value, onValueChange, disabled }: RatingInputProps) {
  const id = useId();
  const [hoverRating, setHoverRating] = useState('');

  return (
    <fieldset className='space-y-4'>
      <RadioGroup className='inline-flex gap-0' value={value} onValueChange={onValueChange} disabled={disabled}>
        {['1', '2', '3', '4', '5'].map((starValue) => (
          <label
            key={starValue}
            className='group relative cursor-pointer rounded p-0.5 outline-none has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50'
            onMouseEnter={() => !disabled && setHoverRating(starValue)}
            onMouseLeave={() => setHoverRating('')}
          >
            <RadioGroupItem id={`${id}-${starValue}`} value={starValue} className='sr-only' />
            <Star
              size={24}
              className={`transition-all ${
                (hoverRating || value || '0') >= starValue ? 'fill-amber-500 text-amber-500' : 'text-input'
              } group-hover:scale-110`}
            />
            <span className='sr-only'>
              {starValue} star{starValue === '1' ? '' : 's'}
            </span>
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
