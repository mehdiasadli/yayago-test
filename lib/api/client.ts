/**
 * API Client
 * Centralized HTTP client with JWT token management and automatic refresh
 */

import { tokenManager } from './token-manager';
import { ApiClientError, handleApiError } from './error-handler';
import type { ApiError } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

interface RequestConfig extends RequestInit {
  skipAuth?: boolean;
  skipRefresh?: boolean;
}

class ApiClient {
  private baseUrl: string;
  private isRefreshing = false;
  private refreshPromise: Promise<void> | null = null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Make an authenticated API request
   */
  private async makeRequest<T>(endpoint: string, config: RequestConfig = {}): Promise<T> {
    const { skipAuth = false, skipRefresh = false, ...fetchConfig } = config;

    const url = `${this.baseUrl}${endpoint}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(fetchConfig.headers as Record<string, string>),
    };

    // Add authorization header if not skipped
    if (!skipAuth) {
      const token = tokenManager.getAccessToken();
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
    }

    try {
      const response = await fetch(url, {
        ...fetchConfig,
        headers,
      });

      // Handle 401 Unauthorized - attempt token refresh
      if (response.status === 401 && !skipRefresh) {
        await this.handleUnauthorized();
        // Retry request with new token
        return this.makeRequest<T>(endpoint, { ...config, skipRefresh: true });
      }

      // Handle non-OK responses
      if (!response.ok) {
        let apiError: ApiError;
        try {
          apiError = await response.json();
        } catch {
          // If response is not JSON, use status text
          apiError = {
            message: response.statusText || 'Request failed',
            status: response.status,
          };
        }
        throw new ApiClientError(apiError.message || 'Request failed', response.status, apiError);
      }

      // Handle empty responses
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        return {} as T;
      }

      return await response.json();
    } catch (error) {
      throw handleApiError(error);
    }
  }

  /**
   * Handle 401 unauthorized by refreshing token
   */
  private async handleUnauthorized(): Promise<void> {
    // If already refreshing, wait for that to complete
    if (this.isRefreshing && this.refreshPromise) {
      await this.refreshPromise;
      return;
    }

    this.isRefreshing = true;
    this.refreshPromise = this.refreshAccessToken();

    try {
      await this.refreshPromise;
    } finally {
      this.isRefreshing = false;
      this.refreshPromise = null;
    }
  }

  /**
   * Refresh the access token using refresh token
   */
  private async refreshAccessToken(): Promise<void> {
    const refreshToken = tokenManager.getRefreshToken();

    if (!refreshToken || tokenManager.isRefreshTokenExpired()) {
      tokenManager.clearTokens();
      // Redirect to login
      if (typeof window !== 'undefined') {
        window.location.href = '/auth';
      }
      throw new ApiClientError('Session expired. Please login again.', 401);
    }

    try {
      const response = await fetch(`${this.baseUrl}/api/auth/refresh?refreshToken=${refreshToken}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Token refresh failed');
      }

      const data: { token: string; refreshToken: string } = await response.json();
      tokenManager.setTokens(data.token, data.refreshToken);
    } catch (error) {
      tokenManager.clearTokens();
      if (typeof window !== 'undefined') {
        window.location.href = '/auth';
      }
      throw new ApiClientError('Session expired. Please login again.', 401);
    }
  }

  /**
   * GET request
   */
  async get<T>(endpoint: string, config?: RequestConfig): Promise<T> {
    return this.makeRequest<T>(endpoint, {
      ...config,
      method: 'GET',
    });
  }

  /**
   * POST request
   */
  async post<T>(endpoint: string, data?: unknown, config?: RequestConfig): Promise<T> {
    return this.makeRequest<T>(endpoint, {
      ...config,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * PUT request
   */
  async put<T>(endpoint: string, data?: unknown, config?: RequestConfig): Promise<T> {
    return this.makeRequest<T>(endpoint, {
      ...config,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * PATCH request
   */
  async patch<T>(endpoint: string, data?: unknown, config?: RequestConfig): Promise<T> {
    return this.makeRequest<T>(endpoint, {
      ...config,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string, config?: RequestConfig): Promise<T> {
    return this.makeRequest<T>(endpoint, {
      ...config,
      method: 'DELETE',
    });
  }

  /**
   * Upload file (multipart/form-data)
   */
  async uploadFile<T>(endpoint: string, formData: FormData, config?: Omit<RequestConfig, 'body'>): Promise<T> {
    const { skipAuth = false, skipRefresh = false, ...fetchConfig } = config || {};
    const url = `${this.baseUrl}${endpoint}`;
    const headers: Record<string, string> = {
      ...(fetchConfig.headers as Record<string, string>),
    };

    // Don't set Content-Type for FormData - browser will set it with boundary
    if (!skipAuth) {
      const token = tokenManager.getAccessToken();
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
    }

    try {
      const response = await fetch(url, {
        ...fetchConfig,
        method: 'POST',
        headers,
        body: formData,
      });

      if (response.status === 401 && !skipRefresh) {
        await this.handleUnauthorized();
        return this.uploadFile<T>(endpoint, formData, { ...config, skipRefresh: true });
      }

      if (!response.ok) {
        let apiError: ApiError;
        try {
          apiError = await response.json();
        } catch {
          apiError = {
            message: response.statusText || 'Upload failed',
            status: response.status,
          };
        }
        throw new ApiClientError(apiError.message || 'Upload failed', response.status, apiError);
      }

      return await response.json();
    } catch (error) {
      throw handleApiError(error);
    }
  }
}

// Export singleton instance
export const apiClient = new ApiClient(API_BASE_URL);
