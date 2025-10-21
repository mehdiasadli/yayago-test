import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function ListingsHeader() {
  return (
    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
      <div>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>My Listings</h1>
        <p className='text-gray-600'>Manage and monitor all your car listings</p>
      </div>
      <Link href='/profile/listings/new'>
        <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
          <Plus className='w-4 h-4 mr-2' />
          Add New Car
        </Button>
      </Link>
    </div>
  );
}
