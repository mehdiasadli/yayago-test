import VehiclesStats from './vehicles-sections/vehicles-stats';
import VehiclesHeader from './vehicles-sections/vehicles-header';
import VehiclesTableFilters from './vehicles-sections/vehicles-table-filters';
import VehiclesTable from './vehicles-sections/vehicles-table';
import { TAdminGetCarsQuery } from '@/features/admin-car-management/admin-car-management.types';
import { AdminGetCarsQueryDto } from '@/features/admin-car-management/admin-car-management.dto';

export const metadata = {
  title: 'Vehicles Management - Admin',
  description: 'Manage platform vehicles',
};

interface AdminVehiclesPageProps {
  searchParams: Promise<TAdminGetCarsQuery>;
}

export default async function AdminVehiclesPage({ searchParams }: AdminVehiclesPageProps) {
  const params = AdminGetCarsQueryDto.safeParse(await searchParams)?.data;

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <VehiclesHeader />

      {/* Stats */}
      <VehiclesStats />

      {/* Filters & Search */}
      <VehiclesTableFilters />

      {/* Vehicles Table */}
      <VehiclesTable params={params} />

      {/* Footer */}
      {/* <VehiclesFooter /> */}
    </div>
  );
}
