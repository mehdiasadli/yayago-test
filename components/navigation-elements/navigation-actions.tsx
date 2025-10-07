'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import NavigationSearch from './navigation-search';
import NavUser from './nav-user';

export default function NavigationActions() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (roughly 80vh)
      const heroHeight = window.innerHeight * 0.8;
      setIsScrolled(window.scrollY > heroHeight);
    };

    // Only add scroll listener on home page
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial scroll position
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // On other pages, always show the button
      setIsScrolled(true);
    }
  }, [isHomePage]);

  const showListCarButton = !isHomePage || isScrolled;

  return (
    <div className='h-full flex items-center flex-1 justify-end'>
      <Button
        asChild
        className={`h-full hover:bg-primary/80 transition-all duration-500 ${
          showListCarButton ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
        }`}
      >
        <Link href='/list-car' className='h-full'>
          List Your Car
        </Link>
      </Button>
      <NavigationSearch show={showListCarButton} />
      <NavUser />
    </div>
  );
}
