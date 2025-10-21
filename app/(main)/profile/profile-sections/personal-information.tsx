import { User } from 'next-auth';
import { Mail, Phone, Check, User as UserIcon } from 'lucide-react';
import { TGetUserByIdResponse } from '@/features/users/users.types';

interface PersonalInformationProps {
  user: TGetUserByIdResponse;
}

export default function PersonalInformation({ user }: PersonalInformationProps) {
  return (
    <div className='bg-white border-2 border-gray-200 overflow-hidden'>
      <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
        <h2 className='text-2xl font-bold text-gray-900'>Personal Information</h2>
        <p className='text-gray-600 mt-1'>Your personal details and contact information</p>
      </div>

      <div className='p-8 space-y-6'>
        <div className='grid md:grid-cols-2 gap-6'>
          {/* Full Name */}
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0'>
              <UserIcon className='w-5 h-5 text-gray-600' strokeWidth={2} />
            </div>
            <div className='flex-1'>
              <div className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1'>Full Name</div>
              <div className='text-lg font-semibold text-gray-900'>{user.fullName}</div>
            </div>
          </div>

          {/* Email */}
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0'>
              <Mail className='w-5 h-5 text-gray-600' strokeWidth={2} />
            </div>
            <div className='flex-1'>
              <div className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1'>Email</div>
              <div className='text-lg font-semibold text-gray-900'>{user.email}</div>
              <div className='flex items-center gap-1.5 mt-1'>
                <Check className='w-3.5 h-3.5 text-green-600' strokeWidth={3} />
                <span className='text-xs text-green-600 font-semibold'>Verified</span>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0'>
              <Phone className='w-5 h-5 text-gray-600' strokeWidth={2} />
            </div>
            <div className='flex-1'>
              <div className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1'>Phone</div>
              <div className='text-lg font-semibold text-gray-900'>{user.phoneNumber}</div>
              <div className='flex items-center gap-1.5 mt-1'>
                <Check className='w-3.5 h-3.5 text-green-600' strokeWidth={3} />
                <span className='text-xs text-green-600 font-semibold'>Verified</span>
              </div>
            </div>
          </div>

          {/* Location */}
          {/* <div className='flex items-start gap-4'>
        <div className='w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0'>
          <MapPin className='w-5 h-5 text-gray-600' strokeWidth={2} />
        </div>
        <div className='flex-1'>
          <div className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1'>Location</div>
          <div className='text-lg font-semibold text-gray-900'>Baku, Azerbaijan</div>
          <div className='text-sm text-gray-600 mt-1'>Nasimi District</div>
        </div>
      </div> */}
        </div>

        {/* <div className='pt-4 border-t-2 border-gray-100'>
      <div className='flex items-start gap-4'>
        <div className='w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0'>
          <Calendar className='w-5 h-5 text-gray-600' strokeWidth={2} />
        </div>
        <div className='flex-1'>
          <div className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1'>
            Member Since
          </div>
          <div className='text-lg font-semibold text-gray-900'>January 15, 2025</div>
          <div className='text-sm text-gray-600 mt-1'>Active for 3 months</div>
        </div>
      </div>
    </div> */}
      </div>
    </div>
  );
}
