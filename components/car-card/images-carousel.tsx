'use client';

import { TCar } from '@/data/cars';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';

interface ImagesCarouselProps {
  car: TCar;
}

export default function ImagesCarousel({ car }: ImagesCarouselProps) {
  const featuredImages = car.images.slice(0, 4);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (window.innerWidth < 768) return; // Skip on mobile

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const section = Math.floor((x / width) * featuredImages.length);
      const newIndex = Math.min(Math.max(section, 0), featuredImages.length - 1);

      setCurrentImageIndex(newIndex);
    },
    [featuredImages.length]
  );

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev < featuredImages.length - 1 ? prev + 1 : prev));
  };

  return (
    <Link
      href={`/cars/rent/${car.id}`}
      className='relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50'
    >
      {featuredImages.length > 0 ? (
        <>
          <div
            className='relative w-full h-full cursor-pointer'
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setCurrentImageIndex(0)}
          >
            <Image
              src={featuredImages[currentImageIndex]}
              alt={`${car.brand} ${car.model}`}
              fill
              className='object-cover transition-all duration-500 group-hover/card:scale-105'
            />

            {/* Gradient overlay on hover */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300' />

            {/* Hover indicators for desktop */}
            <div className='hidden md:flex absolute bottom-3 left-1/2 -translate-x-1/2 gap-1.5 z-10 px-3 py-2 bg-black/30 backdrop-blur-md rounded-full'>
              {featuredImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex
                      ? 'w-8 bg-white shadow-lg shadow-white/50'
                      : 'w-1.5 bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile navigation buttons */}
          {featuredImages.length > 1 && (
            <>
              {currentImageIndex > 0 && (
                <button
                  onClick={handlePrevImage}
                  className='md:hidden absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 shadow-lg hover:bg-white transition-all duration-200 active:scale-95'
                  aria-label='Previous image'
                >
                  <ChevronLeft className='w-5 h-5' strokeWidth={2.5} />
                </button>
              )}

              {currentImageIndex < featuredImages.length - 1 && (
                <button
                  onClick={handleNextImage}
                  className='md:hidden absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 shadow-lg hover:bg-white transition-all duration-200 active:scale-95'
                  aria-label='Next image'
                >
                  <ChevronRight className='w-5 h-5' strokeWidth={2.5} />
                </button>
              )}

              {/* Mobile image indicators */}
              <div className='md:hidden absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 px-3 py-2 bg-black/30 backdrop-blur-md rounded-full'>
                {featuredImages.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? 'w-8 bg-white shadow-lg shadow-white/50' : 'w-1.5 bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <div className='w-full h-full flex items-center justify-center text-gray-400 font-medium'>
          No Image Available
        </div>
      )}
    </Link>
  );
}
