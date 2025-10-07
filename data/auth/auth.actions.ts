'use server';

import { signIn } from '@/lib/auth';
import { LoginSchema } from './auth.schema';
import { AuthError } from 'next-auth';

export async function login(email: string, password: string) {
  const validated = LoginSchema.safeParse({ email, password });

  if (!validated.success) {
    return { error: 'Invalid email or password' };
  }

  try {
    await signIn('credentials', {
      email: validated.data.email,
      password: validated.data.password,
      redirect: false,
    });

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials' };
        default:
          return { error: 'Something went wrong' };
      }
    }
    throw error;
  }
}
