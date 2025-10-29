'use client';

import UsersSearchInput from './users-search-input';
import { TAdminGetUsersQuery } from '@/features/admin-user-management/admin-user-management.types';
import { useEffect, useId, useState } from 'react';
import { useRouter } from 'next/navigation';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface UsersTableFiltersProps {
  params?: TAdminGetUsersQuery;
}

const items = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Active',
    value: 'true',
  },
  {
    label: 'Inactive',
    value: 'false',
  },
];

function convertFromParams(active?: 'true' | 'false' | 'all') {
  return active ?? 'all';
}

export default function UsersTableFilters({ params }: UsersTableFiltersProps) {
  const id = useId();
  const [active, setActive] = useState<string>(convertFromParams(params?.active));
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (active === 'all') {
      params.delete('active');
      const url = params.toString() ? `/admin/users?${params.toString()}` : '/admin/users';
      router.push(url, { scroll: false });
    } else {
      params.set('active', active);
      const url = params.toString() ? `/admin/users?${params.toString()}` : '/admin/users';
      router.push(url, { scroll: false });
    }
  }, [active, router]);

  return (
    <div className='bg-white border-2 border-gray-200 p-6 flex items-center gap-4'>
      <UsersSearchInput initialSearchTerm={params?.searchTerm} />

      <RadioGroup
        className='flex gap-2'
        value={active === null ? undefined : active.toString()}
        onValueChange={(value) => setActive(value)}
      >
        {items.map((item) => (
          <div
            key={`${id}-${item.value}`}
            className='relative flex flex-col items-start gap-4 rounded-md border border-input p-3 shadow-xs outline-none has-data-[state=checked]:border-primary/50'
          >
            <div className='flex items-center gap-2'>
              <RadioGroupItem id={`${id}-${item.value}`} value={item.value} className='after:absolute after:inset-0' />
              <Label htmlFor={`${id}-${item.value}`}>{item.label}</Label>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
