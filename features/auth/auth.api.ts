import { z } from 'zod';
import { Api } from '../_common/common.api';
import {
  LoginInputSchema,
  LoginOutputSchema,
  RefreshTokenInputSchema,
  RefreshTokenOutputSchema,
  TLoginInput,
  TRefreshTokenInput,
} from '@/schemas';
import { AUTH_BASE_URL } from './auth.constants';

export class AuthApi {
  static readonly baseURL = AUTH_BASE_URL;

  static async refreshToken(input: TRefreshTokenInput) {
    return await Api.post(this.baseURL + '/refresh', input, {
      inputSchema: RefreshTokenInputSchema,
      outputSchema: RefreshTokenOutputSchema,
      successMessage: 'Token refreshed successfully',
    });
  }

  static async login(input: TLoginInput) {
    return await Api.post(this.baseURL + '/login', input, {
      inputSchema: LoginInputSchema,
      outputSchema: LoginOutputSchema,
      successMessage: 'Login successful',
    });
  }

  static async logout() {
    return await Api.post(this.baseURL + '/logout', undefined, {
      inputSchema: z.undefined(),
      outputSchema: z.void(),
      successMessage: 'Logout successful',
    });
  }
}
