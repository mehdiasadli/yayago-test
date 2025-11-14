'use client';

import { Calendar, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactSectionProps {
  name: string;
  onBookNow: () => void;
}

export default function ContactSection({ name, onBookNow }: ContactSectionProps) {
  return (
    <div className='space-y-3'>
      <div className='flex items-center justify-between text-xs text-slate-500'>
        <span>Ready to drive {name}?</span>
      </div>
      {/* Book Now - Primary Action */}
      <Button
        onClick={onBookNow}
        className='w-full justify-center rounded-xl bg-gradient-to-r from-primary to-sky-500 text-white text-base font-semibold shadow-lg shadow-primary/30 hover:from-primary/90 hover:to-sky-500/90'
        size='lg'
      >
        <Calendar className='w-5 h-5 mr-2' strokeWidth={2} />
        Book this car
      </Button>
      <div className='flex items-start gap-2 text-[11px] text-slate-500'>
        <ShieldCheck className='w-3.5 h-3.5 mt-0.5 text-emerald-500 flex-shrink-0' />
        <p>Secure checkout with Stripe. Your booking is only confirmed after successful payment.</p>
      </div>
    </div>
  );
}
