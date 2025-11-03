import z from 'zod';
import {
  CreateCarRequestDto,
  CreateCarResponseDto,
  UpdateCarParamsDto,
  UpdateCarRequestDto,
  UpdateCarResponseDto,
  DeleteCarParamsDto,
  GetCarByIdParamsDto,
  GetCarByIdResponseDto,
  GetCarReviewsParamsDto,
  GetCarReviewsResponseDto,
  GetCarsQueryDto,
  GetCarsResponseDto,
  SearchCarsQueryDto,
  SearchCarsResponseDto,
  GetDistinctTransmissionsResponseDto,
  GetDistinctSeatCountsResponseDto,
  GetDistinctFuelTypesResponseDto,
  GetDistinctDoorCountsResponseDto,
  GetDistinctBrandsResponseDto,
} from './cars.dto';
import {
  CarColorEnumSchema,
  CarDriveTypeSchema,
  CarFuelTypeEnumSchema,
  CarFuelPolicySchema,
  CarStatusEnumSchema,
  CarTransmissionEnumSchema,
  CarTypeEnumSchema,
} from './cars.enums';

// Enum types
export type TCarType = z.infer<typeof CarTypeEnumSchema>;
export type TCarColor = z.infer<typeof CarColorEnumSchema>;
export type TCarTransmission = z.infer<typeof CarTransmissionEnumSchema>;
export type TCarFuelType = z.infer<typeof CarFuelTypeEnumSchema>;
export type TCarFuelPolicy = z.infer<typeof CarFuelPolicySchema>;
export type TCarDriveType = z.infer<typeof CarDriveTypeSchema>;
export type TCarStatus = z.infer<typeof CarStatusEnumSchema>;

// POST /api/cars
export type TCreateCarRequest = z.infer<typeof CreateCarRequestDto>;
export type TCreateCarResponse = z.infer<typeof CreateCarResponseDto>;

// PUT /api/cars/{id}
export type TUpdateCarParams = z.infer<typeof UpdateCarParamsDto>;
export type TUpdateCarRequest = z.infer<typeof UpdateCarRequestDto>;
export type TUpdateCarResponse = z.infer<typeof UpdateCarResponseDto>;

// DELETE /api/cars/{id}
export type TDeleteCarParams = z.infer<typeof DeleteCarParamsDto>;

// GET /api/cars/{id}
export type TGetCarByIdParams = z.infer<typeof GetCarByIdParamsDto>;
export type TGetCarByIdResponse = z.infer<typeof GetCarByIdResponseDto>;

// GET /api/cars/{id}/reviews
export type TGetCarReviewsParams = z.infer<typeof GetCarReviewsParamsDto>;
export type TGetCarReviewsResponse = z.infer<typeof GetCarReviewsResponseDto>;

// GET /api/cars
export type TGetCarsQuery = z.infer<typeof GetCarsQueryDto>;
export type TGetCarsResponse = z.infer<typeof GetCarsResponseDto>;

// GET /api/cars/search
export type TSearchCarsQuery = z.infer<typeof SearchCarsQueryDto>;
export type TSearchCarsResponse = z.infer<typeof SearchCarsResponseDto>;

// GET /api/cars/filters/transmissions
export type TGetDistinctTransmissionsResponse = z.infer<typeof GetDistinctTransmissionsResponseDto>;

// GET /api/cars/filters/seat-counts
export type TGetDistinctSeatCountsResponse = z.infer<typeof GetDistinctSeatCountsResponseDto>;

// GET /api/cars/filters/fuel-types
export type TGetDistinctFuelTypesResponse = z.infer<typeof GetDistinctFuelTypesResponseDto>;

// GET /api/cars/filters/door-counts
export type TGetDistinctDoorCountsResponse = z.infer<typeof GetDistinctDoorCountsResponseDto>;

// GET /api/cars/filters/brands
export type TGetDistinctBrandsResponse = z.infer<typeof GetDistinctBrandsResponseDto>;
