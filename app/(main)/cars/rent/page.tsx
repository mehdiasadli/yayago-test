import CarsRentContent from '@/components/cars-rent-content';
import { cars } from '@/data/cars';
import { dubaiLocations } from '@/data/locations';

export const metadata = {
  title: 'Rent a Car in Dubai | YayaGo',
  description:
    'Browse our extensive collection of rental cars in Dubai. From economy to luxury, find the perfect vehicle for your needs. Compare prices, features, and book instantly.',
};

export default function CarsRentPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <section className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-16 px-6 lg:px-8 border-b-2 border-primary'>
        <div className='max-w-7xl mx-auto'>
          <div className='max-w-3xl'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6 tracking-tight'>Find Your Perfect Ride</h1>
            <p className='text-xl text-gray-300 leading-relaxed'>
              Browse through our extensive collection of vehicles. From economy to luxury, we have the perfect car for
              every journey in Dubai.
            </p>
            <div className='mt-8 flex flex-wrap gap-4 text-sm'>
              <div className='flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm'>
                <span className='text-2xl font-bold text-primary'>{cars.length}</span>
                <span className='text-gray-300'>Available Cars</span>
              </div>
              <div className='flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm'>
                <span className='text-2xl font-bold text-primary'>{dubaiLocations.length}</span>
                <span className='text-gray-300'>Locations</span>
              </div>
              <div className='flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm'>
                <span className='text-2xl font-bold text-primary'>24/7</span>
                <span className='text-gray-300'>Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <CarsRentContent cars={cars} locations={dubaiLocations} />
    </div>
  );
}
