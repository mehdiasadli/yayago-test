'use client';

import ReviewsDialog from './reviews-dialog';
import { useState } from 'react';

interface ReviewsSectionProps {
  carId: number;
  carName: string;
}

export default function ReviewsSection({ carId, carName }: ReviewsSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        onClick={() => setOpen(true)}
        className='w-full mt-4 rounded-2xl border border-amber-200 bg-amber-50/80 px-4 py-4 text-left hover:border-amber-300 hover:bg-amber-50 transition-colors'
      >
        <div className='text-xs font-semibold uppercase tracking-wide text-amber-700'>Reviews</div>
        <div className='mt-1 text-sm font-medium text-amber-900'>See what other guests say</div>
        <div className='mt-1 text-[11px] text-amber-700/80'>Tap to open reviews</div>
      </button>

      <ReviewsDialog carId={carId} carName={carName} open={open} onOpenChange={setOpen} />
    </>
  );
}


