import { User, Car, Bell, Plus, Calendar } from 'lucide-react';
import LogoutButton from '@/components/logout-button';
import ProfileNavigation, { NavigationItem } from '@/components/profile-navigation';
import { User as NextAuthUser } from 'next-auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8'>
        {/* User Info Section */}
        <div className='flex flex-col gap-6 mb-6 lg:mb-8'>
          {/* Top Row: Avatar, User Info, and Action Buttons */}
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6'>
            {/* Avatar */}
            <div className='relative group flex-shrink-0'>
              <div className='w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-3xl sm:text-4xl font-bold border-4 border-white shadow-xl'>
                {user.name?.charAt(0)}
              </div>
              <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer'>
                <User className='w-6 h-6 sm:w-8 sm:h-8 text-white' strokeWidth={2} />
              </div>
            </div>

            {/* User Details */}
            <div className='flex-1 min-w-0'>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 truncate'>{user.name}</h1>
              <div className='flex items-center gap-2 text-sm text-gray-400 mb-3'>
                <Calendar className='w-4 h-4' />
                <span>Member since January 2025</span>
              </div>

              {/* Stats - Mobile/Tablet */}
              <div className='flex flex-wrap items-center gap-3 sm:gap-4'>
                <div className='flex items-center gap-2 text-sm'>
                  <div className='w-8 h-8 bg-white/10 flex items-center justify-center'>
                    <Car className='w-4 h-4 text-primary' strokeWidth={2} />
                  </div>
                  <div>
                    <div className='text-white font-bold'>5</div>
                    <div className='text-gray-400 text-xs'>Listings</div>
                  </div>
                </div>
                <div className='h-8 w-px bg-gray-600' />
                <div className='flex items-center gap-2 text-sm'>
                  <div className='w-8 h-8 bg-white/10 flex items-center justify-center'>
                    <User className='w-4 h-4 text-primary' strokeWidth={2} />
                  </div>
                  <div>
                    <div className='text-white font-bold'>28</div>
                    <div className='text-gray-400 text-xs'>Rentals</div>
                  </div>
                </div>
                <div className='h-8 w-px bg-gray-600' />
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

            {/* Action Buttons */}
            <div className='flex gap-3 w-full sm:w-auto sm:flex-shrink-0 sm:ml-4'>
              <Link href='/profile/listings/new' className='flex-1 sm:flex-initial'>
                <Button className='w-full h-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-semibold px-5 lg:px-7 py-2.5 lg:py-3 transition-all shadow-md hover:shadow-lg'>
                  <Plus className='w-4 h-4 sm:mr-2' strokeWidth={2.5} />
                  <span className='hidden sm:inline'>Add New Car</span>
                  <span className='sm:hidden'>Add Car</span>
                </Button>
              </Link>
              <LogoutButton variant='profile' />
            </div>
          </div>

          {/* Quick Stats - Desktop Only */}
          <div className='hidden xl:flex gap-4 justify-end -mt-2'>
            <div className='text-center px-6 py-3 bg-white/5 border border-white/10'>
              <div className='text-2xl font-bold text-white mb-1'>₼12.4K</div>
              <div className='text-xs text-gray-400'>Total Earned</div>
              <div className='text-xs text-green-400 font-semibold mt-1'>+18% ↑</div>
            </div>
            <div className='text-center px-6 py-3 bg-white/5 border border-white/10'>
              <div className='text-2xl font-bold text-white mb-1'>₼2.4K</div>
              <div className='text-xs text-gray-400'>This Month</div>
              <div className='text-xs text-primary font-semibold mt-1'>12 rentals</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <ProfileNavigation navigation={navigation} />
      </div>
    </div>
  );
}
