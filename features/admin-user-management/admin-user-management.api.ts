import z from 'zod';
import { Api } from '../_common/common.api';
import {
  TAdminCreateUserRequest,
  TAdminGetUsersQuery,
  TAdminGetUserByIdParams,
  TAdminUpdateUserStatusParams,
  TAdminUpdateUserStatusRequest,
  TAdminGetUserBookingsParams,
  TAdminGetUserTotalBookingsParams,
  TAdminGetUserActiveBookingsParams,
  TAdminDeleteUserParams,
} from './admin-user-management.types';
import {
  AdminCreateUserRequestDto,
  AdminCreateUserResponseDto,
  AdminGetUsersResponseDto,
  AdminGetUserByIdResponseDto,
  AdminUpdateUserStatusRequestDto,
  AdminGetUserBookingsResponseDto,
  AdminGetUserTotalBookingsResponseDto,
  AdminGetUserActiveBookingsResponseDto,
} from './admin-user-management.dto';
import qs from 'qs';

export class AdminUserManagementApi {
  static readonly baseURL = '/api/admin/users';

  /**
   * POST /api/admin/users/admin - Create admin user
   */
  static async createAdminUser(data: TAdminCreateUserRequest) {
    return await Api.post(`${this.baseURL}/admin`, data, {
      inputSchema: AdminCreateUserRequestDto,
      outputSchema: AdminCreateUserResponseDto,
      successMessage: 'Admin user created successfully',
    });
  }

  /**
   * GET /api/admin/users - Get all users with filters
   */
  static async getUsers(query?: TAdminGetUsersQuery) {
    const queryString = query ? qs.stringify(query, { skipNulls: true }) : '';
    const queryParams = queryString ? '?' + queryString : '';

    return await Api.get(this.baseURL + queryParams, {
      outputSchema: AdminGetUsersResponseDto,
      successMessage: 'Users fetched successfully',
    });
  }

  /**
   * GET /api/admin/users/{userId} - Get user by ID
   */
  static async getUserById(params: TAdminGetUserByIdParams) {
    return await Api.get(`${this.baseURL}/${params.userId}`, {
      outputSchema: AdminGetUserByIdResponseDto,
      successMessage: 'User fetched successfully',
    });
  }

  /**
   * PUT /api/admin/users/{userId}/status - Update user status
   */
  static async updateUserStatus(params: TAdminUpdateUserStatusParams, data: TAdminUpdateUserStatusRequest) {
    return await Api.put(`${this.baseURL}/${params.userId}/status`, data, {
      inputSchema: AdminUpdateUserStatusRequestDto,
      outputSchema: z.void(),
      successMessage: 'User status updated successfully',
    });
  }

  /**
   * GET /api/admin/users/{userId}/bookings - Get all bookings for a user
   */
  static async getUserBookings(params: TAdminGetUserBookingsParams) {
    return await Api.get(`${this.baseURL}/${params.userId}/bookings`, {
      outputSchema: AdminGetUserBookingsResponseDto,
      successMessage: 'User bookings fetched successfully',
    });
  }

  /**
   * GET /api/admin/users/{userId}/bookings/count - Get total bookings count
   */
  static async getUserTotalBookings(params: TAdminGetUserTotalBookingsParams) {
    return await Api.get(`${this.baseURL}/${params.userId}/bookings/count`, {
      outputSchema: AdminGetUserTotalBookingsResponseDto,
      successMessage: 'User total bookings fetched successfully',
    });
  }

  /**
   * GET /api/admin/users/{userId}/bookings/active-count - Get active bookings count
   */
  static async getUserActiveBookings(params: TAdminGetUserActiveBookingsParams) {
    return await Api.get(`${this.baseURL}/${params.userId}/bookings/active-count`, {
      outputSchema: AdminGetUserActiveBookingsResponseDto,
      successMessage: 'User active bookings fetched successfully',
    });
  }

  /**
   * DELETE /api/admin/users/{userId} - Delete user
   */
  static async deleteUser(params: TAdminDeleteUserParams) {
    return await Api.delete(`${this.baseURL}/${params.userId}`, {
      outputSchema: z.void(),
      successMessage: 'User deleted successfully',
    });
  }
}
