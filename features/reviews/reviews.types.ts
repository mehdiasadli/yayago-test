import z from 'zod';
import {
  CreateReviewRequestDto,
  CreateReviewResponseDto,
  GetCarReviewsParamsDto,
  GetCarReviewsResponseDto,
  GetCarReviewCountParamsDto,
  GetCarAverageRatingParamsDto,
  GetCarAverageRatingResponseDto,
  GetCarReviewCountResponseDto,
  DeleteReviewParamsDto,
  UpdateReviewParamsDto,
  UpdateReviewRequestDto,
  UpdateReviewResponseDto,
} from './reviews.dto';

export type TCreateReviewRequest = z.infer<typeof CreateReviewRequestDto>;
export type TCreateReviewResponse = z.infer<typeof CreateReviewResponseDto>;
export type TGetCarReviewsParams = z.infer<typeof GetCarReviewsParamsDto>;
export type TGetCarReviewsResponse = z.infer<typeof GetCarReviewsResponseDto>;
export type TGetCarReviewCountParams = z.infer<typeof GetCarReviewCountParamsDto>;
export type TGetCarReviewCountResponse = z.infer<typeof GetCarReviewCountResponseDto>;
export type TGetCarAverageRatingParams = z.infer<typeof GetCarAverageRatingParamsDto>;
export type TGetCarAverageRatingResponse = z.infer<typeof GetCarAverageRatingResponseDto>;
export type TDeleteReviewParams = z.infer<typeof DeleteReviewParamsDto>;
export type TUpdateReviewParams = z.infer<typeof UpdateReviewParamsDto>;
export type TUpdateReviewRequest = z.infer<typeof UpdateReviewRequestDto>;
export type TUpdateReviewResponse = z.infer<typeof UpdateReviewResponseDto>;
