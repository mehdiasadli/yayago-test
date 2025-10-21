import { AlertCircle, CheckCircle, Star, X } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { useForm } from '@tanstack/react-form';
import { Dispatch, SetStateAction, useState } from 'react';
import z from 'zod';
import { useRouter } from 'next/navigation';
import { uploadCarImage } from '@/data/cars/car-images.actions';
import { ImageFile } from './create-car-form';

interface FormStep2Props {
  carId: number | null;
  setStep: (step: 1 | 3) => void;
  images: ImageFile[];
  setImages: Dispatch<SetStateAction<ImageFile[]>>;
}
export default function FormStep2({ carId, setStep, images, setImages }: FormStep2Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: ImageFile[] = Array.from(files).map((file, index) => ({
      file,
      preview: URL.createObjectURL(file),
      isPrimary: images.length === 0 && index === 0, // First image is primary by default
      uploaded: false,
      uploading: false,
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);

      // If removed image was primary and there are still images, make first one primary
      if (newImages.length > 0 && !newImages.some((img) => img.isPrimary)) {
        newImages[0].isPrimary = true;
      }

      return newImages;
    });
  };

  const handleSetPrimary = (index: number) => {
    setImages((prev) =>
      prev.map((img, i) => ({
        ...img,
        isPrimary: i === index,
      }))
    );
  };

  const handleUploadImages = async () => {
    if (!carId) return;

    setIsLoading(true);
    setError('');

    try {
      // Upload each image sequentially
      for (let i = 0; i < images.length; i++) {
        if (images[i].uploaded) continue;

        // Update uploading state
        setImages((prev) => prev.map((img, idx) => (idx === i ? { ...img, uploading: true, error: undefined } : img)));

        try {
          // Create FormData for this file
          const formData = new FormData();
          formData.append('file', images[i].file);

          const result = await uploadCarImage(carId, formData, images[i].isPrimary);

          if (result.success) {
            setImages((prev) =>
              prev.map((img, idx) => (idx === i ? { ...img, uploaded: true, uploading: false } : img))
            );
          } else {
            setImages((prev) =>
              prev.map((img, idx) =>
                idx === i ? { ...img, uploading: false, error: result.error || 'Upload failed' } : img
              )
            );
          }
        } catch (err) {
          setImages((prev) =>
            prev.map((img, idx) => (idx === i ? { ...img, uploading: false, error: 'Upload failed' } : img))
          );
        }
      }

      // Check if all images uploaded successfully
      const allUploaded = images.every((img) => img.uploaded);
      if (allUploaded || images.some((img) => img.uploaded)) {
        setStep(3);
        // Auto-redirect after 2.5 seconds
        setTimeout(() => {
          router.push('/profile/listings');
        }, 2500);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSkipImages = () => {
    setStep(3);
    // Auto-redirect after 2.5 seconds
    setTimeout(() => {
      router.push('/profile/listings');
    }, 2500);
  };

  return (
    <div className='bg-white border-2 border-gray-200 p-8'>
      {/* Progress Indicator */}
      <div className='flex items-center justify-center mb-8'>
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 bg-green-500 text-white flex items-center justify-center font-bold'>
            <CheckCircle className='w-6 h-6' />
          </div>
          <div className='w-16 h-1 bg-primary' />
          <div className='w-10 h-10 bg-primary text-white flex items-center justify-center font-bold'>2</div>
          <div className='w-16 h-1 bg-gray-300' />
          <div className='w-10 h-10 bg-gray-300 text-gray-600 flex items-center justify-center font-bold'>3</div>
        </div>
      </div>

      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-gray-900 mb-2'>Upload Images</h2>
        <p className='text-gray-600'>Add photos to make your listing stand out (optional)</p>
      </div>

      {/* Error Message */}
      {error && (
        <div className='mb-6 p-4 bg-red-50 border-l-4 border-red-500 flex items-center gap-3'>
          <AlertCircle className='w-5 h-5 text-red-500 flex-shrink-0' />
          <p className='text-sm text-red-700'>{error}</p>
        </div>
      )}

      {/* File Input */}
      <div className='mb-6'>
        <Label htmlFor='images' className='block mb-3 text-sm font-semibold text-gray-700 uppercase tracking-wider'>
          Select Images
        </Label>
        <label
          htmlFor='images'
          className='flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 hover:border-primary transition-colors cursor-pointer bg-gray-50 hover:bg-gray-100'
        >
          <Upload className='w-12 h-12 text-gray-400 mb-3' />
          <p className='text-sm text-gray-600 mb-1'>Click to upload images</p>
          <p className='text-xs text-gray-500'>PNG, JPG, WEBP, GIF up to 10MB</p>
        </label>
        <input
          id='images'
          type='file'
          accept='image/jpeg,image/png,image/webp,image/gif'
          multiple
          onChange={handleImageSelect}
          disabled={isLoading}
          className='hidden'
        />
      </div>

      {/* Image Previews */}
      {images.length > 0 && (
        <div className='mb-6'>
          <Label className='block mb-3 text-sm font-semibold text-gray-700 uppercase tracking-wider'>
            Selected Images ({images.length})
          </Label>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {images.map((image, index) => (
              <div
                key={index}
                className='relative group border-2 border-gray-200 hover:border-primary transition-colors'
              >
                <img src={image.preview} alt={`Preview ${index + 1}`} className='w-full h-48 object-cover' />

                {/* Overlay */}
                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2'>
                  <Button
                    type='button'
                    size='sm'
                    variant='outline'
                    className='bg-white hover:bg-gray-100'
                    onClick={() => handleSetPrimary(index)}
                    disabled={image.isPrimary || isLoading}
                  >
                    <Star className={`w-4 h-4 ${image.isPrimary ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                  </Button>
                  <Button
                    type='button'
                    size='sm'
                    variant='outline'
                    className='bg-white hover:bg-red-100 text-red-600'
                    onClick={() => handleRemoveImage(index)}
                    disabled={isLoading}
                  >
                    <X className='w-4 h-4' />
                  </Button>
                </div>

                {/* Status Badges */}
                {image.isPrimary && (
                  <div className='absolute top-2 left-2 px-2 py-1 bg-yellow-500 text-white text-xs font-bold flex items-center gap-1'>
                    <Star className='w-3 h-3 fill-white' />
                    PRIMARY
                  </div>
                )}

                {image.uploaded && (
                  <div className='absolute top-2 right-2 px-2 py-1 bg-green-500 text-white text-xs font-bold flex items-center gap-1'>
                    <CheckCircle className='w-3 h-3' />
                    UPLOADED
                  </div>
                )}

                {image.uploading && (
                  <div className='absolute top-2 right-2 px-2 py-1 bg-blue-500 text-white text-xs font-bold'>
                    UPLOADING...
                  </div>
                )}

                {image.error && (
                  <div className='absolute bottom-2 left-2 right-2 px-2 py-1 bg-red-500 text-white text-xs'>
                    {image.error}
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className='text-sm text-gray-600 mt-3'>
            <Star className='w-4 h-4 inline fill-yellow-400 text-yellow-400' /> Click the star icon to set a primary
            image
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className='flex gap-3'>
        <Button
          type='button'
          variant='outline'
          onClick={() => setStep(1)}
          disabled={isLoading}
          className='flex-1 h-12 text-base font-semibold'
        >
          <ArrowLeft className='w-5 h-5 mr-2' />
          Back
        </Button>

        {images.length > 0 ? (
          <Button
            type='button'
            onClick={handleUploadImages}
            disabled={isLoading}
            className='flex-1 h-12 text-base font-semibold bg-primary hover:bg-primary/90'
          >
            {isLoading ? 'Uploading...' : 'Complete Listing'}
            <CheckCircle className='w-5 h-5 ml-2' />
          </Button>
        ) : (
          <Button
            type='button'
            onClick={handleSkipImages}
            disabled={isLoading}
            className='flex-1 h-12 text-base font-semibold bg-gray-600 hover:bg-gray-700'
          >
            Skip for Now
            <ArrowRight className='w-5 h-5 ml-2' />
          </Button>
        )}
      </div>
    </div>
  );
}
