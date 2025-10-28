import z from 'zod';

export const AdminDashboardStatsResponseDto = z.object({
  totalUsers: z.number().int().nonnegative(),
  totalCars: z.number().int().nonnegative(),
  totalBookings: z.number().int().nonnegative(),
  activeBookings: z.number().int().nonnegative(),
  availableCars: z.number().int().nonnegative(),
  occupiedCars: z.number().int().nonnegative(),
  totalRevenue: z.number().nonnegative(),
  monthlyRevenue: z.number().nonnegative(),
  dailyRevenue: z.number().nonnegative(),
  occupancyRate: z.number().min(0).max(100),
  pendingBookings: z.number().int().nonnegative(),
  confirmedBookings: z.number().int().nonnegative(),
  cancelledBookings: z.number().int().nonnegative(),
});

export const AdminDashboardRevenueQueryDto = z.object({
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
});

export const AdminDashboardRevenueResponseDto = z.object({
  date: z.string().datetime(),
  dailyRevenue: z.number().nonnegative(),
  cumulativeRevenue: z.number().nonnegative(),
  bookingsCount: z.number().int().nonnegative(),
});

export const AdminDashboardRevenueTotalResponseDto = z.number().nonnegative();
export const AdminDashboardRevenueMonthlyResponseDto = z.number().nonnegative();
export const AdminDashboardRevenueDailyResponseDto = z.number().nonnegative();
export const AdminDashboardOccupancyRateResponseDto = z.number().min(0).max(100);
