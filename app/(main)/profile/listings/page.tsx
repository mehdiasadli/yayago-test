import { Button } from '@/components/ui/button';
import {
  Car,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  MoreVertical,
  Calendar,
  DollarSign,
  Star,
  MapPin,
  Settings,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  XCircle,
  Clock,
  BarChart3,
  Copy,
  Share2,
  Camera,
  Filter,
  Search,
} from 'lucide-react';
import Link from 'next/link';

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

export default function MyListingsPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>My Listings</h1>
          <p className='text-gray-600'>Manage and monitor all your car listings</p>
        </div>
        <Link href='/profile/cars/add'>
          <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
            <Plus className='w-4 h-4 mr-2' />
            Add New Car
          </Button>
        </Link>
      </div>

      {/* Summary Stats */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-primary/10 flex items-center justify-center'>
              <Car className='w-5 h-5 text-primary' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>5</div>
              <div className='text-xs text-gray-600'>Total Listings</div>
            </div>
          </div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-green-100 flex items-center justify-center'>
              <CheckCircle className='w-5 h-5 text-green-600' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>2</div>
              <div className='text-xs text-gray-600'>Active</div>
            </div>
          </div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-blue-100 flex items-center justify-center'>
              <Clock className='w-5 h-5 text-blue-600' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>1</div>
              <div className='text-xs text-gray-600'>Rented</div>
            </div>
          </div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-yellow-100 flex items-center justify-center'>
              <Eye className='w-5 h-5 text-yellow-600' strokeWidth={2} />
            </div>
            <div>
              <div className='text-2xl font-bold text-gray-900'>1,519</div>
              <div className='text-xs text-gray-600'>Total Views</div>
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
              placeholder='Search by car name, type, or location...'
              className='w-full pl-10 pr-4 py-2 border-2 border-gray-200 focus:border-primary focus:outline-none'
            />
          </div>

          {/* Status Filter */}
          <select className='px-4 py-2 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
            <option>All Status</option>
            <option>Active</option>
            <option>Rented</option>
            <option>Pending</option>
            <option>Inactive</option>
          </select>

          {/* Sort */}
          <select className='px-4 py-2 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
            <option>Sort by: Recent</option>
            <option>Sort by: Views</option>
            <option>Sort by: Earnings</option>
            <option>Sort by: Rating</option>
          </select>

          <Button variant='outline' className='hover:bg-gray-50'>
            <Filter className='w-4 h-4 mr-2' />
            More Filters
          </Button>
        </div>
      </div>

      {/* Listings Grid */}
      <div className='space-y-6'>
        {listings.map((listing) => (
          <div
            key={listing.id}
            className='bg-white border-2 border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all overflow-hidden'
          >
            <div className='flex flex-col lg:flex-row'>
              {/* Car Image */}
              <div className='lg:w-80 h-64 lg:h-auto bg-gray-200 flex items-center justify-center flex-shrink-0 relative group'>
                <Car className='w-16 h-16 text-gray-400' strokeWidth={2} />
                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3'>
                  <button className='px-4 py-2 bg-white text-gray-900 hover:bg-gray-100 transition-colors flex items-center gap-2'>
                    <Camera className='w-4 h-4' />
                    Update Photos
                  </button>
                </div>

                {/* Status Badge */}
                <div className='absolute top-4 left-4'>
                  {listing.status === 'active' && (
                    <div className='flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-white text-xs font-bold'>
                      <CheckCircle className='w-3.5 h-3.5' strokeWidth={2} />
                      ACTIVE
                    </div>
                  )}
                  {listing.status === 'rented' && (
                    <div className='flex items-center gap-1.5 px-3 py-1.5 bg-blue-500 text-white text-xs font-bold'>
                      <Clock className='w-3.5 h-3.5' strokeWidth={2} />
                      RENTED
                    </div>
                  )}
                  {listing.status === 'pending' && (
                    <div className='flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500 text-white text-xs font-bold'>
                      <AlertCircle className='w-3.5 h-3.5' strokeWidth={2} />
                      PENDING
                    </div>
                  )}
                  {listing.status === 'inactive' && (
                    <div className='flex items-center gap-1.5 px-3 py-1.5 bg-gray-500 text-white text-xs font-bold'>
                      <EyeOff className='w-3.5 h-3.5' strokeWidth={2} />
                      INACTIVE
                    </div>
                  )}
                </div>
              </div>

              {/* Car Details */}
              <div className='flex-1 p-6'>
                <div className='flex items-start justify-between mb-4'>
                  <div>
                    <h3 className='text-2xl font-bold text-gray-900 mb-1'>
                      {listing.name} {listing.year}
                    </h3>
                    <p className='text-gray-600'>
                      {listing.type} • {listing.transmission} • {listing.fuel}
                    </p>
                    <div className='flex items-center gap-2 mt-2 text-sm text-gray-600'>
                      <MapPin className='w-4 h-4' strokeWidth={2} />
                      {listing.location}
                    </div>
                  </div>

                  {/* Actions Dropdown */}
                  <div className='relative'>
                    <button className='p-2 hover:bg-gray-100 transition-colors'>
                      <MoreVertical className='w-5 h-5 text-gray-600' />
                    </button>
                  </div>
                </div>

                {/* Pricing */}
                <div className='grid grid-cols-3 gap-4 mb-4 pb-4 border-b-2 border-gray-100'>
                  <div>
                    <div className='text-xs text-gray-600 mb-1'>Daily Rate</div>
                    <div className='text-xl font-bold text-gray-900'>₼{listing.dailyRate}</div>
                  </div>
                  <div>
                    <div className='text-xs text-gray-600 mb-1'>Weekly Rate</div>
                    <div className='text-xl font-bold text-gray-900'>₼{listing.weeklyRate}</div>
                  </div>
                  <div>
                    <div className='text-xs text-gray-600 mb-1'>Monthly Rate</div>
                    <div className='text-xl font-bold text-gray-900'>₼{listing.monthlyRate}</div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className='grid grid-cols-2 md:grid-cols-5 gap-4 mb-4'>
                  <div>
                    <div className='flex items-center gap-1.5 mb-1'>
                      <Eye className='w-4 h-4 text-gray-500' strokeWidth={2} />
                      <span className='text-xs text-gray-600'>Views</span>
                    </div>
                    <div className='text-lg font-bold text-gray-900'>{listing.views}</div>
                  </div>

                  <div>
                    <div className='flex items-center gap-1.5 mb-1'>
                      <Calendar className='w-4 h-4 text-gray-500' strokeWidth={2} />
                      <span className='text-xs text-gray-600'>Rentals</span>
                    </div>
                    <div className='text-lg font-bold text-gray-900'>{listing.rentals}</div>
                  </div>

                  <div>
                    <div className='flex items-center gap-1.5 mb-1'>
                      <Star className='w-4 h-4 text-gray-500' strokeWidth={2} />
                      <span className='text-xs text-gray-600'>Rating</span>
                    </div>
                    <div className='text-lg font-bold text-gray-900'>
                      {listing.rating} ({listing.reviews})
                    </div>
                  </div>

                  <div>
                    <div className='flex items-center gap-1.5 mb-1'>
                      <DollarSign className='w-4 h-4 text-gray-500' strokeWidth={2} />
                      <span className='text-xs text-gray-600'>Earnings</span>
                    </div>
                    <div className='text-lg font-bold text-gray-900'>₼{listing.totalEarnings}</div>
                  </div>

                  <div>
                    <div className='flex items-center gap-1.5 mb-1'>
                      <TrendingUp className='w-4 h-4 text-gray-500' strokeWidth={2} />
                      <span className='text-xs text-gray-600'>Conversion</span>
                    </div>
                    <div className='text-lg font-bold text-gray-900'>
                      {((listing.inquiries / listing.views) * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>

                {/* Status Info */}
                {listing.status === 'rented' && (
                  <div className='bg-blue-50 border border-blue-200 p-3 mb-4'>
                    <div className='flex items-center gap-2 text-sm'>
                      <Clock className='w-4 h-4 text-blue-700' strokeWidth={2} />
                      <span className='text-blue-900 font-semibold'>{listing.availability}</span>
                    </div>
                  </div>
                )}

                {listing.status === 'pending' && (
                  <div className='bg-yellow-50 border border-yellow-200 p-3 mb-4'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2 text-sm'>
                        <AlertCircle className='w-4 h-4 text-yellow-700' strokeWidth={2} />
                        <span className='text-yellow-900 font-semibold'>Action Required: Update documents</span>
                      </div>
                      <Button size='sm' variant='outline' className='text-xs'>
                        Update Now
                      </Button>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className='flex flex-wrap gap-3'>
                  <Link href={`/profile/listings/${listing.id}/edit`}>
                    <Button size='sm' variant='outline' className='hover:bg-gray-50'>
                      <Edit className='w-4 h-4 mr-2' />
                      Edit
                    </Button>
                  </Link>

                  <Button size='sm' variant='outline' className='hover:bg-gray-50'>
                    <BarChart3 className='w-4 h-4 mr-2' />
                    Analytics
                  </Button>

                  <Link href={`/cars/rent/${listing.id}`} target='_blank'>
                    <Button size='sm' variant='outline' className='hover:bg-gray-50'>
                      <Eye className='w-4 h-4 mr-2' />
                      Preview
                    </Button>
                  </Link>

                  <Button size='sm' variant='outline' className='hover:bg-gray-50'>
                    <Share2 className='w-4 h-4 mr-2' />
                    Share
                  </Button>

                  <Button size='sm' variant='outline' className='hover:bg-gray-50'>
                    <Copy className='w-4 h-4 mr-2' />
                    Duplicate
                  </Button>

                  {listing.status === 'active' && (
                    <Button size='sm' variant='outline' className='hover:bg-gray-50'>
                      <EyeOff className='w-4 h-4 mr-2' />
                      Deactivate
                    </Button>
                  )}

                  {listing.status === 'inactive' && (
                    <Button size='sm' variant='outline' className='hover:bg-gray-50 text-green-700 border-green-300'>
                      <CheckCircle className='w-4 h-4 mr-2' />
                      Activate
                    </Button>
                  )}

                  <Button size='sm' variant='outline' className='hover:bg-red-50 text-red-700 border-red-300'>
                    <Trash2 className='w-4 h-4 mr-2' />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (commented out for now) */}
      {/* {listings.length === 0 && (
        <div className='bg-white border-2 border-gray-200 p-16 text-center'>
          <Car className='w-16 h-16 text-gray-300 mx-auto mb-4' strokeWidth={2} />
          <h3 className='text-xl font-bold text-gray-900 mb-2'>No listings yet</h3>
          <p className='text-gray-600 mb-6'>Start earning by adding your first car</p>
          <Link href='/profile/listings/new'>
            <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
              <Plus className='w-4 h-4 mr-2' />
              Add Your First Car
            </Button>
          </Link>
        </div>
      )} */}

      {/* Pagination */}
      <div className='flex items-center justify-between bg-white border-2 border-gray-200 p-6'>
        <div className='text-sm text-gray-600'>Showing 1 to 5 of 5 listings</div>
        <div className='flex gap-2'>
          <Button variant='outline' size='sm' disabled className='hover:bg-gray-50'>
            Previous
          </Button>
          <Button variant='outline' size='sm' className='bg-primary text-primary-foreground'>
            1
          </Button>
          <Button variant='outline' size='sm' disabled className='hover:bg-gray-50'>
            Next
          </Button>
        </div>
      </div>

      {/* Quick Tips */}
      <div className='bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 p-8'>
        <h3 className='text-xl font-bold text-gray-900 mb-4'>💡 Tips to Maximize Your Listings</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div className='flex items-start gap-3'>
            <div className='w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold text-sm'>
              1
            </div>
            <div>
              <div className='font-semibold text-gray-900 mb-1'>Update Photos Regularly</div>
              <div className='text-sm text-gray-700'>High-quality, recent photos increase views by 60%</div>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <div className='w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold text-sm'>
              2
            </div>
            <div>
              <div className='font-semibold text-gray-900 mb-1'>Competitive Pricing</div>
              <div className='text-sm text-gray-700'>Check similar cars in your area and adjust rates</div>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <div className='w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold text-sm'>
              3
            </div>
            <div>
              <div className='font-semibold text-gray-900 mb-1'>Detailed Descriptions</div>
              <div className='text-sm text-gray-700'>Include all features and recent maintenance</div>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <div className='w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold text-sm'>
              4
            </div>
            <div>
              <div className='font-semibold text-gray-900 mb-1'>Quick Response Time</div>
              <div className='text-sm text-gray-700'>Respond to inquiries within 2 hours for better conversion</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
