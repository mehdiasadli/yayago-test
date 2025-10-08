import { Button } from '@/components/ui/button';
import {
  Users,
  Search,
  Filter,
  Download,
  UserPlus,
  Eye,
  Edit,
  Trash2,
  Shield,
  Ban,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Car,
  Calendar,
} from 'lucide-react';

export const metadata = {
  title: 'Users Management - Admin',
  description: 'Manage platform users',
};

// Mock users data
const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+994 50 123 45 67',
    role: 'Car Owner',
    status: 'verified',
    joinDate: 'Jan 15, 2025',
    listings: 5,
    bookings: 28,
    revenue: '₼12,400',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+994 50 234 56 78',
    role: 'Renter',
    status: 'verified',
    joinDate: 'Feb 3, 2025',
    listings: 0,
    bookings: 12,
    revenue: '₼0',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    phone: '+994 50 345 67 89',
    role: 'Car Owner',
    status: 'pending',
    joinDate: 'Feb 10, 2025',
    listings: 2,
    bookings: 3,
    revenue: '₼890',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Emma Wilson',
    email: 'emma.w@example.com',
    phone: '+994 50 456 78 90',
    role: 'Car Owner',
    status: 'verified',
    joinDate: 'Jan 28, 2025',
    listings: 3,
    bookings: 18,
    revenue: '₼7,200',
    rating: 4.9,
  },
  {
    id: 5,
    name: 'David Miller',
    email: 'david.m@example.com',
    phone: '+994 50 567 89 01',
    role: 'Renter',
    status: 'verified',
    joinDate: 'Feb 5, 2025',
    listings: 0,
    bookings: 8,
    revenue: '₼0',
    rating: 4.6,
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    email: 'lisa.a@example.com',
    phone: '+994 50 678 90 12',
    role: 'Car Owner',
    status: 'suspended',
    joinDate: 'Dec 15, 2024',
    listings: 1,
    bookings: 45,
    revenue: '₼18,900',
    rating: 3.2,
  },
];

const statusColors = {
  verified: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  suspended: 'bg-red-100 text-red-700',
};

const statusIcons = {
  verified: CheckCircle,
  pending: Clock,
  suspended: Ban,
};

export default function AdminUsersPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div className='flex items-start justify-between flex-wrap gap-4'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Users Management</h1>
          <p className='text-gray-600'>Manage and monitor all platform users</p>
        </div>

        <div className='flex gap-3'>
          <Button variant='outline' className='hover:bg-gray-50'>
            <Download className='w-4 h-4 mr-2' />
            Export
          </Button>
          <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
            <UserPlus className='w-4 h-4 mr-2' />
            Add User
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className='grid md:grid-cols-4 gap-6'>
        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-blue-100 flex items-center justify-center'>
              <Users className='w-6 h-6 text-blue-600' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>1,234</div>
              <div className='text-sm text-gray-600'>Total Users</div>
            </div>
          </div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-green-100 flex items-center justify-center'>
              <CheckCircle className='w-6 h-6 text-green-600' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>1,102</div>
              <div className='text-sm text-gray-600'>Verified</div>
            </div>
          </div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-yellow-100 flex items-center justify-center'>
              <Clock className='w-6 h-6 text-yellow-600' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>89</div>
              <div className='text-sm text-gray-600'>Pending</div>
            </div>
          </div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-red-100 flex items-center justify-center'>
              <Ban className='w-6 h-6 text-red-600' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>43</div>
              <div className='text-sm text-gray-600'>Suspended</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className='bg-white border-2 border-gray-200 p-6'>
        <div className='grid md:grid-cols-4 gap-4'>
          <div className='md:col-span-2'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' strokeWidth={2} />
              <input
                type='text'
                placeholder='Search users by name, email, or phone...'
                className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
              />
            </div>
          </div>

          <select className='px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
            <option>All Roles</option>
            <option>Car Owner</option>
            <option>Renter</option>
            <option>Both</option>
          </select>

          <select className='px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
            <option>All Status</option>
            <option>Verified</option>
            <option>Pending</option>
            <option>Suspended</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  <input type='checkbox' className='w-4 h-4' />
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>User</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Contact</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Role</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Status</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Activity</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Revenue</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y-2 divide-gray-100'>
              {users.map((user) => {
                const StatusIcon = statusIcons[user.status as keyof typeof statusIcons];

                return (
                  <tr key={user.id} className='hover:bg-gray-50'>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <input type='checkbox' className='w-4 h-4' />
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-sm'>
                          {user.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                        <div>
                          <div className='font-semibold text-gray-900'>{user.name}</div>
                          <div className='text-sm text-gray-500'>Joined {user.joinDate}</div>
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
                          {user.phone}
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-semibold text-gray-900'>{user.role}</div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase ${statusColors[user.status as keyof typeof statusColors]}`}>
                        <StatusIcon className='w-3 h-3' strokeWidth={2} />
                        {user.status}
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='text-sm space-y-1'>
                        <div className='flex items-center gap-2'>
                          <Car className='w-4 h-4 text-gray-400' strokeWidth={2} />
                          <span className='text-gray-700'>{user.listings} listings</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Calendar className='w-4 h-4 text-gray-400' strokeWidth={2} />
                          <span className='text-gray-700'>{user.bookings} bookings</span>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='font-bold text-gray-900'>{user.revenue}</div>
                      <div className='text-xs text-gray-500'>★ {user.rating}</div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center gap-2'>
                        <button className='w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors'>
                          <Eye className='w-4 h-4' strokeWidth={2} />
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors'>
                          <Edit className='w-4 h-4' strokeWidth={2} />
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors'>
                          <Trash2 className='w-4 h-4' strokeWidth={2} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className='border-t-2 border-gray-200 px-6 py-4 flex items-center justify-between'>
          <div className='text-sm text-gray-600'>Showing 1-6 of 1,234 users</div>
          <div className='flex gap-2'>
            <Button variant='outline' size='sm' disabled className='hover:bg-gray-50'>
              Previous
            </Button>
            <Button variant='outline' size='sm' className='hover:bg-gray-50'>
              1
            </Button>
            <Button variant='outline' size='sm' className='hover:bg-gray-50'>
              2
            </Button>
            <Button variant='outline' size='sm' className='hover:bg-gray-50'>
              3
            </Button>
            <Button variant='outline' size='sm' className='hover:bg-gray-50'>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

