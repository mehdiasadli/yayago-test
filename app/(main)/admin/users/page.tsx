import UsersStats from './users-sections/users-stats';
import UsersTable from './users-sections/users-table';
import { TAdminGetUsersQuery } from '@/features/admin-user-management/admin-user-management.types';
import { AdminGetUsersQueryDto } from '@/features/admin-user-management/admin-user-management.dto';
import UsersTableFilters from './users-sections/users-table-filters';
import UsersHeader from './users-sections/users-header';

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
      <UsersHeader />

      {/* Stats */}
      <UsersStats />

      {/* Filters & Search */}
      <UsersTableFilters />

      <UsersTable params={params} />
    </div>
  );
}
