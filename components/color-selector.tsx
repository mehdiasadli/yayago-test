import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';

type ColorInput = {
  name: string; // blue
  value: string; // #0000FF
  className: string; // blue-500
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
    className: 'white',
    label: 'White',
  },
  {
    name: 'black',
    value: '#000000',
    className: 'black',
    label: 'Black',
  },
  {
    name: 'silver',
    value: '#C0C0C0',
    className: 'gray-400',
    label: 'Silver',
  },
  {
    name: 'gray',
    value: '#808080',
    className: 'gray-500',
    label: 'Gray',
  },
  {
    name: 'red',
    value: '#DC2626',
    className: 'red-600',
    label: 'Red',
  },
  {
    name: 'blue',
    value: '#2563EB',
    className: 'blue-600',
    label: 'Blue',
  },
  {
    name: 'navy',
    value: '#1E3A8A',
    className: 'blue-900',
    label: 'Navy Blue',
  },
  {
    name: 'green',
    value: '#16A34A',
    className: 'green-600',
    label: 'Green',
  },
  {
    name: 'beige',
    value: '#D4B896',
    className: 'amber-200',
    label: 'Beige',
  },
  {
    name: 'brown',
    value: '#78350F',
    className: 'amber-900',
    label: 'Brown',
  },
  {
    name: 'yellow',
    value: '#EAB308',
    className: 'yellow-500',
    label: 'Yellow',
  },
  {
    name: 'orange',
    value: '#EA580C',
    className: 'orange-600',
    label: 'Orange',
  },
  {
    name: 'burgundy',
    value: '#7F1D1D',
    className: 'red-900',
    label: 'Burgundy',
  },
  {
    name: 'purple',
    value: '#7C3AED',
    className: 'purple-600',
    label: 'Purple',
  },
  {
    name: 'gold',
    value: '#D97706',
    className: 'amber-600',
    label: 'Gold',
  },
  {
    name: 'champagne',
    value: '#F5DEB3',
    className: 'amber-100',
    label: 'Champagne',
  },
];

interface ColorSelectorProps {
  colors?: ColorInput[];
  defaultValue?: string;
  className?: string;
  itemClassName?: ((colorClassName: string) => string) | string;
  value: string;
  onChange: (value: string) => void;
}

export default function ColorSelector({
  colors = defaultColors,
  defaultValue = colors[0]?.value ?? '',
  className,
  itemClassName,
  value,
  onChange,
}: ColorSelectorProps) {
  return (
    <RadioGroup
      onValueChange={onChange}
      value={value}
      className={cn('flex gap-1.5', className)}
      defaultValue={defaultValue}
    >
      {colors.map((color) => (
        <RadioGroupItem
          key={color.value}
          value={color.value}
          aria-label={color.label}
          className={cn(
            'size-6 shadow-none rounded-none',
            'webkit-appearance-none appearance-none',
            typeof itemClassName === 'function' ? itemClassName(color.className) : itemClassName,
            `border-${color.className} bg-${color.className}`,
            `data-[state=checked]:border-black data-[state=checked]:ring-2 data-[state=checked]:ring-${color.className}`
          )}
        />
      ))}
    </RadioGroup>
  );
}
