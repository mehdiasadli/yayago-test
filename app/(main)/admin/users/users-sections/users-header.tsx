import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function UsersHeader() {
  return (
    <div className='flex items-start justify-between flex-wrap gap-4'>
      <div>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Users Management</h1>
        <p className='text-gray-600'>Manage and monitor all platform users</p>
      </div>

      <div className='flex gap-3'>
        {/* <Button variant='outline' className='hover:bg-gray-50'>
            <Download className='w-4 h-4 mr-2' />
            Export
          </Button> */}
        <Button asChild className='bg-primary hover:bg-primary/90 text-primary-foreground'>
          <Link href='/admin/users/add'>
            <UserPlus className='w-4 h-4 mr-2' />
            Add User
          </Link>
        </Button>
      </div>
    </div>
  );
}
