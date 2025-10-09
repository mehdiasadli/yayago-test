import { Button } from '@/components/ui/button';
import {
  Calendar,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  Car,
  User,
  MapPin,
  DollarSign,
  TrendingUp,
  FileText,
  Ban,
} from 'lucide-react';

export const metadata = {
  title: 'Bookings Management - Admin',
  description: 'Manage platform bookings',
};

// Mock bookings data
const bookings = [
  {
    id: 'BK-2025-001',
    vehicle: 'BMW X5',
    vehicleModel: '2023',
    renter: 'Sarah Johnson',
    renterEmail: 'sarah.j@example.com',
    owner: 'John Doe',
    startDate: 'Feb 15, 2025',
    endDate: 'Feb 20, 2025',
    days: 5,
    dailyRate: 120,
    totalAmount: 600,
    status: 'active',
    payment: 'paid',
    location: 'Baku',
    pickupTime: '10:00 AM',
    returnTime: '10:00 AM',
    bookingDate: 'Feb 10, 2025',
  },
  {
    id: 'BK-2025-002',
    vehicle: 'Mercedes-Benz C-Class',
    vehicleModel: '2024',
    renter: 'Michael Chen',
    renterEmail: 'michael.c@example.com',
    owner: 'Jane Smith',
    startDate: 'Feb 18, 2025',
    endDate: 'Feb 22, 2025',
    days: 4,
    dailyRate: 100,
    totalAmount: 400,
    status: 'confirmed',
    payment: 'paid',
    location: 'Baku',
    pickupTime: '2:00 PM',
    returnTime: '2:00 PM',
    bookingDate: 'Feb 12, 2025',
  },
  {
    id: 'BK-2025-003',
    vehicle: 'Toyota Camry',
    vehicleModel: '2023',
    renter: 'Emma Wilson',
    renterEmail: 'emma.w@example.com',
    owner: 'Bob Wilson',
    startDate: 'Feb 25, 2025',
    endDate: 'Feb 28, 2025',
    days: 3,
    dailyRate: 80,
    totalAmount: 240,
    status: 'pending',
    payment: 'pending',
    location: 'Ganja',
    pickupTime: '9:00 AM',
    returnTime: '9:00 AM',
    bookingDate: 'Feb 14, 2025',
  },
  {
    id: 'BK-2025-004',
    vehicle: 'Audi A6',
    vehicleModel: '2024',
    renter: 'David Miller',
    renterEmail: 'david.m@example.com',
    owner: 'Alice Brown',
    startDate: 'Feb 10, 2025',
    endDate: 'Feb 13, 2025',
    days: 3,
    dailyRate: 150,
    totalAmount: 450,
    status: 'completed',
    payment: 'paid',
    location: 'Baku',
    pickupTime: '11:00 AM',
    returnTime: '11:00 AM',
    bookingDate: 'Feb 5, 2025',
  },
  {
    id: 'BK-2025-005',
    vehicle: 'Honda Accord',
    vehicleModel: '2023',
    renter: 'Lisa Anderson',
    renterEmail: 'lisa.a@example.com',
    owner: 'Charlie Davis',
    startDate: 'Feb 20, 2025',
    endDate: 'Feb 23, 2025',
    days: 3,
    dailyRate: 70,
    totalAmount: 210,
    status: 'cancelled',
    payment: 'refunded',
    location: 'Sumqayit',
    pickupTime: '3:00 PM',
    returnTime: '3:00 PM',
    bookingDate: 'Feb 8, 2025',
  },
  {
    id: 'BK-2025-006',
    vehicle: 'Tesla Model 3',
    vehicleModel: '2024',
    renter: 'Robert Lee',
    renterEmail: 'robert.l@example.com',
    owner: 'David Miller',
    startDate: 'Feb 16, 2025',
    endDate: 'Feb 19, 2025',
    days: 3,
    dailyRate: 180,
    totalAmount: 540,
    status: 'dispute',
    payment: 'held',
    location: 'Baku',
    pickupTime: '1:00 PM',
    returnTime: '1:00 PM',
    bookingDate: 'Feb 11, 2025',
  },
];

