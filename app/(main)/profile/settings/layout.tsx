'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Lock, Bell, CreditCard, Shield, Globe, HelpCircle, FileText, Smartphone, Mail } from 'lucide-react';

const settingsNavigation = [
  { name: 'General', href: '/profile/settings', icon: User, exact: true },
  { name: 'Security', href: '/profile/settings/security', icon: Lock },
  { name: 'Notifications', href: '/profile/settings/notifications', icon: Bell },
  { name: 'Billing', href: '/profile/settings/billing', icon: CreditCard },
  { name: 'Privacy', href: '/profile/settings/privacy', icon: Shield },
  { name: 'Preferences', href: '/profile/settings/preferences', icon: Globe },
];

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
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
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Settings</h1>
        <p className='text-gray-600'>Manage your account settings and preferences</p>
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

          {/* Help Card */}
          <div className='bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 p-6 mt-6'>
            <HelpCircle className='w-8 h-8 text-primary mb-3' strokeWidth={2} />
            <h3 className='font-bold text-gray-900 mb-2'>Need Help?</h3>
            <p className='text-sm text-gray-700 mb-4'>Our support team is here to assist you with any questions.</p>
            <Link href='/support/contact'>
              <button className='w-full px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-semibold'>
                Contact Support
              </button>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <div className='flex-1 min-w-0'>{children}</div>
      </div>
    </div>
  );
}
