import { AdminDashboardApi } from '@/features/admin-dashboard/admin-dashboard.api';
import AdminStatCard, { AdminStatCardProps } from '../../admin-components/admin-stat-card';
import { Car, Users } from 'lucide-react';

export default async function VehiclesStats() {
  const stats = await AdminDashboardApi.getStats();

  if (!stats.success) {
    return null;
  }

  const { totalCars, availableCars, occupiedCars } = stats.data;

  const statItems: AdminStatCardProps[] = [
    {
      label: 'Total Vehicles',
      value: totalCars,
      Icon: Car,
      color: 'blue',
    },
    {
      label: 'Available Vehicles',
      value: availableCars,
      Icon: Car,
      color: 'green',
    },
    {
      label: 'Occupied Vehicles',
      value: occupiedCars,
      Icon: Car,
      color: 'red',
    },
  ];

  return (
    <div className='grid md:grid-cols-4 gap-6'>
      {statItems.map((item) => (
        <AdminStatCard key={item.label} {...item} />
      ))}
    </div>
  );
}
