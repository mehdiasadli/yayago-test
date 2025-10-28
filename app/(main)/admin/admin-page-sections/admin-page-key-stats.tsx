import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AdminDashboardApi } from '@/features/admin-dashboard/admin-dashboard.api';
import { Users, Car, DollarSign, Calendar, LucideIcon } from 'lucide-react';

interface KeyStatCardProps {
  value: number | string;
  label: string;
  Icon: LucideIcon;
  description?: string;
  valueSuffix?: string;
  color?: string;
}

export default async function AdminPageKeyStats() {
  const stats = await AdminDashboardApi.getStats();

  if (!stats.success) {
    return null;
  }

  const { totalUsers, totalCars, totalBookings, activeBookings, availableCars, totalRevenue, monthlyRevenue } =
    stats.data;

  const statItems: KeyStatCardProps[] = [
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
        <KeyStatCard key={item.label} {...item} />
      ))}
    </div>
  );
}

function KeyStatCard({ value, label, Icon, description, valueSuffix, color }: KeyStatCardProps) {
  return (
    <Card>
      <CardHeader className='flex items-center gap-4'>
        <Icon className={`w-7 h-7 text-${color}-600`} strokeWidth={2} />
        <div>
          <CardTitle className={`text-${color}-600 text-2xl`}>
            {value}
            {valueSuffix && <span className='text-sm text-gray-500'> {valueSuffix}</span>}
          </CardTitle>
          <CardDescription className={`text-${color}-700`}>{label}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className={`text-${color}-700 text-xs`}>{description}</p>
      </CardContent>
    </Card>
  );
}
