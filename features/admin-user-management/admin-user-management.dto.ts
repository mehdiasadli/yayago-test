import z from 'zod';
import { CreateUserRequestDto, CreateUserResponseDto } from '../users/users.dto';
import { GetBookingByIdResponseDto } from '../bookings/bookings.dto';

// Base Admin User DTO
export const AdminUserDto = CreateUserResponseDto.omit({
  role: true,
}).extend({
  active: z.boolean(),
  lastLoginAt: z.coerce.date().nullish(),
  totalBookings: z.number().int().nonnegative().nullish(),
  activeBookings: z.number().int().nonnegative().nullish(),
  avatarName: z.string().nullish(),
  avatarUrl: z.string().url().nullish(),
});

// POST /api/admin/users/admin - Create admin user
export const AdminCreateUserRequestDto = CreateUserRequestDto.extend({
  admin: z.boolean().optional(),
});

export const AdminCreateUserResponseDto = AdminUserDto;

// GET /api/admin/users - Get all users
export const AdminGetUsersQueryDto = z.object({
  searchTerm: z.string().optional(),
  active: z.coerce.boolean().optional(),
  page: z.coerce.number().int().nonnegative().default(0).optional(),
  size: z.coerce.number().int().positive().default(20).optional(),
});

export const AdminGetUsersResponseDto = AdminUserDto.array();

// GET /api/admin/users/{userId} - Get user by ID
export const AdminGetUserByIdParamsDto = z.object({
  userId: z.coerce.number().int().positive(),
});

export const AdminGetUserByIdResponseDto = AdminUserDto;

// PUT /api/admin/users/{userId}/status - Update user status
export const AdminUpdateUserStatusParamsDto = z.object({
  userId: z.coerce.number().int().positive(),
});

export const AdminUpdateUserStatusRequestDto = z.object({
  active: z.boolean(),
  reason: z.string().optional(),
});

// GET /api/admin/users/{userId}/bookings - Get user bookings
export const AdminGetUserBookingsParamsDto = z.object({
  userId: z.coerce.number().int().positive(),
});

export const AdminGetUserBookingsResponseDto = GetBookingByIdResponseDto.array();

// GET /api/admin/users/{userId}/bookings/count - Get total bookings count
export const AdminGetUserTotalBookingsParamsDto = z.object({
  userId: z.coerce.number().int().positive(),
});

export const AdminGetUserTotalBookingsResponseDto = z.number().int().nonnegative();

// GET /api/admin/users/{userId}/bookings/active-count - Get active bookings count
export const AdminGetUserActiveBookingsParamsDto = z.object({
  userId: z.coerce.number().int().positive(),
});

export const AdminGetUserActiveBookingsResponseDto = z.number().int().nonnegative();

// DELETE /api/admin/users/{userId} - Delete user
export const AdminDeleteUserParamsDto = z.object({
  userId: z.coerce.number().int().positive(),
});
