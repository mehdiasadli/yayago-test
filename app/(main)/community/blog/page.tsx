import type { Metadata } from 'next';
import { blogs } from '@/data/blogs';
import BlogContent from '@/components/blog-content';

export const metadata: Metadata = {
  title: 'Community Blog | Stories, Tips & Insights',
  description:
    'Discover expert advice, car reviews, travel guides, and everything you need to know about car rental and driving in Dubai. Read stories from our community.',
  keywords: [
    'car rental blog',
    'Dubai driving tips',
    'car reviews',
    'travel guides Dubai',
    'car rental advice',
    'UAE traffic laws',
    'Dubai tourism',
  ],
  openGraph: {
    title: 'Community Blog | Stories, Tips & Insights',
    description:
      'Discover expert advice, car reviews, travel guides, and everything you need to know about car rental and driving in Dubai.',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-16 px-6 lg:px-8 border-b-2 border-primary'>
        <div className='max-w-7xl mx-auto'>
          <div className='max-w-3xl'>
            <div className='inline-block mb-4'>
              <span className='px-4 py-2 bg-primary/20 text-primary text-sm font-semibold tracking-wide uppercase border border-primary'>
                Community Blog
              </span>
            </div>
            <h1 className='text-5xl md:text-6xl font-bold mb-6 tracking-tight'>Stories, Tips & Insights</h1>
            <p className='text-xl text-gray-300 leading-relaxed'>
              Discover expert advice, car reviews, travel guides, and everything you need to know about car rental and
              driving in Dubai.
            </p>
          </div>
        </div>
      </section>

      <BlogContent blogs={blogs} />
    </div>
  );
}
