import z from 'zod';
import { NotificationStatusEnum, NotificationTypeEnum } from './notifications.enums';

export const GetNotificationByIdParamsDto = z.object({
  id: z.number().int().positive(),
});

export const GetNotificationByIdResponseDto = z.object({
  id: z.number().int().positive(),
  userId: z.number().int().positive(),
  type: NotificationTypeEnum,
  status: NotificationStatusEnum,
  subject: z.string().min(1),
  content: z.string().min(1),
  recipientEmail: z.string().email(),
  sentAt: z.coerce.date(),
  errorMessage: z.string().nullable(),
  retryCount: z.number().int().nonnegative(),
  createdAt: z.coerce.date(),
});

export const GetNotificationsByUserParamsDto = z.object({
  userId: z.number().int().positive(),
});

export const GetNotificationsByUserResponseDto = GetNotificationByIdResponseDto.array();

export const CreateNotificationRequestDto = z.object({
  userId: z.number().int().positive(),
  type: NotificationTypeEnum,
  subject: z.string().min(1),
  content: z.string().min(1),
  recipientEmail: z.string().email(),
});

export const CreateNotificationResponseDto = GetNotificationByIdResponseDto;
