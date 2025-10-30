import { Button } from '@/components/ui/button';
import { Users, Car } from 'lucide-react';
import AdminPageHeader from './admin-page-sections/admin-page-header';
import AdminPageKeyStats from './admin-page-sections/admin-page-key-stats';
import AdminPageQuickActions from './admin-page-sections/admin-page-quick-actions';

export const metadata = {
  title: 'Admin Dashboard - YayaGo',
  description: 'Manage and monitor your platform',
};

export default function AdminOverviewPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <AdminPageHeader />

      {/* Key Metrics */}
      <AdminPageKeyStats />

      {/* Alerts & Quick Actions */}
      <div className='grid lg:grid-cols-2 gap-6'>
        {/* Quick Actions */}
        <AdminPageQuickActions />
      </div>
    </div>
  );
}
