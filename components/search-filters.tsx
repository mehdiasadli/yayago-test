'use client';

import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { X } from 'lucide-react';

interface SearchFiltersProps {
  onClose?: () => void;
}

// Filter options
const BODY_TYPES = ['Sedan', 'SUV', 'Coupe', 'Hatchback', 'Convertible', 'Van', 'Truck', 'Wagon'];
const CLASSES = ['Economy', 'Luxury', 'Sport', 'Premium', 'Compact', 'Mid-size', 'Full-size'];
const TRANSMISSIONS = ['Automatic', 'Manual', 'CVT', 'Semi-Automatic'];
const INSURANCE_OPTIONS = ['Basic', 'Standard', 'Comprehensive', 'Premium'];
const FUEL_TYPES = ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid'];
const DRIVE_TYPES = ['FWD', 'RWD', 'AWD', '4WD'];
const BRANDS = [
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Toyota',
  'Honda',
  'Nissan',
  'Ford',
  'Chevrolet',
  'Porsche',
  'Tesla',
  'Lexus',
  'Range Rover',
  'Jaguar',
  'Volkswagen',
  'Hyundai',
  'Kia',
  'Mazda',
  'Volvo',
];

export default function SearchFilters({ onClose }: SearchFiltersProps) {
  const handleReset = () => {
    // Reset all filters logic here
    console.log('Reset filters');
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
          onClick={handleReset}
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
            placeholder='10000'
            className='w-full h-12 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/40 hover:bg-white/15 focus:bg-white/15 focus:border-primary'
          />
        </div>

        {/* Brand */}
        <div className='space-y-2'>
          <Label htmlFor='brand' className='text-sm font-semibold text-white/80 tracking-wider uppercase'>
            Brand
          </Label>
          <Select>
            <SelectTrigger
              id='brand'
              className='w-full h-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 focus:bg-white/15 focus:border-primary [&>span]:text-white'
            >
              <SelectValue placeholder='Select brand' />
            </SelectTrigger>
            <SelectContent>
              {BRANDS.map((brand) => (
                <SelectItem key={brand} value={brand.toLowerCase()}>
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
          <Select>
            <SelectTrigger
              id='body-type'
              className='w-full h-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 focus:bg-white/15 focus:border-primary [&>span]:text-white'
            >
              <SelectValue placeholder='Select body type' />
            </SelectTrigger>
            <SelectContent>
              {BODY_TYPES.map((type) => (
                <SelectItem key={type} value={type.toLowerCase()}>
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
          <Select>
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
          <Select>
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
          <Select>
            <SelectTrigger
              id='fuel'
              className='w-full h-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 focus:bg-white/15 focus:border-primary [&>span]:text-white'
            >
              <SelectValue placeholder='Select fuel type' />
            </SelectTrigger>
            <SelectContent>
              {FUEL_TYPES.map((fuel) => (
                <SelectItem key={fuel} value={fuel.toLowerCase()}>
                  {fuel}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Drive Type */}
        <div className='space-y-2'>
          <Label htmlFor='drive' className='text-sm font-semibold text-white/80 tracking-wider uppercase'>
            Drive Type
          </Label>
          <Select>
            <SelectTrigger
              id='drive'
              className='w-full h-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 focus:bg-white/15 focus:border-primary [&>span]:text-white'
            >
              <SelectValue placeholder='Select drive type' />
            </SelectTrigger>
            <SelectContent>
              {DRIVE_TYPES.map((drive) => (
                <SelectItem key={drive} value={drive.toLowerCase()}>
                  {drive}
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
            placeholder='2018'
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
            className='w-full h-12 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/40 hover:bg-white/15 focus:bg-white/15 focus:border-primary'
          />
        </div>
      </div>
    </div>
  );
}
