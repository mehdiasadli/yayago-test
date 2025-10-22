'use client';

import { Users, Gauge, Fuel, Package, DoorOpen } from 'lucide-react';
import { TGetCarByIdResponse } from '@/features/cars/cars.types';
import ImageSection from './image-section';
import InfoCard from '../info-card/info-card';
import TermsConditions from './terms-conditions';
import Pricing from './pricing';
import Requirements from './requirements';
import WhatsIncluded from './whats-included';
import Overview from './overview';
import SimilarCars from './similar-cars';
import FixedContactButton from './fixed-contact-button';
import { useFixedContactButtonInView } from './use-fixed-contact-button-in-view';

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

  const { isVisible: isFixedContactButtonVisible, ref: infoCardRef } = useFixedContactButtonInView({
    rootMargin: '-80px 0px 0px 0px',
    threshold: 0.1,
  });

  return (
    <div className='lg:col-span-2 space-y-6'>
      {/* Overview */}
      <Overview name={`${car.brand} ${car.model} ${car.year}`} />

      <div className='flex flex-col lg:flex-row items-start lg:items-start gap-4'>
        {/* What's Included */}
        <div className='flex-1 w-full'>
          <WhatsIncluded />
        </div>

        {/* Requirements */}
        <div className='flex-1 w-full'>
          <Requirements />
        </div>
      </div>

      {/* Pricing Breakdown */}
      <Pricing pricePerDay={car.pricePerDay} currency={car.currency} />

      {/* Terms & Conditions */}
      <TermsConditions />
    </div>
  );
}
