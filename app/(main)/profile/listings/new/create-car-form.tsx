'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Car,
  DollarSign,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Upload,
  CheckCircle,
  AlertCircle,
  X,
  Star,
  Image as ImageIcon,
  Settings,
  Fuel,
  Users,
  Wrench,
} from 'lucide-react';
import { createCar } from '@/data/cars/cars.actions';
import { uploadCarImage } from '@/data/cars/car-images.actions';
import { CarDetailsSchema } from '@/data/cars/car.schema';

type FormData = {
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  currency: string;
  available: boolean;
};

type ImageFile = {
  file: File;
  preview: string;
  isPrimary: boolean;
  uploaded: boolean;
  uploading: boolean;
  error?: string;
};

export default function CreateCarForm() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<FormData>({
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    pricePerDay: 0,
    currency: 'AED',
    available: true,
  });
  const [images, setImages] = useState<ImageFile[]>([]);
  const [carId, setCarId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      field === 'year' || field === 'pricePerDay'
        ? Number(e.target.value)
        : field === 'available'
          ? e.target.checked
          : e.target.value;

    setFormData((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleSelectChange = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Validate form data
      const validation = CarDetailsSchema.safeParse(formData);
      if (!validation.success) {
        setError(validation.error.errors[0].message);
        setIsLoading(false);
        return;
      }

      // Create car
      const result = await createCar(formData);

      if (result.success && result.data) {
        setCarId(result.data.id);
        setStep(2);
      } else {
        setError(result.error || 'Failed to create car');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

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

  // Step 1: Car Details Form
  if (step === 1) {
    return (
      <div className='bg-white border-2 border-gray-200 p-8'>
        {/* Progress Indicator */}
        <div className='flex items-center justify-center mb-8'>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 bg-primary text-white flex items-center justify-center font-bold'>1</div>
            <div className='w-16 h-1 bg-gray-300' />
            <div className='w-10 h-10 bg-gray-300 text-gray-600 flex items-center justify-center font-bold'>2</div>
            <div className='w-16 h-1 bg-gray-300' />
            <div className='w-10 h-10 bg-gray-300 text-gray-600 flex items-center justify-center font-bold'>3</div>
          </div>
        </div>

        <div className='mb-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-2'>Car Details</h2>
          <p className='text-gray-600'>Enter the basic information about your car</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className='mb-6 p-4 bg-red-50 border-l-4 border-red-500 flex items-center gap-3'>
            <AlertCircle className='w-5 h-5 text-red-500 flex-shrink-0' />
            <p className='text-sm text-red-700'>{error}</p>
          </div>
        )}

        <form onSubmit={handleStep1Submit} className='space-y-6'>
          {/* Brand */}
          <div className='space-y-2'>
            <Label htmlFor='brand' className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>
              Brand *
            </Label>
            <InputGroup>
              <InputGroupInput
                id='brand'
                type='text'
                placeholder='e.g., Toyota, BMW, Mercedes'
                value={formData.brand}
                onChange={handleChange('brand')}
                required
                disabled={isLoading}
                className='h-12'
              />
              <InputGroupAddon>
                <Car className='w-5 h-5 text-gray-400' />
              </InputGroupAddon>
            </InputGroup>
          </div>

          {/* Model */}
          <div className='space-y-2'>
            <Label htmlFor='model' className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>
              Model *
            </Label>
            <InputGroup>
              <InputGroupInput
                id='model'
                type='text'
                placeholder='e.g., Camry, X5, E-Class'
                value={formData.model}
                onChange={handleChange('model')}
                required
                disabled={isLoading}
                className='h-12'
              />
              <InputGroupAddon>
                <Car className='w-5 h-5 text-gray-400' />
              </InputGroupAddon>
            </InputGroup>
          </div>

          {/* Year */}
          <div className='space-y-2'>
            <Label htmlFor='year' className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>
              Year *
            </Label>
            <InputGroup>
              <InputGroupInput
                id='year'
                type='number'
                min={1900}
                max={new Date().getFullYear() + 1}
                placeholder='e.g., 2023'
                value={formData.year}
                onChange={handleChange('year')}
                required
                disabled={isLoading}
                className='h-12'
              />
              <InputGroupAddon>
                <Calendar className='w-5 h-5 text-gray-400' />
              </InputGroupAddon>
            </InputGroup>
          </div>

          {/* Price Per Day & Currency */}
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='pricePerDay' className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>
                Price Per Day *
              </Label>
              <InputGroup>
                <InputGroupInput
                  id='pricePerDay'
                  type='number'
                  min={0}
                  step='0.01'
                  placeholder='e.g., 150'
                  value={formData.pricePerDay}
                  onChange={handleChange('pricePerDay')}
                  required
                  disabled={isLoading}
                  className='h-12'
                />
                <InputGroupAddon>
                  <DollarSign className='w-5 h-5 text-gray-400' />
                </InputGroupAddon>
              </InputGroup>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='currency' className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>
                Currency *
              </Label>
              <Select value={formData.currency} onValueChange={handleSelectChange('currency')} disabled={isLoading}>
                <SelectTrigger className='h-12 w-full'>
                  <SelectValue placeholder='Select currency' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='AED'>AED (د.إ)</SelectItem>
                  <SelectItem value='USD'>USD ($)</SelectItem>
                  <SelectItem value='EUR'>EUR (€)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Available */}
          <div className='flex items-start gap-3 p-4 bg-gray-50 border border-gray-200'>
            <input
              type='checkbox'
              id='available'
              checked={formData.available}
              onChange={handleChange('available')}
              disabled={isLoading}
              className='mt-1 w-5 h-5 text-primary border-gray-300 focus:ring-primary'
            />
            <div>
              <Label htmlFor='available' className='text-sm font-semibold text-gray-700 cursor-pointer'>
                Available for Rent
              </Label>
              <p className='text-xs text-gray-600 mt-1'>Mark this car as available for immediate rental</p>
            </div>
          </div>

          {/* Disabled Fields (Frontend Extensions) */}
          <div className='border-t-2 border-gray-200 pt-6 mt-6'>
            <div className='mb-4 p-3 bg-blue-50 border border-blue-200'>
              <p className='text-sm text-blue-800'>
                <strong>Note:</strong> The following fields will be available in a future update. Dummy data is shown
                for preview.
              </p>
            </div>

            <div className='space-y-6 opacity-50'>
              {/* Transmission */}
              <div className='space-y-2'>
                <Label className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>Transmission</Label>
                <InputGroup>
                  <InputGroupInput type='text' value='Automatic' disabled className='h-12' />
                  <InputGroupAddon>
                    <Settings className='w-5 h-5 text-gray-400' />
                  </InputGroupAddon>
                </InputGroup>
              </div>

              {/* Fuel Type */}
              <div className='space-y-2'>
                <Label className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>Fuel Type</Label>
                <InputGroup>
                  <InputGroupInput type='text' value='Petrol' disabled className='h-12' />
                  <InputGroupAddon>
                    <Fuel className='w-5 h-5 text-gray-400' />
                  </InputGroupAddon>
                </InputGroup>
              </div>

              {/* Seats */}
              <div className='space-y-2'>
                <Label className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>Seats</Label>
                <InputGroup>
                  <InputGroupInput type='text' value='4' disabled className='h-12' />
                  <InputGroupAddon>
                    <Users className='w-5 h-5 text-gray-400' />
                  </InputGroupAddon>
                </InputGroup>
              </div>

              {/* Features */}
              <div className='space-y-2'>
                <Label className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>Features</Label>
                <InputGroup>
                  <InputGroupInput
                    type='text'
                    value='Air Conditioning, Bluetooth, USB Port'
                    disabled
                    className='h-12'
                  />
                  <InputGroupAddon>
                    <Wrench className='w-5 h-5 text-gray-400' />
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type='submit'
            disabled={isLoading}
            className='w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90'
          >
            {isLoading ? (
              'Creating Car...'
            ) : (
              <>
                Next: Upload Images
                <ArrowRight className='w-5 h-5 ml-2' />
              </>
            )}
          </Button>
        </form>
      </div>
    );
  }

  // Step 2: Image Upload
  if (step === 2) {
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

  // Step 3: Success Screen
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
        <p className='text-lg text-gray-600 mb-2'>
          {formData.brand} {formData.model} ({formData.year})
        </p>
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
