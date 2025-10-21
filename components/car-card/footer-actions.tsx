import { CardFooter } from '../ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FavoriteButton from './favorite-button';

interface FooterActionsProps {
  carId: string;
  favoritePage?: boolean;
}

export default function FooterActions({ carId, favoritePage }: FooterActionsProps) {
  return (
    <CardFooter className='p-0 flex'>
      <Link
        href={`/cars/rent/${carId}`}
        className='w-full py-4 px-5 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 group/button'
      >
        <span>View Details</span>
        <ArrowRight className='w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300' />
      </Link>
      <FavoriteButton carId={carId} favoritePage={favoritePage} />
    </CardFooter>
  );
}
