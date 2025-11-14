import { z } from 'zod';

// ============================================================================
// LOCAL TIME SCHEMA (Backend LocalTime object)
// ============================================================================

export const LocalTimeSchema = z.object({
  hour: z
    .number({ required_error: 'Hour is required', invalid_type_error: 'Hour must be a number' })
    .int('Hour must be an integer')
    .min(0, 'Hour must be between 0 and 23')
    .max(23, 'Hour must be between 0 and 23'),
  minute: z
    .number({ required_error: 'Minute is required', invalid_type_error: 'Minute must be a number' })
    .int('Minute must be an integer')
    .min(0, 'Minute must be between 0 and 59')
    .max(59, 'Minute must be between 0 and 59'),
  second: z
    .number({ invalid_type_error: 'Second must be a number' })
    .int('Second must be an integer')
    .min(0, 'Second must be between 0 and 59')
    .max(59, 'Second must be between 0 and 59')
    .default(0),
  nano: z
    .number({ invalid_type_error: 'Nano must be a number' })
    .int('Nano must be an integer')
    .min(0, 'Nano must be non-negative')
    .default(0),
});

export type TLocalTime = z.infer<typeof LocalTimeSchema>;

// ============================================================================
// BOOKING STATUS ENUM
// ============================================================================

export const BookingStatusEnum = z.enum(['PENDING', 'CONFIRMED', 'CANCELLED'], {
  required_error: 'Booking status is required',
  invalid_type_error: 'Invalid booking status',
});

export type TBookingStatus = z.infer<typeof BookingStatusEnum>;

// ============================================================================
// CREATE BOOKING SCHEMAS (BookingRequest)
// ============================================================================

export const CreateBookingInputSchema = z.object({
  userId: z
    .number({ required_error: 'User ID is required', invalid_type_error: 'User ID must be a number' })
    .int('User ID must be an integer')
    .positive('User ID must be positive'),
  fullName: z
    .string({ required_error: 'Full name is required' })
    .min(1, 'Full name is required')
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters'),
  carId: z
    .number({ required_error: 'Car ID is required', invalid_type_error: 'Car ID must be a number' })
    .int('Car ID must be an integer')
    .positive('Car ID must be positive'),
  startDate: z
    .string({ required_error: 'Start date is required' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Start date must be in YYYY-MM-DD format'),
  endDate: z
    .string({ required_error: 'End date is required' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'End date must be in YYYY-MM-DD format'),
  pickupTime: LocalTimeSchema.optional(),
  returnTime: LocalTimeSchema.optional(),
});

export const CreateBookingFormInputSchema = CreateBookingInputSchema.omit({
  startDate: true,
  endDate: true,
  pickupTime: true,
  returnTime: true,
  userId: true,
  fullName: true,
}).extend({
  startDateTime: z.date({ required_error: 'Start date and time is required' }),
  endDateTime: z.date({ required_error: 'End date and time is required' }),
});

export type TCreateBookingFormInput = z.infer<typeof CreateBookingFormInputSchema>;

// Add custom validation for date range
export const CreateBookingInputWithValidationSchema = CreateBookingInputSchema.refine(
  (data) => {
    const start = new Date(data.startDate);
    const end = new Date(data.endDate);
    return end >= start;
  },
  {
    message: 'End date must be on or after start date',
    path: ['endDate'],
  }
);

export type TCreateBookingInput = z.infer<typeof CreateBookingInputSchema>;

// ============================================================================
// BOOKING OUTPUT SCHEMA (BookingDetails)
// ============================================================================

export const BookingOutputSchema = z.object({
  id: z
    .number({ required_error: 'Booking ID is required', invalid_type_error: 'Booking ID must be a number' })
    .int('Booking ID must be an integer')
    .positive('Booking ID must be positive'),
  userId: z
    .number({ required_error: 'User ID is required', invalid_type_error: 'User ID must be a number' })
    .int('User ID must be an integer')
    .positive('User ID must be positive'),
  userFullName: z.string({ required_error: 'User full name is required' }).min(1, 'User full name is required'),
  carId: z
    .number({ required_error: 'Car ID is required', invalid_type_error: 'Car ID must be a number' })
    .int('Car ID must be an integer')
    .positive('Car ID must be positive'),
  carModel: z.string({ required_error: 'Car model is required' }).min(1, 'Car model is required'),
  carBrand: z.string({ required_error: 'Car brand is required' }).min(1, 'Car brand is required'),
  totalPrice: z
    .number({ required_error: 'Total price is required', invalid_type_error: 'Total price must be a number' })
    .nonnegative('Total price cannot be negative'),
  currency: z
    .string({ required_error: 'Currency is required' })
    .min(1, 'Currency is required')
    .max(10, 'Currency must be less than 10 characters'),
  status: z.string({ required_error: 'Status is required' }).min(1, 'Status is required'),
  startDate: z
    .string({ required_error: 'Start date is required' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Start date must be in YYYY-MM-DD format'),
  endDate: z
    .string({ required_error: 'End date is required' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'End date must be in YYYY-MM-DD format'),
  pickupTime: LocalTimeSchema.optional(),
  returnTime: LocalTimeSchema.optional(),
});

export type TBookingOutput = z.infer<typeof BookingOutputSchema>;

// ============================================================================
// UPDATE BOOKING STATUS SCHEMAS
// ============================================================================

export const UpdateBookingStatusQuerySchema = z.object({
  status: BookingStatusEnum,
});

export const UpdateBookingStatusParamsSchema = z.object({
  bookingId: z
    .number({ required_error: 'Booking ID is required', invalid_type_error: 'Booking ID must be a number' })
    .int('Booking ID must be an integer')
    .positive('Booking ID must be positive'),
});

export type TUpdateBookingStatusQuery = z.infer<typeof UpdateBookingStatusQuerySchema>;
export type TUpdateBookingStatusParams = z.infer<typeof UpdateBookingStatusParamsSchema>;

// ============================================================================
// GET BOOKING PARAMS SCHEMAS
// ============================================================================

export const GetBookingByIdParamsSchema = z.object({
  bookingId: z
    .number({ required_error: 'Booking ID is required', invalid_type_error: 'Booking ID must be a number' })
    .int('Booking ID must be an integer')
    .positive('Booking ID must be positive'),
});

export const GetBookingsByUserParamsSchema = z.object({
  userId: z
    .number({ required_error: 'User ID is required', invalid_type_error: 'User ID must be a number' })
    .int('User ID must be an integer')
    .positive('User ID must be positive'),
});

export type TGetBookingByIdParams = z.infer<typeof GetBookingByIdParamsSchema>;
export type TGetBookingsByUserParams = z.infer<typeof GetBookingsByUserParamsSchema>;

// ============================================================================
// LEGACY EXPORTS (for backward compatibility)
// ============================================================================

export const BookingRequestSchema = CreateBookingInputSchema;
export const BookingDetailsSchema = BookingOutputSchema;
export type BookingRequest = TCreateBookingInput;
export type BookingDetails = TBookingOutput;
