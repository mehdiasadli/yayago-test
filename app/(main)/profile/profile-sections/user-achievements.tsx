import { Award, ThumbsUp, Target, Users } from 'lucide-react';

export default function UserAchievements() {
  return (
    <div className='bg-white border-2 border-gray-200 overflow-hidden'>
      <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
        <h3 className='text-lg font-bold text-gray-900'>Achievements</h3>
      </div>
      <div className='p-6 space-y-4'>
        <div className='flex items-center gap-3'>
          <div className='w-12 h-12 bg-yellow-100 flex items-center justify-center'>
            <Award className='w-6 h-6 text-yellow-600' strokeWidth={2} />
          </div>
          <div>
            <div className='font-semibold text-gray-900 text-sm'>First Rental</div>
            <div className='text-xs text-gray-600'>Completed your first rental</div>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <div className='w-12 h-12 bg-blue-100 flex items-center justify-center'>
            <ThumbsUp className='w-6 h-6 text-blue-600' strokeWidth={2} />
          </div>
          <div>
            <div className='font-semibold text-gray-900 text-sm'>High Rated</div>
            <div className='text-xs text-gray-600'>Maintain 4.5+ rating</div>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <div className='w-12 h-12 bg-green-100 flex items-center justify-center'>
            <Target className='w-6 h-6 text-green-600' strokeWidth={2} />
          </div>
          <div>
            <div className='font-semibold text-gray-900 text-sm'>10 Rentals</div>
            <div className='text-xs text-gray-600'>Completed 10 successful rentals</div>
          </div>
        </div>

        <div className='flex items-center gap-3 opacity-50'>
          <div className='w-12 h-12 bg-gray-100 flex items-center justify-center'>
            <Users className='w-6 h-6 text-gray-400' strokeWidth={2} />
          </div>
          <div>
            <div className='font-semibold text-gray-900 text-sm'>50 Rentals</div>
            <div className='text-xs text-gray-600'>28/50 completed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
