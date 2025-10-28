'use client';

import ColorSelector from '@/components/color-selector';
import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { CarsApi } from '@/features/cars/cars.api';
import { CreateCarRequestDto } from '@/features/cars/cars.dto';
import {
  CarDriveTypeSchema,
  CarFuelTypeEnumSchema,
  CarTransmissionEnumSchema,
  CarTypeEnumSchema,
} from '@/features/cars/cars.enums';
import { TCarDriveType, TCreateCarRequest } from '@/features/cars/cars.types';
import { useForm } from '@tanstack/react-form';
import { AlertCircle, ArrowRight, Calendar, Car, DollarSign, DoorOpen, Route, Users } from 'lucide-react';
import { useState } from 'react';

const defaultValues: TCreateCarRequest = {
  // Basic Information
  brand: '', // added to form
  model: '', // added to form
  year: new Date().getFullYear(), // added to form
  // Pricing Information
  currency: 'AED',
  pricePerDay: 0, // added to form
  maxMileagePerDay: undefined, // added to form
  pricePerWeek: undefined, // added to form
  maxMileagePerWeek: undefined, // added to form
  pricePerMonth: undefined, // added to form
  maxMileagePerMonth: undefined, // added to form
  // Booking Information
  available: true, // added to form
  featured: false, // added to form
  deposit: 0,
  discountPercentage: 0,
  fuelPolicy: undefined,
  minimumAge: undefined,
  minimumDrivingExperience: undefined,
  minimumRentalDays: undefined,
  // Vehicle Information
  carType: '', // added to form
  color: '#FFFFFF', // added to form
  doorCount: 4, // added to form
  engineVolume: '',
  fuelType: 'PETROL', // added to form
  transmission: 'MANUAL', // added to form
  seatCount: 5, // added to form
  driveType: undefined, // added to form
  horsePower: undefined, // added to form
  torque: undefined, // added to form
  maxSpeed: undefined, // added to form
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
        {/* Basic Information */}
        <FieldGroup className='border border-gray-200 p-4'>
          <h2 className='text-lg font-semibold text-gray-700 uppercase tracking-wider'>Basic Information</h2>

          {/* Brand */}
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

          {/* Model */}
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

          {/* Year */}
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

        {/* Pricing Information */}
        <FieldGroup className='border border-gray-200 p-4'>
          <h2 className='text-lg font-semibold text-gray-700 uppercase tracking-wider'>Pricing Information</h2>

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

          {/* Price Per Day & Max Mileage Per Day */}
          <FieldGroup className='grid grid-cols-2 gap-4'>
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

            <form.Field
              name='maxMileagePerDay'
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                    >
                      Max Mileage Per Day
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id={field.name}
                        name={field.name}
                        type='number'
                        min={0}
                        step='0.01'
                        value={field.state.value || ''}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(Number(e.target.value))}
                        aria-invalid={isInvalid}
                        placeholder='e.g., 150'
                        autoComplete='off'
                      />
                      <InputGroupAddon>
                        <Route className='w-5 h-5 text-gray-400' />
                      </InputGroupAddon>
                    </InputGroup>
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />
          </FieldGroup>

          {/* Price Per Week & Max Mileage Per Week */}
          <FieldGroup className='grid grid-cols-2 gap-4'>
            <form.Field
              name='pricePerWeek'
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                    >
                      Price Per Week
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id={field.name}
                        name={field.name}
                        type='number'
                        min={0}
                        step='0.01'
                        value={field.state.value || ''}
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

            <form.Field
              name='maxMileagePerWeek'
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                    >
                      Max Mileage Per Week
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id={field.name}
                        name={field.name}
                        type='number'
                        min={0}
                        step='0.01'
                        value={field.state.value || ''}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(Number(e.target.value))}
                        aria-invalid={isInvalid}
                        placeholder='e.g., 150'
                        autoComplete='off'
                      />
                      <InputGroupAddon>
                        <Route className='w-5 h-5 text-gray-400' />
                      </InputGroupAddon>
                    </InputGroup>
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />
          </FieldGroup>

          {/* Price Per Month & Max Mileage Per Month */}
          <FieldGroup className='grid grid-cols-2 gap-4'>
            <form.Field
              name='pricePerMonth'
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                    >
                      Price Per Month
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id={field.name}
                        name={field.name}
                        type='number'
                        min={0}
                        step='0.01'
                        value={field.state.value || ''}
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

            <form.Field
              name='maxMileagePerMonth'
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                    >
                      Max Mileage Per Month
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id={field.name}
                        name={field.name}
                        type='number'
                        min={0}
                        step='0.01'
                        value={field.state.value || ''}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(Number(e.target.value))}
                        aria-invalid={isInvalid}
                        placeholder='e.g., 150'
                        autoComplete='off'
                      />
                      <InputGroupAddon>
                        <Route className='w-5 h-5 text-gray-400' />
                      </InputGroupAddon>
                    </InputGroup>
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </FieldGroup>

        {/* Vehicle Information */}
        <FieldGroup className='border border-gray-200 p-4'>
          <h2 className='text-lg font-semibold text-gray-700 uppercase tracking-wider'>Vehicle Information</h2>

          {/* Transmission & Fuel Type */}
          <FieldGroup className='grid grid-cols-2 gap-4'>
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

          {/* Doors & Seats */}
          <FieldGroup className='grid grid-cols-2 gap-4'>
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

          {/* Horse Power & Torque & Max Speed */}
          <FieldGroup className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            <form.Field
              name='horsePower'
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                    >
                      Horse Power
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id={field.name}
                        name={field.name}
                        type='number'
                        min={1}
                        step='1'
                        value={field.state.value || ''}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(Number(e.target.value))}
                        aria-invalid={isInvalid}
                        placeholder='e.g., 100'
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

            <form.Field
              name='torque'
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                    >
                      Torque
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id={field.name}
                        name={field.name}
                        type='number'
                        min={1}
                        step='1'
                        value={field.state.value || ''}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(Number(e.target.value))}
                        aria-invalid={isInvalid}
                        placeholder='e.g., 100'
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

            <form.Field
              name='maxSpeed'
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                    >
                      Max Speed
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id={field.name}
                        name={field.name}
                        type='number'
                        min={1}
                        step='1'
                        value={field.state.value || ''}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(Number(e.target.value))}
                        aria-invalid={isInvalid}
                        placeholder='e.g., 100'
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

          <FieldGroup className='grid grid-cols-2 gap-4'>
            <form.Field
              name='carType'
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                    >
                      Car Type
                    </FieldLabel>
                    <Select value={field.state.value || ''} onValueChange={(value) => field.handleChange(value)}>
                      <SelectTrigger className='h-12 w-full'>
                        <SelectValue placeholder='Select car type' />
                      </SelectTrigger>
                      <SelectContent>
                        {CarTypeEnumSchema.options.map((option) => (
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

            <form.Field
              name='driveType'
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                    >
                      Drive Type
                    </FieldLabel>
                    <Select
                      value={field.state.value || ''}
                      onValueChange={(value) => field.handleChange(value as TCarDriveType)}
                    >
                      <SelectTrigger className='h-12 w-full'>
                        <SelectValue placeholder='Select drive type' />
                      </SelectTrigger>
                      <SelectContent>
                        {CarDriveTypeSchema.options.map((option) => (
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

          <form.Field
            name='color'
            children={(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className='text-sm font-semibold text-gray-700 uppercase tracking-wider'
                  >
                    Color
                  </FieldLabel>
                  <ColorSelector value={field.state.value || ''} onChange={(value) => field.handleChange(value)} />
                </Field>
              );
            }}
          />
        </FieldGroup>

        <FieldGroup className='border border-gray-200 p-4'>
          <h2 className='text-lg font-semibold text-gray-700 uppercase tracking-wider'>Booking Information</h2>

          <FieldGroup className='grid grid-cols-2 gap-4'>
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
                    <p className='text-xs text-muted-foreground'>Show this car in the available section.</p>
                  </div>
                </div>
              )}
            />

            <form.Field
              name='featured'
              children={(field) => (
                <div className='relative flex w-full items-start gap-2 rounded-md border border-input p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50'>
                  <Switch
                    id={field.name}
                    checked={field.state.value || false}
                    onCheckedChange={(checked) => field.handleChange(checked)}
                    onBlur={field.handleBlur}
                    className='order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 data-[state=checked]:[&_span]:translate-x-2 data-[state=checked]:[&_span]:rtl:-translate-x-2'
                  />
                  <div className='grid grow gap-2'>
                    <Label htmlFor={field.name}>Featured</Label>
                    <p className='text-xs text-muted-foreground'>Show this car in the featured section.</p>
                  </div>
                </div>
              )}
            />
          </FieldGroup>
        </FieldGroup>

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
