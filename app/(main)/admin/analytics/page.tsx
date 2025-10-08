'use client';

import { Button } from '@/components/ui/button';
import {
  TrendingUp,
  Users,
  Car,
  DollarSign,
  Calendar,
  Download,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function AdminAnalyticsPage() {
  // Revenue data
  const revenueData = [
    { month: 'Jul', revenue: 45000, users: 850 },
    { month: 'Aug', revenue: 52000, users: 920 },
    { month: 'Sep', revenue: 61000, users: 1050 },
    { month: 'Oct', revenue: 68000, users: 1150 },
    { month: 'Nov', revenue: 75000, users: 1200 },
    { month: 'Dec', revenue: 82000, users: 1234 },
  ];

  // User growth data
  const userGrowthData = [
    { week: 'Week 1', newUsers: 45, returning: 120 },
    { week: 'Week 2', newUsers: 52, returning: 145 },
    { week: 'Week 3', newUsers: 48, returning: 160 },
    { week: 'Week 4', newUsers: 61, returning: 175 },
  ];

  // Bookings by category
  const categoryData = [
    { name: 'Sedan', value: 340, color: '#3b82f6' },
    { name: 'SUV', value: 280, color: '#8b5cf6' },
    { name: 'Luxury', value: 180, color: '#f59e0b' },
    { name: 'Economy', value: 420, color: '#10b981' },
  ];

  // Daily bookings
  const dailyBookingsData = [
    { day: 'Mon', bookings: 12 },
    { day: 'Tue', bookings: 19 },
    { day: 'Wed', bookings: 15 },
    { day: 'Thu', bookings: 22 },
    { day: 'Fri', bookings: 28 },
    { day: 'Sat', bookings: 35 },
    { day: 'Sun', bookings: 31 },
  ];

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div className='flex items-start justify-between flex-wrap gap-4'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Analytics & Insights</h1>
          <p className='text-gray-600'>Track platform performance and growth metrics</p>
        </div>

        <div className='flex gap-3'>
          <select className='px-4 py-2 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white text-sm font-semibold'>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last 6 months</option>
            <option>Last year</option>
          </select>
          <Button variant='outline' className='hover:bg-gray-50'>
            <Download className='w-4 h-4 mr-2' />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className='grid md:grid-cols-4 gap-6'>
        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-start justify-between mb-4'>
            <div className='w-12 h-12 bg-blue-100 flex items-center justify-center'>
              <DollarSign className='w-6 h-6 text-blue-600' strokeWidth={2} />
            </div>
            <div className='flex items-center gap-1 text-green-600 text-sm font-semibold'>
              <ArrowUpRight className='w-4 h-4' strokeWidth={2} />
              23.1%
            </div>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>₼89.4K</div>
          <div className='text-sm text-gray-600'>Total Revenue</div>
          <div className='text-xs text-gray-500 mt-2'>vs ₼72.6K last period</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-start justify-between mb-4'>
            <div className='w-12 h-12 bg-purple-100 flex items-center justify-center'>
              <Calendar className='w-6 h-6 text-purple-600' strokeWidth={2} />
            </div>
            <div className='flex items-center gap-1 text-green-600 text-sm font-semibold'>
              <ArrowUpRight className='w-4 h-4' strokeWidth={2} />
              15.3%
            </div>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>1,220</div>
          <div className='text-sm text-gray-600'>Total Bookings</div>
          <div className='text-xs text-gray-500 mt-2'>+162 vs last period</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-start justify-between mb-4'>
            <div className='w-12 h-12 bg-green-100 flex items-center justify-center'>
              <Users className='w-6 h-6 text-green-600' strokeWidth={2} />
            </div>
            <div className='flex items-center gap-1 text-green-600 text-sm font-semibold'>
              <ArrowUpRight className='w-4 h-4' strokeWidth={2} />
              12.5%
            </div>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>206</div>
          <div className='text-sm text-gray-600'>New Users</div>
          <div className='text-xs text-gray-500 mt-2'>This month</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-start justify-between mb-4'>
            <div className='w-12 h-12 bg-orange-100 flex items-center justify-center'>
              <Car className='w-6 h-6 text-orange-600' strokeWidth={2} />
            </div>
            <div className='flex items-center gap-1 text-red-600 text-sm font-semibold'>
              <ArrowDownRight className='w-4 h-4' strokeWidth={2} />
              2.1%
            </div>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>₼73.2</div>
          <div className='text-sm text-gray-600'>Avg. Booking Value</div>
          <div className='text-xs text-gray-500 mt-2'>vs ₼74.8 last period</div>
        </div>
      </div>

      {/* Revenue & Users Growth */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-xl font-bold text-gray-900'>Revenue & User Growth</h2>
        </div>
        <div className='p-6'>
          <ResponsiveContainer width='100%' height={350}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' />
              <XAxis dataKey='month' stroke='#6b7280' style={{ fontSize: '12px' }} />
              <YAxis stroke='#6b7280' style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: 'none',
                  color: '#fff',
                  fontSize: '12px',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Area
                type='monotone'
                dataKey='revenue'
                stroke='hsl(var(--primary))'
                fill='hsl(var(--primary))'
                fillOpacity={0.6}
                name='Revenue (₼)'
              />
              <Area
                type='monotone'
                dataKey='users'
                stroke='#10b981'
                fill='#10b981'
                fillOpacity={0.6}
                name='Total Users'
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Grid */}
      <div className='grid lg:grid-cols-2 gap-6'>
        {/* User Growth */}
        <div className='bg-white border-2 border-gray-200 overflow-hidden'>
          <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
            <h2 className='text-xl font-bold text-gray-900'>New vs Returning Users</h2>
          </div>
          <div className='p-6'>
            <ResponsiveContainer width='100%' height={300}>
              <BarChart data={userGrowthData}>
                <CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' />
                <XAxis dataKey='week' stroke='#6b7280' style={{ fontSize: '12px' }} />
                <YAxis stroke='#6b7280' style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: 'none',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Bar dataKey='newUsers' fill='#3b82f6' name='New Users' />
                <Bar dataKey='returning' fill='#10b981' name='Returning Users' />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bookings by Category */}
        <div className='bg-white border-2 border-gray-200 overflow-hidden'>
          <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
            <h2 className='text-xl font-bold text-gray-900'>Bookings by Category</h2>
          </div>
          <div className='p-6'>
            <ResponsiveContainer width='100%' height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx='50%'
                  cy='50%'
                  labelLine={false}
                  label={(props: any) => `${props.name}: ${props.value}`}
                  outerRadius={100}
                  fill='#8884d8'
                  dataKey='value'
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: 'none',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Daily Bookings */}
        <div className='bg-white border-2 border-gray-200 overflow-hidden'>
          <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
            <h2 className='text-xl font-bold text-gray-900'>Daily Bookings (This Week)</h2>
          </div>
          <div className='p-6'>
            <ResponsiveContainer width='100%' height={300}>
              <LineChart data={dailyBookingsData}>
                <CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' />
                <XAxis dataKey='day' stroke='#6b7280' style={{ fontSize: '12px' }} />
                <YAxis stroke='#6b7280' style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: 'none',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                />
                <Line
                  type='monotone'
                  dataKey='bookings'
                  stroke='hsl(var(--primary))'
                  strokeWidth={3}
                  name='Bookings'
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Metrics */}
        <div className='bg-white border-2 border-gray-200 overflow-hidden'>
          <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
            <h2 className='text-xl font-bold text-gray-900'>Performance Metrics</h2>
          </div>
          <div className='p-6 space-y-6'>
            <div>
              <div className='flex items-center justify-between mb-2'>
                <span className='text-sm font-semibold text-gray-700'>Conversion Rate</span>
                <span className='text-sm font-bold text-gray-900'>18.2%</span>
              </div>
              <div className='w-full h-3 bg-gray-200'>
                <div className='h-full bg-green-500' style={{ width: '18.2%' }} />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between mb-2'>
                <span className='text-sm font-semibold text-gray-700'>Platform Utilization</span>
                <span className='text-sm font-bold text-gray-900'>76.5%</span>
              </div>
              <div className='w-full h-3 bg-gray-200'>
                <div className='h-full bg-blue-500' style={{ width: '76.5%' }} />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between mb-2'>
                <span className='text-sm font-semibold text-gray-700'>Customer Satisfaction</span>
                <span className='text-sm font-bold text-gray-900'>92.8%</span>
              </div>
              <div className='w-full h-3 bg-gray-200'>
                <div className='h-full bg-primary' style={{ width: '92.8%' }} />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between mb-2'>
                <span className='text-sm font-semibold text-gray-700'>Repeat Customers</span>
                <span className='text-sm font-bold text-gray-900'>64.3%</span>
              </div>
              <div className='w-full h-3 bg-gray-200'>
                <div className='h-full bg-purple-500' style={{ width: '64.3%' }} />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between mb-2'>
                <span className='text-sm font-semibold text-gray-700'>Average Rating</span>
                <span className='text-sm font-bold text-gray-900'>4.8 / 5.0</span>
              </div>
              <div className='w-full h-3 bg-gray-200'>
                <div className='h-full bg-yellow-500' style={{ width: '96%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

