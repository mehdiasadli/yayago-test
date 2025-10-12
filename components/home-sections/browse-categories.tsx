'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { AnimateIcon } from '../animate-ui/icons/icon';
import { ChevronRight } from '../animate-ui/icons/chevron-right';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'Economy',
    description: 'Budget-friendly cars perfect for daily commutes and city driving',
    link: '/cars/rent?category=economy',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80', // Compact economy car
  },
  {
    id: 2,
    title: 'Sport',
    description: 'High-performance vehicles designed for speed enthusiasts and thrill-seekers',
    link: '/cars/rent?category=sport',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80', // Sports car
  },
  {
    id: 3,
    title: 'Luxury',
    description: 'Premium vehicles offering unmatched comfort, elegance, and sophistication',
    link: '/cars/rent?category=luxury',
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80', // Luxury sedan
  },
  {
    id: 4,
    title: 'SUV',
    description: 'Spacious and versatile vehicles ideal for families and long road trips',
    link: '/cars/rent?category=suv',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', // SUV
  },
  {
    id: 5,
    title: 'Off-road',
    description: 'Rugged 4x4 vehicles built for adventure and desert exploration',
    link: '/cars/rent?category=off-road',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', // Off-road vehicle
  },
  {
    id: 6,
    title: 'Van',
    description: 'Large capacity vehicles perfect for group travel and cargo transport',
    link: '/cars/rent?category=van',
    image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&q=80', // Van
  },
  {
    id: 7,
    title: 'Eco Friend',
    description: 'Electric and hybrid vehicles for environmentally conscious drivers',
    link: '/cars/rent?category=eco-friend',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80', // Electric car
  },
  {
    id: 8,
    title: 'Affordable',
    description: 'Great value cars offering reliability without breaking the bank',
    link: '/cars/rent?category=affordable',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', // Affordable sedan
  },
];

