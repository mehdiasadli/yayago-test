'use client';

import { AnimatePresence, motion } from 'framer-motion';
import ContactSection from './contact-section';
import InfoCardPricing from '../info-card/info-card-pricing';
import InfoCardTitle from '../info-card/info-card-title';
import Image from 'next/image';

interface FixedContactButtonProps {
  name: string;
  pricePerDay: number;
  currency: string;
  visible: boolean;
  primaryImageUrl?: string | null;
  onBookNow: () => void;
}

export default function FixedContactButton({
  name,
  pricePerDay,
  currency,
  visible,
  primaryImageUrl,
  onBookNow,
}: FixedContactButtonProps) {
  const Img = primaryImageUrl ? <Image src={primaryImageUrl} alt={name} width={100} height={100} priority /> : null;

  return (
    <AnimatePresence mode='wait'>
      {visible && (
        <motion.div
          key='fixed-contact-button'
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 300 }}
          transition={{ duration: 0.25 }}
          className='md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur border-t border-slate-200 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] z-50'
        >
          <div className='max-w-7xl mx-auto flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
              {Img && (
                <div className='overflow-hidden rounded-xl border border-slate-200 bg-slate-100'>
                  {Img}
                </div>
              )}
              <div className='flex-1 flex flex-col gap-1'>
                <InfoCardTitle name={name} className='text-base' />
                <InfoCardPricing
                  pricePerDay={pricePerDay}
                  currency={currency}
                  className='px-3 py-2 bg-slate-50/90 border border-slate-200 rounded-xl'
                />
              </div>
            </div>
            <ContactSection name={name} onBookNow={onBookNow} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
