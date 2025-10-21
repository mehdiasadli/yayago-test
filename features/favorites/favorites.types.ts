import z from 'zod';
import {
  CheckFavoriteParamsDto,
  CheckFavoriteResponseDto,
  CreateFavoriteParamsDto,
  CreateFavoriteResponseDto,
  DeleteFavoriteParamsDto,
  GetUserFavoritesResponseDto,
} from './favorites.dto';

export type TCreateFavoriteParams = z.infer<typeof CreateFavoriteParamsDto>;
export type TCreateFavoriteResponse = z.infer<typeof CreateFavoriteResponseDto>;
export type TDeleteFavoriteParams = z.infer<typeof DeleteFavoriteParamsDto>;
export type TGetUserFavoritesResponse = z.infer<typeof GetUserFavoritesResponseDto>;
export type TCheckFavoriteParams = z.infer<typeof CheckFavoriteParamsDto>;
export type TCheckFavoriteResponse = z.infer<typeof CheckFavoriteResponseDto>;
