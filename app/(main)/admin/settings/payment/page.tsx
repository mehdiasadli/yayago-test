import { Button } from '@/components/ui/button';
import { Save, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Payment Gateway - Admin Settings',
  description: 'Configure payment gateway settings',
};

export default function AdminPaymentSettingsPage() {
  return (
    <div className='space-y-6'>
      {/* Active Payment Gateways */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Payment Gateways</h2>
          <p className='text-gray-600 mt-1'>Enable and configure payment methods</p>
        </div>

        <div className='p-8'>
          <div className='space-y-4'>
            {/* Stripe */}
            <div className='border-2 border-gray-200 overflow-hidden'>
              <label className='flex items-center gap-4 p-6 cursor-pointer hover:bg-gray-50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-2'>
                    <div className='text-lg font-bold text-gray-900'>Stripe</div>
                    <span className='px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold uppercase'>Active</span>
                  </div>
                  <div className='text-sm text-gray-600'>
                    Process payments securely with Stripe. Supports credit cards, debit cards, and digital wallets.
                  </div>
                </div>
              </label>

              <div className='border-t-2 border-gray-200 p-6 bg-gray-50'>
                <div className='text-sm text-gray-600'>
                  <p className='mb-2'>
                    <strong>Status:</strong> Stripe integration is configured and active.
                  </p>
                  <p>API keys are securely stored in environment variables and managed by the development team.</p>
                </div>
              </div>
            </div>

            {/* PayPal */}
            <div className='border-2 border-gray-200 overflow-hidden'>
              <label className='flex items-center gap-4 p-6 cursor-pointer hover:bg-gray-50 transition-colors'>
                <input type='checkbox' className='w-5 h-5 text-primary focus:ring-primary border-gray-300' />
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-2'>
                    <div className='text-lg font-bold text-gray-900'>PayPal</div>
                    <span className='px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold uppercase'>Inactive</span>
                  </div>
                  <div className='text-sm text-gray-600'>
                    Accept payments through PayPal accounts and PayPal Credit.
                  </div>
                </div>
              </label>
            </div>

            {/* Local Bank Transfer */}
            <div className='border-2 border-gray-200 overflow-hidden'>
              <label className='flex items-center gap-4 p-6 cursor-pointer hover:bg-gray-50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-2'>
                    <div className='text-lg font-bold text-gray-900'>Local Bank Transfer (Azerbaijan)</div>
                    <span className='px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold uppercase'>Active</span>
                  </div>
                  <div className='text-sm text-gray-600'>
                    Accept direct bank transfers from local Azerbaijani banks.
                  </div>
                </div>
              </label>

              <div className='border-t-2 border-gray-200 p-6 bg-gray-50'>
                <form className='space-y-4'>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Bank Name <span className='text-red-600'>*</span>
                    </label>
                    <input
                      type='text'
                      defaultValue='Kapital Bank'
                      className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                    />
                  </div>

                  <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-sm font-semibold text-gray-700 mb-2'>Account Holder Name</label>
                      <input
                        type='text'
                        defaultValue='YayaGo LLC'
                        className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                      />
                    </div>

                    <div>
                      <label className='block text-sm font-semibold text-gray-700 mb-2'>Account Number (IBAN)</label>
                      <input
                        type='text'
                        defaultValue='AZ21NABZ00000000137010001944'
                        className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                      />
                    </div>
                  </div>

                  <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-sm font-semibold text-gray-700 mb-2'>SWIFT Code</label>
                      <input
                        type='text'
                        defaultValue='CASPAZ22'
                        className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                      />
                    </div>

                    <div>
                      <label className='block text-sm font-semibold text-gray-700 mb-2'>VOEN (Tax ID)</label>
                      <input
                        type='text'
                        defaultValue='1234567891'
                        className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Settings */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Payment Settings</h2>
          <p className='text-gray-600 mt-1'>Configure general payment options</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Payment Processing Mode</label>
              <select className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
                <option>Live Mode</option>
                <option>Test Mode</option>
              </select>
              <p className='text-sm text-gray-600 mt-2'>
                Test mode allows you to test payments without processing real transactions
              </p>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Accepted Currencies</label>
              <div className='space-y-2'>
                <label className='flex items-center gap-3 p-3 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                  <input
                    type='checkbox'
                    defaultChecked
                    className='w-5 h-5 text-primary focus:ring-primary border-gray-300'
                  />
                  <span className='font-semibold'>AZN (₼) - Azerbaijani Manat</span>
                </label>
                <label className='flex items-center gap-3 p-3 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                  <input
                    type='checkbox'
                    defaultChecked
                    className='w-5 h-5 text-primary focus:ring-primary border-gray-300'
                  />
                  <span className='font-semibold'>USD ($) - US Dollar</span>
                </label>
                <label className='flex items-center gap-3 p-3 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                  <input type='checkbox' className='w-5 h-5 text-primary focus:ring-primary border-gray-300' />
                  <span className='font-semibold'>EUR (€) - Euro</span>
                </label>
              </div>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Payment Capture</label>
              <select className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
                <option>Automatic - Capture payment immediately</option>
                <option>Manual - Hold funds and capture manually</option>
              </select>
            </div>

            <div className='space-y-4'>
              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Require Payment Before Rental</div>
                  <div className='text-sm text-gray-600'>
                    Renters must complete payment before accessing car details
                  </div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Automatic Refunds</div>
                  <div className='text-sm text-gray-600'>Process refunds automatically when bookings are cancelled</div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Save Card Information</div>
                  <div className='text-sm text-gray-600'>
                    Allow users to save their payment methods for faster checkout
                  </div>
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* Payout Settings */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Payout Settings</h2>
          <p className='text-gray-600 mt-1'>Configure payout schedules for car owners</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Payout Schedule</label>
              <select className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
                <option>Daily - Pay out every day</option>
                <option>Weekly - Pay out every Monday</option>
                <option>Bi-weekly - Pay out twice a month</option>
                <option>Monthly - Pay out on 1st of each month</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Minimum Payout Amount (₼)</label>
              <input
                type='number'
                defaultValue='50'
                min='0'
                step='0.01'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
              />
              <p className='text-sm text-gray-600 mt-2'>Minimum amount required before processing payout</p>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Payout Holding Period (days)</label>
              <input
                type='number'
                defaultValue='7'
                min='0'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
              />
              <p className='text-sm text-gray-600 mt-2'>Number of days to hold funds after rental completion</p>
            </div>
          </form>
        </div>
      </div>

      {/* Security Notice */}
      <div className='bg-blue-50 border-2 border-blue-200 p-6'>
        <div className='flex items-start gap-3'>
          <AlertCircle className='w-6 h-6 text-blue-700 flex-shrink-0' strokeWidth={2} />
          <div>
            <div className='font-semibold text-blue-900 mb-2'>Security Notice</div>
            <div className='text-sm text-blue-800'>
              All payment gateway API keys are encrypted and stored securely. Never share your secret keys with anyone.
              Always use environment variables in production.
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className='flex gap-3'>
        <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
          <Save className='w-4 h-4 mr-2' />
          Save Payment Settings
        </Button>
        <Button variant='outline' className='hover:bg-gray-50'>
          Test Gateway Connection
        </Button>
      </div>
    </div>
  );
}
