import ListingCard from './listing-card';
import { TGetUserByIdResponse } from '@/features/users/users.types';
// import ListingsFilters from './listings-filters';
// import ListingsPagination from './listings-pagination';

interface ListingsListProps {
  listings: TGetUserByIdResponse['addedCars'];
}

export default function ListingsList({ listings }: ListingsListProps) {
  return (
    <>
      {/* <ListingsFilters /> */}

      <div className='space-y-6'>
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

      {/* <ListingsPagination /> */}
    </>
  );
}
