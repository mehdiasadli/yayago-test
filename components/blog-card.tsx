import { TBlog } from '@/data/blogs';
import { Calendar, Clock, Eye, User } from 'lucide-react';
import Link from 'next/link';

interface BlogCardProps {
  blog: TBlog;
  featured?: boolean;
}

export default function BlogCard({ blog, featured = false }: BlogCardProps) {
  const formattedDate = new Date(blog.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  if (featured) {
    return (
      <Link
        href={`/community/blog/${blog.slug}`}
        className='group flex flex-col bg-white border-2 border-gray-200 overflow-hidden hover:border-primary hover:shadow-2xl transition-all duration-300 h-full'
      >
        {/* Image Section */}
        <div className='relative aspect-[4/3] overflow-hidden bg-gray-900'>
          <img
            src={blog.image}
            alt={blog.title}
            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

          {/* Badges */}
          <div className='absolute top-4 left-4 right-4 flex items-start justify-between gap-2'>
            <div className='px-3 py-1.5 bg-primary text-white text-xs font-bold uppercase tracking-wider'>Featured</div>
            <div className='px-3 py-1.5 bg-white text-gray-900 text-xs font-semibold'>{blog.category}</div>
          </div>
        </div>

        {/* Content Section */}
        <div className='p-6 flex-1 flex flex-col bg-white'>
          <h3 className='text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors'>
            {blog.title}
          </h3>
          <p className='text-gray-600 mb-4 line-clamp-2 flex-1'>{blog.excerpt}</p>

          {/* Meta Info */}
          <div className='pt-4 border-t border-gray-200'>
            <div className='flex items-center flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500'>
              <div className='flex items-center gap-1.5'>
                <User className='w-3.5 h-3.5' strokeWidth={2} />
                <span className='font-medium'>{blog.author.name}</span>
              </div>
              <div className='flex items-center gap-1.5'>
                <Calendar className='w-3.5 h-3.5' strokeWidth={2} />
                <span>{formattedDate}</span>
              </div>
              <div className='flex items-center gap-1.5'>
                <Clock className='w-3.5 h-3.5' strokeWidth={2} />
                <span>{blog.readTime}</span>
              </div>
              <div className='flex items-center gap-1.5'>
                <Eye className='w-3.5 h-3.5' strokeWidth={2} />
                <span>{blog.views.toLocaleString()} views</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/community/blog/${blog.slug}`}
      className='group flex flex-col bg-white border-2 border-gray-200 overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300 h-full'
    >
      {/* Image */}
      <div className='relative aspect-[16/9] overflow-hidden bg-gray-900'>
        <img
          src={blog.image}
          alt={blog.title}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
        />

        {/* Category Badge */}
        <div className='absolute top-3 right-3 px-2 py-1 bg-primary text-white text-xs font-semibold'>
          {blog.category}
        </div>
      </div>

      {/* Content */}
      <div className='p-5 flex-1 flex flex-col'>
        {/* Title */}
        <h3 className='text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors'>
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className='text-gray-600 text-sm mb-4 line-clamp-3 flex-1'>{blog.excerpt}</p>

        {/* Tags */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {blog.tags.slice(0, 3).map((tag) => (
            <span key={tag} className='px-2 py-1 bg-gray-100 text-gray-600 text-xs'>
              #{tag}
            </span>
          ))}
        </div>

        {/* Meta Info */}
        <div className='pt-4 border-t border-gray-200'>
          <div className='flex items-center justify-between text-xs text-gray-500'>
            <div className='flex items-center gap-1'>
              <User className='w-3 h-3' strokeWidth={2} />
              <span>{blog.author.name}</span>
            </div>
            <div className='flex items-center gap-3'>
              <div className='flex items-center gap-1'>
                <Clock className='w-3 h-3' strokeWidth={2} />
                <span>{blog.readTime}</span>
              </div>
              <div className='flex items-center gap-1'>
                <Eye className='w-3 h-3' strokeWidth={2} />
                <span>{blog.views.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-1 text-xs text-gray-400 mt-2'>
            <Calendar className='w-3 h-3' strokeWidth={2} />
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
