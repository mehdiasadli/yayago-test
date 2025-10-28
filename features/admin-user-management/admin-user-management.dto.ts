import z from 'zod';
import { CreateUserRequestDto, CreateUserResponseDto } from '../users/users.dto';

export const AdminCreateUserRequestDto = CreateUserRequestDto.extend({
  admin: z.boolean(),
});

export const AdminCreateUserResponseDto = CreateUserResponseDto.omit({
  role: true,
}).extend({
  active: z.boolean(),
  lastLoginAt: z.coerce.date(),
  totalBookings: z.number().int().nonnegative(),
  activeBookings: z.number().int().nonnegative(),
});

export const AdminUpdateUserStatusParamsDto = z.object({
  userId: z.number().int().positive(),
});

export const AdminUpdateUserStatusRequestDto = z.object({
  active: z.boolean(),
  reason: z.string().min(1).max(500).optional(),
});

export const AdminGetUsersResponseDto = AdminCreateUserResponseDto.array();

export const AdminGetUsersQueryDto = z.object({
  searchTerm: z.string().min(1).max(100).optional(),
  active: z.boolean().optional(),
  page: z.number().int().positive().optional(),
  size: z.number().int().positive().optional(),
});

export const AdminGetUserByIdParamsDto = z.object({
  userId: z.number().int().positive(),
});

export const AdminGetUserByIdResponseDto = AdminCreateUserResponseDto;

export const AdminDeleteUserParamsDto = z.object({
  userId: z.number().int().positive(),
});
