'use client';

import { useState } from 'react';
import { Users, Gauge, Fuel, Package, DoorOpen } from 'lucide-react';
import { TGetCarByIdResponse } from '@/features/cars/cars.types';
import FixedContactButton from './car-details-sections/fixed-contact-button';
import { useFixedContactButtonInView } from './car-details-sections/use-fixed-contact-button-in-view';
import ImageSection from './car-details-sections/image-section';
import InfoCard from './info-card/info-card';
import BookingDialog from '@/components/booking-dialog/booking-dialog';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface CarDetailsLayoutContentProps {
  car: TGetCarByIdResponse;
  locationName: string;
  children: React.ReactNode;
}

export default function CarDetailsLayoutContent({ car, locationName, children }: CarDetailsLayoutContentProps) {
  const { status } = useSession();
  const router = useRouter();

  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
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

  const onBookClick = () => {
    if (status === 'authenticated') {
      setBookingDialogOpen(true);
    } else {
      router.push(`/auth?callback_url=${encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL + '/cars/rent/' + car.id)}`);
    }
  };

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
            <InfoCard car={car} locationName={locationName} features={features} onBookNow={onBookClick} />
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
        onBookNow={onBookClick}
      />
      <BookingDialog car={car} open={bookingDialogOpen} onOpenChange={setBookingDialogOpen} />
    </div>
  );
}
