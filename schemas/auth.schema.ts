import { z } from 'zod';

// ============================================================================
// LOGIN SCHEMAS
// ============================================================================

export const LoginInputSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).min(1, 'Email is required').email('Invalid email format'),
  password: z.string({ required_error: 'Password is required' }).min(1, 'Password is required'),
});

export const LoginOutputSchema = z.object({
  token: z.string({ required_error: 'Token is required' }),
  refreshToken: z.string({ required_error: 'Refresh token is required' }),
  userId: z
    .number({ required_error: 'User ID is required', invalid_type_error: 'User ID must be a number' })
    .int('User ID must be an integer')
    .positive('User ID must be positive'),
});

export type TLoginInput = z.infer<typeof LoginInputSchema>;
export type TLoginOutput = z.infer<typeof LoginOutputSchema>;

// ============================================================================
// REGISTER SCHEMAS
// ============================================================================

export const RegisterInputSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).min(1, 'Email is required').email('Invalid email format'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, 'Password must be at least 6 characters')
    .max(100, 'Password must be less than 100 characters'),
  fullName: z
    .string({ required_error: 'Full name is required' })
    .min(1, 'Full name is required')
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters'),
  phoneNumber: z
    .string({ required_error: 'Phone number is required' })
    .min(1, 'Phone number is required')
    .regex(/^\+?[\d\s-()]+$/, 'Invalid phone number format'),
});

export const RegisterOutputSchema = z.object({
  id: z
    .number({ required_error: 'User ID is required', invalid_type_error: 'User ID must be a number' })
    .int('User ID must be an integer')
    .positive('User ID must be positive'),
  email: z.string().email('Invalid email format'),
  fullName: z.string().min(1, 'Full name is required'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  role: z.enum(['USER', 'ADMIN'], {
    required_error: 'Role is required',
    invalid_type_error: 'Role must be either USER or ADMIN',
  }),
  createdAt: z.string({ required_error: 'Created date is required' }).datetime('Invalid datetime format'),
});

export type TRegisterInput = z.infer<typeof RegisterInputSchema>;
export type TRegisterOutput = z.infer<typeof RegisterOutputSchema>;

// ============================================================================
// REFRESH TOKEN SCHEMAS
// ============================================================================

export const RefreshTokenInputSchema = z.object({
  refreshToken: z.string({ required_error: 'Refresh token is required' }).min(1, 'Refresh token is required'),
});

export const RefreshTokenOutputSchema = z.object({
  token: z.string({ required_error: 'Token is required' }),
  userId: z
    .number({ required_error: 'User ID is required', invalid_type_error: 'User ID must be a number' })
    .int('User ID must be an integer')
    .positive('User ID must be positive'),
});

export type TRefreshTokenInput = z.infer<typeof RefreshTokenInputSchema>;
export type TRefreshTokenOutput = z.infer<typeof RefreshTokenOutputSchema>;

// ============================================================================
// LOGOUT SCHEMAS (No body required, just Authorization header)
// ============================================================================

// No schema needed as logout only requires Authorization header
