import { Check, Clock, MessageCircle, Star, Camera } from 'lucide-react';

export default function RecentActivity() {
  return (
    <div className='bg-white border-2 border-gray-200 overflow-hidden'>
      <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
        <h2 className='text-2xl font-bold text-gray-900'>Recent Activity</h2>
        <p className='text-gray-600 mt-1'>Your latest actions and updates</p>
      </div>

      <div className='p-8'>
        <div className='space-y-6'>
          {/* Activity Item */}
          <div className='flex gap-4'>
            <div className='flex flex-col items-center'>
              <div className='w-10 h-10 bg-green-100 flex items-center justify-center'>
                <Check className='w-5 h-5 text-green-600' strokeWidth={2} />
              </div>
              <div className='w-px h-full bg-gray-200 mt-2' />
            </div>
            <div className='flex-1 pb-6'>
              <div className='font-semibold text-gray-900 mb-1'>Rental Completed</div>
              <div className='text-sm text-gray-600 mb-2'>Toyota Camry 2022 • 5 days rental</div>
              <div className='flex items-center gap-2 text-xs text-gray-500'>
                <Clock className='w-3.5 h-3.5' />
                <span>2 hours ago</span>
              </div>
            </div>
          </div>

          {/* Activity Item */}
          <div className='flex gap-4'>
            <div className='flex flex-col items-center'>
              <div className='w-10 h-10 bg-blue-100 flex items-center justify-center'>
                <MessageCircle className='w-5 h-5 text-blue-600' strokeWidth={2} />
              </div>
              <div className='w-px h-full bg-gray-200 mt-2' />
            </div>
            <div className='flex-1 pb-6'>
              <div className='font-semibold text-gray-900 mb-1'>New Message</div>
              <div className='text-sm text-gray-600 mb-2'>Inquiry about BMW X5 2023</div>
              <div className='flex items-center gap-2 text-xs text-gray-500'>
                <Clock className='w-3.5 h-3.5' />
                <span>5 hours ago</span>
              </div>
            </div>
          </div>

          {/* Activity Item */}
          <div className='flex gap-4'>
            <div className='flex flex-col items-center'>
              <div className='w-10 h-10 bg-yellow-100 flex items-center justify-center'>
                <Star className='w-5 h-5 text-yellow-600' strokeWidth={2} />
              </div>
              <div className='w-px h-full bg-gray-200 mt-2' />
            </div>
            <div className='flex-1 pb-6'>
              <div className='font-semibold text-gray-900 mb-1'>New Review Received</div>
              <div className='text-sm text-gray-600 mb-2'>5 stars from Ahmad Mammadov</div>
              <div className='flex items-center gap-2 text-xs text-gray-500'>
                <Clock className='w-3.5 h-3.5' />
                <span>1 day ago</span>
              </div>
            </div>
          </div>

          {/* Activity Item */}
          <div className='flex gap-4'>
            <div className='flex flex-col items-center'>
              <div className='w-10 h-10 bg-purple-100 flex items-center justify-center'>
                <Camera className='w-5 h-5 text-purple-600' strokeWidth={2} />
              </div>
            </div>
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-1'>Listing Updated</div>
              <div className='text-sm text-gray-600 mb-2'>Mercedes-Benz E-Class photos updated</div>
              <div className='flex items-center gap-2 text-xs text-gray-500'>
                <Clock className='w-3.5 h-3.5' />
                <span>3 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
