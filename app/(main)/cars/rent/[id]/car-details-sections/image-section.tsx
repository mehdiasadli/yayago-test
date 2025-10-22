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
    <div className='bg-white border-2 border-gray-200 overflow-hidden relative'>
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
      <div className='relative aspect-[4/3] bg-gray-900'>
        {images.length > 0 ? (
          <Image
            src={images[currentImageIndex]}
            alt={name}
            className='w-full h-full object-cover'
            width={1000}
            height={1000}
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
              className='absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors'
            >
              <ChevronLeft className='w-6 h-6' strokeWidth={2} />
            </button>
            <button
              onClick={nextImage}
              className='absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors'
            >
              <ChevronRight className='w-6 h-6' strokeWidth={2} />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className='absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white text-sm font-medium'>
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className='flex gap-2 p-4 bg-gray-50 overflow-x-auto'>
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
