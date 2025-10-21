import { ProfileNotification } from '../page';
import NotificationCard from './notification-card';

interface NotificationsListProps {
  notifications: ProfileNotification[];
}

export default function NotificationsList({ notifications }: NotificationsListProps) {
  return (
    <div className='bg-white border-2 border-gray-200 overflow-hidden'>
      <div className='divide-y-2 divide-gray-100'>
        {notifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
}
