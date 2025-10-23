import z from 'zod';

export const NotificationTypeEnum = z.enum([
  'BOOKING_CONFIRMED',
  'BOOKING_CANCELLED',
  'BOOKING_REMINDER',
  'PAYMENT_CONFIRMED',
  'PAYMENT_FAILED',
  'CAR_AVAILABLE',
  'WELCOME',
  'PASSWORD_RESET',
]);

export const NotificationStatusEnum = z.enum(['PENDING', 'SENT', 'FAILED', 'CANCELLED']);
