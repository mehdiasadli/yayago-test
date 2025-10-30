import { Button } from '@/components/ui/button';

export default function VehiclesTablePagination() {
  return (
    <div className='border-t-2 border-gray-200 px-6 py-4 flex items-center justify-end'>
      <div className='flex gap-2'>
        <Button variant='outline' size='sm' disabled className='hover:bg-gray-50'>
          Previous
        </Button>
        <Button variant='outline' size='sm' className='hover:bg-gray-50'>
          Next
        </Button>
      </div>
    </div>
  );
}
