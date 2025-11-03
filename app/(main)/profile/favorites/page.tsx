import FavoritesHeader from './favorites-sections/favorites-header';
import FavoritesStats from './favorites-sections/favorites-stats';
import EmptyState from './favorites-sections/empty-state';
import FavoritesTips from './favorites-sections/favorites-tips';
import FavoritesQuickActions from './favorites-sections/favorites-quick-actions';
import FavoritesGrid from './favorites-sections/favorites-grid';
import { FavoritesApi } from '@/features/favorites/favorites.api';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Favorites',
  description: 'View and manage your saved car listings',
};

export default async function FavoritesPage() {
  const favoritesData = await FavoritesApi.getUserFavorites();

  if (!favoritesData.success) {
    redirect('/profile');
  }

  const favorites = favoritesData.data;
  const availableCarsCount = favorites.filter((f) => f.available).length;
  const featuredCarsCount = favorites.filter((f) => f.featured).length;
  const startingFromPrice = favorites.length > 0 ? Math.min(...favorites.map((f) => f.pricePerDay)) : 0;

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <FavoritesHeader />

      {/* Summary Stats */}
      <FavoritesStats
        favoriteCount={favorites.length}
        availableCarsCount={availableCarsCount}
        featuredCarsCount={featuredCarsCount}
        startingFromPrice={startingFromPrice}
      />

      {/* Favorites Grid */}
      {favorites.length > 0 ? <FavoritesGrid favorites={favorites} /> : <EmptyState />}

      {/* Tips Section */}
      <FavoritesTips />

      {/* Quick Actions */}
      <FavoritesQuickActions />
    </div>
  );
}
