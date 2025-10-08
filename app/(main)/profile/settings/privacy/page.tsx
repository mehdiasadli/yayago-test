import { Button } from '@/components/ui/button';
import { Shield, Eye, EyeOff, Users, Globe, Lock, Download, Trash2, Save } from 'lucide-react';

export const metadata = {
  title: 'Privacy Settings',
  description: 'Control your privacy and data preferences',
};

export default function PrivacySettingsPage() {
  return (
    <div className='space-y-6'>
      {/* Profile Visibility */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Profile Visibility</h2>
          <p className='text-gray-600 mt-1'>Control who can see your profile information</p>
        </div>

        <div className='p-8 space-y-4'>
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-3'>Who can see your profile?</label>
            <div className='space-y-3'>
              <label className='flex items-start gap-4 p-4 border-2 border-primary bg-primary/5 cursor-pointer'>
                <input
                  type='radio'
                  name='profile_visibility'
                  defaultChecked
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Everyone</div>
                  <div className='text-sm text-gray-600'>Your profile is visible to all YayaGo users and guests</div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='radio'
                  name='profile_visibility'
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Verified Users Only</div>
                  <div className='text-sm text-gray-600'>Only verified users can view your full profile</div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='radio'
                  name='profile_visibility'
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Private</div>
                  <div className='text-sm text-gray-600'>
                    Your profile is hidden from search and can only be accessed by direct link
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Privacy */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Contact Information</h2>
          <p className='text-gray-600 mt-1'>Manage visibility of your contact details</p>
        </div>

        <div className='p-8 space-y-4'>
          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input
              type='checkbox'
              defaultChecked
              className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
            />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Show Email Address</div>
              <div className='text-sm text-gray-600'>Allow other users to see your email address on your profile</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input
              type='checkbox'
              defaultChecked
              className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
            />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Show Phone Number</div>
              <div className='text-sm text-gray-600'>Allow other users to see your phone number on your profile</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Show Exact Location</div>
              <div className='text-sm text-gray-600'>Display your exact address instead of just city/district</div>
            </div>
          </label>
        </div>
      </div>

      {/* Activity Privacy */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Activity & Stats</h2>
          <p className='text-gray-600 mt-1'>Control what activity information is visible</p>
        </div>

        <div className='p-8 space-y-4'>
          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input
              type='checkbox'
              defaultChecked
              className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
            />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Show Review Count</div>
              <div className='text-sm text-gray-600'>Display total number of reviews received</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input
              type='checkbox'
              defaultChecked
              className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
            />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Show Rental Count</div>
              <div className='text-sm text-gray-600'>Display total number of successful rentals</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input
              type='checkbox'
              defaultChecked
              className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
            />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Show Response Rate</div>
              <div className='text-sm text-gray-600'>Display your average response rate and time</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Show Last Active</div>
              <div className='text-sm text-gray-600'>Let others see when you were last active on YayaGo</div>
            </div>
          </label>
        </div>
      </div>

      {/* Search & Indexing */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Search & Indexing</h2>
          <p className='text-gray-600 mt-1'>Control how your profile appears in search</p>
        </div>

        <div className='p-8 space-y-4'>
          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input
              type='checkbox'
              defaultChecked
              className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
            />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Allow Search Engines</div>
              <div className='text-sm text-gray-600'>Let search engines like Google index your public profile</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input
              type='checkbox'
              defaultChecked
              className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
            />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Show in Platform Search</div>
              <div className='text-sm text-gray-600'>Allow your profile to appear in YayaGo search results</div>
            </div>
          </label>
        </div>
      </div>

      {/* Data & Privacy */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Data & Privacy</h2>
          <p className='text-gray-600 mt-1'>Manage your personal data</p>
        </div>

        <div className='p-8 space-y-6'>
          {/* Download Data */}
          <div className='flex items-start justify-between p-6 border-2 border-gray-200'>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>Download Your Data</h3>
              <p className='text-sm text-gray-600'>
                Request a copy of all your data including profile information, listings, bookings, and messages. You'll
                receive a link to download your data within 48 hours.
              </p>
            </div>
            <Button variant='outline' className='hover:bg-gray-50 ml-4'>
              <Download className='w-4 h-4 mr-2' />
              Request Data
            </Button>
          </div>

          {/* Data Sharing */}
          <div>
            <h3 className='text-lg font-bold text-gray-900 mb-4'>Data Sharing</h3>
            <div className='space-y-3'>
              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Analytics & Performance</div>
                  <div className='text-sm text-gray-600'>Help us improve YayaGo by sharing anonymous usage data</div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Personalized Recommendations</div>
                  <div className='text-sm text-gray-600'>Use my activity to suggest relevant cars and features</div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Marketing Partners</div>
                  <div className='text-sm text-gray-600'>
                    Share anonymized data with trusted partners for marketing purposes
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className='flex gap-3'>
        <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
          <Save className='w-4 h-4 mr-2' />
          Save Privacy Settings
        </Button>
        <Button variant='outline' className='hover:bg-gray-50'>
          Reset to Default
        </Button>
      </div>
    </div>
  );
}
