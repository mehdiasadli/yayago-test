import { TLocation } from '@/data/locations';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface LocationsGridProps {
  setHoveredLocation?: (location: number | null) => void;
  locations: (Pick<TLocation, 'id' | 'key' | 'name' | 'image'> & {
    carsCount: number;
  })[];
  columns?: number;
}

export default function LocationsGrid({ setHoveredLocation, locations, columns = 2 }: LocationsGridProps) {
  const gridColsClass =
    columns === 3 ? 'md:grid-cols-3' : columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2';

  return (
    <div className={`grid grid-cols-1 ${gridColsClass}`}>
      {locations.map((location, index) => (
        <Link
          key={location.id}
          href={`/cars/rent?location=${location.key}`}
          className='group relative h-80 md:h-96 overflow-hidden transition-all duration-500'
          onMouseEnter={() => setHoveredLocation?.(index)}
          onMouseLeave={() => setHoveredLocation?.(null)}
        >
          {/* Image */}
          <Image
            src={location.image}
            alt={location.name}
            fill
            className='object-cover transition-transform duration-700 group-hover:scale-110'
          />

          {/* Gradient Overlay - Always visible but intensifies on hover */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/80 group-hover:via-black/50' />

          {/* Content */}
          <div className='absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500'>
            {/* Title - appears in center on hover */}
            <h3 className='text-3xl md:text-4xl font-bold text-white text-center mb-2 transform transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'>
              {location.name}
            </h3>

            {/* Cars count - appears below title on hover */}
            <p className='text-white/90 text-sm md:text-base font-medium transition-all duration-500 delay-75 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'>
              {location.carsCount} cars available
            </p>

            {/* Arrow icon - appears on hover */}
            <div className='mt-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-500 delay-100 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'>
              <ArrowRight className='w-6 h-6 text-white' strokeWidth={2.5} />
            </div>
          </div>

          {/* Bottom label - visible by default, fades on hover */}
          <div className='absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 group-hover:opacity-0'>
            <h3 className='text-2xl md:text-3xl font-bold text-white'>{location.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
