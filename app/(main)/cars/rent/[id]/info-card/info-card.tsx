import { LucideIcon } from 'lucide-react';
import ContactSection from '../car-details-sections/contact-section';
import InfoCardPricing from './info-card-pricing';
import InfoCardTitle from './info-card-title';
import InfoCardMetrics from './info-card-metrics';
import InfoCardSpecs from './info-card-specs';
import InfoCardHostInfo from './info-card-location';
import { TGetCarByIdResponse } from '@/features/cars/cars.types';

interface InfoCardProps {
  car: TGetCarByIdResponse;
  features: { Icon: LucideIcon; label: string; value: string | number }[];
  locationName: string;
  admin?: boolean;
}

export default function InfoCard({ car, features, locationName, admin }: InfoCardProps) {
  return (
    <div className='bg-white border-2 border-gray-200 p-6'>
      {/* Title */}
      <InfoCardTitle name={`${car.brand} ${car.model} ${car.year}`} />

      {/* Metrics */}
      <InfoCardMetrics
        id={car.id.toString()}
        viewCount={car.viewCount || 0}
        favoriteCount={car.favoritesCount || 0}
        averageRating={car.averageRating || 0}
        reviewCount={car.reviewCount || 0}
        admin={admin}
      />

      {/* Price */}
      <InfoCardPricing
        pricePerDay={car.pricePerDay}
        pricePerWeek={car.pricePerWeek || undefined}
        pricePerMonth={car.pricePerMonth || undefined}
        currency={car.currency}
      />

      {/* Quick Specs */}
      <InfoCardSpecs car={car} features={features} />

      {/* Location */}
      <InfoCardHostInfo hostName={car.createdByFullName || 'Unknown Host'} location={locationName} />

      {/* Contact Buttons */}
      {!admin && <ContactSection name={`${car.brand} ${car.model} ${car.year}`} />}
    </div>
  );
}
