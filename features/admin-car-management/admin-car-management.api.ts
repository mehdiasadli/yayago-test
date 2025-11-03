import { Api } from '../_common/common.api';
import {
  TAdminGetCarsQuery,
  TAdminGetCarByIdParams,
  TAdminCreateCarRequest,
  TAdminApproveCarParams,
  TAdminRejectCarParams,
  TAdminRejectCarQuery,
  TAdminGetCarsByStatusParams,
  TAdminGetCarBookingsParams,
  TAdminGetCarTotalBookingsParams,
  TAdminGetCarActiveBookingsParams,
  TAdminGetCarOccupancyRateParams,
  TAdminDeleteCarParams,
} from './admin-car-management.types';
import {
  AdminGetCarsResponseDto,
  AdminGetCarByIdResponseDto,
  AdminCreateCarRequestDto,
  AdminCreateCarResponseDto,
  AdminApproveCarResponseDto,
  AdminRejectCarResponseDto,
  AdminGetPendingCarsResponseDto,
  AdminGetCarsByStatusResponseDto,
  AdminGetPopularCarsResponseDto,
  AdminGetCarsByRevenueResponseDto,
  AdminGetCarBookingsResponseDto,
  AdminGetCarTotalBookingsResponseDto,
  AdminGetCarActiveBookingsResponseDto,
  AdminGetCarOccupancyRateResponseDto,
} from './admin-car-management.dto';
import qs from 'qs';
import { z } from 'zod';

export class AdminCarManagementApi {
  static readonly baseURL = '/api/admin/cars';

  /**
   * GET /api/admin/cars - Get all cars with filters
   */
  static async getCars(query: TAdminGetCarsQuery) {
    const queryString = qs.stringify(query, { skipNulls: true });
    const queryParams = queryString ? '?' + queryString : '';

    return await Api.get(this.baseURL + queryParams, {
      outputSchema: AdminGetCarsResponseDto,
      successMessage: 'Cars fetched successfully',
    });
  }

  /**
   * GET /api/admin/cars/{carId} - Get car by ID
   */
  static async getCarById(params: TAdminGetCarByIdParams) {
    return await Api.get(`${this.baseURL}/${params.carId}`, {
      outputSchema: AdminGetCarByIdResponseDto,
      successMessage: 'Car fetched successfully',
    });
  }

  /**
   * POST /api/admin/cars - Create a new car
   */
  static async createCar(data: TAdminCreateCarRequest) {
    return await Api.post(this.baseURL, data, {
      inputSchema: AdminCreateCarRequestDto,
      outputSchema: AdminCreateCarResponseDto,
      successMessage: 'Car created successfully',
    });
  }

  /**
   * POST /api/admin/cars/{carId}/approve - Approve a pending car
   */
  static async approveCar(params: TAdminApproveCarParams) {
    return await Api.post(`${this.baseURL}/${params.carId}/approve`, undefined, {
      inputSchema: z.undefined(),
      outputSchema: AdminApproveCarResponseDto,
      successMessage: 'Car approved successfully',
    });
  }

  /**
   * POST /api/admin/cars/{carId}/reject - Reject a pending car
   */
  static async rejectCar(params: TAdminRejectCarParams, query: TAdminRejectCarQuery) {
    const queryString = qs.stringify(query);

    return await Api.post(`${this.baseURL}/${params.carId}/reject?${queryString}`, undefined, {
      inputSchema: z.undefined(),
      outputSchema: AdminRejectCarResponseDto,
      successMessage: 'Car rejected successfully',
    });
  }

  /**
   * GET /api/admin/cars/pending - Get all pending cars
   */
  static async getPendingCars() {
    return await Api.get(`${this.baseURL}/pending`, {
      outputSchema: AdminGetPendingCarsResponseDto,
      successMessage: 'Pending cars fetched successfully',
    });
  }

  /**
   * GET /api/admin/cars/status/{status} - Get cars by status
   */
  static async getCarsByStatus(params: TAdminGetCarsByStatusParams) {
    return await Api.get(`${this.baseURL}/status/${params.status}`, {
      outputSchema: AdminGetCarsByStatusResponseDto,
      successMessage: 'Cars fetched successfully',
    });
  }

  /**
   * GET /api/admin/cars/analytics/popular - Get most popular cars
   */
  static async getMostPopularCars() {
    return await Api.get(`${this.baseURL}/analytics/popular`, {
      outputSchema: AdminGetPopularCarsResponseDto,
      successMessage: 'Popular cars fetched successfully',
    });
  }

  /**
   * GET /api/admin/cars/analytics/revenue - Get cars by revenue
   */
  static async getCarsByRevenue() {
    return await Api.get(`${this.baseURL}/analytics/revenue`, {
      outputSchema: AdminGetCarsByRevenueResponseDto,
      successMessage: 'Cars by revenue fetched successfully',
    });
  }

  /**
   * GET /api/admin/cars/{carId}/bookings - Get all bookings for a car
   */
  static async getCarBookings(params: TAdminGetCarBookingsParams) {
    return await Api.get(`${this.baseURL}/${params.carId}/bookings`, {
      outputSchema: AdminGetCarBookingsResponseDto,
      successMessage: 'Car bookings fetched successfully',
    });
  }

  /**
   * GET /api/admin/cars/{carId}/bookings/count - Get total bookings count
   */
  static async getCarTotalBookings(params: TAdminGetCarTotalBookingsParams) {
    return await Api.get(`${this.baseURL}/${params.carId}/bookings/count`, {
      outputSchema: AdminGetCarTotalBookingsResponseDto,
      successMessage: 'Car total bookings fetched successfully',
    });
  }

  /**
   * GET /api/admin/cars/{carId}/bookings/active-count - Get active bookings count
   */
  static async getCarActiveBookings(params: TAdminGetCarActiveBookingsParams) {
    return await Api.get(`${this.baseURL}/${params.carId}/bookings/active-count`, {
      outputSchema: AdminGetCarActiveBookingsResponseDto,
      successMessage: 'Car active bookings fetched successfully',
    });
  }

  /**
   * GET /api/admin/cars/{carId}/occupancy-rate - Get car occupancy rate
   */
  static async getCarOccupancyRate(params: TAdminGetCarOccupancyRateParams) {
    return await Api.get(`${this.baseURL}/${params.carId}/occupancy-rate`, {
      outputSchema: AdminGetCarOccupancyRateResponseDto,
      successMessage: 'Car occupancy rate fetched successfully',
    });
  }

  /**
   * DELETE /api/admin/cars/{carId} - Delete a car
   */
  static async deleteCar(params: TAdminDeleteCarParams) {
    return await Api.delete(`${this.baseURL}/${params.carId}`, {
      outputSchema: z.void(),
      successMessage: 'Car deleted successfully',
    });
  }
}
