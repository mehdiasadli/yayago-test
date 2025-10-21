import { CheckCircle, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ImageFile } from './create-car-form';

interface FormStep3Props {
  images: ImageFile[];
}

export default function FormStep3({ images }: FormStep3Props) {
  const router = useRouter();

  return (
    <div className='bg-white border-2 border-gray-200 p-8'>
      {/* Progress Indicator */}
      <div className='flex items-center justify-center mb-8'>
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 bg-green-500 text-white flex items-center justify-center font-bold'>
            <CheckCircle className='w-6 h-6' />
          </div>
          <div className='w-16 h-1 bg-green-500' />
          <div className='w-10 h-10 bg-green-500 text-white flex items-center justify-center font-bold'>
            <CheckCircle className='w-6 h-6' />
          </div>
          <div className='w-16 h-1 bg-green-500' />
          <div className='w-10 h-10 bg-green-500 text-white flex items-center justify-center font-bold'>
            <CheckCircle className='w-6 h-6' />
          </div>
        </div>
      </div>

      {/* Success Message */}
      <div className='text-center'>
        <div className='inline-flex items-center justify-center w-24 h-24 bg-green-100 mb-6'>
          <CheckCircle className='w-16 h-16 text-green-600' />
        </div>

        <h2 className='text-3xl font-bold text-gray-900 mb-3'>Your car is now live!</h2>
        <p className='text-gray-600 mb-8'>
          Your listing has been successfully created and is now visible to potential renters.
        </p>

        {/* Upload Summary */}
        {images.length > 0 && (
          <div className='bg-gray-50 border border-gray-200 p-4 mb-8 text-left max-w-md mx-auto'>
            <p className='text-sm font-semibold text-gray-700 mb-2'>Images Uploaded:</p>
            <div className='flex items-center gap-2 text-sm text-gray-600'>
              <ImageIcon className='w-4 h-4' />
              <span>
                {images.filter((img) => img.uploaded).length} of {images.length} images uploaded successfully
              </span>
            </div>
          </div>
        )}

        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          <Button
            onClick={() => router.push('/profile/listings')}
            className='h-12 text-base font-semibold bg-primary hover:bg-primary/90 px-8'
          >
            View My Listings
          </Button>
          <Button
            onClick={() => router.push('/profile/cars/add')}
            variant='outline'
            className='h-12 text-base font-semibold px-8'
          >
            Add Another Car
          </Button>
        </div>

        <p className='text-sm text-gray-500 mt-6'>Redirecting to your listings in a moment...</p>
      </div>
    </div>
  );
}
