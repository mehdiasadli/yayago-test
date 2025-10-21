import { DollarSign } from 'lucide-react';

export default function MonthlyEarnings() {
  return (
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
  );
}
