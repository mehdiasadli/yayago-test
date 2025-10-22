'use client';

import { HTMLAttributes, useEffect } from 'react';
import { NAVIGATION_HEIGHT } from './data';
import { cn } from '@/lib/utils';
import NavigationLogo from './navigation-logo';
import NavigationActions from './navigation-actions';
import HamburgerButton from './hamburger-button';
import BackButton from './back-button';

interface MobileNavigationProps extends HTMLAttributes<HTMLDivElement> {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export default function MobileNavigation({ isMenuOpen, onMenuToggle, ...props }: MobileNavigationProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <div
      {...props}
      style={{ height: NAVIGATION_HEIGHT }}
      className={cn('flex items-center justify-between px-4 text-white relative z-50', props.className)}
    >
      <div className='flex-1 min-w-0 h-full'>
        <BackButton />
      </div>
      <div className='flex-1 min-w-0 flex justify-center h-full'>
        <NavigationLogo />
      </div>
      <div className='flex-1 min-w-0 flex justify-end h-full'>
        <NavigationActions />
        <HamburgerButton isOpen={isMenuOpen} onClick={onMenuToggle} />
      </div>
    </div>
  );
}
