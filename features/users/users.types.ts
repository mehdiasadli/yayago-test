import z from 'zod';
import { UserRoleEnumSchema } from './users.enums';
import { CreateUserRequestDto, CreateUserResponseDto, GetUserByIdResponseDto, GetUserByIdParamsDto } from './users.dto';

export type TUserRole = z.infer<typeof UserRoleEnumSchema>;
export type TCreateUserRequest = z.infer<typeof CreateUserRequestDto>;
export type TCreateUserResponse = z.infer<typeof CreateUserResponseDto>;
export type TGetUserByIdParams = z.infer<typeof GetUserByIdParamsDto>;
export type TGetUserByIdResponse = z.infer<typeof GetUserByIdResponseDto>;
