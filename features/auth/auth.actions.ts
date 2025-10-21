'use server';

import { signIn } from '@/lib/auth';
import { LoginInputSchema, TLoginInput } from '@/schemas';
import { AuthError } from 'next-auth';

export async function login(input: TLoginInput) {
  const { data, success, error } = LoginInputSchema.safeParse(input);

  if (!success) {
    return {
      success: false,
      error: error.errors[0]?.message || 'Invalid credentials',
    };
  }

  try {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error('Error on login', error);

    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { success: false, error: 'Invalid credentials' };
        default:
          return { success: false, error: 'Something went wrong' };
      }
    }

    throw error;
  }
}
