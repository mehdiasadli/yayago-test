'use client';

import VehiclesSearchInput from './vehicles-search-input';
import { TAdminGetCarsQuery } from '@/features/admin-car-management/admin-car-management.types';

interface VehiclesTableFiltersProps {
  params?: TAdminGetCarsQuery;
}

export default function VehiclesTableFilters({ params }: VehiclesTableFiltersProps) {
  return (
    <div className='bg-white border-2 border-gray-200 p-6'>
      <VehiclesSearchInput initialSearchTerm={params?.searchTerm} />
    </div>
  );
}
