const schema = z.object({
  q: z.string().max(100, 'Search term must be less than 100 characters').trim().nullish(),
});

/**
 * Sync car filters and URL search params
 * Apply debounce to searching
 */

import { useEffect, useState } from 'react';
import { useDebouncedValue } from './use-debounce-value';
import { useRouter, useSearchParams } from 'next/navigation';
import z from 'zod';

export function useCarFiltering() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isInitialized, setIsInitialized] = useState(false);

  const [q, setQ] = useState('');
  const [debouncedQ] = useDebouncedValue(q, 500);

  // get the initial filter values from the URL
  useEffect(() => {
    const validatedQ = schema.shape.q.safeParse(searchParams.get('q'));

    if (validatedQ.success) {
      setQ(validatedQ.data ?? '');
    }

    setIsInitialized(true);
  }, [searchParams]);

  // update url when a filter change
  useEffect(() => {
    if (!isInitialized) return;

    const params = new URLSearchParams();

    if (debouncedQ) params.set('q', debouncedQ);

    const queryString = params.toString();
    const newUrl = queryString ? `/cars/rent?${queryString}` : '/cars/rent';

    router.replace(newUrl, { scroll: false });
  }, [debouncedQ, isInitialized, router]);

  return {
    q,
    setQ,
    debouncedQ,
  };
}
