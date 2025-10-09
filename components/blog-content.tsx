'use client';

import { useState, useMemo } from 'react';
import { blogCategories, type TBlog } from '@/data/blogs';
import BlogCard from '@/components/blog-card';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal } from 'lucide-react';

interface BlogContentProps {
  blogs: TBlog[];
}

export default function BlogContent({ blogs }: BlogContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'oldest'>('latest');

  // Get featured blogs
  const featuredBlogs = useMemo(() => {
    return blogs.filter((blog) => blog.featured).slice(0, 3);
  }, [blogs]);

  // Filter and sort blogs
  const filteredBlogs = useMemo(() => {
    let filtered = blogs.filter((blog) => !blog.featured);

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.excerpt.toLowerCase().includes(query) ||
          blog.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          blog.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'latest':
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case 'oldest':
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        case 'popular':
          return b.views - a.views;
        default:
          return 0;
      }
    });

    return filtered;
  }, [blogs, searchQuery, selectedCategory, sortBy]);

  return (
    <div className='max-w-7xl mx-auto px-6 lg:px-8 py-12'>
      {/* Featured Posts */}
      {featuredBlogs.length > 0 && (
        <section className='mb-16'>
          <div className='flex items-center justify-between mb-8'>
            <h2 className='text-3xl font-bold text-gray-900'>Featured Stories</h2>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {featuredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} featured />
            ))}
          </div>
        </section>
      )}

      {/* Filters */}
      <div className='bg-white border-2 border-gray-200 p-6 mb-8'>
        <div className='flex items-center gap-2 mb-6'>
          <SlidersHorizontal className='w-5 h-5 text-primary' strokeWidth={2} />
          <h3 className='text-lg font-bold text-gray-900'>Filter & Search</h3>
        </div>

        <div className='grid md:grid-cols-12 gap-4'>
          {/* Search */}
          <div className='md:col-span-5'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' strokeWidth={2} />
              <Input
                type='text'
                placeholder='Search articles, tags, keywords...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='pl-10 h-12 border-2 border-gray-300 focus:border-primary'
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className='md:col-span-4'>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className='w-full h-12 px-4 border-2 border-gray-300 bg-white text-gray-900 font-medium focus:border-primary focus:outline-none cursor-pointer'
            >
              {blogCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className='md:col-span-3'>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'latest' | 'popular' | 'oldest')}
              className='w-full h-12 px-4 border-2 border-gray-300 bg-white text-gray-900 font-medium focus:border-primary focus:outline-none cursor-pointer'
            >
              <option value='latest'>Latest First</option>
              <option value='popular'>Most Popular</option>
              <option value='oldest'>Oldest First</option>
            </select>
          </div>
        </div>

        {/* Active Filters */}
        {(searchQuery || selectedCategory !== 'All') && (
          <div className='flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200'>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className='inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors'
              >
                Search: "{searchQuery}"<span className='text-xs'>✕</span>
              </button>
            )}
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className='inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors'
              >
                Category: {selectedCategory}
                <span className='text-xs'>✕</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className='mb-6'>
        <p className='text-lg font-semibold text-gray-900'>
          {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'} found
        </p>
      </div>

      {/* Blog Grid */}
      {filteredBlogs.length > 0 ? (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className='text-center py-20 bg-white border-2 border-gray-200'>
          <div className='max-w-md mx-auto'>
            <div className='w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6'>
              <Search className='w-10 h-10 text-gray-400' strokeWidth={2} />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-3'>No articles found</h3>
            <p className='text-gray-600 mb-6'>Try adjusting your search or filter criteria to find more articles.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className='px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors'
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
