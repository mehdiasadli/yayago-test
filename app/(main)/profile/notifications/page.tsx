import { Button } from '@/components/ui/button';
import {
  Bell,
  Check,
  Trash2,
  MessageCircle,
  Star,
  DollarSign,
  Calendar,
  AlertCircle,
  Car,
  UserCheck,
  TrendingUp,
  Settings,
  CheckCheck,
  Archive,
} from 'lucide-react';

export const metadata = {
  title: 'Notifications',
  description: 'View and manage your notifications',
};

// Mock notifications data
const notifications = [
  {
    id: 1,
    type: 'booking',
    icon: Calendar,
    title: 'New Booking Request',
    message: 'Sarah Johnson wants to rent your BMW X5 from Jan 20-25, 2026',
    time: '5 minutes ago',
    unread: true,
    color: 'blue',
    action: 'View Request',
  },
  {
    id: 2,
    type: 'message',
    icon: MessageCircle,
    title: 'New Message',
    message: 'Michael Chen: "Hi, is the car available for next weekend?"',
    time: '1 hour ago',
    unread: true,
    color: 'green',
    action: 'Reply',
  },
  {
    id: 3,
    type: 'review',
    icon: Star,
    title: 'New Review Received',
    message: 'Emma Wilson left a 5-star review for your Toyota Camry',
    time: '3 hours ago',
    unread: true,
    color: 'yellow',
    action: 'View Review',
  },
  {
    id: 4,
    type: 'payment',
    icon: DollarSign,
    title: 'Payment Received',
    message: 'You received ₼560 for the completed rental of Mercedes-Benz C-Class',
    time: '5 hours ago',
    unread: false,
    color: 'green',
    action: 'View Details',
  },
  {
    id: 5,
    type: 'booking',
    icon: CheckCheck,
    title: 'Booking Confirmed',
    message: 'Your Audi A6 has been confirmed for rental by David Miller',
    time: '1 day ago',
    unread: false,
    color: 'blue',
    action: 'View Booking',
  },
  {
    id: 6,
    type: 'alert',
    icon: AlertCircle,
    title: 'Rental Ending Soon',
    message: 'The rental for your Hyundai Elantra ends in 2 hours',
    time: '1 day ago',
    unread: false,
    color: 'orange',
    action: 'Prepare Car',
  },
  {
    id: 7,
    type: 'message',
    icon: MessageCircle,
    title: 'New Message',
    message: 'John Smith: "Thanks for the great experience! The car was perfect."',
    time: '2 days ago',
    unread: false,
    color: 'green',
    action: 'Reply',
  },
  {
    id: 8,
    type: 'system',
    icon: TrendingUp,
    title: 'Monthly Performance Report',
    message: 'Your earnings increased by 23% this month. View your detailed report.',
    time: '3 days ago',
    unread: false,
    color: 'purple',
    action: 'View Report',
  },
  {
    id: 9,
    type: 'review',
    icon: Star,
    title: 'New Review Received',
    message: 'Robert Lee left a 4-star review for your BMW X5',
    time: '4 days ago',
    unread: false,
    color: 'yellow',
    action: 'View Review',
  },
  {
    id: 10,
    type: 'verification',
    icon: UserCheck,
    title: 'Profile Verified',
    message: 'Your profile has been successfully verified. You can now access all features.',
    time: '5 days ago',
    unread: false,
    color: 'green',
    action: null,
  },
  {
    id: 11,
    type: 'booking',
    icon: Car,
    title: 'Rental Started',
    message: 'Lisa Anderson has picked up your Toyota Camry',
    time: '6 days ago',
    unread: false,
    color: 'blue',
    action: 'Track Rental',
  },
  {
    id: 12,
    type: 'payment',
    icon: DollarSign,
    title: 'Payout Processed',
    message: 'Your payout of ₼2,340 has been transferred to your bank account',
    time: '1 week ago',
    unread: false,
    color: 'green',
    action: 'View Transaction',
  },
];

const notificationTypeColors = {
  booking: 'bg-blue-100 text-blue-600',
  message: 'bg-green-100 text-green-600',
  review: 'bg-yellow-100 text-yellow-600',
  payment: 'bg-green-100 text-green-600',
  alert: 'bg-orange-100 text-orange-600',
  system: 'bg-purple-100 text-purple-600',
  verification: 'bg-green-100 text-green-600',
};

export default function NotificationsPage() {
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div className='space-y-8'>
      {/* Page Header */}
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

      {/* Quick Stats */}
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
              <div className='text-2xl font-bold text-gray-900'>
                {notifications.filter((n) => n.type === 'message').length}
              </div>
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
              <div className='text-2xl font-bold text-gray-900'>
                {notifications.filter((n) => n.type === 'review').length}
              </div>
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
              <div className='text-2xl font-bold text-gray-900'>
                {notifications.filter((n) => n.type === 'booking').length}
              </div>
              <div className='text-sm text-gray-600'>Bookings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='flex items-center gap-2 p-2 overflow-x-auto'>
          <button className='px-6 py-3 bg-primary text-primary-foreground font-semibold whitespace-nowrap hover:bg-primary/90 transition-colors'>
            All ({notifications.length})
          </button>
          <button className='px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap'>
            Unread ({unreadCount})
          </button>
          <button className='px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap'>
            Messages ({notifications.filter((n) => n.type === 'message').length})
          </button>
          <button className='px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap'>
            Bookings ({notifications.filter((n) => n.type === 'booking').length})
          </button>
          <button className='px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap'>
            Reviews ({notifications.filter((n) => n.type === 'review').length})
          </button>
          <button className='px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap'>
            Payments ({notifications.filter((n) => n.type === 'payment').length})
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='divide-y-2 divide-gray-100'>
          {notifications.map((notification) => {
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
          })}
        </div>
      </div>

      {/* Load More */}
      <div className='text-center'>
        <Button variant='outline' className='hover:bg-gray-50'>
          Load More Notifications
        </Button>
      </div>

      {/* Empty State (hidden when there are notifications) */}
      {notifications.length === 0 && (
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
      )}
    </div>
  );
}
