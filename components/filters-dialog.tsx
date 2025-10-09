'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';
import { Filter, X, Check } from 'lucide-react';
import SearchFilters from './search-filters';

interface FiltersDialogProps {
  children?: React.ReactNode;
}

export interface FilterState {
  minPrice: string;
  maxPrice: string;
  brand: string;
  bodyType: string;
  classType: string;
  transmission: string;
  fuelType: string;
  driveType: string;
  minYear: string;
  maxYear: string;
}

export default function FiltersDialog({ children }: FiltersDialogProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    minPrice: '',
    maxPrice: '',
    brand: '',
    bodyType: '',
    classType: '',
    transmission: '',
    fuelType: '',
    driveType: '',
    minYear: '',
    maxYear: '',
  });

  const handleApplyFilters = () => {
    const params = new URLSearchParams();

    if (filters.minPrice) params.set('minPrice', filters.minPrice);
    if (filters.maxPrice) params.set('maxPrice', filters.maxPrice);
    if (filters.brand) params.set('brand', filters.brand);
    if (filters.transmission) params.set('transmission', filters.transmission);
    if (filters.fuelType) params.set('fuel', filters.fuelType);
    if (filters.minYear) params.set('minYear', filters.minYear);
    if (filters.maxYear) params.set('maxYear', filters.maxYear);

    const queryString = params.toString();
    const url = queryString ? `/cars/rent?${queryString}` : '/cars/rent';

    setOpen(false);
    router.push(url);
  };

  const handleReset = () => {
    setFilters({
      minPrice: '',
      maxPrice: '',
      brand: '',
      bodyType: '',
      classType: '',
      transmission: '',
      fuelType: '',
      driveType: '',
      minYear: '',
      maxYear: '',
    });
  };

  return (
    <Dialog modal={true} open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant='outline'>
            <Filter />
            Filters
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className='flex flex-col gap-0 p-0 h-[90vh] !w-[95vw] !max-w-7xl border-none bg-gray-900/80 backdrop-blur-3xl [&>button:last-child]:hidden'>
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
                Filter Your Search
              </h2>
            </DialogTitle>
            <DialogDescription asChild>
              <div className='px-6 pb-8'>
                <SearchFilters filters={filters} setFilters={setFilters} onReset={handleReset} />
              </div>
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
            onClick={handleApplyFilters}
            size='lg'
            className='w-full h-12 md:h-14 text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 text-white hover:shadow-[0_10px_40px_rgba(101,99,204,0.5)] transition-all duration-300'
          >
            <Check className='w-5 h-5 mr-2' />
            Apply Filters
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
