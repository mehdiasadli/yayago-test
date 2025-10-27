import z from 'zod';
import { Api } from '../_common/common.api';
import { USERS_BASE_URL } from './users.constants';
import {
  CreateUserRequestDto,
  CreateUserResponseDto,
  GetUserByIdResponseDto,
  UploadUserAvatarResponseDto,
} from './users.dto';
import {
  TCreateUserRequest,
  TGetUserByIdParams,
  TRemoveUserAvatarParams,
  TUploadUserAvatarParams,
  TUploadUserAvatarRequest,
} from './users.types';

export class UsersApi {
  static readonly baseURL = USERS_BASE_URL;

  static async getUserById(params: TGetUserByIdParams) {
    return await Api.get(this.baseURL + '/' + params.id, {
      outputSchema: GetUserByIdResponseDto,
      successMessage: 'User fetched successfully',
    });
  }

  static async createUser(input: TCreateUserRequest) {
    return await Api.post(this.baseURL, input, {
      inputSchema: CreateUserRequestDto,
      outputSchema: CreateUserResponseDto,
      successMessage: 'User created successfully',
    });
  }

  static async uploadUserAvatar(params: TUploadUserAvatarParams, input: TUploadUserAvatarRequest) {
    const formData = new FormData();
    formData.append('file', input.file);

    return await Api.upload(this.baseURL + '/' + params.id + '/avatar', formData, {
      outputSchema: UploadUserAvatarResponseDto,
      successMessage: 'User avatar uploaded successfully',
    });
  }

  static async removeUserAvatar(params: TRemoveUserAvatarParams) {
    return await Api.delete(this.baseURL + '/' + params.id + '/avatar', {
      outputSchema: z.void(),
      successMessage: 'User avatar removed successfully',
    });
  }
}
