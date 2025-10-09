import Link from 'next/link';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Car,
  DollarSign,
  FileText,
  Settings,
  BarChart3,
  MessageSquare,
  ArrowLeft,
  Bell,
} from 'lucide-react';
import Image from 'next/image';
import LogoutButton from '@/components/logout-button';

const adminNavigation = [
  { name: 'Overview', href: '/admin', icon: LayoutDashboard, exact: true },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Vehicles', href: '/admin/vehicles', icon: Car },
  { name: 'Bookings', href: '/admin/bookings', icon: FileText },
  { name: 'Payments', href: '/admin/payments', icon: DollarSign },
  { name: 'Reviews', href: '/admin/reviews', icon: MessageSquare },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  // Redirect if not authenticated or not admin
  if (!session.user.isAdmin) {
    redirect('/profile');
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Admin Navbar */}
      <header className='fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b-2 border-gray-800 shadow-xl'>
        <div className='px-6 py-4'>
          <div className='flex items-center justify-between'>
            {/* Logo & Admin Badge */}
            <div className='flex items-center gap-6'>
              <Link href='/admin' className='flex items-center gap-3'>
                <Image
                  src='/assets/branding/Logo-White.svg'
                  alt='YayaGo'
                  width={120}
                  height={32}
                  className='h-8 w-auto'
                />
                <div className='px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider'>Admin</div>
              </Link>
            </div>

            {/* Actions */}
            <div className='flex items-center gap-4'>
              <Link
                href='/profile'
                className='flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white hover:text-primary transition-colors'
              >
                <ArrowLeft className='w-4 h-4' strokeWidth={2} />
                <span className='hidden sm:inline'>Back to Site</span>
              </Link>

              <Link
                href='/admin/notifications'
                className='relative w-10 h-10 flex items-center justify-center text-white hover:text-primary transition-colors'
              >
                <Bell className='w-5 h-5' strokeWidth={2} />
                <div className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full' />
              </Link>

              <div className='h-8 w-px bg-gray-700' />

              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-sm border-2 border-gray-700'>
                  {session.user.name?.charAt(0) || 'A'}
                </div>
                <div className='hidden md:block'>
                  <div className='text-sm font-semibold text-white'>{session.user.name}</div>
                  <div className='text-xs text-gray-400'>Administrator</div>
                </div>
              </div>

              <LogoutButton variant='admin' />
            </div>
          </div>
        </div>
      </header>

      <div className='flex pt-[73px] min-h-screen'>
        {/* Sidebar */}
        <aside className='fixed left-0 top-[73px] h-[calc(100vh-73px)] w-64 bg-white border-r-2 border-gray-200 overflow-y-auto'>
          <nav className='p-4 space-y-1'>
            {adminNavigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className='flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors font-semibold group'
                >
                  <Icon className='w-5 h-5 group-hover:scale-110 transition-transform' strokeWidth={2} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Quick Stats in Sidebar */}
          <div className='p-4 mt-6 border-t-2 border-gray-200'>
            <h3 className='text-xs font-bold text-gray-500 uppercase tracking-wider mb-3'>Quick Stats</h3>
            <div className='space-y-3'>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-gray-600'>Total Users</span>
                <span className='text-sm font-bold text-gray-900'>1,234</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-gray-600'>Active Cars</span>
                <span className='text-sm font-bold text-gray-900'>456</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-gray-600'>Today's Bookings</span>
                <span className='text-sm font-bold text-green-600'>23</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className='flex-1 ml-64 p-8 min-h-screen'>{children}</main>
      </div>
    </div>
  );
}
