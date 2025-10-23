import z from 'zod';
import { CreateCarImageResponseDto } from '../car-images/car-images.dto';

export const CreateCarRequestDto = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.number().int().min(1850),
  currency: z.string(),
  pricePerDay: z.number().positive(),
  available: z.boolean(),
  fuelType: z.string().nullish(),
  doorCount: z.number().int().nullish(),
  carType: z.string().nullish(),
  engineVolume: z.string().nullish(),
  color: z.string().nullish(),
  featured: z.boolean().nullish(),
  deposit: z.number().nullish(),
  discountPercentage: z.number().nullish(),
  transmission: z.string().nullish(),
  seatCount: z.number().int().nullish(),
});

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

export const GetCarByIdResponseDto = CreateCarResponseDto;

export const GetCarsResponseDto = CreateCarResponseDto.array();

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

export const GetCarsQueryDto = z.object({
  q: z.string().optional(),
  brand: z.string().optional(),
  location: z.string().optional(),
  carTypes: z.array(z.string()).optional(),
  transmissions: z.array(z.string()).optional(),
  fuelTypes: z.array(z.string()).optional(),
  priceRange: z.tuple([z.number(), z.number()]).optional(),
  yearRange: z.tuple([z.number(), z.number()]).optional(),
  featuredOnly: z.boolean().optional(),
  noDepositOnly: z.boolean().optional(),
});
