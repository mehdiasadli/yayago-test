import { Button } from '@/components/ui/button';
import { Save, RefreshCw } from 'lucide-react';

export const metadata = {
  title: 'General Settings - Admin',
  description: 'Configure general platform settings',
};

export default function AdminGeneralSettingsPage() {
  return (
    <div className='space-y-6'>
      {/* Platform Information */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Platform Information</h2>
          <p className='text-gray-600 mt-1'>Basic information about your platform</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                Platform Name <span className='text-red-600'>*</span>
              </label>
              <input
                type='text'
                defaultValue='YayaGo'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Platform Description</label>
              <textarea
                rows={4}
                defaultValue="Azerbaijan's premier peer-to-peer car rental platform. Rent the perfect car or earn money by sharing yours."
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none resize-none'
              />
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Support Email</label>
                <input
                  type='email'
                  defaultValue='support@yayago.com'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Support Phone</label>
                <input
                  type='tel'
                  defaultValue='+994 12 555 1234'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Company Address</label>
              <input
                type='text'
                defaultValue='28 May Street, Baku, Azerbaijan'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
              />
            </div>
          </form>
        </div>
      </div>

      {/* Regional Settings */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Regional Settings</h2>
          <p className='text-gray-600 mt-1'>Configure regional and localization settings</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Default Language</label>
                <select className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
                  <option>English (US)</option>
                  <option>Azərbaycan dili</option>
                  <option>Türkçe</option>
                  <option>Русский</option>
                </select>
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Default Currency</label>
                <select className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
                  <option>AZN (₼) - Azerbaijani Manat</option>
                  <option>USD ($) - US Dollar</option>
                  <option>EUR (€) - Euro</option>
                  <option>TRY (₺) - Turkish Lira</option>
                </select>
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Default Timezone</label>
                <select className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
                  <option>(GMT+4) Baku, Tbilisi, Yerevan</option>
                  <option>(GMT+3) Moscow, Istanbul</option>
                  <option>(GMT+0) London, Dublin</option>
                  <option>(GMT-5) New York</option>
                </select>
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Date Format</label>
                <select className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
                  <option>DD/MM/YYYY</option>
                  <option>MM/DD/YYYY</option>
                  <option>YYYY-MM-DD</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Platform Features */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Platform Features</h2>
          <p className='text-gray-600 mt-1'>Enable or disable platform features</p>
        </div>

        <div className='p-8'>
          <div className='space-y-4'>
            <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
              <input
                type='checkbox'
                defaultChecked
                className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
              />
              <div className='flex-1'>
                <div className='font-semibold text-gray-900 mb-1'>User Registration</div>
                <div className='text-sm text-gray-600'>Allow new users to register on the platform</div>
              </div>
            </label>

            <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
              <input
                type='checkbox'
                defaultChecked
                className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
              />
              <div className='flex-1'>
                <div className='font-semibold text-gray-900 mb-1'>Instant Booking</div>
                <div className='text-sm text-gray-600'>Allow renters to book cars instantly without owner approval</div>
              </div>
            </label>

            <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
              <input
                type='checkbox'
                defaultChecked
                className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
              />
              <div className='flex-1'>
                <div className='font-semibold text-gray-900 mb-1'>Reviews & Ratings</div>
                <div className='text-sm text-gray-600'>Enable users to leave reviews and ratings after rentals</div>
              </div>
            </label>

            <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
              <input
                type='checkbox'
                defaultChecked
                className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
              />
              <div className='flex-1'>
                <div className='font-semibold text-gray-900 mb-1'>Messaging System</div>
                <div className='text-sm text-gray-600'>Allow users to communicate through the platform</div>
              </div>
            </label>

            <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
              <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
              <div className='flex-1'>
                <div className='font-semibold text-gray-900 mb-1'>Maintenance Mode</div>
                <div className='text-sm text-gray-600'>
                  Put the platform in maintenance mode (only admins can access)
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Booking Limits */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Booking Limits</h2>
          <p className='text-gray-600 mt-1'>Set limits for bookings and rentals</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div className='grid md:grid-cols-3 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Minimum Rental Days</label>
                <input
                  type='number'
                  defaultValue='1'
                  min='1'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Maximum Rental Days</label>
                <input
                  type='number'
                  defaultValue='30'
                  min='1'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Advance Booking Days</label>
                <input
                  type='number'
                  defaultValue='90'
                  min='1'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Cancellation Grace Period (hours)
                </label>
                <input
                  type='number'
                  defaultValue='24'
                  min='0'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Late Return Grace Period (hours)
                </label>
                <input
                  type='number'
                  defaultValue='2'
                  min='0'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Save Button */}
      <div className='flex gap-3'>
        <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
          <Save className='w-4 h-4 mr-2' />
          Save All Changes
        </Button>
        <Button variant='outline' className='hover:bg-gray-50'>
          <RefreshCw className='w-4 h-4 mr-2' />
          Reset to Defaults
        </Button>
      </div>
    </div>
  );
}
