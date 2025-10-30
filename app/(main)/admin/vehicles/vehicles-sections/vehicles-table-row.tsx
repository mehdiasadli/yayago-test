import { Button } from '@/components/ui/button';
import { TAdminGetCarsResponse } from '@/features/admin-car-management/admin-car-management.types';
import { TCarStatus } from '@/features/cars/cars.types';
import {
  Ban,
  Calendar,
  Car,
  CheckCircle,
  CircleHelp,
  Clock,
  Edit,
  Eye,
  Heart,
  MapPin,
  MessageCircle,
  Star,
  XCircle,
} from 'lucide-react';
import Link from 'next/link';
import VehiclesTableDelete from './vehicles-table-delete';

interface VehiclesTableRowProps {
  car: TAdminGetCarsResponse[number];
}

function getStatusInfo(status?: TCarStatus | null) {
  switch (status) {
    case 'PENDING':
      return {
        text: 'Pending',
        color: 'bg-yellow-100 text-yellow-700',
        Icon: Clock,
      };
    case 'AVAILABLE':
      return {
        text: 'Active',
        color: 'bg-green-100 text-green-700',
        Icon: CheckCircle,
      };
    case 'REJECTED':
      return {
        text: 'Rejected',
        color: 'bg-red-100 text-red-700',
        Icon: XCircle,
      };
    case 'BLOCKED':
      return {
        text: 'Blocked',
        color: 'bg-red-100 text-red-700',
        Icon: Ban,
      };
    case 'INACTIVE':
      return {
        text: 'Inactive',
        color: 'bg-gray-100 text-gray-700',
        Icon: XCircle,
      };
    case 'OCCUPIED':
      return {
        text: 'Occupied',
        color: 'bg-blue-100 text-blue-700',
        Icon: Car,
      };
    case 'DISABLED':
      return {
        text: 'Disabled',
        color: 'bg-gray-100 text-gray-700',
        Icon: XCircle,
      };
    case 'APPROVED':
      return {
        text: 'Approved',
        color: 'bg-green-100 text-green-700',
        Icon: CheckCircle,
      };
    default:
      return {
        text: 'Unknown',
        color: 'bg-gray-100 text-gray-700',
        Icon: CircleHelp,
      };
  }
}

export default function VehiclesTableRow({ car }: VehiclesTableRowProps) {
  const {
    id,
    brand,
    model,
    year,
    carType,
    status,
    featured,
    viewCount,
    averageRating,
    reviewCount,
    pricePerDay,
    pricePerMonth,
    pricePerWeek,
    favoritesCount,
    currency,
  } = car;

  console.log(car);

  const name = `${brand} ${model}`;
  const { Icon: StatusIcon, text, color } = getStatusInfo(status);

  return (
    <tr key={id} className='hover:bg-gray-50'>
      <td className='px-6 py-4'>
        <div className='flex items-center gap-3'>
          <div>
            <div className='font-semibold text-gray-900'>{name}</div>
            <div className='text-sm text-gray-600'>
              {year} • {featured ? 'Featured' : 'Not Featured'}
            </div>
            <div className='text-xs text-gray-500'>Unknown added date</div>
          </div>
        </div>
      </td>
      <td className='px-6 py-4'>
        <div className='flex items-center gap-2'>
          <div>
            <div className='text-sm font-semibold text-gray-900'>Unknown owner</div>
            <div className='text-xs text-gray-500 flex items-center gap-1'>
              <MapPin className='w-3 h-3' strokeWidth={2} />
              Unknown location
            </div>
          </div>
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm font-semibold text-gray-900'>{carType || 'Unknown'}</div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase ${color}`}>
          <StatusIcon className='w-3 h-3' strokeWidth={2} />
          {text}
        </div>
      </td>
      {/* Popularity */}
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='grid grid-cols-2 gap-1 text-xs'>
          <div className='flex items-center justify-center gap-1 bg-gray-100 p-1 border border-gray-200'>
            <Eye className='w-3 h-3' strokeWidth={2} /> <span>{viewCount || 0}</span>
          </div>
          <div className='flex items-center justify-center gap-1 bg-gray-100 p-1 border border-gray-200'>
            <MessageCircle className='w-3 h-3' strokeWidth={2} /> <span>{reviewCount || 0}</span>
          </div>
          <div className='flex items-center justify-center gap-1 bg-gray-100 p-1 border border-gray-200'>
            <Heart className='w-3 h-3' strokeWidth={2} /> <span>{favoritesCount || 0}</span>
          </div>
          {reviewCount && reviewCount > 0 && (
            <div className='flex items-center justify-center gap-1 bg-gray-100 p-1 border border-gray-200'>
              <Star className='w-3 h-3' strokeWidth={2} /> <span>{averageRating || 'N/A'}</span>
            </div>
          )}
        </div>
      </td>
      <td className='px-6 py-4'>
        <div className='text-sm space-y-1'>
          <div className='flex items-center gap-2'>
            <Calendar className='w-4 h-4 text-gray-400' strokeWidth={2} />
            <span className='text-gray-700'>Unknown bookings</span>
          </div>
          <div className='flex items-center gap-2'>
            <Star className='w-4 h-4 text-yellow-500 fill-yellow-500' strokeWidth={2} />
            <span className='text-gray-700'>{averageRating || 'N/A'}</span>
          </div>
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div>
          <div className='font-bold text-gray-900'>
            {pricePerDay} {currency}/day
          </div>
          {/* <div className='text-xs text-gray-500'>₼{vehicle.revenue} earned</div> */}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='flex items-center gap-2'>
          <Button
            asChild
            variant='ghost'
            className='w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors'
          >
            <Link href={`/cars/rent/${id}`} target='_blank'>
              <Eye className='w-4 h-4' strokeWidth={2} />
            </Link>
          </Button>
          {/* <Button
            variant='ghost'
            className='w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors'
          >
            <Edit className='w-4 h-4' strokeWidth={2} />
          </Button> */}
          <VehiclesTableDelete carId={id} />
        </div>
      </td>
    </tr>
  );
}
