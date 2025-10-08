'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { AnimateIcon } from '../animate-ui/icons/icon';
import { ChevronRight } from '../animate-ui/icons/chevron-right';
import { useState } from 'react';
import LocationsGrid from './locations-grid';
import LocationsBackground from './locations-background';
import { dubaiLocations } from '@/data/locations';

// Default background when no location is hovered
const defaultBackgroundImage = 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1200&q=80'; // Dubai skyline panorama

const locations = dubaiLocations
  .filter((d) => d.featured)
  .slice(0, 4)
  .map((l) => ({
    id: l.id,
    key: l.key,
    name: l.name,
    image: l.image,
    carsCount: Math.floor(Math.random() * 100),
  }));

export default function TopLocations() {
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);

  const currentBackgroundImage = hoveredLocation !== null ? locations[hoveredLocation].image : defaultBackgroundImage;

  return (
    <section id='top-locations' className='relative overflow-hidden bg-white'>
      <LocationsBackground currentBackgroundImage={currentBackgroundImage} />

      <div className='relative py-20 md:py-24 px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          {/* Header */}
          <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12'>
            <div className='flex-1 text-center md:text-left'>
              <div className='inline-block mb-4'>
                <span className='px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide uppercase'>
                  Popular Destinations
                </span>
              </div>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight'>
                Top Locations
              </h2>
              <p className='text-lg md:text-xl text-gray-600 max-w-2xl md:max-w-none'>
                Explore car rentals in Dubai's most sought-after neighborhoods
              </p>
            </div>

            {/* View All Button */}
            <AnimateIcon animateOnHover>
              <Button asChild className='h-12 w-50' variant='link'>
                <Link href='/locations'>
                  <span>View All Locations</span>
                  <ChevronRight
                    className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1'
                    strokeWidth={2.5}
                  />
                </Link>
              </Button>
            </AnimateIcon>
          </div>

          <LocationsGrid locations={locations} setHoveredLocation={setHoveredLocation} />
        </div>
      </div>
    </section>
  );
}
