'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Search, Loader2, MapPin, TrendingUp } from 'lucide-react';
import { dubaiLocations, TLocation } from '@/data/locations';
import LocationsGrid from '@/components/home-sections/locations-grid';
import LocationsBackground from '@/components/home-sections/locations-background';

// Default background when no location is hovered
const defaultBackgroundImage = 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1200&q=80';

// Generate consistent car counts based on location ID
const generateConsistentCarCount = (id: number) => {
  return 15 + ((id * 17 + 31) % 85); // Returns 15-99
};

const INITIAL_LOAD = 24;
const LOAD_MORE = 20;

export default function LocationsContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedCount, setDisplayedCount] = useState(INITIAL_LOAD);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Filter locations based on search
  const filteredLocations = dubaiLocations
    .filter((location) => location.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .map((location) => ({
      id: location.id,
      key: location.key,
      name: location.name,
      image: location.image,
      carsCount: generateConsistentCarCount(location.id),
    }));

  // Get currently displayed locations
  const displayedLocations = filteredLocations.slice(0, displayedCount);
  const hasMore = displayedCount < filteredLocations.length;

  // Get current background image based on hovered location
  const currentBackgroundImage =
    hoveredLocation !== null
      ? displayedLocations[hoveredLocation]?.image || defaultBackgroundImage
      : defaultBackgroundImage;

  // Load more locations
  const loadMore = useCallback(() => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);
    // Simulate loading delay for smooth UX
    setTimeout(() => {
      setDisplayedCount((prev) => Math.min(prev + LOAD_MORE, filteredLocations.length));
      setIsLoading(false);
    }, 300);
  }, [hasMore, isLoading, filteredLocations.length]);

  // Reset displayed count when search changes
  useEffect(() => {
    setDisplayedCount(INITIAL_LOAD);
  }, [searchQuery]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasMore, isLoading, loadMore]);

  return (
    <div className='relative min-h-screen overflow-hidden'>
      {/* Dynamic Background */}
      <LocationsBackground currentBackgroundImage={currentBackgroundImage} />

      {/* Hero Section */}
      <div className='relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24 md:py-32 px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          {/* Decorative elements */}
          <div className='absolute top-10 right-10 w-72 h-72 bg-primary/10 blur-3xl' />
          <div className='absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 blur-3xl' />

          <div className='relative text-center'>
            {/* Badge */}
            <div className='inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase'>
              <MapPin className='w-4 h-4' />
              <span>All Locations</span>
            </div>

            {/* Main Title */}
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent'>
              Explore Dubai
            </h1>

            {/* Subtitle with stats */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10'>
              <p className='text-xl md:text-2xl text-gray-300'>{dubaiLocations.length} Locations</p>
              <div className='hidden md:block w-1.5 h-1.5 rounded-full bg-gray-500' />
              <div className='flex items-center gap-2 text-xl md:text-2xl text-gray-300'>
                <TrendingUp className='w-5 h-5' />
                <span>1000+ Vehicles</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className='relative max-w-3xl mx-auto group'>
              <Search
                className='absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 transition-colors group-focus-within:text-primary'
                strokeWidth={2}
              />
              <input
                type='text'
                placeholder='Search by location name, area, or neighborhood...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full h-16 md:h-20 pl-16 pr-6 bg-white text-gray-900 text-base md:text-lg shadow-2xl shadow-black/25 border-2 border-transparent focus:border-primary focus:outline-none transition-all duration-300 placeholder:text-gray-400'
              />
            </div>

            {/* Results count */}
            {searchQuery && (
              <div className='mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm'>
                <div className='w-2 h-2 bg-green-400 animate-pulse' />
                <p className='text-sm text-gray-200'>
                  Found {filteredLocations.length} location{filteredLocations.length !== 1 ? 's' : ''}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Locations Grid Section */}
      <div className='relative bg-gray-50/95 backdrop-blur-sm py-16 md:py-20 px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          {displayedLocations.length > 0 ? (
            <>
              <LocationsGrid locations={displayedLocations} columns={4} setHoveredLocation={setHoveredLocation} />

              {/* Loading indicator */}
              <div ref={loadMoreRef} className='py-12 flex justify-center'>
                {isLoading && (
                  <div className='flex items-center gap-3 text-gray-600 bg-white px-6 py-3 shadow-lg'>
                    <Loader2 className='w-5 h-5 animate-spin' />
                    <span className='font-medium'>Loading more locations...</span>
                  </div>
                )}
                {!hasMore && displayedLocations.length > INITIAL_LOAD && (
                  <p className='text-gray-500 font-medium'>✓ You've reached the end of the list</p>
                )}
              </div>
            </>
          ) : (
            <div className='text-center py-20 bg-white shadow-lg'>
              <div className='w-20 h-20 mx-auto mb-6 bg-gray-100 flex items-center justify-center'>
                <Search className='w-10 h-10 text-gray-400' strokeWidth={1.5} />
              </div>
              <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>No locations found</h3>
              <p className='text-lg text-gray-600'>Try adjusting your search to find what you're looking for</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
