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
}

export default function FixedContactButton({
  name,
  pricePerDay,
  currency,
  visible,
  primaryImageUrl,
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
          transition={{ duration: 0.3 }}
          className='md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t-2 border-gray-200 z-50'
        >
          <div className='max-w-7xl mx-auto flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              {Img}
              <div className='flex flex-col'>
                <InfoCardTitle name={name} className='text-2xl' />
                <InfoCardPricing
                  pricePerDay={pricePerDay}
                  currency={currency}
                  className='mb-0 pb-0 border-b-0 text-sm'
                  priceTextSize='2xl'
                  currencyTextSize='md'
                  dividerTextSize='xs'
                />
              </div>
            </div>
            <ContactSection name={name} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
