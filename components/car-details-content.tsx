'use client';

import { useEffect, useState } from 'react';
import CarCard from './car-card/car-card';
import Link from 'next/link';
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  Mail,
  Users,
  Gauge,
  Fuel,
  MapPin,
  Star,
  Eye,
  Heart,
  Route,
  Calendar,
  Shield,
  CheckCircle,
  Info,
  Award,
  Package,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { CarDetailsResponseDto } from '@/lib/api/types';
import { carImagesService } from '@/lib/api/services';

interface CarDetailsContentProps {
  car: CarDetailsResponseDto;
  location?: { id: number; key: string; name: string };
  similarCars: CarDetailsResponseDto[];
}

export default function CarDetailsContent({ car, location, similarCars }: CarDetailsContentProps) {
  const [images, setImages] = useState<string[]>([]);
  const [loadingImages, setLoadingImages] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const brandName = car.brand;

  useEffect(() => {
    async function fetchImages() {
      try {
        const imageData = await carImagesService.getCarImages(car.id);
        // Extract image URLs from the response
        const imageUrls = imageData.map((img) => img.imageUrl);
        setImages(imageUrls);
      } catch (error) {
        console.error('Failed to fetch car images:', error);
        // Set empty array on error
        setImages([]);
      } finally {
        setLoadingImages(false);
      }
    }

    fetchImages();
  }, [car.id]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const features = [
    { icon: Users, label: 'Seats', value: `4 Seats` },
    { icon: Gauge, label: 'Transmission', value: 'Automatic' },
    { icon: Fuel, label: 'Fuel Type', value: 'Petrol' },
    { icon: Route, label: 'Mileage Limit', value: `${100}km/day` },
    { icon: Calendar, label: 'Year', value: car.year.toString() },
    { icon: Package, label: 'Body Type', value: 'Sedan' },
  ];

  const inclusions = [
    'Comprehensive Insurance',
    'Roadside Assistance 24/7',
    'Free Delivery & Pickup',
    'Unlimited Support',
    'GPS Navigation Included',
    'Child Seat Available',
    'Additional Driver Option',
    'Flexible Cancellation',
  ];

  const requirements = [
    "Valid Driver's License (minimum 1 year)",
    'Passport or Emirates ID',
    'Minimum age: 21 years',
    'Credit card for security deposit',
    'International drivers must have IDP',
  ];

  return (
    <div className='min-h-screen bg-gray-50 pt-20'>
      {/* Back Button */}
      <div className='bg-white border-b-2 border-gray-200'>
        <div className='max-w-[1920px] mx-auto px-6 lg:px-8 py-4'>
          <Link
            href='/cars/rent'
            className='inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors font-medium'
          >
            <ArrowLeft className='w-5 h-5' strokeWidth={2} />
            Back to Search
          </Link>
        </div>
      </div>

      <div className='max-w-[1920px] mx-auto px-6 lg:px-8 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Left Sidebar - Sticky on Desktop */}
          <div className='lg:col-span-1'>
            <div className='lg:sticky lg:top-24 space-y-6'>
              {/* Images Carousel */}
              <div className='bg-white border-2 border-gray-200 overflow-hidden'>
                {/* Featured Badge */}
                {true && (
                  <div className='absolute top-4 left-4 z-10 flex items-center gap-1 px-3 py-1.5 bg-primary text-white font-semibold'>
                    <Star className='w-4 h-4 fill-white' strokeWidth={2} />
                    FEATURED
                  </div>
                )}

                {/* Main Image */}
                <div className='relative aspect-[4/3] bg-gray-900'>
                  <img
                    src={images[currentImageIndex]}
                    alt={`${brandName} ${car.model} ${car.year}`}
                    className='w-full h-full object-cover'
                  />

                  {/* Navigation Arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className='absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors'
                      >
                        <ChevronLeft className='w-6 h-6' strokeWidth={2} />
                      </button>
                      <button
                        onClick={nextImage}
                        className='absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors'
                      >
                        <ChevronRight className='w-6 h-6' strokeWidth={2} />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  {images.length > 1 && (
                    <div className='absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white text-sm font-medium'>
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  )}
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className='flex gap-2 p-4 bg-gray-50 overflow-x-auto'>
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 border-2 overflow-hidden transition-all ${
                          index === currentImageIndex ? 'border-primary' : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <img src={image} alt={`View ${index + 1}`} className='w-full h-full object-cover' />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Car Info Card */}
              <div className='bg-white border-2 border-gray-200 p-6'>
                {/* Title */}
                <h1 className='text-3xl font-bold text-gray-900 mb-2'>
                  {car.year} {brandName} {car.model}
                </h1>

                {/* Stats */}
                <div className='flex items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b-2 border-gray-200'>
                  <div className='flex items-center gap-1'>
                    <Eye className='w-4 h-4' strokeWidth={2} />
                    <span>{0} views</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Heart className='w-4 h-4' strokeWidth={2} />
                    <span>{0} favorites</span>
                  </div>
                </div>

                {/* Price */}
                <div className='mb-6 pb-6 border-b-2 border-gray-200'>
                  <div className='flex items-baseline gap-2 mb-2'>
                    <span className='text-4xl font-bold text-primary'>{car.pricePerDay}</span>
                    <span className='text-xl font-semibold text-gray-600'>{car.currency}</span>
                    <span className='text-gray-500'>/ day</span>
                  </div>
                  <div className='text-sm text-gray-600'>
                    <div>
                      Weekly: {(car.pricePerDay * 7 * 0.9).toFixed(0)} {car.currency} (10% off)
                    </div>
                    <div>
                      Monthly: {(car.pricePerDay * 30 * 0.8).toFixed(0)} {car.currency} (20% off)
                    </div>
                  </div>
                </div>

                {/* Quick Specs */}
                <div className='grid grid-cols-2 gap-3 mb-6'>
                  {features.map((feature, index) => (
                    <div key={index} className='flex items-center gap-2'>
                      <feature.icon className='w-4 h-4 text-primary flex-shrink-0' strokeWidth={2} />
                      <span className='text-sm text-gray-700 capitalize'>{feature.value}</span>
                    </div>
                  ))}
                </div>

                {/* Location */}
                {location && (
                  <div className='flex items-center gap-2 mb-6 p-3 bg-gray-50 border border-gray-200'>
                    <MapPin className='w-5 h-5 text-primary flex-shrink-0' strokeWidth={2} />
                    <div>
                      <div className='text-sm font-semibold text-gray-900'>{location.name}</div>
                      <div className='text-xs text-gray-600'>Dubai, UAE</div>
                    </div>
                  </div>
                )}

                {/* Contact Buttons */}
                <div className='space-y-3'>
                  <a
                    href={`tel:1234567890`}
                    className='flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors'
                  >
                    <Phone className='w-5 h-5' strokeWidth={2} />
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/1234567890?text=Hi, I'm interested in the ${brandName} ${car.model} ${car.year}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors'
                  >
                    <MessageCircle className='w-5 h-5' strokeWidth={2} />
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:test@test.com`}
                    className='flex items-center justify-center gap-2 w-full py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold transition-colors'
                  >
                    <Mail className='w-5 h-5' strokeWidth={2} />
                    Email
                  </a>
                </div>
              </div>

              {/* Host Info */}
              <div className='bg-white border-2 border-gray-200 p-6'>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>Hosted By</h3>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-primary/10 flex items-center justify-center font-bold text-primary text-lg'>
                    H
                  </div>
                  <div className='flex-1'>
                    <div className='font-semibold text-gray-900'>Host Name</div>
                    <div className='text-sm text-gray-600'>Verified Host</div>
                  </div>
                  <Award className='w-6 h-6 text-primary' strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Overview */}
            <div className='bg-white border-2 border-gray-200 p-6'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>Overview</h2>
              <div className='prose max-w-none text-gray-700'>
                <p className='mb-4'>
                  Experience the perfect blend of luxury and performance with the {car.year} {brandName} {car.model}.
                  This Sedan is equipped with a Petrol engine and Automatic transmission, ensuring a smooth and
                  comfortable ride throughout Dubai.
                </p>
                <p>
                  With 4 seats and 4 doors, this vehicle is ideal for both business and leisure trips. The car has only
                  100 km on the odometer and is maintained in excellent condition.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className='bg-white border-2 border-gray-200 p-6'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>Key Features</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {features.map((feature, index) => (
                  <div key={index} className='flex items-start gap-3 p-4 bg-gray-50 border border-gray-200'>
                    <feature.icon className='w-6 h-6 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                    <div>
                      <div className='font-semibold text-gray-900'>{feature.label}</div>
                      <div className='text-sm text-gray-600 capitalize'>{feature.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className='bg-white border-2 border-gray-200 p-6'>
              <div className='flex items-center gap-2 mb-4'>
                <CheckCircle className='w-6 h-6 text-green-600' strokeWidth={2} />
                <h2 className='text-2xl font-bold text-gray-900'>What's Included</h2>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {inclusions.map((item, index) => (
                  <div key={index} className='flex items-center gap-2 text-gray-700'>
                    <CheckCircle className='w-5 h-5 text-green-600 flex-shrink-0' strokeWidth={2} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className='bg-white border-2 border-gray-200 p-6'>
              <div className='flex items-center gap-2 mb-4'>
                <Info className='w-6 h-6 text-blue-600' strokeWidth={2} />
                <h2 className='text-2xl font-bold text-gray-900'>Rental Requirements</h2>
              </div>
              <ul className='space-y-3'>
                {requirements.map((req, index) => (
                  <li key={index} className='flex items-start gap-2 text-gray-700'>
                    <span className='text-primary font-bold mt-1'>•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Breakdown */}
            <div className='bg-white border-2 border-gray-200 p-6'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>Pricing Breakdown</h2>
              <div className='space-y-4'>
                <div className='flex items-center justify-between py-3 border-b border-gray-200'>
                  <div>
                    <div className='font-semibold text-gray-900'>Daily Rate</div>
                    <div className='text-sm text-gray-600'>Standard daily rental rate</div>
                  </div>
                  <div className='text-2xl font-bold text-primary'>
                    {car.pricePerDay} {car.currency}
                  </div>
                </div>
                <div className='flex items-center justify-between py-3 border-b border-gray-200'>
                  <div>
                    <div className='font-semibold text-gray-900'>Weekly Rate</div>
                    <div className='text-sm text-gray-600'>7 days or more (10% discount)</div>
                  </div>
                  <div className='text-2xl font-bold text-green-600'>
                    {(car.pricePerDay * 0.9).toFixed(0)} {car.currency}/day
                  </div>
                </div>
                <div className='flex items-center justify-between py-3'>
                  <div>
                    <div className='font-semibold text-gray-900'>Monthly Rate</div>
                    <div className='text-sm text-gray-600'>30 days or more (20% discount)</div>
                  </div>
                  <div className='text-2xl font-bold text-green-600'>
                    {(car.pricePerDay * 0.8).toFixed(0)} {car.currency}/day
                  </div>
                </div>
              </div>

              <div className='mt-6 p-4 bg-blue-50 border-2 border-blue-200 text-blue-900'>
                <div className='flex items-start gap-3'>
                  <Info className='w-5 h-5 flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <div className='text-sm'>
                    <strong>Security Deposit:</strong> A refundable security deposit of ₼1,000-3,000 is required
                    depending on the vehicle class. The deposit is fully refunded upon return of the vehicle in good
                    condition.
                  </div>
                </div>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className='bg-white border-2 border-gray-200 p-6'>
              <div className='flex items-center gap-2 mb-4'>
                <Shield className='w-6 h-6 text-primary' strokeWidth={2} />
                <h2 className='text-2xl font-bold text-gray-900'>Terms & Conditions</h2>
              </div>
              <div className='space-y-3 text-sm text-gray-700'>
                <p>
                  <strong>Daily Mileage:</strong> 100km per day included. Additional kilometers charged at ₼1.50/km.
                </p>
                <p>
                  <strong>Fuel Policy:</strong> The vehicle is provided with a full tank and must be returned with a
                  full tank.
                </p>
                <p>
                  <strong>Insurance:</strong> Comprehensive insurance included with an excess of ₼1,500 per incident.
                </p>
                <p>
                  <strong>Late Return:</strong> A grace period of 1 hour is provided. After that, late returns are
                  charged at hourly rates.
                </p>
                <p>
                  <strong>Cancellation:</strong> Free cancellation up to 48 hours before rental start. Cancellations
                  within 48 hours incur a 25% fee.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Cars */}
        {similarCars.length > 0 && (
          <div className='mt-12'>
            <div className='mb-6'>
              <h2 className='text-3xl font-bold text-gray-900 mb-2'>Similar Cars</h2>
              <p className='text-gray-600'>You might also be interested in these vehicles</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {similarCars.map((similarCar) => (
                <CarCard key={similarCar.id} car={similarCar} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
