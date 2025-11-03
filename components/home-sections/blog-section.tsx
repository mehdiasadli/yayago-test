'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { AnimateIcon } from '../animate-ui/icons/icon';
import { ChevronRight } from '../animate-ui/icons/chevron-right';
import { Calendar, Clock, ArrowRight, ChevronLeft } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

const blogs = [
  {
    id: 1,
    title: '10 Essential Tips for First-Time Car Renters in Dubai',
    excerpt:
      'Navigate the Dubai car rental market with confidence. Learn about insurance, traffic rules, and the best practices for a smooth rental experience.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    category: 'Travel Guide',
    date: 'March 15, 2024',
    readTime: '5 min read',
    slug: '10-essential-tips-first-time-car-renters-dubai',
  },
  {
    id: 2,
    title: 'Luxury vs Economy: Which Rental Car is Right for You?',
    excerpt:
      'Compare different car categories and discover which rental option best suits your budget, needs, and Dubai adventure plans.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    category: 'Car Tips',
    date: 'March 12, 2024',
    readTime: '7 min read',
    slug: 'luxury-vs-economy-rental-car',
  },
  {
    id: 3,
    title: 'Making Money with Your Car: A Complete Guide',
    excerpt:
      'Turn your idle vehicle into a revenue stream. Everything you need to know about listing your car on YayaGo and maximizing your earnings.',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&q=80',
    category: 'Earnings',
    date: 'March 10, 2024',
    readTime: '8 min read',
    slug: 'making-money-with-your-car',
  },
];

export default function BlogSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id='blog' className='relative py-20 md:py-24 px-6 lg:px-8 bg-white overflow-hidden'>
      {/* Background Decorations */}
      <div className='absolute top-20 -right-32 w-96 h-96 bg-primary/5 blur-3xl' />
      <div className='absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 blur-3xl' />

      <div className='relative max-w-7xl mx-auto'>
        {/* Header */}
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12'>
          <div className='flex-1 text-center md:text-left'>
            <div className='inline-block mb-4'>
              <span className='px-4 py-2 bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase'>
                Latest Insights
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight'>
              From Our Blog
            </h2>
            <p className='text-lg md:text-xl text-gray-600 max-w-2xl md:max-w-none'>
              Expert tips, industry insights, and helpful guides for car renters and owners
            </p>
          </div>

          {/* View All Button */}
          <AnimateIcon animateOnHover>
            <Button asChild className='h-12 w-50' variant='link'>
              <Link href='/community/blog'>
                <span>View All Blogs</span>
                <ChevronRight
                  className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1'
                  strokeWidth={2.5}
                />
              </Link>
            </Button>
          </AnimateIcon>
        </div>

        {/* Blog Carousel */}
        <div className='relative group'>
          {/* Carousel Container */}
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex gap-6 md:gap-8'>
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className='flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-21.33px)]'
                >
                  <article className='h-full bg-white border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 flex flex-col'>
                    {/* Image */}
                    <Link
                      href={`/community/blog/${blog.slug}`}
                      className='relative block h-56 overflow-hidden flex-shrink-0'
                    >
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className='object-cover transition-transform duration-700 group-hover:scale-110'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                      {/* Category Badge */}
                      <div className='absolute top-4 left-4'>
                        <span className='px-3 py-1.5 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wide'>
                          {blog.category}
                        </span>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className='p-6 flex flex-col flex-1'>
                      {/* Meta */}
                      <div className='flex items-center gap-4 mb-4 text-sm text-gray-500'>
                        <div className='flex items-center gap-1.5'>
                          <Calendar className='w-4 h-4' />
                          <span>{blog.date}</span>
                        </div>
                        <div className='flex items-center gap-1.5'>
                          <Clock className='w-4 h-4' />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <Link href={`/community/blog/${blog.slug}`}>
                        <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300'>
                          {blog.title}
                        </h3>
                      </Link>

                      {/* Excerpt */}
                      <p className='text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-1'>{blog.excerpt}</p>

                      {/* Read More Link */}
                      <Link
                        href={`/community/blog/${blog.slug}`}
                        className='inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 mt-auto'
                      >
                        Read Article
                        <ArrowRight className='w-4 h-4' strokeWidth={2.5} />
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {canScrollPrev && (
            <button
              onClick={scrollPrev}
              className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:scale-110'
              aria-label='Previous blog'
            >
              <ChevronLeft className='w-6 h-6' />
            </button>
          )}

          {canScrollNext && (
            <button
              onClick={scrollNext}
              className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:scale-110'
              aria-label='Next blog'
            >
              <ChevronRight className='w-6 h-6' />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
