import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export default function CarCardSkeleton() {
  return (
    <Card className='p-0 overflow-hidden flex flex-col h-[320px] group/card transition-all duration-500 bg-white/80 backdrop-blur-xl border border-white/50 hover:border-white/90 hover:shadow-lg'>
      <div className='relative w-full h-full cursor-pointer'>
        <Skeleton className='object-cover transition-all duration-500 group-hover/card:scale-105' />
      </div>

      <div className='flex-1 flex flex-col'>
        <CardHeader className='flex-1 pb-4 px-5'>
          {/* Title */}
          <div className='block mb-2'>
            <CardTitle className='text-xl font-bold line-clamp-1 tracking-tight text-gray-900 group-hover/link:text-primary transition-colors duration-200'>
              <Skeleton className='w-full h-6' />
            </CardTitle>
            <CardDescription className='text-gray-500'>
              <Skeleton className='w-full h-4' />
            </CardDescription>
          </div>
          {/* Stats */}
          <div className='flex items-center gap-3 mb-3 text-sm text-gray-500'>
            <Skeleton className='w-10 h-4' />
            <Skeleton className='w-10 h-4' />
            <Skeleton className='w-10 h-4' />
          </div>
          {/* Specs */}
          {/* Host Section */}
          {/* Pricing Section */}
        </CardHeader>

        <CardFooter className='p-0 flex'>
          <Skeleton className='w-full h-12' />
        </CardFooter>
      </div>
    </Card>
  );
}
