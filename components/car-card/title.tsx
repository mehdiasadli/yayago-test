import Link from 'next/link';
import { CardDescription, CardTitle } from '../ui/card';
import { mapEnumLabel } from '@/lib/utils';

interface TitleProps {
  carId: string;
  brand: string;
  model: string;
  year: number;
  carType?: string | null;
  transmission?: string | null;
}

export default function Title({ carId, brand, model, year, carType, transmission }: TitleProps) {
  return (
    <Link href={`/cars/rent/${carId}`} className='group/link block mb-2'>
      <CardTitle className='text-xl font-bold line-clamp-1 tracking-tight text-gray-900 group-hover/link:text-primary transition-colors duration-200'>
        {year} {brand} {model}
      </CardTitle>
      <CardDescription className='text-gray-500'>
        {mapEnumLabel(carType, 'Unknown Type')} • {mapEnumLabel(transmission, 'Unknown Transmission')}
      </CardDescription>
    </Link>
  );
}
