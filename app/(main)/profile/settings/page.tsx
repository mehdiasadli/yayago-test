import { Button } from '@/components/ui/button';
import { Camera, Save, X } from 'lucide-react';

export const metadata = {
  title: 'General Settings',
  description: 'Manage your profile and account information',
};

export default function GeneralSettingsPage() {
  return (
    <div className='space-y-6'>
      {/* Profile Photo */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Profile Photo</h2>
          <p className='text-gray-600 mt-1'>Update your profile picture</p>
        </div>

        <div className='p-8'>
          <div className='flex items-start gap-6'>
            <div className='relative group'>
              <div className='w-24 h-24 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-4xl font-bold border-4 border-gray-200'>
                JD
              </div>
              <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer'>
                <Camera className='w-8 h-8 text-white' strokeWidth={2} />
              </div>
            </div>

            <div className='flex-1'>
              <p className='text-sm text-gray-600 mb-4'>
                Upload a new profile photo. Recommended size: 400x400px. Maximum file size: 5MB.
              </p>
              <div className='flex gap-3'>
                <Button variant='outline' className='hover:bg-gray-50'>
                  <Camera className='w-4 h-4 mr-2' />
                  Upload Photo
                </Button>
                <Button variant='outline' className='hover:bg-red-50 text-red-700 border-red-300'>
                  <X className='w-4 h-4 mr-2' />
                  Remove Photo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Personal Information</h2>
          <p className='text-gray-600 mt-1'>Update your personal details</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            {/* First Name & Last Name */}
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  First Name <span className='text-red-600'>*</span>
                </label>
                <input
                  type='text'
                  defaultValue='John'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                  placeholder='Enter your first name'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Last Name <span className='text-red-600'>*</span>
                </label>
                <input
                  type='text'
                  defaultValue='Doe'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                  placeholder='Enter your last name'
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                Email Address <span className='text-red-600'>*</span>
              </label>
              <input
                type='email'
                defaultValue='john.doe@example.com'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                placeholder='Enter your email'
              />
              <p className='text-sm text-gray-600 mt-2'>
                Your email is verified. <span className='text-green-600 font-semibold'>✓ Verified</span>
              </p>
            </div>

            {/* Phone */}
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                Phone Number <span className='text-red-600'>*</span>
              </label>
              <div className='flex gap-3'>
                <select className='w-32 px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
                  <option>+994</option>
                  <option>+90</option>
                  <option>+1</option>
                  <option>+44</option>
                </select>
                <input
                  type='tel'
                  defaultValue='50 123 45 67'
                  className='flex-1 px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                  placeholder='Enter your phone number'
                />
              </div>
              <p className='text-sm text-gray-600 mt-2'>
                Your phone is verified. <span className='text-green-600 font-semibold'>✓ Verified</span>
              </p>
            </div>

            {/* Date of Birth */}
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Date of Birth</label>
              <input
                type='date'
                defaultValue='1990-01-15'
                className='w-full md:w-1/2 px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
              />
            </div>

            {/* Gender */}
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Gender</label>
              <select className='w-full md:w-1/2 px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-3 pt-4 border-t-2 border-gray-100'>
              <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
                <Save className='w-4 h-4 mr-2' />
                Save Changes
              </Button>
              <Button variant='outline' className='hover:bg-gray-50'>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Address Information */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Address Information</h2>
          <p className='text-gray-600 mt-1'>Update your location details</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            {/* Country & City */}
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Country <span className='text-red-600'>*</span>
                </label>
                <select className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
                  <option>Azerbaijan</option>
                  <option>Turkey</option>
                  <option>Russia</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  City <span className='text-red-600'>*</span>
                </label>
                <select className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
                  <option>Baku</option>
                  <option>Ganja</option>
                  <option>Sumqayit</option>
                  <option>Lankaran</option>
                </select>
              </div>
            </div>

            {/* District */}
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>District</label>
              <select className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
                <option>Nasimi</option>
                <option>Yasamal</option>
                <option>Sabail</option>
                <option>Khatai</option>
                <option>Nizami</option>
                <option>Sabunchu</option>
              </select>
            </div>

            {/* Street Address */}
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Street Address</label>
              <input
                type='text'
                defaultValue='28 May Street, Building 5'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                placeholder='Enter your street address'
              />
            </div>

            {/* Apartment/Unit */}
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Apartment/Unit</label>
                <input
                  type='text'
                  placeholder='Apt, Suite, Unit (optional)'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Postal Code</label>
                <input
                  type='text'
                  placeholder='Enter postal code'
                  className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-3 pt-4 border-t-2 border-gray-100'>
              <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
                <Save className='w-4 h-4 mr-2' />
                Save Address
              </Button>
              <Button variant='outline' className='hover:bg-gray-50'>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Bio */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>About You</h2>
          <p className='text-gray-600 mt-1'>Tell others about yourself</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Bio</label>
              <textarea
                rows={6}
                defaultValue="Hello! I'm John, a passionate car enthusiast based in Baku, Azerbaijan. I've been renting out my vehicles through YayaGo for the past 3 months and absolutely love being part of this community."
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none resize-none'
                placeholder='Write something about yourself...'
              />
              <p className='text-sm text-gray-600 mt-2'>Maximum 500 characters</p>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-3 pt-4 border-t-2 border-gray-100'>
              <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
                <Save className='w-4 h-4 mr-2' />
                Save Bio
              </Button>
              <Button variant='outline' className='hover:bg-gray-50'>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
