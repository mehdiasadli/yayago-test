'use client';

import { Card, CardContent } from '../ui/card';
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group';
import { Search, Car } from 'lucide-react';
import { Button } from '../ui/button';
// import FiltersDialog from '../filters-dialog';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HeroSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.set('q', searchQuery);
    const url = params.toString() ? `/cars/rent?${params.toString()}` : '/cars/rent';
    router.push(url);
  };

  return (
    <Card className='bg-white/10 backdrop-blur-3xl border-b p-0 border-white/20 shadow-lg text-white mt-6 sm:mt-8 w-full max-w-4xl'>
      <CardContent className='p-3 sm:p-0 h-full flex flex-col sm:flex-row items-stretch sm:items-center '>
        {/* <InputGroup className='border-none outline-none ring-0 h-full shadow-none'>
          <InputGroupInput
            placeholder='Search for a location'
            className='text-white placeholder:text-white/50 h-14 sm:h-16 w-full sm:w-64 md:w-80 border-none outline-none ring-0'
          />

          <InputGroupAddon>
            <MapPin className='text-white' />
          </InputGroupAddon>
        </InputGroup> */}

        <InputGroup className='border-none outline-none ring-0 h-full shadow-none'>
          <InputGroupInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
            placeholder='Search for a car, brands, etc.'
            className='text-white placeholder:text-white/50 h-14 sm:h-16 w-full sm:w-64 md:w-80 border-none outline-none ring-0'
          />

          <InputGroupAddon>
            <Car className='text-white' />
          </InputGroupAddon>
        </InputGroup>

        <div className='flex items-center gap-0'>
          {/* <FiltersDialog>
            <Button
              className='h-14 sm:h-16 flex-1 sm:flex-none sm:w-30 text-white bg-transparent border-none shadow-none hover:text-primary/80 hover:bg-white'
              variant='outline'
            >
              <Filter />
              Filters
            </Button>
          </FiltersDialog> */}

          <Button onClick={handleSearch} className='h-14 sm:h-16 w-14 sm:w-16 text-white'>
            <Search />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
