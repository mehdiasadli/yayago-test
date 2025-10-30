import z from 'zod';
import { GetCarByIdResponseDto } from '../cars/cars.dto';

export const AdminGetCarsQueryDto = z.object({
  searchTerm: z.string().optional(),
  brand: z.string().optional(),
  model: z.string().optional(),
  year: z.coerce.number().int().min(1860).optional(),
  minPrice: z.coerce.number().positive().optional(),
  maxPrice: z.coerce.number().positive().optional(),
  available: z.coerce.boolean().optional(),
});

export const AdminGetCarsResponseDto = GetCarByIdResponseDto.omit({
  images: true,
  primaryImageUrl: true,
  createdByFullName: true,
  available: true,
}).array();

export const AdminDeleteCarParamsDto = z.object({
  carId: z.number().int().positive(),
});
