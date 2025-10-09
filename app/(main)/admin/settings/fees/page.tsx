import { Button } from '@/components/ui/button';
import { Save, Percent } from 'lucide-react';

export const metadata = {
  title: 'Fees & Commission - Admin Settings',
  description: 'Configure platform fees and commission rates',
};

export default function AdminFeesSettingsPage() {
  return (
    <div className='space-y-6'>
      {/* Platform Commission */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Platform Commission</h2>
          <p className='text-gray-600 mt-1'>Set commission rates for different services</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                Rental Commission (%) <span className='text-red-600'>*</span>
              </label>
              <div className='flex items-center gap-4'>
                <input
                  type='number'
                  defaultValue='10'
                  min='0'
                  max='100'
                  step='0.1'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
                <Percent className='w-5 h-5 text-gray-400' strokeWidth={2} />
              </div>
              <p className='text-sm text-gray-600 mt-2'>Percentage of rental fee charged to car owners</p>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Minimum Commission (₼)</label>
                <input
                  type='number'
                  defaultValue='5'
                  min='0'
                  step='0.01'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Maximum Commission (₼)</label>
                <input
                  type='number'
                  defaultValue='500'
                  min='0'
                  step='0.01'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Service Fees */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Service Fees</h2>
          <p className='text-gray-600 mt-1'>Additional fees charged to users</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Renter Service Fee (%)</label>
              <div className='flex items-center gap-4'>
                <input
                  type='number'
                  defaultValue='5'
                  min='0'
                  max='100'
                  step='0.1'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
                <Percent className='w-5 h-5 text-gray-400' strokeWidth={2} />
              </div>
              <p className='text-sm text-gray-600 mt-2'>Additional fee charged to renters on top of rental price</p>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Insurance Fee (% of rental)</label>
              <div className='flex items-center gap-4'>
                <input
                  type='number'
                  defaultValue='3'
                  min='0'
                  max='100'
                  step='0.1'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
                <Percent className='w-5 h-5 text-gray-400' strokeWidth={2} />
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Late Return Fee (₼/hour)</label>
                <input
                  type='number'
                  defaultValue='20'
                  min='0'
                  step='0.01'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Cancellation Fee (₼)</label>
                <input
                  type='number'
                  defaultValue='50'
                  min='0'
                  step='0.01'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Membership Fees */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Membership Plans</h2>
          <p className='text-gray-600 mt-1'>Configure subscription plan pricing</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Basic Plan (₼/month)</label>
                <input
                  type='number'
                  defaultValue='249'
                  min='0'
                  step='0.01'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Premium Plan (₼/month)</label>
                <input
                  type='number'
                  defaultValue='499'
                  min='0'
                  step='0.01'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Elegant Plan (₼/month)</label>
                <input
                  type='number'
                  defaultValue='999'
                  min='0'
                  step='0.01'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Lord of Cars (₼/month)</label>
                <input
                  type='number'
                  defaultValue='2999'
                  min='0'
                  step='0.01'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Yearly Discount (%)</label>
              <div className='flex items-center gap-4'>
                <input
                  type='number'
                  defaultValue='20'
                  min='0'
                  max='100'
                  step='1'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
                <Percent className='w-5 h-5 text-gray-400' strokeWidth={2} />
              </div>
              <p className='text-sm text-gray-600 mt-2'>Discount applied when users pay yearly</p>
            </div>
          </form>
        </div>
      </div>

      {/* Tax Settings */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Tax Settings</h2>
          <p className='text-gray-600 mt-1'>Configure tax rates and VAT</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
              <input
                type='checkbox'
                defaultChecked
                className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
              />
              <div className='flex-1'>
                <div className='font-semibold text-gray-900 mb-1'>Enable VAT</div>
                <div className='text-sm text-gray-600'>Apply VAT to all transactions</div>
              </div>
            </label>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>VAT Rate (%)</label>
                <div className='flex items-center gap-4'>
                  <input
                    type='number'
                    defaultValue='18'
                    min='0'
                    max='100'
                    step='0.1'
                    className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                  />
                  <Percent className='w-5 h-5 text-gray-400' strokeWidth={2} />
                </div>
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>VAT Registration Number</label>
                <input
                  type='text'
                  defaultValue='AZ123456789'
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
          Save Fee Settings
        </Button>
        <Button variant='outline' className='hover:bg-gray-50'>
          Cancel
        </Button>
      </div>
    </div>
  );
}
