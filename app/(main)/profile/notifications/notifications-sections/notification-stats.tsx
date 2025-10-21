import { Bell, MessageCircle, Star, Calendar } from 'lucide-react';

interface NotificationStatsProps {
  unreadCount: number;
  messagesCount: number;
  reviewsCount: number;
  bookingsCount: number;
}

export default function NotificationStats({
  unreadCount,
  messagesCount,
  reviewsCount,
  bookingsCount,
}: NotificationStatsProps) {
  return (
    <div className='grid md:grid-cols-4 gap-6'>
      <div className='bg-white border-2 border-gray-200 p-6'>
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 bg-blue-100 flex items-center justify-center'>
            <Bell className='w-6 h-6 text-blue-600' strokeWidth={2} />
          </div>
          <div>
            <div className='text-2xl font-bold text-gray-900'>{unreadCount}</div>
            <div className='text-sm text-gray-600'>Unread</div>
          </div>
        </div>
      </div>

      <div className='bg-white border-2 border-gray-200 p-6'>
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 bg-green-100 flex items-center justify-center'>
            <MessageCircle className='w-6 h-6 text-green-600' strokeWidth={2} />
          </div>
          <div>
            <div className='text-2xl font-bold text-gray-900'>{messagesCount}</div>
            <div className='text-sm text-gray-600'>Messages</div>
          </div>
        </div>
      </div>

      <div className='bg-white border-2 border-gray-200 p-6'>
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 bg-yellow-100 flex items-center justify-center'>
            <Star className='w-6 h-6 text-yellow-600' strokeWidth={2} />
          </div>
          <div>
            <div className='text-2xl font-bold text-gray-900'>{reviewsCount}</div>
            <div className='text-sm text-gray-600'>Reviews</div>
          </div>
        </div>
      </div>

      <div className='bg-white border-2 border-gray-200 p-6'>
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 bg-blue-100 flex items-center justify-center'>
            <Calendar className='w-6 h-6 text-blue-600' strokeWidth={2} />
          </div>
          <div>
            <div className='text-2xl font-bold text-gray-900'>{bookingsCount}</div>
            <div className='text-sm text-gray-600'>Bookings</div>
          </div>
        </div>
      </div>
    </div>
  );
}
