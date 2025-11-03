import { Api } from '../_common/common.api';
import { TAdminGetRevenueStatsQuery } from './admin-dashboard.types';
import {
  AdminGetDashboardStatsResponseDto,
  AdminGetRevenueStatsResponseDto,
  AdminGetTotalRevenueResponseDto,
  AdminGetMonthlyRevenueResponseDto,
  AdminGetDailyRevenueResponseDto,
  AdminGetOccupancyRateResponseDto,
} from './admin-dashboard.dto';
import qs from 'qs';

export class AdminDashboardApi {
  static readonly baseURL = '/api/admin/dashboard';

  /**
   * GET /api/admin/dashboard/stats - Get dashboard statistics
   */
  static async getStats() {
    return await Api.get(`${this.baseURL}/stats`, {
      outputSchema: AdminGetDashboardStatsResponseDto,
      successMessage: 'Dashboard stats fetched successfully',
    });
  }

  /**
   * GET /api/admin/dashboard/revenue - Get revenue statistics for date range
   */
  static async getRevenueStats(query: TAdminGetRevenueStatsQuery) {
    const queryString = qs.stringify({
      startDate: query.startDate.toISOString().split('T')[0],
      endDate: query.endDate.toISOString().split('T')[0],
    });

    return await Api.get(`${this.baseURL}/revenue?${queryString}`, {
      outputSchema: AdminGetRevenueStatsResponseDto,
      successMessage: 'Revenue stats fetched successfully',
    });
  }

  /**
   * GET /api/admin/dashboard/revenue/total - Get total revenue
   */
  static async getTotalRevenue() {
    return await Api.get(`${this.baseURL}/revenue/total`, {
      outputSchema: AdminGetTotalRevenueResponseDto,
      successMessage: 'Total revenue fetched successfully',
    });
  }

  /**
   * GET /api/admin/dashboard/revenue/monthly - Get monthly revenue
   */
  static async getMonthlyRevenue() {
    return await Api.get(`${this.baseURL}/revenue/monthly`, {
      outputSchema: AdminGetMonthlyRevenueResponseDto,
      successMessage: 'Monthly revenue fetched successfully',
    });
  }

  /**
   * GET /api/admin/dashboard/revenue/daily - Get daily revenue
   */
  static async getDailyRevenue() {
    return await Api.get(`${this.baseURL}/revenue/daily`, {
      outputSchema: AdminGetDailyRevenueResponseDto,
      successMessage: 'Daily revenue fetched successfully',
    });
  }

  /**
   * GET /api/admin/dashboard/occupancy-rate - Get occupancy rate
   */
  static async getOccupancyRate() {
    return await Api.get(`${this.baseURL}/occupancy-rate`, {
      outputSchema: AdminGetOccupancyRateResponseDto,
      successMessage: 'Occupancy rate fetched successfully',
    });
  }
}
