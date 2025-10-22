'use client';

import { Users, Gauge, Fuel, Package, DoorOpen } from 'lucide-react';
import { TGetCarByIdResponse } from '@/features/cars/cars.types';
import FixedContactButton from './car-details-sections/fixed-contact-button';
import { useFixedContactButtonInView } from './car-details-sections/use-fixed-contact-button-in-view';
import ImageSection from './car-details-sections/image-section';
import InfoCard from './info-card/info-card';

interface CarDetailsLayoutContentProps {
  car: TGetCarByIdResponse;
  locationName: string;
  children: React.ReactNode;
}

export default function CarDetailsLayoutContent({ car, locationName, children }: CarDetailsLayoutContentProps) {
  const features = [
    { Icon: Users, label: 'Seats', value: car.seatCount ?? 0 },
    { Icon: DoorOpen, label: 'Doors', value: car.doorCount ?? 0 },
    { Icon: Gauge, label: 'Transmission', value: car.transmission ?? '' },
    { Icon: Fuel, label: 'Fuel Type', value: car.fuelType ?? '' },
    { Icon: Package, label: 'Body Type', value: car.carType ?? '' },
  ];

  const { isVisible: isFixedContactButtonVisible, ref: infoCardRef } = useFixedContactButtonInView({
    rootMargin: '-80px 0px 0px 0px',
    threshold: 0.1,
  });

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
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
          <div ref={infoCardRef}>
            <InfoCard
              id={car.id.toString()}
              name={`${car.brand} ${car.model} ${car.year}`}
              pricePerDay={car.pricePerDay}
              currency={car.currency}
              location={locationName}
              viewCount={car.viewCount || 0}
              features={features}
            />
          </div>
        </div>
      </div>

      {children}

      <FixedContactButton
        name={`${car.brand} ${car.model} ${car.year}`}
        pricePerDay={car.pricePerDay}
        currency={car.currency}
        visible={isFixedContactButtonVisible}
        primaryImageUrl={car.primaryImageUrl}
      />
    </div>
  );
}
