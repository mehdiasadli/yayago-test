import { TGetCarByIdResponse } from '@/features/cars/cars.types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getFeaturedImages(carImages?: { imageUrl: string; isPrimary: boolean }[] | null, count = 4) {
  if (count < 1) {
    return [];
  }

  const primary = carImages?.find((image) => image.isPrimary) || carImages?.[0];
  return !primary ? [] : [primary, ...(carImages?.filter((image) => !image.isPrimary).slice(0, count - 1) || [])];
}

export function getInitials(name?: string | null, count: 1 | 2 | 3 = 2) {
  if (!name || !name.trim() || count < 1) {
    return '';
  }

  return name
    .split(' ')
    .map((n) => n.charAt(0).toUpperCase())
    .slice(0, count)
    .join('');
}

interface MapEnumOptions {
  capitalization?: {
    first?: ['u' | 'l' | null, ('u' | 'l' | null)?];
    rest?: ['u' | 'l' | null, ('u' | 'l' | null)?];
  };
  splitBy?: string;
  joinWith?: string;
  defaultValue?: string;
}

export function mapEnumLabel(value?: string | null, options: MapEnumOptions = {}) {
  const { capitalization, splitBy = '_', joinWith = ' ', defaultValue = 'Unknown' } = options;

  if (!value || !value.trim()) {
    return defaultValue;
  }

  const capitalize = (word: string, index: number) => {
    if (index === 0) {
      // first word
      const config = [capitalization?.first?.[0] ?? 'u', capitalization?.first?.[1] ?? 'l'] as const;

      const firstLetter =
        config[0] === 'u' ? word[0].toUpperCase() : config[0] === 'l' ? word[0].toLowerCase() : word[0];
      const restLetters =
        config[1] === 'u'
          ? word.slice(1).toUpperCase()
          : config[1] === 'l'
            ? word.slice(1).toLowerCase()
            : word.slice(1);

      return `${firstLetter}${restLetters}`;
    }

    // rest of the words
    const config = [capitalization?.rest?.[0] ?? 'u', capitalization?.rest?.[1] ?? 'l'] as const;

    const firstLetter = config[0] === 'u' ? word[0].toUpperCase() : config[0] === 'l' ? word[0].toLowerCase() : word[0];
    const restLetters =
      config[1] === 'u' ? word.slice(1).toUpperCase() : config[1] === 'l' ? word.slice(1).toLowerCase() : word.slice(1);

    return `${firstLetter}${restLetters}`;
  };

  return value.split(splitBy).map(capitalize).join(joinWith);
}

export function createMutationFn<Fn extends (...args: any[]) => Promise<any>>(fn: Fn) {
  return async (...args: Parameters<Fn>) => {
    const response = await fn(...args);

    if (!response.success) {
      throw new Error(response.message);
    }

    return response.data;
  };
}
