import Image from 'next/image';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen'>
      {/* Left Side - Form */}
      <div className='flex-1 flex items-center justify-center px-6 py-12 bg-white'>
        <div className='w-full max-w-md'>{children}</div>
      </div>

      {/* Right Side - Image and Info */}
      <div className='hidden lg:flex lg:flex-1 relative bg-gradient-to-br from-primary via-primary/90 to-primary/80'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <Image
            src='https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80'
            alt='Luxury car'
            fill
            className='object-cover opacity-20'
            priority
          />
        </div>

        {/* Content */}
        <div className='relative z-10 flex flex-col justify-center px-12 text-white'>
          {/* Logo */}
          <div className='mb-8'>
            <Image src='/assets/branding/Icon-White.svg' alt='YayaGo' width={50} height={50} />
          </div>

          {/* Info */}
          <h1 className='text-4xl font-bold mb-4'>Welcome to YayaGo</h1>
          <p className='text-lg text-white/90 mb-8'>
            The premier peer-to-peer car rental marketplace in Dubai. Rent amazing cars or list your own vehicle to earn
            extra income.
          </p>

          {/* Features */}
          <ul className='space-y-4'>
            <li className='flex items-start gap-3'>
              <div className='w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1'>
                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div>
                <h3 className='font-semibold mb-1'>Wide Selection</h3>
                <p className='text-white/80 text-sm'>Choose from hundreds of verified vehicles across Dubai</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <div className='w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1'>
                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div>
                <h3 className='font-semibold mb-1'>Secure & Insured</h3>
                <p className='text-white/80 text-sm'>All rentals come with comprehensive insurance coverage</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <div className='w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1'>
                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div>
                <h3 className='font-semibold mb-1'>Earn Money</h3>
                <p className='text-white/80 text-sm'>List your car and earn up to AED 3,000 per month</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
