import z from 'zod';
import { Api } from '../_common/common.api';
import { CheckFavoriteResponseDto, CreateFavoriteResponseDto, GetUserFavoritesResponseDto } from './favorites.dto';
import { TCheckFavoriteParams, TCreateFavoriteParams, TDeleteFavoriteParams } from './favorites.types';

export class FavoritesApi {
  static readonly baseURL = '/api/favorites';

  /** POST /api/favorites */
  static async createFavorite(params: TCreateFavoriteParams) {
    return await Api.post(this.baseURL + '/' + params.carId, undefined, {
      inputSchema: z.undefined(),
      outputSchema: CreateFavoriteResponseDto,
      successMessage: 'Favorite created successfully',
    });
  }

  /** DELETE /api/favorites/{carId} */
  static async deleteFavorite(params: TDeleteFavoriteParams) {
    return await Api.delete(this.baseURL + '/' + params.carId, {
      outputSchema: z.void(),
      successMessage: 'Favorite deleted successfully',
    });
  }

  /** GET /api/favorites */
  static async getUserFavorites() {
    return await Api.get(this.baseURL, {
      outputSchema: GetUserFavoritesResponseDto,
      successMessage: 'User favorites fetched successfully',
    });
  }

  /** GET /api/favorites/{carId}/check */
  static async checkFavorite(params: TCheckFavoriteParams) {
    return await Api.get(this.baseURL + '/' + params.carId + '/check', {
      outputSchema: CheckFavoriteResponseDto,
      successMessage: 'Favorite checked successfully',
    });
  }
}
