import { z } from 'zod';

// ============================================================================
// NOTIFICATION TYPE ENUM
// ============================================================================

export const NotificationTypeEnum = z.enum(
  [
    'BOOKING_CONFIRMED',
    'BOOKING_CANCELLED',
    'BOOKING_REMINDER',
    'PAYMENT_CONFIRMED',
    'PAYMENT_FAILED',
    'CAR_AVAILABLE',
    'WELCOME',
    'PASSWORD_RESET',
  ],
  {
    required_error: 'Notification type is required',
    invalid_type_error: 'Invalid notification type',
  }
);

export type TNotificationType = z.infer<typeof NotificationTypeEnum>;

// ============================================================================
// NOTIFICATION STATUS ENUM
// ============================================================================

export const NotificationStatusEnum = z.enum(['PENDING', 'SENT', 'FAILED', 'CANCELLED'], {
  required_error: 'Notification status is required',
  invalid_type_error: 'Invalid notification status',
});

export type TNotificationStatus = z.infer<typeof NotificationStatusEnum>;

// ============================================================================
// CREATE NOTIFICATION SCHEMAS (NotificationRequest)
// ============================================================================

export const CreateNotificationInputSchema = z.object({
  userId: z
    .number({ required_error: 'User ID is required', invalid_type_error: 'User ID must be a number' })
    .int('User ID must be an integer')
    .positive('User ID must be positive'),
  type: NotificationTypeEnum,
  subject: z
    .string({ required_error: 'Subject is required' })
    .min(1, 'Subject is required')
    .max(200, 'Subject must be less than 200 characters'),
  content: z
    .string({ required_error: 'Content is required' })
    .min(1, 'Content is required')
    .max(5000, 'Content must be less than 5000 characters'),
  recipientEmail: z.string({ required_error: 'Recipient email is required' }).email('Invalid email format'),
});

export type TCreateNotificationInput = z.infer<typeof CreateNotificationInputSchema>;

// ============================================================================
// NOTIFICATION OUTPUT SCHEMA (NotificationResponse)
// ============================================================================

export const NotificationOutputSchema = z.object({
  id: z
    .number({ required_error: 'Notification ID is required', invalid_type_error: 'Notification ID must be a number' })
    .int('Notification ID must be an integer')
    .positive('Notification ID must be positive'),
  userId: z
    .number({ required_error: 'User ID is required', invalid_type_error: 'User ID must be a number' })
    .int('User ID must be an integer')
    .positive('User ID must be positive'),
  type: NotificationTypeEnum,
  status: NotificationStatusEnum,
  subject: z.string({ required_error: 'Subject is required' }).min(1, 'Subject is required'),
  content: z.string({ required_error: 'Content is required' }).min(1, 'Content is required'),
  recipientEmail: z.string({ required_error: 'Recipient email is required' }).email('Invalid email format'),
  sentAt: z.string().datetime('Invalid datetime format').nullable().optional(),
  errorMessage: z.string().max(1000, 'Error message must be less than 1000 characters').nullable().optional(),
  retryCount: z
    .number({ invalid_type_error: 'Retry count must be a number' })
    .int('Retry count must be an integer')
    .nonnegative('Retry count cannot be negative')
    .optional(),
  createdAt: z.string({ required_error: 'Created date is required' }).datetime('Invalid datetime format'),
});

export type TNotificationOutput = z.infer<typeof NotificationOutputSchema>;

// ============================================================================
// GET NOTIFICATION PARAMS SCHEMAS
// ============================================================================

export const GetNotificationByIdParamsSchema = z.object({
  id: z
    .number({ required_error: 'Notification ID is required', invalid_type_error: 'Notification ID must be a number' })
    .int('Notification ID must be an integer')
    .positive('Notification ID must be positive'),
});

export const GetNotificationsByUserParamsSchema = z.object({
  userId: z
    .number({ required_error: 'User ID is required', invalid_type_error: 'User ID must be a number' })
    .int('User ID must be an integer')
    .positive('User ID must be positive'),
});

export type TGetNotificationByIdParams = z.infer<typeof GetNotificationByIdParamsSchema>;
export type TGetNotificationsByUserParams = z.infer<typeof GetNotificationsByUserParamsSchema>;

// ============================================================================
// ADMIN NOTIFICATION OPERATIONS (No request body, just triggers)
// ============================================================================

// POST /api/notifications/retry-failed - No schema needed
// POST /api/notifications/process-pending - No schema needed

// ============================================================================
// LEGACY EXPORTS (for backward compatibility)
// ============================================================================

export const NotificationRequestSchema = CreateNotificationInputSchema;
export const NotificationResponseSchema = NotificationOutputSchema;
export type NotificationRequest = TCreateNotificationInput;
export type NotificationResponse = TNotificationOutput;
