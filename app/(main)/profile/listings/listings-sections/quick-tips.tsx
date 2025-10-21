import { Lightbulb } from 'lucide-react';

export default function QuickTips() {
  return (
    <div className='bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 p-8'>
      <h3 className='text-xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
        <Lightbulb className='w-5 h-5 text-primary' strokeWidth={2} /> Tips to Maximize Your Listings
      </h3>
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
  );
}
