import z from 'zod';

export const BookingStatusEnum = z.enum(['PENDING', 'CONFIRMED', 'CANCELLED'], {
  required_error: 'Booking status is required',
  invalid_type_error: 'Invalid booking status',
  message: 'Invalid booking status',
});
