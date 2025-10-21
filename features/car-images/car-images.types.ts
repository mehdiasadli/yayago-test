import { z } from 'zod';
import {
  CreateCarImageRequestDto,
  CreateCarImageParamsDto,
  CreateCarImageQueryDto,
  CreateCarImageResponseDto,
  SetImageAsPrimaryParamsDto,
  SetImageAsPrimaryResponseDto,
  DeleteCarImageParamsDto,
  DeleteAllCarImagesParamsDto,
  GetPrimaryImageParamsDto,
  GetPrimaryImageResponseDto,
  GetCarImagesParamsDto,
  GetCarImagesResponseDto,
} from './car-images.dto';

export type TCreateCarImageRequest = z.infer<typeof CreateCarImageRequestDto>;
export type TCreateCarImageParams = z.infer<typeof CreateCarImageParamsDto>;
export type TCreateCarImageQuery = z.infer<typeof CreateCarImageQueryDto>;
export type TCreateCarImageResponse = z.infer<typeof CreateCarImageResponseDto>;
export type TSetImageAsPrimaryParams = z.infer<typeof SetImageAsPrimaryParamsDto>;
export type TSetImageAsPrimaryResponse = z.infer<typeof SetImageAsPrimaryResponseDto>;
export type TDeleteCarImageParams = z.infer<typeof DeleteCarImageParamsDto>;
export type TDeleteAllCarImagesParams = z.infer<typeof DeleteAllCarImagesParamsDto>;
export type TGetPrimaryImageParams = z.infer<typeof GetPrimaryImageParamsDto>;
export type TGetPrimaryImageResponse = z.infer<typeof GetPrimaryImageResponseDto>;
export type TGetCarImagesParams = z.infer<typeof GetCarImagesParamsDto>;
export type TGetCarImagesResponse = z.infer<typeof GetCarImagesResponseDto>;
