import CarCardSkeleton from './car-card-skeleton';

export default function CarListSkeleton() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6'>
      {Array.from({ length: 12 }).map((_, index) => (
        <CarCardSkeleton key={index} />
      ))}
    </div>
  );
}
