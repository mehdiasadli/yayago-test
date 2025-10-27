import z from 'zod';
import { UserRoleEnumSchema } from './users.enums';
import { CreateCarResponseDto } from '../cars/cars.dto';

export const CreateUserRequestDto = z.object({
  email: z.string().email(),
  fullName: z.string().min(1),
  phoneNumber: z.string().min(1),
  password: z.string().min(6),
});

export const CreateUserResponseDto = z.object({
  id: z.number().int().positive(),
  email: z.string().email(),
  fullName: z.string().min(1),
  phoneNumber: z.string().min(1),
  createdAt: z.coerce.date(),
  role: UserRoleEnumSchema,
});

export const GetUserByIdParamsDto = z.object({
  id: z.number().int().positive(),
});

export const GetUserByIdResponseDto = CreateUserResponseDto.extend({
  addedCars: z.array(CreateCarResponseDto),
  bookings: z.array(z.any()),
});

export const UploadUserAvatarParamsDto = z.object({
  id: z.number().int().positive(),
});

export const UploadUserAvatarRequestDto = z.object({
  file: z.instanceof(File, { message: 'File is required' }),
});

export const UploadUserAvatarResponseDto = z.string().url();

export const RemoveUserAvatarParamsDto = z.object({
  id: z.number().int().positive(),
});
