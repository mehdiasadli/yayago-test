import { SlidersHorizontal } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { TGetCarsQuery } from '@/features/cars/cars.types';
import BrandSelect from './brand-select';
import LocationSelect from './location-select';
import { Separator } from '../ui/separator';
import CarFiltersToggles from './car-filters-toggles';
import PriceRange from './price-range';
import CarType from './car-type';
import FuelType from './fuel-type';
import TransmissionType from './transmission-type';
import YearRange from './year-range';
import qs from 'qs';
import { useRouter } from 'next/navigation';

interface CarFiltersProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  query: TGetCarsQuery;
  setQuery: (query: TGetCarsQuery) => void;
}

export default function CarFilters({ open, onOpenChange, query, setQuery }: CarFiltersProps) {
  const router = useRouter();

  const handleApply = () => {
    const queryString = qs.stringify(query);
    const url = queryString ? `/cars/rent?${queryString}` : '/cars/rent';
    onOpenChange(false);
    console.log(decodeURIComponent(url));
    router.push(url, { scroll: false });
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button className='relative' type='button'>
          <SlidersHorizontal className='w-5 h-5 mr-2' strokeWidth={2} />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='p-0 overflow-y-auto'>
        <SheetHeader className='flex-shrink-0 p-6 border-b-2 border-gray-200'>
          <div className='flex items-center justify-between'>
            <SheetTitle className='text-2xl font-bold'>Filters</SheetTitle>
          </div>
        </SheetHeader>

        <div className='flex-1 overflow-y-auto p-6'>
          <div className='space-y-6'>
            <div className='flex flex-col gap-4'>
              <BrandSelect brand={query.brand} setBrand={(brand) => setQuery({ ...query, brand })} />
              <LocationSelect location={query.location} setLocation={(location) => setQuery({ ...query, location })} />
              <Separator />
              <CarFiltersToggles
                featuredOnly={query.featuredOnly}
                setFeaturedOnly={(featuredOnly) => setQuery({ ...query, featuredOnly })}
                noDepositOnly={query.noDepositOnly}
                setNoDepositOnly={(noDepositOnly) => setQuery({ ...query, noDepositOnly })}
              />
              <Separator />
              <PriceRange
                priceRange={query.priceRange ?? ([0, 2000] as [number, number])}
                setPriceRange={(priceRange) => setQuery({ ...query, priceRange })}
                minPrice={0}
                maxPrice={2000}
                currency='AED'
              />
              <Separator />
              <CarType carTypes={query.carTypes} setCarTypes={(carTypes) => setQuery({ ...query, carTypes })} />
              <Separator />
              <FuelType fuelTypes={query.fuelTypes} setFuelTypes={(fuelTypes) => setQuery({ ...query, fuelTypes })} />
              <Separator />
              <TransmissionType
                transmissions={query.transmissions}
                setTransmissions={(transmissions) => setQuery({ ...query, transmissions })}
              />
              <Separator />
              <YearRange
                yearRange={query.yearRange ?? [2020, 2025]}
                setYearRange={(yearRange) => setQuery({ ...query, yearRange })}
                minYear={2020}
                maxYear={2024}
              />
            </div>
          </div>
        </div>

        <SheetFooter className='flex-shrink-0 border-t border-gray-200 p-4 flex-col gap-2'>
          <Button className='w-full' onClick={handleApply}>
            Apply Filters
          </Button>
          <Button variant='outline' onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
