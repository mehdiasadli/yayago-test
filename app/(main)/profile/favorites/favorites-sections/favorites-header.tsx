import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Link from 'next/link';

export default function FavoritesHeader() {
  return (
    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
      <div>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>My Favorites</h1>
        <p className='text-gray-600'>Cars you've saved for later</p>
      </div>
      <Link href='/cars/rent'>
        <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
          <Search className='w-4 h-4 mr-2' />
          Browse More Cars
        </Button>
      </Link>
    </div>
  );
}
