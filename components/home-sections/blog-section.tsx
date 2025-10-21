import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { AnimateIcon } from '../animate-ui/icons/icon';
import { ChevronRight } from '../animate-ui/icons/chevron-right';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

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
  return (
    <section id='blog' className='relative py-20 md:py-24 px-6 lg:px-8 bg-white overflow-hidden'>
      {/* Background Decorations */}
      <div className='absolute top-20 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
      <div className='absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />

      <div className='relative max-w-7xl mx-auto'>
        {/* Header */}
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12'>
          <div className='flex-1 text-center md:text-left'>
            <div className='inline-block mb-4'>
              <span className='px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide uppercase'>
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

        {/* Blog Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className='group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2'
            >
              {/* Image */}
              <Link href={`/community/blog/${blog.slug}`} className='relative block h-56 overflow-hidden'>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                {/* Category Badge */}
                <div className='absolute top-4 left-4'>
                  <span className='px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-semibold uppercase tracking-wide'>
                    {blog.category}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className='p-6'>
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
                <p className='text-gray-600 leading-relaxed mb-4 line-clamp-3'>{blog.excerpt}</p>

                {/* Read More Link */}
                <Link
                  href={`/community/blog/${blog.slug}`}
                  className='inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300'
                >
                  Read Article
                  <ArrowRight className='w-4 h-4' strokeWidth={2.5} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
