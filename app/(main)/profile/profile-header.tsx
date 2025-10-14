import { User, Shield, Car, Bell } from 'lucide-react';
import LogoutButton from '@/components/logout-button';
import ProfileNavigation, { NavigationItem } from '@/components/profile-navigation';
import { User as NextAuthUser } from 'next-auth';

const getNavigation = (isAdmin: boolean): NavigationItem[] => {
  const baseNavigation: NavigationItem[] = [
    { name: 'Profile', href: '/profile', icon: 'User', exact: true },
    { name: 'Dashboard', href: '/profile/dashboard', icon: 'LayoutDashboard' },
    { name: 'My Listings', href: '/profile/listings', icon: 'Car' },
    { name: 'Favorites', href: '/profile/favorites', icon: 'Heart' },
    { name: 'Notifications', href: '/profile/notifications', icon: 'Bell' },
    { name: 'Settings', href: '/profile/settings', icon: 'Settings' },
  ];

  if (isAdmin) {
    baseNavigation.push({ name: 'Admin', href: '/admin', icon: 'ShieldAlert' });
  }

  return baseNavigation;
};

export default async function ProfileHeader({ user }: { user: NextAuthUser }) {
  const navigation = getNavigation(true); // TODO: Add role detection when backend supports it

  return (
    <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 pt-20'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-8'>
        {/* User Info Section */}
        <div className='flex flex-col md:flex-row md:items-center gap-6 mb-8'>
          {/* Avatar with Upload */}
          <div className='relative group'>
            <div className='w-28 h-28 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-4xl font-bold border-4 border-white shadow-xl'>
              {user.name?.charAt(0)}
            </div>
            <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer'>
              <User className='w-8 h-8 text-white' strokeWidth={2} />
            </div>
          </div>

          {/* User Details */}
          <div className='flex-1'>
            <div className='flex items-center gap-5 mb-2'>
              <h1 className='text-3xl md:text-4xl font-bold text-white'>{user.name}</h1>
              <div className='flex items-center gap-1.5 px-2.5 py-1 bg-green-500/20 border border-green-500'>
                <Shield className='w-4 h-4 text-green-400' strokeWidth={2} />
                <span className='text-xs text-green-400 font-bold uppercase'>Verified</span>
              </div>
            </div>
            <p className='text-gray-300 mb-4'>Car enthusiast • Premium Member • Member since January 2025</p>
            <div className='flex flex-wrap items-center gap-4'>
              <div className='flex items-center gap-2 text-sm'>
                <div className='w-8 h-8 bg-white/10 flex items-center justify-center'>
                  <Car className='w-4 h-4 text-primary' strokeWidth={2} />
                </div>
                <div>
                  <div className='text-white font-bold'>5</div>
                  <div className='text-gray-400 text-xs'>Active Listings</div>
                </div>
              </div>
              <div className='h-10 w-px bg-gray-600 hidden sm:block' />
              <div className='flex items-center gap-2 text-sm'>
                <div className='w-8 h-8 bg-white/10 flex items-center justify-center'>
                  <User className='w-4 h-4 text-primary' strokeWidth={2} />
                </div>
                <div>
                  <div className='text-white font-bold'>28</div>
                  <div className='text-gray-400 text-xs'>Total Rentals</div>
                </div>
              </div>
              <div className='h-10 w-px bg-gray-600 hidden sm:block' />
              <div className='flex items-center gap-2 text-sm'>
                <div className='w-8 h-8 bg-white/10 flex items-center justify-center'>
                  <Bell className='w-4 h-4 text-primary' strokeWidth={2} />
                </div>
                <div>
                  <div className='text-white font-bold'>4.8 ★</div>
                  <div className='text-gray-400 text-xs'>Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats - Desktop Only */}
          <div className='hidden xl:flex gap-6'>
            <div className='text-center px-6 py-4 bg-white/5 border border-white/10'>
              <div className='text-3xl font-bold text-white mb-1'>₼12.4K</div>
              <div className='text-sm text-gray-400'>Total Earned</div>
              <div className='text-xs text-green-400 font-semibold mt-1'>+18% ↑</div>
            </div>
            <div className='text-center px-6 py-4 bg-white/5 border border-white/10'>
              <div className='text-3xl font-bold text-white mb-1'>₼2.4K</div>
              <div className='text-sm text-gray-400'>This Month</div>
              <div className='text-xs text-primary font-semibold mt-1'>12 rentals</div>
            </div>
          </div>

          {/* Logout Button */}
          <LogoutButton variant='profile' />
        </div>

        {/* Navigation Tabs */}
        <ProfileNavigation navigation={navigation} />
      </div>
    </div>
  );
}
