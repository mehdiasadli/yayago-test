import { auth } from '@/lib/auth';

interface AuthHeadersResult {
  headers: HeadersInit;
  isAuthenticated: boolean;
}

/**
 * Universal function to get auth headers
 * Works in both server and client components
 */
export async function getAuthHeaders(): Promise<AuthHeadersResult> {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    // Client-side: fetch session from API
    try {
      const sessionResponse = await fetch('/api/auth/session');
      const session = await sessionResponse.json();

      if (session?.accessToken) {
        return {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
          isAuthenticated: true,
        };
      }

      return {
        headers: {},
        isAuthenticated: false,
      };
    } catch (error) {
      console.error('Failed to get client session:', error);
      return {
        headers: {},
        isAuthenticated: false,
      };
    }
  } else {
    // Server-side: use auth() function
    try {
      const session = await auth();

      if (session?.accessToken) {
        return {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
          isAuthenticated: true,
        };
      }

      return {
        headers: {},
        isAuthenticated: false,
      };
    } catch (error) {
      console.error('Failed to get server session:', error);
      return {
        headers: {},
        isAuthenticated: false,
      };
    }
  }
}
