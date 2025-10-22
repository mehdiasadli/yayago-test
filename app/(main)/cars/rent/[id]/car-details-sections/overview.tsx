interface OverviewProps {
  name: string;
}

export default function Overview({ name }: OverviewProps) {
  return (
    <div className='bg-white border-2 border-gray-200 p-6'>
      <h2 className='text-2xl font-bold text-gray-900 mb-4'>Overview</h2>
      <div className='prose max-w-none text-gray-700'>
        <p className='mb-4'>
          Experience the perfect blend of luxury and performance with the {name}. This Sedan is equipped with a Petrol
          engine and Automatic transmission, ensuring a smooth and comfortable ride throughout Dubai.
        </p>
        <p>
          With 4 seats and 4 doors, this vehicle is ideal for both business and leisure trips. The car has only 100 km
          on the odometer and is maintained in excellent condition.
        </p>
      </div>
    </div>
  );
}
