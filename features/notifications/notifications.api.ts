import {
  CreateNotificationRequestDto,
  CreateNotificationResponseDto,
  GetNotificationByIdResponseDto,
  GetNotificationsByUserResponseDto,
} from './notifications.dto';
import { Api } from '../_common/common.api';
import {
  TCreateNotificationRequest,
  TGetNotificationByIdParams,
  TGetNotificationsByUserParams,
} from './notifications.types';

export class NotificationsApi {
  static readonly baseURL = '/api/notifications';

  /** POST /api/notifications */
  static async createNotification(input: TCreateNotificationRequest) {
    return await Api.post(this.baseURL, input, {
      inputSchema: CreateNotificationRequestDto,
      outputSchema: CreateNotificationResponseDto,
      successMessage: 'Notification created successfully',
    });
  }

  /** GET /api/notifications/{id} */
  static async getNotificationById(params: TGetNotificationByIdParams) {
    return await Api.get(this.baseURL + '/' + params.id, {
      outputSchema: GetNotificationByIdResponseDto,
      successMessage: 'Notification fetched successfully',
    });
  }

  /** GET /api/notifications/user/{userId} */
  static async getNotificationsByUser(params: TGetNotificationsByUserParams) {
    return await Api.get(this.baseURL + '/user/' + params.userId, {
      outputSchema: GetNotificationsByUserResponseDto,
      successMessage: 'Notifications fetched successfully',
    });
  }
}
