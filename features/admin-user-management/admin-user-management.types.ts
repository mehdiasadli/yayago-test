import z from 'zod';
import {
  AdminCreateUserRequestDto,
  AdminCreateUserResponseDto,
  AdminUpdateUserStatusParamsDto,
  AdminUpdateUserStatusRequestDto,
  AdminGetUsersQueryDto,
  AdminGetUsersResponseDto,
  AdminGetUserByIdParamsDto,
  AdminGetUserByIdResponseDto,
  AdminDeleteUserParamsDto,
} from './admin-user-management.dto';

export type TAdminCreateUserRequest = z.infer<typeof AdminCreateUserRequestDto>;
export type TAdminCreateUserResponse = z.infer<typeof AdminCreateUserResponseDto>;
export type TAdminUpdateUserStatusParams = z.infer<typeof AdminUpdateUserStatusParamsDto>;
export type TAdminUpdateUserStatusRequest = z.infer<typeof AdminUpdateUserStatusRequestDto>;
export type TAdminGetUsersQuery = z.infer<typeof AdminGetUsersQueryDto>;
export type TAdminGetUsersResponse = z.infer<typeof AdminGetUsersResponseDto>;
export type TAdminGetUserByIdParams = z.infer<typeof AdminGetUserByIdParamsDto>;
export type TAdminGetUserByIdResponse = z.infer<typeof AdminGetUserByIdResponseDto>;
export type TAdminDeleteUserParams = z.infer<typeof AdminDeleteUserParamsDto>;
