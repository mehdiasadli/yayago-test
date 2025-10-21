import z from 'zod';
import { CreateCarResponseDto } from '../cars/cars.dto';

export const CreateFavoriteParamsDto = z.object({
  carId: z.number().int().positive(),
});

export const CreateFavoriteResponseDto = CreateCarResponseDto.extend({
  favoriteCreatedAt: z.coerce.date(),
});

export const DeleteFavoriteParamsDto = z.object({
  carId: z.number().int().positive(),
});

export const GetUserFavoritesResponseDto = CreateFavoriteResponseDto.extend({
  favoriteCreatedAt: z.coerce.date(),
}).array();

export const CheckFavoriteParamsDto = z.object({
  carId: z.number().int().positive(),
});

export const CheckFavoriteResponseDto = z.boolean();
