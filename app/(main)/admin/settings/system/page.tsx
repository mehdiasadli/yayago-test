import { Button } from '@/components/ui/button';
import { Save, Database, HardDrive, RefreshCw, Trash2, Download, AlertCircle, Activity } from 'lucide-react';

export const metadata = {
  title: 'System Settings - Admin',
  description: 'System configuration and maintenance',
};

export default function AdminSystemSettingsPage() {
  return (
    <div className='space-y-6'>
      {/* Maintenance Mode */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Maintenance Mode</h2>
          <p className='text-gray-600 mt-1'>Control platform accessibility</p>
        </div>

        <div className='p-8'>
          <div className='space-y-4'>
            <label className='flex items-start gap-4 p-6 border-2 border-orange-200 bg-orange-50 cursor-pointer'>
              <input type='checkbox' className='mt-1 w-5 h-5 text-orange-600 focus:ring-orange-600 border-gray-300' />
              <div className='flex-1'>
                <div className='font-semibold text-gray-900 mb-2'>Enable Maintenance Mode</div>
                <div className='text-sm text-gray-700 mb-3'>
                  When enabled, only administrators can access the platform. All other users will see a maintenance
                  page.
                </div>
                <div className='bg-white border border-orange-300 p-3'>
                  <div className='flex items-start gap-2'>
                    <AlertCircle className='w-5 h-5 text-orange-700 flex-shrink-0' strokeWidth={2} />
                    <div className='text-sm text-orange-900'>
                      <strong>Warning:</strong> This will make the platform inaccessible to all users except admins.
                    </div>
                  </div>
                </div>
              </div>
            </label>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Maintenance Message</label>
              <textarea
                rows={4}
                defaultValue='We are currently performing scheduled maintenance. We apologize for any inconvenience and will be back shortly.'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none resize-none'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Database Management */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Database Management</h2>
          <p className='text-gray-600 mt-1'>Database operations and maintenance</p>
        </div>

        <div className='p-8'>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='border-2 border-gray-200 p-6'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-blue-100 flex items-center justify-center'>
                  <Database className='w-6 h-6 text-blue-600' strokeWidth={2} />
                </div>
                <div>
                  <div className='text-2xl font-bold text-gray-900'>245 GB</div>
                  <div className='text-sm text-gray-600'>Database Size</div>
                </div>
              </div>
              <Button variant='outline' className='w-full hover:bg-gray-50'>
                <RefreshCw className='w-4 h-4 mr-2' />
                Optimize Database
              </Button>
            </div>

            <div className='border-2 border-gray-200 p-6'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-green-100 flex items-center justify-center'>
                  <Download className='w-6 h-6 text-green-600' strokeWidth={2} />
                </div>
                <div>
                  <div className='text-2xl font-bold text-gray-900'>Feb 15, 2025</div>
                  <div className='text-sm text-gray-600'>Last Backup</div>
                </div>
              </div>
              <Button variant='outline' className='w-full hover:bg-gray-50'>
                <Download className='w-4 h-4 mr-2' />
                Create Backup
              </Button>
            </div>
          </div>

          <div className='mt-6 p-6 bg-yellow-50 border-2 border-yellow-200'>
            <div className='flex items-start gap-3'>
              <AlertCircle className='w-6 h-6 text-yellow-700 flex-shrink-0' strokeWidth={2} />
              <div>
                <div className='font-semibold text-yellow-900 mb-2'>Database Operations</div>
                <div className='text-sm text-yellow-800 mb-4'>
                  Database operations may take several minutes and can affect platform performance. It's recommended to
                  perform these during low-traffic hours.
                </div>
                <label className='flex items-center gap-2 text-sm text-yellow-900'>
                  <input type='checkbox' className='w-4 h-4' />
                  <span>Enable automatic daily backups at 3:00 AM</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cache Management */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Cache Management</h2>
          <p className='text-gray-600 mt-1'>Clear and manage platform cache</p>
        </div>

        <div className='p-8'>
          <div className='grid md:grid-cols-3 gap-4'>
            <Button variant='outline' className='h-24 flex flex-col items-center justify-center gap-2 hover:bg-gray-50'>
              <RefreshCw className='w-6 h-6' strokeWidth={2} />
              <span className='text-sm font-semibold'>Clear All Cache</span>
            </Button>

            <Button variant='outline' className='h-24 flex flex-col items-center justify-center gap-2 hover:bg-gray-50'>
              <Database className='w-6 h-6' strokeWidth={2} />
              <span className='text-sm font-semibold'>Clear Query Cache</span>
            </Button>

            <Button variant='outline' className='h-24 flex flex-col items-center justify-center gap-2 hover:bg-gray-50'>
              <HardDrive className='w-6 h-6' strokeWidth={2} />
              <span className='text-sm font-semibold'>Clear File Cache</span>
            </Button>
          </div>
        </div>
      </div>

      {/* System Information */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>System Information</h2>
          <p className='text-gray-600 mt-1'>Platform and server details</p>
        </div>

        <div className='p-8'>
          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <div className='text-sm font-semibold text-gray-700 mb-2'>Platform Version</div>
              <div className='text-lg font-bold text-gray-900'>v2.5.4</div>
            </div>

            <div>
              <div className='text-sm font-semibold text-gray-700 mb-2'>Last Updated</div>
              <div className='text-lg font-bold text-gray-900'>February 10, 2025</div>
            </div>

            <div>
              <div className='text-sm font-semibold text-gray-700 mb-2'>Server Status</div>
              <div className='flex items-center gap-2'>
                <Activity className='w-5 h-5 text-green-600' strokeWidth={2} />
                <span className='text-lg font-bold text-green-600'>Online</span>
              </div>
            </div>

            <div>
              <div className='text-sm font-semibold text-gray-700 mb-2'>Server Uptime</div>
              <div className='text-lg font-bold text-gray-900'>45 days, 12 hours</div>
            </div>

            <div>
              <div className='text-sm font-semibold text-gray-700 mb-2'>PHP Version</div>
              <div className='text-lg font-bold text-gray-900'>8.2.0</div>
            </div>

            <div>
              <div className='text-sm font-semibold text-gray-700 mb-2'>Node.js Version</div>
              <div className='text-lg font-bold text-gray-900'>20.11.0</div>
            </div>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className='bg-white border-2 border-red-300 overflow-hidden'>
        <div className='border-b-2 border-red-300 px-8 py-6 bg-red-50'>
          <h2 className='text-2xl font-bold text-red-900'>Danger Zone</h2>
          <p className='text-red-700 mt-1'>Irreversible and destructive operations</p>
        </div>

        <div className='p-8'>
          <div className='space-y-6'>
            <div className='flex items-start justify-between p-6 border-2 border-red-200 bg-red-50'>
              <div className='flex-1'>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>Clear All User Data</h3>
                <p className='text-sm text-gray-700 mb-3'>
                  Permanently delete all user accounts, bookings, and associated data.
                </p>
                <div className='bg-white border border-red-300 p-3'>
                  <div className='flex items-start gap-2'>
                    <AlertCircle className='w-5 h-5 text-red-700 flex-shrink-0' strokeWidth={2} />
                    <div className='text-sm text-red-900'>
                      <strong>Warning:</strong> This action is irreversible and will delete all platform data except
                      system configurations.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex gap-3'>
              <Button variant='outline' className='hover:bg-red-50 text-red-700 border-red-300'>
                <Trash2 className='w-4 h-4 mr-2' />
                Reset Platform Data
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className='flex gap-3'>
        <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
          <Save className='w-4 h-4 mr-2' />
          Save System Settings
        </Button>
        <Button variant='outline' className='hover:bg-gray-50'>
          Cancel
        </Button>
      </div>
    </div>
  );
}
