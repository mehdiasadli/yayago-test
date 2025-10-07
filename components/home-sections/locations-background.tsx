import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

interface LocationsBackgroundProps {
  currentBackgroundImage: string;
}

export default function LocationsBackground({ currentBackgroundImage }: LocationsBackgroundProps) {
  return (
    <div className='absolute inset-0'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentBackgroundImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className='absolute inset-0'
        >
          <Image
            src={currentBackgroundImage}
            alt='Background'
            fill
            className='object-cover blur-md scale-110 opacity-50'
            priority={false}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
