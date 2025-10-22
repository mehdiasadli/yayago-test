'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    router.back();
  };

  return (
    <Button
      variant='ghost'
      className={cn(
        'h-full hover:text-primary hover:bg-primary/20',
        pathname !== '/' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
      )}
      onClick={handleBack}
      aria-label='Go back'
    >
      <ArrowLeft />
      Back
    </Button>
  );
}
