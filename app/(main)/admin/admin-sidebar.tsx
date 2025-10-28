import { LayoutDashboard, Users, Car, DollarSign, FileText, Settings, BarChart3, MessageSquare } from 'lucide-react';
import Link from 'next/link';

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

export default function AdminSidebar() {
  return (
    <aside className='fixed left-0 top-[73px] h-[calc(100vh-73px)] w-50 bg-white border-r-2 border-gray-200 overflow-y-auto'>
      <nav className='p-4 space-y-1'>
        {adminNavigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className='flex items-center gap-3 px-4 py-3 text-gray-700 text-sm hover:bg-gray-100 hover:text-primary transition-colors font-semibold group'
            >
              <Icon className='w-4 h-4 group-hover:scale-110 transition-transform' strokeWidth={2} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
