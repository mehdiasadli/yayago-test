import { HTMLAttributes } from 'react';

import NavigationActions from './navigation-actions';
import NavigationLogo from './navigation-logo';
import NavigationMenu from './navigation-menu';
import { cn } from '@/lib/utils';
import { NAVIGATION_HEIGHT } from './data';

interface DesktopNavigationProps extends HTMLAttributes<HTMLDivElement> {}

export default function DesktopNavigation({ ...props }: DesktopNavigationProps) {
  return (
    <div
      {...props}
      style={{ height: NAVIGATION_HEIGHT }}
      className={cn('flex items-center justify-between px-4 text-white', props.className)}
    >
      <div className='flex-1 min-w-0'>
        <NavigationMenu />
      </div>
      <div className='flex-1 min-w-0 flex justify-center'>
        <NavigationLogo />
      </div>
      <div className='flex-1 min-w-0 flex justify-end'>
        <NavigationActions />
      </div>
    </div>
  );
}
