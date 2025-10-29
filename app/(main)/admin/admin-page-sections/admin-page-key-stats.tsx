import { AdminDashboardApi } from '@/features/admin-dashboard/admin-dashboard.api';
import { Users, Car, DollarSign, Calendar } from 'lucide-react';
import AdminStatCard, { AdminStatCardProps } from '../admin-components/admin-stat-card';

export default async function AdminPageKeyStats() {
  const stats = await AdminDashboardApi.getStats();

  if (!stats.success) {
    return null;
  }

  const { totalUsers, totalCars, totalBookings, activeBookings, availableCars, totalRevenue, monthlyRevenue } =
    stats.data;

  const statItems: AdminStatCardProps[] = [
    {
      label: 'Total Users',
      value: totalUsers,
      Icon: Users,
      color: 'blue',
    },
    {
      label: 'Available Cars',
      value: availableCars,
      Icon: Car,
      color: 'purple',
      description: `${totalCars} total cars`,
    },
    {
      label: 'Monthly Revenue',
      value: monthlyRevenue,
      Icon: DollarSign,
      color: 'green',
      description: `${totalRevenue} total revenue`,
      valueSuffix: 'USD',
    },
    {
      label: 'Active Bookings',
      value: activeBookings,
      Icon: Calendar,
      color: 'orange',
      description: `${totalBookings} total bookings`,
    },
  ];

  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-6'>
      {/* Total Users */}

      {statItems.map((item) => (
        <AdminStatCard key={item.label} {...item} />
      ))}
    </div>
  );
}
