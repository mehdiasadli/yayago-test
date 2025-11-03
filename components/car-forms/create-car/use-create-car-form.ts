import { TCreateCarRequest } from '@/features/cars/cars.types';
import { useForm, UseFormReturn } from 'react-hook-form';
import {
  CarColorEnumSchema,
  CarDriveTypeSchema,
  CarFuelPolicySchema,
  CarFuelTypeEnumSchema,
  CarTransmissionEnumSchema,
  CarTypeEnumSchema,
} from '@/features/cars/cars.enums';
import { CreateCarRequestDto } from '@/features/cars/cars.dto';
import { zodResolver } from '@hookform/resolvers/zod';

const defaultCurrencies = [
  'USD',
  'EUR',
  'AZN',
  'GBP',
  'CAD',
  'AUD',
  'CHF',
  'CNY',
  'JPY',
  'KRW',
  'MXN',
  'NZD',
  'RUB',
  'SAR',
  'SGD',
  'THB',
  'TRY',
  'ZAR',
];

interface UseCreateCarFormProps {
  defaultValues?: TCreateCarRequest;
  currencies?: string[];
}

export function useCreateCarForm({ defaultValues, currencies = defaultCurrencies }: UseCreateCarFormProps = {}) {
  return useForm<TCreateCarRequest>({
    defaultValues: {
      // MAIN INFORMATION
      brand: 'Toyota',
      model: 'Corolla',
      year: new Date().getFullYear(),
      available: true,

      // BASIC INFORMATION
      description: '',
      features: [],
      featured: false,

      // PRICING INFORMATION
      currency: currencies[0],
      pricePerDay: 100,
      pricePerWeek: 500,
      pricePerMonth: 2000,
      discountPercentage: 0,

      // VEHICLE INFORMATION
      carType: CarTypeEnumSchema.enum.SEDAN,
      color: CarColorEnumSchema.enum.WHITE,
      transmission: CarTransmissionEnumSchema.enum.MANUAL,
      fuelType: CarFuelTypeEnumSchema.enum.PETROL,
      doorCount: 4,
      seatCount: 5,
      driveType: CarDriveTypeSchema.enum.FRONT,
      horsePower: 0,
      maxSpeed: 0,
      torque: 0,
      engineVolume: '1.0',

      // BOOKING INFORMATION
      fuelPolicy: CarFuelPolicySchema.enum.SAME_TO_SAME,
      deposit: 0,
      maxMileagePerDay: 0,
      maxMileagePerWeek: 0,
      maxMileagePerMonth: 0,
      minimumAge: 18,
      minimumDrivingExperience: 1,
      minimumRentalDays: 3,

      ...defaultValues,
    },

    resolver: zodResolver(CreateCarRequestDto),
  });
}
