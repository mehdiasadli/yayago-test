import {
  CreateNotificationRequestDto,
  CreateNotificationResponseDto,
  GetNotificationByIdParamsDto,
  GetNotificationByIdResponseDto,
  GetNotificationsByUserParamsDto,
  GetNotificationsByUserResponseDto,
} from './notifications.dto';
import z from 'zod';

export type TCreateNotificationRequest = z.infer<typeof CreateNotificationRequestDto>;
export type TCreateNotificationResponse = z.infer<typeof CreateNotificationResponseDto>;
export type TGetNotificationByIdParams = z.infer<typeof GetNotificationByIdParamsDto>;
export type TGetNotificationByIdResponse = z.infer<typeof GetNotificationByIdResponseDto>;
export type TGetNotificationsByUserParams = z.infer<typeof GetNotificationsByUserParamsDto>;
export type TGetNotificationsByUserResponse = z.infer<typeof GetNotificationsByUserResponseDto>;
