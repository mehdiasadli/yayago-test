import { Button } from '@/components/ui/button';
import { Car, Users, Shield, TrendingUp, Heart, Target, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Us',
  description:
    'Learn about YayaGo, the leading peer-to-peer car rental marketplace in Dubai. Discover our story, vision, and values.',
};

export default function AboutPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative py-24 md:py-32 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
        {/* Animated Background Pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary blur-3xl animate-pulse' />
          <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-primary blur-3xl animate-pulse delay-1000' />
        </div>

        {/* Grid Pattern */}
        <div
          className='absolute inset-0 opacity-5'
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className='relative max-w-7xl mx-auto text-center'>
          <div className='inline-block mb-6'>
            <span className='px-4 py-2 bg-primary/20 text-primary-foreground text-sm font-semibold tracking-wide uppercase backdrop-blur-sm border border-primary/30'>
              About YayaGo
            </span>
          </div>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight'>
            Revolutionizing Car Rental
            <br />
            <span className='text-primary'>in Dubai</span>
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed'>
            We're building the future of car sharing, connecting car owners with renters in Dubai's most trusted
            peer-to-peer marketplace.
          </p>
          <div className='flex flex-wrap items-center justify-center gap-4'>
            <Link href='/cars/rent'>
              <Button size='lg' className='text-base px-8 h-12 bg-primary hover:bg-primary/90'>
                Browse Cars
                <ArrowRight className='ml-2 w-4 h-4' />
              </Button>
            </Link>
            <Link href='/support/list-your-car'>
              <Button
                size='lg'
                variant='outline'
                className='text-base px-8 h-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:border-white/30'
              >
                List Your Car
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-white border-b border-gray-100'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-gray-900 mb-2'>5,000+</div>
              <div className='text-gray-600'>Active Users</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-gray-900 mb-2'>1,200+</div>
              <div className='text-gray-600'>Listed Cars</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-gray-900 mb-2'>15,000+</div>
              <div className='text-gray-600'>Successful Rentals</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-gray-900 mb-2'>4.8★</div>
              <div className='text-gray-600'>Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-block mb-4'>
                <span className='px-3 py-1 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide'>
                  Our Story
                </span>
              </div>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>
                Born in Dubai, Built for Everyone
              </h2>
              <div className='space-y-4 text-gray-600 leading-relaxed text-lg'>
                <p>
                  YayaGo started with a simple observation: thousands of cars in Dubai sit idle while people actively
                  search for affordable, flexible rental options. We saw an opportunity to create value for both car
                  owners and renters.
                </p>
                <p>
                  Founded in 2023, we've grown from a small startup to Dubai's leading peer-to-peer car rental
                  marketplace. Our platform has facilitated thousands of successful rentals, helping car owners earn
                  extra income while providing renters with access to a diverse fleet of vehicles.
                </p>
                <p>
                  What sets us apart is our commitment to trust, transparency, and community. Every listing is verified,
                  every transaction is protected, and every member is part of the YayaGo family.
                </p>
              </div>
            </div>
            <div className='relative h-[500px] overflow-hidden shadow-2xl'>
              <Image
                src='https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80'
                alt='Dubai Skyline'
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='order-2 md:order-1 relative h-[500px] overflow-hidden shadow-2xl'>
              <Image
                src='https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=1200&q=80'
                alt='Future of car sharing'
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
            </div>
            <div className='order-1 md:order-2'>
              <div className='inline-block mb-4'>
                <span className='px-3 py-1 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide'>
                  Our Vision
                </span>
              </div>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>
                Making Car Ownership
                <br />
                More Rewarding
              </h2>
              <div className='space-y-4 text-gray-600 leading-relaxed text-lg'>
                <p>
                  We envision a future where car ownership is not just about personal use, but an opportunity to create
                  value for yourself and your community. A future where access to vehicles is democratized, sustainable,
                  and built on trust.
                </p>
                <p>
                  Our goal is to become the MENA region's most trusted car-sharing platform, expanding beyond Dubai to
                  connect millions of car owners and renters across the region.
                </p>
                <p>
                  We're not just building a marketplace; we're fostering a community of responsible car enthusiasts who
                  believe in the power of sharing economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-block mb-4'>
              <span className='px-3 py-1 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide'>
                Our Values
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight'>What We Stand For</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Our values guide every decision we make and every feature we build.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Trust */}
            <div className='bg-white p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300'>
              <div className='w-14 h-14 bg-primary/10 flex items-center justify-center mb-6'>
                <Shield className='w-7 h-7 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Trust & Safety</h3>
              <p className='text-gray-600 leading-relaxed'>
                We verify every user and vehicle, provide comprehensive insurance, and maintain transparent
                communication to ensure safe, secure transactions for everyone.
              </p>
            </div>

            {/* Community */}
            <div className='bg-white p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300'>
              <div className='w-14 h-14 bg-primary/10 flex items-center justify-center mb-6'>
                <Users className='w-7 h-7 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Community First</h3>
              <p className='text-gray-600 leading-relaxed'>
                Our community is our foundation. We listen, adapt, and continuously improve based on feedback from car
                owners and renters to create the best experience.
              </p>
            </div>

            {/* Innovation */}
            <div className='bg-white p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300'>
              <div className='w-14 h-14 bg-primary/10 flex items-center justify-center mb-6'>
                <Sparkles className='w-7 h-7 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Innovation</h3>
              <p className='text-gray-600 leading-relaxed'>
                We embrace technology to make car sharing seamless, from instant booking to smart pricing, always
                pushing boundaries to enhance user experience.
              </p>
            </div>

            {/* Transparency */}
            <div className='bg-white p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300'>
              <div className='w-14 h-14 bg-primary/10 flex items-center justify-center mb-6'>
                <Target className='w-7 h-7 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Transparency</h3>
              <p className='text-gray-600 leading-relaxed'>
                No hidden fees, no surprises. We believe in clear pricing, honest reviews, and open communication at
                every step of the rental process.
              </p>
            </div>

            {/* Sustainability */}
            <div className='bg-white p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300'>
              <div className='w-14 h-14 bg-primary/10 flex items-center justify-center mb-6'>
                <TrendingUp className='w-7 h-7 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Sustainability</h3>
              <p className='text-gray-600 leading-relaxed'>
                By maximizing vehicle utilization, we reduce the need for new car production and promote a more
                sustainable approach to transportation.
              </p>
            </div>

            {/* Customer Success */}
            <div className='bg-white p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300'>
              <div className='w-14 h-14 bg-primary/10 flex items-center justify-center mb-6'>
                <Heart className='w-7 h-7 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Customer Success</h3>
              <p className='text-gray-600 leading-relaxed'>
                Your success is our success. We provide 24/7 support, comprehensive resources, and personalized
                assistance to help you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden'>
        {/* Background Pattern */}
        <div
          className='absolute inset-0 opacity-10'
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className='relative max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 tracking-tight'>Ready to Join Our Community?</h2>
          <p className='text-xl text-primary-foreground/90 mb-10 leading-relaxed'>
            Whether you want to rent your dream car or turn your vehicle into a source of income, we're here to help you
            get started.
          </p>
          <div className='flex flex-wrap items-center justify-center gap-4'>
            <Link href='/cars/rent'>
              <Button
                size='lg'
                className='text-base px-8 h-12 bg-white text-primary hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all'
              >
                Browse Available Cars
                <Car className='ml-2 w-5 h-5' />
              </Button>
            </Link>
            <Link href='/support/list-your-car'>
              <Button
                size='lg'
                variant='outline'
                className='text-base px-8 h-12 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-white/50'
              >
                Become a Host
                <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
