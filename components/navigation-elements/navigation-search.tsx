'use client';

import { AnimateIcon } from '../animate-ui/icons/icon';
import { Button } from '../ui/button';
import { Search } from '../animate-ui/icons/search';
import SearchSheet from '../search-sheet';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { X } from 'lucide-react';
import { useState } from 'react';

interface NavigationSearchProps {
  show: boolean;
}

export default function NavigationSearch({ show }: NavigationSearchProps) {
  if (!show) return null;
  const [open, setOpen] = useState(false);

  return (
    <Dialog modal={true} open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <AnimateIcon animateOnHover className='h-full'>
          <Button variant='ghost' className='h-full hover:text-white hover:bg-white/20 transition-colors duration-300'>
            <Search />
            <span className='hidden md:block'>Search</span>
          </Button>
        </AnimateIcon>
      </DialogTrigger>
      <DialogContent className='flex flex-col gap-0 p-0 h-[90vh] max-w-3xl border-none bg-gray-900/80 backdrop-blur-3xl [&>button:last-child]:hidden'>
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-5 pointer-events-none'>
          <div
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
            className='h-full w-full'
          />
        </div>

        <div className='overflow-y-auto flex-1 min-h-0'>
          <DialogHeader className='contents space-y-0 text-left'>
            <DialogTitle asChild>
              <h2 className='text-4xl md:text-5xl font-bold text-white tracking-tight px-6 pt-20 pb-10 text-center'>
                Find Your Perfect Ride
              </h2>
            </DialogTitle>
            <DialogDescription asChild>
              <SearchSheet close={() => setOpen(false)} />
            </DialogDescription>
          </DialogHeader>
        </div>

        <DialogFooter className='flex-shrink-0 border-t border-white/20 bg-gray-900/50 backdrop-blur-md px-6 py-4 !flex-col-reverse gap-3'>
          <DialogClose asChild>
            <Button
              type='button'
              variant='ghost'
              className='w-full text-white/80 hover:text-white hover:bg-white/10 border border-white/20 hover:border-white/30'
            >
              <X className='w-4 h-4 mr-2' />
              Close
            </Button>
          </DialogClose>
          <Button
            type='submit'
            form='search-form'
            size='lg'
            className='w-full h-12 md:h-14 text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 text-white hover:shadow-[0_10px_40px_rgba(101,99,204,0.5)] transition-all duration-300'
          >
            <Search className='w-5 h-5 mr-2' />
            Search Cars
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
