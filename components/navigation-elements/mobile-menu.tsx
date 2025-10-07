'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { primaryNavigationLinks, secondaryNavigationLinks, legalLinks } from './data';
import LanguageSelector from './language-selector';
import CurrencySelector from './currency-selector';

interface MobileMenuProps {
  isOpen: boolean;
  onClose?: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className='fixed top-[50px] left-0 right-0 bottom-0 z-40 bg-white/10 backdrop-blur-3xl md:hidden'
        >
          {/* Content Container */}
          <div className='h-full overflow-y-auto py-8 pb-6 px-6'>
            <div className='max-w-lg mx-auto flex flex-col min-h-full'>
              {/* Language & Currency Selectors */}
              <div className='flex items-center gap-3 mb-8'>
                <LanguageSelector variant='dark' />
                <CurrencySelector variant='dark' />
              </div>

              {/* Primary Navigation Links */}
              <nav className='mb-10'>
                <ul className='space-y-1'>
                  {primaryNavigationLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className='block px-4 py-4 text-2xl font-bold text-white hover:text-primary hover:bg-white/10 rounded-xl transition-all duration-200'
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Secondary Navigation Links */}
              <nav className='mb-10'>
                <ul className='space-y-1'>
                  {secondaryNavigationLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (primaryNavigationLinks.length + index) * 0.1 + 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className='block px-4 py-3 text-lg font-medium text-white/90 hover:text-primary hover:bg-white/10 rounded-lg transition-all duration-200'
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Tertiary/Legal Links */}
              <nav className='mt-auto pt-6 border-t border-white/20'>
                <ul className='flex flex-wrap gap-x-4 gap-y-2 justify-center'>
                  {legalLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className='text-sm text-white/70 hover:text-primary transition-colors duration-200'
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
