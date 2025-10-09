import { Button } from '@/components/ui/button';
import { Save, Globe, Wrench, Image as ImageIcon } from 'lucide-react';

export const metadata = {
  title: 'Platform Config - Admin Settings',
  description: 'Configure platform features and behavior',
};

export default function AdminPlatformSettingsPage() {
  return (
    <div className='space-y-6'>
      {/* Listing Configuration */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Listing Configuration</h2>
          <p className='text-gray-600 mt-1'>Configure car listing requirements and limits</p>
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
                  <div className='font-semibold text-gray-900 mb-1'>Auto-Approve Listings</div>
                  <div className='text-sm text-gray-600'>Automatically approve car listings without manual review</div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Require Vehicle Documents</div>
                  <div className='text-sm text-gray-600'>
                    Owners must upload vehicle registration and insurance documents
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
                  <div className='font-semibold text-gray-900 mb-1'>Photo Verification</div>
                  <div className='text-sm text-gray-600'>Verify that uploaded photos match the vehicle description</div>
                </div>
              </label>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Minimum Photos Required</label>
                <input
                  type='number'
                  defaultValue='5'
                  min='1'
                  max='20'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Maximum Photos Allowed</label>
                <input
                  type='number'
                  defaultValue='15'
                  min='1'
                  max='50'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Minimum Price (₼/day)</label>
                <input
                  type='number'
                  defaultValue='20'
                  min='1'
                  step='0.01'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Maximum Price (₼/day)</label>
                <input
                  type='number'
                  defaultValue='5000'
                  min='1'
                  step='0.01'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Car Age Limit (years)</label>
              <input
                type='number'
                defaultValue='20'
                min='1'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
              />
              <p className='text-sm text-gray-600 mt-2'>Maximum age of vehicles allowed on the platform</p>
            </div>
          </form>
        </div>
      </div>

      {/* Search & Discovery */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Search & Discovery</h2>
          <p className='text-gray-600 mt-1'>Configure search and ranking algorithms</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Default Search Radius (km)</label>
              <input
                type='number'
                defaultValue='25'
                min='1'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Default Sort Order</label>
              <select className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
                <option>Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Rating</option>
                <option>Distance</option>
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
                  <div className='font-semibold text-gray-900 mb-1'>Boost Featured Listings</div>
                  <div className='text-sm text-gray-600'>Show featured listings higher in search results</div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Hide Unavailable Cars</div>
                  <div className='text-sm text-gray-600'>Don't show cars that are booked for the selected dates</div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Show Unverified Listings</div>
                  <div className='text-sm text-gray-600'>Display listings that haven't been verified yet</div>
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* Review System */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Review System</h2>
          <p className='text-gray-600 mt-1'>Configure review and rating settings</p>
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
                  <div className='font-semibold text-gray-900 mb-1'>Moderate Reviews</div>
                  <div className='text-sm text-gray-600'>Reviews must be approved by admin before being published</div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Verified Reviews Only</div>
                  <div className='text-sm text-gray-600'>Only allow reviews from users who completed a rental</div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Allow Owner Responses</div>
                  <div className='text-sm text-gray-600'>Car owners can respond to reviews</div>
                </div>
              </label>

              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Allow Review Editing</div>
                  <div className='text-sm text-gray-600'>Users can edit their reviews within 24 hours</div>
                </div>
              </label>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                Review Window (days after rental)
              </label>
              <input
                type='number'
                defaultValue='14'
                min='1'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
              />
              <p className='text-sm text-gray-600 mt-2'>
                How long users have to leave a review after rental completion
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Map Configuration */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Map Configuration</h2>
          <p className='text-gray-600 mt-1'>Configure map display settings</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Map Provider</label>
              <select className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
                <option>Google Maps</option>
                <option>Mapbox</option>
                <option>OpenStreetMap</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Google Maps API Key</label>
              <input
                type='password'
                placeholder='AIzaSy...'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
              />
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Default Center Latitude</label>
                <input
                  type='number'
                  defaultValue='40.4093'
                  step='0.0001'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Default Center Longitude</label>
                <input
                  type='number'
                  defaultValue='49.8671'
                  step='0.0001'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Default Zoom Level</label>
              <input
                type='number'
                defaultValue='12'
                min='1'
                max='20'
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
                  <div className='font-semibold text-gray-900 mb-1'>Show Approximate Location</div>
                  <div className='text-sm text-gray-600'>
                    Show approximate location instead of exact address for privacy
                  </div>
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* Image Settings */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Image Settings</h2>
          <p className='text-gray-600 mt-1'>Configure image upload and processing</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Maximum File Size (MB)</label>
                <input
                  type='number'
                  defaultValue='10'
                  min='1'
                  max='50'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Image Quality (%)</label>
                <input
                  type='number'
                  defaultValue='85'
                  min='50'
                  max='100'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Allowed Image Formats</label>
              <div className='space-y-2'>
                <label className='flex items-center gap-3 p-3 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                  <input
                    type='checkbox'
                    defaultChecked
                    className='w-5 h-5 text-primary focus:ring-primary border-gray-300'
                  />
                  <span>JPEG / JPG</span>
                </label>
                <label className='flex items-center gap-3 p-3 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                  <input
                    type='checkbox'
                    defaultChecked
                    className='w-5 h-5 text-primary focus:ring-primary border-gray-300'
                  />
                  <span>PNG</span>
                </label>
                <label className='flex items-center gap-3 p-3 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                  <input type='checkbox' className='w-5 h-5 text-primary focus:ring-primary border-gray-300' />
                  <span>WebP</span>
                </label>
              </div>
            </div>

            <div className='space-y-4'>
              <label className='flex items-start gap-4 p-4 border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
                />
                <div className='flex-1'>
                  <div className='font-semibold text-gray-900 mb-1'>Auto-Optimize Images</div>
                  <div className='text-sm text-gray-600'>
                    Automatically compress and resize images for optimal performance
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
                  <div className='font-semibold text-gray-900 mb-1'>Watermark Images</div>
                  <div className='text-sm text-gray-600'>Add YayaGo watermark to listing photos</div>
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* Save Button */}
      <div className='flex gap-3'>
        <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
          <Save className='w-4 h-4 mr-2' />
          Save Platform Settings
        </Button>
        <Button variant='outline' className='hover:bg-gray-50'>
          Cancel
        </Button>
      </div>
    </div>
  );
}
