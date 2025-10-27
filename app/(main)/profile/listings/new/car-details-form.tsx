'use client';

import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { CarsApi } from '@/features/cars/cars.api';
import { CreateCarRequestDto } from '@/features/cars/cars.dto';
import { CarFuelTypeEnumSchema, CarTransmissionEnumSchema } from '@/features/cars/cars.enums';
import { TCreateCarRequest } from '@/features/cars/cars.types';
import { useForm } from '@tanstack/react-form';
import { AlertCircle, ArrowRight, Calendar, Car, DollarSign, DoorOpen, Users } from 'lucide-react';
import { useState } from 'react';

const defaultValues: TCreateCarRequest = {
  brand: '',
  model: '',
  year: new Date().getFullYear(),
  pricePerDay: 0,
  available: true,
  currency: 'AED',
  carType: '',
  featured: false,
  color: '',
  deposit: 0,
  discountPercentage: 0,
  doorCount: 4,
  engineVolume: '',
  fuelType: 'PETROL',
  transmission: 'MANUAL',
  seatCount: 5,
  driveType: undefined,
  fuelPolicy: undefined,
  horsePower: undefined,
  maxMileagePerDay: undefined,
  maxMileagePerMonth: undefined,
  maxMileagePerWeek: undefined,
  minimumAge: undefined,
  minimumDrivingExperience: undefined,
  minimumRentalDays: undefined,
  torque: undefined,
  maxSpeed: undefined,
  pricePerWeek: undefined,
  pricePerMonth: undefined,
};

interface CarDetailsFormProps {
  setCarId: (carId: number) => void;
  setStep: (step: 2 | 3) => void;
}

