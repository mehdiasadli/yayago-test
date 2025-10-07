import { Button } from '../ui/button';
import HeroCarousel from './hero-carousel';
import HeroSearch from './hero-search';
import { ShaderAnimation } from './shader-background';

export default function Hero() {
  return (
    <section className='relative flex h-screen w-full flex-col items-center justify-center overflow-hidden'>
      {/* <ShaderAnimation /> */}
      <HeroCarousel />

      {/* Hero Content */}
      <div className='absolute z-10 flex flex-col items-center justify-center gap-4 px-6 w-full max-w-7xl'>
        <h1 className='text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-tight md:leading-none font-semibold tracking-tighter text-white'>
          Drive. Share. Connect.
        </h1>
        <p className='text-center text-sm sm:text-base md:text-lg leading-relaxed font-normal tracking-tight text-white/90 max-w-2xl'>
          Drive your dream car. Share your ride. Connect with drivers.
        </p>

        <HeroSearch />

        <Button className='h-14 sm:h-16 w-52 sm:w-60 mt-6 sm:mt-10'>List Your Car</Button>
      </div>
    </section>
  );
}
