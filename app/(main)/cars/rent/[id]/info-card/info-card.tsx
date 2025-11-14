'use client';

import { LucideIcon } from 'lucide-react';
import ContactSection from '../car-details-sections/contact-section';
import InfoCardPricing from './info-card-pricing';
import InfoCardTitle from './info-card-title';
import InfoCardMetrics from './info-card-metrics';
import InfoCardHostInfo from './info-card-location';
import { TGetCarByIdResponse } from '@/features/cars/cars.types';
import { Card, CardContent } from '@/components/ui/card';
import { mapEnumLabel } from '@/lib/utils';

interface InfoCardProps {
  car: TGetCarByIdResponse;
  features: { Icon: LucideIcon; label: string; value: string | number }[];
  locationName: string;
  onBookNow?: () => void;
  onOpenReviews?: () => void;
}

export default function InfoCard({ car, features, locationName, onBookNow, onOpenReviews }: InfoCardProps) {
  const title = `${car.brand} ${car.model}`;
  const subtitleParts = [car.year?.toString(), mapEnumLabel(car.carType, { defaultValue: undefined })].filter(
    Boolean
  ) as string[];
  const subtitle = subtitleParts.join(' • ');

  const titleTags = [
    mapEnumLabel(car.transmission, { defaultValue: undefined }),
    mapEnumLabel(car.fuelType, { defaultValue: undefined }),
  ].filter(Boolean) as string[];

  return (
    <Card className='rounded-2xl border-slate-200/80 shadow-md bg-white/90 backdrop-blur-sm'>
      <CardContent className='space-y-6'>
        {/* Title */}
        <InfoCardTitle name={title} subtitle={subtitle} tags={titleTags} />

        {/* Metrics */}
        <InfoCardMetrics
          id={car.id.toString()}
          viewCount={car.viewCount || 0}
          favoriteCount={car.favoritesCount || 0}
          averageRating={car.averageRating || 0}
          reviewCount={car.reviewCount || 0}
          onOpenReviews={onOpenReviews}
        />

        {/* Price */}
        <InfoCardPricing
          pricePerDay={car.pricePerDay}
          pricePerWeek={car.pricePerWeek || undefined}
          pricePerMonth={car.pricePerMonth || undefined}
          currency={car.currency}
        />

        {/* Location */}
        <InfoCardHostInfo hostName={car.createdByFullName || 'Unknown Host'} location={locationName} />

        {/* Contact Buttons */}
        {onBookNow && <ContactSection name={`${car.brand} ${car.model} ${car.year}`} onBookNow={onBookNow} />}
      </CardContent>
    </Card>
  );
}
