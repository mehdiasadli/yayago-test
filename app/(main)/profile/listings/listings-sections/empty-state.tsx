import { Button } from '@/components/ui/button';
import { Car, Plus } from 'lucide-react';
import Link from 'next/link';

export default function EmptyState() {
  return (
    <div className='bg-white border-2 border-gray-200 p-16 text-center'>
      <Car className='w-16 h-16 text-gray-300 mx-auto mb-4' strokeWidth={2} />
      <h3 className='text-xl font-bold text-gray-900 mb-2'>No listings yet</h3>
      <p className='text-gray-600 mb-6'>Start earning by adding your first car</p>
      <Link href='/profile/listings/new'>
        <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
          <Plus className='w-4 h-4 mr-2' />
          Add Your First Car
        </Button>
      </Link>
    </div>
  );
}