export default function CarDetailsForm({ setCarId, setStep }: CarDetailsFormProps) {
  const [error, setError] = useState('');

  const form = useForm({
    formId: 'car-details-form',
    defaultValues,
    validators: {
      onSubmit: CreateCarRequestDto,
    },
    async onSubmit({ value }) {
      setError('');

      try {
        const result = await CarsApi.createCar(value);

        if (result.success && result.data) {
          setCarId(result.data.id);
          setStep(2);
        } else {
          setError(result.message || 'Failed to create car');
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to create car');
      }
    },
  });

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

      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className='space-y-6'
      >
        {/* Brand */}
        <FieldGroup className='space-y-2'>
          <form.Field
            name='brand'
            children={(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                  >
                    Brand
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder='e.g., Toyota, BMW, Mercedes'
                      autoComplete='off'
                    />
                    <InputGroupAddon>
                      <Car className='w-5 h-5 text-gray-400' />
                    </InputGroupAddon>
                  </InputGroup>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </FieldGroup>

        {/* Model */}
        <FieldGroup className='space-y-2'>
          <form.Field
            name='model'
            children={(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                  >
                    Model
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder='e.g., Camry, X5, E-Class'
                      autoComplete='off'
                    />
                    <InputGroupAddon>
                      <Car className='w-5 h-5 text-gray-400' />
                    </InputGroupAddon>
                  </InputGroup>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </FieldGroup>

        {/* Year */}
        <FieldGroup className='space-y-2'>
          <form.Field
            name='year'
            children={(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                  >
                    Year
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id={field.name}
                      name={field.name}
                      type='number'
                      min={1900}
                      max={new Date().getFullYear() + 1}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(Number(e.target.value))}
                      aria-invalid={isInvalid}
                      placeholder='e.g., 2023'
                      autoComplete='off'
                    />
                    <InputGroupAddon>
                      <Calendar className='w-5 h-5 text-gray-400' />
                    </InputGroupAddon>
                  </InputGroup>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </FieldGroup>

        {/* Price Per Day & Currency */}
        <div className='grid grid-cols-2 gap-4'>
          <FieldGroup className='space-y-2'>
            <form.Field
              name='pricePerDay'
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                    >
                      Price Per Day
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id={field.name}
                        name={field.name}
                        type='number'
                        min={0}
                        step='0.01'
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(Number(e.target.value))}
                        aria-invalid={isInvalid}
                        placeholder='e.g., 150'
                        autoComplete='off'
                      />
                      <InputGroupAddon>
                        <DollarSign className='w-5 h-5 text-gray-400' />
                      </InputGroupAddon>
                    </InputGroup>
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />
          </FieldGroup>

          <FieldGroup className='space-y-2'>
            <form.Field
              name='currency'
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                    >
                      Currency
                    </FieldLabel>
                    <Select value={field.state.value} onValueChange={(value) => field.handleChange(value)}>
                      <SelectTrigger className='h-12 w-full'>
                        <SelectValue placeholder='Select currency' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='AED'>AED (د.إ)</SelectItem>
                        <SelectItem value='USD'>USD ($)</SelectItem>
                        <SelectItem value='EUR'>EUR (€)</SelectItem>
                      </SelectContent>
                    </Select>
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <FieldGroup className='space-y-2'>
            <form.Field
              name='transmission'
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                    >
                      Transmission
                    </FieldLabel>
                    <Select value={field.state.value || ''} onValueChange={(value) => field.handleChange(value)}>
                      <SelectTrigger className='h-12 w-full'>
                        <SelectValue placeholder='Select transmission' />
                      </SelectTrigger>
                      <SelectContent>
                        {CarTransmissionEnumSchema.options.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1).toLowerCase()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />
          </FieldGroup>

          <FieldGroup className='space-y-2'>
            <form.Field
              name='fuelType'
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                    >
                      Fuel Type
                    </FieldLabel>
                    <Select value={field.state.value || ''} onValueChange={(value) => field.handleChange(value)}>
                      <SelectTrigger className='h-12 w-full'>
                        <SelectValue placeholder='Select fuel type' />
                      </SelectTrigger>
                      <SelectContent>
                        {CarFuelTypeEnumSchema.options.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option.replace(/_/g, ' ').charAt(0).toUpperCase() + option.slice(1).toLowerCase()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <FieldGroup className='space-y-2'>
            <form.Field
              name='doorCount'
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                    >
                      Doors
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id={field.name}
                        name={field.name}
                        type='number'
                        min={1}
                        max={10}
                        step='1'
                        value={field.state.value || 4}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(Number(e.target.value))}
                        aria-invalid={isInvalid}
                        placeholder='e.g., 4'
                        autoComplete='off'
                      />
                      <InputGroupAddon>
                        <DoorOpen className='w-5 h-5 text-gray-400' />
                      </InputGroupAddon>
                    </InputGroup>
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />
          </FieldGroup>

          <FieldGroup className='space-y-2'>
            <form.Field
              name='seatCount'
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                    >
                      Seats
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id={field.name}
                        name={field.name}
                        type='number'
                        min={1}
                        max={10}
                        step='1'
                        value={field.state.value || 5}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(Number(e.target.value))}
                        aria-invalid={isInvalid}
                        placeholder='e.g., 5'
                        autoComplete='off'
                      />
                      <InputGroupAddon>
                        <Users className='w-5 h-5 text-gray-400' />
                      </InputGroupAddon>
                    </InputGroup>
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </div>

        {/* Available */}
        <form.Field
          name='available'
          children={(field) => (
            <div className='relative flex w-full items-start gap-2 rounded-md border border-input p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50'>
              <Switch
                id={field.name}
                checked={field.state.value}
                onCheckedChange={(checked) => field.handleChange(checked)}
                onBlur={field.handleBlur}
                className='order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 data-[state=checked]:[&_span]:translate-x-2 data-[state=checked]:[&_span]:rtl:-translate-x-2'
              />
              <div className='grid grow gap-2'>
                <Label htmlFor={field.name}>Available for Rent</Label>
                <p className='text-xs text-muted-foreground'>A short description goes here.</p>
              </div>
            </div>
          )}
        />

        {/* Submit Button */}
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button
              type='submit'
              disabled={!canSubmit || isSubmitting}
              className='w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90'
            >
              {isSubmitting ? (
                'Creating Car...'
              ) : (
                <>
                  Next: Upload Images
                  <ArrowRight className='w-5 h-5 ml-2' />
                </>
              )}
            </Button>
          )}
        />
      </form>
    </div>
  );
}
