import z from 'zod';

// GET /api/admin/dashboard/stats - Get dashboard statistics
export const AdminGetDashboardStatsResponseDto = z.object({
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

// GET /api/admin/dashboard/revenue - Get revenue statistics for date range
export const AdminGetRevenueStatsQueryDto = z.object({
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
});

export const AdminGetRevenueStatsResponseDto = z
  .object({
    date: z.coerce.date(),
    dailyRevenue: z.number().nonnegative(),
    cumulativeRevenue: z.number().nonnegative(),
    bookingsCount: z.number().int().nonnegative(),
  })
  .array();

// GET /api/admin/dashboard/revenue/total - Get total revenue
export const AdminGetTotalRevenueResponseDto = z.number().nonnegative();

// GET /api/admin/dashboard/revenue/monthly - Get monthly revenue
export const AdminGetMonthlyRevenueResponseDto = z.number().nonnegative();

// GET /api/admin/dashboard/revenue/daily - Get daily revenue
export const AdminGetDailyRevenueResponseDto = z.number().nonnegative();

// GET /api/admin/dashboard/occupancy-rate - Get occupancy rate
export const AdminGetOccupancyRateResponseDto = z.number().min(0).max(100);
