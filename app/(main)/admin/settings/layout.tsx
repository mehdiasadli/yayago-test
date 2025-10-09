'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, Shield, Bell, CreditCard, Wrench, Mail, Globe, Key, Database } from 'lucide-react';

const settingsNavigation = [
  { name: 'General', href: '/admin/settings', icon: Settings, exact: true },
  { name: 'Security', href: '/admin/settings/security', icon: Shield },
  { name: 'Payment Gateway', href: '/admin/settings/payment', icon: CreditCard },
  { name: 'Fees & Commission', href: '/admin/settings/fees', icon: CreditCard },
  { name: 'Email & Notifications', href: '/admin/settings/email', icon: Mail },
  { name: 'Platform Config', href: '/admin/settings/platform', icon: Wrench },
  { name: 'API Settings', href: '/admin/settings/api', icon: Key },
  { name: 'System', href: '/admin/settings/system', icon: Database },
];

export default function AdminSettingsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Platform Settings</h1>
        <p className='text-gray-600'>Configure and manage platform settings</p>
      </div>

      {/* Settings Content */}
      <div className='flex flex-col lg:flex-row gap-8'>
        {/* Sidebar Navigation */}
        <aside className='lg:w-64 flex-shrink-0'>
          <nav className='bg-white border-2 border-gray-200 overflow-hidden'>
            <div className='divide-y-2 divide-gray-100'>
              {settingsNavigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href, item.exact);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-6 py-4 transition-colors ${
                      active ? 'bg-primary text-primary-foreground' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className='w-5 h-5' strokeWidth={2} />
                    <span className='font-semibold'>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <div className='flex-1 min-w-0'>{children}</div>
      </div>
    </div>
  );
}
