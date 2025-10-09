import { Button } from '@/components/ui/button';
import { Save, Key, Copy, Plus, Trash2, RefreshCw, Eye, EyeOff } from 'lucide-react';

export const metadata = {
  title: 'API Settings - Admin',
  description: 'Manage API keys and integrations',
};

export default function AdminAPISettingsPage() {
  return (
    <div className='space-y-6'>
      {/* API Configuration */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>API Configuration</h2>
          <p className='text-gray-600 mt-1'>Configure REST API settings</p>
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
                  <div className='font-semibold text-gray-900 mb-1'>Enable Public API</div>
                  <div className='text-sm text-gray-600'>Allow external applications to access the API</div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Require API Authentication</div>
                  <div className='text-sm text-gray-600'>All API requests must include a valid API key</div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Enable CORS</div>
                  <div className='text-sm text-gray-600'>Allow cross-origin requests from specified domains</div>
                </div>
              </label>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>API Base URL</label>
              <input
                type='url'
                defaultValue='https://api.yayago.com/v1'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Allowed Origins (one per line)</label>
              <textarea
                rows={4}
                defaultValue={'https://yayago.com\nhttps://www.yayago.com\nhttps://app.yayago.com'}
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none resize-none font-mono text-sm'
              />
            </div>
          </form>
        </div>
      </div>

      {/* Rate Limiting */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Rate Limiting</h2>
          <p className='text-gray-600 mt-1'>Control API request limits</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Requests Per Minute</label>
                <input
                  type='number'
                  defaultValue='60'
                  min='1'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Requests Per Hour</label>
                <input
                  type='number'
                  defaultValue='1000'
                  min='1'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Daily Request Limit</label>
              <input
                type='number'
                defaultValue='10000'
                min='1'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
              />
            </div>
          </form>
        </div>
      </div>

      {/* API Keys */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-2xl font-bold text-gray-900'>API Keys</h2>
              <p className='text-gray-600 mt-1'>Manage API keys for external integrations</p>
            </div>
            <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
              <Plus className='w-4 h-4 mr-2' />
              Generate New Key
            </Button>
          </div>
        </div>

        <div className='p-8'>
          <div className='space-y-4'>
            {/* API Key 1 */}
            <div className='border-2 border-gray-200 overflow-hidden'>
              <div className='p-6'>
                <div className='flex items-start justify-between mb-4'>
                  <div>
                    <div className='flex items-center gap-3 mb-2'>
                      <h3 className='text-lg font-bold text-gray-900'>Production API Key</h3>
                      <span className='px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold uppercase'>
                        Active
                      </span>
                    </div>
                    <p className='text-sm text-gray-600 mb-1'>Created on January 15, 2025</p>
                    <p className='text-sm text-gray-600'>Last used: 2 hours ago</p>
                  </div>
                  <div className='flex gap-2'>
                    <Button variant='outline' size='sm' className='hover:bg-gray-50'>
                      <Copy className='w-4 h-4' />
                    </Button>
                    <Button variant='outline' size='sm' className='hover:bg-gray-50'>
                      <RefreshCw className='w-4 h-4' />
                    </Button>
                    <Button variant='outline' size='sm' className='hover:bg-red-50 text-red-600 border-red-200'>
                      <Trash2 className='w-4 h-4' />
                    </Button>
                  </div>
                </div>

                <div className='bg-gray-900 p-4 border-2 border-gray-700 mb-4'>
                  <div className='flex items-center justify-between gap-4'>
                    <code className='text-sm text-green-400 font-mono flex-1'>
                      yg_live_1234567890abcdefghijklmnopqrstuvwxyz
                    </code>
                    <Button variant='ghost' size='sm' className='text-gray-400 hover:text-white hover:bg-gray-800'>
                      <Eye className='w-4 h-4' />
                    </Button>
                  </div>
                </div>

                <div className='grid md:grid-cols-3 gap-4'>
                  <div>
                    <div className='text-sm font-semibold text-gray-700 mb-1'>Requests Today</div>
                    <div className='text-2xl font-bold text-gray-900'>4,523</div>
                  </div>
                  <div>
                    <div className='text-sm font-semibold text-gray-700 mb-1'>Requests This Month</div>
                    <div className='text-2xl font-bold text-gray-900'>78,391</div>
                  </div>
                  <div>
                    <div className='text-sm font-semibold text-gray-700 mb-1'>Rate Limit</div>
                    <div className='text-2xl font-bold text-gray-900'>60/min</div>
                  </div>
                </div>
              </div>
            </div>

            {/* API Key 2 */}
            <div className='border-2 border-gray-200 overflow-hidden'>
              <div className='p-6'>
                <div className='flex items-start justify-between mb-4'>
                  <div>
                    <div className='flex items-center gap-3 mb-2'>
                      <h3 className='text-lg font-bold text-gray-900'>Development API Key</h3>
                      <span className='px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold uppercase'>Test</span>
                    </div>
                    <p className='text-sm text-gray-600 mb-1'>Created on December 1, 2024</p>
                    <p className='text-sm text-gray-600'>Last used: 15 minutes ago</p>
                  </div>
                  <div className='flex gap-2'>
                    <Button variant='outline' size='sm' className='hover:bg-gray-50'>
                      <Copy className='w-4 h-4' />
                    </Button>
                    <Button variant='outline' size='sm' className='hover:bg-gray-50'>
                      <RefreshCw className='w-4 h-4' />
                    </Button>
                    <Button variant='outline' size='sm' className='hover:bg-red-50 text-red-600 border-red-200'>
                      <Trash2 className='w-4 h-4' />
                    </Button>
                  </div>
                </div>

                <div className='bg-gray-900 p-4 border-2 border-gray-700 mb-4'>
                  <div className='flex items-center justify-between gap-4'>
                    <code className='text-sm text-blue-400 font-mono flex-1'>
                      yg_test_9876543210zyxwvutsrqponmlkjihgfedcba
                    </code>
                    <Button variant='ghost' size='sm' className='text-gray-400 hover:text-white hover:bg-gray-800'>
                      <Eye className='w-4 h-4' />
                    </Button>
                  </div>
                </div>

                <div className='grid md:grid-cols-3 gap-4'>
                  <div>
                    <div className='text-sm font-semibold text-gray-700 mb-1'>Requests Today</div>
                    <div className='text-2xl font-bold text-gray-900'>142</div>
                  </div>
                  <div>
                    <div className='text-sm font-semibold text-gray-700 mb-1'>Requests This Month</div>
                    <div className='text-2xl font-bold text-gray-900'>3,287</div>
                  </div>
                  <div>
                    <div className='text-sm font-semibold text-gray-700 mb-1'>Rate Limit</div>
                    <div className='text-2xl font-bold text-gray-900'>30/min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Webhooks */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-2xl font-bold text-gray-900'>Webhooks</h2>
              <p className='text-gray-600 mt-1'>Configure webhook endpoints for event notifications</p>
            </div>
            <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
              <Plus className='w-4 h-4 mr-2' />
              Add Webhook
            </Button>
          </div>
        </div>

        <div className='p-8'>
          <div className='space-y-4'>
            <div className='border-2 border-gray-200 p-6'>
              <div className='flex items-start justify-between mb-4'>
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-2'>
                    <h3 className='text-lg font-bold text-gray-900'>Booking Events</h3>
                    <span className='px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold uppercase'>Active</span>
                  </div>
                  <code className='text-sm text-gray-600 bg-gray-100 px-2 py-1'>
                    https://example.com/webhooks/bookings
                  </code>
                </div>
                <div className='flex gap-2'>
                  <Button variant='outline' size='sm' className='hover:bg-gray-50'>
                    Edit
                  </Button>
                  <Button variant='outline' size='sm' className='hover:bg-red-50 text-red-600 border-red-200'>
                    <Trash2 className='w-4 h-4' />
                  </Button>
                </div>
              </div>

              <div className='space-y-2'>
                <div className='text-sm font-semibold text-gray-700'>Subscribed Events:</div>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm'>booking.created</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm'>booking.confirmed</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm'>booking.cancelled</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm'>booking.completed</span>
                </div>
              </div>

              <div className='mt-4 pt-4 border-t-2 border-gray-100 grid md:grid-cols-2 gap-4'>
                <div>
                  <div className='text-sm font-semibold text-gray-700 mb-1'>Success Rate</div>
                  <div className='text-lg font-bold text-green-600'>99.8%</div>
                </div>
                <div>
                  <div className='text-sm font-semibold text-gray-700 mb-1'>Last Triggered</div>
                  <div className='text-lg font-bold text-gray-900'>5 minutes ago</div>
                </div>
              </div>
            </div>

            <div className='border-2 border-gray-200 p-6 opacity-50'>
              <div className='flex items-center gap-3 mb-2'>
                <h3 className='text-lg font-bold text-gray-900'>Payment Events</h3>
                <span className='px-2 py-0.5 bg-gray-200 text-gray-700 text-xs font-bold uppercase'>Inactive</span>
              </div>
              <code className='text-sm text-gray-600 bg-gray-100 px-2 py-1'>https://example.com/webhooks/payments</code>
            </div>
          </div>
        </div>
      </div>

      {/* API Documentation */}
      <div className='bg-blue-50 border-2 border-blue-200 p-6'>
        <div className='flex items-start gap-3'>
          <Key className='w-6 h-6 text-blue-700 flex-shrink-0' strokeWidth={2} />
          <div>
            <div className='font-semibold text-blue-900 mb-2'>API Documentation</div>
            <div className='text-sm text-blue-800 mb-4'>
              View comprehensive API documentation including endpoints, authentication, and examples.
            </div>
            <Button variant='outline' className='hover:bg-blue-100 border-blue-300'>
              View Documentation
            </Button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className='flex gap-3'>
        <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
          <Save className='w-4 h-4 mr-2' />
          Save API Settings
        </Button>
        <Button variant='outline' className='hover:bg-gray-50'>
          Cancel
        </Button>
      </div>
    </div>
  );
}
