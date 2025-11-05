'use client';

import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactSectionProps {
  name: string;
  onBookNow: () => void;
}

export default function ContactSection({ name, onBookNow }: ContactSectionProps) {
  return (
    <div className='space-y-3'>
      {/* Book Now - Primary Action */}
      <Button onClick={onBookNow} className='w-full py-6 text-base' size='lg'>
        <Calendar className='w-5 h-5 mr-2' strokeWidth={2} />
        Book Now
      </Button>
    </div>
  );
}
