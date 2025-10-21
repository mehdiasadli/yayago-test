import { Button } from '@/components/ui/button';
import { Settings, CheckCheck } from 'lucide-react';

interface NotificationsHeaderProps {
  unreadCount: number;
}
export default function NotificationsHeader({ unreadCount }: NotificationsHeaderProps) {
  return (
    <div className='flex items-start justify-between gap-4 flex-wrap'>
      <div>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Notifications</h1>
        <p className='text-gray-600'>
          You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
        </p>
      </div>

      <div className='flex gap-3'>
        <Button variant='outline' className='hover:bg-gray-50'>
          <Settings className='w-4 h-4 mr-2' />
          Preferences
        </Button>
        <Button variant='outline' className='hover:bg-gray-50'>
          <CheckCheck className='w-4 h-4 mr-2' />
          Mark All Read
        </Button>
      </div>
    </div>
  );
}
