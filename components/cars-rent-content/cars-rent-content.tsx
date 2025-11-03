'use client';

import CarCard from '../car-card/car-card';
import { createSearchCarsQueryOptions } from '@/features/cars/cars.queries';
// import SortSelector from '../car-filters/sort-selector';
import SearchInput from '../car-filters/search-input';
// import CarFilters from '../car-filters/car-filters';
import ResultsCount from './results-count';
import EmptyState from './empty-state';
import { useQuery } from '@tanstack/react-query';
// import { useInitialParams } from '../car-filters/use-initial-params';
import { parseAsString, useQueryState } from 'nuqs';
import { useDebouncedValue } from '@/hooks/use-debounce-value';
import CarListSkeleton from '../car-list/car-list-skeleton';
// import { CarDriveTypeSchema, CarFuelTypeEnumSchema, CarTransmissionEnumSchema } from '@/features/cars/cars.enums';

export default function CarsRentContent() {
  // const initialParams = useInitialParams();

  const [q, setQ] = useQueryState(
    'q',
    parseAsString.withDefault('').withOptions({
      shallow: false,
    })
  );
  const [debouncedQ] = useDebouncedValue(q, 500);

  const { data, isLoading, isFetching } = useQuery(
    createSearchCarsQueryOptions({
      q: debouncedQ,
    })
  );

  // UI State
  // const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className='max-w-7xl mx-auto px-6 lg:px-8 py-8'>
      <main className='flex-1 min-w-0'>
        {/* Search and Sort Bar */}
        <div className='bg-white border-2 border-gray-200 p-4 mb-6'>
          <div className='flex flex-col sm:flex-row gap-4'>
            {/* Search */}
            <div className='relative flex-1'>
              <SearchInput q={q} setQ={(q) => setQ(q ?? '')} />
              {isFetching && data && (
                <div className='absolute right-3 top-1/2 -translate-y-1/2'>
                  <div className='w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin'></div>
                </div>
              )}
            </div>

            {/* Sort */}
            {/* <div className='flex gap-2'>
              <SortSelector
                sortBy={query.sortBy ?? 'relevance'}
                setSortBy={(sortBy) => setQuery({ ...query, sortBy })}
              />

              <CarFilters
                open={mobileFiltersOpen}
                onOpenChange={setMobileFiltersOpen}
                query={query}
                setQuery={setQuery}
                filters={filters}
                setFilters={setFilters}
              />
            </div> */}
          </div>
        </div>

        {/* Results Count */}
        {isLoading && !data ? null : <ResultsCount carsCount={data?.pagination.totalItems ?? 0} />}

        {/* Cars Grid */}
        {isLoading && !data ? (
          <CarListSkeleton />
        ) : data?.cars && data?.cars.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6'>
            {data?.cars.map((car) => <CarCard key={car.id} car={car} />)}
          </div>
        ) : (
          <EmptyState clearAllFilters={() => setQ(null)} />
        )}
      </main>
    </div>
  );
}
