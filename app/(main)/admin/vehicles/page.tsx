import { Button } from '@/components/ui/button';
import {
  Car,
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  Ban,
  AlertCircle,
  TrendingUp,
  Calendar,
  DollarSign,
  MapPin,
  User,
  Star,
} from 'lucide-react';

export const metadata = {
  title: 'Vehicles Management - Admin',
  description: 'Manage platform vehicles',
};

// Mock vehicles data
const vehicles = [
  {
    id: 1,
    name: 'BMW X5',
    model: '2023',
    category: 'SUV',
    owner: 'John Doe',
    location: 'Baku',
    status: 'active',
    verification: 'verified',
    dailyRate: 120,
    bookings: 24,
    revenue: 2880,
    rating: 4.9,
    availability: 'Available',
    licensePlate: 'AA 123 BB',
    addedDate: 'Jan 15, 2025',
    image: '/placeholder-car.jpg',
  },
  {
    id: 2,
    name: 'Mercedes-Benz C-Class',
    model: '2024',
    category: 'Sedan',
    owner: 'Jane Smith',
    location: 'Baku',
    status: 'active',
    verification: 'verified',
    dailyRate: 100,
    bookings: 18,
    revenue: 1800,
    rating: 4.8,
    availability: 'Rented',
    licensePlate: 'BB 456 CC',
    addedDate: 'Jan 20, 2025',
    image: '/placeholder-car.jpg',
  },
  {
    id: 3,
    name: 'Toyota Camry',
    model: '2023',
    category: 'Sedan',
    owner: 'Bob Wilson',
    location: 'Ganja',
    status: 'active',
    verification: 'verified',
    dailyRate: 80,
    bookings: 16,
    revenue: 1280,
    rating: 4.7,
    availability: 'Available',
    licensePlate: 'CC 789 DD',
    addedDate: 'Feb 1, 2025',
    image: '/placeholder-car.jpg',
  },
  {
    id: 4,
    name: 'Audi A6',
    model: '2024',
    category: 'Luxury',
    owner: 'Alice Brown',
    location: 'Baku',
    status: 'pending',
    verification: 'pending',
    dailyRate: 150,
    bookings: 0,
    revenue: 0,
    rating: 0,
    availability: 'Under Review',
    licensePlate: 'DD 012 EE',
    addedDate: 'Feb 8, 2025',
    image: '/placeholder-car.jpg',
  },
  {
    id: 5,
    name: 'Honda Accord',
    model: '2023',
    category: 'Sedan',
    owner: 'Charlie Davis',
    location: 'Sumqayit',
    status: 'active',
    verification: 'verified',
    dailyRate: 70,
    bookings: 12,
    revenue: 840,
    rating: 4.6,
    availability: 'Available',
    licensePlate: 'EE 345 FF',
    addedDate: 'Jan 25, 2025',
    image: '/placeholder-car.jpg',
  },
  {
    id: 6,
    name: 'Tesla Model 3',
    model: '2024',
    category: 'Electric',
    owner: 'David Miller',
    location: 'Baku',
    status: 'suspended',
    verification: 'verified',
    dailyRate: 180,
    bookings: 8,
    revenue: 1440,
    rating: 3.5,
    availability: 'Suspended',
    licensePlate: 'FF 678 GG',
    addedDate: 'Dec 10, 2024',
    image: '/placeholder-car.jpg',
  },
];

const statusColors = {
  active: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  suspended: 'bg-red-100 text-red-700',
};

const statusIcons = {
  active: CheckCircle,
  pending: Clock,
  suspended: Ban,
};

const verificationColors = {
  verified: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  rejected: 'bg-red-100 text-red-700',
};

