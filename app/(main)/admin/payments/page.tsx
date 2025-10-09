import { Button } from '@/components/ui/button';
import {
  DollarSign,
  Search,
  Filter,
  Download,
  Eye,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  CreditCard,
  User,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  FileText,
} from 'lucide-react';

export const metadata = {
  title: 'Payments Management - Admin',
  description: 'Manage platform payments and transactions',
};

// Mock payments data
const payments = [
  {
    id: 'PAY-2025-001',
    transactionId: 'TXN-89A3F2B1',
    booking: 'BK-2025-001',
    type: 'rental',
    payer: 'Sarah Johnson',
    payerEmail: 'sarah.j@example.com',
    receiver: 'John Doe',
    amount: 600,
    platformFee: 60,
    netAmount: 540,
    status: 'completed',
    method: 'Credit Card',
    date: 'Feb 10, 2025',
    time: '10:23 AM',
  },
  {
    id: 'PAY-2025-002',
    transactionId: 'TXN-45D8E9C7',
    booking: 'BK-2025-002',
    type: 'rental',
    payer: 'Michael Chen',
    payerEmail: 'michael.c@example.com',
    receiver: 'Jane Smith',
    amount: 400,
    platformFee: 40,
    netAmount: 360,
    status: 'completed',
    method: 'PayPal',
    date: 'Feb 12, 2025',
    time: '2:45 PM',
  },
  {
    id: 'PAY-2025-003',
    transactionId: 'TXN-12B6C4D8',
    booking: 'BK-2025-003',
    type: 'rental',
    payer: 'Emma Wilson',
    payerEmail: 'emma.w@example.com',
    receiver: 'Bob Wilson',
    amount: 240,
    platformFee: 24,
    netAmount: 216,
    status: 'pending',
    method: 'Credit Card',
    date: 'Feb 14, 2025',
    time: '11:15 AM',
  },
  {
    id: 'PAY-2025-004',
    transactionId: 'TXN-78F3A9E2',
    booking: null,
    type: 'subscription',
    payer: 'Alice Brown',
    payerEmail: 'alice.b@example.com',
    receiver: 'YayaGo',
    amount: 499,
    platformFee: 0,
    netAmount: 499,
    status: 'completed',
    method: 'Credit Card',
    date: 'Feb 1, 2025',
    time: '9:00 AM',
  },
  {
    id: 'PAY-2025-005',
    transactionId: 'TXN-23E7D1F5',
    booking: 'BK-2025-005',
    type: 'refund',
    payer: 'YayaGo',
    payerEmail: 'payments@yayago.com',
    receiver: 'Lisa Anderson',
    amount: 210,
    platformFee: 0,
    netAmount: 210,
    status: 'completed',
    method: 'Original Method',
    date: 'Feb 8, 2025',
    time: '4:30 PM',
  },
  {
    id: 'PAY-2025-006',
    transactionId: 'TXN-56H9K2L8',
    booking: 'BK-2025-006',
    type: 'rental',
    payer: 'Robert Lee',
    payerEmail: 'robert.l@example.com',
    receiver: 'David Miller',
    amount: 540,
    platformFee: 54,
    netAmount: 486,
    status: 'held',
    method: 'Credit Card',
    date: 'Feb 11, 2025',
    time: '1:20 PM',
  },
  {
    id: 'PAY-2025-007',
    transactionId: 'TXN-91N4M7P3',
    booking: 'BK-2025-004',
    type: 'payout',
    payer: 'YayaGo',
    payerEmail: 'payments@yayago.com',
    receiver: 'Alice Brown',
    amount: 405,
    platformFee: 0,
    netAmount: 405,
    status: 'processing',
    method: 'Bank Transfer',
    date: 'Feb 13, 2025',
    time: '3:00 PM',
  },
  {
    id: 'PAY-2025-008',
    transactionId: 'TXN-84Q2W5R9',
    booking: 'BK-2024-998',
    type: 'rental',
    payer: 'Sophie Taylor',
    payerEmail: 'sophie.t@example.com',
    receiver: 'Charlie Davis',
    amount: 350,
    platformFee: 35,
    netAmount: 315,
    status: 'failed',
    method: 'Credit Card',
    date: 'Feb 9, 2025',
    time: '5:45 PM',
  },
];

const statusColors = {
  completed: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  processing: 'bg-blue-100 text-blue-700',
  held: 'bg-orange-100 text-orange-700',
  failed: 'bg-red-100 text-red-700',
  refunded: 'bg-purple-100 text-purple-700',
};

const statusIcons = {
  completed: CheckCircle,
  pending: Clock,
  processing: RefreshCw,
  held: AlertCircle,
  failed: XCircle,
  refunded: ArrowDownRight,
};

