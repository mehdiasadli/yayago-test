import { Button } from '@/components/ui/button';
import { Users, Car } from 'lucide-react';
import Link from 'next/link';

export default function AdminPageQuickActions() {
  return (
    <div className='bg-white border-2 border-gray-200 overflow-hidden'>
      <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
        <h2 className='text-xl font-bold text-gray-900'>Quick Actions</h2>
      </div>
      <div className='p-6'>
        <div className='grid grid-cols-2 gap-4'>
          <Button
            asChild
            variant='outline'
            className='h-24 flex flex-col items-center justify-center gap-2 hover:bg-gray-50'
          >
            <Link href='/admin/users/add'>
              <Users className='w-6 h-6' strokeWidth={2} />
              <span className='text-sm font-semibold'>Add User</span>
            </Link>
          </Button>

          <Button
            asChild
            variant='outline'
            className='h-24 flex flex-col items-center justify-center gap-2 hover:bg-gray-50'
          >
            <Link href='/admin/vehicles/add'>
              <Car className='w-6 h-6' strokeWidth={2} />
              <span className='text-sm font-semibold'>Add Vehicle</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
