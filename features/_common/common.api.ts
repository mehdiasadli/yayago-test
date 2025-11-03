import { z } from 'zod';
import { getAuthHeaders } from './get-auth-headers';

// ============================================================================
// RESPONSE TYPE
// ============================================================================

type ApiResponse<Output> =
  | {
      success: true;
      message: string;
      data: Output;
    }
  | {
      success: false;
      message: string;
      error: unknown;
    };

// ============================================================================
// REQUEST OPTIONS
// ============================================================================

interface RequestOptions<OutputSchema extends z.ZodSchema> {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: HeadersInit;
  successMessage?: string;
  outputSchema: OutputSchema;
}

interface MutationOptions<InputSchema extends z.ZodSchema, OutputSchema extends z.ZodSchema>
  extends Omit<RequestOptions<OutputSchema>, 'method'> {
  method: 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  inputSchema: InputSchema;
}

// ============================================================================
// API CLIENT
// ============================================================================

export class Api {
  static readonly baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

  /**
   * GET request - no input validation needed
   */
  static async get<OutputSchema extends z.ZodSchema>(
    url: string,
    options: RequestOptions<OutputSchema>
  ): Promise<ApiResponse<z.infer<OutputSchema>>> {
    return this.request(url, { ...options, method: 'GET' });
  }

  /**
   * UPLOAD FILE request
   */
  static async upload<OutputSchema extends z.ZodSchema>(
    url: string,
    formData: FormData,
    options: RequestOptions<OutputSchema>
  ) {
    return this.request(url, {
      ...options,
      method: 'POST',
      body: formData,
      isUpload: true, // Flag to indicate this is a file upload
    });
  }

  /**
   * POST/PUT/DELETE/PATCH requests - with input and output validation
   */
  static async mutation<InputSchema extends z.ZodSchema, OutputSchema extends z.ZodSchema>(
    url: string,
    data: z.infer<InputSchema>,
    options: MutationOptions<InputSchema, OutputSchema>
  ): Promise<ApiResponse<z.infer<OutputSchema>>> {
    // Validate input
    const validation = options.inputSchema.safeParse(data);
    if (!validation.success) {
      return {
        success: false,
        message: 'Validation failed',
        error: validation.error.errors,
      };
    }

    return this.request(url, {
      ...options,
      body: validation.data,
    });
  }

  /**
   * POST request shorthand
   */
  static async post<InputSchema extends z.ZodSchema, OutputSchema extends z.ZodSchema>(
    url: string,
    data: z.infer<InputSchema>,
    options: Omit<MutationOptions<InputSchema, OutputSchema>, 'method'>
  ): Promise<ApiResponse<z.infer<OutputSchema>>> {
    return this.mutation(url, data, { ...options, method: 'POST' });
  }

  /**
   * PUT request shorthand
   */
  static async put<InputSchema extends z.ZodSchema, OutputSchema extends z.ZodSchema>(
    url: string,
    data: z.infer<InputSchema>,
    options: Omit<MutationOptions<InputSchema, OutputSchema>, 'method'>
  ): Promise<ApiResponse<z.infer<OutputSchema>>> {
    return this.mutation(url, data, { ...options, method: 'PUT' });
  }

  /**
   * DELETE request shorthand
   */
  static async delete<OutputSchema extends z.ZodSchema>(
    url: string,
    options: RequestOptions<OutputSchema>
  ): Promise<ApiResponse<z.infer<OutputSchema>>> {
    return this.request(url, { ...options, method: 'DELETE' });
  }

  /**
   * PATCH request shorthand
   */
  static async patch<InputSchema extends z.ZodSchema, OutputSchema extends z.ZodSchema>(
    url: string,
    data: z.infer<InputSchema>,
    options: Omit<MutationOptions<InputSchema, OutputSchema>, 'method'>
  ): Promise<ApiResponse<z.infer<OutputSchema>>> {
    return this.mutation(url, data, { ...options, method: 'PATCH' });
  }

  /**
   * Internal request handler with output validation
   */
  private static async request<OutputSchema extends z.ZodSchema>(
    url: string,
    options: RequestOptions<OutputSchema> & { method?: string; body?: unknown; isUpload?: boolean }
  ): Promise<ApiResponse<z.infer<OutputSchema>>> {
    const {
      method = 'GET',
      headers: customHeaders,
      successMessage = 'Request successful',
      outputSchema,
      body,
      isUpload = false,
    } = options;

    try {
      // Get auth headers
      const { headers: authHeaders } = await getAuthHeaders();

      // For file uploads, don't set Content-Type (let browser set it with boundary)
      // and don't JSON.stringify the FormData
      let headers: HeadersInit;

      if (isUpload) {
        // For uploads, exclude Content-Type to let browser set it with boundary
        const { 'Content-Type': _, ...restHeaders } = (customHeaders || {}) as Record<string, string>;
        headers = {
          ...authHeaders,
          ...restHeaders,
        };
      } else {
        headers = {
          'Content-Type': 'application/json',
          ...authHeaders,
          ...customHeaders,
        };
      }

      const requestBody = isUpload ? (body as FormData) : body ? JSON.stringify(body) : undefined;

      const response = await fetch(`${this.baseURL}${url}`, {
        method,
        headers,
        body: requestBody,
      });

      if (response.status === 204) {
        return {
          success: true,
          message: successMessage,
          data: undefined,
        };
      }

      if (!response.ok) {
        const errorData = await response.json().catch((err) => {
          console.error('Failed to parse response as JSON:', err);

          return {};
        });

        throw new Error(errorData.message || `HTTP ${response.status}`);
      }

      let rawData;
      try {
        const contentType = response.headers.get('content-type');
        const text = await response.text();

        // If response is empty, return undefined
        if (!text || text.trim() === '') {
          return {
            success: true,
            message: successMessage,
            data: undefined as any,
          };
        }

        // Check if response is JSON
        if (contentType?.includes('application/json')) {
          // Try to parse as JSON
          rawData = JSON.parse(text);
          console.log('Raw data:', rawData);
        } else {
          // For plain text responses (like image URLs)
          rawData = text;
          console.log('Plain text response:', rawData);
        }
      } catch (parseError) {
        console.error('Failed to parse response:', parseError);
        return {
          success: false,
          message: 'Invalid response from server',
          error: parseError,
        };
      }

      // Validate output
      // const validation = outputSchema.safeParse(rawData);
      return {
        success: true,
        message: successMessage,
        data: rawData as z.infer<OutputSchema>,
      };
      // if (!validation.success) {
      //   console.error('Output validation failed:', validation.error);

      //   return {
      //     success: false,
      //     message: 'Invalid response format',
      //     error: validation.error.errors,
      //   };
      // }

      // return {
      //   success: true,
      //   message: successMessage,
      //   data: validation.data,
      // };
    } catch (error) {
      console.error('API request failed:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'An unexpected error occurred',
        error,
      };
    }
  }
}
