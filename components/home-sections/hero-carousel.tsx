'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const carImages = [
  'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&q=80', // Audi R8 - sleek sports car
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80', // Mercedes AMG - luxury performance
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80', // Audi - modern design
  'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1920&q=80', // Porsche 911 - iconic sports car
  'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1920&q=80', // BMW - premium sedan
  'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1920&q=80', // Tesla Model S - electric luxury
  'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1920&q=80', // Lamborghini - exotic supercar
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='absolute inset-0 w-full h-full overflow-hidden -z-10'>
      {/* Animated Carousel */}
      <AnimatePresence initial={false} mode='sync'>
        <motion.div
          key={currentIndex}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{
            duration: 1.2,
            ease: [0.32, 0.72, 0, 1],
          }}
          className='absolute inset-0'
        >
          <Image
            src={carImages[currentIndex]}
            alt='Luxury car'
            fill
            className='object-cover'
            priority={currentIndex === 0}
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay with Gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80' />
    </div>
  );
}
