import { Button } from '@/components/ui/button';
import { Archive, Trash2, Check } from 'lucide-react';
import { ProfileNotification } from '../page';

const notificationTypeColors = {
  booking: 'bg-blue-100 text-blue-600',
  message: 'bg-green-100 text-green-600',
  review: 'bg-yellow-100 text-yellow-600',
  payment: 'bg-green-100 text-green-600',
  alert: 'bg-orange-100 text-orange-600',
  system: 'bg-purple-100 text-purple-600',
  verification: 'bg-green-100 text-green-600',
};

interface NotificationCardProps {
  notification: ProfileNotification;
}

export default function NotificationCard({ notification }: NotificationCardProps) {
  const Icon = notification.icon;
  const colorClass = notificationTypeColors[notification.type as keyof typeof notificationTypeColors];

  return (
    <div
      key={notification.id}
      className={`p-6 hover:bg-gray-50 transition-colors ${notification.unread ? 'bg-blue-50/50' : ''}`}
    >
      <div className='flex items-start gap-4'>
        {/* Icon */}
        <div className={`w-12 h-12 flex items-center justify-center flex-shrink-0 ${colorClass}`}>
          <Icon className='w-6 h-6' strokeWidth={2} />
        </div>

        {/* Content */}
        <div className='flex-1 min-w-0'>
          <div className='flex items-start justify-between gap-4 mb-2'>
            <div className='flex items-center gap-2'>
              <h3 className='font-bold text-gray-900'>{notification.title}</h3>
              {notification.unread && <div className='w-2 h-2 bg-primary rounded-full animate-pulse' />}
            </div>
            <span className='text-sm text-gray-600 whitespace-nowrap'>{notification.time}</span>
          </div>

          <p className='text-gray-700 mb-3'>{notification.message}</p>

          {/* Actions */}
          <div className='flex items-center gap-3 flex-wrap'>
            {notification.action && (
              <Button size='sm' className='bg-primary hover:bg-primary/90 text-primary-foreground'>
                {notification.action}
              </Button>
            )}
            {notification.unread && (
              <button className='text-sm font-semibold text-gray-700 hover:text-primary transition-colors flex items-center gap-1'>
                <Check className='w-4 h-4' />
                Mark as Read
              </button>
            )}
            <button className='text-sm font-semibold text-gray-700 hover:text-primary transition-colors flex items-center gap-1'>
              <Archive className='w-4 h-4' />
              Archive
            </button>
            <button className='text-sm font-semibold text-red-700 hover:text-red-600 transition-colors flex items-center gap-1'>
              <Trash2 className='w-4 h-4' />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
