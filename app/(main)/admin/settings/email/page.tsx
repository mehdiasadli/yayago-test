import { Button } from '@/components/ui/button';
import { Save, Send } from 'lucide-react';

export const metadata = {
  title: 'Email & Notifications - Admin Settings',
  description: 'Configure platform email and notification settings',
};

export default function AdminEmailSettingsPage() {
  return (
    <div className='space-y-6'>
      {/* Email Server Configuration */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Email Server Configuration</h2>
          <p className='text-gray-600 mt-1'>Configure SMTP server for outgoing emails</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Mail Provider</label>
              <select className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
                <option>SMTP (Custom Server)</option>
                <option>SendGrid</option>
                <option>Mailgun</option>
                <option>Amazon SES</option>
                <option>Postmark</option>
              </select>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  SMTP Host <span className='text-red-600'>*</span>
                </label>
                <input
                  type='text'
                  defaultValue='smtp.gmail.com'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  SMTP Port <span className='text-red-600'>*</span>
                </label>
                <input
                  type='number'
                  defaultValue='587'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>SMTP Username</label>
                <input
                  type='text'
                  defaultValue='noreply@yayago.com'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>SMTP Password</label>
                <input
                  type='password'
                  placeholder='••••••••••••'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Encryption</label>
              <select className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
                <option>TLS</option>
                <option>SSL</option>
                <option>None</option>
              </select>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>From Email Address</label>
                <input
                  type='email'
                  defaultValue='noreply@yayago.com'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>From Name</label>
                <input
                  type='text'
                  defaultValue='YayaGo'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>
            </div>

            <div>
              <Button variant='outline' className='hover:bg-gray-50'>
                <Send className='w-4 h-4 mr-2' />
                Send Test Email
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Email Templates */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Email Templates</h2>
          <p className='text-gray-600 mt-1'>Configure which emails to send automatically</p>
        </div>

        <div className='p-8'>
          <div className='space-y-4'>
            <div className='border-2 border-gray-200 overflow-hidden'>
              <label className='flex items-center gap-4 p-6 cursor-pointer hover:bg-gray-50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Welcome Email</div>
                  <div className='text-sm text-gray-600'>Send welcome email to new users after registration</div>
                </div>
                <Button variant='outline' size='sm' className='hover:bg-gray-100'>
                  Edit Template
                </Button>
              </label>
            </div>

            <div className='border-2 border-gray-200 overflow-hidden'>
              <label className='flex items-center gap-4 p-6 cursor-pointer hover:bg-gray-50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Email Verification</div>
                  <div className='text-sm text-gray-600'>Send verification email with confirmation link</div>
                </div>
                <Button variant='outline' size='sm' className='hover:bg-gray-100'>
                  Edit Template
                </Button>
              </label>
            </div>

            <div className='border-2 border-gray-200 overflow-hidden'>
              <label className='flex items-center gap-4 p-6 cursor-pointer hover:bg-gray-50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Booking Confirmation</div>
                  <div className='text-sm text-gray-600'>Send confirmation email when a booking is made</div>
                </div>
                <Button variant='outline' size='sm' className='hover:bg-gray-100'>
                  Edit Template
                </Button>
              </label>
            </div>

            <div className='border-2 border-gray-200 overflow-hidden'>
              <label className='flex items-center gap-4 p-6 cursor-pointer hover:bg-gray-50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Booking Reminder</div>
                  <div className='text-sm text-gray-600'>Send reminder 24 hours before rental start</div>
                </div>
                <Button variant='outline' size='sm' className='hover:bg-gray-100'>
                  Edit Template
                </Button>
              </label>
            </div>

            <div className='border-2 border-gray-200 overflow-hidden'>
              <label className='flex items-center gap-4 p-6 cursor-pointer hover:bg-gray-50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Payment Receipt</div>
                  <div className='text-sm text-gray-600'>Send receipt after successful payment</div>
                </div>
                <Button variant='outline' size='sm' className='hover:bg-gray-100'>
                  Edit Template
                </Button>
              </label>
            </div>

            <div className='border-2 border-gray-200 overflow-hidden'>
              <label className='flex items-center gap-4 p-6 cursor-pointer hover:bg-gray-50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Payout Notification</div>
                  <div className='text-sm text-gray-600'>Notify car owners when payouts are processed</div>
                </div>
                <Button variant='outline' size='sm' className='hover:bg-gray-100'>
                  Edit Template
                </Button>
              </label>
            </div>

            <div className='border-2 border-gray-200 overflow-hidden'>
              <label className='flex items-center gap-4 p-6 cursor-pointer hover:bg-gray-50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Review Request</div>
                  <div className='text-sm text-gray-600'>Request reviews after rental completion</div>
                </div>
                <Button variant='outline' size='sm' className='hover:bg-gray-100'>
                  Edit Template
                </Button>
              </label>
            </div>

            <div className='border-2 border-gray-200 overflow-hidden'>
              <label className='flex items-center gap-4 p-6 cursor-pointer hover:bg-gray-50 transition-colors'>
                <input type='checkbox' className='w-5 h-5 text-primary focus:ring-primary border-gray-300' />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Marketing Emails</div>
                  <div className='text-sm text-gray-600'>Send promotional emails and newsletters</div>
                </div>
                <Button variant='outline' size='sm' className='hover:bg-gray-100'>
                  Edit Template
                </Button>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Push Notifications */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Push Notifications</h2>
          <p className='text-gray-600 mt-1'>Configure browser and mobile push notifications</p>
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
                <div className='font-semibold text-gray-900 mb-1'>Enable Push Notifications</div>
                <div className='text-sm text-gray-600'>
                  Allow users to receive browser and mobile push notifications
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
                <div className='font-semibold text-gray-900 mb-1'>Booking Notifications</div>
                <div className='text-sm text-gray-600'>Notify users about booking confirmations and updates</div>
              </div>
            </label>

            <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
              <input
                type='checkbox'
                defaultChecked
                className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
              />
              <div className='flex-1'>
                <div className='font-semibold text-gray-900 mb-1'>Message Notifications</div>
                <div className='text-sm text-gray-600'>Notify users about new messages from other users</div>
              </div>
            </label>

            <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
              <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
              <div className='flex-1'>
                <div className='font-semibold text-gray-900 mb-1'>Promotional Notifications</div>
                <div className='text-sm text-gray-600'>Send promotional offers and deals via push notifications</div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* SMS Notifications */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>SMS Notifications</h2>
          <p className='text-gray-600 mt-1'>Configure SMS notification settings</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>SMS Provider</label>
              <select className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
                <option>Twilio</option>
                <option>Nexmo</option>
                <option>AWS SNS</option>
                <option>MessageBird</option>
              </select>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Account SID</label>
                <input
                  type='text'
                  placeholder='ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Auth Token</label>
                <input
                  type='password'
                  placeholder='••••••••••••'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>From Phone Number</label>
              <input
                type='tel'
                defaultValue='+994123456789'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
              />
            </div>

            <div className='space-y-4'>
              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>OTP Verification</div>
                  <div className='text-sm text-gray-600'>Send OTP codes for phone number verification</div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Booking Reminders</div>
                  <div className='text-sm text-gray-600'>Send SMS reminders before rental start time</div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Marketing SMS</div>
                  <div className='text-sm text-gray-600'>Send promotional offers via SMS (requires user consent)</div>
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* Email Limits */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Rate Limits</h2>
          <p className='text-gray-600 mt-1'>Prevent spam and manage sending limits</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Max Emails Per User (per day)</label>
                <input
                  type='number'
                  defaultValue='50'
                  min='1'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Max SMS Per User (per day)</label>
                <input
                  type='number'
                  defaultValue='10'
                  min='1'
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
          Save Email Settings
        </Button>
        <Button variant='outline' className='hover:bg-gray-50'>
          Cancel
        </Button>
      </div>
    </div>
  );
}
