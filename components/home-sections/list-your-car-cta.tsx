import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export default function ListYourCarCTA() {
  return (
    <section id='list-your-car-cta' className='relative py-32 md:py-40 overflow-hidden'>
      {/* Background Image */}
      <Image
        src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80'
        alt='Luxury car'
        fill
        className='object-cover'
        priority={false}
      />

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70' />

      {/* Grid Pattern Overlay */}
      <div
        className='absolute inset-0 opacity-10'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className='relative max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='max-w-4xl'>
          {/* Badge */}
          <div className='inline-block mb-6'>
            <span className='px-5 py-2.5 bg-primary/20 text-primary-foreground rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-sm border border-primary/30'>
              Start Earning Today
            </span>
          </div>

          {/* Title */}
          <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight tracking-tight'>
            Turn Your Car Into a
            <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70'>
              Money-Making Machine
            </span>
          </h2>

          {/* Subtitle */}
          <p className='text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl'>
            List your vehicle on YayaGo and start earning passive income. Join thousands of car owners who are
            monetizing their idle cars while maintaining full control.
          </p>

          {/* CTA Button */}
          <div className='flex flex-col sm:flex-row gap-4 items-start'>
            <Button asChild size='lg' className='h-16 px-10 text-lg font-semibold group'>
              <Link href='/list-car'>
                List Your Car Now
                <ArrowRight className='w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1' />
              </Link>
            </Button>

            <Button
              asChild
              size='lg'
              variant='outline'
              className='h-16 px-10 text-lg font-semibold bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 backdrop-blur-sm'
            >
              <Link href='/how-it-works'>Learn How It Works</Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className='mt-12 flex flex-wrap gap-8 md:gap-12'>
            <div>
              <div className='text-3xl md:text-4xl font-bold text-white mb-1'>$2,500+</div>
              <div className='text-sm md:text-base text-gray-400'>Average Monthly Income</div>
            </div>
            <div>
              <div className='text-3xl md:text-4xl font-bold text-white mb-1'>24/7</div>
              <div className='text-sm md:text-base text-gray-400'>Customer Support</div>
            </div>
            <div>
              <div className='text-3xl md:text-4xl font-bold text-white mb-1'>100%</div>
              <div className='text-sm md:text-base text-gray-400'>Insurance Coverage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Accent */}
      <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent' />
    </section>
  );
}
