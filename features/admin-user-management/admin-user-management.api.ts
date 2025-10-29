import z from 'zod';
import { Api } from '../_common/common.api';
import { AdminGetUsersResponseDto, AdminUpdateUserStatusRequestDto } from './admin-user-management.dto';
import { TAdminGetUsersQuery, TAdminUpdateUserStatusRequest } from './admin-user-management.types';
import qs from 'qs';

export class AdminUserManagementApi {
  static readonly baseURL = '/api/admin/users';

  static async getUsers(params?: TAdminGetUsersQuery) {
    const queryString = params ? qs.stringify(params) : '';
    const queryParams = queryString ? '?' + queryString : '';

    return await Api.get(this.baseURL + queryParams, {
      outputSchema: AdminGetUsersResponseDto,
      successMessage: 'Users fetched successfully',
    });
  }

  static async deleteUser(userId: number) {
    return await Api.delete(this.baseURL + '/' + userId, {
      successMessage: 'User deleted successfully',
      outputSchema: z.void(),
    });
  }

  static async updateUserStatus(userId: number, data: TAdminUpdateUserStatusRequest) {
    return await Api.put(this.baseURL + '/' + userId + '/status', data, {
      inputSchema: AdminUpdateUserStatusRequestDto,
      successMessage: 'User status updated successfully',
      outputSchema: z.void(),
    });
  }
}
