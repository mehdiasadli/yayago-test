import { ApiError } from './types';

export class ApiClientError extends Error {
  public status: number;
  public apiError?: ApiError;

  constructor(message: string, status: number, apiError?: ApiError) {
    super(message);
    this.name = 'ApiClientError';
    this.status = status;
    this.apiError = apiError;
  }
}

export function handleApiError(error: unknown): ApiClientError {
  // Network error
  if (error instanceof TypeError && error.message === 'Failed to fetch') {
    return new ApiClientError('Network error. Please check your connection.', 0);
  }

  // Already an ApiClientError
  if (error instanceof ApiClientError) {
    return error;
  }

  // Generic error
  if (error instanceof Error) {
    return new ApiClientError(error.message, 500);
  }

  // Unknown error
  return new ApiClientError('An unexpected error occurred', 500);
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof ApiClientError) {
    if (error.apiError?.message) {
      return error.apiError.message;
    }
    return error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'An unexpected error occurred';
}

export function isAuthError(error: unknown): boolean {
  if (error instanceof ApiClientError) {
    return error.status === 401 || error.status === 403;
  }
  return false;
}

export function isNetworkError(error: unknown): boolean {
  if (error instanceof ApiClientError) {
    return error.status === 0;
  }
  return false;
}

export function isServerError(error: unknown): boolean {
  if (error instanceof ApiClientError) {
    return error.status >= 500;
  }
  return false;
}
