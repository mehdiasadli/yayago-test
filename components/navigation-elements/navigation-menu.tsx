'use client';

import Link from 'next/link';
import { primaryNavigationLinks } from './data';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function NavigationMenu() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href);

  return (
    <nav className='h-full justify-start'>
      <ul className='h-full flex gap-2'>
        {primaryNavigationLinks.map((link) => (
          <li
            key={link.href}
            className={cn(
              'h-full flex items-center justify-center px-2 transition-colors duration-300 hover:bg-white/20',
              isActive(link.href) && 'bg-white/30'
            )}
          >
            <Link href={link.href} className='w-full h-full text-sm flex items-center justify-center'>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
