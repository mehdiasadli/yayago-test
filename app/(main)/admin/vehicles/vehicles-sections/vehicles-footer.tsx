import { Button } from '@/components/ui/button';
import { AlertCircle, TrendingUp, DollarSign } from 'lucide-react';

export default function VehiclesFooter() {
  return (
    <div className='grid md:grid-cols-3 gap-6'>
      <div className='bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200 p-6'>
        <div className='flex items-start gap-4 mb-4'>
          <div className='w-12 h-12 bg-yellow-200 flex items-center justify-center'>
            <AlertCircle className='w-6 h-6 text-yellow-700' strokeWidth={2} />
          </div>
          <div className='flex-1'>
            <h3 className='text-lg font-bold text-gray-900 mb-1'>Pending Verification</h3>
            <p className='text-sm text-gray-700'>42 vehicles need verification review</p>
          </div>
        </div>
        <Button className='w-full bg-yellow-600 hover:bg-yellow-700 text-white'>Review Pending</Button>
      </div>

      <div className='bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-6'>
        <div className='flex items-start gap-4 mb-4'>
          <div className='w-12 h-12 bg-blue-200 flex items-center justify-center'>
            <TrendingUp className='w-6 h-6 text-blue-700' strokeWidth={2} />
          </div>
          <div className='flex-1'>
            <h3 className='text-lg font-bold text-gray-900 mb-1'>Performance Report</h3>
            <p className='text-sm text-gray-700'>Generate vehicle performance insights</p>
          </div>
        </div>
        <Button variant='outline' className='w-full hover:bg-blue-100 border-blue-300'>
          Generate Report
        </Button>
      </div>

      <div className='bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 p-6'>
        <div className='flex items-start gap-4 mb-4'>
          <div className='w-12 h-12 bg-green-200 flex items-center justify-center'>
            <DollarSign className='w-6 h-6 text-green-700' strokeWidth={2} />
          </div>
          <div className='flex-1'>
            <h3 className='text-lg font-bold text-gray-900 mb-1'>Revenue Overview</h3>
            <p className='text-sm text-gray-700'>Total: ₼89,400 this month</p>
          </div>
        </div>
        <Button variant='outline' className='w-full hover:bg-green-100 border-green-300'>
          View Details
        </Button>
      </div>
    </div>
  );
}
