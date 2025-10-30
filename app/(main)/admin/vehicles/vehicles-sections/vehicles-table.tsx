import { AdminCarManagementApi } from '@/features/admin-car-management/admin-car-management.api';
import { TAdminGetCarsQuery } from '@/features/admin-car-management/admin-car-management.types';
import VehiclesTableRow from './vehicles-table-row';
import VehiclesTablePagination from './vehicles-table-pagination';

interface VehiclesTableProps {
  params?: TAdminGetCarsQuery;
}

export default async function VehiclesTable({ params }: VehiclesTableProps) {
  const vehiclesData = await AdminCarManagementApi.getCars(params ?? {});

  if (!vehiclesData.success) {
    return null;
  }

  const vehicles = vehiclesData.data;

  return (
    <div className='bg-white border-2 border-gray-200 overflow-hidden'>
      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Vehicle</th>
              <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Owner</th>
              <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Category</th>
              <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Status</th>
              <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                Popularity
              </th>
              <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
                Performance
              </th>
              <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Pricing</th>
              <th className='px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Actions</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y-2 divide-gray-100'>
            {vehicles.map((car) => {
              return <VehiclesTableRow key={car.id} car={car} />;
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <VehiclesTablePagination />
    </div>
  );
}
