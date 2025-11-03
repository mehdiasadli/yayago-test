import z from 'zod';
import {
  AdminCarDto,
  AdminGetCarsQueryDto,
  AdminGetCarsResponseDto,
  AdminGetCarByIdParamsDto,
  AdminGetCarByIdResponseDto,
  AdminCreateCarRequestDto,
  AdminCreateCarResponseDto,
  AdminApproveCarParamsDto,
  AdminApproveCarResponseDto,
  AdminRejectCarParamsDto,
  AdminRejectCarQueryDto,
  AdminRejectCarResponseDto,
  AdminGetPendingCarsResponseDto,
  AdminGetCarsByStatusParamsDto,
  AdminGetCarsByStatusResponseDto,
  AdminGetPopularCarsResponseDto,
  AdminGetCarsByRevenueResponseDto,
  AdminGetCarBookingsParamsDto,
  AdminGetCarBookingsResponseDto,
  AdminGetCarTotalBookingsParamsDto,
  AdminGetCarTotalBookingsResponseDto,
  AdminGetCarActiveBookingsParamsDto,
  AdminGetCarActiveBookingsResponseDto,
  AdminGetCarOccupancyRateParamsDto,
  AdminGetCarOccupancyRateResponseDto,
  AdminDeleteCarParamsDto,
} from './admin-car-management.dto';

// Base types
export type TAdminCar = z.infer<typeof AdminCarDto>;

// GET /api/admin/cars
export type TAdminGetCarsQuery = z.infer<typeof AdminGetCarsQueryDto>;
export type TAdminGetCarsResponse = z.infer<typeof AdminGetCarsResponseDto>;

// GET /api/admin/cars/{carId}
export type TAdminGetCarByIdParams = z.infer<typeof AdminGetCarByIdParamsDto>;
export type TAdminGetCarByIdResponse = z.infer<typeof AdminGetCarByIdResponseDto>;

// POST /api/admin/cars
export type TAdminCreateCarRequest = z.infer<typeof AdminCreateCarRequestDto>;
export type TAdminCreateCarResponse = z.infer<typeof AdminCreateCarResponseDto>;

// POST /api/admin/cars/{carId}/approve
export type TAdminApproveCarParams = z.infer<typeof AdminApproveCarParamsDto>;
export type TAdminApproveCarResponse = z.infer<typeof AdminApproveCarResponseDto>;

// POST /api/admin/cars/{carId}/reject
export type TAdminRejectCarParams = z.infer<typeof AdminRejectCarParamsDto>;
export type TAdminRejectCarQuery = z.infer<typeof AdminRejectCarQueryDto>;
export type TAdminRejectCarResponse = z.infer<typeof AdminRejectCarResponseDto>;

// GET /api/admin/cars/pending
export type TAdminGetPendingCarsResponse = z.infer<typeof AdminGetPendingCarsResponseDto>;

// GET /api/admin/cars/status/{status}
export type TAdminGetCarsByStatusParams = z.infer<typeof AdminGetCarsByStatusParamsDto>;
export type TAdminGetCarsByStatusResponse = z.infer<typeof AdminGetCarsByStatusResponseDto>;

// GET /api/admin/cars/analytics/popular
export type TAdminGetPopularCarsResponse = z.infer<typeof AdminGetPopularCarsResponseDto>;

// GET /api/admin/cars/analytics/revenue
export type TAdminGetCarsByRevenueResponse = z.infer<typeof AdminGetCarsByRevenueResponseDto>;

// GET /api/admin/cars/{carId}/bookings
export type TAdminGetCarBookingsParams = z.infer<typeof AdminGetCarBookingsParamsDto>;
export type TAdminGetCarBookingsResponse = z.infer<typeof AdminGetCarBookingsResponseDto>;

// GET /api/admin/cars/{carId}/bookings/count
export type TAdminGetCarTotalBookingsParams = z.infer<typeof AdminGetCarTotalBookingsParamsDto>;
export type TAdminGetCarTotalBookingsResponse = z.infer<typeof AdminGetCarTotalBookingsResponseDto>;

// GET /api/admin/cars/{carId}/bookings/active-count
export type TAdminGetCarActiveBookingsParams = z.infer<typeof AdminGetCarActiveBookingsParamsDto>;
export type TAdminGetCarActiveBookingsResponse = z.infer<typeof AdminGetCarActiveBookingsResponseDto>;

// GET /api/admin/cars/{carId}/occupancy-rate
export type TAdminGetCarOccupancyRateParams = z.infer<typeof AdminGetCarOccupancyRateParamsDto>;
export type TAdminGetCarOccupancyRateResponse = z.infer<typeof AdminGetCarOccupancyRateResponseDto>;

// DELETE /api/admin/cars/{carId}
export type TAdminDeleteCarParams = z.infer<typeof AdminDeleteCarParamsDto>;
