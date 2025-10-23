'use client';

import { useState } from 'react';
import CarCard from '../car-card/car-card';
import { createGetCarsQueryOptions } from '@/features/cars/cars.queries';
import SortSelector from '../car-filters/sort-selector';
import SearchInput from '../car-filters/search-input';
import CarFilters from '../car-filters/car-filters';
import ResultsCount from './results-count';
import EmptyState from './empty-state';
import { useQuery } from '@tanstack/react-query';
import { TGetCarsQuery } from '@/features/cars/cars.types';
import { useInitialParams } from '../car-filters/use-initial-params';

export default function CarsRentContent() {
  const initialParams = useInitialParams();

  const [query, setQuery] = useState<TGetCarsQuery>(initialParams);

  const { data: cars = [], status } = useQuery(createGetCarsQueryOptions({}));

  // UI State
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  if (status === 'pending') {
    return (
      <div className='max-w-[1920px] mx-auto px-6 lg:px-8 py-8'>
        <div className='flex items-center justify-center min-h-[400px]'>
          <div className='text-center'>
            <div className='w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4'></div>
            <p className='text-gray-600'>Loading cars...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto px-6 lg:px-8 py-8'>
      <main className='flex-1 min-w-0'>
        {/* Search and Sort Bar */}
        <div className='bg-white border-2 border-gray-200 p-4 mb-6'>
          <div className='flex flex-col sm:flex-row gap-4'>
            {/* Search */}
            <div className='relative flex-1'>
              <SearchInput q={query.q} setQ={(q) => setQuery({ ...query, q })} />
            </div>

            {/* Sort */}
            <div className='flex gap-2'>
              <SortSelector
                sortBy={query.sortBy ?? 'relevance'}
                setSortBy={(sortBy) => setQuery({ ...query, sortBy })}
              />

              <CarFilters
                open={mobileFiltersOpen}
                onOpenChange={setMobileFiltersOpen}
                query={query}
                setQuery={setQuery}
              />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <ResultsCount carsCount={cars.length} />

        {/* Cars Grid */}
        {cars.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6'>
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <EmptyState clearAllFilters={() => setQuery(initialParams)} />
        )}
      </main>
    </div>
  );
}
