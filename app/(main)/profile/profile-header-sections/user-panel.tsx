import AvatarUploader from '@/components/avatar-uploader';
import { Calendar } from 'lucide-react';

interface UserPanelProps {
  name: string;
  createdAt: string;
  userId: number;
  avatarUrl?: string | null;
}

export default function UserPanel({ name, createdAt, userId, avatarUrl }: UserPanelProps) {
  return (
    <>
      {/* Avatar */}
      <div className='relative group flex-shrink-0'>
        <AvatarUploader userId={userId} initialAvatarUrl={avatarUrl} />
      </div>

      {/* User Details */}
      <div className='flex-1 min-w-0'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 truncate'>{name}</h1>
        <div className='flex items-center gap-2 text-sm text-gray-400 mb-3'>
          <Calendar className='w-4 h-4' />
          <span>Member since {new Date(createdAt).toLocaleDateString()}</span>
        </div>

        {/* Stats - Mobile/Tablet */}
        <div className='flex flex-wrap items-center gap-3 sm:gap-4'>
          {/* <div className='flex items-center gap-2 text-sm'>
            <div className='w-8 h-8 bg-white/10 flex items-center justify-center'>
              <Car className='w-4 h-4 text-primary' strokeWidth={2} />
            </div>
            <div>
              <div className='text-white font-bold'>{0}</div>
              <div className='text-gray-400 text-xs'>Listings</div>
            </div>
          </div> */}
          {/* <div className='h-8 w-px bg-gray-600' /> */}
          {/* <div className='flex items-center gap-2 text-sm'>
            <div className='w-8 h-8 bg-white/10 flex items-center justify-center'>
              <User className='w-4 h-4 text-primary' strokeWidth={2} />
            </div>
            <div>
              <div className='text-white font-bold'>28</div>
              <div className='text-gray-400 text-xs'>Rentals</div>
            </div>
          </div>
          <div className='h-8 w-px bg-gray-600' />
          <div className='flex items-center gap-2 text-sm'>
            <div className='w-8 h-8 bg-white/10 flex items-center justify-center'>
              <Bell className='w-4 h-4 text-primary' strokeWidth={2} />
            </div>
            <div>
              <div className='text-white font-bold'>4.8 ★</div>
              <div className='text-gray-400 text-xs'>Rating</div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
