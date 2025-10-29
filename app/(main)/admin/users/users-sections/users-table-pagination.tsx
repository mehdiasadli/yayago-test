'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function UsersTablePagination({ page }: { page?: number }) {
  console.log('page', page);
  const [currentPage, setCurrentPage] = useState(page ?? 0);
  const router = useRouter();

  const next = () => {
    setCurrentPage(currentPage + 1);
  };

  const previous = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('page', (currentPage + 1).toString());
    const url = params.toString() ? `/admin/users?${params.toString()}` : '/admin/users';
    router.push(url, { scroll: false });
  }, [currentPage]);

  return (
    <div className='border-t-2 border-gray-200 px-6 py-4 flex items-center justify-between'>
      <div className='flex gap-2'>
        <Button
          variant='outline'
          size='sm'
          disabled={currentPage === 0}
          className='hover:bg-gray-50'
          onClick={previous}
        >
          Previous
        </Button>

        <Button variant='outline' size='sm' className='hover:bg-gray-50' onClick={next}>
          Next
        </Button>
      </div>
    </div>
  );
}
