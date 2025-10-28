import { Api } from '../_common/common.api';
import { AdminDashboardStatsResponseDto } from './admin-dashboard.dto';

export class AdminDashboardApi {
  static readonly baseURL = '/api/admin/dashboard';

  static async getStats() {
    return await Api.get(this.baseURL + '/stats', {
      outputSchema: AdminDashboardStatsResponseDto,
      successMessage: 'Dashboard stats fetched successfully',
    });
  }
}
