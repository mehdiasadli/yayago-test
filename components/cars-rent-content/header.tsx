import { Button } from '../ui/button';

interface HeaderProps {
  activeFiltersCount: number;
  clearAllFilters: () => void;
}

export default function Header({ activeFiltersCount, clearAllFilters }: HeaderProps) {
  return (
    <div className='flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-200'>
      <div>
        <h2 className='text-2xl font-bold text-gray-900'>Filters</h2>
        {activeFiltersCount > 0 && (
          <span className='text-sm text-gray-600 mt-1 block'>
            {activeFiltersCount} active filter{activeFiltersCount !== 1 ? 's' : ''}
          </span>
        )}
      </div>
    </div>
  );
}
