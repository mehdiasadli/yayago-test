import CreateCarForm from './create-car-form';

export const metadata = {
  title: 'List Your Car - YayaGo',
  description: 'Add a new car to your listings',
};

export default function AddCarPage() {
  return (
    <div className='max-w-4xl mx-auto space-y-6'>
      <div>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>List Your Car</h1>
        <p className='text-gray-600'>Fill in the details to start earning</p>
      </div>
      <CreateCarForm />
    </div>
  );
}
