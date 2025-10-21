import z from 'zod';
import { Api } from '../_common/common.api';
import { REVIEWS_BASE_URL } from './reviews.constants';
import {
  CreateReviewRequestDto,
  CreateReviewResponseDto,
  GetCarAverageRatingResponseDto,
  GetCarReviewCountResponseDto,
  GetCarReviewsResponseDto,
  GetMyReviewsResponseDto,
  UpdateReviewRequestDto,
  UpdateReviewResponseDto,
} from './reviews.dto';
import {
  TCreateReviewRequest,
  TDeleteReviewParams,
  TGetCarAverageRatingParams,
  TGetCarReviewCountParams,
  TGetCarReviewsParams,
  TUpdateReviewParams,
  TUpdateReviewRequest,
} from './reviews.types';

export class ReviewsApi {
  static readonly baseURL = REVIEWS_BASE_URL;

  /** POST /api/reviews */
  static async createReview(input: TCreateReviewRequest) {
    return await Api.post(this.baseURL, input, {
      inputSchema: CreateReviewRequestDto,
      outputSchema: CreateReviewResponseDto,
      successMessage: 'Review created successfully',
    });
  }

  /** DELETE /api/reviews/{id} */
  static async deleteReview(params: TDeleteReviewParams) {
    return await Api.delete(this.baseURL + '/' + params.reviewId, {
      outputSchema: z.void(),
      successMessage: 'Review deleted successfully',
    });
  }

  /** PUT /api/reviews/{id} */
  static async updateReview(params: TUpdateReviewParams, input: TUpdateReviewRequest) {
    return await Api.put(this.baseURL + '/' + params.reviewId, input, {
      inputSchema: UpdateReviewRequestDto,
      outputSchema: UpdateReviewResponseDto,
      successMessage: 'Review updated successfully',
    });
  }

  /** GET /api/reviews/my-reviews */
  static async getMyReviews() {
    return await Api.get(this.baseURL + '/my-reviews', {
      outputSchema: GetMyReviewsResponseDto,
      successMessage: 'My reviews fetched successfully',
    });
  }

  /** GET /api/reviews/cars/{carId} */
  static async getCarReviews(params: TGetCarReviewsParams) {
    return await Api.get(this.baseURL + '/cars/' + params.carId, {
      outputSchema: GetCarReviewsResponseDto,
      successMessage: 'Reviews fetched successfully',
    });
  }

  /** GET /api/reviews/cars/{carId}/count */
  static async getCarReviewCount(params: TGetCarReviewCountParams) {
    return await Api.get(this.baseURL + '/cars/' + params.carId + '/count', {
      outputSchema: GetCarReviewCountResponseDto,
      successMessage: 'Review count fetched successfully',
    });
  }

  /** GET /api/reviews/cars/{carId}/average-rating */
  static async getCarAverageRating(params: TGetCarAverageRatingParams) {
    return await Api.get(this.baseURL + '/cars/' + params.carId + '/average-rating', {
      outputSchema: GetCarAverageRatingResponseDto,
      successMessage: 'Average rating fetched successfully',
    });
  }
}
