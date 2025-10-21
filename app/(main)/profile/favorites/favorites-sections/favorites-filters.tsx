import { Search } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';

export default function FavoritesFilters() {
  return (
    <div className='bg-white border-2 border-gray-200 p-6'>
      <div className='flex flex-col md:flex-row gap-4'>
        {/* Search */}
        <InputGroup className='flex-1 relative'>
          <InputGroupInput type='text' placeholder='Search your favorites...' />
          <InputGroupAddon>
            <Search className='w-5 h-5 text-gray-400' strokeWidth={2} />{' '}
          </InputGroupAddon>
        </InputGroup>

        {/* Availability Filter */}
        <Select>
          <SelectTrigger>
            <SelectValue placeholder='All Cars' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>All Cars</SelectItem>
            <SelectItem value='available'>Available Only</SelectItem>
            <SelectItem value='not-available'>Not Available</SelectItem>
          </SelectContent>
        </Select>

        {/* Sort */}
        <Select>
          <SelectTrigger>
            <SelectValue placeholder='Sort by: Recent' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='recent'>Sort by: Recent</SelectItem>
            <SelectItem value='price-low-to-high'>Sort by: Price (Low to High)</SelectItem>
            <SelectItem value='price-high-to-low'>Sort by: Price (High to Low)</SelectItem>
            <SelectItem value='rating'>Sort by: Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
