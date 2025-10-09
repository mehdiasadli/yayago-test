'use client';

import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { FilterState } from './filters-dialog';

interface SearchFiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  onReset: () => void;
}

// Filter options
const BODY_TYPES = ['Sedan', 'SUV', 'Coupe', 'Hatchback', 'Convertible', 'Van', 'Truck', 'Wagon', 'Off-road', 'Pickup'];
const CLASSES = ['Economy', 'Luxury', 'Sport', 'Premium', 'Standard', 'Hypercar', 'Other'];
const TRANSMISSIONS = ['Automatic', 'Manual', 'Other'];
const FUEL_TYPES = ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid'];
const BRANDS = [
  'Mercedes-Benz',
  'BMW',
  'Toyota',
  'Nissan',
  'Range Rover',
  'Porsche',
  'Tesla',
  'Chevrolet',
  'Hyundai',
  'Ford',
];

export default function SearchFilters({ filters, setFilters, onReset }: SearchFiltersProps) {
  const updateFilter = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className='w-full space-y-6'>
      {/* Header */}
      <div className='flex items-center justify-between mb-6'>
        <div>
          <h3 className='text-xl font-bold text-white'>Advanced Filters</h3>
          <p className='text-sm text-white/60 mt-1'>Refine your search results</p>
        </div>
        <Button
          variant='ghost'
          size='sm'
          onClick={onReset}
          className='text-white/70 hover:text-white hover:bg-white/10'
        >
          Reset All
        </Button>
      </div>

      {/* Filters Grid */}
      <div className='grid grid-cols-2 gap-6'>
        {/* Min Price */}
        <div className='space-y-2'>
          <Label htmlFor='min-price' className='text-sm font-semibold text-white/80 tracking-wider uppercase'>
            Min Price (AED/Day)
          </Label>
          <Input
            id='min-price'
            type='number'
            placeholder='0'
            value={filters.minPrice}
            onChange={(e) => updateFilter('minPrice', e.target.value)}
            className='w-full h-12 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/40 hover:bg-white/15 focus:bg-white/15 focus:border-primary'
          />
        </div>

        {/* Max Price */}
        <div className='space-y-2'>
          <Label htmlFor='max-price' className='text-sm font-semibold text-white/80 tracking-wider uppercase'>
            Max Price (AED/Day)
          </Label>
          <Input
            id='max-price'
            type='number'
            placeholder='2000'
            value={filters.maxPrice}
            onChange={(e) => updateFilter('maxPrice', e.target.value)}
            className='w-full h-12 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/40 hover:bg-white/15 focus:bg-white/15 focus:border-primary'
          />
        </div>

        {/* Brand */}
        <div className='space-y-2'>
          <Label htmlFor='brand' className='text-sm font-semibold text-white/80 tracking-wider uppercase'>
            Brand
          </Label>
          <Select value={filters.brand} onValueChange={(value) => updateFilter('brand', value)}>
            <SelectTrigger
              id='brand'
              className='w-full h-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 focus:bg-white/15 focus:border-primary [&>span]:text-white'
            >
              <SelectValue placeholder='Select brand' />
            </SelectTrigger>
            <SelectContent>
              {BRANDS.map((brand) => (
                <SelectItem key={brand} value={brand.toLowerCase().replace(/\s+/g, '-')}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Body Type */}
        <div className='space-y-2'>
          <Label htmlFor='body-type' className='text-sm font-semibold text-white/80 tracking-wider uppercase'>
            Body Type
          </Label>
          <Select value={filters.bodyType} onValueChange={(value) => updateFilter('bodyType', value)}>
            <SelectTrigger
              id='body-type'
              className='w-full h-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 focus:bg-white/15 focus:border-primary [&>span]:text-white'
            >
              <SelectValue placeholder='Select body type' />
            </SelectTrigger>
            <SelectContent>
              {BODY_TYPES.map((type) => (
                <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Class */}
        <div className='space-y-2'>
          <Label htmlFor='class' className='text-sm font-semibold text-white/80 tracking-wider uppercase'>
            Class
          </Label>
          <Select value={filters.classType} onValueChange={(value) => updateFilter('classType', value)}>
            <SelectTrigger
              id='class'
              className='w-full h-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 focus:bg-white/15 focus:border-primary [&>span]:text-white'
            >
              <SelectValue placeholder='Select class' />
            </SelectTrigger>
            <SelectContent>
              {CLASSES.map((cls) => (
                <SelectItem key={cls} value={cls.toLowerCase()}>
                  {cls}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Transmission */}
        <div className='space-y-2'>
          <Label htmlFor='transmission' className='text-sm font-semibold text-white/80 tracking-wider uppercase'>
            Transmission
          </Label>
          <Select value={filters.transmission} onValueChange={(value) => updateFilter('transmission', value)}>
            <SelectTrigger
              id='transmission'
              className='w-full h-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 focus:bg-white/15 focus:border-primary [&>span]:text-white'
            >
              <SelectValue placeholder='Select transmission' />
            </SelectTrigger>
            <SelectContent>
              {TRANSMISSIONS.map((trans) => (
                <SelectItem key={trans} value={trans.toLowerCase()}>
                  {trans}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Fuel Type */}
        <div className='space-y-2'>
          <Label htmlFor='fuel' className='text-sm font-semibold text-white/80 tracking-wider uppercase'>
            Fuel Type
          </Label>
          <Select value={filters.fuelType} onValueChange={(value) => updateFilter('fuelType', value)}>
            <SelectTrigger
              id='fuel'
              className='w-full h-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 focus:bg-white/15 focus:border-primary [&>span]:text-white'
            >
              <SelectValue placeholder='Select fuel type' />
            </SelectTrigger>
            <SelectContent>
              {FUEL_TYPES.map((fuel) => (
                <SelectItem key={fuel} value={fuel.toLowerCase().replace(/\s+/g, '-')}>
                  {fuel}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Min Year */}
        <div className='space-y-2'>
          <Label htmlFor='min-year' className='text-sm font-semibold text-white/80 tracking-wider uppercase'>
            Min Year
          </Label>
          <Input
            id='min-year'
            type='number'
            placeholder='2020'
            value={filters.minYear}
            onChange={(e) => updateFilter('minYear', e.target.value)}
            className='w-full h-12 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/40 hover:bg-white/15 focus:bg-white/15 focus:border-primary'
          />
        </div>

        {/* Max Year */}
        <div className='space-y-2'>
          <Label htmlFor='max-year' className='text-sm font-semibold text-white/80 tracking-wider uppercase'>
            Max Year
          </Label>
          <Input
            id='max-year'
            type='number'
            placeholder='2024'
            value={filters.maxYear}
            onChange={(e) => updateFilter('maxYear', e.target.value)}
            className='w-full h-12 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/40 hover:bg-white/15 focus:bg-white/15 focus:border-primary'
          />
        </div>
      </div>
    </div>
  );
}
