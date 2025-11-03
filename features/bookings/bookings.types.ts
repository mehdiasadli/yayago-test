import { BookingStatusEnum } from './bookings.enums';
import z from 'zod';
import {
  GetBookingByIdParamsDto,
  GetBookingByIdResponseDto,
  CreateBookingRequestDto,
  CreateBookingResponseDto,
  GetBookingsByUserParamsDto,
  GetBookingsByUserResponseDto,
  LocalTimeSchema,
  UpdateBookingStatusParamsDto,
  UpdateBookingStatusQueryDto,
  UpdateBookingStatusResponseDto,
} from './bookings.dto';

export type TLocalTime = z.infer<typeof LocalTimeSchema>;
export type TBookingStatus = z.infer<typeof BookingStatusEnum>;

export type TGetBookingByIdParams = z.infer<typeof GetBookingByIdParamsDto>;
export type TGetBookingByIdResponse = z.infer<typeof GetBookingByIdResponseDto>;
export type TCreateBookingRequest = z.infer<typeof CreateBookingRequestDto>;
export type TCreateBookingResponse = z.infer<typeof CreateBookingResponseDto>;
export type TGetBookingsByUserParams = z.infer<typeof GetBookingsByUserParamsDto>;
export type TGetBookingsByUserResponse = z.infer<typeof GetBookingsByUserResponseDto>;
export type TUpdateBookingStatusParams = z.infer<typeof UpdateBookingStatusParamsDto>;
export type TUpdateBookingStatusQuery = z.infer<typeof UpdateBookingStatusQueryDto>;
export type TUpdateBookingStatusResponse = z.infer<typeof UpdateBookingStatusResponseDto>;
