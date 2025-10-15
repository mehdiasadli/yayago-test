'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Car, Heart, Settings, LayoutDashboard, Bell, ShieldAlert } from 'lucide-react';

export type IconName = 'User' | 'Car' | 'Heart' | 'Settings' | 'LayoutDashboard' | 'Bell' | 'ShieldAlert';

const iconMap = {
  User,
  Car,
  Heart,
  Settings,
  LayoutDashboard,
  Bell,
  ShieldAlert,
};

export interface NavigationItem {
  name: string;
  href: string;
  icon: IconName;
  exact?: boolean;
}

interface ProfileNavigationProps {
  navigation: NavigationItem[];
}

export default function ProfileNavigation({ navigation }: ProfileNavigationProps) {
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className='flex gap-1 overflow-x-auto pb-1 scrollbar-hide -mb-px'>
      {navigation.map((item) => {
        const Icon = iconMap[item.icon];
        const isSpecial = item.name === 'Admin';
        const active = isActive(item.href, item.exact);

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`
              flex items-center justify-center sm:justify-start gap-2 px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 text-sm font-semibold 
              transition-all whitespace-nowrap border-b-4 relative group min-w-[60px] sm:min-w-0
              ${
                active
                  ? isSpecial
                    ? 'text-red-300 border-red-400 bg-red-500/20'
                    : 'text-white border-primary bg-white/10'
                  : isSpecial
                    ? 'text-red-400 hover:text-red-300 border-red-500/50 hover:border-red-400 bg-red-500/5 hover:bg-red-500/20'
                    : 'text-gray-300 hover:text-white border-transparent hover:border-primary/50 hover:bg-white/5'
              }
            `}
          >
            <Icon
              className={`w-4 h-4 flex-shrink-0 transition-transform ${active ? 'scale-110' : 'group-hover:scale-110'}`}
              strokeWidth={2}
            />
            <span className='hidden sm:inline'>{item.name}</span>
            {isSpecial && <span className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse' />}
          </Link>
        );
      })}
    </nav>
  );
}
