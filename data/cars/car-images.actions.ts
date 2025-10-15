'use server';

import { auth } from '@/lib/auth';
import { authenticatedFetch } from './auth-helper';
/**
 * Car Images Server Actions
 * Server-side actions for car image operations
 * Based on YayaGo Rent-A-Car API v2.0
 */

import { isValidImageFile } from './car-images.schema';
import type { ImageResponseDto } from '@/lib/api/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

/**
 * Upload an image for a car
 * @param carId - Car ID
 * @param formData - FormData containing the file
 * @param isPrimary - Whether to set as primary image
 * @returns Success/error response with image data
 */
export async function uploadCarImage(carId: number, formData: FormData, isPrimary = false) {
  try {
    // Check authentication
    const session = await auth();
    if (!session?.accessToken) {
      return {
        success: false,
        error: 'You must be logged in to upload images. Please sign in again.',
      };
    }

    const file = formData.get('file') as File;

    if (!file) {
      return {
        success: false,
        error: 'No file provided',
      };
    }

    // Validate file
    const validation = isValidImageFile(file);
    if (!validation.success) {
      return {
        success: false,
        error: validation.error?.issues[0]?.message || 'Invalid file',
      };
    }

    // Use authenticatedFetch which handles token refresh automatically
    const response = await authenticatedFetch(`${API_BASE_URL}/api/cars/${carId}/images?isPrimary=${isPrimary}`, {
      method: 'POST',
      body: formData,
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
        error: errorData?.message || 'Failed to upload image',
      };
    }

    const imageData = await response.json();

    return {
      success: true,
      data: imageData as ImageResponseDto,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to upload image',
    };
  }
}

/**
 * Set an image as primary
 * @param imageId - Image ID
 * @returns Success/error response with updated image data
 */
export async function setPrimaryImage(imageId: number) {
  try {
    // Check authentication
    const session = await auth();
    if (!session?.accessToken) {
      return {
        success: false,
        error: 'You must be logged in to set primary image. Please sign in again.',
      };
    }

    // Use authenticatedFetch which handles token refresh automatically
    const response = await authenticatedFetch(`${API_BASE_URL}/api/cars/images/${imageId}/primary`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
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
        error: errorData?.message || 'Failed to set primary image',
      };
    }

    const imageData = await response.json();

    return {
      success: true,
      data: imageData as ImageResponseDto,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to set primary image',
    };
  }
}

/**
 * Delete a specific image
 * @param imageId - Image ID
 * @returns Success/error response
 */
export async function deleteCarImage(imageId: number) {
  try {
    // Check authentication
    const session = await auth();
    if (!session?.accessToken) {
      return {
        success: false,
        error: 'You must be logged in to delete images. Please sign in again.',
      };
    }

    // Use authenticatedFetch which handles token refresh automatically
    const response = await authenticatedFetch(`${API_BASE_URL}/api/cars/images/${imageId}`, {
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
        error: errorData?.message || 'Failed to delete image',
      };
    }

    return {
      success: true,
      message: 'Image deleted successfully',
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to delete image',
    };
  }
}

/**
 * Delete all images for a car
 * @param carId - Car ID
 * @returns Success/error response
 */
export async function deleteAllCarImages(carId: number) {
  try {
    // Check authentication
    const session = await auth();
    if (!session?.accessToken) {
      return {
        success: false,
        error: 'You must be logged in to delete images. Please sign in again.',
      };
    }

    // Use authenticatedFetch which handles token refresh automatically
    const response = await authenticatedFetch(`${API_BASE_URL}/api/cars/${carId}/images`, {
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
        error: errorData?.message || 'Failed to delete images',
      };
    }

    return {
      success: true,
      message: 'All images deleted successfully',
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to delete images',
    };
  }
}

/**
 * Get all images for a car (for server-side rendering)
 * @param carId - Car ID
 * @returns Success/error response with images array
 */
export async function getCarImages(carId: number) {
  try {
    // Optional authentication - send token if available
    const session = await auth();
    const headers: HeadersInit = {};

    if (session?.accessToken) {
      headers.Authorization = `Bearer ${session.accessToken}`;
    }

    const response = await fetch(`${API_BASE_URL}/api/cars/${carId}/images`, {
      method: 'GET',
      headers,
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return {
        success: false,
        error: errorData?.message || 'Failed to fetch images',
      };
    }

    const imagesData = await response.json();

    return {
      success: true,
      data: imagesData as ImageResponseDto[],
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch images',
    };
  }
}

/**
 * Get primary image for a car (for server-side rendering)
 * @param carId - Car ID
 * @returns Success/error response with primary image data
 */
export async function getPrimaryImage(carId: number) {
  try {
    // Optional authentication - send token if available
    const session = await auth();
    const headers: HeadersInit = {};

    if (session?.accessToken) {
      headers.Authorization = `Bearer ${session.accessToken}`;
    }

    const response = await fetch(`${API_BASE_URL}/api/cars/${carId}/images/primary`, {
      method: 'GET',
      headers,
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return {
        success: false,
        error: errorData?.message || 'Failed to fetch primary image',
      };
    }

    const imageData = await response.json();

    return {
      success: true,
      data: imageData as ImageResponseDto,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch primary image',
    };
  }
}
