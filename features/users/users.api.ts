import { Api } from '../_common/common.api';
import { USERS_BASE_URL } from './users.constants';
import { CreateUserRequestDto, CreateUserResponseDto, GetUserByIdResponseDto } from './users.dto';
import { TCreateUserRequest, TGetUserByIdParams } from './users.types';

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
}
