'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type ColorInput = {
  name: string; // blue
  value: string; // #0000FF
  label: string; // Blue
};

/**
 * Popular car exterior colors
 * Based on most common vehicle colors in the automotive industry
 */
export const defaultColors: ColorInput[] = [
  {
    name: 'white',
    value: '#FFFFFF',
    label: 'White',
  },
  {
    name: 'black',
    value: '#000000',
    label: 'Black',
  },
  {
    name: 'silver',
    value: '#C0C0C0',
    label: 'Silver',
  },
  {
    name: 'gray',
    value: '#808080',
    label: 'Gray',
  },
  {
    name: 'red',
    value: '#DC2626',
    label: 'Red',
  },
  {
    name: 'blue',
    value: '#2563EB',
    label: 'Blue',
  },
  {
    name: 'navy',
    value: '#1E3A8A',
    label: 'Navy Blue',
  },
  {
    name: 'green',
    value: '#16A34A',
    label: 'Green',
  },
  {
    name: 'beige',
    value: '#D4B896',
    label: 'Beige',
  },
  {
    name: 'brown',
    value: '#78350F',
    label: 'Brown',
  },
  {
    name: 'yellow',
    value: '#EAB308',
    label: 'Yellow',
  },
  {
    name: 'orange',
    value: '#EA580C',
    label: 'Orange',
  },
  {
    name: 'burgundy',
    value: '#7F1D1D',
    label: 'Burgundy',
  },
  {
    name: 'purple',
    value: '#7C3AED',
    label: 'Purple',
  },
  {
    name: 'gold',
    value: '#D97706',
    label: 'Gold',
  },
  {
    name: 'champagne',
    value: '#F5DEB3',
    label: 'Champagne',
  },
];

interface ColorSelectorProps {
  colors?: ColorInput[];
  defaultValue?: string;
  className?: string;
  value: string;
  onChange: (value: string) => void;
  showLabels?: boolean;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export default function ColorSelector({
  colors = defaultColors,
  defaultValue,
  className,
  value,
  onChange,
  showLabels = false,
  size = 'md',
  disabled = false,
}: ColorSelectorProps) {
  const sizeClasses = {
    sm: 'size-6',
    md: 'size-8',
    lg: 'size-10',
  };

  const checkSizes = {
    sm: 'size-3',
    md: 'size-4',
    lg: 'size-5',
  };

  // Helper function to determine if the color is light (needs dark check icon)
  const isLightColor = (hex: string) => {
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luma > 180;
  };

  const ColorButton = ({ color }: { color: ColorInput }) => {
    const isSelected = value === color.value;
    const needsDarkIcon = isLightColor(color.value);

    return (
      <button
        type='button'
        onClick={() => !disabled && onChange(color.value)}
        disabled={disabled}
        aria-label={`Select ${color.label}`}
        aria-pressed={isSelected}
        className={cn(
          sizeClasses[size],
          'relative rounded-md border-2 transition-all duration-200',
          'hover:scale-110 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          isSelected ? 'border-gray-900 ring-2 ring-gray-900 ring-offset-2' : 'border-gray-300',
          disabled && 'opacity-50 cursor-not-allowed hover:scale-100',
          !disabled && 'cursor-pointer'
        )}
        style={{ backgroundColor: color.value }}
      >
        {isSelected && (
          <Check
            className={cn(checkSizes[size], 'absolute inset-0 m-auto', needsDarkIcon ? 'text-gray-900' : 'text-white')}
            strokeWidth={3}
          />
        )}
      </button>
    );
  };

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <TooltipProvider delayDuration={200}>
        <div
          className={cn('flex flex-wrap gap-2', showLabels ? 'gap-3' : 'gap-2')}
          role='radiogroup'
          aria-label='Color selection'
        >
          {colors.map((color) => (
            <div key={color.value} className='flex flex-col items-center gap-1'>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ColorButton color={color} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{color.label}</p>
                </TooltipContent>
              </Tooltip>
              {showLabels && <span className='text-xs text-gray-600 text-center'>{color.label}</span>}
            </div>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
}
