import { Button } from '@/components/ui/button';
import {
  CreditCard,
  DollarSign,
  Download,
  Calendar,
  TrendingUp,
  CheckCircle,
  Star,
  Crown,
  RefreshCw,
  FileText,
  Building2,
} from 'lucide-react';

export const metadata = {
  title: 'Billing Settings',
  description: 'Manage your subscription, payment methods, and billing information',
};

export default function BillingSettingsPage() {
  return (
    <div className='space-y-6'>
      {/* Current Plan */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Current Plan</h2>
          <p className='text-gray-600 mt-1'>Your active membership plan</p>
        </div>

        <div className='p-8'>
          <div className='bg-gradient-to-br from-primary/10 to-primary/20 border-2 border-primary p-8'>
            <div className='flex items-start justify-between mb-6'>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 bg-primary flex items-center justify-center'>
                  <Star className='w-6 h-6 text-primary-foreground' strokeWidth={2} />
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-gray-900'>Premium Plan</h3>
                  <p className='text-gray-700'>Perfect for active car owners</p>
                </div>
              </div>
              <div className='text-right'>
                <div className='text-3xl font-bold text-gray-900'>499 AED</div>
                <div className='text-gray-700'>per month</div>
              </div>
            </div>

            <div className='grid md:grid-cols-3 gap-4 mb-6'>
              <div className='bg-white/50 p-4 border border-primary/20'>
                <div className='text-2xl font-bold text-gray-900'>3 Cars</div>
                <div className='text-sm text-gray-700'>Active listings</div>
              </div>
              <div className='bg-white/50 p-4 border border-primary/20'>
                <div className='text-2xl font-bold text-gray-900'>99 AED</div>
                <div className='text-sm text-gray-700'>Per extra car</div>
              </div>
              <div className='bg-white/50 p-4 border border-primary/20'>
                <div className='text-2xl font-bold text-green-600'>Jan 15, 2026</div>
                <div className='text-sm text-gray-700'>Next billing date</div>
              </div>
            </div>

            <div className='space-y-2 mb-6'>
              <div className='flex items-center gap-2 text-gray-900'>
                <CheckCircle className='w-5 h-5 text-green-600' strokeWidth={2} />
                <span>Priority customer support</span>
              </div>
              <div className='flex items-center gap-2 text-gray-900'>
                <CheckCircle className='w-5 h-5 text-green-600' strokeWidth={2} />
                <span>Featured listings on homepage</span>
              </div>
              <div className='flex items-center gap-2 text-gray-900'>
                <CheckCircle className='w-5 h-5 text-green-600' strokeWidth={2} />
                <span>Advanced analytics dashboard</span>
              </div>
            </div>

            <div className='flex gap-3'>
              <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
                <Crown className='w-4 h-4 mr-2' />
                Upgrade Plan
              </Button>
              <Button variant='outline' className='hover:bg-white/50'>
                Change Plan
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Payment Methods</h2>
          <p className='text-gray-600 mt-1'>Manage your payment methods for subscription</p>
        </div>

        <div className='p-8 space-y-4'>
          {/* Primary Card */}
          <div className='flex items-start justify-between p-6 border-2 border-primary bg-primary/5'>
            <div className='flex items-start gap-4 flex-1'>
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center'>
                <CreditCard className='w-6 h-6 text-white' strokeWidth={2} />
              </div>
              <div className='flex-1'>
                <div className='flex items-center gap-2 mb-2'>
                  <h3 className='text-lg font-bold text-gray-900'>Visa ending in 4242</h3>
                  <span className='px-2 py-0.5 bg-primary text-primary-foreground text-xs font-bold'>PRIMARY</span>
                </div>
                <div className='text-sm text-gray-600 space-y-1'>
                  <p>Expires: 12/2025</p>
                  <p>Billing: john.doe@example.com</p>
                </div>
              </div>
            </div>
            <div className='flex gap-2'>
              <Button variant='outline' className='hover:bg-white'>
                Edit
              </Button>
            </div>
          </div>

          {/* Secondary Card */}
          <div className='flex items-start justify-between p-6 border-2 border-gray-200'>
            <div className='flex items-start gap-4 flex-1'>
              <div className='w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center'>
                <CreditCard className='w-6 h-6 text-white' strokeWidth={2} />
              </div>
              <div className='flex-1'>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>Mastercard ending in 8888</h3>
                <div className='text-sm text-gray-600 space-y-1'>
                  <p>Expires: 06/2026</p>
                  <p>Billing: john.doe@example.com</p>
                </div>
              </div>
            </div>
            <div className='flex gap-2'>
              <Button variant='outline' className='hover:bg-gray-50'>
                Set as Primary
              </Button>
              <Button variant='outline' className='hover:bg-red-50 text-red-700 border-red-300'>
                Remove
              </Button>
            </div>
          </div>

          {/* Add New */}
          <button className='w-full p-6 border-2 border-dashed border-gray-300 hover:border-primary hover:bg-gray-50 transition-colors text-center'>
            <div className='flex items-center justify-center gap-2 text-gray-700 font-semibold'>
              <CreditCard className='w-5 h-5' strokeWidth={2} />
              Add New Payment Method
            </div>
          </button>
        </div>
      </div>

      {/* Billing Information */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Billing Information</h2>
          <p className='text-gray-600 mt-1'>Details for invoices and receipts</p>
        </div>

        <div className='p-8'>
          <form className='space-y-6'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                Billing Name <span className='text-red-600'>*</span>
              </label>
              <input
                type='text'
                defaultValue='John Doe'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                placeholder='Enter billing name'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                Billing Email <span className='text-red-600'>*</span>
              </label>
              <input
                type='email'
                defaultValue='john.doe@example.com'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                placeholder='Enter billing email'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Company Name (Optional)</label>
              <input
                type='text'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                placeholder='Enter company name'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>VAT Number (Optional)</label>
              <input
                type='text'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
                placeholder='Enter VAT number'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Billing Address</label>
              <textarea
                rows={3}
                defaultValue='28 May Street, Building 5, Apt 12&#10;Baku, Azerbaijan, AZ1000'
                className='w-full px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none resize-none'
                placeholder='Enter billing address'
              />
            </div>

            <div className='flex gap-3 pt-4 border-t-2 border-gray-100'>
              <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>Update Billing Info</Button>
              <Button variant='outline' className='hover:bg-gray-50'>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Billing History */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Billing History</h2>
          <p className='text-gray-600 mt-1'>View and download your invoices</p>
        </div>

        <div className='p-8'>
          <div className='space-y-3'>
            {/* Invoice Item */}
            {[
              { date: 'Dec 15, 2024', amount: '499.00 AED', status: 'Paid', invoice: '#INV-2024-12' },
              { date: 'Nov 15, 2024', amount: '499.00 AED', status: 'Paid', invoice: '#INV-2024-11' },
              { date: 'Oct 15, 2024', amount: '499.00 AED', status: 'Paid', invoice: '#INV-2024-10' },
              { date: 'Sep 15, 2024', amount: '499.00 AED', status: 'Paid', invoice: '#INV-2024-09' },
            ].map((item, index) => (
              <div
                key={index}
                className='flex items-center justify-between p-4 border-2 border-gray-200 hover:border-primary/50 transition-colors'
              >
                <div className='flex items-center gap-4 flex-1'>
                  <div className='w-10 h-10 bg-gray-100 flex items-center justify-center'>
                    <FileText className='w-5 h-5 text-gray-600' strokeWidth={2} />
                  </div>
                  <div>
                    <div className='font-semibold text-gray-900'>{item.invoice}</div>
                    <div className='text-sm text-gray-600'>{item.date}</div>
                  </div>
                </div>
                <div className='flex items-center gap-6'>
                  <div className='text-right'>
                    <div className='font-bold text-gray-900'>{item.amount}</div>
                    <div className='text-sm text-green-600 font-semibold'>{item.status}</div>
                  </div>
                  <Button variant='outline' className='hover:bg-gray-50'>
                    <Download className='w-4 h-4 mr-2' />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-6 pt-6 border-t-2 border-gray-100 text-center'>
            <Button variant='outline' className='hover:bg-gray-50'>
              View All Invoices
            </Button>
          </div>
        </div>
      </div>

      {/* Auto-Renewal */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
          <h2 className='text-2xl font-bold text-gray-900'>Auto-Renewal</h2>
          <p className='text-gray-600 mt-1'>Manage your subscription renewal settings</p>
        </div>

        <div className='p-8'>
          <label className='flex items-start gap-4 p-6 border-2 border-gray-200 cursor-pointer'>
            <input
              type='checkbox'
              defaultChecked
              className='mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300'
            />
            <div className='flex-1'>
              <div className='font-semibold text-gray-900 mb-2'>Enable Auto-Renewal</div>
              <div className='text-sm text-gray-600'>
                Your subscription will automatically renew on <strong>January 15, 2026</strong> for{' '}
                <strong>499.00 AED</strong>. You'll receive a reminder 7 days before the renewal date.
              </div>
            </div>
          </label>

          <div className='mt-6 flex gap-3'>
            <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
              <RefreshCw className='w-4 h-4 mr-2' />
              Save Settings
            </Button>
            <Button variant='outline' className='hover:bg-red-50 text-red-700 border-red-300'>
              Cancel Subscription
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
