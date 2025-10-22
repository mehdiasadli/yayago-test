'use client';

import Link from 'next/link';
import { ArrowLeft, Users, Gauge, Fuel, Package, DoorOpen } from 'lucide-react';
import { TGetCarByIdResponse } from '@/features/cars/cars.types';
import ImageSection from './image-section';
import InfoCard from './info-card';
import TermsConditions from './terms-conditions';
import Pricing from './pricing';
import Requirements from './requirements';
import WhatsIncluded from './whats-included';
import Overview from './overview';
import SimilarCars from './similar-cars';
import HostInfo from './host-info';

interface CarDetailsContentProps {
  car: TGetCarByIdResponse;
  location?: { id: number; key: string; name: string };
  similarCars: TGetCarByIdResponse[];
}

export default function CarDetailsContent({ car, location, similarCars }: CarDetailsContentProps) {
  const features = [
    { Icon: Users, label: 'Seats', value: car.seatCount ?? 0 },
    { Icon: DoorOpen, label: 'Doors', value: car.doorCount ?? 0 },
    { Icon: Gauge, label: 'Transmission', value: car.transmission ?? '' },
    { Icon: Fuel, label: 'Fuel Type', value: car.fuelType ?? '' },
    { Icon: Package, label: 'Body Type', value: car.carType ?? '' },
  ];

  return (
    <div className='min-h-screen bg-gray-50 pt-20'>
      {/* Back Button */}
      <div className='bg-white border-b-2 border-gray-200'>
        <div className='max-w-[1920px] mx-auto px-6 lg:px-8 py-4'>
          <Link
            href='/cars/rent'
            className='inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors font-medium'
          >
            <ArrowLeft className='w-5 h-5' strokeWidth={2} />
            Back to Search
          </Link>
        </div>
      </div>

      <div className='max-w-[1920px] mx-auto px-6 lg:px-8 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Left Sidebar - Sticky on Desktop */}
          <div className='lg:col-span-1'>
            <div className='lg:sticky lg:top-24 space-y-6'>
              {/* Images Carousel */}
              <ImageSection
                images={car.images?.map((img) => img.imageUrl) || []}
                name={`${car.brand} ${car.model} ${car.year}`}
                featured={car.featured || false}
                noDeposit={car.deposit === 0 || false}
              />

              {/* Car Info Card */}
              <InfoCard
                name={`${car.brand} ${car.model} ${car.year}`}
                pricePerDay={car.pricePerDay}
                currency={car.currency}
                location={location?.name || 'Dubai, UAE'}
                viewCount={car.viewCount || 0}
                features={features}
              />

              {/* Host Info */}
              <HostInfo host={car.createdByFullName || ''} />
            </div>
          </div>

          {/* Right Content */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Overview */}
            <Overview name={`${car.brand} ${car.model} ${car.year}`} />

            {/* What's Included */}
            <WhatsIncluded />

            {/* Requirements */}
            <Requirements />

            {/* Pricing Breakdown */}
            <Pricing pricePerDay={car.pricePerDay} currency={car.currency} />

            {/* Terms & Conditions */}
            <TermsConditions />
          </div>
        </div>

        {/* Similar Cars */}
        {similarCars.length > 0 && <SimilarCars similarCars={similarCars} />}
      </div>
    </div>
  );
}
