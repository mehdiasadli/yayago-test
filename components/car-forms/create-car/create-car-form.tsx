'use client';

import { TCreateCarRequest } from '@/features/cars/cars.types';
import { Stepper, StepperIndicator, StepperItem, StepperTitle, StepperTrigger } from '@/components/ui/stepper';
import {
  CreateCarBookingInformationDto,
  CreateCarMainInformationDto,
  CreateCarPricingInformationDto,
  CreateCarVehicleInformationDto,
} from '@/features/cars/cars.dto';
import { useCreateCarForm } from './use-create-car-form';
import { useState } from 'react';
import CreateCarFormMainInformation from './steps/main-information';
import CreateCarFormPricingInformation from './steps/pricing-information';
import CreateCarFormVehicleInformation from './steps/vehicle-information';
import CreateCarFormBookingInformation from './steps/booking-information';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useMutation } from '@tanstack/react-query';
import { CarsApi } from '@/features/cars/cars.api';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const steps = [
  {
    step: 0,
    title: 'Main Information',
  },
  {
    step: 1,
    title: 'Pricing Information',
  },

  {
    step: 2,
    title: 'Vehicle Information',
  },
  {
    step: 3,
    title: 'Booking Information',
  },
];

const defaultCurrencies = ['USD', 'AED', 'EUR', 'AZN', 'RUB', 'GBP'];

export const stepSchemas = {
  0: CreateCarMainInformationDto,
  1: CreateCarPricingInformationDto,
  2: CreateCarVehicleInformationDto,
  3: CreateCarBookingInformationDto,
} as const;

interface CreateCarFormProps {
  defaultValues?: TCreateCarRequest;
  currencies?: string[];
}

export default function CreateCarForm({ defaultValues, currencies = defaultCurrencies }: CreateCarFormProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const form = useCreateCarForm({ currencies, defaultValues });
  const router = useRouter();

  const { mutate: createCar, isPending } = useMutation({
    mutationFn: async (data: TCreateCarRequest) => {
      const response = await CarsApi.createCar(data);

      if (!response.success) {
        throw new Error(response.message);
      }

      return response.data;
    },
    onSuccess: (data) => {
      toast.success('Car created successfully. You can set up car images now.');
      router.push(`/admin/vehicles/${data.id}`);
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : 'Failed to create car');
    },
  });

  const handleNext = async () => {
    const schema = stepSchemas[currentStep as keyof typeof stepSchemas];
    const currentStepFields = Object.keys(schema.shape) as Array<keyof TCreateCarRequest>;
    const isValid = await form.trigger(currentStepFields, { shouldFocus: true });

    if (isValid) {
      setCurrentStep((p) => Math.min(p + 1, steps.length - 1));
    }
  };

  const handlePrev = () => {
    setCurrentStep((p) => Math.max(p - 1, 0));
  };

  const handleStepChange = async (step: number) => {
    if (step === currentStep) return;

    // If going backwards, allow it without validation
    if (step < currentStep) {
      setCurrentStep(step);
      return;
    }

    // If going forwards, validate all steps between current and target
    for (let i = currentStep; i < step; i++) {
      const schema = stepSchemas[i as keyof typeof stepSchemas];
      const stepFields = Object.keys(schema.shape) as Array<keyof TCreateCarRequest>;
      const isValid = await form.trigger(stepFields, { shouldFocus: true });

      if (!isValid) {
        return; // Stop if validation fails
      }
    }

    setCurrentStep(step);
  };

  const onSubmit = async (data: TCreateCarRequest) => {
    createCar(data);
  };

  return (
    <Card className='max-w-4xl mx-auto shadow-xs'>
      <CardHeader>
        <CardTitle>Add New Car</CardTitle>
        <CardDescription>Fill in the details to add a new car</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={form.handleSubmit(onSubmit, (errors) => {
            console.log(errors);
          })}
          onKeyDown={(e) => {
            // Prevent Enter key from submitting the form
            if (e.key === 'Enter' && e.target instanceof HTMLInputElement) {
              e.preventDefault();
            }
          }}
        >
          <div className='mb-8'>
            <Stepper value={currentStep} onValueChange={handleStepChange} className='items-start gap-4'>
              {steps.map(({ step, title }) => (
                <StepperItem key={step} step={step} className='flex-1'>
                  <StepperTrigger
                    disabled={isPending}
                    type='button'
                    className='w-full flex-col items-start gap-2 rounded'
                  >
                    <StepperIndicator asChild className='h-1 w-full bg-border'>
                      <span className='sr-only'>{step}</span>
                    </StepperIndicator>
                    <div className='space-y-0.5'>
                      <StepperTitle>{title}</StepperTitle>
                    </div>
                  </StepperTrigger>
                </StepperItem>
              ))}
            </Stepper>
          </div>

          {/* Step content */}
          {currentStep === 0 && <CreateCarFormMainInformation form={form} />}
          {currentStep === 1 && <CreateCarFormPricingInformation form={form} currencies={currencies} />}
          {currentStep === 2 && <CreateCarFormVehicleInformation form={form} />}
          {currentStep === 3 && <CreateCarFormBookingInformation form={form} />}

          {/* Navigation buttons */}
          <div className='flex justify-between mt-8'>
            <Button
              type='button'
              onClick={handlePrev}
              disabled={currentStep === 0 || isPending}
              className='px-4 py-2 disabled:opacity-50'
            >
              Previous
            </Button>

            {currentStep !== steps.length - 1 ? (
              <Button type='button' onClick={handleNext} disabled={isPending} className='px-4 py-2'>
                Next
              </Button>
            ) : (
              <Button type='button' onClick={form.handleSubmit(onSubmit)} disabled={isPending} className='px-4 py-2'>
                Submit
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
