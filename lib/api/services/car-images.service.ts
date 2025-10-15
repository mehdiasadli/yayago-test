/**
 * Car Images Service
 * Handles all car image-related API calls to the backend
 * Based on YayaGo Rent-A-Car API v2.0
 */

import { apiClient } from '../client';
import type { ImageResponseDto } from '../types';

class CarImagesService {
  /**
   * Get all images for a specific car
   * @param carId - Car ID
   * @returns Promise<ImageResponseDto[]>
   * @endpoint GET /api/cars/{carId}/images
   * @auth No authentication required
   */
  async getCarImages(carId: number) {
    return apiClient.get<ImageResponseDto[]>(`/api/cars/${carId}/images`);
  }

  /**
   * Get primary image for a specific car
   * @param carId - Car ID
   * @returns Promise<ImageResponseDto>
   * @endpoint GET /api/cars/{carId}/images/primary
   * @auth No authentication required
   */
  async getPrimaryImage(carId: number) {
    return apiClient.get<ImageResponseDto>(`/api/cars/${carId}/images/primary`);
  }

  /**
   * Upload an image for a car
   * @param carId - Car ID
   * @param file - Image file to upload
   * @param isPrimary - Whether to set as primary image (default: false)
   * @returns Promise<ImageResponseDto>
   * @endpoint POST /api/cars/{carId}/images
   * @auth Authentication required
   */
  async uploadImage(carId: number, file: File, isPrimary = false) {
    const formData = new FormData();
    formData.append('file', file);

    const url = `/api/cars/${carId}/images?isPrimary=${isPrimary}`;
    return apiClient.uploadFile<ImageResponseDto>(url, formData);
  }

  /**
   * Set an image as primary
   * @param imageId - Image ID
   * @returns Promise<ImageResponseDto>
   * @endpoint PUT /api/cars/images/{imageId}/primary
   * @auth Authentication required
   */
  async setPrimaryImage(imageId: number) {
    return apiClient.put<ImageResponseDto>(`/api/cars/images/${imageId}/primary`, {});
  }

  /**
   * Delete a specific image
   * @param imageId - Image ID
   * @returns Promise<void>
   * @endpoint DELETE /api/cars/images/{imageId}
   * @auth Authentication required
   */
  async deleteImage(imageId: number) {
    return apiClient.delete(`/api/cars/images/${imageId}`);
  }

  /**
   * Delete all images for a car
   * @param carId - Car ID
   * @returns Promise<void>
   * @endpoint DELETE /api/cars/{carId}/images
   * @auth Authentication required
   */
  async deleteAllCarImages(carId: number) {
    return apiClient.delete(`/api/cars/${carId}/images`);
  }
}

export const carImagesService = new CarImagesService();
