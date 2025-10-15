'use client';

import { Card, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Users, Gauge, Fuel, MapPin, Star, Eye, Heart, Route, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ImagesCarousel from './images-carousel';
import { dubaiLocations } from '@/data/locations';
import { CarDetailsResponseDto } from '@/data/cars/car.schema';
import { useEffect, useState } from 'react';
import { carImagesService } from '@/lib/api/services/car-images.service';

interface CarCardProps {
  car: CarDetailsResponseDto;
}

export default function CarCard({ car }: CarCardProps) {
  const location = dubaiLocations.find((loc) => loc.key === 'Dubai'); // TODO: add location
  const [images, setImages] = useState<string[]>([]);
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const imageData = await carImagesService.getCarImages(car.id);
        // Extract image URLs from the response
        const imageUrls = imageData.map((img) => img.imageUrl);
        setImages(imageUrls);
      } catch (error) {
        console.error('Failed to fetch car images:', error);
        // Set empty array on error
        setImages([]);
      } finally {
        setLoadingImages(false);
      }
    }

    fetchImages();
  }, [car.id]);

  return (
    <Card className='p-0 overflow-hidden flex flex-col h-[520px] group/card transition-all duration-500 bg-white/80 backdrop-blur-xl border border-white/50 hover:border-white/90 hover:shadow-lg'>
      {loadingImages ? (
        <div className='relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center'>
          <div className='flex flex-col items-center gap-2'>
            <div className='w-10 h-10 border-4 border-gray-300 border-t-primary rounded-full animate-spin' />
            <span className='text-xs text-gray-500'>Loading images...</span>
          </div>
        </div>
      ) : (
        <ImagesCarousel car={{ id: car.id, images: images, brand: car.brand, model: car.model }} />
      )}

      {/* Card Content */}
      <div className='flex-1 flex flex-col'>
        <CardHeader className='flex-1 pb-4 pt-5 px-5'>
          {/* Featured Badge */}
          {false && (
            <div className='flex items-center gap-1 mb-2'>
              <Star className='w-3.5 h-3.5 fill-primary text-primary' />
              <span className='text-xs font-semibold text-primary uppercase tracking-wider'>Featured</span>
            </div>
          )}

          {/* Title with Year */}
          <Link href={`/cars/rent/${car.id}`} className='group/link block mb-2'>
            <CardTitle className='text-xl font-bold line-clamp-1 tracking-tight text-gray-900 group-hover/link:text-primary transition-colors duration-200'>
              {car.year} {car.brand} {car.model}
            </CardTitle>
          </Link>

          {/* Stats */}
          <div className='flex items-center gap-3 mb-3 text-xs text-gray-500'>
            <div className='flex items-center gap-1'>
              <Eye className='w-3 h-3' strokeWidth={2.5} />
              <span>{0}</span>
            </div>
            <div className='flex items-center gap-1'>
              <Heart className='w-3 h-3' strokeWidth={2.5} />
              <span>{0}</span>
            </div>
          </div>

          {/* Specs */}
          <div className='grid grid-cols-2 gap-x-3 gap-y-2 mb-3'>
            <div className='flex items-center gap-1.5'>
              <Users className='w-3.5 h-3.5 text-gray-500' strokeWidth={2.5} />
              <span className='text-xs text-gray-600'>{5} Seats</span>
            </div>
            <div className='flex items-center gap-1.5'>
              <Gauge className='w-3.5 h-3.5 text-gray-500' strokeWidth={2.5} />
              <span className='text-xs text-gray-600 capitalize'>{'Manual'}</span>
            </div>
            <div className='flex items-center gap-1.5'>
              <Fuel className='w-3.5 h-3.5 text-gray-500' strokeWidth={2.5} />
              <span className='text-xs text-gray-600 capitalize'>{'Petrol'}</span>
            </div>
            {location && (
              <div className='flex items-center gap-1.5'>
                <MapPin className='w-3.5 h-3.5 text-gray-500' strokeWidth={2.5} />
                <span className='text-xs text-gray-600 line-clamp-1'>{'Dubai'}</span>
              </div>
            )}
          </div>

          {/* Host */}
          <div className='mb-3'>
            <div className='text-xs text-gray-500'>
              Hosted by <span className='text-gray-700 font-medium'>{'John Doe'}</span>
            </div>
          </div>

          {/* Price & Mileage */}
          <div className='mt-auto pt-3 border-t border-gray-200'>
            <div className='flex items-end justify-between mt-2'>
              <div className='flex items-baseline gap-1'>
                <span className='text-2xl font-bold text-gray-900'>{car.pricePerDay}</span>
                <span className='text-sm font-semibold text-gray-600'>{'AED'}</span>
                <span className='text-xs text-gray-500'>/ day</span>
              </div>
              <div className='flex items-center gap-1 text-xs text-gray-500'>
                <Route className='w-3 h-3' strokeWidth={2.5} />
                <span>{0}km</span>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardFooter className='p-0'>
          <Link
            href={`/cars/rent/${car.id}`}
            className='w-full py-4 px-5 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 group/button'
          >
            <span>View Details</span>
            <ArrowRight className='w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300' />
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}
