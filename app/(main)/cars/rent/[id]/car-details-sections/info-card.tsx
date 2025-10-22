import { Eye, Heart, LucideIcon, MapPin, MessageCircle, Phone } from 'lucide-react';
import ContactSection from './contact-section';
import InfoCardPricing from './info-card-pricing';
import InfoCardTitle from './info-card-title';

interface InfoCardProps {
  name: string;
  pricePerDay: number;
  currency: string;
  location: string;
  viewCount: number;
  features: { Icon: LucideIcon; label: string; value: string | number }[];
}

export default function InfoCard({ name, pricePerDay, currency, location, viewCount, features }: InfoCardProps) {
  return (
    <div className='bg-white border-2 border-gray-200 p-6'>
      {/* Title */}
      <InfoCardTitle name={name} />

      {/* Stats */}
      <div className='flex items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b-2 border-gray-200'>
        <div className='flex items-center gap-1'>
          <Eye className='w-4 h-4' strokeWidth={2} />
          <span>{viewCount} views</span>
        </div>
        <div className='flex items-center gap-1'>
          <Heart className='w-4 h-4' strokeWidth={2} />
          <span>{0} favorites</span>
        </div>
      </div>

      {/* Price */}
      <InfoCardPricing pricePerDay={pricePerDay} currency={currency} />

      {/* Quick Specs */}
      <div className='grid grid-cols-2 gap-3 mb-6'>
        {features.map((feature, index) => (
          <div key={index} className='flex items-center gap-2'>
            <feature.Icon className='w-4 h-4 text-primary flex-shrink-0' strokeWidth={2} />
            <span className='text-sm text-gray-700 capitalize'>
              {feature.value} {feature.label}
            </span>
          </div>
        ))}
      </div>

      {/* Location */}
      {location && (
        <div className='flex items-center gap-2 mb-6 p-3 bg-gray-50 border border-gray-200'>
          <MapPin className='w-5 h-5 text-primary flex-shrink-0' strokeWidth={2} />
          <div>
            <div className='text-sm font-semibold text-gray-900'>{location}</div>
            <div className='text-xs text-gray-600'>Dubai, UAE</div>
          </div>
        </div>
      )}

      {/* Contact Buttons */}
      <ContactSection name={name} />
    </div>
  );
}
