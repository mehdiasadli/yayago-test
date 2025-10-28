import { Button } from '@/components/ui/button';
import { Users, Car } from 'lucide-react';
import AdminPageHeader from './admin-page-sections/admin-page-header';
import AdminPageKeyStats from './admin-page-sections/admin-page-key-stats';

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
        <div className='bg-white border-2 border-gray-200 overflow-hidden'>
          <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
            <h2 className='text-xl font-bold text-gray-900'>Quick Actions</h2>
          </div>
          <div className='p-6'>
            <div className='grid grid-cols-2 gap-4'>
              <Button
                variant='outline'
                className='h-24 flex flex-col items-center justify-center gap-2 hover:bg-gray-50'
              >
                <Users className='w-6 h-6' strokeWidth={2} />
                <span className='text-sm font-semibold'>Add User</span>
              </Button>

              <Button
                variant='outline'
                className='h-24 flex flex-col items-center justify-center gap-2 hover:bg-gray-50'
              >
                <Car className='w-6 h-6' strokeWidth={2} />
                <span className='text-sm font-semibold'>Add Vehicle</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