export default function BrowseCategories() {
  return (
    <section
      id='browse-categories'
      className='relative py-20 md:py-24 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
    >
      {/* Animated Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/50 rounded-full blur-3xl' />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className='absolute inset-0 opacity-5'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className='relative max-w-7xl mx-auto'>
        {/* Header */}
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16'>
          <div className='flex-1 text-center md:text-left'>
            <div className='inline-block mb-4'>
              <span className='px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-sm border border-primary/30'>
                Explore Our Fleet
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight'>
              Browse by Category
            </h2>
            <p className='text-lg md:text-xl text-gray-300 max-w-2xl md:max-w-none'>
              Find the perfect vehicle that matches your needs and style
            </p>
          </div>

          {/* View All Button */}
          <AnimateIcon animateOnHover>
            <Button asChild className='h-12 w-50 text-white' variant='link'>
              <Link href='/cars/rent'>
                <span>View All Categories</span>
                <ChevronRight
                  className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1'
                  strokeWidth={2.5}
                />
              </Link>
            </Button>
          </AnimateIcon>
        </div>

        {/* Bento-style Grid with varying sizes */}
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[200px] gap-4 md:gap-6'>
          {/* Economy - Large Featured */}
          <Link href={categories[0].link} className='group relative col-span-2 row-span-2 overflow-hidden'>
            <Image
              src={categories[0].image}
              alt={categories[0].title}
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500' />
            <div className='relative h-full flex flex-col justify-end p-6 md:p-8'>
              <div className='w-14 h-14 bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300'>
                <ArrowRight className='w-7 h-7 text-white' strokeWidth={2.5} />
              </div>
              <h3 className='text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300'>
                {categories[0].title}
              </h3>
              <p className='text-white/80 text-sm md:text-base leading-relaxed'>{categories[0].description}</p>
            </div>
            <div className='absolute inset-0 border-2 border-white/0 group-hover:border-primary/60 transition-all duration-500' />
          </Link>

          {/* Sport - Tall */}
          <Link
            href={categories[1].link}
            className='group relative col-span-2 md:col-span-2 row-span-2 overflow-hidden'
          >
            <Image
              src={categories[1].image}
              alt={categories[1].title}
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500' />
            <div className='relative h-full flex flex-col justify-end p-6 md:p-8'>
              <div className='w-12 h-12 rounded-2xl bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300'>
                <ArrowRight className='w-6 h-6 text-white' strokeWidth={2.5} />
              </div>
              <h3 className='text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300'>
                {categories[1].title}
              </h3>
              <p className='text-white/80 text-sm leading-relaxed'>{categories[1].description}</p>
            </div>
            <div className='absolute inset-0 border-2 border-white/0 group-hover:border-primary/60 transition-all duration-500' />
          </Link>

          {/* Luxury - Wide */}
          <Link href={categories[2].link} className='group relative col-span-2 row-span-1 overflow-hidden'>
            <Image
              src={categories[2].image}
              alt={categories[2].title}
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent group-hover:from-black/95 transition-all duration-500' />
            <div className='relative h-full flex flex-col justify-end p-5 md:p-6'>
              <div className='w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300'>
                <ArrowRight className='w-5 h-5 text-white' strokeWidth={2.5} />
              </div>
              <h3 className='text-xl md:text-2xl font-bold text-white mb-1.5 group-hover:text-primary transition-colors duration-300'>
                {categories[2].title}
              </h3>
              <p className='text-white/75 text-xs md:text-sm leading-relaxed line-clamp-2'>
                {categories[2].description}
              </p>
            </div>
            <div className='absolute inset-0 border-2 border-white/0 group-hover:border-primary/60 transition-all duration-500' />
          </Link>

          {/* SUV - Square */}
          <Link
            href={categories[3].link}
            className='group relative col-span-1 md:col-span-2 row-span-1 overflow-hidden'
          >
            <Image
              src={categories[3].image}
              alt={categories[3].title}
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent group-hover:from-black/95 transition-all duration-500' />
            <div className='relative h-full flex flex-col justify-end p-5 md:p-6'>
              <div className='w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300'>
                <ArrowRight className='w-5 h-5 text-white' strokeWidth={2.5} />
              </div>
              <h3 className='text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300'>
                {categories[3].title}
              </h3>
              <p className='text-white/75 text-xs md:text-sm leading-relaxed line-clamp-2 mt-1'>
                {categories[3].description}
              </p>
            </div>
            <div className='absolute inset-0 border-2 border-white/0 group-hover:border-primary/60 transition-all duration-500' />
          </Link>

          {/* Off-road - Square */}
          <Link
            href={categories[4].link}
            className='group relative col-span-1 md:col-span-2 row-span-1 overflow-hidden'
          >
            <Image
              src={categories[4].image}
              alt={categories[4].title}
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent group-hover:from-black/95 transition-all duration-500' />
            <div className='relative h-full flex flex-col justify-end p-5 md:p-6'>
              <div className='w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300'>
                <ArrowRight className='w-5 h-5 text-white' strokeWidth={2.5} />
              </div>
              <h3 className='text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300'>
                {categories[4].title}
              </h3>
              <p className='text-white/75 text-xs md:text-sm leading-relaxed line-clamp-2 mt-1'>
                {categories[4].description}
              </p>
            </div>
            <div className='absolute inset-0 border-2 border-white/0 group-hover:border-primary/60 transition-all duration-500' />
          </Link>

          {/* Van - Wide */}
          <Link href={categories[5].link} className='group relative col-span-2 row-span-1 overflow-hidden'>
            <Image
              src={categories[5].image}
              alt={categories[5].title}
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent group-hover:from-black/95 transition-all duration-500' />
            <div className='relative h-full flex flex-col justify-end p-5 md:p-6'>
              <div className='w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300'>
                <ArrowRight className='w-5 h-5 text-white' strokeWidth={2.5} />
              </div>
              <h3 className='text-xl md:text-2xl font-bold text-white mb-1.5 group-hover:text-primary transition-colors duration-300'>
                {categories[5].title}
              </h3>
              <p className='text-white/75 text-xs md:text-sm leading-relaxed line-clamp-2'>
                {categories[5].description}
              </p>
            </div>
            <div className='absolute inset-0 border-2 border-white/0 group-hover:border-primary/60 transition-all duration-500' />
          </Link>

          {/* Eco Friend - Square */}
          <Link
            href={categories[6].link}
            className='group relative col-span-1 md:col-span-2 row-span-1 overflow-hidden'
          >
            <Image
              src={categories[6].image}
              alt={categories[6].title}
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent group-hover:from-black/95 transition-all duration-500' />
            <div className='relative h-full flex flex-col justify-end p-5 md:p-6'>
              <div className='w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300'>
                <ArrowRight className='w-5 h-5 text-white' strokeWidth={2.5} />
              </div>
              <h3 className='text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300'>
                {categories[6].title}
              </h3>
              <p className='text-white/75 text-xs md:text-sm leading-relaxed line-clamp-2 mt-1'>
                {categories[6].description}
              </p>
            </div>
            <div className='absolute inset-0 border-2 border-white/0 group-hover:border-primary/60 transition-all duration-500' />
          </Link>

          {/* Affordable - Square */}
          <Link
            href={categories[7].link}
            className='group relative col-span-1 md:col-span-2 row-span-1 overflow-hidden'
          >
            <Image
              src={categories[7].image}
              alt={categories[7].title}
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent group-hover:from-black/95 transition-all duration-500' />
            <div className='relative h-full flex flex-col justify-end p-5 md:p-6'>
              <div className='w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300'>
                <ArrowRight className='w-5 h-5 text-white' strokeWidth={2.5} />
              </div>
              <h3 className='text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300'>
                {categories[7].title}
              </h3>
              <p className='text-white/75 text-xs md:text-sm leading-relaxed line-clamp-2 mt-1'>
                {categories[7].description}
              </p>
            </div>
            <div className='absolute inset-0 border-2 border-white/0 group-hover:border-primary/60 transition-all duration-500' />
          </Link>
        </div>
      </div>
    </section>
  );
}
