import { Button } from '@/components/ui/button';
import {
  Heart,
  Car,
  MapPin,
  Star,
  DollarSign,
  Calendar,
  Eye,
  MessageCircle,
  Phone,
  Share2,
  Trash2,
  Filter,
  Search,
  TrendingUp,
  Clock,
  Fuel,
  Settings,
  Users,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Favorites',
  description: 'View and manage your saved car listings',
};

const favorites = [
  {
    id: 1,
    name: 'Tesla Model 3',
    year: 2023,
    type: 'Sedan',
    transmission: 'Automatic',
    fuel: 'Electric',
    seats: 5,
    dailyRate: 150,
    weeklyRate: 900,
    location: 'Baku, Yasamal',
    owner: 'Elvin Aliyev',
    rating: 4.9,
    reviews: 12,
    views: 1240,
    lastUpdated: '2 days ago',
    savedDate: '3 days ago',
    available: true,
    featured: true,
  },
  {
    id: 2,
    name: 'BMW 5 Series',
    year: 2022,
    type: 'Sedan',
    transmission: 'Automatic',
    fuel: 'Diesel',
    seats: 5,
    dailyRate: 110,
    weeklyRate: 700,
    location: 'Baku, Nasimi',
    owner: 'Rashad Mammadov',
    rating: 4.8,
    reviews: 18,
    views: 890,
    lastUpdated: '1 day ago',
    savedDate: '5 days ago',
    available: true,
    featured: false,
  },
  {
    id: 3,
    name: 'Mercedes-Benz GLC',
    year: 2023,
    type: 'SUV',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    seats: 7,
    dailyRate: 130,
    weeklyRate: 820,
    location: 'Baku, Sabail',
    owner: 'Nigar Hasanova',
    rating: 4.9,
    reviews: 15,
    views: 1120,
    lastUpdated: '3 hours ago',
    savedDate: '1 week ago',
    available: true,
    featured: true,
  },
  {
    id: 4,
    name: 'Audi A8',
    year: 2021,
    type: 'Sedan',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    seats: 5,
    dailyRate: 120,
    weeklyRate: 750,
    location: 'Baku, Khatai',
    owner: 'Tural Huseynov',
    rating: 4.7,
    reviews: 9,
    views: 650,
    lastUpdated: '1 week ago',
    savedDate: '2 weeks ago',
    available: false,
    featured: false,
  },
  {
    id: 5,
    name: 'Range Rover Sport',
    year: 2022,
    type: 'SUV',
    transmission: 'Automatic',
    fuel: 'Diesel',
    seats: 7,
    dailyRate: 180,
    weeklyRate: 1100,
    location: 'Baku, Nizami',
    owner: 'Kamran Quliyev',
    rating: 5.0,
    reviews: 8,
    views: 980,
    lastUpdated: '5 hours ago',
    savedDate: '3 days ago',
    available: true,
    featured: true,
  },
  {
    id: 6,
    name: 'Lexus ES 350',
    year: 2021,
    type: 'Sedan',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    seats: 5,
    dailyRate: 95,
    weeklyRate: 600,
    location: 'Baku, Sabunchu',
    owner: 'Aysel Mammadova',
    rating: 4.8,
    reviews: 14,
    views: 720,
    lastUpdated: '2 days ago',
    savedDate: '1 week ago',
    available: true,
    featured: false,
  },
];

