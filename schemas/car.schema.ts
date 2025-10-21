import { z } from 'zod';
import { CarImageOutputSchema } from './car-image.schema';

// ============================================================================
// CAR INPUT SCHEMAS (CarDetailsDto)
// ============================================================================

export const CarDetailsInputSchema = z.object({
  brand: z
    .string({ required_error: 'Brand is required' })
    .min(1, 'Brand is required')
    .max(50, 'Brand must be less than 50 characters'),
  model: z
    .string({ required_error: 'Model is required' })
    .min(1, 'Model is required')
    .max(50, 'Model must be less than 50 characters'),
  year: z
    .number({ required_error: 'Year is required', invalid_type_error: 'Year must be a number' })
    .int('Year must be an integer')
    .min(1900, 'Year must be 1900 or later')
    .max(new Date().getFullYear() + 1, 'Year cannot be in the future'),
  pricePerDay: z
    .number({ required_error: 'Price per day is required', invalid_type_error: 'Price must be a number' })
    .positive('Price must be positive')
    .max(100000, 'Price cannot exceed 100,000'),
  currency: z
    .string({ required_error: 'Currency is required' })
    .min(1, 'Currency is required')
    .max(10, 'Currency must be less than 10 characters')
    .default('AZN'),
  available: z.boolean({ invalid_type_error: 'Available must be a boolean' }).default(true),
  fuelType: z
    .string({ required_error: 'Fuel type is required' })
    .min(1, 'Fuel type is required')
    .max(20, 'Fuel type must be less than 20 characters'),
  doorCount: z
    .number({ required_error: 'Door count is required', invalid_type_error: 'Door count must be a number' })
    .int('Door count must be an integer')
    .min(2, 'Door count must be at least 2')
    .max(8, 'Door count cannot exceed 8'),
  carType: z
    .string({ required_error: 'Car type is required' })
    .min(1, 'Car type is required')
    .max(30, 'Car type must be less than 30 characters'),
  engineVolume: z
    .string({ required_error: 'Engine volume is required' })
    .min(1, 'Engine volume is required')
    .max(10, 'Engine volume must be less than 10 characters'),
  color: z
    .string({ required_error: 'Color is required' })
    .min(1, 'Color is required')
    .max(30, 'Color must be less than 30 characters'),
});

export type TCarDetailsInput = z.infer<typeof CarDetailsInputSchema>;

// ============================================================================
// CAR OUTPUT SCHEMAS (CarDetailsResponseDto)
// ============================================================================

export const CarDetailsOutputSchema = CarDetailsInputSchema.extend({
  id: z
    .number({ required_error: 'Car ID is required', invalid_type_error: 'Car ID must be a number' })
    .int('Car ID must be an integer')
    .positive('Car ID must be positive'),
  createdByFullName: z.string().min(1, 'Creator name is required').optional(),
  primaryImageUrl: z.string().url('Primary image must be a valid URL').nullable().optional(),
  images: z
    .array(CarImageOutputSchema) // Will reference ImageResponseSchema
    .optional(),
});

export type TCarDetailsOutput = z.infer<typeof CarDetailsOutputSchema>;

// ============================================================================
// ADMIN CAR SCHEMAS (AdminCarDto)
// ============================================================================

export const AdminCarSchema = z.object({
  id: z
    .number({ required_error: 'Car ID is required', invalid_type_error: 'Car ID must be a number' })
    .int('Car ID must be an integer')
    .positive('Car ID must be positive'),
  brand: z
    .string({ required_error: 'Brand is required' })
    .min(1, 'Brand is required')
    .max(50, 'Brand must be less than 50 characters'),
  model: z
    .string({ required_error: 'Model is required' })
    .min(1, 'Model is required')
    .max(50, 'Model must be less than 50 characters'),
  year: z
    .number({ required_error: 'Year is required', invalid_type_error: 'Year must be a number' })
    .int('Year must be an integer')
    .min(1900, 'Year must be 1900 or later'),
  pricePerDay: z
    .number({ required_error: 'Price per day is required', invalid_type_error: 'Price must be a number' })
    .positive('Price must be positive'),
  currency: z.string({ required_error: 'Currency is required' }).min(1, 'Currency is required'),
  available: z.boolean({ invalid_type_error: 'Available must be a boolean' }),
  createdAt: z.string({ required_error: 'Created date is required' }).datetime('Invalid datetime format'),
  updatedAt: z.string({ required_error: 'Updated date is required' }).datetime('Invalid datetime format'),
  totalBookings: z
    .number({ invalid_type_error: 'Total bookings must be a number' })
    .int('Total bookings must be an integer')
    .nonnegative('Total bookings cannot be negative')
    .optional(),
  activeBookings: z
    .number({ invalid_type_error: 'Active bookings must be a number' })
    .int('Active bookings must be an integer')
    .nonnegative('Active bookings cannot be negative')
    .optional(),
  totalRevenue: z
    .number({ invalid_type_error: 'Total revenue must be a number' })
    .nonnegative('Total revenue cannot be negative')
    .optional(),
});

export type TAdminCar = z.infer<typeof AdminCarSchema>;

// ============================================================================
// CAR STATUS UPDATE SCHEMAS
// ============================================================================

export const CarStatusUpdateInputSchema = z.object({
  available: z.boolean({
    required_error: 'Available status is required',
    invalid_type_error: 'Available must be a boolean',
  }),
  reason: z.string().min(1, 'Reason is required').max(500, 'Reason must be less than 500 characters').optional(),
});

export type TCarStatusUpdateInput = z.infer<typeof CarStatusUpdateInputSchema>;

// ============================================================================
// CAR PRICE UPDATE SCHEMAS
// ============================================================================

export const CarPriceUpdateInputSchema = z.object({
  pricePerDay: z
    .number({ required_error: 'Price per day is required', invalid_type_error: 'Price must be a number' })
    .positive('Price must be positive')
    .max(100000, 'Price cannot exceed 100,000'),
  reason: z.string().min(1, 'Reason is required').max(500, 'Reason must be less than 500 characters').optional(),
});

export type TCarPriceUpdateInput = z.infer<typeof CarPriceUpdateInputSchema>;

// ============================================================================
// GET CARS QUERY PARAMS
// ============================================================================

export const GetCarsQuerySchema = z.object({
  searchTerm: z.string().max(100, 'Search term must be less than 100 characters').optional(),
  brand: z.string().max(50, 'Brand must be less than 50 characters').optional(),
  model: z.string().max(50, 'Model must be less than 50 characters').optional(),
  year: z
    .number({ invalid_type_error: 'Year must be a number' })
    .int('Year must be an integer')
    .min(1900, 'Year must be 1900 or later')
    .optional(),
  minPrice: z
    .number({ invalid_type_error: 'Min price must be a number' })
    .nonnegative('Min price cannot be negative')
    .optional(),
  maxPrice: z
    .number({ invalid_type_error: 'Max price must be a number' })
    .positive('Max price must be positive')
    .optional(),
  available: z.boolean({ invalid_type_error: 'Available must be a boolean' }).optional(),
});

export type TGetCarsQuery = z.infer<typeof GetCarsQuerySchema>;

// ============================================================================
// LEGACY EXPORTS (for backward compatibility)
// ============================================================================

export const CarSchema = CarDetailsOutputSchema;
export type CarSchemaType = TCarDetailsOutput;
