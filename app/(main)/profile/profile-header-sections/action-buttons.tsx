import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import LogoutButton from '@/components/logout-button';

export default function ActionButtons() {
  return (
    <div className='flex gap-3 w-full sm:w-auto sm:flex-shrink-0 sm:ml-4'>
      <Link href='/profile/listings/new' className='flex-1 sm:flex-initial'>
        <Button className='w-full h-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-semibold px-5 lg:px-7 py-2.5 lg:py-3 transition-all shadow-md hover:shadow-lg'>
          <Plus className='w-4 h-4 sm:mr-2' strokeWidth={2.5} />
          <span className='hidden sm:inline'>Add New Car</span>
          <span className='sm:hidden'>Add Car</span>
        </Button>
      </Link>
      <LogoutButton variant='profile' />
    </div>
  );
}
