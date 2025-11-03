import { BookingStatusEnum } from './bookings.enums';
import z from 'zod';

export const LocalTimeSchema = z.object({
  hour: z.number().int().positive(),
  minute: z.number().int().positive(),
  second: z.number().int().positive(),
  nano: z.number().int().positive(),
});

export const GetBookingByIdParamsDto = z.object({
  bookingId: z.number().int().positive(),
});
export const GetBookingByIdResponseDto = z.object({
  id: z.number().int().positive(),
  userId: z.number().int().positive(),
  userFullName: z.string(),
  carId: z.number().int().positive(),
  carModel: z.string(),
  carBrand: z.string(),
  totalPrice: z.number().nonnegative(),
  currency: z.string(),
  status: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  pickupTime: LocalTimeSchema,
  returnTime: LocalTimeSchema,
});

export const CreateBookingRequestDto = GetBookingByIdResponseDto.pick({
  userId: true,
  carId: true,
  startDate: true,
  endDate: true,
}).extend({ fullName: z.string(), pickupTime: z.string(), returnTime: z.string() });
export const CreateBookingResponseDto = GetBookingByIdResponseDto;

export const UpdateBookingStatusParamsDto = z.object({
  bookingId: z.number().int().positive(),
});
export const UpdateBookingStatusQueryDto = z.object({
  status: BookingStatusEnum,
});
export const UpdateBookingStatusResponseDto = GetBookingByIdResponseDto;

export const GetBookingsByUserParamsDto = z.object({
  userId: z.number().int().positive(),
});
export const GetBookingsByUserResponseDto = z.array(GetBookingByIdResponseDto);
