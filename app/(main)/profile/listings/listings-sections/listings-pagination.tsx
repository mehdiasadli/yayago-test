import { Button } from '@/components/ui/button';

export default function ListingsPagination() {
  return (
    <div className='flex items-center justify-between bg-white border-2 border-gray-200 p-6'>
      <div className='text-sm text-gray-600'>Showing 1 to 5 of 5 listings</div>
      <div className='flex gap-2'>
        <Button variant='outline' size='sm' disabled className='hover:bg-gray-50'>
          Previous
        </Button>
        <Button variant='outline' size='sm' className='bg-primary text-primary-foreground'>
          1
        </Button>
        <Button variant='outline' size='sm' disabled className='hover:bg-gray-50'>
          Next
        </Button>
      </div>
    </div>
  );
}
