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
  GetCarsResponseDto,
  GetCarReviewsParamsDto,
  GetCarReviewsResponseDto,
} from './cars.dto';
import { CarColorEnumSchema, CarFuelTypeEnumSchema, CarTransmissionEnumSchema, CarTypeEnumSchema } from './cars.enums';

export type TCarType = z.infer<typeof CarTypeEnumSchema>;
export type TCarColor = z.infer<typeof CarColorEnumSchema>;
export type TCarTransmission = z.infer<typeof CarTransmissionEnumSchema>;
export type TCarFuelType = z.infer<typeof CarFuelTypeEnumSchema>;

export type TCreateCarRequest = z.infer<typeof CreateCarRequestDto>;
export type TCreateCarResponse = z.infer<typeof CreateCarResponseDto>;
export type TUpdateCarParams = z.infer<typeof UpdateCarParamsDto>;
export type TUpdateCarRequest = z.infer<typeof UpdateCarRequestDto>;
export type TUpdateCarResponse = z.infer<typeof UpdateCarResponseDto>;
export type TDeleteCarParams = z.infer<typeof DeleteCarParamsDto>;
export type TGetCarByIdParams = z.infer<typeof GetCarByIdParamsDto>;
export type TGetCarByIdResponse = z.infer<typeof GetCarByIdResponseDto>;
export type TGetCarsResponse = z.infer<typeof GetCarsResponseDto>;
export type TGetCarReviewsParams = z.infer<typeof GetCarReviewsParamsDto>;
export type TGetCarReviewsResponse = z.infer<typeof GetCarReviewsResponseDto>;
