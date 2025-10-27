'use client';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <Button
      variant='ghost'
      className='md:hidden h-full hover:text-white hover:bg-white/20 transition-colors duration-300 relative'
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <Menu
        className={cn(
          'transition-all duration-300',
          isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
        )}
      />

      {/* X Icon */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
        }`}
      >
        <X
          className={cn(
            'transition-all duration-300',
            isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
          )}
        />
      </div>
    </Button>
  );
}
