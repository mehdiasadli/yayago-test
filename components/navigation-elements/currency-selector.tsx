'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface CurrencySelectorProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function CurrencySelector({ variant = 'dark', className }: CurrencySelectorProps) {
  const isDark = variant === 'dark';

  return (
    <Select defaultValue='aed'>
      <SelectTrigger
        className={`w-32 h-9 text-sm ${
          isDark ? 'bg-white/10 border-white/20 text-gray-300' : 'bg-gray-100 border-gray-200 text-gray-700'
        } ${className}`}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='aed'>AED (د.إ)</SelectItem>
        <SelectItem value='usd'>USD ($)</SelectItem>
        <SelectItem value='eur'>EUR (€)</SelectItem>
        <SelectItem value='gbp'>GBP (£)</SelectItem>
      </SelectContent>
    </Select>
  );
}
