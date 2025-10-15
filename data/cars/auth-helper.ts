import { auth } from '@/lib/auth';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

/**
 * Refresh access token using refresh token
 * @param refreshToken - The refresh token
 * @returns New access token or null if refresh failed
 */
async function refreshAccessToken(refreshToken: string): Promise<string | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      console.error('Token refresh failed:', response.status);
      return null;
    }

    const data = await response.json();
    return data.token || null;
  } catch (error) {
    console.error('Token refresh error:', error);
    return null;
  }
}

/**
 * Get authenticated headers with automatic token refresh
 * @returns Headers with Authorization token or null if not authenticated
 */
export async function getAuthHeaders(): Promise<{ headers: HeadersInit; authenticated: boolean }> {
  const session = await auth();

  if (!session?.accessToken) {
    return { headers: {}, authenticated: false };
  }

  return {
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
    },
    authenticated: true,
  };
}

/**
 * Make an authenticated fetch request with automatic token refresh
 * @param url - Request URL
 * @param options - Fetch options
 * @param requireAuth - Whether authentication is required (default: true)
 * @returns Response with refreshed token if needed
 */
export async function authenticatedFetch(
  url: string,
  options: RequestInit = {},
  requireAuth = true
): Promise<Response> {
  const session = await auth();

  if (requireAuth && !session?.accessToken) {
    throw new Error('Authentication required');
  }

  // Merge auth headers with provided headers
  const headers = {
    ...options.headers,
    ...(session?.accessToken ? { Authorization: `Bearer ${session.accessToken}` } : {}),
  };

  let response = await fetch(url, {
    ...options,
    headers,
  });

  // If we get a 401 and have a refresh token, try to refresh and retry
  if (response.status === 401 && session?.refreshToken) {
    console.log('Token expired, attempting refresh...');

    const newAccessToken = await refreshAccessToken(session.refreshToken);

    if (newAccessToken) {
      console.log('Token refreshed successfully, retrying request...');

      // Retry the original request with new token
      const retryHeaders = {
        ...options.headers,
        Authorization: `Bearer ${newAccessToken}`,
      };

      response = await fetch(url, {
        ...options,
        headers: retryHeaders,
      });
    } else {
      console.error('Token refresh failed, user needs to re-authenticate');
    }
  }

  return response;
}
