import { TGetCarByIdResponse } from '@/features/cars/cars.types';
import ListingCardStatusInfo from './listing-card-status-info';
import ListingCardActions from './listing-card-actions';
import ListingCardPricing from './listing-card-pricing';
import ListingCardMetrics from './listing-card-metrics';
import ListingCardDetails from './listing-card-details';
import ListingCardImage from './listing-card-image';
// import ListingCardDropdown from './listing-card-dropdown';

interface ListingCardProps {
  listing: TGetCarByIdResponse;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <div
      key={listing.id}
      className='bg-white border-2 border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all overflow-hidden'
    >
      <div className='flex flex-col lg:flex-row'>
        {/* Car Image */}
        <ListingCardImage
          status={listing.status}
          imageUrl={listing.primaryImageUrl}
          name={`${listing.brand} ${listing.model}`}
        />

        {/* Car Details */}
        <div className='flex-1 p-6'>
          <div className='flex items-start justify-between mb-4'>
            <ListingCardDetails
              brand={listing.brand}
              model={listing.model}
              year={listing.year}
              carType={listing.carType || 'Unknown Car Type'}
              fuelType={listing.fuelType || 'Unknown Fuel Type'}
              location='Unknown Location'
              transmission={listing.transmission || 'Unknown Transmission'}
            />

            {/* Actions Dropdown */}
            {/* <ListingCardDropdown /> */}
          </div>

          {/* Pricing */}
          <ListingCardPricing currency={listing.currency} pricePerDay={listing.pricePerDay} />

          {/* Performance Metrics */}
          <ListingCardMetrics
            averageRating={listing.averageRating}
            reviewCount={listing.reviewCount}
            favoriteCount={listing.favoritesCount}
            viewCount={listing.viewCount}
          />

          {/* Status Info */}
          <ListingCardStatusInfo status={listing.status || null} />

          {/* Action Buttons */}
          <ListingCardActions id={listing.id} />
        </div>
      </div>
    </div>
  );
}
