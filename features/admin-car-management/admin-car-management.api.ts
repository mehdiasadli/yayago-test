import { Api } from '../_common/common.api';
import { TAdminDeleteCarParams, TAdminGetCarsQuery } from './admin-car-management.types';
import { AdminGetCarsResponseDto } from './admin-car-management.dto';
import qs from 'qs';
import { z } from 'zod';

export class AdminCarManagementApi {
  static readonly baseURL = '/api/admin/cars';

  static async getCars(query: TAdminGetCarsQuery) {
    const queryString = qs.stringify(query);
    const queryParams = queryString ? '?' + queryString : '';

    return await Api.get(this.baseURL + queryParams, {
      outputSchema: AdminGetCarsResponseDto,
      successMessage: 'Cars fetched successfully',
    });
  }

  static async deleteCar(params: TAdminDeleteCarParams) {
    return await Api.delete(this.baseURL + '/' + params.carId, {
      outputSchema: z.void(),
      successMessage: 'Car deleted successfully',
    });
  }
}
