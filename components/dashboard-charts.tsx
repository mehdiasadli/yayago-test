'use client';

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

// Earnings Line Chart
export function EarningsChart() {
  const data = [
    { month: 'Sep', earnings: 1650, rentals: 8 },
    { month: 'Oct', earnings: 1800, rentals: 9 },
    { month: 'Nov', earnings: 2100, rentals: 10 },
    { month: 'Dec', earnings: 2400, rentals: 12 },
    { month: 'Jan', earnings: 2200, rentals: 11 },
    { month: 'Feb', earnings: 2600, rentals: 13 },
    { month: 'Mar', earnings: 2400, rentals: 12 },
  ];

  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart data={data}>
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
        <Line type='monotone' dataKey='earnings' stroke='hsl(var(--primary))' strokeWidth={3} name='Earnings (AED)' />
        <Line type='monotone' dataKey='rentals' stroke='#10b981' strokeWidth={3} name='Rentals' />
      </LineChart>
    </ResponsiveContainer>
  );
}

// Views Area Chart
export function ViewsChart() {
  const data = [
    { week: 'Week 1', views: 156, inquiries: 12 },
    { week: 'Week 2', views: 189, inquiries: 15 },
    { week: 'Week 3', views: 234, inquiries: 18 },
    { week: 'Week 4', views: 278, inquiries: 22 },
  ];

  return (
    <ResponsiveContainer width='100%' height={250}>
      <AreaChart data={data}>
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
        <Area type='monotone' dataKey='views' stroke='#8b5cf6' fill='#8b5cf6' fillOpacity={0.6} name='Views' />
        <Area type='monotone' dataKey='inquiries' stroke='#3b82f6' fill='#3b82f6' fillOpacity={0.6} name='Inquiries' />
      </AreaChart>
    </ResponsiveContainer>
  );
}

// Car Performance Bar Chart
export function CarPerformanceChart() {
  const data = [
    { car: 'Camry', rentals: 8, earnings: 560 },
    { car: 'BMW X5', rentals: 12, earnings: 1440 },
    { car: 'Mercedes', rentals: 6, earnings: 600 },
    { car: 'Hyundai', rentals: 5, earnings: 250 },
    { car: 'Audi A6', rentals: 7, earnings: 700 },
  ];

  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' />
        <XAxis dataKey='car' stroke='#6b7280' style={{ fontSize: '12px' }} />
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
        <Bar dataKey='rentals' fill='hsl(var(--primary))' name='Rentals' />
        <Bar dataKey='earnings' fill='#10b981' name='Earnings (AED)' />
      </BarChart>
    </ResponsiveContainer>
  );
}

// Booking Status Pie Chart
export function BookingStatusChart() {
  const data = [
    { name: 'Completed', value: 28, color: '#10b981' },
    { name: 'Active', value: 2, color: '#3b82f6' },
    { name: 'Upcoming', value: 3, color: '#f59e0b' },
    { name: 'Cancelled', value: 2, color: '#ef4444' },
  ];

  return (
    <ResponsiveContainer width='100%' height={250}>
      <PieChart>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          label={(props: any) => `${props.name}: ${(props.percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill='#8884d8'
          dataKey='value'
        >
          {data.map((entry, index) => (
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
  );
}

// Response Time Chart
export function ResponseTimeChart() {
  const data = [
    { day: 'Mon', time: 45 },
    { day: 'Tue', time: 30 },
    { day: 'Wed', time: 52 },
    { day: 'Thu', time: 28 },
    { day: 'Fri', time: 35 },
    { day: 'Sat', time: 40 },
    { day: 'Sun', time: 38 },
  ];

  return (
    <ResponsiveContainer width='100%' height={200}>
      <BarChart data={data}>
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
          formatter={(value) => [`${value} minutes`, 'Response Time']}
        />
        <Bar dataKey='time' fill='#f59e0b' name='Response Time (min)' />
      </BarChart>
    </ResponsiveContainer>
  );
}

// Monthly Comparison Chart
export function MonthlyComparisonChart() {
  const data = [
    { month: 'Oct', thisYear: 1800, lastYear: 1500 },
    { month: 'Nov', thisYear: 2100, lastYear: 1700 },
    { month: 'Dec', thisYear: 2400, lastYear: 2000 },
    { month: 'Jan', thisYear: 2200, lastYear: 1800 },
    { month: 'Feb', thisYear: 2600, lastYear: 2100 },
    { month: 'Mar', thisYear: 2400, lastYear: 1900 },
  ];

  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart data={data}>
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
        <Bar dataKey='thisYear' fill='hsl(var(--primary))' name='2025' />
        <Bar dataKey='lastYear' fill='#9ca3af' name='2024' />
      </BarChart>
    </ResponsiveContainer>
  );
}
