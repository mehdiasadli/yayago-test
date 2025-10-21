import { AuthError } from 'next-auth';
import { NextResponse } from 'next/server';
import z from 'zod';

interface IApiError {
  errorCode: number;
  status: string;
  errorMessage: string;
  path: string;
  errorDate: string;
}

export class ApiError extends Error implements IApiError {
  public errorCode: number;
  public status: string;
  public errorMessage: string;
  public path: string;
  public errorDate: string;

  constructor(errorCode: number, status: string, errorMessage: string, path: string, errorDate: string) {
    super(errorMessage);

    this.errorCode = errorCode;
    this.status = status;
    this.errorMessage = errorMessage;
    this.path = path;
    this.errorDate = errorDate;
  }

  public json(): IApiError {
    return {
      errorCode: this.errorCode,
      status: this.status,
      errorMessage: this.errorMessage,
      path: this.path,
      errorDate: this.errorDate,
    };
  }

  static async fromResponse(response: Response | NextResponse, options?: Partial<IApiError>) {
    const data = await response.json();
    return ApiError.handle(data, options);
  }

  static handle(error: unknown, options?: Partial<IApiError>): ApiError {
    const { errorCode = 500, errorDate = new Date().toISOString(), errorMessage, path = '/', status } = options ?? {};

    if (error instanceof ApiError) {
      return error;
    }

    if (error instanceof AuthError) {
      if (error.type === 'CredentialsSignin') {
        return new ApiError(401, status ?? 'Unauthorized', errorMessage ?? 'Invalid credentials', path, errorDate);
      }

      return new ApiError(
        errorCode,
        status ?? 'Internal Server Error',
        errorMessage ?? 'An unexpected error occurred',
        path,
        errorDate
      );
    }

    if (error instanceof z.ZodError) {
      const message = error.errors[0]?.message ?? errorMessage ?? 'Invalid data';

      return new ApiError(400, status ?? 'Bad Request', message, path, errorDate);
    }

    return new ApiError(
      errorCode,
      status ?? 'Internal Server Error',
      errorMessage ?? 'An unexpected error occurred',
      path,
      errorDate
    );
  }
}
