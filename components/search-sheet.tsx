'use client';

import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group';
import { MapPin, Car } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchFilters from './search-filters';
import { FilterState } from './filters-dialog';

export default function SearchSheet() {
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [carQuery, setCarQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    minPrice: '',
    maxPrice: '',
    brand: '',
    bodyType: '',
    classType: '',
    transmission: '',
    fuelType: '',
    driveType: '',
    minYear: '',
    maxYear: '',
  });

  const handleReset = () => {
    setFilters({
      minPrice: '',
      maxPrice: '',
      brand: '',
      bodyType: '',
      classType: '',
      transmission: '',
      fuelType: '',
      driveType: '',
      minYear: '',
      maxYear: '',
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (carQuery) params.set('q', carQuery);
    if (location) params.set('location', location.toLowerCase().replace(/\s+/g, '-'));
    if (filters.minPrice) params.set('minPrice', filters.minPrice);
    if (filters.maxPrice) params.set('maxPrice', filters.maxPrice);
    if (filters.brand) params.set('brand', filters.brand);
    if (filters.transmission) params.set('transmission', filters.transmission);
    if (filters.fuelType) params.set('fuel', filters.fuelType);
    if (filters.minYear) params.set('minYear', filters.minYear);
    if (filters.maxYear) params.set('maxYear', filters.maxYear);

    const queryString = params.toString();
    const url = queryString ? `/cars/rent?${queryString}` : '/cars/rent';

    router.push(url);
  };

  return (
    <div className='px-6 pb-8'>
      {/* Search Form */}
      <form id='search-form' onSubmit={handleSearch} className='space-y-6'>
        {/* Location Input */}
        <div className='relative group'>
          <label htmlFor='location' className='block text-xs font-semibold text-white/80 mb-2 tracking-wider uppercase'>
            Location
          </label>
          <InputGroup className='border-none outline-none ring-0 shadow-none bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 focus-within:bg-white/15 transition-all rounded-xl'>
            <InputGroupInput
              id='location'
              placeholder='Search for a location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className='text-white placeholder:text-white/50 h-14 md:h-16 border-none outline-none ring-0 bg-transparent'
            />
            <InputGroupAddon>
              <MapPin className='text-white/60 group-focus-within:text-primary transition-colors' />
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Car Search Input */}
        <div className='relative group'>
          <label
            htmlFor='car-query'
            className='block text-xs font-semibold text-white/80 mb-2 tracking-wider uppercase'
          >
            Car, Brand, or Type
          </label>
          <InputGroup className='border-none outline-none ring-0 shadow-none bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 focus-within:bg-white/15 transition-all rounded-xl'>
            <InputGroupInput
              id='car-query'
              placeholder='Search for a car, brand, or type'
              value={carQuery}
              onChange={(e) => setCarQuery(e.target.value)}
              className='text-white placeholder:text-white/50 h-14 md:h-16 border-none outline-none ring-0 bg-transparent'
            />
            <InputGroupAddon>
              <Car className='text-white/60 group-focus-within:text-primary transition-colors' />
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Advanced Filters */}
        <div className='pt-2'>
          <SearchFilters filters={filters} setFilters={setFilters} onReset={handleReset} />
        </div>
      </form>
    </div>
  );
}
