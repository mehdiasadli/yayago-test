'use server';

import { auth } from '@/lib/auth';
import { authenticatedFetch } from './auth-helper';
/**
 * Car Server Actions
 * Server-side actions for car mutations (create, update, delete)
 * Based on YayaGo Rent-A-Car API v2.0
 */

import { CarDetailsSchema } from './car.schema';
import type { CarDetailsResponseDto } from '@/lib/api/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

/**
 * Create a new car
 * @param data - Car details
 * @returns Success/error response with car data
 */
export async function createCar(data: unknown) {
  try {
    // Check authentication
    const session = await auth();
    if (!session?.accessToken) {
      return {
        success: false,
        error: 'You must be logged in to create a car. Please sign in again.',
      };
    }

    // Validate input data
    const validationResult = CarDetailsSchema.safeParse(data);

    if (!validationResult.success) {
      return {
        success: false,
        error: validationResult.error.errors[0]?.message || 'Invalid car data',
      };
    }

    // Use authenticatedFetch which handles token refresh automatically
    const response = await authenticatedFetch(`${API_BASE_URL}/api/cars`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validationResult.data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);

      // After token refresh attempt, if still 401, user needs to re-login
      if (response.status === 401) {
        return {
          success: false,
          error: 'Your session has expired. Please sign in again.',
        };
      }

      return {
        success: false,
        error: errorData?.message || 'Failed to create car',
      };
    }

    const carData = await response.json();

    return {
      success: true,
      data: carData as CarDetailsResponseDto,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create car',
    };
  }
}

/**
 * Update an existing car
 * @param id - Car ID
 * @param data - Updated car details
 * @returns Success/error response with updated car data
 */
export async function updateCar(id: number, data: unknown) {
  try {
    // Check authentication
    const session = await auth();
    if (!session?.accessToken) {
      return {
        success: false,
        error: 'You must be logged in to update a car. Please sign in again.',
      };
    }

    // Validate input data
    const validationResult = CarDetailsSchema.safeParse(data);

    if (!validationResult.success) {
      return {
        success: false,
        error: validationResult.error.errors[0]?.message || 'Invalid car data',
      };
    }

    // Use authenticatedFetch which handles token refresh automatically
    const response = await authenticatedFetch(`${API_BASE_URL}/api/cars/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validationResult.data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);

      // After token refresh attempt, if still 401, user needs to re-login
      if (response.status === 401) {
        return {
          success: false,
          error: 'Your session has expired. Please sign in again.',
        };
      }

      return {
        success: false,
        error: errorData?.message || 'Failed to update car',
      };
    }

    const carData = await response.json();

    return {
      success: true,
      data: carData as CarDetailsResponseDto,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update car',
    };
  }
}

/**
 * Delete a car
 * @param id - Car ID
 * @returns Success/error response
 */
export async function deleteCar(id: number) {
  try {
    // Check authentication
    const session = await auth();
    if (!session?.accessToken) {
      return {
        success: false,
        error: 'You must be logged in to delete a car. Please sign in again.',
      };
    }

    // Use authenticatedFetch which handles token refresh automatically
    const response = await authenticatedFetch(`${API_BASE_URL}/api/cars/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);

      // After token refresh attempt, if still 401, user needs to re-login
      if (response.status === 401) {
        return {
          success: false,
          error: 'Your session has expired. Please sign in again.',
        };
      }

      return {
        success: false,
        error: errorData?.message || 'Failed to delete car',
      };
    }

    return {
      success: true,
      message: 'Car deleted successfully',
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to delete car',
    };
  }
}

/**
 * Get all cars (for server-side rendering)
 * @returns Success/error response with cars array
 */
export async function getAllCars() {
  try {
    // Optional authentication - send token if available
    const session = await auth();
    const headers: HeadersInit = {};

    if (session?.accessToken) {
      headers.Authorization = `Bearer ${session.accessToken}`;
    }

    const response = await fetch(`${API_BASE_URL}/api/cars`, {
      method: 'GET',
      headers,
      cache: 'no-store', // Disable caching for fresh data
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return {
        success: false,
        error: errorData?.message || 'Failed to fetch cars',
      };
    }

    const carsData = await response.json();

    return {
      success: true,
      data: carsData as CarDetailsResponseDto[],
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch cars',
    };
  }
}

/**
 * Get car by ID (for server-side rendering)
 * @param id - Car ID
 * @returns Success/error response with car data
 */
export async function getCarById(id: number) {
  try {
    // Optional authentication - send token if available
    const session = await auth();
    const headers: HeadersInit = {};

    if (session?.accessToken) {
      headers.Authorization = `Bearer ${session.accessToken}`;
    }

    const response = await fetch(`${API_BASE_URL}/api/cars/${id}`, {
      method: 'GET',
      headers,
      cache: 'no-store', // Disable caching for fresh data
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return {
        success: false,
        error: errorData?.message || 'Failed to fetch car',
      };
    }

    const carData = await response.json();

    return {
      success: true,
      data: carData as CarDetailsResponseDto,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch car',
    };
  }
}
