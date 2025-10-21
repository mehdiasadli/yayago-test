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

const listings = [
  {
    id: 1,
    name: 'Toyota Camry',
    year: 2022,
    type: 'Sedan',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    dailyRate: 70,
    weeklyRate: 420,
    monthlyRate: 1500,
    location: 'Baku, Nasimi',
    views: 342,
    inquiries: 28,
    rentals: 8,
    rating: 4.9,
    reviews: 6,
    status: 'active',
    availability: 'Available',
    lastRental: '2 days ago',
    totalEarnings: 560,
  },
  {
    id: 2,
    name: 'BMW X5',
    year: 2023,
    type: 'SUV',
    transmission: 'Automatic',
    fuel: 'Diesel',
    dailyRate: 120,
    weeklyRate: 750,
    monthlyRate: 2800,
    location: 'Baku, Yasamal',
    views: 456,
    inquiries: 42,
    rentals: 12,
    rating: 4.7,
    reviews: 9,
    status: 'rented',
    availability: 'Rented until Mar 20',
    lastRental: 'Currently rented',
    totalEarnings: 1440,
  },
  {
    id: 3,
    name: 'Mercedes-Benz E-Class',
    year: 2021,
    type: 'Sedan',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    dailyRate: 100,
    weeklyRate: 630,
    monthlyRate: 2400,
    location: 'Baku, Sabail',
    views: 234,
    inquiries: 19,
    rentals: 6,
    rating: 4.8,
    reviews: 5,
    status: 'pending',
    availability: 'Pending verification',
    lastRental: '5 days ago',
    totalEarnings: 600,
  },
  {
    id: 4,
    name: 'Hyundai Elantra',
    year: 2020,
    type: 'Sedan',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    dailyRate: 50,
    weeklyRate: 315,
    monthlyRate: 1200,
    location: 'Baku, Khatai',
    views: 189,
    inquiries: 15,
    rentals: 5,
    rating: 4.6,
    reviews: 4,
    status: 'active',
    availability: 'Available',
    lastRental: '1 week ago',
    totalEarnings: 250,
  },
  {
    id: 5,
    name: 'Audi A6',
    year: 2022,
    type: 'Sedan',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    dailyRate: 100,
    weeklyRate: 630,
    monthlyRate: 2400,
    location: 'Baku, Nizami',
    views: 298,
    inquiries: 24,
    rentals: 7,
    rating: 4.9,
    reviews: 7,
    status: 'inactive',
    availability: 'Inactive',
    lastRental: '2 weeks ago',
    totalEarnings: 700,
  },
];

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
      {listings.length === 0 && <EmptyState />}

      {/* Quick Tips */}
      <QuickTips />
    </div>
  );
}
