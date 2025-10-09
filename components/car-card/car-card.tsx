'use client';

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Phone, MessageCircle, Users, Gauge, Fuel, MapPin, Star, Eye, Heart, Route } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import ImagesCarousel from './images-carousel';
import { TCar, brands } from '@/data/cars';
import { dubaiLocations } from '@/data/locations';

interface CarCardProps {
  car: TCar;
}

export default function CarCard({ car }: CarCardProps) {
  const [hoveredButton, setHoveredButton] = useState<'call' | 'whatsapp' | null>(null);
  const location = dubaiLocations.find((loc) => loc.key === car.location);
  const brandName = brands.find((b) => b.key === car.brand)?.name || car.brand;

  return (
    <Card className='p-0 overflow-hidden flex flex-col h-[520px] group/card transition-all duration-500 bg-white/80 backdrop-blur-xl border border-white/50 hover:border-white/90 hover:shadow-[0_25px_60px_-5px_rgba(0,0,0,0.4)]'>
      <ImagesCarousel car={car} />

      {/* Card Content */}
      <div className='flex-1 flex flex-col'>
        <CardHeader className='flex-1 pb-4 pt-5 px-5'>
          {/* Featured Badge */}
          {car.featured && (
            <div className='flex items-center gap-1 mb-2'>
              <Star className='w-3.5 h-3.5 fill-primary text-primary' />
              <span className='text-xs font-semibold text-primary uppercase tracking-wider'>Featured</span>
            </div>
          )}

          {/* Title with Year */}
          <Link href={`/cars/rent/${car.id}`} className='group/link block mb-2'>
            <CardTitle className='text-xl font-bold line-clamp-1 tracking-tight text-gray-900 group-hover/link:text-primary transition-colors duration-200'>
              {car.year} {brandName} {car.model}
            </CardTitle>
          </Link>

          {/* Stats */}
          <div className='flex items-center gap-3 mb-3 text-xs text-gray-500'>
            <div className='flex items-center gap-1'>
              <Eye className='w-3 h-3' strokeWidth={2.5} />
              <span>{car.viewCount}</span>
            </div>
            <div className='flex items-center gap-1'>
              <Heart className='w-3 h-3' strokeWidth={2.5} />
              <span>{car.favoriteCount}</span>
            </div>
          </div>

          {/* Specs */}
          <div className='grid grid-cols-2 gap-x-3 gap-y-2 mb-3'>
            <div className='flex items-center gap-1.5'>
              <Users className='w-3.5 h-3.5 text-gray-500' strokeWidth={2.5} />
              <span className='text-xs text-gray-600'>{car.seats} Seats</span>
            </div>
            <div className='flex items-center gap-1.5'>
              <Gauge className='w-3.5 h-3.5 text-gray-500' strokeWidth={2.5} />
              <span className='text-xs text-gray-600 capitalize'>{car.transmission}</span>
            </div>
            <div className='flex items-center gap-1.5'>
              <Fuel className='w-3.5 h-3.5 text-gray-500' strokeWidth={2.5} />
              <span className='text-xs text-gray-600 capitalize'>{car.engine}</span>
            </div>
            {location && (
              <div className='flex items-center gap-1.5'>
                <MapPin className='w-3.5 h-3.5 text-gray-500' strokeWidth={2.5} />
                <span className='text-xs text-gray-600 line-clamp-1'>{location.name}</span>
              </div>
            )}
          </div>

          {/* Host */}
          <div className='mb-3'>
            <div className='text-xs text-gray-500'>
              Hosted by <span className='text-gray-700 font-medium'>{car.host.name}</span>
            </div>
          </div>

          {/* Price & Mileage */}
          <div className='mt-auto pt-3 border-t border-gray-200'>
            <div className='flex items-end justify-between mt-2'>
              <div className='flex items-baseline gap-1'>
                <span className='text-2xl font-bold text-gray-900'>{car.pricePerDay}</span>
                <span className='text-sm font-semibold text-gray-600'>{car.priceCurrency}</span>
                <span className='text-xs text-gray-500'>/ day</span>
              </div>
              <div className='flex items-center gap-1 text-xs text-gray-500'>
                <Route className='w-3 h-3' strokeWidth={2.5} />
                <span>{car.mileageLimitPerDay}km</span>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardFooter className='p-0'>
          <div className='flex items-center w-full'>
            <a
              href={`tel:${car.host.phone}`}
              className={`flex items-center justify-center gap-2 px-4 py-3.5 bg-primary/90 backdrop-blur-sm text-primary-foreground hover:bg-primary transition-all duration-300 font-medium relative ${
                hoveredButton === 'call' ? 'flex-[2]' : hoveredButton === 'whatsapp' ? 'flex-[0_0_52px]' : 'flex-1'
              }`}
              onMouseEnter={() => setHoveredButton('call')}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={(e) => e.stopPropagation()}
            >
              <Phone className='w-4 h-4 flex-shrink-0' strokeWidth={2.5} />
              <span
                className={`text-sm font-medium whitespace-nowrap transition-all duration-300 overflow-hidden ${
                  hoveredButton === 'whatsapp' ? 'max-w-0 opacity-0' : 'max-w-[100px] opacity-100'
                }`}
              >
                Call
              </span>
            </a>
            <a
              href={`https://wa.me/${car.host.whatsapp.replace(/[^0-9]/g, '')}?text=Hi, I'm interested in the ${brandName} ${car.model} ${car.year}`}
              target='_blank'
              rel='noopener noreferrer'
              className={`flex items-center justify-center gap-2 px-4 py-3.5 bg-green-600/90 backdrop-blur-sm text-white hover:bg-green-600 transition-all duration-300 font-medium relative ${
                hoveredButton === 'whatsapp' ? 'flex-[2]' : hoveredButton === 'call' ? 'flex-[0_0_52px]' : 'flex-1'
              }`}
              onMouseEnter={() => setHoveredButton('whatsapp')}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={(e) => e.stopPropagation()}
            >
              <MessageCircle className='w-4 h-4 flex-shrink-0' strokeWidth={2.5} />
              <span
                className={`text-sm font-medium whitespace-nowrap transition-all duration-300 overflow-hidden ${
                  hoveredButton === 'call' ? 'max-w-0 opacity-0' : 'max-w-[100px] opacity-100'
                }`}
              >
                WhatsApp
              </span>
            </a>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
