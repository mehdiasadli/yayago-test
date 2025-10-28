import { Eye, Heart, Star } from 'lucide-react';

interface StatsProps {
  viewCount?: number | null;
  favoriteCount?: number | null;
  rating: number;
  reviewCount: number;
}

export default function Stats({ viewCount, favoriteCount, rating, reviewCount }: StatsProps) {
  return (
    <div className='flex items-center gap-3 mb-3 text-sm text-gray-500'>
      <div className='flex items-center gap-1'>
        <Eye className='w-3 h-3' strokeWidth={2.5} />
        <span>{viewCount || 0}</span>
      </div>
      <div className='flex items-center gap-1'>
        <Heart className='w-3 h-3' strokeWidth={2.5} />
        <span>{favoriteCount || 0}</span>
      </div>
      <div className='flex items-center gap-1'>
        <Star className='w-3 h-3 fill-yellow-500 text-yellow-500' strokeWidth={2.5} />
        {reviewCount === 0 ? (
          <span>No reviews yet</span>
        ) : (
          <>
            <span>{rating.toFixed(1) || 0}</span>
            <span>({reviewCount || 0} reviews)</span>
          </>
        )}
      </div>
    </div>
  );
}
