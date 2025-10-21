import { Bell, Calendar, Car, User } from 'lucide-react';

interface UserPanelProps {
  name: string;
  createdAt: string;
}

export default function UserPanel({ name, createdAt }: UserPanelProps) {
  return (
    <>
      {/* Avatar */}
      <div className='relative group flex-shrink-0'>
        <div className='w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-3xl sm:text-4xl font-bold border-4 border-white shadow-xl'>
          {name.charAt(0)}
        </div>
        <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer'>
          <User className='w-6 h-6 sm:w-8 sm:h-8 text-white' strokeWidth={2} />
        </div>
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
          <div className='flex items-center gap-2 text-sm'>
            <div className='w-8 h-8 bg-white/10 flex items-center justify-center'>
              <Car className='w-4 h-4 text-primary' strokeWidth={2} />
            </div>
            <div>
              <div className='text-white font-bold'>5</div>
              <div className='text-gray-400 text-xs'>Listings</div>
            </div>
          </div>
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
