import { Button } from '@/components/ui/button';
import {
  Star,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  User,
  Car,
  TrendingUp,
  Flag,
} from 'lucide-react';

export const metadata = {
  title: 'Reviews Management - Admin',
  description: 'Manage platform reviews and ratings',
};

// Mock reviews data
const reviews = [
  {
    id: 'REV-2025-001',
    booking: 'BK-2025-001',
    vehicle: 'BMW X5',
    vehicleOwner: 'John Doe',
    reviewer: 'Sarah Johnson',
    reviewerEmail: 'sarah.j@example.com',
    rating: 5,
    title: 'Excellent car and service!',
    comment: 'The BMW X5 was in perfect condition and John was very professional. Highly recommend!',
    date: 'Feb 10, 2025',
    time: '3:45 PM',
    status: 'published',
    helpful: 12,
    notHelpful: 1,
    flagged: false,
  },
  {
    id: 'REV-2025-002',
    booking: 'BK-2025-002',
    vehicle: 'Mercedes-Benz C-Class',
    vehicleOwner: 'Jane Smith',
    reviewer: 'Michael Chen',
    reviewerEmail: 'michael.c@example.com',
    rating: 4,
    title: 'Great experience overall',
    comment: 'Car was clean and drove smoothly. Only minor issue was pickup timing, but otherwise perfect.',
    date: 'Feb 12, 2025',
    time: '5:20 PM',
    status: 'published',
    helpful: 8,
    notHelpful: 0,
    flagged: false,
  },
  {
    id: 'REV-2025-003',
    booking: 'BK-2024-998',
    vehicle: 'Toyota Camry',
    vehicleOwner: 'Bob Wilson',
    reviewer: 'Emma Wilson',
    reviewerEmail: 'emma.w@example.com',
    rating: 5,
    title: 'Perfect for city driving',
    comment: 'Comfortable, fuel efficient, and Bob was very responsive to all my questions.',
    date: 'Feb 13, 2025',
    time: '11:30 AM',
    status: 'published',
    helpful: 15,
    notHelpful: 0,
    flagged: false,
  },
  {
    id: 'REV-2025-004',
    booking: 'BK-2024-995',
    vehicle: 'Tesla Model 3',
    vehicleOwner: 'David Miller',
    reviewer: 'Robert Lee',
    reviewerEmail: 'robert.l@example.com',
    rating: 2,
    title: 'Disappointing experience',
    comment: 'Car had charging issues and owner was not responsive. Expected better given the price.',
    date: 'Feb 14, 2025',
    time: '2:15 PM',
    status: 'pending',
    helpful: 5,
    notHelpful: 3,
    flagged: true,
  },
  {
    id: 'REV-2025-005',
    booking: 'BK-2024-990',
    vehicle: 'Audi A6',
    vehicleOwner: 'Alice Brown',
    reviewer: 'Lisa Anderson',
    reviewerEmail: 'lisa.a@example.com',
    rating: 5,
    title: 'Luxury and comfort!',
    comment: 'Amazing car for a weekend trip. Alice was very accommodating and the car was immaculate.',
    date: 'Feb 15, 2025',
    time: '9:00 AM',
    status: 'published',
    helpful: 20,
    notHelpful: 1,
    flagged: false,
  },
  {
    id: 'REV-2025-006',
    booking: 'BK-2024-985',
    vehicle: 'Honda Accord',
    vehicleOwner: 'Charlie Davis',
    reviewer: 'Sophie Taylor',
    reviewerEmail: 'sophie.t@example.com',
    rating: 1,
    title: 'Terrible condition',
    comment: 'Car smelled of smoke and had scratches. Would not rent from this owner again.',
    date: 'Feb 16, 2025',
    time: '4:30 PM',
    status: 'hidden',
    helpful: 8,
    notHelpful: 2,
    flagged: true,
  },
  {
    id: 'REV-2025-007',
    booking: 'BK-2024-980',
    vehicle: 'Hyundai Elantra',
    vehicleOwner: 'Emma Davis',
    reviewer: 'Jack Wilson',
    reviewerEmail: 'jack.w@example.com',
    rating: 4,
    title: 'Good value for money',
    comment: 'Reliable car, nothing fancy but gets the job done. Owner was friendly.',
    date: 'Feb 17, 2025',
    time: '1:00 PM',
    status: 'published',
    helpful: 6,
    notHelpful: 0,
    flagged: false,
  },
];

const statusColors = {
  published: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  hidden: 'bg-red-100 text-red-700',
};

const statusIcons = {
  published: CheckCircle,
  pending: AlertCircle,
  hidden: XCircle,
};

const ratingColors = {
  5: 'text-green-600',
  4: 'text-blue-600',
  3: 'text-yellow-600',
  2: 'text-orange-600',
  1: 'text-red-600',
};

