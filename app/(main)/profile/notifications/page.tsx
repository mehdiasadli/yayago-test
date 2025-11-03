import {
  MessageCircle,
  Star,
  DollarSign,
  Calendar,
  AlertCircle,
  Car,
  UserCheck,
  TrendingUp,
  CheckCheck,
} from 'lucide-react';
import NotificationStats from './notifications-sections/notification-stats';
import NotificationsFilters from './notifications-sections/notifications-filters';
import NotificationsEmptyState from './notifications-sections/notifications-empty-state';
import NotificationsLoadMore from './notifications-sections/notifications-load-more';
import NotificationsList from './notifications-sections/notifications-list';
import NotificationsHeader from './notifications-sections/notifications-header';

export const metadata = {
  title: 'Notifications',
  description: 'View and manage your notifications',
};

export type ProfileNotificationType =
  | 'booking'
  | 'message'
  | 'review'
  | 'payment'
  | 'alert'
  | 'system'
  | 'verification';

export type ProfileNotification = {
  id: number;
  type: ProfileNotificationType;
  icon: React.ElementType;
  title: string;
  message: string;
  time: string;
  unread: boolean;
  color: string;
  action: string | null;
};

// Mock notifications data
const notifications: ProfileNotification[] = [
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
    message: 'You received 560 AED for the completed rental of Mercedes-Benz C-Class',
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
    message: 'Your payout of 2,340 AED has been transferred to your bank account',
    time: '1 week ago',
    unread: false,
    color: 'green',
    action: 'View Transaction',
  },
];

export default function NotificationsPage() {
  const allCount = notifications.length;
  const unreadCount = notifications.filter((n) => n.unread).length;
  const messagesCount = notifications.filter((n) => n.type === 'message').length;
  const bookingsCount = notifications.filter((n) => n.type === 'booking').length;
  const reviewsCount = notifications.filter((n) => n.type === 'review').length;
  const paymentsCount = notifications.filter((n) => n.type === 'payment').length;

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <NotificationsHeader unreadCount={unreadCount} />

      {/* Quick Stats */}
      <NotificationStats
        unreadCount={unreadCount}
        messagesCount={messagesCount}
        reviewsCount={reviewsCount}
        bookingsCount={bookingsCount}
      />

      {/* Filter Tabs */}
      <NotificationsFilters
        allCount={allCount}
        unreadCount={unreadCount}
        messagesCount={messagesCount}
        bookingsCount={bookingsCount}
        reviewsCount={reviewsCount}
        paymentsCount={paymentsCount}
      />

      {/* Notifications List */}
      <NotificationsList notifications={notifications} />

      {/* Load More */}
      <NotificationsLoadMore />

      {/* Empty State (hidden when there are notifications) */}
      {notifications.length === 0 && <NotificationsEmptyState />}
    </div>
  );
}