const typeColors = {
  rental: 'bg-blue-100 text-blue-700',
  subscription: 'bg-purple-100 text-purple-700',
  refund: 'bg-orange-100 text-orange-700',
  payout: 'bg-green-100 text-green-700',
};

export default function AdminPaymentsPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div className='flex items-start justify-between flex-wrap gap-4'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Payments Management</h1>
          <p className='text-gray-600'>Monitor and manage all platform transactions</p>
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

      {/* Revenue Overview */}
      <div className='grid md:grid-cols-4 gap-6'>
        <div className='bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 p-6'>
          <div className='flex items-start justify-between mb-4'>
            <div className='w-12 h-12 bg-green-200 flex items-center justify-center'>
              <DollarSign className='w-6 h-6 text-green-700' strokeWidth={2} />
            </div>
            <div className='flex items-center gap-1 text-green-700 text-sm font-semibold'>
              <TrendingUp className='w-4 h-4' strokeWidth={2} />
              23.1%
            </div>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>₼89,400</div>
          <div className='text-sm text-gray-700'>Total Revenue (This Month)</div>
        </div>

        <div className='bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-6'>
          <div className='flex items-start justify-between mb-4'>
            <div className='w-12 h-12 bg-blue-200 flex items-center justify-center'>
              <ArrowUpRight className='w-6 h-6 text-blue-700' strokeWidth={2} />
            </div>
            <div className='flex items-center gap-1 text-blue-700 text-sm font-semibold'>
              <TrendingUp className='w-4 h-4' strokeWidth={2} />
              15.3%
            </div>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>₼8,940</div>
          <div className='text-sm text-gray-700'>Platform Fees</div>
        </div>

        <div className='bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 p-6'>
          <div className='flex items-start justify-between mb-4'>
            <div className='w-12 h-12 bg-purple-200 flex items-center justify-center'>
              <ArrowDownRight className='w-6 h-6 text-purple-700' strokeWidth={2} />
            </div>
            <div className='flex items-center gap-1 text-purple-700 text-sm font-semibold'>
              <TrendingDown className='w-4 h-4' strokeWidth={2} />
              8.2%
            </div>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>₼15,680</div>
          <div className='text-sm text-gray-700'>Pending Payouts</div>
        </div>

        <div className='bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 p-6'>
          <div className='flex items-start justify-between mb-4'>
            <div className='w-12 h-12 bg-orange-200 flex items-center justify-center'>
              <AlertCircle className='w-6 h-6 text-orange-700' strokeWidth={2} />
            </div>
            <div className='flex items-center gap-1 text-orange-700 text-sm font-semibold'>
              <Clock className='w-4 h-4' strokeWidth={2} />7
            </div>
          </div>
          <div className='text-3xl font-bold text-gray-900 mb-1'>₼2,340</div>
          <div className='text-sm text-gray-700'>Held/Disputed</div>
        </div>
      </div>

      {/* Transaction Stats */}
      <div className='grid md:grid-cols-6 gap-6'>
        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-blue-100 flex items-center justify-center'>
              <FileText className='w-5 h-5 text-blue-600' strokeWidth={2} />
            </div>
            <div className='text-2xl font-bold text-gray-900'>3,456</div>
          </div>
          <div className='text-sm text-gray-600'>Total Transactions</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-green-100 flex items-center justify-center'>
              <CheckCircle className='w-5 h-5 text-green-600' strokeWidth={2} />
            </div>
            <div className='text-2xl font-bold text-gray-900'>3,201</div>
          </div>
          <div className='text-sm text-gray-600'>Completed</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-yellow-100 flex items-center justify-center'>
              <Clock className='w-5 h-5 text-yellow-600' strokeWidth={2} />
            </div>
            <div className='text-2xl font-bold text-gray-900'>156</div>
          </div>
          <div className='text-sm text-gray-600'>Pending</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-blue-100 flex items-center justify-center'>
              <RefreshCw className='w-5 h-5 text-blue-600' strokeWidth={2} />
            </div>
            <div className='text-2xl font-bold text-gray-900'>67</div>
          </div>
          <div className='text-sm text-gray-600'>Processing</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-orange-100 flex items-center justify-center'>
              <AlertCircle className='w-5 h-5 text-orange-600' strokeWidth={2} />
            </div>
            <div className='text-2xl font-bold text-gray-900'>21</div>
          </div>
          <div className='text-sm text-gray-600'>Held</div>
        </div>

        <div className='bg-white border-2 border-gray-200 p-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-red-100 flex items-center justify-center'>
              <XCircle className='w-5 h-5 text-red-600' strokeWidth={2} />
            </div>
            <div className='text-2xl font-bold text-gray-900'>11</div>
          </div>
          <div className='text-sm text-gray-600'>Failed</div>
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
                placeholder='Search by ID, user, transaction...'
                className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none'
              />
            </div>
          </div>

          <select className='px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
            <option>All Types</option>
            <option>Rental</option>
            <option>Subscription</option>
            <option>Refund</option>
            <option>Payout</option>
          </select>

          <select className='px-4 py-3 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
            <option>All Status</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Processing</option>
            <option>Held</option>
            <option>Failed</option>
          </select>
        </div>
      </div>

      {/* Payments Table */}
      <div className='bg-white border-2 border-gray-200 overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  <input type='checkbox' className='w-4 h-4' />
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Payment ID
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Type</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Payer</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Receiver
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Amount</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Breakdown
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Method</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Status</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y-2 divide-gray-100'>
              {payments.map((payment) => {
                const StatusIcon = statusIcons[payment.status as keyof typeof statusIcons];

                return (
                  <tr key={payment.id} className='hover:bg-gray-50'>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <input type='checkbox' className='w-4 h-4' />
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div>
                        <div className='font-bold text-primary'>{payment.id}</div>
                        <div className='text-xs text-gray-500'>{payment.transactionId}</div>
                        {payment.booking && <div className='text-xs text-gray-500 mt-1'>Ref: {payment.booking}</div>}
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div
                        className={`inline-flex items-center px-3 py-1 text-xs font-bold uppercase ${typeColors[payment.type as keyof typeof typeColors]}`}
                      >
                        {payment.type}
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center gap-2'>
                        <User className='w-4 h-4 text-gray-400 flex-shrink-0' strokeWidth={2} />
                        <div>
                          <div className='font-semibold text-gray-900'>{payment.payer}</div>
                          <div className='text-xs text-gray-600'>{payment.payerEmail}</div>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center gap-2'>
                        <User className='w-4 h-4 text-gray-400 flex-shrink-0' strokeWidth={2} />
                        <div>
                          <div className='font-semibold text-gray-900'>{payment.receiver}</div>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='font-bold text-gray-900 text-lg'>₼{payment.amount}</div>
                      <div className='text-xs text-gray-500 flex items-center gap-1'>
                        <Calendar className='w-3 h-3' strokeWidth={2} />
                        {payment.date} • {payment.time}
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm space-y-1'>
                        <div className='text-gray-700'>Fee: ₼{payment.platformFee}</div>
                        <div className='font-semibold text-gray-900'>Net: ₼{payment.netAmount}</div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center gap-2'>
                        <CreditCard className='w-4 h-4 text-gray-400' strokeWidth={2} />
                        <span className='text-sm text-gray-700'>{payment.method}</span>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase ${statusColors[payment.status as keyof typeof statusColors]}`}
                      >
                        <StatusIcon className='w-3 h-3' strokeWidth={2} />
                        {payment.status}
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center gap-2'>
                        <button className='w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors'>
                          <Eye className='w-4 h-4' strokeWidth={2} />
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors'>
                          <Download className='w-4 h-4' strokeWidth={2} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className='border-t-2 border-gray-200 px-6 py-4 flex items-center justify-between'>
          <div className='text-sm text-gray-600'>Showing 1-8 of 3,456 transactions</div>
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
      </div>

      {/* Quick Actions */}
      <div className='grid md:grid-cols-3 gap-6'>
        <div className='bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 p-6'>
          <div className='flex items-start gap-4 mb-4'>
            <div className='w-12 h-12 bg-purple-200 flex items-center justify-center'>
              <ArrowDownRight className='w-6 h-6 text-purple-700' strokeWidth={2} />
            </div>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 mb-1'>Process Payouts</h3>
              <p className='text-sm text-gray-700'>7 pending payouts (₼15,680)</p>
            </div>
          </div>
          <Button className='w-full bg-purple-600 hover:bg-purple-700 text-white'>Process All</Button>
        </div>

        <div className='bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 p-6'>
          <div className='flex items-start gap-4 mb-4'>
            <div className='w-12 h-12 bg-orange-200 flex items-center justify-center'>
              <AlertCircle className='w-6 h-6 text-orange-700' strokeWidth={2} />
            </div>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 mb-1'>Review Failed Payments</h3>
              <p className='text-sm text-gray-700'>11 failed transactions need review</p>
            </div>
          </div>
          <Button className='w-full bg-orange-600 hover:bg-orange-700 text-white'>Review Failed</Button>
        </div>

        <div className='bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-6'>
          <div className='flex items-start gap-4 mb-4'>
            <div className='w-12 h-12 bg-blue-200 flex items-center justify-center'>
              <FileText className='w-6 h-6 text-blue-700' strokeWidth={2} />
            </div>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 mb-1'>Financial Report</h3>
              <p className='text-sm text-gray-700'>Generate monthly financial report</p>
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
