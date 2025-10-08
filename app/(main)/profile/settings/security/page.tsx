import { Button } from '@/components/ui/button';
import {
  Lock,
  Key,
  Shield,
  Smartphone,
  Mail,
  AlertCircle,
  CheckCircle,
  Eye,
  EyeOff,
  Save,
  LogOut,
  Trash2,
} from 'lucide-react';

export const metadata = {
  title: 'Security Settings',
  description: 'Manage your password and security preferences',
};

export default function SecuritySettingsPage() {
  return (
    <div className='space-y-6'>
      {/* Change Password */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Change Password</h2>
          <p className='text-gray-600 mt-1'>Update your password to keep your account secure</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            {/* Current Password */}
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                Current Password <span className='text-red-600'>*</span>
              </label>
              <div className='relative'>
                <input
                  type='password'
                  className='w-full px-4 py-3 pr-12 border-2 border-gray-200 focus:border-primary focus:outline-none'
                  placeholder='Enter your current password'
                />
                <button
                  type='button'
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700'
                >
                  <Eye className='w-5 h-5' strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                New Password <span className='text-red-600'>*</span>
              </label>
              <div className='relative'>
                <input
                  type='password'
                  className='w-full px-4 py-3 pr-12 border-2 border-gray-200 focus:border-primary focus:outline-none'
                  placeholder='Enter your new password'
                />
                <button
                  type='button'
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700'
                >
                  <Eye className='w-5 h-5' strokeWidth={2} />
                </button>
              </div>

              {/* Password Requirements */}
              <div className='mt-3 space-y-2'>
                <p className='text-sm font-semibold text-gray-700'>Password must contain:</p>
                <div className='space-y-1'>
                  <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <CheckCircle className='w-4 h-4 text-green-600' strokeWidth={2} />
                    At least 8 characters
                  </div>
                  <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <div className='w-4 h-4 border-2 border-gray-300 rounded-full' />
                    One uppercase letter
                  </div>
                  <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <div className='w-4 h-4 border-2 border-gray-300 rounded-full' />
                    One lowercase letter
                  </div>
                  <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <div className='w-4 h-4 border-2 border-gray-300 rounded-full' />
                    One number or special character
                  </div>
                </div>
              </div>
            </div>

            {/* Confirm New Password */}
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                Confirm New Password <span className='text-red-600'>*</span>
              </label>
              <div className='relative'>
                <input
                  type='password'
                  className='w-full px-4 py-3 pr-12 border-2 border-gray-200 focus:border-primary focus:outline-none'
                  placeholder='Confirm your new password'
                />
                <button
                  type='button'
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700'
                >
                  <Eye className='w-5 h-5' strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-3 pt-4 border-t-2 border-gray-100'>
              <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
                <Save className='w-4 h-4 mr-2' />
                Update Password
              </Button>
              <Button variant='outline' className='hover:bg-gray-50'>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Two-Factor Authentication</h2>
          <p className='text-gray-600 mt-1'>Add an extra layer of security to your account</p>
        </div>

        <div className='p-8 space-y-6'>
          {/* SMS Authentication */}
          <div className='flex items-start justify-between p-6 border-2 border-gray-200'>
            <div className='flex items-start gap-4 flex-1'>
              <div className='w-12 h-12 bg-blue-100 flex items-center justify-center flex-shrink-0'>
                <Smartphone className='w-6 h-6 text-blue-600' strokeWidth={2} />
              </div>
              <div className='flex-1'>
                <h3 className='text-lg font-bold text-gray-900 mb-1'>SMS Authentication</h3>
                <p className='text-sm text-gray-600 mb-3'>Receive a verification code via SMS when signing in</p>
                <div className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4 text-green-600' strokeWidth={2} />
                  <span className='text-sm font-semibold text-green-600'>Enabled</span>
                </div>
              </div>
            </div>
            <Button variant='outline' className='hover:bg-gray-50'>
              Disable
            </Button>
          </div>

          {/* Email Authentication */}
          <div className='flex items-start justify-between p-6 border-2 border-gray-200'>
            <div className='flex items-start gap-4 flex-1'>
              <div className='w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0'>
                <Mail className='w-6 h-6 text-gray-600' strokeWidth={2} />
              </div>
              <div className='flex-1'>
                <h3 className='text-lg font-bold text-gray-900 mb-1'>Email Authentication</h3>
                <p className='text-sm text-gray-600 mb-3'>Receive a verification code via email when signing in</p>
                <div className='flex items-center gap-2'>
                  <div className='w-4 h-4 border-2 border-gray-300 rounded-full' />
                  <span className='text-sm font-semibold text-gray-600'>Not Enabled</span>
                </div>
              </div>
            </div>
            <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>Enable</Button>
          </div>

          {/* Authenticator App */}
          <div className='flex items-start justify-between p-6 border-2 border-gray-200'>
            <div className='flex items-start gap-4 flex-1'>
              <div className='w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0'>
                <Key className='w-6 h-6 text-gray-600' strokeWidth={2} />
              </div>
              <div className='flex-1'>
                <h3 className='text-lg font-bold text-gray-900 mb-1'>Authenticator App</h3>
                <p className='text-sm text-gray-600 mb-3'>
                  Use an authenticator app like Google Authenticator or Authy
                </p>
                <div className='flex items-center gap-2'>
                  <div className='w-4 h-4 border-2 border-gray-300 rounded-full' />
                  <span className='text-sm font-semibold text-gray-600'>Not Enabled</span>
                </div>
              </div>
            </div>
            <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>Set Up</Button>
          </div>
        </div>
      </div>

      {/* Active Sessions */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Active Sessions</h2>
          <p className='text-gray-600 mt-1'>Manage devices and sessions where you're logged in</p>
        </div>

        <div className='p-8 space-y-4'>
          {/* Current Session */}
          <div className='flex items-start justify-between p-6 border-2 border-primary bg-primary/5'>
            <div className='flex-1'>
              <div className='flex items-center gap-2 mb-2'>
                <h3 className='text-lg font-bold text-gray-900'>MacBook Pro</h3>
                <span className='px-2 py-0.5 bg-primary text-primary-foreground text-xs font-bold'>CURRENT</span>
              </div>
              <div className='space-y-1 text-sm text-gray-600'>
                <p>Chrome on macOS • Baku, Azerbaijan</p>
                <p>Last active: Just now</p>
                <p className='text-green-600 font-semibold'>✓ This is your current session</p>
              </div>
            </div>
          </div>

          {/* Other Sessions */}
          <div className='flex items-start justify-between p-6 border-2 border-gray-200'>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>iPhone 13</h3>
              <div className='space-y-1 text-sm text-gray-600'>
                <p>Safari on iOS • Baku, Azerbaijan</p>
                <p>Last active: 2 hours ago</p>
              </div>
            </div>
            <Button variant='outline' className='hover:bg-red-50 text-red-700 border-red-300'>
              <LogOut className='w-4 h-4 mr-2' />
              Sign Out
            </Button>
          </div>

          <div className='flex items-start justify-between p-6 border-2 border-gray-200'>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>iPad Pro</h3>
              <div className='space-y-1 text-sm text-gray-600'>
                <p>Safari on iOS • Baku, Azerbaijan</p>
                <p>Last active: 1 day ago</p>
              </div>
            </div>
            <Button variant='outline' className='hover:bg-red-50 text-red-700 border-red-300'>
              <LogOut className='w-4 h-4 mr-2' />
              Sign Out
            </Button>
          </div>

          {/* Sign Out All */}
          <div className='pt-4 border-t-2 border-gray-100'>
            <Button variant='outline' className='hover:bg-red-50 text-red-700 border-red-300'>
              <LogOut className='w-4 h-4 mr-2' />
              Sign Out All Other Sessions
            </Button>
          </div>
        </div>
      </div>

      {/* Security Alerts */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Security Alerts</h2>
          <p className='text-gray-600 mt-1'>Get notified about important security events</p>
        </div>

        <div className='p-8 space-y-4'>
          {/* Alert Item */}
          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input
              type='checkbox'
              defaultChecked
              className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
            />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>New sign-in from unknown device</div>
              <div className='text-sm text-gray-600'>
                Get notified when someone signs in to your account from a new device
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
              <div className='font-semibold text-gray-900 mb-1'>Password changed</div>
              <div className='text-sm text-gray-600'>Receive an alert when your password is changed</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Suspicious activity detected</div>
              <div className='text-sm text-gray-600'>Get alerts about unusual account activity</div>
            </div>
          </label>
        </div>
      </div>

      {/* Danger Zone */}
      <div className='bg-white border-2 border-red-300 overflow-hidden'>
        <div className='border-b-2 border-red-300 px-8 py-6 bg-red-50'>
          <h2 className='text-2xl font-bold text-red-900'>Danger Zone</h2>
          <p className='text-red-700 mt-1'>Irreversible and destructive actions</p>
        </div>

        <div className='p-8 space-y-6'>
          {/* Delete Account */}
          <div className='flex items-start justify-between'>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>Delete Account</h3>
              <p className='text-sm text-gray-600 mb-2'>
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <div className='bg-yellow-50 border border-yellow-200 p-3 mt-3'>
                <div className='flex items-start gap-2'>
                  <AlertCircle className='w-5 h-5 text-yellow-700 flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <div className='text-sm text-yellow-900'>
                    <strong>Warning:</strong> This action will permanently delete your account, all your listings,
                    booking history, and personal data. This cannot be undone.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex gap-3 pt-4 border-t-2 border-gray-100'>
            <Button variant='outline' className='hover:bg-red-50 text-red-700 border-red-300'>
              <Trash2 className='w-4 h-4 mr-2' />
              Delete My Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
