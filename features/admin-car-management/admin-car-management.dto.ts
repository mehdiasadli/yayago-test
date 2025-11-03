import z from 'zod';
import { GetCarByIdResponseDto } from '../cars/cars.dto';
import { CarStatusEnumSchema } from '../cars/cars.enums';
import { GetBookingByIdResponseDto } from '../bookings/bookings.dto';

// Base Admin Car DTO
export const AdminCarDto = GetCarByIdResponseDto.extend({
  totalBookings: z.number().int().nonnegative().nullish(),
  activeBookings: z.number().int().nonnegative().nullish(),
  totalRevenue: z.number().nonnegative().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date().nullish(),
});

// GET /api/admin/cars - Get all cars
export const AdminGetCarsQueryDto = z.object({
  searchTerm: z.string().optional(),
  brand: z.string().optional(),
  model: z.string().optional(),
  year: z.coerce.number().int().min(1860).optional(),
  minPrice: z.coerce.number().positive().optional(),
  maxPrice: z.coerce.number().positive().optional(),
  available: z.coerce.boolean().optional(),
  page: z.coerce.number().int().nonnegative().optional(),
  size: z.coerce.number().int().positive().optional(),
});

export const AdminGetCarsResponseDto = AdminCarDto.array();

// GET /api/admin/cars/{carId} - Get car by ID
export const AdminGetCarByIdParamsDto = z.object({
  carId: z.coerce.number().int().positive(),
});

export const AdminGetCarByIdResponseDto = AdminCarDto;

// POST /api/admin/cars - Create car
export const AdminCreateCarRequestDto = GetCarByIdResponseDto.omit({
  id: true,
  viewCount: true,
  images: true,
  primaryImageUrl: true,
  createdByFullName: true,
  favoritesCount: true,
  isFavorite: true,
  reviewCount: true,
  averageRating: true,
  status: true,
  rejectionReason: true,
});

export const AdminCreateCarResponseDto = AdminCarDto;

// POST /api/admin/cars/{carId}/approve - Approve car
export const AdminApproveCarParamsDto = z.object({
  carId: z.coerce.number().int().positive(),
});

export const AdminApproveCarResponseDto = AdminCarDto;

// POST /api/admin/cars/{carId}/reject - Reject car
export const AdminRejectCarParamsDto = z.object({
  carId: z.coerce.number().int().positive(),
});

export const AdminRejectCarQueryDto = z.object({
  reason: z.string().min(1, 'Rejection reason is required'),
});

export const AdminRejectCarResponseDto = AdminCarDto;

// GET /api/admin/cars/pending - Get pending cars
export const AdminGetPendingCarsResponseDto = AdminCarDto.array();

// GET /api/admin/cars/status/{status} - Get cars by status
export const AdminGetCarsByStatusParamsDto = z.object({
  status: CarStatusEnumSchema,
});

export const AdminGetCarsByStatusResponseDto = AdminCarDto.array();

// GET /api/admin/cars/analytics/popular - Get popular cars
export const AdminGetPopularCarsResponseDto = AdminCarDto.array();

// GET /api/admin/cars/analytics/revenue - Get cars by revenue
export const AdminGetCarsByRevenueResponseDto = AdminCarDto.array();

// GET /api/admin/cars/{carId}/bookings - Get car bookings
export const AdminGetCarBookingsParamsDto = z.object({
  carId: z.coerce.number().int().positive(),
});

export const AdminGetCarBookingsResponseDto = GetBookingByIdResponseDto.array();

// GET /api/admin/cars/{carId}/bookings/count - Get car total bookings
export const AdminGetCarTotalBookingsParamsDto = z.object({
  carId: z.coerce.number().int().positive(),
});

export const AdminGetCarTotalBookingsResponseDto = z.number().int().nonnegative();

// GET /api/admin/cars/{carId}/bookings/active-count - Get car active bookings
export const AdminGetCarActiveBookingsParamsDto = z.object({
  carId: z.coerce.number().int().positive(),
});

export const AdminGetCarActiveBookingsResponseDto = z.number().int().nonnegative();

// GET /api/admin/cars/{carId}/occupancy-rate - Get car occupancy rate
export const AdminGetCarOccupancyRateParamsDto = z.object({
  carId: z.coerce.number().int().positive(),
});

export const AdminGetCarOccupancyRateResponseDto = z.number().min(0).max(100);

// DELETE /api/admin/cars/{carId} - Delete car
export const AdminDeleteCarParamsDto = z.object({
  carId: z.coerce.number().int().positive(),
});

// GET /api/admin/cars/{carId} - Get car by id
// fill here
