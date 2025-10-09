import { Button } from '@/components/ui/button';
import {
  Bell,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  Shield,
  User,
  Car,
  CreditCard,
  MessageSquare,
  Flag,
  TrendingUp,
  Settings,
  Eye,
  Trash2,
  MoreVertical,
} from 'lucide-react';

export const metadata = {
  title: 'Notifications - Admin',
  description: 'Manage platform notifications and alerts',
};

export default function AdminNotificationsPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Notifications Center</h1>
          <p className='text-gray-600'>Monitor platform activity and alerts</p>
        </div>
        <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
          <Settings className='w-4 h-4 mr-2' />
          Configure Alerts
        </Button>
      </div>

      {/* Quick Stats */}
      <div className='grid md:grid-cols-4 gap-6'>
        <div className='bg-white border-2 border-red-200 p-6'>
          <div className='flex items-center justify-between mb-3'>
            <div className='w-12 h-12 bg-red-100 flex items-center justify-center'>
              <AlertTriangle className='w-6 h-6 text-red-600' strokeWidth={2} />
            </div>
            <span className='px-2 py-1 bg-red-100 text-red-700 text-xs font-bold uppercase'>Critical</span>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>3</div>
          <div className='text-sm text-gray-600'>Urgent Issues</div>
        </div>

        <div className='bg-white border-2 border-orange-200 p-6'>
          <div className='flex items-center justify-between mb-3'>
            <div className='w-12 h-12 bg-orange-100 flex items-center justify-center'>
              <Flag className='w-6 h-6 text-orange-600' strokeWidth={2} />
            </div>
            <span className='px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold uppercase'>Warning</span>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>12</div>
          <div className='text-sm text-gray-600'>Pending Reviews</div>
        </div>

        <div className='bg-white border-2 border-blue-200 p-6'>
          <div className='flex items-center justify-between mb-3'>
            <div className='w-12 h-12 bg-blue-100 flex items-center justify-center'>
              <Info className='w-6 h-6 text-blue-600' strokeWidth={2} />
            </div>
            <span className='px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase'>Info</span>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>28</div>
          <div className='text-sm text-gray-600'>General Updates</div>
        </div>

        <div className='bg-white border-2 border-green-200 p-6'>
          <div className='flex items-center justify-between mb-3'>
            <div className='w-12 h-12 bg-green-100 flex items-center justify-center'>
              <TrendingUp className='w-6 h-6 text-green-600' strokeWidth={2} />
            </div>
            <span className='px-2 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase'>Active</span>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>156</div>
          <div className='text-sm text-gray-600'>Today's Activity</div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='flex flex-wrap gap-2 p-4 border-b-2 border-gray-200'>
          <Button variant='default' className='bg-primary text-primary-foreground'>
            All Notifications (43)
          </Button>
          <Button variant='outline' className='hover:bg-gray-50'>
            <AlertTriangle className='w-4 h-4 mr-2' />
            Critical (3)
          </Button>
          <Button variant='outline' className='hover:bg-gray-50'>
            <Shield className='w-4 h-4 mr-2' />
            Security (7)
          </Button>
          <Button variant='outline' className='hover:bg-gray-50'>
            <Flag className='w-4 h-4 mr-2' />
            Reports (12)
          </Button>
          <Button variant='outline' className='hover:bg-gray-50'>
            <CreditCard className='w-4 h-4 mr-2' />
            Payments (8)
          </Button>
          <Button variant='outline' className='hover:bg-gray-50'>
            <User className='w-4 h-4 mr-2' />
            Users (13)
          </Button>
        </div>

        {/* Actions Bar */}
        <div className='flex items-center justify-between p-4 bg-gray-50'>
          <div className='flex items-center gap-3'>
            <label className='flex items-center gap-2'>
              <input type='checkbox' className='w-4 h-4 text-primary focus:ring-primary border-gray-300' />
              <span className='text-sm font-semibold text-gray-700'>Select All</span>
            </label>
            <span className='text-sm text-gray-600'>3 selected</span>
          </div>
          <div className='flex gap-2'>
            <Button variant='outline' size='sm' className='hover:bg-white'>
              <CheckCircle className='w-4 h-4 mr-2' />
              Mark as Read
            </Button>
            <Button variant='outline' size='sm' className='hover:bg-white text-red-600 border-red-200'>
              <Trash2 className='w-4 h-4 mr-2' />
              Delete Selected
            </Button>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className='space-y-4'>
        {/* Critical Alert 1 */}
        <div className='bg-white border-2 border-red-300 overflow-hidden'>
          <div className='p-6'>
            <div className='flex items-start gap-4'>
              <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />

              <div className='w-12 h-12 bg-red-100 flex items-center justify-center flex-shrink-0'>
                <Shield className='w-6 h-6 text-red-600' strokeWidth={2} />
              </div>

              <div className='flex-1 min-w-0'>
                <div className='flex items-start justify-between gap-4 mb-2'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-2'>
                      <h3 className='text-lg font-bold text-gray-900'>Security Alert: Suspicious Login Activity</h3>
                      <span className='px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold uppercase'>Critical</span>
                      <span className='w-2 h-2 bg-red-600 rounded-full animate-pulse' />
                    </div>
                    <p className='text-gray-700 mb-3'>
                      Multiple failed login attempts detected from IP address 185.234.123.45 targeting admin accounts.
                      Possible brute force attack in progress.
                    </p>
                    <div className='flex items-center gap-6 text-sm text-gray-600'>
                      <div className='flex items-center gap-2'>
                        <AlertTriangle className='w-4 h-4 text-red-600' strokeWidth={2} />
                        <span>High Priority</span>
                      </div>
                      <div>2 minutes ago</div>
                      <div>IP: 185.234.123.45</div>
                      <div>15 failed attempts</div>
                    </div>
                  </div>
                  <Button variant='ghost' size='sm' className='hover:bg-gray-100'>
                    <MoreVertical className='w-5 h-5' />
                  </Button>
                </div>

                <div className='flex gap-2 pt-4 border-t-2 border-red-200'>
                  <Button size='sm' className='bg-red-600 hover:bg-red-700 text-white'>
                    <Shield className='w-4 h-4 mr-2' />
                    Block IP Address
                  </Button>
                  <Button variant='outline' size='sm' className='hover:bg-gray-50'>
                    <Eye className='w-4 h-4 mr-2' />
                    View Details
                  </Button>
                  <Button variant='outline' size='sm' className='hover:bg-gray-50'>
                    <CheckCircle className='w-4 h-4 mr-2' />
                    Mark as Resolved
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Critical Alert 2 */}
        <div className='bg-white border-2 border-red-300 overflow-hidden'>
          <div className='p-6'>
            <div className='flex items-start gap-4'>
              <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />

              <div className='w-12 h-12 bg-red-100 flex items-center justify-center flex-shrink-0'>
                <CreditCard className='w-6 h-6 text-red-600' strokeWidth={2} />
              </div>

              <div className='flex-1 min-w-0'>
                <div className='flex items-start justify-between gap-4 mb-2'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-2'>
                      <h3 className='text-lg font-bold text-gray-900'>Payment Gateway Connection Failed</h3>
                      <span className='px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold uppercase'>Critical</span>
                      <span className='w-2 h-2 bg-red-600 rounded-full animate-pulse' />
                    </div>
                    <p className='text-gray-700 mb-3'>
                      Stripe payment gateway connection error. All payment processing is currently unavailable. 23
                      pending transactions affected.
                    </p>
                    <div className='flex items-center gap-6 text-sm text-gray-600'>
                      <div className='flex items-center gap-2'>
                        <XCircle className='w-4 h-4 text-red-600' strokeWidth={2} />
                        <span>System Down</span>
                      </div>
                      <div>15 minutes ago</div>
                      <div>Stripe API</div>
                      <div>23 affected transactions</div>
                    </div>
                  </div>
                  <Button variant='ghost' size='sm' className='hover:bg-gray-100'>
                    <MoreVertical className='w-5 h-5' />
                  </Button>
                </div>

                <div className='flex gap-2 pt-4 border-t-2 border-red-200'>
                  <Button size='sm' className='bg-red-600 hover:bg-red-700 text-white'>
                    <Settings className='w-4 h-4 mr-2' />
                    Configure Gateway
                  </Button>
                  <Button variant='outline' size='sm' className='hover:bg-gray-50'>
                    <Eye className='w-4 h-4 mr-2' />
                    View Error Log
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning - User Report */}
        <div className='bg-white border-2 border-orange-300 overflow-hidden'>
          <div className='p-6'>
            <div className='flex items-start gap-4'>
              <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />

              <div className='w-12 h-12 bg-orange-100 flex items-center justify-center flex-shrink-0'>
                <Flag className='w-6 h-6 text-orange-600' strokeWidth={2} />
              </div>

              <div className='flex-1 min-w-0'>
                <div className='flex items-start justify-between gap-4 mb-2'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-2'>
                      <h3 className='text-lg font-bold text-gray-900'>User Report: Fraudulent Listing</h3>
                      <span className='px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-bold uppercase'>
                        Warning
                      </span>
                    </div>
                    <p className='text-gray-700 mb-3'>
                      User @JohnDoe reported listing "2024 BMW M5" (#45892) as fraudulent. Photos don't match vehicle
                      description. Requires immediate review.
                    </p>
                    <div className='flex items-center gap-6 text-sm text-gray-600'>
                      <div>1 hour ago</div>
                      <div>Reporter: John Doe</div>
                      <div>Listing ID: #45892</div>
                      <div>Category: Fraud</div>
                    </div>
                  </div>
                  <Button variant='ghost' size='sm' className='hover:bg-gray-100'>
                    <MoreVertical className='w-5 h-5' />
                  </Button>
                </div>

                <div className='flex gap-2 pt-4 border-t-2 border-orange-200'>
                  <Button size='sm' className='bg-orange-600 hover:bg-orange-700 text-white'>
                    <Eye className='w-4 h-4 mr-2' />
                    Review Listing
                  </Button>
                  <Button variant='outline' size='sm' className='hover:bg-gray-50'>
                    <MessageSquare className='w-4 h-4 mr-2' />
                    Contact Owner
                  </Button>
                  <Button variant='outline' size='sm' className='hover:bg-gray-50 text-red-600 border-red-200'>
                    <XCircle className='w-4 h-4 mr-2' />
                    Suspend Listing
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info - New User Registration */}
        <div className='bg-white border-2 border-blue-200 overflow-hidden'>
          <div className='p-6'>
            <div className='flex items-start gap-4'>
              <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />

              <div className='w-12 h-12 bg-blue-100 flex items-center justify-center flex-shrink-0'>
                <User className='w-6 h-6 text-blue-600' strokeWidth={2} />
              </div>

              <div className='flex-1 min-w-0'>
                <div className='flex items-start justify-between gap-4 mb-2'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-2'>
                      <h3 className='text-lg font-bold text-gray-900'>Premium User Registration</h3>
                      <span className='px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold uppercase'>Info</span>
                    </div>
                    <p className='text-gray-700 mb-3'>
                      New user @SarahWilson registered with Premium membership plan. Account verified and active.
                    </p>
                    <div className='flex items-center gap-6 text-sm text-gray-600'>
                      <div>2 hours ago</div>
                      <div>User: Sarah Wilson</div>
                      <div>Plan: Premium</div>
                      <div>Revenue: ₼499</div>
                    </div>
                  </div>
                  <Button variant='ghost' size='sm' className='hover:bg-gray-100'>
                    <MoreVertical className='w-5 h-5' />
                  </Button>
                </div>

                <div className='flex gap-2 pt-4 border-t-2 border-blue-200'>
                  <Button variant='outline' size='sm' className='hover:bg-gray-50'>
                    <Eye className='w-4 h-4 mr-2' />
                    View Profile
                  </Button>
                  <Button variant='outline' size='sm' className='hover:bg-gray-50'>
                    <CheckCircle className='w-4 h-4 mr-2' />
                    Dismiss
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info - High Value Booking */}
        <div className='bg-white border-2 border-green-200 overflow-hidden'>
          <div className='p-6'>
            <div className='flex items-start gap-4'>
              <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />

              <div className='w-12 h-12 bg-green-100 flex items-center justify-center flex-shrink-0'>
                <CreditCard className='w-6 h-6 text-green-600' strokeWidth={2} />
              </div>

              <div className='flex-1 min-w-0'>
                <div className='flex items-start justify-between gap-4 mb-2'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-2'>
                      <h3 className='text-lg font-bold text-gray-900'>High Value Booking Completed</h3>
                      <span className='px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold uppercase'>
                        Success
                      </span>
                    </div>
                    <p className='text-gray-700 mb-3'>
                      Luxury vehicle booking completed: Lamborghini Aventador, 30-day rental. Total value: ₼25,000.
                      Platform commission: ₼2,500.
                    </p>
                    <div className='flex items-center gap-6 text-sm text-gray-600'>
                      <div>3 hours ago</div>
                      <div>Booking ID: #78923</div>
                      <div>Duration: 30 days</div>
                      <div>Commission: ₼2,500</div>
                    </div>
                  </div>
                  <Button variant='ghost' size='sm' className='hover:bg-gray-100'>
                    <MoreVertical className='w-5 h-5' />
                  </Button>
                </div>

                <div className='flex gap-2 pt-4 border-t-2 border-green-200'>
                  <Button variant='outline' size='sm' className='hover:bg-gray-50'>
                    <Eye className='w-4 h-4 mr-2' />
                    View Booking
                  </Button>
                  <Button variant='outline' size='sm' className='hover:bg-gray-50'>
                    <CheckCircle className='w-4 h-4 mr-2' />
                    Dismiss
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info - Vehicle Verification Pending */}
        <div className='bg-white border-2 border-gray-200 overflow-hidden'>
          <div className='p-6'>
            <div className='flex items-start gap-4'>
              <input type='checkbox' className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300' />

              <div className='w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0'>
                <Car className='w-6 h-6 text-gray-600' strokeWidth={2} />
              </div>

              <div className='flex-1 min-w-0'>
                <div className='flex items-start justify-between gap-4 mb-2'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-2'>
                      <h3 className='text-lg font-bold text-gray-900'>New Vehicle Listing Awaiting Verification</h3>
                      <span className='px-2 py-0.5 bg-gray-200 text-gray-700 text-xs font-bold uppercase'>Pending</span>
                    </div>
                    <p className='text-gray-700 mb-3'>
                      New vehicle listing submitted by @MikeJohnson: "2023 Tesla Model S". Documents uploaded and
                      awaiting admin verification.
                    </p>
                    <div className='flex items-center gap-6 text-sm text-gray-600'>
                      <div>4 hours ago</div>
                      <div>Owner: Mike Johnson</div>
                      <div>Vehicle: 2023 Tesla Model S</div>
                      <div>Price: ₼150/day</div>
                    </div>
                  </div>
                  <Button variant='ghost' size='sm' className='hover:bg-gray-100'>
                    <MoreVertical className='w-5 h-5' />
                  </Button>
                </div>

                <div className='flex gap-2 pt-4 border-t-2 border-gray-200'>
                  <Button size='sm' className='bg-primary hover:bg-primary/90 text-primary-foreground'>
                    <Eye className='w-4 h-4 mr-2' />
                    Review & Verify
                  </Button>
                  <Button variant='outline' size='sm' className='hover:bg-gray-50'>
                    <MessageSquare className='w-4 h-4 mr-2' />
                    Request More Info
                  </Button>
                  <Button variant='outline' size='sm' className='hover:bg-gray-50 text-red-600 border-red-200'>
                    <XCircle className='w-4 h-4 mr-2' />
                    Reject
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Load More */}
      <div className='flex justify-center'>
        <Button variant='outline' className='hover:bg-gray-50'>
          Load More Notifications
        </Button>
      </div>
    </div>
  );
}
