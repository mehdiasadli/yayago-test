import { z } from 'zod';

// ============================================================================
// USER SCHEMAS
// ============================================================================

export const UserSchema = z.object({
  id: z
    .number({ required_error: 'User ID is required', invalid_type_error: 'User ID must be a number' })
    .int('User ID must be an integer')
    .positive('User ID must be positive'),
  email: z.string({ required_error: 'Email is required' }).email('Invalid email format'),
  fullName: z.string({ required_error: 'Full name is required' }).min(1, 'Full name is required'),
  phoneNumber: z.string({ required_error: 'Phone number is required' }).min(1, 'Phone number is required'),
  role: z.enum(['USER', 'ADMIN'], {
    required_error: 'Role is required',
    invalid_type_error: 'Role must be either USER or ADMIN',
  }),
  createdAt: z.string({ required_error: 'Created date is required' }).datetime('Invalid datetime format'),
});

// UserDto with nested relationships
export const UserWithRelationsSchema = UserSchema.extend({
  addedCars: z.array(z.any()).optional(), // Will reference CarDetailsResponseSchema when created
  bookings: z.array(z.any()).optional(), // Will reference BookingDetailsSchema when created
});

export type TUser = z.infer<typeof UserSchema>;
export type TUserWithRelations = z.infer<typeof UserWithRelationsSchema>;

// ============================================================================
// ADMIN USER SCHEMAS
// ============================================================================

export const AdminUserSchema = z.object({
  id: z
    .number({ required_error: 'User ID is required', invalid_type_error: 'User ID must be a number' })
    .int('User ID must be an integer')
    .positive('User ID must be positive'),
  email: z.string({ required_error: 'Email is required' }).email('Invalid email format'),
  fullName: z.string({ required_error: 'Full name is required' }).min(1, 'Full name is required'),
  phoneNumber: z.string({ required_error: 'Phone number is required' }).min(1, 'Phone number is required'),
  active: z.boolean({
    required_error: 'Active status is required',
    invalid_type_error: 'Active must be a boolean',
  }),
  createdAt: z.string({ required_error: 'Created date is required' }).datetime('Invalid datetime format'),
  lastLoginAt: z.string().datetime('Invalid datetime format').nullable().optional(),
  totalBookings: z
    .number({ invalid_type_error: 'Total bookings must be a number' })
    .int('Total bookings must be an integer')
    .nonnegative('Total bookings cannot be negative')
    .optional(),
  activeBookings: z
    .number({ invalid_type_error: 'Active bookings must be a number' })
    .int('Active bookings must be an integer')
    .nonnegative('Active bookings cannot be negative')
    .optional(),
});

export type TAdminUser = z.infer<typeof AdminUserSchema>;

// ============================================================================
// ADMIN USER CREATE SCHEMAS
// ============================================================================

export const AdminUserCreateInputSchema = z.object({
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
  admin: z
    .boolean({
      invalid_type_error: 'Admin flag must be a boolean',
    })
    .optional(),
});

export const AdminUserCreateOutputSchema = AdminUserSchema;

export type TAdminUserCreateInput = z.infer<typeof AdminUserCreateInputSchema>;
export type TAdminUserCreateOutput = z.infer<typeof AdminUserCreateOutputSchema>;

// ============================================================================
// USER STATUS UPDATE SCHEMAS
// ============================================================================

export const UserStatusUpdateInputSchema = z.object({
  active: z.boolean({
    required_error: 'Active status is required',
    invalid_type_error: 'Active must be a boolean',
  }),
  reason: z.string().min(1, 'Reason is required').max(500, 'Reason must be less than 500 characters').optional(),
});

export type TUserStatusUpdateInput = z.infer<typeof UserStatusUpdateInputSchema>;

// ============================================================================
// GET USERS QUERY PARAMS
// ============================================================================

export const GetUsersQuerySchema = z.object({
  searchTerm: z.string().optional(),
  active: z
    .boolean({
      invalid_type_error: 'Active must be a boolean',
    })
    .optional(),
  page: z
    .number({ invalid_type_error: 'Page must be a number' })
    .int('Page must be an integer')
    .nonnegative('Page cannot be negative')
    .default(0),
  size: z
    .number({ invalid_type_error: 'Size must be a number' })
    .int('Size must be an integer')
    .positive('Size must be positive')
    .max(100, 'Size cannot exceed 100')
    .default(20),
});

export type TGetUsersQuery = z.infer<typeof GetUsersQuerySchema>;
