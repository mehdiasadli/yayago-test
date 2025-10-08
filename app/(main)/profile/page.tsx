import { Button } from '@/components/ui/button';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Camera,
  CreditCard,
  Shield,
  Star,
  TrendingUp,
  Activity,
  Clock,
  Award,
  MessageCircle,
  ThumbsUp,
  Target,
  DollarSign,
  Users,
  FileText,
  Check,
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'My Profile',
  description: 'Manage your YayaGo profile and account settings',
};

export default function ProfilePage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>My Profile</h1>
          <p className='text-gray-600'>Manage your personal information and account settings</p>
        </div>
        <Link href='/profile/settings'>
          <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
            <Edit className='w-4 h-4 mr-2' />
            Edit Profile
          </Button>
        </Link>
      </div>

      {/* Performance Stats */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <div className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 hover:shadow-lg transition-all'>
          <div className='flex items-center justify-between mb-3'>
            <div className='w-10 h-10 bg-green-100 flex items-center justify-center'>
              <TrendingUp className='w-5 h-5 text-green-600' strokeWidth={2} />
            </div>
          </div>
          <div className='text-2xl md:text-3xl font-bold text-gray-900 mb-1'>₼12,450</div>
          <div className='text-sm text-gray-600 mb-2'>Total Earnings</div>
          <div className='text-xs text-green-600 font-semibold'>+18% this month</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 hover:shadow-lg transition-all'>
          <div className='flex items-center justify-between mb-3'>
            <div className='w-10 h-10 bg-blue-100 flex items-center justify-center'>
              <Activity className='w-5 h-5 text-blue-600' strokeWidth={2} />
            </div>
          </div>
          <div className='text-2xl md:text-3xl font-bold text-gray-900 mb-1'>5</div>
          <div className='text-sm text-gray-600 mb-2'>Active Listings</div>
          <div className='text-xs text-gray-500'>2 rented currently</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 hover:shadow-lg transition-all'>
          <div className='flex items-center justify-between mb-3'>
            <div className='w-10 h-10 bg-yellow-100 flex items-center justify-center'>
              <Star className='w-5 h-5 text-yellow-600' strokeWidth={2} />
            </div>
          </div>
          <div className='text-2xl md:text-3xl font-bold text-gray-900 mb-1'>4.8</div>
          <div className='text-sm text-gray-600 mb-2'>Average Rating</div>
          <div className='text-xs text-gray-500'>24 reviews</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6 hover:border-primary/50 hover:shadow-lg transition-all'>
          <div className='flex items-center justify-between mb-3'>
            <div className='w-10 h-10 bg-purple-100 flex items-center justify-center'>
              <Calendar className='w-5 h-5 text-purple-600' strokeWidth={2} />
            </div>
          </div>
          <div className='text-2xl md:text-3xl font-bold text-gray-900 mb-1'>28</div>
          <div className='text-sm text-gray-600 mb-2'>Total Rentals</div>
          <div className='text-xs text-gray-500'>12 this month</div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className='grid lg:grid-cols-3 gap-8'>
        {/* Left Column - Personal Information */}
        <div className='lg:col-span-2 space-y-8'>
          {/* Personal Information Card */}
          <div className='bg-white border-2 border-gray-200 overflow-hidden'>
            <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
              <h2 className='text-2xl font-bold text-gray-900'>Personal Information</h2>
              <p className='text-gray-600 mt-1'>Your personal details and contact information</p>
            </div>

            <div className='p-8 space-y-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                {/* Full Name */}
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0'>
                    <User className='w-5 h-5 text-gray-600' strokeWidth={2} />
                  </div>
                  <div className='flex-1'>
                    <div className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1'>Full Name</div>
                    <div className='text-lg font-semibold text-gray-900'>John Doe</div>
                  </div>
                </div>

                {/* Email */}
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0'>
                    <Mail className='w-5 h-5 text-gray-600' strokeWidth={2} />
                  </div>
                  <div className='flex-1'>
                    <div className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1'>Email</div>
                    <div className='text-lg font-semibold text-gray-900'>john.doe@example.com</div>
                    <div className='flex items-center gap-1.5 mt-1'>
                      <Check className='w-3.5 h-3.5 text-green-600' strokeWidth={3} />
                      <span className='text-xs text-green-600 font-semibold'>Verified</span>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0'>
                    <Phone className='w-5 h-5 text-gray-600' strokeWidth={2} />
                  </div>
                  <div className='flex-1'>
                    <div className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1'>Phone</div>
                    <div className='text-lg font-semibold text-gray-900'>+994 50 123 45 67</div>
                    <div className='flex items-center gap-1.5 mt-1'>
                      <Check className='w-3.5 h-3.5 text-green-600' strokeWidth={3} />
                      <span className='text-xs text-green-600 font-semibold'>Verified</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0'>
                    <MapPin className='w-5 h-5 text-gray-600' strokeWidth={2} />
                  </div>
                  <div className='flex-1'>
                    <div className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1'>Location</div>
                    <div className='text-lg font-semibold text-gray-900'>Baku, Azerbaijan</div>
                    <div className='text-sm text-gray-600 mt-1'>Nasimi District</div>
                  </div>
                </div>
              </div>

              <div className='pt-4 border-t-2 border-gray-100'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0'>
                    <Calendar className='w-5 h-5 text-gray-600' strokeWidth={2} />
                  </div>
                  <div className='flex-1'>
                    <div className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1'>
                      Member Since
                    </div>
                    <div className='text-lg font-semibold text-gray-900'>January 15, 2025</div>
                    <div className='text-sm text-gray-600 mt-1'>Active for 3 months</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className='bg-white border-2 border-gray-200 overflow-hidden'>
            <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
              <h2 className='text-2xl font-bold text-gray-900'>About Me</h2>
              <p className='text-gray-600 mt-1'>Share your story with the community</p>
            </div>

            <div className='p-8'>
              <p className='text-gray-700 leading-relaxed mb-6'>
                Hello! I'm John, a passionate car enthusiast based in Baku, Azerbaijan. I've been renting out my
                vehicles through YayaGo for the past 3 months and absolutely love being part of this community. My
                mission is to provide clean, well-maintained cars with exceptional service. I respond quickly to
                inquiries and am flexible with pickup and drop-off arrangements. Each of my vehicles undergoes regular
                maintenance and thorough cleaning before every rental. Looking forward to helping you with your
                transportation needs!
              </p>
              <Button variant='outline' className='hover:bg-gray-50'>
                <Edit className='w-4 h-4 mr-2' />
                Edit Bio
              </Button>
            </div>
          </div>

          {/* Reviews & Ratings */}
          <div className='bg-white border-2 border-gray-200 overflow-hidden'>
            <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
              <h2 className='text-2xl font-bold text-gray-900'>Reviews & Ratings</h2>
              <p className='text-gray-600 mt-1'>What renters say about you</p>
            </div>

            <div className='p-8'>
              {/* Rating Summary */}
              <div className='flex flex-col md:flex-row gap-8 mb-8 pb-8 border-b-2 border-gray-100'>
                <div className='text-center md:text-left'>
                  <div className='text-6xl font-bold text-gray-900 mb-2'>4.8</div>
                  <div className='flex items-center justify-center md:justify-start gap-1 mb-2'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        strokeWidth={2}
                      />
                    ))}
                  </div>
                  <div className='text-sm text-gray-600'>Based on 24 reviews</div>
                </div>

                <div className='flex-1 space-y-2'>
                  {[
                    { stars: 5, count: 18, percentage: 75 },
                    { stars: 4, count: 4, percentage: 17 },
                    { stars: 3, count: 2, percentage: 8 },
                    { stars: 2, count: 0, percentage: 0 },
                    { stars: 1, count: 0, percentage: 0 },
                  ].map((rating) => (
                    <div key={rating.stars} className='flex items-center gap-3'>
                      <div className='text-sm font-semibold text-gray-700 w-12'>{rating.stars} star</div>
                      <div className='flex-1 h-2 bg-gray-200'>
                        <div className='h-full bg-yellow-400' style={{ width: `${rating.percentage}%` }} />
                      </div>
                      <div className='text-sm text-gray-600 w-12 text-right'>{rating.count}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Reviews */}
              <div className='space-y-6'>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>Recent Reviews</h3>

                {/* Review 1 */}
                <div className='border-l-4 border-primary pl-6 py-2'>
                  <div className='flex items-center gap-3 mb-2'>
                    <div className='w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold text-sm'>
                      AM
                    </div>
                    <div className='flex-1'>
                      <div className='font-semibold text-gray-900'>Ahmad Mammadov</div>
                      <div className='flex items-center gap-2 text-sm text-gray-600'>
                        <div className='flex items-center gap-0.5'>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className='w-3.5 h-3.5 fill-yellow-400 text-yellow-400' />
                          ))}
                        </div>
                        <span>•</span>
                        <span>2 days ago</span>
                      </div>
                    </div>
                  </div>
                  <p className='text-gray-700 leading-relaxed'>
                    Excellent experience! The car was in perfect condition, clean, and John was very professional and
                    flexible with timing. Highly recommended!
                  </p>
                </div>

                {/* Review 2 */}
                <div className='border-l-4 border-primary pl-6 py-2'>
                  <div className='flex items-center gap-3 mb-2'>
                    <div className='w-10 h-10 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-sm'>
                      LA
                    </div>
                    <div className='flex-1'>
                      <div className='font-semibold text-gray-900'>Leyla Aliyeva</div>
                      <div className='flex items-center gap-2 text-sm text-gray-600'>
                        <div className='flex items-center gap-0.5'>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-3.5 h-3.5 ${star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span>•</span>
                        <span>1 week ago</span>
                      </div>
                    </div>
                  </div>
                  <p className='text-gray-700 leading-relaxed'>
                    Great car and smooth rental process. John responded quickly to my messages and was very helpful.
                    Will definitely rent again!
                  </p>
                </div>

                {/* Review 3 */}
                <div className='border-l-4 border-primary pl-6 py-2'>
                  <div className='flex items-center gap-3 mb-2'>
                    <div className='w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-sm'>
                      RH
                    </div>
                    <div className='flex-1'>
                      <div className='font-semibold text-gray-900'>Rashad Hasanov</div>
                      <div className='flex items-center gap-2 text-sm text-gray-600'>
                        <div className='flex items-center gap-0.5'>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className='w-3.5 h-3.5 fill-yellow-400 text-yellow-400' />
                          ))}
                        </div>
                        <span>•</span>
                        <span>2 weeks ago</span>
                      </div>
                    </div>
                  </div>
                  <p className='text-gray-700 leading-relaxed'>
                    Perfect rental experience from start to finish. The car was exactly as described and John made the
                    whole process very easy. 5 stars!
                  </p>
                </div>
              </div>

              <div className='mt-6'>
                <Button variant='outline' className='w-full hover:bg-gray-50'>
                  View All Reviews
                </Button>
              </div>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className='bg-white border-2 border-gray-200 overflow-hidden'>
            <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
              <h2 className='text-2xl font-bold text-gray-900'>Recent Activity</h2>
              <p className='text-gray-600 mt-1'>Your latest actions and updates</p>
            </div>

            <div className='p-8'>
              <div className='space-y-6'>
                {/* Activity Item */}
                <div className='flex gap-4'>
                  <div className='flex flex-col items-center'>
                    <div className='w-10 h-10 bg-green-100 flex items-center justify-center'>
                      <Check className='w-5 h-5 text-green-600' strokeWidth={2} />
                    </div>
                    <div className='w-px h-full bg-gray-200 mt-2' />
                  </div>
                  <div className='flex-1 pb-6'>
                    <div className='font-semibold text-gray-900 mb-1'>Rental Completed</div>
                    <div className='text-sm text-gray-600 mb-2'>Toyota Camry 2022 • 5 days rental</div>
                    <div className='flex items-center gap-2 text-xs text-gray-500'>
                      <Clock className='w-3.5 h-3.5' />
                      <span>2 hours ago</span>
                    </div>
                  </div>
                </div>

                {/* Activity Item */}
                <div className='flex gap-4'>
                  <div className='flex flex-col items-center'>
                    <div className='w-10 h-10 bg-blue-100 flex items-center justify-center'>
                      <MessageCircle className='w-5 h-5 text-blue-600' strokeWidth={2} />
                    </div>
                    <div className='w-px h-full bg-gray-200 mt-2' />
                  </div>
                  <div className='flex-1 pb-6'>
                    <div className='font-semibold text-gray-900 mb-1'>New Message</div>
                    <div className='text-sm text-gray-600 mb-2'>Inquiry about BMW X5 2023</div>
                    <div className='flex items-center gap-2 text-xs text-gray-500'>
                      <Clock className='w-3.5 h-3.5' />
                      <span>5 hours ago</span>
                    </div>
                  </div>
                </div>

                {/* Activity Item */}
                <div className='flex gap-4'>
                  <div className='flex flex-col items-center'>
                    <div className='w-10 h-10 bg-yellow-100 flex items-center justify-center'>
                      <Star className='w-5 h-5 text-yellow-600' strokeWidth={2} />
                    </div>
                    <div className='w-px h-full bg-gray-200 mt-2' />
                  </div>
                  <div className='flex-1 pb-6'>
                    <div className='font-semibold text-gray-900 mb-1'>New Review Received</div>
                    <div className='text-sm text-gray-600 mb-2'>5 stars from Ahmad Mammadov</div>
                    <div className='flex items-center gap-2 text-xs text-gray-500'>
                      <Clock className='w-3.5 h-3.5' />
                      <span>1 day ago</span>
                    </div>
                  </div>
                </div>

                {/* Activity Item */}
                <div className='flex gap-4'>
                  <div className='flex flex-col items-center'>
                    <div className='w-10 h-10 bg-purple-100 flex items-center justify-center'>
                      <Camera className='w-5 h-5 text-purple-600' strokeWidth={2} />
                    </div>
                  </div>
                  <div className='flex-1'>
                    <div className='font-semibold text-gray-900 mb-1'>Listing Updated</div>
                    <div className='text-sm text-gray-600 mb-2'>Mercedes-Benz E-Class photos updated</div>
                    <div className='flex items-center gap-2 text-xs text-gray-500'>
                      <Clock className='w-3.5 h-3.5' />
                      <span>3 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className='space-y-8'>
          {/* Account Status Card */}
          <div className='bg-gradient-to-br from-primary to-primary-dark text-white border-2 border-primary overflow-hidden'>
            <div className='p-6'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center'>
                  <Shield className='w-6 h-6' strokeWidth={2} />
                </div>
                <div>
                  <div className='font-bold text-sm uppercase tracking-wider'>Account Status</div>
                  <div className='text-2xl font-bold'>Premium</div>
                </div>
              </div>
              <div className='space-y-2 mb-6'>
                <div className='flex items-center gap-2 text-sm'>
                  <Check className='w-4 h-4' strokeWidth={2} />
                  <span>Up to 12 cars</span>
                </div>
                <div className='flex items-center gap-2 text-sm'>
                  <Check className='w-4 h-4' strokeWidth={2} />
                  <span>Priority support</span>
                </div>
                <div className='flex items-center gap-2 text-sm'>
                  <Check className='w-4 h-4' strokeWidth={2} />
                  <span>Advanced analytics</span>
                </div>
                <div className='flex items-center gap-2 text-sm'>
                  <Check className='w-4 h-4' strokeWidth={2} />
                  <span>Custom branding</span>
                </div>
              </div>
              <div className='border-t border-white/20 pt-4 mb-6'>
                <div className='text-sm mb-1'>Next billing date</div>
                <div className='font-bold'>April 15, 2025</div>
              </div>
              <Link href='/pricing'>
                <Button className='w-full bg-white text-primary hover:bg-gray-100'>
                  <TrendingUp className='w-4 h-4 mr-2' />
                  Upgrade Plan
                </Button>
              </Link>
            </div>
          </div>

          {/* Verification Status */}
          <div className='bg-white border-2 border-gray-200 overflow-hidden'>
            <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
              <h3 className='text-lg font-bold text-gray-900'>Verification</h3>
            </div>
            <div className='p-6 space-y-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='w-8 h-8 bg-green-100 flex items-center justify-center'>
                    <Mail className='w-4 h-4 text-green-600' strokeWidth={2} />
                  </div>
                  <span className='text-sm font-semibold text-gray-900'>Email</span>
                </div>
                <span className='text-xs font-bold text-green-600 uppercase flex items-center gap-1'>
                  <Check className='w-3.5 h-3.5' strokeWidth={3} />
                  Verified
                </span>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='w-8 h-8 bg-green-100 flex items-center justify-center'>
                    <Phone className='w-4 h-4 text-green-600' strokeWidth={2} />
                  </div>
                  <span className='text-sm font-semibold text-gray-900'>Phone</span>
                </div>
                <span className='text-xs font-bold text-green-600 uppercase flex items-center gap-1'>
                  <Check className='w-3.5 h-3.5' strokeWidth={3} />
                  Verified
                </span>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='w-8 h-8 bg-green-100 flex items-center justify-center'>
                    <FileText className='w-4 h-4 text-green-600' strokeWidth={2} />
                  </div>
                  <span className='text-sm font-semibold text-gray-900'>ID Document</span>
                </div>
                <span className='text-xs font-bold text-green-600 uppercase flex items-center gap-1'>
                  <Check className='w-3.5 h-3.5' strokeWidth={3} />
                  Verified
                </span>
              </div>

              <div className='flex items-center justify-between pt-4 border-t-2 border-gray-100'>
                <div className='flex items-center gap-3'>
                  <div className='w-8 h-8 bg-gray-100 flex items-center justify-center'>
                    <CreditCard className='w-4 h-4 text-gray-400' strokeWidth={2} />
                  </div>
                  <span className='text-sm font-semibold text-gray-900'>Payment</span>
                </div>
                <Button variant='outline' size='sm' className='text-xs h-8'>
                  Add
                </Button>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className='bg-white border-2 border-gray-200 overflow-hidden'>
            <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
              <h3 className='text-lg font-bold text-gray-900'>Achievements</h3>
            </div>
            <div className='p-6 space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 bg-yellow-100 flex items-center justify-center'>
                  <Award className='w-6 h-6 text-yellow-600' strokeWidth={2} />
                </div>
                <div>
                  <div className='font-semibold text-gray-900 text-sm'>First Rental</div>
                  <div className='text-xs text-gray-600'>Completed your first rental</div>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 bg-blue-100 flex items-center justify-center'>
                  <ThumbsUp className='w-6 h-6 text-blue-600' strokeWidth={2} />
                </div>
                <div>
                  <div className='font-semibold text-gray-900 text-sm'>High Rated</div>
                  <div className='text-xs text-gray-600'>Maintain 4.5+ rating</div>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 bg-green-100 flex items-center justify-center'>
                  <Target className='w-6 h-6 text-green-600' strokeWidth={2} />
                </div>
                <div>
                  <div className='font-semibold text-gray-900 text-sm'>10 Rentals</div>
                  <div className='text-xs text-gray-600'>Completed 10 successful rentals</div>
                </div>
              </div>

              <div className='flex items-center gap-3 opacity-50'>
                <div className='w-12 h-12 bg-gray-100 flex items-center justify-center'>
                  <Users className='w-6 h-6 text-gray-400' strokeWidth={2} />
                </div>
                <div>
                  <div className='font-semibold text-gray-900 text-sm'>50 Rentals</div>
                  <div className='text-xs text-gray-600'>28/50 completed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Earnings */}
          <div className='bg-white border-2 border-gray-200 overflow-hidden'>
            <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
              <h3 className='text-lg font-bold text-gray-900'>This Month</h3>
            </div>
            <div className='p-6'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center gap-2'>
                  <DollarSign className='w-5 h-5 text-primary' strokeWidth={2} />
                  <span className='text-sm font-semibold text-gray-600'>Earnings</span>
                </div>
                <span className='text-2xl font-bold text-gray-900'>₼2,400</span>
              </div>

              <div className='space-y-3'>
                <div className='flex items-center justify-between text-sm'>
                  <span className='text-gray-600'>Rentals</span>
                  <span className='font-semibold text-gray-900'>12</span>
                </div>
                <div className='flex items-center justify-between text-sm'>
                  <span className='text-gray-600'>Avg per rental</span>
                  <span className='font-semibold text-gray-900'>₼200</span>
                </div>
                <div className='flex items-center justify-between text-sm'>
                  <span className='text-gray-600'>Days rented</span>
                  <span className='font-semibold text-gray-900'>45</span>
                </div>
              </div>

              <div className='mt-6 pt-6 border-t-2 border-gray-100'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-sm text-gray-600'>Goal Progress</span>
                  <span className='text-sm font-bold text-primary'>80%</span>
                </div>
                <div className='h-2 bg-gray-200'>
                  <div className='h-full bg-primary' style={{ width: '80%' }} />
                </div>
                <div className='text-xs text-gray-500 mt-2'>₼600 to reach ₼3,000 goal</div>
              </div>
            </div>
          </div>

          {/* Help & Support */}
          <div className='bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 p-6'>
            <h3 className='text-lg font-bold text-gray-900 mb-2'>Need Help?</h3>
            <p className='text-sm text-gray-600 mb-4'>
              Our support team is available 24/7 to assist you with any questions.
            </p>
            <Link href='/support/contact'>
              <Button variant='outline' className='w-full hover:bg-white'>
                <MessageCircle className='w-4 h-4 mr-2' />
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
