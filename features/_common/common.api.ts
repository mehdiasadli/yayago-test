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
    options: RequestOptions<OutputSchema> & { method?: string; body?: unknown }
  ): Promise<ApiResponse<z.infer<OutputSchema>>> {
    const {
      method = 'GET',
      headers: customHeaders,
      successMessage = 'Request successful',
      outputSchema,
      body,
    } = options;

    try {
      // Get auth headers
      const { headers: authHeaders } = await getAuthHeaders();

      const response = await fetch(`${this.baseURL}${url}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...authHeaders,
          ...customHeaders,
        },
        body: body ? JSON.stringify(body) : undefined,
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
        const text = await response.text();

        // If response is empty, return undefined
        if (!text || text.trim() === '') {
          return {
            success: true,
            message: successMessage,
            data: undefined as any,
          };
        }

        // Try to parse as JSON
        rawData = JSON.parse(text);
        // console.log('Raw data:', rawData);
      } catch (parseError) {
        console.error('Failed to parse response as JSON:', parseError);
        return {
          success: false,
          message: 'Invalid JSON response from server',
          error: parseError,
        };
      }

      // Validate output
      const validation = outputSchema.safeParse(rawData);
      if (!validation.success) {
        console.error('Output validation failed:', validation.error);
        return {
          success: false,
          message: 'Invalid response format',
          error: validation.error.errors,
        };
      }

      return {
        success: true,
        message: successMessage,
        data: validation.data,
      };
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

// ============================================================================
// USAGE EXAMPLES
// ============================================================================

/**
 * Example schemas
 */
const UserOutputSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
});

const CreateUserInputSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(8),
});

const CreateUserOutputSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  createdAt: z.date(),
});

/**
 * Example: GET request
 */
export async function getUser(id: string) {
  const response = await Api.get(`/api/users/${id}`, {
    outputSchema: UserOutputSchema,
    successMessage: 'User fetched successfully',
  });

  // TypeScript knows response.data is { id: string; email: string; name: string; }
  if (response.success) {
    console.log(response.data.email); // ✓ Type-safe
  }

  return response;
}

/**
 * Example: POST request
 */
export async function createUser(input: z.infer<typeof CreateUserInputSchema>) {
  // Input is automatically validated against CreateUserInputSchema
  const response = await Api.post(`/api/users`, input, {
    inputSchema: CreateUserInputSchema,
    outputSchema: CreateUserOutputSchema,
    successMessage: 'User created successfully',
  });

  // TypeScript knows response.data matches CreateUserOutputSchema
  if (response.success) {
    console.log(response.data.createdAt); // ✓ Type-safe
  }

  return response;
}

/**
 * Example: PUT request
 */
export async function updateUser(id: string, input: Partial<z.infer<typeof CreateUserInputSchema>>) {
  const response = await Api.put(`/api/users/${id}`, input, {
    inputSchema: CreateUserInputSchema.partial(),
    outputSchema: UserOutputSchema,
  });

  return response;
}

/**
 * Example: DELETE request
 */
export async function deleteUser(id: string) {
  const DeleteResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
  });

  const response = await Api.delete(`/api/users/${id}`, {
    outputSchema: DeleteResponseSchema,
  });

  return response;
}
