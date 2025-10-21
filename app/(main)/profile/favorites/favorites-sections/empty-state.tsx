import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className='bg-white border-2 border-gray-200 p-16 text-center'>
      <Heart className='w-16 h-16 text-gray-300 mx-auto mb-4' strokeWidth={2} />
      <h3 className='text-xl font-bold text-gray-900 mb-2'>No favorites yet</h3>
      <p className='text-gray-600 mb-6'>Start saving cars you're interested in</p>
      <Link href='/cars/rent'>
        <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
          <Search className='w-4 h-4 mr-2' />
          Browse Available Cars
        </Button>
      </Link>
    </div>
  );
}
