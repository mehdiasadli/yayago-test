import z from 'zod';
import { CreateCarImageResponseDto } from '../car-images/car-images.dto';
import { CarDriveTypeSchema, CarFuelPolicySchema, CarStatusEnumSchema } from './cars.enums';

export const CreateCarMainInformationDto = z.object({
  brand: z.string().min(1, 'Brand name is required'),
  model: z.string().min(1, 'Model name is required'),
  year: z.coerce.number().int().min(1850, 'Year must be 1850 or later'),
  features: z.array(z.string()).nullish(),
  description: z.string().nullish(),
  featured: z.boolean().nullish(),
  available: z.boolean(),
});

export const CreateCarPricingInformationDto = z.object({
  currency: z.string(),
  pricePerDay: z.number().positive(),
  pricePerWeek: z.number().positive().nullish(),
  pricePerMonth: z.number().positive().nullish(),
  discountPercentage: z.number().nullish(),
});

export const CreateCarVehicleInformationDto = z.object({
  horsePower: z.number().int().nullish(),
  torque: z.number().int().nullish(),
  maxSpeed: z.number().int().nullish(),
  driveType: CarDriveTypeSchema.nullish(),
  fuelType: z.string().nullish(),
  doorCount: z.number().int().nullish(),
  carType: z.string().nullish(),
  engineVolume: z.string().nullish(),
  color: z.string().nullish(),
  transmission: z.string().nullish(),
  seatCount: z.number().int().nullish(),
});

export const CreateCarBookingInformationDto = z.object({
  minimumRentalDays: z.number().int().min(1).nullish(),
  maxMileagePerDay: z.number().int().nullish(),
  maxMileagePerWeek: z.number().int().nullish(),
  maxMileagePerMonth: z.number().int().nullish(),
  minimumAge: z.number().int().min(12).nullish(),
  minimumDrivingExperience: z.number().int().min(1).nullish(),
  deposit: z.number().nullish(),
  fuelPolicy: CarFuelPolicySchema.nullish(),
});

export const CreateCarRequestDto = CreateCarMainInformationDto.merge(CreateCarPricingInformationDto)
  .merge(CreateCarVehicleInformationDto)
  .merge(CreateCarBookingInformationDto);

export const CreateCarResponseDto = CreateCarRequestDto.extend({
  id: z.number().int().positive(),
  createdByFullName: z.string().nullish(),
  primaryImageUrl: z.string().url().nullish(),
  images: z.array(CreateCarImageResponseDto).nullish(),
  viewCount: z.number().int().nullish(),
});

export const UpdateCarParamsDto = z.object({
  id: z.number().int().positive(),
});

export const UpdateCarRequestDto = CreateCarRequestDto.partial();

export const UpdateCarResponseDto = CreateCarResponseDto;

export const DeleteCarParamsDto = z.object({
  id: z.number().int().positive(),
});

export const GetCarByIdParamsDto = z.object({
  id: z.number().int().positive(),
});

export const GetCarByIdResponseDto = CreateCarResponseDto.extend({
  favoritesCount: z.number().int().nonnegative().nullish(),
  isFavorite: z.boolean().nullish(),
  reviewCount: z.number().int().nonnegative().nullish(),
  averageRating: z.number().min(1).max(10).nullish(),
  status: CarStatusEnumSchema.nullish(),
  rejectionReason: z.string().nullish(),
});

// GET /api/cars/{id}/reviews - Get car reviews
export const GetCarReviewsParamsDto = z.object({
  id: z.number().int().positive(),
});

export const GetCarReviewsResponseDto = z
  .object({
    id: z.number().int().positive(),
    carId: z.number().int().positive(),
    userId: z.number().int().positive(),
    userFullName: z.string().min(1),
    rating: z.number().int().min(1).max(10),
    comment: z.string().min(1),
    createdAt: z.coerce.date(),
  })
  .array();

// GET /api/cars - Get all cars
export const GetCarsQueryDto = z.object({
  page: z.coerce.number().int().nonnegative().default(0).optional(),
  limit: z.coerce.number().int().positive().min(1).max(100).default(20).optional(),
});

export const GetCarsResponseDto = z.object({
  cars: GetCarByIdResponseDto.array(),
  pagination: z.object({
    page: z.number().int().nonnegative(),
    limit: z.number().int().positive(),
    totalItems: z.number().int().nonnegative(),
    totalPages: z.number().int().nonnegative(),
    hasNextPage: z.boolean(),
    hasPreviousPage: z.boolean(),
  }),
});

// GET /api/cars/search - Search cars with filters
export const SearchCarsQueryDto = z.object({
  q: z.string().optional(),
  minPrice: z.coerce.number().positive().optional(),
  maxPrice: z.coerce.number().positive().optional(),
  minYear: z.coerce.number().int().optional(),
  maxYear: z.coerce.number().int().optional(),
  transmissions: z.array(z.string()).optional(),
  seats: z.array(z.coerce.number().int()).optional(),
  doors: z.array(z.coerce.number().int()).optional(),
  fuelTypes: z.array(z.string()).optional(),
  driveTypes: z.array(CarDriveTypeSchema).optional(),
  featured: z.coerce.boolean().optional(),
  brands: z.array(z.string()).optional(),
  sortBy: z.string().optional(),
  sortDirection: z.string().optional(),
  page: z.coerce.number().int().nonnegative().default(0).optional(),
  limit: z.coerce.number().int().positive().min(1).max(100).default(20).optional(),
  latitude: z.coerce.number().optional(),
  longitude: z.coerce.number().optional(),
  radiusKm: z.coerce.number().optional(),
});

export const SearchCarsResponseDto = z.object({
  cars: GetCarByIdResponseDto.array(),
  pagination: z.object({
    page: z.number().int().nonnegative(),
    limit: z.number().int().positive(),
    totalItems: z.number().int().nonnegative(),
    totalPages: z.number().int().nonnegative(),
    hasNextPage: z.boolean(),
    hasPreviousPage: z.boolean(),
  }),
});

// GET /api/cars/filters/transmissions - Get distinct transmissions
export const GetDistinctTransmissionsResponseDto = z.array(z.string());

// GET /api/cars/filters/seat-counts - Get distinct seat counts
export const GetDistinctSeatCountsResponseDto = z.array(z.number().int());

// GET /api/cars/filters/fuel-types - Get distinct fuel types
export const GetDistinctFuelTypesResponseDto = z.array(z.string());

// GET /api/cars/filters/door-counts - Get distinct door counts
export const GetDistinctDoorCountsResponseDto = z.array(z.number().int());

// GET /api/cars/filters/brands - Get distinct brands
export const GetDistinctBrandsResponseDto = z.array(z.string());
