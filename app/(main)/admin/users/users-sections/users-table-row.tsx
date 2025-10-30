import { TAdminGetUserByIdResponse } from '@/features/admin-user-management/admin-user-management.types';
import { Calendar, Car, CheckCircle, Eye, Mail, Phone, XIcon } from 'lucide-react';
import UsersTableDelete from './users-table-delete';
import UsersTableStatusChange from './users-table-status-change';

export default function UsersTableRow({ user }: { user: TAdminGetUserByIdResponse }) {
  const getStatusInfo = (active: boolean) => {
    return {
      text: active ? 'Active' : 'Inactive',
      color: active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700',
      Icon: active ? CheckCircle : XIcon,
    };
  };

  const { Icon: StatusIcon, text, color } = getStatusInfo(user.active);

  return (
    <tr key={user.id} className='hover:bg-gray-50'>
      <td className='px-6 py-4'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-sm'>
            {user.fullName
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
          <div>
            <div className='font-semibold text-gray-900'>{user.fullName}</div>
            <div className='text-sm text-gray-500'>Joined {user.createdAt.toLocaleDateString()}</div>
          </div>
        </div>
      </td>
      <td className='px-6 py-4'>
        <div className='text-sm space-y-1'>
          <div className='flex items-center gap-2 text-gray-700'>
            <Mail className='w-4 h-4 text-gray-400' strokeWidth={2} />
            {user.email}
          </div>
          <div className='flex items-center gap-2 text-gray-700'>
            <Phone className='w-4 h-4 text-gray-400' strokeWidth={2} />
            {user.phoneNumber}
          </div>
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm font-semibold text-gray-900'>{'USER'}</div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase ${color}`}>
          <StatusIcon className='w-3 h-3' strokeWidth={2} />
          {text}
        </div>
      </td>
      <td className='px-6 py-4'>
        <div className='text-sm space-y-1'>
          <div className='flex items-center gap-2'>
            <Car className='w-4 h-4 text-gray-400' strokeWidth={2} />
            <span className='text-gray-700'>Unknown listings</span>
          </div>
          <div className='flex items-center gap-2'>
            <Calendar className='w-4 h-4 text-gray-400' strokeWidth={2} />
            <span className='text-gray-700'>{user.totalBookings} bookings</span>
          </div>
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='flex items-center gap-2'>
          <UsersTableStatusChange userId={user.id} initialActive={user.active} />
          <UsersTableDelete userId={user.id} />
        </div>
      </td>
    </tr>
  );
}
