import z from 'zod';

export const CreateReviewRequestDto = z.object({
  carId: z.number().int().positive(),
  rating: z.number().int().min(1).max(10),
  comment: z.string().min(1),
});

export const CreateReviewResponseDto = z.object({
  id: z.number().int().positive(),
  carId: z.number().int().positive(),
  userId: z.number().int().positive(),
  userFullName: z.string().min(1),
  rating: z.number().int().min(1).max(10),
  comment: z.string().min(1),
  createdAt: z.coerce.date(),
});

export const GetMyReviewsResponseDto = CreateReviewResponseDto.array();

export const GetCarReviewsParamsDto = z.object({
  carId: z.number().int().positive(),
});

export const GetCarReviewsResponseDto = CreateReviewResponseDto.array();

export const GetCarReviewCountParamsDto = z.object({
  carId: z.number().int().positive(),
});

export const GetCarReviewCountResponseDto = z.number().int().nonnegative();

export const GetCarAverageRatingParamsDto = z.object({
  carId: z.number().int().positive(),
});

export const GetCarAverageRatingResponseDto = z.number().nonnegative();

export const DeleteReviewParamsDto = z.object({
  reviewId: z.number().int().positive(),
});

export const UpdateReviewParamsDto = z.object({
  reviewId: z.number().int().positive(),
});

export const UpdateReviewRequestDto = CreateReviewRequestDto.partial();

export const UpdateReviewResponseDto = CreateReviewResponseDto;
