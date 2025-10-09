import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogs } from '@/data/blogs';
import BlogCard from '@/components/blog-card';
import {
  Calendar,
  Clock,
  Eye,
  User,
  ArrowLeft,
  Share2,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Send,
} from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${blog.title} | Yayago Community Blog`,
    description: blog.excerpt,
    keywords: [...blog.tags, blog.category, 'Yayago', 'Dubai', 'car rental'],
    authors: [{ name: blog.author.name }],
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      publishedTime: blog.publishedAt,
      authors: [blog.author.name],
      images: [
        {
          url: blog.image,
          alt: blog.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogs.filter((b) => b.category === blog.category && b.slug !== blog.slug).slice(0, 3);

  const formattedDate = new Date(blog.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-white border-b-2 border-gray-200 pt-24 pb-8 px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='flex items-center justify-between'>
            <Link
              href='/community/blog'
              className='inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mb-6'
            >
              <ArrowLeft className='w-5 h-5' strokeWidth={2} />
              Back to Blog
            </Link>

            {/* Category Badge */}
            <div className='inline-block mb-4'>
              <span className='px-3 py-1.5 bg-primary text-white text-sm font-semibold uppercase tracking-wide'>
                {blog.category}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'>{blog.title}</h1>

          {/* Meta Info */}
          <div className='flex flex-wrap items-center gap-6 text-gray-600'>
            <div className='flex items-center gap-2'>
              <User className='w-5 h-5' strokeWidth={2} />
              <span className='font-semibold text-gray-900'>{blog.author.name}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Calendar className='w-5 h-5' strokeWidth={2} />
              <span>{formattedDate}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Clock className='w-5 h-5' strokeWidth={2} />
              <span>{blog.readTime}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Eye className='w-5 h-5' strokeWidth={2} />
              <span>{blog.views.toLocaleString()} views</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className='relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-900'>
        <img src={blog.image} alt={blog.title} className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
      </div>

      {/* Content */}
      <div className='max-w-4xl mx-auto px-6 lg:px-8 py-12'>
        <div className='bg-white border-2 border-gray-200 p-8 md:p-12'>
          {/* Article Content */}
          <div className='prose prose-lg max-w-none'>
            <p className='text-xl text-gray-700 leading-relaxed mb-8 font-medium'>{blog.excerpt}</p>

            {/* Placeholder content - in a real app, this would be rich HTML/markdown content */}
            <div className='space-y-6 text-gray-700'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>

              <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-6'>Key Points to Consider</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>

              <ul className='list-disc pl-6 space-y-3'>
                <li>Comprehensive coverage for your journey</li>
                <li>Expert advice from industry professionals</li>
                <li>Real-world experiences and insights</li>
                <li>Up-to-date information on regulations and best practices</li>
              </ul>

              <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-6'>Understanding the Details</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </p>

              <blockquote className='border-l-4 border-primary bg-primary/5 p-6 my-8 italic text-lg'>
                "The journey of a thousand miles begins with a single step. Make sure that step is in the right
                direction with proper planning and knowledge."
              </blockquote>

              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet, consectetur, adipisci velit.
              </p>

              <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-6'>Final Thoughts</h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className='mt-12 pt-8 border-t-2 border-gray-200'>
            <div className='flex items-center gap-2 mb-4'>
              <Tag className='w-5 h-5 text-primary' strokeWidth={2} />
              <span className='font-bold text-gray-900'>Tags:</span>
            </div>
            <div className='flex flex-wrap gap-2'>
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className='px-4 py-2 bg-gray-100 hover:bg-primary hover:text-white text-gray-700 text-sm font-medium transition-colors cursor-pointer'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className='mt-8 pt-8 border-t-2 border-gray-200'>
            <div className='flex items-start justify-between flex-wrap gap-4'>
              <div className='flex items-center gap-2'>
                <Share2 className='w-5 h-5 text-primary' strokeWidth={2} />
                <span className='font-bold text-gray-900'>Share this article:</span>
              </div>
              <div className='flex flex-wrap gap-3'>
                <button
                  className='w-12 h-12 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white flex items-center justify-center transition-colors'
                  aria-label='Share on Facebook'
                >
                  <Facebook className='w-5 h-5' strokeWidth={2} fill='currentColor' />
                </button>
                <button
                  className='w-12 h-12 bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white flex items-center justify-center transition-colors'
                  aria-label='Share on Twitter'
                >
                  <Twitter className='w-5 h-5' strokeWidth={2} fill='currentColor' />
                </button>
                <button
                  className='w-12 h-12 bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white flex items-center justify-center transition-colors'
                  aria-label='Share on LinkedIn'
                >
                  <Linkedin className='w-5 h-5' strokeWidth={2} fill='currentColor' />
                </button>
                <button
                  className='w-12 h-12 bg-[#25D366] hover:bg-[#25D366]/90 text-white flex items-center justify-center transition-colors'
                  aria-label='Share on WhatsApp'
                >
                  <MessageCircle className='w-5 h-5' strokeWidth={2} fill='currentColor' />
                </button>
                <button
                  className='w-12 h-12 bg-[#5865F2] hover:bg-[#5865F2]/90 text-white flex items-center justify-center transition-colors'
                  aria-label='Share on Discord'
                >
                  <MessageCircle className='w-5 h-5' strokeWidth={2} />
                </button>
                <button
                  className='w-12 h-12 bg-[#0088cc] hover:bg-[#0088cc]/90 text-white flex items-center justify-center transition-colors'
                  aria-label='Share on Telegram'
                >
                  <Send className='w-5 h-5' strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>

          {/* Author Card */}
          <div className='mt-12 pt-8 border-t-2 border-gray-200'>
            <div className='flex items-start gap-6'>
              <div className='w-20 h-20 bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold flex-shrink-0'>
                {blog.author.name.charAt(0)}
              </div>
              <div>
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>About {blog.author.name}</h3>
                <p className='text-gray-600 leading-relaxed'>
                  {blog.author.name} is a passionate writer and automotive enthusiast with years of experience in the
                  Dubai car rental industry. Their insights help readers make informed decisions about car rental and
                  driving in the UAE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className='bg-white border-t-2 border-gray-200 py-16 px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>Related Articles</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {relatedPosts.map((post) => (
                <BlogCard key={post.id} blog={post} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
