import { Button } from '@/components/ui/button';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Car,
  Users,
  Star,
  Calendar,
  Eye,
  MessageCircle,
  Clock,
  ArrowRight,
  Plus,
  Edit,
  MoreVertical,
  CheckCircle,
  AlertCircle,
  XCircle,
  BarChart3,
  Activity,
  Target,
  Zap,
  Award,
  Phone,
  Mail,
  ThumbsUp,
  TrendingDown as Down,
} from 'lucide-react';
import Link from 'next/link';
import {
  EarningsChart,
  ViewsChart,
  CarPerformanceChart,
  BookingStatusChart,
  ResponseTimeChart,
  MonthlyComparisonChart,
} from '@/components/dashboard-charts';

export const metadata = {
  title: 'Dashboard',
  description: 'Manage your listings and track your performance on YayaGo',
};

export default function DashboardPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Dashboard</h1>
          <p className='text-gray-600'>Monitor your performance and manage your listings</p>
        </div>
        <Link href='/profile/listings/new'>
          <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
            <Plus className='w-4 h-4 mr-2' />
            Add New Car
          </Button>
        </Link>
      </div>

      {/* Key Metrics - Row 1 */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
        {/* Total Earnings */}
        <div className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 hover:shadow-lg transition-all'>
          <div className='flex items-center justify-between mb-4'>
            <div className='w-12 h-12 bg-green-100 flex items-center justify-center'>
              <DollarSign className='w-6 h-6 text-green-600' strokeWidth={2} />
            </div>
            <div className='flex items-center gap-1 text-sm font-bold text-green-600'>
              <TrendingUp className='w-4 h-4' strokeWidth={2} />
              18%
            </div>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>₼12,450</div>
          <div className='text-sm text-gray-600'>Total Earnings</div>
          <div className='text-xs text-gray-500 mt-2'>+₼2,156 this month</div>
        </div>

        {/* Active Rentals */}
        <div className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 hover:shadow-lg transition-all'>
          <div className='flex items-center justify-between mb-4'>
            <div className='w-12 h-12 bg-blue-100 flex items-center justify-center'>
              <Activity className='w-6 h-6 text-blue-600' strokeWidth={2} />
            </div>
            <div className='flex items-center gap-1 text-sm font-bold text-blue-600'>
              <Clock className='w-4 h-4' strokeWidth={2} />
              Live
            </div>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>2</div>
          <div className='text-sm text-gray-600'>Active Rentals</div>
          <div className='text-xs text-gray-500 mt-2'>3 upcoming bookings</div>
        </div>

        {/* Total Views */}
        <div className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 hover:shadow-lg transition-all'>
          <div className='flex items-center justify-between mb-4'>
            <div className='w-12 h-12 bg-purple-100 flex items-center justify-center'>
              <Eye className='w-6 h-6 text-purple-600' strokeWidth={2} />
            </div>
            <div className='flex items-center gap-1 text-sm font-bold text-purple-600'>
              <TrendingUp className='w-4 h-4' strokeWidth={2} />
              24%
            </div>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>1,248</div>
          <div className='text-sm text-gray-600'>Total Views</div>
          <div className='text-xs text-gray-500 mt-2'>+156 this week</div>
        </div>

        {/* Avg Rating */}
        <div className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 hover:shadow-lg transition-all'>
          <div className='flex items-center justify-between mb-4'>
            <div className='w-12 h-12 bg-yellow-100 flex items-center justify-center'>
              <Star className='w-6 h-6 text-yellow-600' strokeWidth={2} />
            </div>
            <div className='flex items-center gap-1 text-sm font-bold text-yellow-600'>
              <TrendingUp className='w-4 h-4' strokeWidth={2} />
              0.2
            </div>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>4.8</div>
          <div className='text-sm text-gray-600'>Average Rating</div>
          <div className='text-xs text-gray-500 mt-2'>Based on 24 reviews</div>
        </div>
      </div>

      {/* Additional Metrics - Row 2 */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <div className='bg-white border-2 border-gray-200 p-4'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-primary/10 flex items-center justify-center'>
              <MessageCircle className='w-5 h-5 text-primary' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>24</div>
              <div className='text-xs text-gray-600'>Inquiries</div>
            </div>
          </div>
          <div className='text-xs text-green-600 font-semibold'>+6 this week</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-4'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-orange-100 flex items-center justify-center'>
              <Clock className='w-5 h-5 text-orange-600' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>38min</div>
              <div className='text-xs text-gray-600'>Avg Response</div>
            </div>
          </div>
          <div className='text-xs text-green-600 font-semibold'>-12min improved</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-4'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-green-100 flex items-center justify-center'>
              <CheckCircle className='w-5 h-5 text-green-600' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>85%</div>
              <div className='text-xs text-gray-600'>Acceptance</div>
            </div>
          </div>
          <div className='text-xs text-green-600 font-semibold'>+5% increase</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-4'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-red-100 flex items-center justify-center'>
              <XCircle className='w-5 h-5 text-red-600' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>2</div>
              <div className='text-xs text-gray-600'>Cancellations</div>
            </div>
          </div>
          <div className='text-xs text-gray-500'>Last 30 days</div>
        </div>
      </div>

      {/* Charts Section - Earnings and Views */}
      <div className='grid lg:grid-cols-3 gap-8'>
        {/* Earnings Trend Chart */}
        <div className='lg:col-span-2 bg-white border-2 border-gray-200 overflow-hidden'>
          <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
            <h2 className='text-2xl font-bold text-gray-900'>Earnings & Rentals Trend</h2>
            <p className='text-gray-600 mt-1'>Track your income and rental performance over time</p>
          </div>
          <div className='p-8'>
            <EarningsChart />
            <div className='grid grid-cols-3 gap-6 mt-6 pt-6 border-t-2 border-gray-100'>
              <div>
                <div className='text-sm text-gray-600 mb-1'>Total (7 months)</div>
                <div className='text-2xl font-bold text-gray-900'>₼15,150</div>
              </div>
              <div>
                <div className='text-sm text-gray-600 mb-1'>Average/month</div>
                <div className='text-2xl font-bold text-gray-900'>₼2,164</div>
              </div>
              <div>
                <div className='text-sm text-gray-600 mb-1'>Best month</div>
                <div className='text-2xl font-bold text-gray-900'>₼2,600</div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Score */}
        <div className='space-y-6'>
          <div className='bg-gradient-to-br from-primary to-primary-dark text-white border-2 border-primary overflow-hidden'>
            <div className='p-6'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center'>
                  <Target className='w-6 h-6' strokeWidth={2} />
                </div>
                <div>
                  <div className='font-bold text-sm uppercase tracking-wider'>Performance</div>
                  <div className='text-2xl font-bold'>Excellent</div>
                </div>
              </div>

              <div className='space-y-3 mb-4'>
                <div>
                  <div className='flex items-center justify-between text-sm mb-1'>
                    <span>Response Rate</span>
                    <span className='font-bold'>98%</span>
                  </div>
                  <div className='h-1.5 bg-white/20'>
                    <div className='h-full bg-white' style={{ width: '98%' }} />
                  </div>
                </div>

                <div>
                  <div className='flex items-center justify-between text-sm mb-1'>
                    <span>Acceptance Rate</span>
                    <span className='font-bold'>85%</span>
                  </div>
                  <div className='h-1.5 bg-white/20'>
                    <div className='h-full bg-white' style={{ width: '85%' }} />
                  </div>
                </div>

                <div>
                  <div className='flex items-center justify-between text-sm mb-1'>
                    <span>Customer Rating</span>
                    <span className='font-bold'>96%</span>
                  </div>
                  <div className='h-1.5 bg-white/20'>
                    <div className='h-full bg-white' style={{ width: '96%' }} />
                  </div>
                </div>
              </div>

              <div className='text-xs bg-white/10 p-3'>
                <div className='font-semibold mb-1'>Keep up the great work! 🎉</div>
                <div>You're in the top 10% of hosts on YayaGo.</div>
              </div>
            </div>
          </div>

          <div className='bg-white border-2 border-gray-200 overflow-hidden'>
            <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
              <h3 className='text-lg font-bold text-gray-900'>This Month Goals</h3>
            </div>
            <div className='p-6 space-y-4'>
              <div>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-sm font-semibold text-gray-700'>Earnings Goal</span>
                  <span className='text-sm font-bold text-primary'>80%</span>
                </div>
                <div className='h-2 bg-gray-200'>
                  <div className='h-full bg-primary' style={{ width: '80%' }} />
                </div>
                <div className='text-xs text-gray-600 mt-1'>₼2,400 / ₼3,000</div>
              </div>

              <div>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-sm font-semibold text-gray-700'>Rentals Goal</span>
                  <span className='text-sm font-bold text-green-600'>100%</span>
                </div>
                <div className='h-2 bg-gray-200'>
                  <div className='h-full bg-green-500' style={{ width: '100%' }} />
                </div>
                <div className='text-xs text-gray-600 mt-1'>12 / 12 rentals</div>
              </div>

              <div>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-sm font-semibold text-gray-700'>Response Time</span>
                  <span className='text-sm font-bold text-yellow-600'>75%</span>
                </div>
                <div className='h-2 bg-gray-200'>
                  <div className='h-full bg-yellow-500' style={{ width: '75%' }} />
                </div>
                <div className='text-xs text-gray-600 mt-1'>Under 2 hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Charts - Car Performance and Bookings */}
      <div className='grid lg:grid-cols-2 gap-8'>
        {/* Car Performance */}
        <div className='bg-white border-2 border-gray-200 overflow-hidden'>
          <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
            <h2 className='text-2xl font-bold text-gray-900'>Car Performance</h2>
            <p className='text-gray-600 mt-1'>Compare earnings and rentals across your fleet</p>
          </div>
          <div className='p-8'>
            <CarPerformanceChart />
          </div>
        </div>

        {/* Booking Status */}
        <div className='bg-white border-2 border-gray-200 overflow-hidden'>
          <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
            <h2 className='text-2xl font-bold text-gray-900'>Booking Status</h2>
            <p className='text-gray-600 mt-1'>Overview of all your rental bookings</p>
          </div>
          <div className='p-8'>
            <BookingStatusChart />
            <div className='grid grid-cols-2 gap-4 mt-6'>
              <div className='text-center p-4 bg-green-50 border border-green-200'>
                <div className='text-2xl font-bold text-green-900'>28</div>
                <div className='text-sm text-green-700'>Completed</div>
              </div>
              <div className='text-center p-4 bg-blue-50 border border-blue-200'>
                <div className='text-2xl font-bold text-blue-900'>2</div>
                <div className='text-sm text-blue-700'>Active</div>
              </div>
              <div className='text-center p-4 bg-yellow-50 border border-yellow-200'>
                <div className='text-2xl font-bold text-yellow-900'>3</div>
                <div className='text-sm text-yellow-700'>Upcoming</div>
              </div>
              <div className='text-center p-4 bg-red-50 border border-red-200'>
                <div className='text-2xl font-bold text-red-900'>2</div>
                <div className='text-sm text-red-700'>Cancelled</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Views and Response Time Charts */}
      <div className='grid lg:grid-cols-3 gap-8'>
        {/* Views Trend */}
        <div className='lg:col-span-2 bg-white border-2 border-gray-200 overflow-hidden'>
          <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
            <h2 className='text-2xl font-bold text-gray-900'>Views & Inquiries</h2>
            <p className='text-gray-600 mt-1'>Weekly visibility and engagement metrics</p>
          </div>
          <div className='p-8'>
            <ViewsChart />
            <div className='grid grid-cols-3 gap-4 mt-6 pt-6 border-t-2 border-gray-100'>
              <div className='text-center'>
                <div className='text-2xl font-bold text-gray-900'>857</div>
                <div className='text-sm text-gray-600'>Total Views</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-gray-900'>67</div>
                <div className='text-sm text-gray-600'>Inquiries</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-gray-900'>7.8%</div>
                <div className='text-sm text-gray-600'>Conversion</div>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className='bg-white border-2 border-gray-200 overflow-hidden'>
          <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
            <h3 className='text-lg font-bold text-gray-900'>Response Time</h3>
            <p className='text-sm text-gray-600 mt-1'>Daily average (minutes)</p>
          </div>
          <div className='p-6'>
            <ResponseTimeChart />
            <div className='mt-6 pt-6 border-t-2 border-gray-100 space-y-3'>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-gray-600'>This Week Avg</span>
                <span className='text-lg font-bold text-gray-900'>38min</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-gray-600'>Best Time</span>
                <span className='text-lg font-bold text-green-600'>28min</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-gray-600'>Target</span>
                <span className='text-lg font-bold text-primary'>{'<'}60min</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Year Comparison */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Year-over-Year Comparison</h2>
          <p className='text-gray-600 mt-1'>Compare your performance with last year</p>
        </div>
        <div className='p-8'>
          <MonthlyComparisonChart />
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 pt-6 border-t-2 border-gray-100'>
            <div>
              <div className='text-sm text-gray-600 mb-1'>2025 Total</div>
              <div className='text-2xl font-bold text-gray-900'>₼13,500</div>
              <div className='text-xs text-green-600 font-semibold mt-1 flex items-center gap-1'>
                <TrendingUp className='w-3 h-3' />
                +23% vs 2024
              </div>
            </div>
            <div>
              <div className='text-sm text-gray-600 mb-1'>2024 Total</div>
              <div className='text-2xl font-bold text-gray-400'>₼11,000</div>
            </div>
            <div>
              <div className='text-sm text-gray-600 mb-1'>Growth</div>
              <div className='text-2xl font-bold text-green-600'>+₼2,500</div>
            </div>
            <div>
              <div className='text-sm text-gray-600 mb-1'>Best Month</div>
              <div className='text-2xl font-bold text-gray-900'>Feb</div>
              <div className='text-xs text-gray-600 mt-1'>₼2,600</div>
            </div>
          </div>
        </div>
      </div>

      {/* My Listings */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-2xl font-bold text-gray-900'>My Listings</h2>
              <p className='text-gray-600 mt-1'>Manage and monitor your active listings</p>
            </div>
            <Link href='/profile/listings'>
              <Button variant='outline' className='hover:bg-gray-50'>
                View All
                <ArrowRight className='w-4 h-4 ml-2' />
              </Button>
            </Link>
          </div>
        </div>

        <div className='divide-y-2 divide-gray-100'>
          {/* Listing 1 */}
          <div className='p-6 hover:bg-gray-50 transition-colors'>
            <div className='flex flex-col md:flex-row gap-6'>
              <div className='w-full md:w-48 h-32 bg-gray-200 flex items-center justify-center flex-shrink-0'>
                <Car className='w-12 h-12 text-gray-400' strokeWidth={2} />
              </div>

              <div className='flex-1'>
                <div className='flex items-start justify-between mb-2'>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-1'>Toyota Camry 2022</h3>
                    <p className='text-sm text-gray-600'>Sedan • Automatic • Gasoline</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-bold'>
                      <CheckCircle className='w-3.5 h-3.5' strokeWidth={2} />
                      ACTIVE
                    </div>
                    <button className='p-2 hover:bg-gray-100 transition-colors'>
                      <MoreVertical className='w-5 h-5 text-gray-600' />
                    </button>
                  </div>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
                  <div>
                    <div className='text-sm text-gray-600 mb-1'>Daily Rate</div>
                    <div className='text-lg font-bold text-gray-900'>₼70</div>
                  </div>
                  <div>
                    <div className='text-sm text-gray-600 mb-1'>Total Views</div>
                    <div className='text-lg font-bold text-gray-900'>342</div>
                  </div>
                  <div>
                    <div className='text-sm text-gray-600 mb-1'>Rentals</div>
                    <div className='text-lg font-bold text-gray-900'>8</div>
                  </div>
                  <div>
                    <div className='text-sm text-gray-600 mb-1'>Rating</div>
                    <div className='text-lg font-bold text-gray-900'>4.9 ★</div>
                  </div>
                </div>

                <div className='flex gap-3 mt-4'>
                  <Link href='/profile/listings/1/edit'>
                    <Button size='sm' variant='outline' className='hover:bg-gray-100'>
                      <Edit className='w-4 h-4 mr-2' />
                      Edit
                    </Button>
                  </Link>
                  <Button size='sm' variant='outline' className='hover:bg-gray-100'>
                    <BarChart3 className='w-4 h-4 mr-2' />
                    Analytics
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Listing 2 */}
          <div className='p-6 hover:bg-gray-50 transition-colors'>
            <div className='flex flex-col md:flex-row gap-6'>
              <div className='w-full md:w-48 h-32 bg-gray-200 flex items-center justify-center flex-shrink-0'>
                <Car className='w-12 h-12 text-gray-400' strokeWidth={2} />
              </div>

              <div className='flex-1'>
                <div className='flex items-start justify-between mb-2'>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-1'>BMW X5 2023</h3>
                    <p className='text-sm text-gray-600'>SUV • Automatic • Diesel</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold'>
                      <Activity className='w-3.5 h-3.5' strokeWidth={2} />
                      RENTED
                    </div>
                    <button className='p-2 hover:bg-gray-100 transition-colors'>
                      <MoreVertical className='w-5 h-5 text-gray-600' />
                    </button>
                  </div>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
                  <div>
                    <div className='text-sm text-gray-600 mb-1'>Daily Rate</div>
                    <div className='text-lg font-bold text-gray-900'>₼120</div>
                  </div>
                  <div>
                    <div className='text-sm text-gray-600 mb-1'>Total Views</div>
                    <div className='text-lg font-bold text-gray-900'>456</div>
                  </div>
                  <div>
                    <div className='text-sm text-gray-600 mb-1'>Rentals</div>
                    <div className='text-lg font-bold text-gray-900'>12</div>
                  </div>
                  <div>
                    <div className='text-sm text-gray-600 mb-1'>Rating</div>
                    <div className='text-lg font-bold text-gray-900'>4.7 ★</div>
                  </div>
                </div>

                <div className='bg-blue-50 border border-blue-200 p-3 mt-4'>
                  <div className='text-sm font-semibold text-blue-900 mb-1'>Currently Rented</div>
                  <div className='text-sm text-blue-700'>Return date: March 20, 2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* Listing 3 */}
          <div className='p-6 hover:bg-gray-50 transition-colors'>
            <div className='flex flex-col md:flex-row gap-6'>
              <div className='w-full md:w-48 h-32 bg-gray-200 flex items-center justify-center flex-shrink-0'>
                <Car className='w-12 h-12 text-gray-400' strokeWidth={2} />
              </div>

              <div className='flex-1'>
                <div className='flex items-start justify-between mb-2'>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-1'>Mercedes-Benz E-Class 2021</h3>
                    <p className='text-sm text-gray-600'>Sedan • Automatic • Gasoline</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold'>
                      <AlertCircle className='w-3.5 h-3.5' strokeWidth={2} />
                      PENDING
                    </div>
                    <button className='p-2 hover:bg-gray-100 transition-colors'>
                      <MoreVertical className='w-5 h-5 text-gray-600' />
                    </button>
                  </div>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
                  <div>
                    <div className='text-sm text-gray-600 mb-1'>Daily Rate</div>
                    <div className='text-lg font-bold text-gray-900'>₼100</div>
                  </div>
                  <div>
                    <div className='text-sm text-gray-600 mb-1'>Total Views</div>
                    <div className='text-lg font-bold text-gray-900'>234</div>
                  </div>
                  <div>
                    <div className='text-sm text-gray-600 mb-1'>Rentals</div>
                    <div className='text-lg font-bold text-gray-900'>6</div>
                  </div>
                  <div>
                    <div className='text-sm text-gray-600 mb-1'>Rating</div>
                    <div className='text-lg font-bold text-gray-900'>4.8 ★</div>
                  </div>
                </div>

                <div className='bg-yellow-50 border border-yellow-200 p-3 mt-4'>
                  <div className='text-sm font-semibold text-yellow-900 mb-1'>Action Required</div>
                  <div className='text-sm text-yellow-700'>Please update vehicle inspection certificate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity & Messages */}
      <div className='grid lg:grid-cols-2 gap-8'>
        {/* Recent Messages */}
        <div className='bg-white border-2 border-gray-200 overflow-hidden'>
          <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-bold text-gray-900'>Recent Messages</h2>
              <Link href='/profile/messages'>
                <Button variant='outline' size='sm' className='hover:bg-gray-50'>
                  View All
                </Button>
              </Link>
            </div>
          </div>

          <div className='divide-y-2 divide-gray-100'>
            {[
              {
                name: 'Ahmad Mammadov',
                message: 'Is the BMW available this weekend?',
                time: '2 hours ago',
                unread: true,
              },
              {
                name: 'Leyla Aliyeva',
                message: 'Thank you for the great experience!',
                time: '5 hours ago',
                unread: false,
              },
              {
                name: 'Rashad Hasanov',
                message: 'Can we extend the rental by 2 days?',
                time: '1 day ago',
                unread: false,
              },
            ].map((msg, index) => (
              <div
                key={index}
                className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${msg.unread ? 'bg-primary/5' : ''}`}
              >
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0'>
                    {msg.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-center justify-between mb-1'>
                      <div className='font-semibold text-gray-900'>{msg.name}</div>
                      {msg.unread && <div className='w-2 h-2 bg-primary rounded-full' />}
                    </div>
                    <div className='text-sm text-gray-600 truncate mb-1'>{msg.message}</div>
                    <div className='text-xs text-gray-500'>{msg.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Rentals */}
        <div className='bg-white border-2 border-gray-200 overflow-hidden'>
          <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-bold text-gray-900'>Upcoming Rentals</h2>
              <Link href='/profile/bookings'>
                <Button variant='outline' size='sm' className='hover:bg-gray-50'>
                  View All
                </Button>
              </Link>
            </div>
          </div>

          <div className='divide-y-2 divide-gray-100'>
            {[
              { car: 'Toyota Camry', renter: 'Ahmad M.', date: 'Mar 18 - Mar 22', status: 'confirmed' },
              { car: 'BMW X5', renter: 'Leyla A.', date: 'Mar 20 - Mar 25', status: 'confirmed' },
              { car: 'Mercedes E-Class', renter: 'Rashad H.', date: 'Mar 25 - Mar 28', status: 'pending' },
            ].map((booking, index) => (
              <div key={index} className='p-4 hover:bg-gray-50 transition-colors'>
                <div className='flex items-start justify-between mb-2'>
                  <div>
                    <div className='font-semibold text-gray-900'>{booking.car}</div>
                    <div className='text-sm text-gray-600'>Renter: {booking.renter}</div>
                  </div>
                  <div
                    className={`px-2 py-1 text-xs font-bold ${
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {booking.status.toUpperCase()}
                  </div>
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <Calendar className='w-4 h-4' strokeWidth={2} />
                  {booking.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
