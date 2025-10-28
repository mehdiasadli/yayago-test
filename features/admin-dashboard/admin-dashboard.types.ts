import z from 'zod';
import {
  AdminDashboardOccupancyRateResponseDto,
  AdminDashboardRevenueDailyResponseDto,
  AdminDashboardRevenueMonthlyResponseDto,
  AdminDashboardRevenueResponseDto,
  AdminDashboardRevenueTotalResponseDto,
  AdminDashboardStatsResponseDto,
} from './admin-dashboard.dto';

export type TAdminDashboardStats = z.infer<typeof AdminDashboardStatsResponseDto>;
export type TAdminDashboardRevenue = z.infer<typeof AdminDashboardRevenueResponseDto>;
export type TAdminDashboardRevenueTotal = z.infer<typeof AdminDashboardRevenueTotalResponseDto>;
export type TAdminDashboardRevenueMonthly = z.infer<typeof AdminDashboardRevenueMonthlyResponseDto>;
export type TAdminDashboardRevenueDaily = z.infer<typeof AdminDashboardRevenueDailyResponseDto>;
export type TAdminDashboardOccupancyRate = z.infer<typeof AdminDashboardOccupancyRateResponseDto>;
