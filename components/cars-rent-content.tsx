'use client';

import { useState, useMemo } from 'react';
import { TCar, brands } from '@/data/cars';
import CarCard from './car-card/car-card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import {
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
  ChevronUp,
  ArrowUpDown,
} from 'lucide-react';

interface CarsRentContentProps {
  cars: TCar[];
  locations: Array<{ id: number; key: string; name: string }>;
}

type SortOption = 'price-asc' | 'price-desc' | 'year-desc' | 'year-asc' | 'popular';

export default function CarsRentContent({ cars, locations }: CarsRentContentProps) {
  // Search
  const [searchQuery, setSearchQuery] = useState('');

  // Filters
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedBodyTypes, setSelectedBodyTypes] = useState<string[]>([]);
  const [selectedTransmissions, setSelectedTransmissions] = useState<string[]>([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [yearRange, setYearRange] = useState<[number, number]>([2020, 2024]);
  const [featuredOnly, setFeaturedOnly] = useState(false);

  // Sort
  const [sortBy, setSortBy] = useState<SortOption>('popular');

  // UI State
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'brands',
    'price',
    'bodyType',
    'year',
  ]);

  // Extract unique values for filters
  const bodyTypes = useMemo(() => {
    const types = new Set(cars.map((car) => car.bodyType));
    return Array.from(types).sort();
  }, [cars]);

  const transmissions = useMemo(() => {
    const trans = new Set(cars.map((car) => car.transmission));
    return Array.from(trans).sort();
  }, [cars]);

  const fuelTypes = useMemo(() => {
    const fuels = new Set(cars.map((car) => car.engine));
    return Array.from(fuels).sort();
  }, [cars]);

  const seatOptions = useMemo(() => {
    const seats = new Set(cars.map((car) => car.seats));
    return Array.from(seats).sort((a, b) => a - b);
  }, [cars]);

  // Filter and sort cars
  const filteredAndSortedCars = useMemo(() => {
    let filtered = cars.filter((car) => {
      // Search
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const brandName = brands.find((b) => b.key === car.brand)?.name.toLowerCase() || '';
        const modelName = car.model.toLowerCase();
        const year = car.year.toString();
        if (
          !brandName.includes(query) &&
          !modelName.includes(query) &&
          !year.includes(query) &&
          !car.key.includes(query)
        ) {
          return false;
        }
      }

      // Brand
      if (selectedBrands.length > 0 && !selectedBrands.includes(car.brand)) {
        return false;
      }

      // Body Type
      if (selectedBodyTypes.length > 0 && !selectedBodyTypes.includes(car.bodyType)) {
        return false;
      }

      // Transmission
      if (selectedTransmissions.length > 0 && !selectedTransmissions.includes(car.transmission)) {
        return false;
      }

      // Fuel Type
      if (selectedFuelTypes.length > 0 && !selectedFuelTypes.includes(car.engine)) {
        return false;
      }

      // Location
      if (selectedLocations.length > 0 && !selectedLocations.includes(car.location)) {
        return false;
      }

      // Seats
      if (selectedSeats.length > 0 && !selectedSeats.includes(car.seats)) {
        return false;
      }

      // Price Range
      if (car.pricePerDay < priceRange[0] || car.pricePerDay > priceRange[1]) {
        return false;
      }

      // Year Range
      if (car.year < yearRange[0] || car.year > yearRange[1]) {
        return false;
      }

      // Featured Only
      if (featuredOnly && !car.featured) {
        return false;
      }

      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.pricePerDay - b.pricePerDay;
        case 'price-desc':
          return b.pricePerDay - a.pricePerDay;
        case 'year-desc':
          return b.year - a.year;
        case 'year-asc':
          return a.year - b.year;
        case 'popular':
        default:
          return b.viewCount - a.viewCount;
      }
    });

    return filtered;
  }, [
    cars,
    searchQuery,
    selectedBrands,
    selectedBodyTypes,
    selectedTransmissions,
    selectedFuelTypes,
    selectedLocations,
    selectedSeats,
    priceRange,
    yearRange,
    featuredOnly,
    sortBy,
  ]);

  // Active filters count
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedBrands.length > 0) count++;
    if (selectedBodyTypes.length > 0) count++;
    if (selectedTransmissions.length > 0) count++;
    if (selectedFuelTypes.length > 0) count++;
    if (selectedLocations.length > 0) count++;
    if (selectedSeats.length > 0) count++;
    if (priceRange[0] > 0 || priceRange[1] < 2000) count++;
    if (yearRange[0] > 2020 || yearRange[1] < 2024) count++;
    if (featuredOnly) count++;
    return count;
  }, [
    selectedBrands,
    selectedBodyTypes,
    selectedTransmissions,
    selectedFuelTypes,
    selectedLocations,
    selectedSeats,
    priceRange,
    yearRange,
    featuredOnly,
  ]);

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedBodyTypes([]);
    setSelectedTransmissions([]);
    setSelectedFuelTypes([]);
    setSelectedLocations([]);
    setSelectedSeats([]);
    setPriceRange([0, 2000]);
    setYearRange([2020, 2024]);
    setFeaturedOnly(false);
    setSearchQuery('');
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  const toggleArrayFilter = (array: string[], setArray: (val: string[]) => void, value: string) => {
    setArray(array.includes(value) ? array.filter((v) => v !== value) : [...array, value]);
  };

  const toggleNumberFilter = (array: number[], setArray: (val: number[]) => void, value: number) => {
    setArray(array.includes(value) ? array.filter((v) => v !== value) : [...array, value]);
  };

  // Filter Section Component
  const FilterSection = ({
    title,
    id,
    children,
  }: {
    title: string;
    id: string;
    children: React.ReactNode;
  }) => {
    const isExpanded = expandedSections.includes(id);
    return (
      <div className='border-b-2 border-gray-200 pb-6'>
        <button
          onClick={() => toggleSection(id)}
          className='flex items-center justify-between w-full mb-4 text-left'
        >
          <h3 className='text-lg font-bold text-gray-900'>{title}</h3>
          {isExpanded ? (
            <ChevronUp className='w-5 h-5 text-gray-500' strokeWidth={2} />
          ) : (
            <ChevronDown className='w-5 h-5 text-gray-500' strokeWidth={2} />
          )}
        </button>
        {isExpanded && <div className='space-y-3'>{children}</div>}
      </div>
    );
  };

  // Filters Content
  const FiltersContent = () => (
    <div className='space-y-6'>
      {/* Featured Only */}
      <div className='flex items-center space-x-2 p-4 bg-primary/5 border-2 border-primary/20'>
        <Checkbox
          id='featured-only'
          checked={featuredOnly}
          onCheckedChange={(checked) => setFeaturedOnly(checked as boolean)}
        />
        <Label htmlFor='featured-only' className='text-sm font-semibold text-gray-900 cursor-pointer'>
          Featured Cars Only
        </Label>
      </div>

      {/* Brands */}
      <FilterSection title='Brand' id='brands'>
        <div className='space-y-2 max-h-64 overflow-y-auto'>
          {brands.map((brand) => {
            const count = cars.filter((car) => car.brand === brand.key).length;
            return (
              <div key={brand.key} className='flex items-center space-x-2'>
                <Checkbox
                  id={`brand-${brand.key}`}
                  checked={selectedBrands.includes(brand.key)}
                  onCheckedChange={() => toggleArrayFilter(selectedBrands, setSelectedBrands, brand.key)}
                />
                <Label
                  htmlFor={`brand-${brand.key}`}
                  className='text-sm text-gray-700 cursor-pointer flex-1 flex items-center justify-between'
                >
                  <span>{brand.name}</span>
                  <span className='text-xs text-gray-500'>({count})</span>
                </Label>
              </div>
            );
          })}
        </div>
      </FilterSection>

      {/* Price Range */}
      <FilterSection title='Price per Day (AED)' id='price'>
        <div className='space-y-4'>
          <Slider
            min={0}
            max={2000}
            step={50}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            className='w-full'
          />
          <div className='flex items-center justify-between text-sm font-semibold text-gray-900'>
            <span>₼{priceRange[0]}</span>
            <span>₼{priceRange[1]}</span>
          </div>
        </div>
      </FilterSection>

      {/* Year Range */}
      <FilterSection title='Year' id='year'>
        <div className='space-y-4'>
          <Slider
            min={2020}
            max={2024}
            step={1}
            value={yearRange}
            onValueChange={(value) => setYearRange(value as [number, number])}
            className='w-full'
          />
          <div className='flex items-center justify-between text-sm font-semibold text-gray-900'>
            <span>{yearRange[0]}</span>
            <span>{yearRange[1]}</span>
          </div>
        </div>
      </FilterSection>

      {/* Body Type */}
      <FilterSection title='Body Type' id='bodyType'>
        <div className='space-y-2'>
          {bodyTypes.map((type) => {
            const count = cars.filter((car) => car.bodyType === type).length;
            return (
              <div key={type} className='flex items-center space-x-2'>
                <Checkbox
                  id={`body-${type}`}
                  checked={selectedBodyTypes.includes(type)}
                  onCheckedChange={() => toggleArrayFilter(selectedBodyTypes, setSelectedBodyTypes, type)}
                />
                <Label
                  htmlFor={`body-${type}`}
                  className='text-sm text-gray-700 cursor-pointer flex-1 flex items-center justify-between capitalize'
                >
                  <span>{type.replace('-', ' ')}</span>
                  <span className='text-xs text-gray-500'>({count})</span>
                </Label>
              </div>
            );
          })}
        </div>
      </FilterSection>

      {/* Transmission */}
      <FilterSection title='Transmission' id='transmission'>
        <div className='space-y-2'>
          {transmissions.map((trans) => {
            const count = cars.filter((car) => car.transmission === trans).length;
            return (
              <div key={trans} className='flex items-center space-x-2'>
                <Checkbox
                  id={`trans-${trans}`}
                  checked={selectedTransmissions.includes(trans)}
                  onCheckedChange={() =>
                    toggleArrayFilter(selectedTransmissions, setSelectedTransmissions, trans)
                  }
                />
                <Label
                  htmlFor={`trans-${trans}`}
                  className='text-sm text-gray-700 cursor-pointer flex-1 flex items-center justify-between capitalize'
                >
                  <span>{trans}</span>
                  <span className='text-xs text-gray-500'>({count})</span>
                </Label>
              </div>
            );
          })}
        </div>
      </FilterSection>

      {/* Fuel Type */}
      <FilterSection title='Fuel Type' id='fuelType'>
        <div className='space-y-2'>
          {fuelTypes.map((fuel) => {
            const count = cars.filter((car) => car.engine === fuel).length;
            return (
              <div key={fuel} className='flex items-center space-x-2'>
                <Checkbox
                  id={`fuel-${fuel}`}
                  checked={selectedFuelTypes.includes(fuel)}
                  onCheckedChange={() => toggleArrayFilter(selectedFuelTypes, setSelectedFuelTypes, fuel)}
                />
                <Label
                  htmlFor={`fuel-${fuel}`}
                  className='text-sm text-gray-700 cursor-pointer flex-1 flex items-center justify-between capitalize'
                >
                  <span>{fuel.replace('-', ' ')}</span>
                  <span className='text-xs text-gray-500'>({count})</span>
                </Label>
              </div>
            );
          })}
        </div>
      </FilterSection>

      {/* Seats */}
      <FilterSection title='Seats' id='seats'>
        <div className='space-y-2'>
          {seatOptions.map((seat) => {
            const count = cars.filter((car) => car.seats === seat).length;
            return (
              <div key={seat} className='flex items-center space-x-2'>
                <Checkbox
                  id={`seat-${seat}`}
                  checked={selectedSeats.includes(seat)}
                  onCheckedChange={() => toggleNumberFilter(selectedSeats, setSelectedSeats, seat)}
                />
                <Label
                  htmlFor={`seat-${seat}`}
                  className='text-sm text-gray-700 cursor-pointer flex-1 flex items-center justify-between'
                >
                  <span>{seat} Seats</span>
                  <span className='text-xs text-gray-500'>({count})</span>
                </Label>
              </div>
            );
          })}
        </div>
      </FilterSection>

      {/* Location */}
      <FilterSection title='Location' id='location'>
        <div className='space-y-2 max-h-64 overflow-y-auto'>
          {locations.map((location) => {
            const count = cars.filter((car) => car.location === location.key).length;
            if (count === 0) return null;
            return (
              <div key={location.key} className='flex items-center space-x-2'>
                <Checkbox
                  id={`location-${location.key}`}
                  checked={selectedLocations.includes(location.key)}
                  onCheckedChange={() =>
                    toggleArrayFilter(selectedLocations, setSelectedLocations, location.key)
                  }
                />
                <Label
                  htmlFor={`location-${location.key}`}
                  className='text-sm text-gray-700 cursor-pointer flex-1 flex items-center justify-between'
                >
                  <span>{location.name}</span>
                  <span className='text-xs text-gray-500'>({count})</span>
                </Label>
              </div>
            );
          })}
        </div>
      </FilterSection>
    </div>
  );

  return (
    <div className='max-w-[1920px] mx-auto px-6 lg:px-8 py-8'>
      <div className='flex gap-8'>
        {/* Desktop Sidebar */}
        <aside className='hidden lg:block w-80 flex-shrink-0'>
          <div className='sticky top-24 bg-white border-2 border-gray-200 p-6 max-h-[calc(100vh-120px)] overflow-y-auto'>
            {/* Header */}
            <div className='flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-200'>
              <div>
                <h2 className='text-2xl font-bold text-gray-900'>Filters</h2>
                {activeFiltersCount > 0 && (
                  <span className='text-sm text-gray-600 mt-1 block'>
                    {activeFiltersCount} active filter{activeFiltersCount !== 1 ? 's' : ''}
                  </span>
                )}
              </div>
              {activeFiltersCount > 0 && (
                <Button
                  onClick={clearAllFilters}
                  variant='ghost'
                  size='sm'
                  className='text-red-600 hover:text-red-700 hover:bg-red-50'
                >
                  Clear All
                </Button>
              )}
            </div>

            <FiltersContent />
          </div>
        </aside>

        {/* Main Content */}
        <main className='flex-1 min-w-0'>
          {/* Search and Sort Bar */}
          <div className='bg-white border-2 border-gray-200 p-4 mb-6'>
            <div className='flex flex-col sm:flex-row gap-4'>
              {/* Search */}
              <div className='relative flex-1'>
                <Search
                  className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400'
                  strokeWidth={2}
                />
                <Input
                  type='text'
                  placeholder='Search by brand, model, or year...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='pl-10 h-12 border-2 border-gray-300 focus:border-primary'
                />
              </div>

              {/* Sort */}
              <div className='flex gap-2'>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className='px-4 h-12 border-2 border-gray-300 bg-white text-gray-900 font-medium focus:border-primary focus:outline-none cursor-pointer'
                >
                  <option value='popular'>Most Popular</option>
                  <option value='price-asc'>Price: Low to High</option>
                  <option value='price-desc'>Price: High to Low</option>
                  <option value='year-desc'>Year: Newest First</option>
                  <option value='year-asc'>Year: Oldest First</option>
                </select>

                {/* Mobile Filter Button */}
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant='outline' className='lg:hidden h-12 border-2 relative'>
                      <SlidersHorizontal className='w-5 h-5 mr-2' strokeWidth={2} />
                      Filters
                      {activeFiltersCount > 0 && (
                        <span className='absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-xs font-bold flex items-center justify-center rounded-full'>
                          {activeFiltersCount}
                        </span>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side='left' className='w-full sm:w-96 p-0 overflow-y-auto'>
                    <SheetHeader className='p-6 border-b-2 border-gray-200'>
                      <div className='flex items-center justify-between'>
                        <div>
                          <SheetTitle className='text-2xl font-bold'>Filters</SheetTitle>
                          {activeFiltersCount > 0 && (
                            <span className='text-sm text-gray-600 mt-1 block'>
                              {activeFiltersCount} active filter{activeFiltersCount !== 1 ? 's' : ''}
                            </span>
                          )}
                        </div>
                        {activeFiltersCount > 0 && (
                          <Button
                            onClick={clearAllFilters}
                            variant='ghost'
                            size='sm'
                            className='text-red-600 hover:text-red-700 hover:bg-red-50'
                          >
                            Clear All
                          </Button>
                        )}
                      </div>
                    </SheetHeader>
                    <div className='p-6'>
                      <FiltersContent />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>

            {/* Active Filter Tags */}
            {activeFiltersCount > 0 && (
              <div className='flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200'>
                {selectedBrands.map((brand) => {
                  const brandName = brands.find((b) => b.key === brand)?.name;
                  return (
                    <button
                      key={`tag-${brand}`}
                      onClick={() => toggleArrayFilter(selectedBrands, setSelectedBrands, brand)}
                      className='inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors'
                    >
                      {brandName}
                      <X className='w-3 h-3' strokeWidth={2} />
                    </button>
                  );
                })}
                {selectedBodyTypes.map((type) => (
                  <button
                    key={`tag-${type}`}
                    onClick={() => toggleArrayFilter(selectedBodyTypes, setSelectedBodyTypes, type)}
                    className='inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors capitalize'
                  >
                    {type.replace('-', ' ')}
                    <X className='w-3 h-3' strokeWidth={2} />
                  </button>
                ))}
                {featuredOnly && (
                  <button
                    onClick={() => setFeaturedOnly(false)}
                    className='inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors'
                  >
                    Featured Only
                    <X className='w-3 h-3' strokeWidth={2} />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className='mb-6'>
            <p className='text-lg font-semibold text-gray-900'>
              {filteredAndSortedCars.length} {filteredAndSortedCars.length === 1 ? 'car' : 'cars'} found
            </p>
          </div>

          {/* Cars Grid */}
          {filteredAndSortedCars.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6'>
              {filteredAndSortedCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className='text-center py-20 bg-white border-2 border-gray-200'>
              <div className='max-w-md mx-auto'>
                <div className='w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <Search className='w-10 h-10 text-gray-400' strokeWidth={2} />
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-3'>No cars found</h3>
                <p className='text-gray-600 mb-6'>
                  Try adjusting your filters or search criteria to find more vehicles.
                </p>
                <Button onClick={clearAllFilters} className='h-12'>
                  Clear All Filters
                </Button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

