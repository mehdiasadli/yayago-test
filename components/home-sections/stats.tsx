'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    id: 1,
    value: 5000,
    suffix: '+',
    label: 'Happy Customers',
    description: 'Satisfied clients trust our service',
  },
  {
    id: 2,
    value: 500,
    suffix: '+',
    label: 'Vehicles Available',
    description: 'Wide range of cars to choose from',
  },
  {
    id: 3,
    value: 15,
    suffix: '+',
    label: 'Years Experience',
    description: 'Expertise in car rental industry',
  },
  {
    id: 4,
    value: 98,
    suffix: '%',
    label: 'Customer Satisfaction',
    description: 'Rated excellent by our clients',
  },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id='stats'
      className='relative py-20 md:py-24 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90'
    >
      {/* Background Decorations */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-1/4 right-0 w-96 h-96 bg-white rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 left-0 w-96 h-96 bg-white rounded-full blur-3xl' />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className='absolute inset-0 opacity-5'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className='relative max-w-7xl mx-auto'>
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-0'>
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index, isVisible }: { stat: (typeof stats)[0]; index: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = stat.value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(increment * currentStep));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <div
      className={`group relative text-center transition-all duration-800 flex flex-col ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
      }}
    >
      {/* Card */}
      <div className='relative h-full p-8 md:p-10 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 flex flex-col justify-center items-center'>
        {/* Stat Number */}
        <div className='mb-4'>
          <span className='text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight'>
            {count.toLocaleString()}
          </span>
          <span className='text-4xl md:text-5xl font-bold text-white/90'>{stat.suffix}</span>
        </div>

        {/* Label */}
        <h3 className='text-xl md:text-2xl font-bold text-white mb-3 tracking-tight'>{stat.label}</h3>

        {/* Description */}
        <p className='text-sm md:text-base text-white/80 leading-relaxed'>{stat.description}</p>

        {/* Hover Glow Effect */}
        <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
      </div>
    </div>
  );
}
