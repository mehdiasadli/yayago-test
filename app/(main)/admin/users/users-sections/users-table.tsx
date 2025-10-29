import { AdminUserManagementApi } from '@/features/admin-user-management/admin-user-management.api';
import { TAdminGetUsersQuery } from '@/features/admin-user-management/admin-user-management.types';
import UsersTableRow from './users-table-row';
import UsersTablePagination from './users-table-pagination';

export default async function UsersTable({ params }: { params?: TAdminGetUsersQuery }) {
  const usersData = await AdminUserManagementApi.getUsers(params);

  if (!usersData.success) {
    return null;
  }

  const users = usersData.data;

  return (
    <div className='bg-white border-2 border-gray-200 overflow-hidden'>
      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>User</th>
              <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Contact</th>
              <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Role</th>
              <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Status</th>
              <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Activity</th>
              <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Actions</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y-2 divide-gray-100'>
            {users.map((user) => {
              return <UsersTableRow key={user.id} user={user} />;
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <UsersTablePagination page={params?.page} />
    </div>
  );
}
