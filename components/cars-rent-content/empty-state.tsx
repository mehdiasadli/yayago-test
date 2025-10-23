import { Button } from '../ui/button';
import { Search } from 'lucide-react';

interface EmptyStateProps {
  clearAllFilters: () => void;
}

export default function EmptyState({ clearAllFilters }: EmptyStateProps) {
  return (
    <div className='text-center py-20 bg-white border-2 border-gray-200'>
      <div className='max-w-md mx-auto'>
        <div className='w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6'>
          <Search className='w-10 h-10 text-gray-400' strokeWidth={2} />
        </div>
        <h3 className='text-2xl font-bold text-gray-900 mb-3'>No cars found</h3>
        <p className='text-gray-600 mb-6'>Try adjusting your filters or search criteria to find more vehicles.</p>
        <Button onClick={clearAllFilters} className='h-12'>
          Clear All Filters
        </Button>
      </div>
    </div>
  );
}
