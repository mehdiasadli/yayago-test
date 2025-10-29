import { AdminDashboardApi } from '@/features/admin-dashboard/admin-dashboard.api';
import AdminStatCard, { AdminStatCardProps } from '../../admin-components/admin-stat-card';
import { Users } from 'lucide-react';

export default async function UsersStats() {
  const stats = await AdminDashboardApi.getStats();

  if (!stats.success) {
    return null;
  }

  const { totalUsers } = stats.data;

  const statItems: AdminStatCardProps[] = [
    {
      label: 'Total Users',
      value: totalUsers,
      Icon: Users,
      color: 'blue',
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
