import { Suspense } from 'react';
import CarsRentContent from '@/components/cars-rent-content/cars-rent-content';
import { createGetCarsQueryOptions } from '@/features/cars/cars.queries';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { TGetCarsQuery } from '@/features/cars/cars.types';

export const metadata = {
  title: 'Rent a Car in Dubai',
  description:
    'Browse our extensive collection of rental cars in Dubai. From economy to luxury, find the perfect vehicle for your needs. Compare prices, features, and book instantly.',
};

const initialQuery: TGetCarsQuery = {
  q: '',
  brand: undefined,
  location: undefined,
  carTypes: [],
  transmissions: [],
  fuelTypes: [],
  priceRange: [0, 2000],
  yearRange: [2020, 2024],
  featuredOnly: false,
  noDepositOnly: false,
};

function LoadingFallback() {
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

export default async function CarsRentPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(createGetCarsQueryOptions(initialQuery));

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <section className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-16 px-6 lg:px-8 border-b-2 border-primary'>
        <div className='max-w-7xl mx-auto'>
          <div className='max-w-3xl'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6 tracking-tight'>Find Your Perfect Ride</h1>
            <p className='text-xl text-gray-300 leading-relaxed'>
              Browse through our extensive collection of vehicles. From economy to luxury, we have the perfect car for
              every journey in Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <Suspense fallback={<LoadingFallback />}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <CarsRentContent />
        </HydrationBoundary>
      </Suspense>
    </div>
  );
}
