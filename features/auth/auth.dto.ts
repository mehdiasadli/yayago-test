import z from 'zod';

export const RefreshTokenRequestDto = z.object({
  refreshToken: z.string({
    required_error: 'Refresh token is required',
    invalid_type_error: 'Refresh token must be a string',
  }),
});

export const RefreshTokenResponseDto = z.object({
  token: z.string(),
  userId: z.number().int().positive(),
});

export const LoginRequestDto = z.object({
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be a string',
    })
    .min(1, 'Password is required'),
});

export const LoginResponseDto = z.object({
  token: z.string(),
  refreshToken: z.string(),
  userId: z.number().int().positive(),
});