export default function AdminReviewsPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div className='flex items-start justify-between flex-wrap gap-4'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Reviews Management</h1>
          <p className='text-gray-600'>Monitor and moderate platform reviews</p>
        </div>

        <div className='flex gap-3'>
          <Button variant='outline' className='hover:bg-gray-50'>
            <Download className='w-4 h-4 mr-2' />
            Export
          </Button>
          <Button variant='outline' className='hover:bg-gray-50'>
            <Filter className='w-4 h-4 mr-2' />
            Advanced Filters
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className='grid md:grid-cols-2 xl:grid-cols-5 gap-6'>
        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-4 mb-3'>
            <div className='w-12 h-12 bg-blue-100 flex items-center justify-center'>
              <MessageSquare className='w-6 h-6 text-blue-600' strokeWidth={2} />
            </div>
            <div className='text-3xl font-bold text-gray-900'>2,847</div>
          </div>
          <div className='text-sm text-gray-600'>Total Reviews</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-4 mb-3'>
            <div className='w-12 h-12 bg-yellow-100 flex items-center justify-center'>
              <Star className='w-6 h-6 text-yellow-600 fill-yellow-600' strokeWidth={2} />
            </div>
            <div className='text-3xl font-bold text-gray-900'>4.8</div>
          </div>
          <div className='text-sm text-gray-600'>Average Rating</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-4 mb-3'>
            <div className='w-12 h-12 bg-green-100 flex items-center justify-center'>
              <CheckCircle className='w-6 h-6 text-green-600' strokeWidth={2} />
            </div>
            <div className='text-3xl font-bold text-gray-900'>2,698</div>
          </div>
          <div className='text-sm text-gray-600'>Published</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-4 mb-3'>
            <div className='w-12 h-12 bg-yellow-100 flex items-center justify-center'>
              <AlertCircle className='w-6 h-6 text-yellow-600' strokeWidth={2} />
            </div>
            <div className='text-3xl font-bold text-gray-900'>124</div>
          </div>
          <div className='text-sm text-gray-600'>Pending Review</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-4 mb-3'>
            <div className='w-12 h-12 bg-red-100 flex items-center justify-center'>
              <Flag className='w-6 h-6 text-red-600' strokeWidth={2} />
            </div>
            <div className='text-3xl font-bold text-gray-900'>25</div>
          </div>
          <div className='text-sm text-gray-600'>Flagged</div>
        </div>
      </div>

      {/* Rating Distribution */}
      <div className='bg-white border-2 border-gray-200 p-6'>
        <h2 className='text-xl font-bold text-gray-900 mb-6'>Rating Distribution</h2>
        <div className='space-y-4'>
          {[5, 4, 3, 2, 1].map((rating) => {
            const percentage = rating === 5 ? 68 : rating === 4 ? 22 : rating === 3 ? 7 : rating === 2 ? 2 : 1;
            const count = rating === 5 ? 1936 : rating === 4 ? 626 : rating === 3 ? 199 : rating === 2 ? 57 : 29;

            return (
              <div key={rating} className='flex items-center gap-4'>
                <div className='flex items-center gap-1 w-20'>
                  <span className='font-semibold text-gray-900'>{rating}</span>
                  <Star className='w-4 h-4 text-yellow-500 fill-yellow-500' strokeWidth={2} />
                </div>
                <div className='flex-1 h-6 bg-gray-200 relative overflow-hidden'>
                  <div className='h-full bg-yellow-500 transition-all' style={{ width: `${percentage}%` }} />
                </div>
                <div className='w-16 text-right'>
                  <span className='text-sm font-semibold text-gray-900'>{percentage}%</span>
                </div>
                <div className='w-20 text-right'>
                  <span className='text-sm text-gray-600'>{count}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filters & Search */}
      <div className='bg-white border-2 border-gray-200 p-6'>
        <div className='grid md:grid-cols-4 gap-4'>
          <div className='md:col-span-2'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' strokeWidth={2} />
              <input
                type='text'
                placeholder='Search reviews by user, vehicle, or content...'
                className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
              />
            </div>
          </div>

          <select className='px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
            <option>All Ratings</option>
            <option>5 Stars</option>
            <option>4 Stars</option>
            <option>3 Stars</option>
            <option>2 Stars</option>
            <option>1 Star</option>
          </select>

          <select className='px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
            <option>All Status</option>
            <option>Published</option>
            <option>Pending</option>
            <option>Hidden</option>
          </select>
        </div>
      </div>

      {/* Reviews List */}
      <div className='space-y-4'>
        {reviews.map((review) => {
          const StatusIcon = statusIcons[review.status as keyof typeof statusIcons];
          const ratingColor = ratingColors[review.rating as keyof typeof ratingColors];

          return (
            <div
              key={review.id}
              className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 transition-colors'
            >
              {/* Header */}
              <div className='flex items-start justify-between mb-4'>
                <div className='flex items-start gap-4 flex-1'>
                  {/* Reviewer */}
                  <div className='w-12 h-12 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold flex-shrink-0'>
                    {review.reviewer
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>

                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-2'>
                      <h3 className='font-bold text-gray-900'>{review.reviewer}</h3>
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase ${statusColors[review.status as keyof typeof statusColors]}`}
                      >
                        <StatusIcon className='w-3 h-3' strokeWidth={2} />
                        {review.status}
                      </div>
                      {review.flagged && (
                        <div className='inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 text-xs font-bold uppercase'>
                          <Flag className='w-3 h-3' strokeWidth={2} />
                          FLAGGED
                        </div>
                      )}
                    </div>

                    <div className='flex items-center gap-4 text-sm text-gray-600 mb-3'>
                      <span>{review.reviewerEmail}</span>
                      <span>•</span>
                      <span>
                        {review.date} at {review.time}
                      </span>
                      <span>•</span>
                      <span>Booking: {review.booking}</span>
                    </div>

                    {/* Rating */}
                    <div className='flex items-center gap-2 mb-3'>
                      <div className='flex items-center gap-1'>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < review.rating ? `${ratingColor} fill-current` : 'text-gray-300'}`}
                            strokeWidth={2}
                          />
                        ))}
                      </div>
                      <span className={`font-bold ${ratingColor}`}>{review.rating}.0</span>
                    </div>

                    {/* Review Content */}
                    <h4 className='font-bold text-gray-900 mb-2'>{review.title}</h4>
                    <p className='text-gray-700 mb-4'>{review.comment}</p>

                    {/* Vehicle Info */}
                    <div className='flex items-center gap-2 p-3 bg-gray-50 border-2 border-gray-200 mb-4'>
                      <Car className='w-5 h-5 text-gray-400' strokeWidth={2} />
                      <div>
                        <span className='font-semibold text-gray-900'>{review.vehicle}</span>
                        <span className='text-gray-600'> • Owner: {review.vehicleOwner}</span>
                      </div>
                    </div>

                    {/* Helpful Votes */}
                    <div className='flex items-center gap-6'>
                      <div className='flex items-center gap-2 text-sm text-gray-600'>
                        <ThumbsUp className='w-4 h-4' strokeWidth={2} />
                        <span>{review.helpful} helpful</span>
                      </div>
                      <div className='flex items-center gap-2 text-sm text-gray-600'>
                        <ThumbsDown className='w-4 h-4' strokeWidth={2} />
                        <span>{review.notHelpful} not helpful</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className='flex items-center gap-2 ml-4'>
                  <button className='w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors'>
                    <Eye className='w-5 h-5' strokeWidth={2} />
                  </button>
                  <button className='w-10 h-10 flex items-center justify-center text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors'>
                    <CheckCircle className='w-5 h-5' strokeWidth={2} />
                  </button>
                  <button className='w-10 h-10 flex items-center justify-center text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors'>
                    <XCircle className='w-5 h-5' strokeWidth={2} />
                  </button>
                  <button className='w-10 h-10 flex items-center justify-center text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors'>
                    <Trash2 className='w-5 h-5' strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className='bg-white border-2 border-gray-200 px-6 py-4 flex items-center justify-between'>
        <div className='text-sm text-gray-600'>Showing 1-7 of 2,847 reviews</div>
        <div className='flex gap-2'>
          <Button variant='outline' size='sm' disabled className='hover:bg-gray-50'>
            Previous
          </Button>
          <Button variant='outline' size='sm' className='hover:bg-gray-50'>
            1
          </Button>
          <Button variant='outline' size='sm' className='hover:bg-gray-50'>
            2
          </Button>
          <Button variant='outline' size='sm' className='hover:bg-gray-50'>
            3
          </Button>
          <Button variant='outline' size='sm' className='hover:bg-gray-50'>
            Next
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className='grid md:grid-cols-3 gap-6'>
        <div className='bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200 p-6'>
          <div className='flex items-start gap-4 mb-4'>
            <div className='w-12 h-12 bg-yellow-200 flex items-center justify-center'>
              <AlertCircle className='w-6 h-6 text-yellow-700' strokeWidth={2} />
            </div>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 mb-1'>Pending Reviews</h3>
              <p className='text-sm text-gray-700'>124 reviews awaiting moderation</p>
            </div>
          </div>
          <Button className='w-full bg-yellow-600 hover:bg-yellow-700 text-white'>Review Pending</Button>
        </div>

        <div className='bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 p-6'>
          <div className='flex items-start gap-4 mb-4'>
            <div className='w-12 h-12 bg-red-200 flex items-center justify-center'>
              <Flag className='w-6 h-6 text-red-700' strokeWidth={2} />
            </div>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 mb-1'>Flagged Reviews</h3>
              <p className='text-sm text-gray-700'>25 reviews reported by users</p>
            </div>
          </div>
          <Button className='w-full bg-red-600 hover:bg-red-700 text-white'>Review Flagged</Button>
        </div>

        <div className='bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-6'>
          <div className='flex items-start gap-4 mb-4'>
            <div className='w-12 h-12 bg-blue-200 flex items-center justify-center'>
              <TrendingUp className='w-6 h-6 text-blue-700' strokeWidth={2} />
            </div>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 mb-1'>Review Insights</h3>
              <p className='text-sm text-gray-700'>Generate review analytics report</p>
            </div>
          </div>
          <Button variant='outline' className='w-full hover:bg-blue-100 border-blue-300'>
            Generate Report
          </Button>
        </div>
      </div>
    </div>
  );
}
