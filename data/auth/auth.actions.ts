'use server';

import { signIn } from '@/lib/auth';
import { LoginSchema, RegisterSchema, type RegisterSchemaType } from './auth.schema';
import { AuthError } from 'next-auth';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

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

/**
 * Register action - calls backend API directly
 */
export async function register(data: RegisterSchemaType) {
  // Validate data
  const validated = RegisterSchema.safeParse(data);

  console.log(validated);

  if (!validated.success) {
    return {
      success: false,
      error: validated.error.errors[0]?.message || 'Validation failed',
    };
  }

  try {
    // Call backend API
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validated.data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return {
        success: false,
        error: errorData?.message || 'Registration failed',
      };
    }

    const result = await response.json();

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }
    return {
      success: false,
      error: 'An unexpected error occurred',
    };
  }
}
