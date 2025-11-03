import z from 'zod';
import {
  AdminGetDashboardStatsResponseDto,
  AdminGetRevenueStatsQueryDto,
  AdminGetRevenueStatsResponseDto,
  AdminGetTotalRevenueResponseDto,
  AdminGetMonthlyRevenueResponseDto,
  AdminGetDailyRevenueResponseDto,
  AdminGetOccupancyRateResponseDto,
} from './admin-dashboard.dto';

// GET /api/admin/dashboard/stats
export type TAdminGetDashboardStatsResponse = z.infer<typeof AdminGetDashboardStatsResponseDto>;

// GET /api/admin/dashboard/revenue
export type TAdminGetRevenueStatsQuery = z.infer<typeof AdminGetRevenueStatsQueryDto>;
export type TAdminGetRevenueStatsResponse = z.infer<typeof AdminGetRevenueStatsResponseDto>;

// GET /api/admin/dashboard/revenue/total
export type TAdminGetTotalRevenueResponse = z.infer<typeof AdminGetTotalRevenueResponseDto>;

// GET /api/admin/dashboard/revenue/monthly
export type TAdminGetMonthlyRevenueResponse = z.infer<typeof AdminGetMonthlyRevenueResponseDto>;

// GET /api/admin/dashboard/revenue/daily
export type TAdminGetDailyRevenueResponse = z.infer<typeof AdminGetDailyRevenueResponseDto>;

// GET /api/admin/dashboard/occupancy-rate
export type TAdminGetOccupancyRateResponse = z.infer<typeof AdminGetOccupancyRateResponseDto>;
