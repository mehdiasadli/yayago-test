import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { NAVIGATION_HEIGHT } from './data';

interface NavigationLogoProps extends Omit<ImageProps, 'src' | 'alt'> {}

export default function NavigationLogo({ ...props }: NavigationLogoProps) {
  return (
    <div className='h-full flex items-center flex-1 justify-start md:justify-center cursor-pointer'>
      <Link href='/' className='relative group'>
        {/* Glow effect background */}
        <div className='absolute inset-0 bg-[#6563cc] rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 scale-150' />

        {/* Logo image */}
        <div className='relative'>
          <Image
            width={NAVIGATION_HEIGHT}
            height={NAVIGATION_HEIGHT}
            priority
            {...props}
            src='/assets/branding/Logo-Icon-Brand.svg'
            alt='YayaGo Logo'
          />
        </div>
      </Link>
    </div>
  );
}
