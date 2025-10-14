/**
 * Cars Service
 * Handles all car-related API calls to the backend
 * Based on YayaGo Rent-A-Car API v2.0
 */

import { apiClient } from '../client';
import type { CarDetailsDto, CarDetailsResponseDto } from '../types';

class CarsService {
  /**
   * Get all cars
   * @returns Promise<CarDetailsResponseDto[]>
   * @endpoint GET /api/cars
   * @auth No authentication required
   */
  async getAllCars() {
    return apiClient.get<CarDetailsResponseDto[]>('/api/cars');
  }

  /**
   * Get car by ID
   * @param id - Car ID
   * @returns Promise<CarDetailsResponseDto>
   * @endpoint GET /api/cars/{id}
   * @auth No authentication required
   */
  async getCarById(id: number) {
    return apiClient.get<CarDetailsResponseDto>(`/api/cars/${id}`);
  }

  /**
   * Create a new car
   * @param data - Car details
   * @returns Promise<CarDetailsResponseDto>
   * @endpoint POST /api/cars
   * @auth Authentication required
   */
  async createCar(data: CarDetailsDto) {
    return apiClient.post<CarDetailsResponseDto>('/api/cars', data);
  }

  /**
   * Update an existing car
   * @param id - Car ID
   * @param data - Updated car details
   * @returns Promise<CarDetailsResponseDto>
   * @endpoint PUT /api/cars/{id}
   * @auth Authentication required
   */
  async updateCar(id: number, data: CarDetailsDto) {
    return apiClient.put<CarDetailsResponseDto>(`/api/cars/${id}`, data);
  }

  /**
   * Delete a car
   * @param id - Car ID
   * @returns Promise<void>
   * @endpoint DELETE /api/cars/{id}
   * @auth Authentication required
   */
  async deleteCar(id: number) {
    return apiClient.delete(`/api/cars/${id}`);
  }
}

export const carsService = new CarsService();
