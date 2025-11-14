import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ImageSectionProps {
  images: string[];
  name: string;
  featured: boolean;
  noDeposit: boolean;
}

export default function ImageSection({ images, name, featured, noDeposit }: ImageSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div className='relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950/5 shadow-md'>
      {/* Featured Badge */}
      {featured && (
        <div className='absolute top-4 left-4 z-10 flex items-center gap-1 px-3 py-1.5 bg-primary text-white font-semibold'>
          <Star className='w-4 h-4 fill-white' strokeWidth={2} />
          FEATURED
        </div>
      )}

      {noDeposit && (
        <div className='absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1.5 bg-green-500 text-white font-semibold'>
          NO DEPOSIT
        </div>
      )}

      {/* Main Image */}
      <div className={cn('relative bg-gray-900', images.length === 0 ? 'aspect-square h-32 w-full' : 'aspect-[4/3]')}>
        {images.length > 0 ? (
          <Image
            src={images[currentImageIndex]}
            alt={name}
            className='w-full h-full object-cover transition-transform duration-500 ease-out'
            width={1200}
            height={900}
            priority
          />
        ) : (
          <div className='w-full h-full bg-gray-900 flex items-center justify-center text-white text-sm font-medium'>
            No Image Available
          </div>
        )}

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className='absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/45 hover:bg-black/65 text-white flex items-center justify-center shadow-lg shadow-black/30 transition-all'
              aria-label='Previous image'
            >
              <ChevronLeft className='w-6 h-6' strokeWidth={2} />
            </button>
            <button
              onClick={nextImage}
              className='absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/45 hover:bg-black/65 text-white flex items-center justify-center shadow-lg shadow-black/30 transition-all'
              aria-label='Next image'
            >
              <ChevronRight className='w-6 h-6' strokeWidth={2} />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className='absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/65 text-white text-xs font-medium shadow-sm'>
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className='flex gap-2 p-4 bg-slate-50/90 border-t border-slate-100 overflow-x-auto'>
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-20 h-16 border-2 overflow-hidden transition-all ${
                index === currentImageIndex ? 'border-primary' : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <Image
                src={image}
                alt={`View ${index + 1}`}
                className='w-full h-full object-cover'
                width={100}
                height={100}
                priority
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
