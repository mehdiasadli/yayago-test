import { TGetUserFavoritesResponse } from '@/features/favorites/favorites.types';
import CarCard from '@/components/car-card/car-card';
import FavoritesFilters from './favorites-filters';

export default function FavoritesGrid({ favorites }: { favorites: TGetUserFavoritesResponse }) {
  return (
    <>
      <FavoritesFilters />

      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'>
        {favorites.map((car) => (
          <CarCard key={car.id} car={car} favoritePage />
        ))}
      </div>
    </>
  );
}
