import z from 'zod';

export const UserRoleEnumSchema = z.enum(['USER', 'ADMIN'], {
  required_error: 'User role is required',
  invalid_type_error: 'User role must be either USER or ADMIN',
});
