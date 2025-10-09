import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';

export const metadata = {
  title: 'Security Settings - Admin',
  description: 'Configure platform security settings',
};

export default function AdminSecuritySettingsPage() {
  return (
    <div className='space-y-6'>
      {/* Authentication Settings */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Authentication</h2>
          <p className='text-gray-600 mt-1'>Configure authentication and login security</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div className='space-y-4'>
              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Require Email Verification</div>
                  <div className='text-sm text-gray-600'>
                    Users must verify their email address before accessing the platform
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
                  <div className='font-semibold text-gray-900 mb-1'>Require Phone Verification</div>
                  <div className='text-sm text-gray-600'>
                    Users must verify their phone number for booking capabilities
                  </div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Enable Two-Factor Authentication</div>
                  <div className='text-sm text-gray-600'>
                    Require 2FA for all user accounts (recommended for high-security platforms)
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
                  <div className='font-semibold text-gray-900 mb-1'>Social Login</div>
                  <div className='text-sm text-gray-600'>
                    Allow users to sign in with Google, Facebook, and other social providers
                  </div>
                </div>
              </label>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Session Timeout (minutes)</label>
                <input
                  type='number'
                  defaultValue='60'
                  min='5'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Max Login Attempts</label>
                <input
                  type='number'
                  defaultValue='5'
                  min='1'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                Account Lockout Duration (minutes)
              </label>
              <input
                type='number'
                defaultValue='30'
                min='1'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
              />
            </div>
          </form>
        </div>
      </div>

      {/* Password Policy */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Password Policy</h2>
          <p className='text-gray-600 mt-1'>Set password requirements for user accounts</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Minimum Password Length</label>
                <input
                  type='number'
                  defaultValue='8'
                  min='6'
                  max='32'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Password Expiry (days)</label>
                <input
                  type='number'
                  defaultValue='90'
                  min='0'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
                <p className='text-sm text-gray-600 mt-2'>Set to 0 to disable password expiry</p>
              </div>
            </div>

            <div className='space-y-4'>
              <label className='flex items-center gap-3 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <span className='font-semibold text-gray-900'>Require uppercase letters</span>
              </label>

              <label className='flex items-center gap-3 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <span className='font-semibold text-gray-900'>Require lowercase letters</span>
              </label>

              <label className='flex items-center gap-3 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <span className='font-semibold text-gray-900'>Require numbers</span>
              </label>

              <label className='flex items-center gap-3 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <span className='font-semibold text-gray-900'>Require special characters (!@#$%^&*)</span>
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* Data Privacy */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Data Privacy & Protection</h2>
          <p className='text-gray-600 mt-1'>Configure data privacy settings</p>
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
                <div className='font-semibold text-gray-900 mb-1'>GDPR Compliance</div>
                <div className='text-sm text-gray-600'>
                  Enable GDPR compliance features (data export, right to be forgotten, etc.)
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
                <div className='font-semibold text-gray-900 mb-1'>Cookie Consent</div>
                <div className='text-sm text-gray-600'>Display cookie consent banner for EU visitors</div>
              </div>
            </label>

            <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
              <input
                type='checkbox'
                defaultChecked
                className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
              />
              <div className='flex-1'>
                <div className='font-semibold text-gray-900 mb-1'>Data Encryption at Rest</div>
                <div className='text-sm text-gray-600'>Encrypt sensitive user data in database</div>
              </div>
            </label>

            <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
              <input
                type='checkbox'
                defaultChecked
                className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
              />
              <div className='flex-1'>
                <div className='font-semibold text-gray-900 mb-1'>Automatic Data Deletion</div>
                <div className='text-sm text-gray-600'>
                  Automatically delete user data 30 days after account deletion
                </div>
              </div>
            </label>
          </div>

          <div className='mt-6'>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>Data Retention Period (days)</label>
            <input
              type='number'
              defaultValue='365'
              min='1'
              className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
            />
            <p className='text-sm text-gray-600 mt-2'>How long to keep inactive user data before archiving</p>
          </div>
        </div>
      </div>

      {/* Security Monitoring */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Security Monitoring</h2>
          <p className='text-gray-600 mt-1'>Monitor and protect against threats</p>
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
                <div className='font-semibold text-gray-900 mb-1'>Suspicious Activity Alerts</div>
                <div className='text-sm text-gray-600'>Alert admins when suspicious activity is detected</div>
              </div>
            </label>

            <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
              <input
                type='checkbox'
                defaultChecked
                className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
              />
              <div className='flex-1'>
                <div className='font-semibold text-gray-900 mb-1'>IP Whitelisting</div>
                <div className='text-sm text-gray-600'>Restrict admin access to specific IP addresses</div>
              </div>
            </label>

            <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
              <input
                type='checkbox'
                defaultChecked
                className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
              />
              <div className='flex-1'>
                <div className='font-semibold text-gray-900 mb-1'>Rate Limiting</div>
                <div className='text-sm text-gray-600'>Limit API requests to prevent abuse and DDoS attacks</div>
              </div>
            </label>

            <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
              <input
                type='checkbox'
                defaultChecked
                className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
              />
              <div className='flex-1'>
                <div className='font-semibold text-gray-900 mb-1'>Security Audit Logs</div>
                <div className='text-sm text-gray-600'>Keep detailed logs of all security-related events</div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Fraud Prevention */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Fraud Prevention</h2>
          <p className='text-gray-600 mt-1'>Protect against fraudulent activities</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div className='space-y-4'>
              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>ID Verification Required</div>
                  <div className='text-sm text-gray-600'>Require government-issued ID verification for all users</div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Driver's License Verification</div>
                  <div className='text-sm text-gray-600'>Verify driver's license for renters</div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Manual Review for New Users</div>
                  <div className='text-sm text-gray-600'>Manually review all bookings from new users</div>
                </div>
              </label>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Fraud Detection Sensitivity</label>
              <select className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
                <option>Low - Fewer restrictions, may miss some fraud</option>
                <option>Medium - Balanced approach (recommended)</option>
                <option>High - Strict rules, may flag legitimate users</option>
              </select>
            </div>
          </form>
        </div>
      </div>

      {/* Save Button */}
      <div className='flex gap-3'>
        <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
          <Save className='w-4 h-4 mr-2' />
          Save Security Settings
        </Button>
        <Button variant='outline' className='hover:bg-gray-50'>
          Cancel
        </Button>
      </div>
    </div>
  );
}
