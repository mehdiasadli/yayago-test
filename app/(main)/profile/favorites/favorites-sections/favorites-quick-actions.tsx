import Link from 'next/link';
import { Search } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

export default function FavoritesQuickActions() {
  return (
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
  );
}
