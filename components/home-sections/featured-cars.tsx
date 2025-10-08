import CarCarousel from './car-carousel';
import ViewAllButton from './view-all-button';
import { brands, cars } from '@/data/cars';

const featuredCars = cars
  .filter((c) => c.featured)
  .slice(0, 12)
  .map((c) => {
    const brand = brands.find((b) => b.key === c.brand);
    return {
      ...c,
      brand: brand?.name || c.brand,
    };
  });

export default async function FeaturedCars() {
  return (
    <section
      id='featured-cars'
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
                Featured Collection
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight'>
              Explore Featured Cars
            </h2>
            <p className='text-lg md:text-xl text-gray-300 max-w-2xl md:max-w-none'>
              Discover our carefully curated selection of premium vehicles available for rent
            </p>
          </div>

          {/* View All Button */}
          <ViewAllButton href='/cars/rent' text='View All Cars' />
        </div>

        {/* Carousel */}
        <CarCarousel cars={featuredCars} />
      </div>
    </section>
  );
}
