/**
 * Authentication Service
 * Handles login, registration, logout, and token refresh
 */

import { apiClient } from '../client';
import { tokenManager } from '../token-manager';
import type { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '../types';

class AuthService {
  /**
   * Login user
   */
  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await apiClient.post<LoginResponse>('/api/auth/login', { email, password } as LoginRequest, {
      skipAuth: true,
    });

    // Store tokens
    tokenManager.setTokens(response.token, response.refreshToken);

    return response;
  }

  /**
   * Register new user
   */
  async register(data: RegisterRequest): Promise<RegisterResponse> {
    const response = await apiClient.post<RegisterResponse>('/api/user/register', data, { skipAuth: true });

    return response;
  }

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    const token = tokenManager.getAccessToken();

    if (token) {
      try {
        await apiClient.post('/api/auth/logout', undefined, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        // Ignore logout errors - clear tokens anyway
        console.error('Logout error:', error);
      }
    }

    // Clear tokens from storage
    tokenManager.clearTokens();
  }

  /**
   * Refresh access token
   */
  async refreshToken(refreshToken: string): Promise<LoginResponse> {
    const response = await apiClient.post<LoginResponse>(`/api/auth/refresh?refreshToken=${refreshToken}`, undefined, {
      skipAuth: true,
      skipRefresh: true,
    });

    // Update tokens
    tokenManager.setTokens(response.token, response.refreshToken);

    return response;
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return tokenManager.isAuthenticated() && !tokenManager.isAccessTokenExpired();
  }

  /**
   * Get current access token
   */
  getAccessToken(): string | null {
    return tokenManager.getAccessToken();
  }

  /**
   * Get current refresh token
   */
  getRefreshToken(): string | null {
    return tokenManager.getRefreshToken();
  }
}

// Export singleton instance
export const authService = new AuthService();
