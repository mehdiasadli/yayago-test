interface ResultsCountProps {
  carsCount: number;
}

export default function ResultsCount({ carsCount }: ResultsCountProps) {
  return (
    <div className='mb-6'>
      <p className='text-lg font-semibold text-gray-900'>
        {carsCount} {carsCount === 1 ? 'car' : 'cars'} found
      </p>
    </div>
  );
}
