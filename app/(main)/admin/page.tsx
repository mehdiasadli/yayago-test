import { Button } from '@/components/ui/button';
import {
  Users,
  Car,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  Star,
  AlertCircle,
  CheckCircle,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

export const metadata = {
  title: 'Admin Dashboard - YayaGo',
  description: 'Manage and monitor your platform',
};

export default function AdminOverviewPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Admin Dashboard</h1>
        <p className='text-gray-600'>Welcome back! Here's what's happening with your platform today.</p>
      </div>

      {/* Key Metrics */}
      <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-6'>
        {/* Total Users */}
        <div className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 transition-colors'>
          <div className='flex items-start justify-between mb-4'>
            <div className='w-12 h-12 bg-blue-100 flex items-center justify-center'>
              <Users className='w-6 h-6 text-blue-600' strokeWidth={2} />
            </div>
            <div className='flex items-center gap-1 text-green-600 text-sm font-semibold'>
              <TrendingUp className='w-4 h-4' strokeWidth={2} />
              12.5%
            </div>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>1,234</div>
          <div className='text-sm text-gray-600'>Total Users</div>
          <div className='text-xs text-gray-500 mt-2'>+128 this month</div>
        </div>

        {/* Active Vehicles */}
        <div className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 transition-colors'>
          <div className='flex items-start justify-between mb-4'>
            <div className='w-12 h-12 bg-purple-100 flex items-center justify-center'>
              <Car className='w-6 h-6 text-purple-600' strokeWidth={2} />
            </div>
            <div className='flex items-center gap-1 text-green-600 text-sm font-semibold'>
              <TrendingUp className='w-4 h-4' strokeWidth={2} />
              8.3%
            </div>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>456</div>
          <div className='text-sm text-gray-600'>Active Vehicles</div>
          <div className='text-xs text-gray-500 mt-2'>+34 this month</div>
        </div>

        {/* Revenue */}
        <div className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 transition-colors'>
          <div className='flex items-start justify-between mb-4'>
            <div className='w-12 h-12 bg-green-100 flex items-center justify-center'>
              <DollarSign className='w-6 h-6 text-green-600' strokeWidth={2} />
            </div>
            <div className='flex items-center gap-1 text-green-600 text-sm font-semibold'>
              <TrendingUp className='w-4 h-4' strokeWidth={2} />
              23.1%
            </div>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>₼89.4K</div>
          <div className='text-sm text-gray-600'>Monthly Revenue</div>
          <div className='text-xs text-gray-500 mt-2'>+₼16.8K vs last month</div>
        </div>

        {/* Active Bookings */}
        <div className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 transition-colors'>
          <div className='flex items-start justify-between mb-4'>
            <div className='w-12 h-12 bg-orange-100 flex items-center justify-center'>
              <Calendar className='w-6 h-6 text-orange-600' strokeWidth={2} />
            </div>
            <div className='flex items-center gap-1 text-red-600 text-sm font-semibold'>
              <TrendingDown className='w-4 h-4' strokeWidth={2} />
              3.2%
            </div>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>89</div>
          <div className='text-sm text-gray-600'>Active Bookings</div>
          <div className='text-xs text-gray-500 mt-2'>23 today</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className='grid lg:grid-cols-2 gap-6'>
        {/* Recent Activity */}
        <div className='bg-white border-2 border-gray-200 overflow-hidden'>
          <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
            <h2 className='text-xl font-bold text-gray-900'>Recent Activity</h2>
          </div>
          <div className='p-6'>
            <div className='space-y-4'>
              {[
                {
                  type: 'user',
                  title: 'New user registered',
                  description: 'Sarah Johnson joined YayaGo',
                  time: '2 minutes ago',
                  icon: Users,
                  color: 'blue',
                },
                {
                  type: 'booking',
                  title: 'New booking created',
                  description: 'BMW X5 rented for 5 days',
                  time: '15 minutes ago',
                  icon: Calendar,
                  color: 'green',
                },
                {
                  type: 'vehicle',
                  title: 'Vehicle listed',
                  description: 'Mercedes-Benz C-Class added',
                  time: '1 hour ago',
                  icon: Car,
                  color: 'purple',
                },
                {
                  type: 'payment',
                  title: 'Payment received',
                  description: '₼560 from completed rental',
                  time: '2 hours ago',
                  icon: DollarSign,
                  color: 'green',
                },
                {
                  type: 'review',
                  title: 'New review posted',
                  description: '5-star review for Toyota Camry',
                  time: '3 hours ago',
                  icon: Star,
                  color: 'yellow',
                },
              ].map((activity, index) => {
                const Icon = activity.icon;
                const colorClasses = {
                  blue: 'bg-blue-100 text-blue-600',
                  green: 'bg-green-100 text-green-600',
                  purple: 'bg-purple-100 text-purple-600',
                  yellow: 'bg-yellow-100 text-yellow-600',
                };

                return (
                  <div key={index} className='flex items-start gap-4'>
                    <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 ${colorClasses[activity.color as keyof typeof colorClasses]}`}>
                      <Icon className='w-5 h-5' strokeWidth={2} />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <div className='font-semibold text-gray-900'>{activity.title}</div>
                      <div className='text-sm text-gray-600'>{activity.description}</div>
                      <div className='text-xs text-gray-500 mt-1'>{activity.time}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className='bg-white border-2 border-gray-200 overflow-hidden'>
          <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
            <h2 className='text-xl font-bold text-gray-900'>System Status</h2>
          </div>
          <div className='p-6'>
            <div className='space-y-4'>
              <div className='flex items-center justify-between p-4 border-2 border-green-200 bg-green-50'>
                <div className='flex items-center gap-3'>
                  <CheckCircle className='w-6 h-6 text-green-600' strokeWidth={2} />
                  <div>
                    <div className='font-semibold text-gray-900'>Payment Gateway</div>
                    <div className='text-sm text-gray-600'>All systems operational</div>
                  </div>
                </div>
                <div className='text-green-600 font-bold text-sm'>100%</div>
              </div>

              <div className='flex items-center justify-between p-4 border-2 border-green-200 bg-green-50'>
                <div className='flex items-center gap-3'>
                  <CheckCircle className='w-6 h-6 text-green-600' strokeWidth={2} />
                  <div>
                    <div className='font-semibold text-gray-900'>Database</div>
                    <div className='text-sm text-gray-600'>Running smoothly</div>
                  </div>
                </div>
                <div className='text-green-600 font-bold text-sm'>99.9%</div>
              </div>

              <div className='flex items-center justify-between p-4 border-2 border-yellow-200 bg-yellow-50'>
                <div className='flex items-center gap-3'>
                  <Clock className='w-6 h-6 text-yellow-600' strokeWidth={2} />
                  <div>
                    <div className='font-semibold text-gray-900'>Email Service</div>
                    <div className='text-sm text-gray-600'>Slight delay detected</div>
                  </div>
                </div>
                <div className='text-yellow-600 font-bold text-sm'>95%</div>
              </div>

              <div className='flex items-center justify-between p-4 border-2 border-green-200 bg-green-50'>
                <div className='flex items-center gap-3'>
                  <CheckCircle className='w-6 h-6 text-green-600' strokeWidth={2} />
                  <div>
                    <div className='font-semibold text-gray-900'>API Services</div>
                    <div className='text-sm text-gray-600'>All endpoints responding</div>
                  </div>
                </div>
                <div className='text-green-600 font-bold text-sm'>100%</div>
              </div>
            </div>

            <div className='mt-6 pt-6 border-t-2 border-gray-100'>
              <Button variant='outline' className='w-full hover:bg-gray-50'>
                View System Logs
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts & Quick Actions */}
      <div className='grid lg:grid-cols-2 gap-6'>
        {/* Alerts */}
        <div className='bg-white border-2 border-gray-200 overflow-hidden'>
          <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
            <h2 className='text-xl font-bold text-gray-900'>Alerts & Issues</h2>
          </div>
          <div className='p-6'>
            <div className='space-y-3'>
              <div className='flex items-start gap-3 p-4 border-2 border-red-200 bg-red-50'>
                <AlertCircle className='w-5 h-5 text-red-600 flex-shrink-0 mt-0.5' strokeWidth={2} />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900'>3 Pending Verifications</div>
                  <div className='text-sm text-gray-600'>User documents awaiting review</div>
                  <Button size='sm' className='mt-2 bg-red-600 hover:bg-red-700 text-white'>
                    Review Now
                  </Button>
                </div>
              </div>

              <div className='flex items-start gap-3 p-4 border-2 border-yellow-200 bg-yellow-50'>
                <AlertCircle className='w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5' strokeWidth={2} />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900'>12 Reported Issues</div>
                  <div className='text-sm text-gray-600'>User-reported problems need attention</div>
                  <Button size='sm' variant='outline' className='mt-2 hover:bg-yellow-100 border-yellow-300'>
                    View Issues
                  </Button>
                </div>
              </div>

              <div className='flex items-start gap-3 p-4 border-2 border-blue-200 bg-blue-50'>
                <AlertCircle className='w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5' strokeWidth={2} />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900'>7 Pending Payouts</div>
                  <div className='text-sm text-gray-600'>Total: ₼15,680 to be processed</div>
                  <Button size='sm' variant='outline' className='mt-2 hover:bg-blue-100 border-blue-300'>
                    Process Payouts
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className='bg-white border-2 border-gray-200 overflow-hidden'>
          <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
            <h2 className='text-xl font-bold text-gray-900'>Quick Actions</h2>
          </div>
          <div className='p-6'>
            <div className='grid grid-cols-2 gap-4'>
              <Button variant='outline' className='h-24 flex flex-col items-center justify-center gap-2 hover:bg-gray-50'>
                <Users className='w-6 h-6' strokeWidth={2} />
                <span className='text-sm font-semibold'>Add User</span>
              </Button>

              <Button variant='outline' className='h-24 flex flex-col items-center justify-center gap-2 hover:bg-gray-50'>
                <Car className='w-6 h-6' strokeWidth={2} />
                <span className='text-sm font-semibold'>Add Vehicle</span>
              </Button>

              <Button variant='outline' className='h-24 flex flex-col items-center justify-center gap-2 hover:bg-gray-50'>
                <Calendar className='w-6 h-6' strokeWidth={2} />
                <span className='text-sm font-semibold'>View Bookings</span>
              </Button>

              <Button variant='outline' className='h-24 flex flex-col items-center justify-center gap-2 hover:bg-gray-50'>
                <DollarSign className='w-6 h-6' strokeWidth={2} />
                <span className='text-sm font-semibold'>Payments</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performers */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-xl font-bold text-gray-900'>Top Performing Vehicles</h2>
        </div>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Vehicle
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Owner
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Bookings
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Revenue
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Rating
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Status
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y-2 divide-gray-100'>
              {[
                { vehicle: 'BMW X5', owner: 'John Doe', bookings: 24, revenue: '₼2,880', rating: 4.9 },
                { vehicle: 'Mercedes C-Class', owner: 'Jane Smith', bookings: 18, revenue: '₼2,160', rating: 4.8 },
                { vehicle: 'Toyota Camry', owner: 'Bob Wilson', bookings: 16, revenue: '₼1,280', rating: 4.7 },
                { vehicle: 'Audi A6', owner: 'Alice Brown', bookings: 14, revenue: '₼1,680', rating: 4.9 },
                { vehicle: 'Honda Accord', owner: 'Charlie Davis', bookings: 12, revenue: '₼960', rating: 4.6 },
              ].map((item, index) => (
                <tr key={index} className='hover:bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='font-semibold text-gray-900'>{item.vehicle}</div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-gray-700'>{item.owner}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='flex items-center gap-1'>
                      <ArrowUpRight className='w-4 h-4 text-green-600' strokeWidth={2} />
                      <span className='font-semibold text-gray-900'>{item.bookings}</span>
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap font-semibold text-gray-900'>{item.revenue}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='flex items-center gap-1'>
                      <Star className='w-4 h-4 text-yellow-500 fill-yellow-500' strokeWidth={2} />
                      <span className='font-semibold text-gray-900'>{item.rating}</span>
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='px-3 py-1 bg-green-100 text-green-700 text-xs font-bold inline-block'>
                      ACTIVE
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

