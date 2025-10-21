import z from 'zod';
import { Api } from '../_common/common.api';
import { CARS_BASE_URL } from './cars.constants';
import {
  CreateCarRequestDto,
  CreateCarResponseDto,
  GetCarByIdResponseDto,
  GetCarsResponseDto,
  UpdateCarRequestDto,
  UpdateCarResponseDto,
} from './cars.dto';
import {
  TCreateCarRequest,
  TDeleteCarParams,
  TGetCarByIdParams,
  TUpdateCarParams,
  TUpdateCarRequest,
} from './cars.types';

export class CarsApi {
  static readonly baseURL = CARS_BASE_URL;

  /** GET /api/cars */
  static async getCars() {
    return await Api.get(this.baseURL, {
      outputSchema: GetCarsResponseDto,
      successMessage: 'Cars fetched successfully',
    });
  }

  /** GET /api/cars/{id} */
  static async getCarById(params: TGetCarByIdParams) {
    return await Api.get(this.baseURL + '/' + params.id, {
      outputSchema: GetCarByIdResponseDto,
      successMessage: 'Car fetched successfully',
    });
  }

  /** POST /api/cars */
  static async createCar(input: TCreateCarRequest) {
    return await Api.post(this.baseURL, input, {
      inputSchema: CreateCarRequestDto,
      outputSchema: CreateCarResponseDto,
      successMessage: 'Car created successfully',
    });
  }

  /** PUT /api/cars/{id} */
  static async updateCar(params: TUpdateCarParams, input: TUpdateCarRequest) {
    return await Api.put(this.baseURL + '/' + params.id, input, {
      inputSchema: UpdateCarRequestDto,
      outputSchema: UpdateCarResponseDto,
      successMessage: 'Car updated successfully',
    });
  }

  /** DELETE /api/cars/{id} */
  static async deleteCar(params: TDeleteCarParams) {
    return await Api.delete(this.baseURL + '/' + params.id, {
      outputSchema: z.void(),
      successMessage: 'Car deleted successfully',
    });
  }
}
