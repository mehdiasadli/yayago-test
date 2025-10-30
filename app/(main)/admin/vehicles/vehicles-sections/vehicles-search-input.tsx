'use client';

import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { useDebouncedValue } from '@/hooks/use-debounce-value';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface VehiclesSearchInputProps {
  initialSearchTerm?: string;
}

export default function VehiclesSearchInput({ initialSearchTerm }: VehiclesSearchInputProps) {
  const [search, setSearch] = useState(initialSearchTerm ?? '');
  const [debouncedSearch] = useDebouncedValue(search, 500);
  const router = useRouter();

  useEffect(() => {
    if (!debouncedSearch) return;

    const params = new URLSearchParams(window.location.search);

    params.set('searchTerm', debouncedSearch);
    const url = params.toString() ? `/admin/vehicles?${params.toString()}` : '/admin/vehicles';
    router.push(url, { scroll: false });
  }, [debouncedSearch]);

  useEffect(() => {
    if (!search) {
      const params = new URLSearchParams(window.location.search);
      params.delete('searchTerm');
      const url = params.toString() ? `/admin/vehicles?${params.toString()}` : '/admin/vehicles';
      router.push(url, { scroll: false });
    }
  }, [search]);

  return (
    <InputGroup>
      <InputGroupInput
        placeholder='Search vehicles by name, model, etc...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <InputGroupAddon>
        <Search className='w-5 h-5 text-gray-400' strokeWidth={2} />
      </InputGroupAddon>
    </InputGroup>
  );
}
