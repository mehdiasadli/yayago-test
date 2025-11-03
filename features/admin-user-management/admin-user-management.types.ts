import z from 'zod';
import {
  AdminUserDto,
  AdminCreateUserRequestDto,
  AdminCreateUserResponseDto,
  AdminGetUsersQueryDto,
  AdminGetUsersResponseDto,
  AdminGetUserByIdParamsDto,
  AdminGetUserByIdResponseDto,
  AdminUpdateUserStatusParamsDto,
  AdminUpdateUserStatusRequestDto,
  AdminGetUserBookingsParamsDto,
  AdminGetUserBookingsResponseDto,
  AdminGetUserTotalBookingsParamsDto,
  AdminGetUserTotalBookingsResponseDto,
  AdminGetUserActiveBookingsParamsDto,
  AdminGetUserActiveBookingsResponseDto,
  AdminDeleteUserParamsDto,
} from './admin-user-management.dto';

// Base types
export type TAdminUser = z.infer<typeof AdminUserDto>;

// POST /api/admin/users/admin
export type TAdminCreateUserRequest = z.infer<typeof AdminCreateUserRequestDto>;
export type TAdminCreateUserResponse = z.infer<typeof AdminCreateUserResponseDto>;

// GET /api/admin/users
export type TAdminGetUsersQuery = z.infer<typeof AdminGetUsersQueryDto>;
export type TAdminGetUsersResponse = z.infer<typeof AdminGetUsersResponseDto>;

// GET /api/admin/users/{userId}
export type TAdminGetUserByIdParams = z.infer<typeof AdminGetUserByIdParamsDto>;
export type TAdminGetUserByIdResponse = z.infer<typeof AdminGetUserByIdResponseDto>;

// PUT /api/admin/users/{userId}/status
export type TAdminUpdateUserStatusParams = z.infer<typeof AdminUpdateUserStatusParamsDto>;
export type TAdminUpdateUserStatusRequest = z.infer<typeof AdminUpdateUserStatusRequestDto>;

// GET /api/admin/users/{userId}/bookings
export type TAdminGetUserBookingsParams = z.infer<typeof AdminGetUserBookingsParamsDto>;
export type TAdminGetUserBookingsResponse = z.infer<typeof AdminGetUserBookingsResponseDto>;

// GET /api/admin/users/{userId}/bookings/count
export type TAdminGetUserTotalBookingsParams = z.infer<typeof AdminGetUserTotalBookingsParamsDto>;
export type TAdminGetUserTotalBookingsResponse = z.infer<typeof AdminGetUserTotalBookingsResponseDto>;

// GET /api/admin/users/{userId}/bookings/active-count
export type TAdminGetUserActiveBookingsParams = z.infer<typeof AdminGetUserActiveBookingsParamsDto>;
export type TAdminGetUserActiveBookingsResponse = z.infer<typeof AdminGetUserActiveBookingsResponseDto>;

// DELETE /api/admin/users/{userId}
export type TAdminDeleteUserParams = z.infer<typeof AdminDeleteUserParamsDto>;
