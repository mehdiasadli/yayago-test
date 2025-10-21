import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotificationsEmptyState() {
  return (
    <div className='bg-white border-2 border-gray-200 p-16 text-center'>
      <div className='max-w-md mx-auto'>
        <div className='w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6'>
          <Bell className='w-10 h-10 text-gray-400' strokeWidth={2} />
        </div>
        <h3 className='text-2xl font-bold text-gray-900 mb-3'>No Notifications</h3>
        <p className='text-gray-600 mb-6'>
          You're all caught up! You'll see notifications here when you have new activity.
        </p>
        <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>Go to Dashboard</Button>
      </div>
    </div>
  );
}
