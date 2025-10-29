import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';
import UsersStats from './users-sections/users-stats';
import UsersTable from './users-sections/users-table';
import { TAdminGetUsersQuery } from '@/features/admin-user-management/admin-user-management.types';
import { AdminGetUsersQueryDto } from '@/features/admin-user-management/admin-user-management.dto';
import UsersTableFilters from './users-sections/users-table-filters';

export const metadata = {
  title: 'Users Management - Admin',
  description: 'Manage platform users',
};

interface AdminUsersPageProps {
  searchParams: Promise<TAdminGetUsersQuery>;
}

export default async function AdminUsersPage({ searchParams }: AdminUsersPageProps) {
  const params = AdminGetUsersQueryDto.safeParse(await searchParams)?.data;

  return (
    <div className='space-y-8'>
      {/* Page Header */}
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
          <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
            <UserPlus className='w-4 h-4 mr-2' />
            Add User
          </Button>
        </div>
      </div>

      {/* Stats */}
      <UsersStats />

      {/* Filters & Search */}
      <UsersTableFilters />

      <UsersTable params={params} />
    </div>
  );
}
