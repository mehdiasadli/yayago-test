'use client';

import { NAVIGATION_BLUR } from './navigation-elements/data';
import DesktopNavigation from './navigation-elements/desktop-navigation';
import MobileNavigation from './navigation-elements/mobile-navigation';
import { useState } from 'react';
import MobileMenu from './navigation-elements/mobile-menu';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary/20 shadow-lg`}>
        <DesktopNavigation className='hidden md:flex' />
        <MobileNavigation
          className='md:hidden'
          isMenuOpen={isMobileMenuOpen}
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
