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
