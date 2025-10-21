import ProfileNavigation, { NavigationItem } from '@/components/profile-navigation';
import UserPanel from './profile-header-sections/user-panel';
import ActionButtons from './profile-header-sections/action-buttons';

const getNavigation = (isAdmin: boolean): NavigationItem[] => {
  const baseNavigation: NavigationItem[] = [
    { name: 'Profile', href: '/profile', icon: 'User', exact: true },
    // { name: 'Dashboard', href: '/profile/dashboard', icon: 'LayoutDashboard' },
    { name: 'My Listings', href: '/profile/listings', icon: 'Car' },
    { name: 'Favorites', href: '/profile/favorites', icon: 'Heart' },
    // { name: 'Notifications', href: '/profile/notifications', icon: 'Bell' },
    // { name: 'Settings', href: '/profile/settings', icon: 'Settings' },
  ];

  if (isAdmin) {
    baseNavigation.push({ name: 'Admin', href: '/admin', icon: 'ShieldAlert' });
  }

  return baseNavigation;
};

interface ProfileHeaderProps {
  name: string;
  createdAt: string;
  isAdmin: boolean;
}

export default async function ProfileHeader({ name, createdAt, isAdmin }: ProfileHeaderProps) {
  const navigation = getNavigation(isAdmin);

  return (
    <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 pt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8'>
        {/* User Info Section */}
        <div className='flex flex-col gap-6 mb-6 lg:mb-8'>
          {/* Top Row: Avatar, User Info, and Action Buttons */}
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6'>
            <UserPanel name={name} createdAt={createdAt} />

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
