import z from 'zod';
import { Api } from '../_common/common.api';
import {
  CreateCarRequestDto,
  CreateCarResponseDto,
  GetCarByIdResponseDto,
  GetCarReviewsResponseDto,
  GetCarsResponseDto,
  SearchCarsResponseDto,
  UpdateCarRequestDto,
  UpdateCarResponseDto,
  GetDistinctTransmissionsResponseDto,
  GetDistinctSeatCountsResponseDto,
  GetDistinctFuelTypesResponseDto,
  GetDistinctDoorCountsResponseDto,
  GetDistinctBrandsResponseDto,
} from './cars.dto';
import {
  TCreateCarRequest,
  TDeleteCarParams,
  TGetCarByIdParams,
  TGetCarReviewsParams,
  TGetCarsQuery,
  TSearchCarsQuery,
  TUpdateCarParams,
  TUpdateCarRequest,
} from './cars.types';
import qs from 'qs';

export class CarsApi {
  static readonly baseURL = '/api/cars';

  /**
   * GET /api/cars - Retrieve a paginated list of all approved cars
   */
  static async getCars(query?: TGetCarsQuery) {
    const queryString = query ? qs.stringify(query, { skipNulls: true }) : '';
    const queryParams = queryString ? '?' + queryString : '';

    return await Api.get(`${this.baseURL}${queryParams}`, {
      outputSchema: GetCarsResponseDto,
      successMessage: 'Cars fetched successfully',
    });
  }

  /**
   * GET /api/cars/{id} - Get details of a specific car by ID
   */
  static async getCarById(params: TGetCarByIdParams) {
    return await Api.get(`${this.baseURL}/${params.id}`, {
      outputSchema: GetCarByIdResponseDto,
      successMessage: 'Car fetched successfully',
    });
  }

  /**
   * POST /api/cars - Add a new car to the system
   */
  static async createCar(input: TCreateCarRequest) {
    return await Api.post(this.baseURL, input, {
      inputSchema: CreateCarRequestDto,
      outputSchema: CreateCarResponseDto,
      successMessage: 'Car created successfully',
    });
  }

  /**
   * PUT /api/cars/{id} - Update details of an existing car
   */
  static async updateCar(params: TUpdateCarParams, input: TUpdateCarRequest) {
    return await Api.put(`${this.baseURL}/${params.id}`, input, {
      inputSchema: UpdateCarRequestDto,
      outputSchema: UpdateCarResponseDto,
      successMessage: 'Car updated successfully',
    });
  }

  /**
   * DELETE /api/cars/{id} - Delete a car from the system by ID
   */
  static async deleteCar(params: TDeleteCarParams) {
    return await Api.delete(`${this.baseURL}/${params.id}`, {
      outputSchema: z.void(),
      successMessage: 'Car deleted successfully',
    });
  }

  /**
   * GET /api/cars/{id}/reviews - Get all reviews for a specific car
   */
  static async getCarReviews(params: TGetCarReviewsParams) {
    return await Api.get(`${this.baseURL}/${params.id}/reviews`, {
      outputSchema: GetCarReviewsResponseDto,
      successMessage: 'Car reviews fetched successfully',
    });
  }

  /**
   * GET /api/cars/search - Search cars with filters and pagination
   */
  static async searchCars(query?: TSearchCarsQuery) {
    const queryString = query ? qs.stringify(query, { skipNulls: true }) : '';
    const queryParams = queryString ? '?' + queryString : '';

    return await Api.get(`${this.baseURL}/search${queryParams}`, {
      outputSchema: SearchCarsResponseDto,
      successMessage: 'Cars search completed successfully',
    });
  }

  /**
   * GET /api/cars/filters/transmissions - Get all available transmission types
   */
  static async getDistinctTransmissions() {
    return await Api.get(`${this.baseURL}/filters/transmissions`, {
      outputSchema: GetDistinctTransmissionsResponseDto,
      successMessage: 'Transmissions fetched successfully',
    });
  }

  /**
   * GET /api/cars/filters/seat-counts - Get all available seat counts
   */
  static async getDistinctSeatCounts() {
    return await Api.get(`${this.baseURL}/filters/seat-counts`, {
      outputSchema: GetDistinctSeatCountsResponseDto,
      successMessage: 'Seat counts fetched successfully',
    });
  }

  /**
   * GET /api/cars/filters/fuel-types - Get all available fuel types
   */
  static async getDistinctFuelTypes() {
    return await Api.get(`${this.baseURL}/filters/fuel-types`, {
      outputSchema: GetDistinctFuelTypesResponseDto,
      successMessage: 'Fuel types fetched successfully',
    });
  }

  /**
   * GET /api/cars/filters/door-counts - Get all available door counts
   */
  static async getDistinctDoorCounts() {
    return await Api.get(`${this.baseURL}/filters/door-counts`, {
      outputSchema: GetDistinctDoorCountsResponseDto,
      successMessage: 'Door counts fetched successfully',
    });
  }

  /**
   * GET /api/cars/filters/brands - Get all available car brands
   */
  static async getDistinctBrands() {
    return await Api.get(`${this.baseURL}/filters/brands`, {
      outputSchema: GetDistinctBrandsResponseDto,
      successMessage: 'Brands fetched successfully',
    });
  }
}
