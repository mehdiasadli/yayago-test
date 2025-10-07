'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface LanguageSelectorProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function LanguageSelector({ variant = 'dark', className }: LanguageSelectorProps) {
  const isDark = variant === 'dark';

  return (
    <Select defaultValue='en'>
      <SelectTrigger
        className={`w-32 h-9 text-sm ${
          isDark ? 'bg-white/10 border-white/20 text-gray-300' : 'bg-gray-100 border-gray-200 text-gray-700'
        } ${className}`}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='en'>English</SelectItem>
        <SelectItem value='ar'>العربية</SelectItem>
        <SelectItem value='ru'>Русский</SelectItem>
        <SelectItem value='fr'>Français</SelectItem>
      </SelectContent>
    </Select>
  );
}