const statusColors = {
  active: 'bg-blue-100 text-blue-700',
  confirmed: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  completed: 'bg-gray-100 text-gray-700',
  cancelled: 'bg-red-100 text-red-700',
  dispute: 'bg-orange-100 text-orange-700',
};

const statusIcons = {
  active: CheckCircle,
  confirmed: CheckCircle,
  pending: Clock,
  completed: CheckCircle,
  cancelled: XCircle,
  dispute: AlertCircle,
};

const paymentColors = {
  paid: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  refunded: 'bg-blue-100 text-blue-700',
  held: 'bg-orange-100 text-orange-700',
};

export default function AdminBookingsPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div className='flex items-start justify-between flex-wrap gap-4'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Bookings Management</h1>
          <p className='text-gray-600'>Monitor and manage all platform bookings</p>
        </div>

        <div className='flex gap-3'>
          <Button variant='outline' className='hover:bg-gray-50'>
            <Download className='w-4 h-4 mr-2' />
            Export
          </Button>
          <Button variant='outline' className='hover:bg-gray-50'>
            <Filter className='w-4 h-4 mr-2' />
            Advanced Filters
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className='grid md:grid-cols-2 xl:grid-cols-6 gap-6'>
        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-blue-100 flex items-center justify-center'>
              <Calendar className='w-5 h-5 text-blue-600' strokeWidth={2} />
            </div>
            <div className='text-2xl font-bold text-gray-900'>1,220</div>
          </div>
          <div className='text-sm text-gray-600'>Total Bookings</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-blue-100 flex items-center justify-center'>
              <CheckCircle className='w-5 h-5 text-blue-600' strokeWidth={2} />
            </div>
            <div className='text-2xl font-bold text-gray-900'>89</div>
          </div>
          <div className='text-sm text-gray-600'>Active Now</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-yellow-100 flex items-center justify-center'>
              <Clock className='w-5 h-5 text-yellow-600' strokeWidth={2} />
            </div>
            <div className='text-2xl font-bold text-gray-900'>34</div>
          </div>
          <div className='text-sm text-gray-600'>Pending</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-green-100 flex items-center justify-center'>
              <CheckCircle className='w-5 h-5 text-green-600' strokeWidth={2} />
            </div>
            <div className='text-2xl font-bold text-gray-900'>1,042</div>
          </div>
          <div className='text-sm text-gray-600'>Completed</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-red-100 flex items-center justify-center'>
              <XCircle className='w-5 h-5 text-red-600' strokeWidth={2} />
            </div>
            <div className='text-2xl font-bold text-gray-900'>42</div>
          </div>
          <div className='text-sm text-gray-600'>Cancelled</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-orange-100 flex items-center justify-center'>
              <AlertCircle className='w-5 h-5 text-orange-600' strokeWidth={2} />
            </div>
            <div className='text-2xl font-bold text-gray-900'>13</div>
          </div>
          <div className='text-sm text-gray-600'>Disputes</div>
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
                placeholder='Search by booking ID, renter, vehicle...'
                className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
              />
            </div>
          </div>

          <select className='px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
            <option>All Status</option>
            <option>Active</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
            <option>Dispute</option>
          </select>

          <select className='px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
            <option>All Payments</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Refunded</option>
            <option>Held</option>
          </select>
        </div>
      </div>

      {/* Bookings Table */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  <input type='checkbox' className='w-4 h-4' />
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Booking ID
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Vehicle
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Renter</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Dates</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Duration
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Amount</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Status</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Payment
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y-2 divide-gray-100'>
              {bookings.map((booking) => {
                const StatusIcon = statusIcons[booking.status as keyof typeof statusIcons];

                return (
                  <tr key={booking.id} className='hover:bg-gray-50'>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <input type='checkbox' className='w-4 h-4' />
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='font-bold text-primary'>{booking.id}</div>
                      <div className='text-xs text-gray-500'>Booked: {booking.bookingDate}</div>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center gap-3'>
                        <div className='w-12 h-12 bg-gray-200 flex items-center justify-center flex-shrink-0'>
                          <Car className='w-6 h-6 text-gray-400' strokeWidth={2} />
                        </div>
                        <div>
                          <div className='font-semibold text-gray-900'>{booking.vehicle}</div>
                          <div className='text-sm text-gray-600'>{booking.vehicleModel}</div>
                          <div className='text-xs text-gray-500'>Owner: {booking.owner}</div>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div>
                        <div className='font-semibold text-gray-900'>{booking.renter}</div>
                        <div className='text-sm text-gray-600'>{booking.renterEmail}</div>
                        <div className='text-xs text-gray-500 flex items-center gap-1 mt-1'>
                          <MapPin className='w-3 h-3' strokeWidth={2} />
                          {booking.location}
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='text-sm'>
                        <div className='font-semibold text-gray-900'>Start: {booking.startDate}</div>
                        <div className='text-gray-600'>{booking.pickupTime}</div>
                        <div className='font-semibold text-gray-900 mt-1'>End: {booking.endDate}</div>
                        <div className='text-gray-600'>{booking.returnTime}</div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-center'>
                        <div className='text-2xl font-bold text-gray-900'>{booking.days}</div>
                        <div className='text-xs text-gray-600'>days</div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div>
                        <div className='font-bold text-gray-900'>₼{booking.totalAmount}</div>
                        <div className='text-xs text-gray-600'>₼{booking.dailyRate}/day</div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase ${statusColors[booking.status as keyof typeof statusColors]}`}
                      >
                        <StatusIcon className='w-3 h-3' strokeWidth={2} />
                        {booking.status}
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div
                        className={`inline-flex items-center px-3 py-1 text-xs font-bold uppercase ${paymentColors[booking.payment as keyof typeof paymentColors]}`}
                      >
                        {booking.payment}
                      </div>
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
          <div className='text-sm text-gray-600'>Showing 1-6 of 1,220 bookings</div>
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

      {/* Quick Actions */}
      <div className='grid md:grid-cols-3 gap-6'>
        <div className='bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200 p-6'>
          <div className='flex items-start gap-4 mb-4'>
            <div className='w-12 h-12 bg-yellow-200 flex items-center justify-center'>
              <Clock className='w-6 h-6 text-yellow-700' strokeWidth={2} />
            </div>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 mb-1'>Pending Approvals</h3>
              <p className='text-sm text-gray-700'>34 bookings need confirmation</p>
            </div>
          </div>
          <Button className='w-full bg-yellow-600 hover:bg-yellow-700 text-white'>Review Pending</Button>
        </div>

        <div className='bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 p-6'>
          <div className='flex items-start gap-4 mb-4'>
            <div className='w-12 h-12 bg-orange-200 flex items-center justify-center'>
              <AlertCircle className='w-6 h-6 text-orange-700' strokeWidth={2} />
            </div>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 mb-1'>Active Disputes</h3>
              <p className='text-sm text-gray-700'>13 disputes require resolution</p>
            </div>
          </div>
          <Button className='w-full bg-orange-600 hover:bg-orange-700 text-white'>Resolve Disputes</Button>
        </div>

        <div className='bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 p-6'>
          <div className='flex items-start gap-4 mb-4'>
            <div className='w-12 h-12 bg-green-200 flex items-center justify-center'>
              <FileText className='w-6 h-6 text-green-700' strokeWidth={2} />
            </div>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 mb-1'>Generate Report</h3>
              <p className='text-sm text-gray-700'>Export bookings data and insights</p>
            </div>
          </div>
          <Button variant='outline' className='w-full hover:bg-green-100 border-green-300'>
            Create Report
          </Button>
        </div>
      </div>
    </div>
  );
}
