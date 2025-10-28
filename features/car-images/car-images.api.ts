import { TDeleteImageParams, TGetCarImagesParams } from '@/schemas';
import { Api } from '../_common/common.api';
import {
  CreateCarImageRequestDto,
  CreateCarImageResponseDto,
  GetCarImagesResponseDto,
  GetPrimaryImageResponseDto,
  SetImageAsPrimaryResponseDto,
} from './car-images.dto';
import {
  TCreateCarImageParams,
  TCreateCarImageQuery,
  TCreateCarImageRequest,
  TDeleteAllCarImagesParams,
  TGetPrimaryImageParams,
  TSetImageAsPrimaryParams,
} from './car-images.types';
import z from 'zod';

export class CarImagesApi {
  static readonly baseURL = '/api/cars';

  /** GET /api/cars/{carId}/image */
  static async getCarImages(params: TGetCarImagesParams) {
    return await Api.get(this.baseURL + '/' + params.carId + '/images', {
      outputSchema: GetCarImagesResponseDto,
    });
  }

  /** GET /api/cars/{carId}/image/primary */
  static async getPrimaryCarImage(params: TGetPrimaryImageParams) {
    return await Api.get(this.baseURL + '/' + params.carId + '/images/primary', {
      outputSchema: GetPrimaryImageResponseDto,
    });
  }

  /** POST /api/cars/{carId}/image */
  static async createCarImage(
    params: TCreateCarImageParams,
    input: TCreateCarImageRequest,
    query: TCreateCarImageQuery
  ) {
    return await Api.post(this.baseURL + '/' + params.carId + '/images' + '?isPrimary=' + query.isPrimary, input, {
      inputSchema: CreateCarImageRequestDto,
      outputSchema: CreateCarImageResponseDto,
    });
  }

  /** PUT /api/cars/images/{imageId}/primary */
  static async setImageAsPrimary(params: TSetImageAsPrimaryParams) {
    return await Api.put(this.baseURL + '/images/' + params.imageId + '/primary', undefined, {
      inputSchema: z.undefined(),
      outputSchema: SetImageAsPrimaryResponseDto,
    });
  }

  /** DELETE /api/cars/images/{imageId} */
  static async deleteCarImage(params: TDeleteImageParams) {
    return await Api.delete(this.baseURL + '/images/' + params.imageId, {
      outputSchema: z.void(),
      successMessage: 'Car image has been deleted',
    });
  }

  /** DELETE /api/cars/images/{imageId} */
  static async deleteAllCarImages(params: TDeleteAllCarImagesParams) {
    return await Api.delete(this.baseURL + '/cars/' + params.carId + '/images', {
      outputSchema: z.void(),
      successMessage: 'All car images have been deleted',
    });
  }
}