export default function AdminVehiclesPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div className='flex items-start justify-between flex-wrap gap-4'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Vehicles Management</h1>
          <p className='text-gray-600'>Manage and monitor all platform vehicles</p>
        </div>

        <div className='flex gap-3'>
          <Button variant='outline' className='hover:bg-gray-50'>
            <Download className='w-4 h-4 mr-2' />
            Export
          </Button>
          <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
            <Plus className='w-4 h-4 mr-2' />
            Add Vehicle
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className='grid md:grid-cols-4 gap-6'>
        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-blue-100 flex items-center justify-center'>
              <Car className='w-6 h-6 text-blue-600' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>456</div>
              <div className='text-sm text-gray-600'>Total Vehicles</div>
            </div>
          </div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-green-100 flex items-center justify-center'>
              <CheckCircle className='w-6 h-6 text-green-600' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>398</div>
              <div className='text-sm text-gray-600'>Active</div>
            </div>
          </div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-yellow-100 flex items-center justify-center'>
              <Clock className='w-6 h-6 text-yellow-600' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>42</div>
              <div className='text-sm text-gray-600'>Pending Verification</div>
            </div>
          </div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-red-100 flex items-center justify-center'>
              <Ban className='w-6 h-6 text-red-600' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>16</div>
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
                placeholder='Search vehicles by name, model, license plate...'
                className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
              />
            </div>
          </div>

          <select className='px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
            <option>All Categories</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Luxury</option>
            <option>Economy</option>
            <option>Electric</option>
          </select>

          <select className='px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
            <option>All Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Suspended</option>
          </select>
        </div>
      </div>

      {/* Vehicles Table */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  <input type='checkbox' className='w-4 h-4' />
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Vehicle
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Owner</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Category
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Status</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Verification
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Performance
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Pricing
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y-2 divide-gray-100'>
              {vehicles.map((vehicle) => {
                const StatusIcon = statusIcons[vehicle.status as keyof typeof statusIcons];

                return (
                  <tr key={vehicle.id} className='hover:bg-gray-50'>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <input type='checkbox' className='w-4 h-4' />
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center gap-3'>
                        <div className='w-16 h-16 bg-gray-200 flex items-center justify-center flex-shrink-0'>
                          <Car className='w-8 h-8 text-gray-400' strokeWidth={2} />
                        </div>
                        <div>
                          <div className='font-semibold text-gray-900'>{vehicle.name}</div>
                          <div className='text-sm text-gray-600'>
                            {vehicle.model} • {vehicle.licensePlate}
                          </div>
                          <div className='text-xs text-gray-500'>Added {vehicle.addedDate}</div>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center gap-2'>
                        <User className='w-4 h-4 text-gray-400' strokeWidth={2} />
                        <div>
                          <div className='text-sm font-semibold text-gray-900'>{vehicle.owner}</div>
                          <div className='text-xs text-gray-500 flex items-center gap-1'>
                            <MapPin className='w-3 h-3' strokeWidth={2} />
                            {vehicle.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-semibold text-gray-900'>{vehicle.category}</div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase ${statusColors[vehicle.status as keyof typeof statusColors]}`}
                      >
                        <StatusIcon className='w-3 h-3' strokeWidth={2} />
                        {vehicle.status}
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase ${verificationColors[vehicle.verification as keyof typeof verificationColors]}`}
                      >
                        {vehicle.verification === 'verified' && <CheckCircle className='w-3 h-3' strokeWidth={2} />}
                        {vehicle.verification === 'pending' && <Clock className='w-3 h-3' strokeWidth={2} />}
                        {vehicle.verification}
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='text-sm space-y-1'>
                        <div className='flex items-center gap-2'>
                          <Calendar className='w-4 h-4 text-gray-400' strokeWidth={2} />
                          <span className='text-gray-700'>{vehicle.bookings} bookings</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Star className='w-4 h-4 text-yellow-500 fill-yellow-500' strokeWidth={2} />
                          <span className='text-gray-700'>{vehicle.rating || 'N/A'}</span>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div>
                        <div className='font-bold text-gray-900'>₼{vehicle.dailyRate}/day</div>
                        <div className='text-xs text-gray-500'>₼{vehicle.revenue} earned</div>
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
          <div className='text-sm text-gray-600'>Showing 1-6 of 456 vehicles</div>
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
              <AlertCircle className='w-6 h-6 text-yellow-700' strokeWidth={2} />
            </div>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 mb-1'>Pending Verification</h3>
              <p className='text-sm text-gray-700'>42 vehicles need verification review</p>
            </div>
          </div>
          <Button className='w-full bg-yellow-600 hover:bg-yellow-700 text-white'>Review Pending</Button>
        </div>

        <div className='bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-6'>
          <div className='flex items-start gap-4 mb-4'>
            <div className='w-12 h-12 bg-blue-200 flex items-center justify-center'>
              <TrendingUp className='w-6 h-6 text-blue-700' strokeWidth={2} />
            </div>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 mb-1'>Performance Report</h3>
              <p className='text-sm text-gray-700'>Generate vehicle performance insights</p>
            </div>
          </div>
          <Button variant='outline' className='w-full hover:bg-blue-100 border-blue-300'>
            Generate Report
          </Button>
        </div>

        <div className='bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 p-6'>
          <div className='flex items-start gap-4 mb-4'>
            <div className='w-12 h-12 bg-green-200 flex items-center justify-center'>
              <DollarSign className='w-6 h-6 text-green-700' strokeWidth={2} />
            </div>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 mb-1'>Revenue Overview</h3>
              <p className='text-sm text-gray-700'>Total: ₼89,400 this month</p>
            </div>
          </div>
          <Button variant='outline' className='w-full hover:bg-green-100 border-green-300'>
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
