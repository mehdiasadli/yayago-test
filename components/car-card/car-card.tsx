'use client';

import { Car } from '@/data/cars/car.schema';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import ImagesCarousel from './images-carousel';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const [hoveredButton, setHoveredButton] = useState<'call' | 'whatsapp' | null>(null);

  return (
    <Card className='p-0 overflow-hidden flex flex-col h-[480px] group/card transition-all duration-500 bg-white/80 backdrop-blur-xl border border-white/50 hover:border-white/90 hover:shadow-[0_25px_60px_-5px_rgba(0,0,0,0.4)]'>
      <ImagesCarousel car={car} />

      {/* Card Content */}
      <div className='flex-1 flex flex-col'>
        <CardHeader className='flex-1 pb-4 pt-5 px-5'>
          <Link href={`/cars/${car.id}`} className='group/link block mb-3'>
            <CardTitle className='text-xl font-bold line-clamp-1 mb-1.5 tracking-tight text-gray-900 group-hover/link:text-primary transition-colors duration-200'>
              {car.brand} {car.model}
            </CardTitle>
            <span className='text-xs font-medium text-gray-500 tracking-wide'>{car.year}</span>
          </Link>

          <div className='mt-auto pt-2'>
            <div className='flex items-baseline gap-1'>
              <span className='text-2xl font-bold text-gray-900'>{car.pricePerDay}</span>
              <span className='text-sm font-semibold text-gray-600'>{car.currency}</span>
              <span className='text-xs text-gray-500'>/ day</span>
            </div>
          </div>
        </CardHeader>

        <CardFooter className='p-0'>
          <div className='flex items-center w-full'>
            <a
              href={`tel:+971123456789`}
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
              href={`https://wa.me/971123456789?text=Hi, I'm interested in the ${car.brand} ${car.model} ${car.year}`}
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
