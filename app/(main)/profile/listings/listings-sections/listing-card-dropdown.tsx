import { MoreVertical } from 'lucide-react';

export default function ListingCardDropdown() {
  return (
    <div className='relative'>
      <button className='p-2 hover:bg-gray-100 transition-colors'>
        <MoreVertical className='w-5 h-5 text-gray-600' />
      </button>
    </div>
  );
}
