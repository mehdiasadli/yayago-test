'use client';

import { SessionProvider } from 'next-auth/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/get-query-client';

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider refetchInterval={0} refetchOnWindowFocus={true}>
        {children}
      </SessionProvider>
    </QueryClientProvider>
  );
}