export default function FavoritesPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>My Favorites</h1>
          <p className='text-gray-600'>Cars you've saved for later</p>
        </div>
        <Link href='/cars/rent'>
          <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
            <Search className='w-4 h-4 mr-2' />
            Browse More Cars
          </Button>
        </Link>
      </div>

      {/* Summary Stats */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-red-100 flex items-center justify-center'>
              <Heart className='w-5 h-5 text-red-600 fill-red-600' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>{favorites.length}</div>
              <div className='text-xs text-gray-600'>Saved Cars</div>
            </div>
          </div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-green-100 flex items-center justify-center'>
              <Calendar className='w-5 h-5 text-green-600' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>{favorites.filter((f) => f.available).length}</div>
              <div className='text-xs text-gray-600'>Available Now</div>
            </div>
          </div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-yellow-100 flex items-center justify-center'>
              <Star className='w-5 h-5 text-yellow-600' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>{favorites.filter((f) => f.featured).length}</div>
              <div className='text-xs text-gray-600'>Featured</div>
            </div>
          </div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-primary/10 flex items-center justify-center'>
              <DollarSign className='w-5 h-5 text-primary' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>₼{Math.min(...favorites.map((f) => f.dailyRate))}</div>
              <div className='text-xs text-gray-600'>Starting From</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className='bg-white border-2 border-gray-200 p-6'>
        <div className='flex flex-col md:flex-row gap-4'>
          {/* Search */}
          <div className='flex-1 relative'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' strokeWidth={2} />
            <input
              type='text'
              placeholder='Search your favorites...'
              className='w-full pl-10 pr-4 py-2 border-2 border-gray-200 focus:border-primary focus:outline-none'
            />
          </div>

          {/* Availability Filter */}
          <select className='px-4 py-2 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
            <option>All Cars</option>
            <option>Available Only</option>
            <option>Not Available</option>
          </select>

          {/* Sort */}
          <select className='px-4 py-2 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
            <option>Sort by: Recent</option>
            <option>Sort by: Price (Low to High)</option>
            <option>Sort by: Price (High to Low)</option>
            <option>Sort by: Rating</option>
          </select>

          <Button variant='outline' className='hover:bg-gray-50'>
            <Filter className='w-4 h-4 mr-2' />
            Filters
          </Button>
        </div>
      </div>

      {/* Favorites Grid */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {favorites.map((car) => (
          <div
            key={car.id}
            className='bg-white border-2 border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all overflow-hidden group'
          >
            {/* Car Image */}
            <div className='relative h-48 bg-gray-200 flex items-center justify-center overflow-hidden'>
              <Car className='w-16 h-16 text-gray-400' strokeWidth={2} />

              {/* Overlay on hover */}
              <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2'>
                <Link href={`/cars/rent/${car.id}`}>
                  <button className='px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2'>
                    <Eye className='w-4 h-4' />
                    View
                  </button>
                </Link>
                <button className='px-4 py-2 bg-white text-gray-900 hover:bg-gray-100 transition-colors flex items-center gap-2'>
                  <Heart className='w-4 h-4 fill-red-600 text-red-600' />
                </button>
              </div>

              {/* Badges */}
              <div className='absolute top-3 left-3 flex flex-col gap-2'>
                {car.featured && <div className='px-2 py-1 bg-yellow-500 text-white text-xs font-bold'>FEATURED</div>}
                {!car.available && (
                  <div className='px-2 py-1 bg-red-500 text-white text-xs font-bold'>NOT AVAILABLE</div>
                )}
              </div>

              {/* Remove Button */}
              <button className='absolute top-3 right-3 w-8 h-8 bg-white hover:bg-red-500 text-gray-900 hover:text-white transition-all flex items-center justify-center'>
                <Trash2 className='w-4 h-4' strokeWidth={2} />
              </button>

              {/* Saved Date */}
              <div className='absolute bottom-3 left-3 px-2 py-1 bg-black/70 text-white text-xs'>
                Saved {car.savedDate}
              </div>
            </div>

            {/* Car Details */}
            <div className='p-4'>
              <div className='flex items-start justify-between mb-2'>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-1'>
                    {car.name} {car.year}
                  </h3>
                  <p className='text-sm text-gray-600'>
                    {car.type} • {car.transmission}
                  </p>
                </div>
              </div>

              {/* Rating and Reviews */}
              <div className='flex items-center gap-2 mb-3'>
                <div className='flex items-center gap-1'>
                  <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' strokeWidth={2} />
                  <span className='text-sm font-bold text-gray-900'>{car.rating}</span>
                </div>
                <span className='text-sm text-gray-600'>({car.reviews} reviews)</span>
              </div>

              {/* Specifications */}
              <div className='grid grid-cols-2 gap-2 mb-3 text-xs'>
                <div className='flex items-center gap-1.5 text-gray-600'>
                  <Fuel className='w-3.5 h-3.5' strokeWidth={2} />
                  {car.fuel}
                </div>
                <div className='flex items-center gap-1.5 text-gray-600'>
                  <Users className='w-3.5 h-3.5' strokeWidth={2} />
                  {car.seats} Seats
                </div>
              </div>

              {/* Location */}
              <div className='flex items-center gap-1.5 text-sm text-gray-600 mb-3'>
                <MapPin className='w-4 h-4' strokeWidth={2} />
                {car.location}
              </div>

              {/* Owner */}
              <div className='flex items-center gap-2 mb-3 pb-3 border-b-2 border-gray-100'>
                <div className='w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold text-xs'>
                  {car.owner
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <div className='text-sm font-semibold text-gray-900'>{car.owner}</div>
                  <div className='text-xs text-gray-600'>{car.views} views</div>
                </div>
              </div>

              {/* Pricing */}
              <div className='mb-4'>
                <div className='flex items-baseline gap-2 mb-1'>
                  <span className='text-2xl font-bold text-gray-900'>₼{car.dailyRate}</span>
                  <span className='text-sm text-gray-600'>/day</span>
                </div>
                <div className='text-sm text-gray-600'>₼{car.weeklyRate} /week</div>
              </div>

              {/* Action Buttons */}
              <div className='flex gap-2'>
                <Link href={`/cars/rent/${car.id}`} className='flex-1'>
                  <Button className='w-full bg-primary hover:bg-primary/90 text-primary-foreground' size='sm'>
                    <MessageCircle className='w-4 h-4 mr-2' />
                    Contact
                  </Button>
                </Link>
                <Button variant='outline' size='sm' className='hover:bg-gray-50'>
                  <Share2 className='w-4 h-4' />
                </Button>
              </div>

              {/* Last Updated */}
              <div className='flex items-center gap-1.5 text-xs text-gray-500 mt-3'>
                <Clock className='w-3.5 h-3.5' strokeWidth={2} />
                Updated {car.lastUpdated}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (commented out) */}
      {/* {favorites.length === 0 && (
        <div className='bg-white border-2 border-gray-200 p-16 text-center'>
          <Heart className='w-16 h-16 text-gray-300 mx-auto mb-4' strokeWidth={2} />
          <h3 className='text-xl font-bold text-gray-900 mb-2'>No favorites yet</h3>
          <p className='text-gray-600 mb-6'>Start saving cars you're interested in</p>
          <Link href='/cars/rent'>
            <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
              <Search className='w-4 h-4 mr-2' />
              Browse Available Cars
            </Button>
          </Link>
        </div>
      )} */}

      {/* Tips Section */}
      <div className='bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 p-8'>
        <h3 className='text-xl font-bold text-gray-900 mb-4'>💡 Tips for Using Favorites</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div className='flex items-start gap-3'>
            <div className='w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold text-sm'>
              1
            </div>
            <div>
              <div className='font-semibold text-gray-900 mb-1'>Save for Comparison</div>
              <div className='text-sm text-gray-700'>
                Save multiple cars to compare prices, features, and ratings side by side
              </div>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <div className='w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold text-sm'>
              2
            </div>
            <div>
              <div className='font-semibold text-gray-900 mb-1'>Act Fast on Featured Cars</div>
              <div className='text-sm text-gray-700'>
                Featured cars are highly sought after - contact owners quickly
              </div>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <div className='w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold text-sm'>
              3
            </div>
            <div>
              <div className='font-semibold text-gray-900 mb-1'>Check Availability</div>
              <div className='text-sm text-gray-700'>
                Availability changes frequently - verify before contacting owners
              </div>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <div className='w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold text-sm'>
              4
            </div>
            <div>
              <div className='font-semibold text-gray-900 mb-1'>Read Recent Reviews</div>
              <div className='text-sm text-gray-700'>
                Check the latest reviews to ensure consistent quality and service
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className='grid md:grid-cols-3 gap-6'>
        <Link
          href='/cars/rent'
          className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 hover:shadow-lg transition-all'
        >
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-primary/10 flex items-center justify-center'>
              <Search className='w-6 h-6 text-primary' strokeWidth={2} />
            </div>
            <div>
              <div className='font-bold text-gray-900 mb-1'>Browse All Cars</div>
              <div className='text-sm text-gray-600'>Find more cars to save</div>
            </div>
          </div>
        </Link>

        <Link
          href='/profile'
          className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 hover:shadow-lg transition-all'
        >
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-primary/10 flex items-center justify-center'>
              <Calendar className='w-6 h-6 text-primary' strokeWidth={2} />
            </div>
            <div>
              <div className='font-bold text-gray-900 mb-1'>My Bookings</div>
              <div className='text-sm text-gray-600'>View rental history</div>
            </div>
          </div>
        </Link>

        <Link
          href='/support/help'
          className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 hover:shadow-lg transition-all'
        >
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-primary/10 flex items-center justify-center'>
              <MessageCircle className='w-6 h-6 text-primary' strokeWidth={2} />
            </div>
            <div>
              <div className='font-bold text-gray-900 mb-1'>Need Help?</div>
              <div className='text-sm text-gray-600'>Contact support</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
