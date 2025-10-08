import { Button } from '@/components/ui/button';
import { Bell, Mail, Smartphone, MessageCircle, Calendar, DollarSign, Star, Save } from 'lucide-react';

export const metadata = {
  title: 'Notification Settings',
  description: 'Manage how you receive notifications',
};

export default function NotificationsSettingsPage() {
  return (
    <div className='space-y-6'>
      {/* Notification Channels */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Notification Channels</h2>
          <p className='text-gray-600 mt-1'>Choose how you want to receive notifications</p>
        </div>

        <div className='p-8 space-y-4'>
          <label className='flex items-center justify-between p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <div className='flex items-center gap-4'>
              <div className='w-10 h-10 bg-blue-100 flex items-center justify-center'>
                <Mail className='w-5 h-5 text-blue-600' strokeWidth={2} />
              </div>
              <div>
                <div className='font-semibold text-gray-900'>Email Notifications</div>
                <div className='text-sm text-gray-600'>john.doe@example.com</div>
              </div>
            </div>
            <input type='checkbox' defaultChecked className='w-5 h-5 text-primary focus:ring-primary border-gray-300' />
          </label>

          <label className='flex items-center justify-between p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <div className='flex items-center gap-4'>
              <div className='w-10 h-10 bg-green-100 flex items-center justify-center'>
                <Smartphone className='w-5 h-5 text-green-600' strokeWidth={2} />
              </div>
              <div>
                <div className='font-semibold text-gray-900'>SMS Notifications</div>
                <div className='text-sm text-gray-600'>+994 50 123 45 67</div>
              </div>
            </div>
            <input type='checkbox' defaultChecked className='w-5 h-5 text-primary focus:ring-primary border-gray-300' />
          </label>

          <label className='flex items-center justify-between p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <div className='flex items-center gap-4'>
              <div className='w-10 h-10 bg-purple-100 flex items-center justify-center'>
                <Bell className='w-5 h-5 text-purple-600' strokeWidth={2} />
              </div>
              <div>
                <div className='font-semibold text-gray-900'>Push Notifications</div>
                <div className='text-sm text-gray-600'>Browser and mobile app notifications</div>
              </div>
            </div>
            <input type='checkbox' className='w-5 h-5 text-primary focus:ring-primary border-gray-300' />
          </label>
        </div>
      </div>

      {/* Rental Notifications */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Rental Notifications</h2>
          <p className='text-gray-600 mt-1'>Get notified about your rental activity</p>
        </div>

        <div className='p-8 space-y-4'>
          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input
              type='checkbox'
              defaultChecked
              className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
            />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>New Rental Inquiry</div>
              <div className='text-sm text-gray-600'>When someone is interested in renting your car</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input
              type='checkbox'
              defaultChecked
              className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
            />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Booking Confirmed</div>
              <div className='text-sm text-gray-600'>When a rental is confirmed for your car</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input
              type='checkbox'
              defaultChecked
              className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
            />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Rental Start Reminder</div>
              <div className='text-sm text-gray-600'>1 day before the rental starts</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input
              type='checkbox'
              defaultChecked
              className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
            />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Rental End Reminder</div>
              <div className='text-sm text-gray-600'>When rental is about to end</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input
              type='checkbox'
              defaultChecked
              className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
            />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Booking Cancelled</div>
              <div className='text-sm text-gray-600'>When a rental is cancelled</div>
            </div>
          </label>
        </div>
      </div>

      {/* Messages & Reviews */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Messages & Reviews</h2>
          <p className='text-gray-600 mt-1'>Stay updated on communications and feedback</p>
        </div>

        <div className='p-8 space-y-4'>
          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input
              type='checkbox'
              defaultChecked
              className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
            />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>New Messages</div>
              <div className='text-sm text-gray-600'>When you receive a new message from renters</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input
              type='checkbox'
              defaultChecked
              className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
            />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>New Reviews</div>
              <div className='text-sm text-gray-600'>When someone leaves a review for your car or service</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Review Reminders</div>
              <div className='text-sm text-gray-600'>Remind renters to leave a review after rental completion</div>
            </div>
          </label>
        </div>
      </div>

      {/* Account Updates */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Account & Platform</h2>
          <p className='text-gray-600 mt-1'>Updates about your account and YayaGo platform</p>
        </div>

        <div className='p-8 space-y-4'>
          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input
              type='checkbox'
              defaultChecked
              className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
            />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Payment Updates</div>
              <div className='text-sm text-gray-600'>Notifications about earnings, payouts, and billing</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input
              type='checkbox'
              defaultChecked
              className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
            />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Membership Updates</div>
              <div className='text-sm text-gray-600'>Updates about your subscription and membership status</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Product Updates</div>
              <div className='text-sm text-gray-600'>New features, improvements, and platform updates</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Tips & Best Practices</div>
              <div className='text-sm text-gray-600'>
                Helpful tips to maximize your earnings and improve your listings
              </div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Promotional Offers</div>
              <div className='text-sm text-gray-600'>Special offers, discounts, and promotional campaigns</div>
            </div>
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className='flex gap-3'>
        <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
          <Save className='w-4 h-4 mr-2' />
          Save Preferences
        </Button>
        <Button variant='outline' className='hover:bg-gray-50'>
          Reset to Default
        </Button>
      </div>
    </div>
  );
}
