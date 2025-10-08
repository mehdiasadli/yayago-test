import { Button } from '@/components/ui/button';
import { Globe, Moon, Sun, Languages, DollarSign, MapPin, Calendar, Save } from 'lucide-react';

export const metadata = {
  title: 'Preferences',
  description: 'Customize your YayaGo experience',
};

export default function PreferencesSettingsPage() {
  return (
    <div className='space-y-6'>
      {/* Language & Region */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Language & Region</h2>
          <p className='text-gray-600 mt-1'>Customize language and regional settings</p>
        </div>

        <div className='p-8 space-y-6'>
          {/* Language */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>
              Language <span className='text-red-600'>*</span>
            </label>
            <select className='w-full md:w-1/2 px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
              <option>English (US)</option>
              <option>English (UK)</option>
              <option>Azərbaycan dili</option>
              <option>Türkçe</option>
              <option>Русский</option>
              <option>العربية</option>
            </select>
            <p className='text-sm text-gray-600 mt-2'>Choose the language you want to use on YayaGo</p>
          </div>

          {/* Currency */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>
              Currency <span className='text-red-600'>*</span>
            </label>
            <select className='w-full md:w-1/2 px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
              <option>AZN (₼) - Azerbaijani Manat</option>
              <option>USD ($) - US Dollar</option>
              <option>EUR (€) - Euro</option>
              <option>GBP (£) - British Pound</option>
              <option>TRY (₺) - Turkish Lira</option>
              <option>RUB (₽) - Russian Ruble</option>
            </select>
            <p className='text-sm text-gray-600 mt-2'>All prices will be displayed in this currency</p>
          </div>

          {/* Time Zone */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>
              Time Zone <span className='text-red-600'>*</span>
            </label>
            <select className='w-full md:w-1/2 px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
              <option>(GMT+4) Baku, Tbilisi, Yerevan</option>
              <option>(GMT+3) Moscow, Istanbul</option>
              <option>(GMT+0) London, Dublin</option>
              <option>(GMT-5) New York, Toronto</option>
              <option>(GMT-8) Los Angeles, Vancouver</option>
            </select>
            <p className='text-sm text-gray-600 mt-2'>Used for booking times and notifications</p>
          </div>

          {/* Date Format */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>Date Format</label>
            <select className='w-full md:w-1/2 px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
              <option>DD/MM/YYYY (15/01/2026)</option>
              <option>MM/DD/YYYY (01/15/2026)</option>
              <option>YYYY-MM-DD (2026-01-15)</option>
            </select>
          </div>

          {/* Time Format */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>Time Format</label>
            <select className='w-full md:w-1/2 px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
              <option>24-hour (14:30)</option>
              <option>12-hour (2:30 PM)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Display Preferences */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Display Preferences</h2>
          <p className='text-gray-600 mt-1'>Customize how YayaGo looks and feels</p>
        </div>

        <div className='p-8 space-y-6'>
          {/* Theme */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-3'>Theme</label>
            <div className='grid md:grid-cols-3 gap-4'>
              <label className='flex items-center gap-3 p-4 border-2 border-primary bg-primary/5 cursor-pointer'>
                <input
                  type='radio'
                  name='theme'
                  defaultChecked
                  className='w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <Sun className='w-5 h-5 text-gray-700' strokeWidth={2} />
                <span className='font-semibold text-gray-900'>Light</span>
              </label>

              <label className='flex items-center gap-3 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input type='radio' name='theme' className='w-5 h-5 text-primary focus:ring-primary border-gray-300' />
                <Moon className='w-5 h-5 text-gray-700' strokeWidth={2} />
                <span className='font-semibold text-gray-900'>Dark</span>
              </label>

              <label className='flex items-center gap-3 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input type='radio' name='theme' className='w-5 h-5 text-primary focus:ring-primary border-gray-300' />
                <Sun className='w-5 h-5 text-gray-700' strokeWidth={2} />
                <span className='font-semibold text-gray-900'>Auto</span>
              </label>
            </div>
          </div>

          {/* Density */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-3'>Display Density</label>
            <div className='space-y-3'>
              <label className='flex items-start gap-4 p-4 border-2 border-primary bg-primary/5 cursor-pointer'>
                <input
                  type='radio'
                  name='density'
                  defaultChecked
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Comfortable</div>
                  <div className='text-sm text-gray-600'>Standard spacing for better readability</div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='radio'
                  name='density'
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Compact</div>
                  <div className='text-sm text-gray-600'>Less spacing to show more content</div>
                </div>
              </label>
            </div>
          </div>

          {/* Other Display Options */}
          <div className='space-y-3'>
            <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
              <input
                type='checkbox'
                defaultChecked
                className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
              />
              <div className='flex-1'>
                <div className='font-semibold text-gray-900 mb-1'>Show Animations</div>
                <div className='text-sm text-gray-600'>Enable smooth transitions and animations</div>
              </div>
            </label>

            <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
              <input
                type='checkbox'
                defaultChecked
                className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
              />
              <div className='flex-1'>
                <div className='font-semibold text-gray-900 mb-1'>Reduce Motion</div>
                <div className='text-sm text-gray-600'>Minimize animations for better accessibility</div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Search Preferences */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Search Preferences</h2>
          <p className='text-gray-600 mt-1'>Set your default search preferences</p>
        </div>

        <div className='p-8 space-y-6'>
          {/* Default Location */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>Default Search Location</label>
            <select className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
              <option>Use my current location</option>
              <option>Baku, Azerbaijan</option>
              <option>Ganja, Azerbaijan</option>
              <option>Sumqayit, Azerbaijan</option>
              <option>Custom location</option>
            </select>
            <p className='text-sm text-gray-600 mt-2'>This location will be used as default when searching for cars</p>
          </div>

          {/* Search Radius */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>Default Search Radius</label>
            <select className='w-full md:w-1/2 px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
              <option>5 km</option>
              <option>10 km</option>
              <option>25 km</option>
              <option>50 km</option>
              <option>100 km</option>
              <option>Unlimited</option>
            </select>
          </div>

          {/* Sort Preference */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>Default Sort Order</label>
            <select className='w-full md:w-1/2 px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
              <option>Most Popular</option>
              <option>Newest First</option>
            </select>
          </div>

          {/* Results Per Page */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>Results Per Page</label>
            <select className='w-full md:w-1/2 px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
              <option>12</option>
              <option>24</option>
              <option>36</option>
              <option>48</option>
            </select>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Accessibility</h2>
          <p className='text-gray-600 mt-1'>Adjust settings to improve your experience</p>
        </div>

        <div className='p-8 space-y-4'>
          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>High Contrast Mode</div>
              <div className='text-sm text-gray-600'>Increase contrast for better visibility</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Large Text</div>
              <div className='text-sm text-gray-600'>Increase font size throughout the platform</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Screen Reader Optimization</div>
              <div className='text-sm text-gray-600'>Optimize the interface for screen readers</div>
            </div>
          </label>

          <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
            <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Keyboard Navigation</div>
              <div className='text-sm text-gray-600'>Enable enhanced keyboard shortcuts and navigation</div>
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
