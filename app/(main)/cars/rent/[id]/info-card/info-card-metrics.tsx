'use client';

import { Eye, Heart, Star } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface InfoCardMetricsProps {
  id: string;
  viewCount: number;
  favoriteCount: number;
  averageRating: number;
  reviewCount: number;
}

export default function InfoCardMetrics({
  id,
  viewCount,
  favoriteCount,
  averageRating,
  reviewCount,
}: InfoCardMetricsProps) {
  const { status } = useSession();

  return (
    <div className='flex items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b-2 border-gray-200'>
      <div className='flex items-center gap-1 text-primary'>
        <Eye className='w-4 h-4' strokeWidth={2} />
        <span>{viewCount} views</span>
      </div>
      <div className='flex items-center gap-1 text-red-500'>
        <Heart className='w-4 h-4' strokeWidth={2} />
        <span>{favoriteCount} favorites</span>
      </div>
      {status === 'authenticated' ? (
        <Link href={`/cars/rent/${id}/reviews#reviews-section`}>
          <div className='flex items-center gap-1 text-yellow-600 hover:underline hover:text-yellow-500'>
            <Star className='w-4 h-4' strokeWidth={2} />
            <span>
              {averageRating} ({reviewCount} reviews)
            </span>
          </div>
        </Link>
      ) : (
        <div className='flex items-center gap-1 text-yellow-600'>
          <Star className='w-4 h-4' strokeWidth={2} />
          <span>
            {averageRating} ({reviewCount} reviews)
          </span>
        </div>
      )}
    </div>
  );
}
