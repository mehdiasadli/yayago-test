import ProfileNavigation, { NavigationItem } from '@/components/profile-navigation';
import UserPanel from './profile-header-sections/user-panel';
import ActionButtons from './profile-header-sections/action-buttons';

const getNavigation = (isAdmin: boolean, dashboardUrl?: string): NavigationItem[] => {
  const baseNavigation: NavigationItem[] = [
    { name: 'Profile', href: '/profile', icon: 'User', exact: true },
    // { name: 'Dashboard', href: '/profile/dashboard', icon: 'LayoutDashboard' },
    { name: 'My Listings', href: '/profile/listings', icon: 'Car' },
    { name: 'Favorites', href: '/profile/favorites', icon: 'Heart' },
    // { name: 'Notifications', href: '/profile/notifications', icon: 'Bell' },
    // { name: 'Settings', href: '/profile/settings', icon: 'Settings' },
  ];

  if (isAdmin && dashboardUrl) {
    baseNavigation.push({ name: 'Admin', href: dashboardUrl, icon: 'BarChart3', external: true });
  }

  return baseNavigation;
};

interface ProfileHeaderProps {
  name: string;
  createdAt: string;
  isAdmin: boolean;
  userId: number;
  avatarUrl?: string | null;
}

export default async function ProfileHeader({ name, createdAt, isAdmin, userId, avatarUrl }: ProfileHeaderProps) {
  // Access server-side env variable (won't be exposed to client)
  const dashboardUrl = process.env.DASHBOARD_URL;

  const navigation = getNavigation(isAdmin, dashboardUrl);

  return (
    <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 pt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8'>
        {/* User Info Section */}
        <div className='flex flex-col gap-6 mb-6 lg:mb-8'>
          {/* Top Row: Avatar, User Info, and Action Buttons */}
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6'>
            <UserPanel name={name} createdAt={createdAt} userId={userId} avatarUrl={avatarUrl} />

            {/* Action Buttons */}
            <ActionButtons />
          </div>

          {/* Quick Stats - Desktop Only */}
          {/* <QuickStats /> */}
        </div>

        {/* Navigation Tabs */}
        <ProfileNavigation navigation={navigation} />
      </div>
    </div>
  );
}
