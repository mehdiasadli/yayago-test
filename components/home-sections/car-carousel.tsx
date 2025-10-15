'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CarCard from '../car-card/car-card';
import { CarDetailsResponseDto } from '@/data/cars/car.schema';

interface CarCarouselProps {
  cars: CarDetailsResponseDto[];
}

export default function CarCarousel({ cars }: CarCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: 'start',
      slidesToScroll: 1,
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  if (cars.length === 0) {
    return (
      <div className='text-center py-12'>
        <p className='text-gray-500'>No cars available at the moment</p>
      </div>
    );
  }

  return (
    <div className='relative group'>
      {/* Carousel Container */}
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-5 md:gap-6 lg:gap-7'>
          {cars.map((car) => (
            <div
              key={car.id}
              className='flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-15px)] lg:flex-[0_0_calc(40%-17.5px)] xl:flex-[0_0_calc(33.333%-19px)] 2xl:flex-[0_0_calc(28%-21px)]'
            >
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {canScrollPrev && (
        <button
          onClick={scrollPrev}
          className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-white/20 transition-all duration-300 shadow-lg hover:scale-110'
          aria-label='Previous slide'
        >
          <ChevronLeft className='w-6 h-6' />
        </button>
      )}

      {canScrollNext && (
        <button
          onClick={scrollNext}
          className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-white/20 transition-all duration-300 shadow-lg hover:scale-110'
          aria-label='Next slide'
        >
          <ChevronRight className='w-6 h-6' />
        </button>
      )}
    </div>
  );
}
