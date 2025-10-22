import { LucideIcon } from 'lucide-react';
import ContactSection from '../car-details-sections/contact-section';
import InfoCardPricing from './info-card-pricing';
import InfoCardTitle from './info-card-title';
import InfoCardMetrics from './info-card-metrics';
import InfoCardSpecs from './info-card-specs';
import InfoCardHostInfo from './info-card-location';

interface InfoCardProps {
  id: string;
  name: string;
  pricePerDay: number;
  currency: string;
  location: string;
  viewCount: number;
  hostName: string;
  features: { Icon: LucideIcon; label: string; value: string | number }[];
}

export default function InfoCard({
  id,
  name,
  pricePerDay,
  currency,
  location,
  viewCount,
  hostName,
  features,
}: InfoCardProps) {
  return (
    <div className='bg-white border-2 border-gray-200 p-6'>
      {/* Title */}
      <InfoCardTitle name={name} />

      {/* Metrics */}
      <InfoCardMetrics id={id} viewCount={viewCount} favoriteCount={0} averageRating={3.4} reviewCount={10} />

      {/* Price */}
      <InfoCardPricing pricePerDay={pricePerDay} currency={currency} />

      {/* Quick Specs */}
      <InfoCardSpecs features={features} />

      {/* Location */}
      <InfoCardHostInfo hostName={hostName} location={location} />

      {/* Contact Buttons */}
      <ContactSection name={name} />
    </div>
  );
}
