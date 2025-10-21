import { MapPin } from 'lucide-react';

interface ListingCardDetailsProps {
  brand: string;
  model: string;
  year: number;
  carType: string;
  fuelType: string;
  location: string;
  transmission: string;
}

export default function ListingCardDetails({
  brand,
  model,
  year,
  carType,
  fuelType,
  location,
  transmission,
}: ListingCardDetailsProps) {
  return (
    <div>
      <h3 className='text-2xl font-bold text-gray-900 mb-1'>
        {brand} {model} {year}
      </h3>
      <p className='text-gray-600'>
        {carType} • {fuelType} • {transmission}
      </p>
      <div className='flex items-center gap-2 mt-2 text-sm text-gray-600'>
        <MapPin className='w-4 h-4' strokeWidth={2} />
        {location}
      </div>
    </div>
  );
}
