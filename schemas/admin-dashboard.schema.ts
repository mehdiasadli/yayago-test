import { z } from 'zod';

// ============================================================================
// DASHBOARD STATS SCHEMA (DashboardStatsDto)
// ============================================================================

export const DashboardStatsSchema = z.object({
  totalUsers: z
    .number({ required_error: 'Total users is required', invalid_type_error: 'Total users must be a number' })
    .int('Total users must be an integer')
    .nonnegative('Total users cannot be negative'),
  totalCars: z
    .number({ required_error: 'Total cars is required', invalid_type_error: 'Total cars must be a number' })
    .int('Total cars must be an integer')
    .nonnegative('Total cars cannot be negative'),
  totalBookings: z
    .number({ required_error: 'Total bookings is required', invalid_type_error: 'Total bookings must be a number' })
    .int('Total bookings must be an integer')
    .nonnegative('Total bookings cannot be negative'),
  activeBookings: z
    .number({ required_error: 'Active bookings is required', invalid_type_error: 'Active bookings must be a number' })
    .int('Active bookings must be an integer')
    .nonnegative('Active bookings cannot be negative'),
  availableCars: z
    .number({ required_error: 'Available cars is required', invalid_type_error: 'Available cars must be a number' })
    .int('Available cars must be an integer')
    .nonnegative('Available cars cannot be negative'),
  occupiedCars: z
    .number({ required_error: 'Occupied cars is required', invalid_type_error: 'Occupied cars must be a number' })
    .int('Occupied cars must be an integer')
    .nonnegative('Occupied cars cannot be negative'),
  totalRevenue: z
    .number({ required_error: 'Total revenue is required', invalid_type_error: 'Total revenue must be a number' })
    .nonnegative('Total revenue cannot be negative'),
  monthlyRevenue: z
    .number({ required_error: 'Monthly revenue is required', invalid_type_error: 'Monthly revenue must be a number' })
    .nonnegative('Monthly revenue cannot be negative'),
  dailyRevenue: z
    .number({ required_error: 'Daily revenue is required', invalid_type_error: 'Daily revenue must be a number' })
    .nonnegative('Daily revenue cannot be negative'),
  occupancyRate: z
    .number({ required_error: 'Occupancy rate is required', invalid_type_error: 'Occupancy rate must be a number' })
    .min(0, 'Occupancy rate cannot be less than 0')
    .max(100, 'Occupancy rate cannot exceed 100'),
  pendingBookings: z
    .number({ required_error: 'Pending bookings is required', invalid_type_error: 'Pending bookings must be a number' })
    .int('Pending bookings must be an integer')
    .nonnegative('Pending bookings cannot be negative'),
  confirmedBookings: z
    .number({
      required_error: 'Confirmed bookings is required',
      invalid_type_error: 'Confirmed bookings must be a number',
    })
    .int('Confirmed bookings must be an integer')
    .nonnegative('Confirmed bookings cannot be negative'),
  cancelledBookings: z
    .number({
      required_error: 'Cancelled bookings is required',
      invalid_type_error: 'Cancelled bookings must be a number',
    })
    .int('Cancelled bookings must be an integer')
    .nonnegative('Cancelled bookings cannot be negative'),
});

export type TDashboardStats = z.infer<typeof DashboardStatsSchema>;

// ============================================================================
// REVENUE STATS SCHEMA (RevenueStatsDto)
// ============================================================================

export const RevenueStatsSchema = z.object({
  date: z
    .string({ required_error: 'Date is required' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  dailyRevenue: z
    .number({ required_error: 'Daily revenue is required', invalid_type_error: 'Daily revenue must be a number' })
    .nonnegative('Daily revenue cannot be negative'),
  cumulativeRevenue: z
    .number({
      required_error: 'Cumulative revenue is required',
      invalid_type_error: 'Cumulative revenue must be a number',
    })
    .nonnegative('Cumulative revenue cannot be negative'),
  bookingsCount: z
    .number({ required_error: 'Bookings count is required', invalid_type_error: 'Bookings count must be a number' })
    .int('Bookings count must be an integer')
    .nonnegative('Bookings count cannot be negative'),
});

export type TRevenueStats = z.infer<typeof RevenueStatsSchema>;

// ============================================================================
// GET REVENUE STATS QUERY PARAMS
// ============================================================================

export const GetRevenueStatsQuerySchema = z.object({
  startDate: z
    .string({ required_error: 'Start date is required' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Start date must be in YYYY-MM-DD format'),
  endDate: z
    .string({ required_error: 'End date is required' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'End date must be in YYYY-MM-DD format'),
});

// Add custom validation for date range
export const GetRevenueStatsQueryWithValidationSchema = GetRevenueStatsQuerySchema.refine(
  (data) => {
    const start = new Date(data.startDate);
    const end = new Date(data.endDate);
    return end >= start;
  },
  {
    message: 'End date must be on or after start date',
    path: ['endDate'],
  }
);

export type TGetRevenueStatsQuery = z.infer<typeof GetRevenueStatsQuerySchema>;

// ============================================================================
// OCCUPANCY RATE OUTPUT SCHEMA
// ============================================================================

export const OccupancyRateOutputSchema = z
  .number({ required_error: 'Occupancy rate is required', invalid_type_error: 'Occupancy rate must be a number' })
  .min(0, 'Occupancy rate cannot be less than 0')
  .max(100, 'Occupancy rate cannot exceed 100');

export type TOccupancyRateOutput = z.infer<typeof OccupancyRateOutputSchema>;

// ============================================================================
// REVENUE OUTPUT SCHEMAS
// ============================================================================

export const RevenueOutputSchema = z
  .number({ required_error: 'Revenue is required', invalid_type_error: 'Revenue must be a number' })
  .nonnegative('Revenue cannot be negative');

export type TRevenueOutput = z.infer<typeof RevenueOutputSchema>;

// ============================================================================
// BOOKINGS COUNT OUTPUT SCHEMAS
// ============================================================================

export const BookingsCountOutputSchema = z
  .number({ required_error: 'Bookings count is required', invalid_type_error: 'Bookings count must be a number' })
  .int('Bookings count must be an integer')
  .nonnegative('Bookings count cannot be negative');

export type TBookingsCountOutput = z.infer<typeof BookingsCountOutputSchema>;

// ============================================================================
// LEGACY EXPORTS (for backward compatibility)
// ============================================================================

export const DashboardStatsDto = DashboardStatsSchema;
export const RevenueStatsDto = RevenueStatsSchema;
