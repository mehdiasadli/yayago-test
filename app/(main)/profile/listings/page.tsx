import ListingsHeader from './listings-sections/listings-header';
import ListingsStats from './listings-sections/listings-stats';
import ListingsFilters from './listings-sections/listings-filters';
import ListingsList from './listings-sections/listings-list';
import ListingsPagination from './listings-sections/listings-pagination';
import QuickTips from './listings-sections/quick-tips';
import EmptyState from './listings-sections/empty-state';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { UsersApi } from '@/features/users/users.api';

export const metadata = {
  title: 'My Listings',
  description: 'Manage all your car listings on YayaGo',
};

export default async function MyListingsPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/auth');
  }

  // fetch user data
  const data = await UsersApi.getUserById({
    id: Number(session.user.id),
  });

  if (!data.success) {
    redirect('/auth');
  }

  const user = data.data;

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <ListingsHeader />

      {/* Summary Stats */}
      <ListingsStats addedCars={user.addedCars} />

      {/* Listings Grid */}
      <ListingsList listings={user.addedCars} />

      {/* Empty State (commented out for now) */}
      {user.addedCars.length === 0 && <EmptyState />}

      {/* Quick Tips */}
      <QuickTips />
    </div>
  );
}
