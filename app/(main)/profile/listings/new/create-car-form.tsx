'use client';

import { useState } from 'react';
import CarDetailsForm from './car-details-form';
import FormStep2 from './form-step-2';
import FormStep3 from './form-step-3';

export type ImageFile = {
  file: File;
  preview: string;
  isPrimary: boolean;
  uploaded: boolean;
  uploading: boolean;
  error?: string;
};

export default function CreateCarForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [images, setImages] = useState<ImageFile[]>([]);
  const [carId, setCarId] = useState<number | null>(null);

  // Step 1: Car Details Form
  if (step === 1) {
    return <CarDetailsForm setCarId={setCarId} setStep={setStep} />;
  }

  // Step 2: Image Upload
  if (step === 2) {
    return <FormStep2 carId={carId} setStep={setStep} images={images} setImages={setImages} />;
  }

  // Step 3: Success Screen
  return <FormStep3 images={images} />;
}
