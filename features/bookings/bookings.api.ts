import z from 'zod';
import { Api } from '../_common/common.api';
import {
  CreateBookingRequestDto,
  CreateBookingResponseDto,
  GetBookingByIdResponseDto,
  GetBookingsByUserResponseDto,
  UpdateBookingStatusResponseDto,
} from './bookings.dto';
import {
  TCreateBookingRequest,
  TGetBookingByIdParams,
  TGetBookingsByUserParams,
  TUpdateBookingStatusParams,
  TUpdateBookingStatusQuery,
} from './bookings.types';
import qs from 'qs';

export class BookingsApi {
  static readonly baseURL = '/api/bookings';

  /** POST /api/bookings */
  static async createBooking(input: TCreateBookingRequest) {
    return await Api.post(this.baseURL + '/create', input, {
      inputSchema: CreateBookingRequestDto,
      outputSchema: CreateBookingResponseDto,
      successMessage: 'Booking created successfully',
    });
  }

  /** GET /api/bookings/{id} */
  static async getBookingById(params: TGetBookingByIdParams) {
    return await Api.get(this.baseURL + '/' + params.bookingId, {
      outputSchema: GetBookingByIdResponseDto,
      successMessage: 'Booking fetched successfully',
    });
  }

  /** GET /api/bookings/user/{userId} */
  static async getBookingsByUser(params: TGetBookingsByUserParams) {
    return await Api.get(this.baseURL + '/user/' + params.userId, {
      outputSchema: GetBookingsByUserResponseDto,
      successMessage: 'Bookings fetched successfully',
    });
  }

  /** PATCH /api/bookings/{id}/status */
  static async updateBookingStatus(params: TUpdateBookingStatusParams, query: TUpdateBookingStatusQuery) {
    const queryString = qs.stringify(query);
    const queryParams = queryString ? '?' + queryString : '';

    return await Api.patch(this.baseURL + '/' + params.bookingId + '/status' + queryParams, undefined, {
      inputSchema: z.undefined(),
      outputSchema: UpdateBookingStatusResponseDto,
      successMessage: 'Booking status updated successfully',
    });
  }
}
