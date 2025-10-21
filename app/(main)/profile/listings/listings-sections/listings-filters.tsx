import { Search } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';

export default function ListingsFilters() {
  return (
    <div className='bg-white border-2 border-gray-200 p-6'>
      <div className='flex flex-col md:flex-row gap-4'>
        {/* Search */}
        <InputGroup className='flex-1 relative'>
          <InputGroupInput placeholder='Search by car name, type, or location...' />
          <InputGroupAddon>
            <Search className='w-5 h-5 text-gray-400' strokeWidth={2} />
          </InputGroupAddon>
        </InputGroup>

        {/* Status Filter */}
        <Select>
          <SelectTrigger className='px-4 py-2 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
            <SelectValue placeholder='Status' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>All Status</SelectItem>
            <SelectItem value='active'>Active</SelectItem>
            <SelectItem value='rented'>Rented</SelectItem>
            <SelectItem value='pending'>Pending</SelectItem>
            <SelectItem value='inactive'>Inactive</SelectItem>
          </SelectContent>
        </Select>

        {/* Sort */}
        <Select>
          <SelectTrigger className='px-4 py-2 border-2 border-gray-200 focus:border-primary focus:outline-none bg-white'>
            <SelectValue placeholder='Sort by' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='recent'>Sort by: Recent</SelectItem>
            <SelectItem value='views'>Sort by: Views</SelectItem>
            <SelectItem value='earnings'>Sort by: Earnings</SelectItem>
            <SelectItem value='rating'>Sort by: Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
