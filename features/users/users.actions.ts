'use server';

import { UsersApi } from './users.api';
import { TCreateUserRequest } from './users.types';

export async function createUser(input: TCreateUserRequest) {
  return await UsersApi.createUser(input);
}
