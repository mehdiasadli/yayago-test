import { CardFooter } from '../ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FavoriteButton from './favorite-button';
import { Button } from '../ui/button';

interface FooterActionsProps {
  carId: string;
  isFavorite: boolean;
}

export default function FooterActions({ carId, isFavorite }: FooterActionsProps) {
  return (
    <CardFooter className='p-0 flex'>
      <Button asChild className='h-12' variant='link'>
        <Link
          href={`/cars/rent/${carId}`}
          className='w-full flex items-center justify-center gap-2 transition-all duration-300 group/button'
        >
          <span>View Details</span>
          <ArrowRight className='w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300' />
        </Link>
      </Button>
      <FavoriteButton carId={carId} isFavorite={isFavorite} />
    </CardFooter>
  );
}
