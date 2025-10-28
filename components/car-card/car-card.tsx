'use client';

import { Card, CardHeader } from '../ui/card';
import ImagesCarousel from './images-carousel';
import { TGetCarByIdResponse } from '@/features/cars/cars.types';
import { getFeaturedImages } from '@/lib/utils';
import PricingSection from './pricing-section';
import HostSection from './host-section';
import Specs from './specs';
import Stats from './stats';
import FooterActions from './footer-actions';
import Title from './title';

interface CarCardProps {
  car: TGetCarByIdResponse & { favoriteCreatedAt?: Date };
}

export default function CarCard({ car }: CarCardProps) {
  const featuredImages = getFeaturedImages(car.images);

  return (
    <Card className='p-0 overflow-hidden flex flex-col h-[520px] group/card transition-all duration-500 bg-white/80 backdrop-blur-xl border border-white/50 hover:border-white/90 hover:shadow-lg'>
      <ImagesCarousel
        car={{
          id: car.id,
          featured: car.featured || false,
          images: featuredImages,
          brand: car.brand,
          model: car.model,
          noDeposit: typeof car.deposit === 'number' ? car.deposit === 0 : false,
        }}
      />

      {/* Card Content */}
      <div className='flex-1 flex flex-col'>
        <CardHeader className='flex-1 pb-4 px-5'>
          {/* Title */}
          <Title
            carId={car.id.toString()}
            brand={car.brand}
            model={car.model}
            year={car.year}
            carType={car.carType}
            transmission={car.transmission}
          />

          {/* Stats */}
          <Stats
            viewCount={car.viewCount}
            favoriteCount={car.favoritesCount || 0}
            rating={car.averageRating || 0}
            reviewCount={car.reviewCount || 0}
          />

          {/* Specs */}
          <Specs
            seatCount={car.seatCount}
            doorCount={car.doorCount}
            fuelType={car.fuelType}
            engineVolume={car.engineVolume}
          />

          <HostSection host={car.createdByFullName || 'Unknown Host'} />

          {/* Price & Mileage */}
          <PricingSection
            pricePerDay={car.pricePerDay}
            maxMileagePerDay={car.maxMileagePerDay}
            currency={car.currency}
            discount={car.discountPercentage}
          />
        </CardHeader>

        <FooterActions carId={car.id.toString()} isFavorite={car.isFavorite || false} />
      </div>
    </Card>
  );
}
