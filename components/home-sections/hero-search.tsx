'use client';

import { Card, CardContent } from '../ui/card';
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group';
import { Search, MapPin, Car, Filter } from 'lucide-react';
import { Button } from '../ui/button';
import FiltersDialog from '../filters-dialog';
import Link from 'next/link';

export default function HeroSearch() {
  return (
    <Card className='bg-white/10 backdrop-blur-3xl border-b p-0 border-white/20 shadow-lg text-white mt-6 sm:mt-8 w-full max-w-4xl'>
      <CardContent className='p-3 sm:p-0 h-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4'>
        <InputGroup className='border-none outline-none ring-0 h-full shadow-none'>
          <InputGroupInput
            placeholder='Search for a location'
            className='text-white placeholder:text-white/50 h-14 sm:h-16 w-full sm:w-64 md:w-80 border-none outline-none ring-0'
          />

          <InputGroupAddon>
            <MapPin className='text-white' />
          </InputGroupAddon>
        </InputGroup>

        <InputGroup className='border-none outline-none ring-0 h-full shadow-none'>
          <InputGroupInput
            placeholder='Search for a car, brands, etc.'
            className='text-white placeholder:text-white/50 h-14 sm:h-16 w-full sm:w-64 md:w-80 border-none outline-none ring-0'
          />

          <InputGroupAddon>
            <Car className='text-white' />
          </InputGroupAddon>
        </InputGroup>

        <div className='flex items-center gap-0'>
          <FiltersDialog>
            <Button
              className='h-14 sm:h-16 flex-1 sm:flex-none sm:w-30 text-white bg-transparent border-none shadow-none hover:text-primary/80 hover:bg-white'
              variant='outline'
            >
              <Filter />
              Filters
            </Button>
          </FiltersDialog>

          <Link href='/cars/rent'>
            <Button className='h-14 sm:h-16 w-14 sm:w-16 text-white'>
              <Search />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
