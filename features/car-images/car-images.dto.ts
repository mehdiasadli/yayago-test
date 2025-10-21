import z from 'zod';

export const CreateCarImageRequestDto = z.object({
  file: z.instanceof(File),
});

export const CreateCarImageParamsDto = z.object({
  carId: z.number().int().positive(),
});

export const CreateCarImageQueryDto = z.object({
  isPrimary: z.coerce.boolean().optional().default(false),
});

export const CreateCarImageResponseDto = z.object({
  id: z.number().int().positive(),
  carId: z.number().int().positive(),
  imageUrl: z.string().url(),
  imageSize: z.number(),
  mimeType: z.string(),
  isPrimary: z.boolean(),
  uploadDate: z.coerce.date(),
  createdAt: z.coerce.date(),
});

export const SetImageAsPrimaryParamsDto = z.object({
  imageId: z.number().int().positive(),
});

export const SetImageAsPrimaryResponseDto = CreateCarImageResponseDto;

export const DeleteCarImageParamsDto = z.object({
  imageId: z.number().int().positive(),
});

export const DeleteAllCarImagesParamsDto = z.object({
  carId: z.number().int().positive(),
});

export const GetPrimaryImageParamsDto = z.object({
  carId: z.number().int().positive(),
});

export const GetPrimaryImageResponseDto = CreateCarImageResponseDto;

export const GetCarImagesParamsDto = z.object({
  carId: z.number().int().positive(),
});

export const GetCarImagesResponseDto = CreateCarImageResponseDto.array();
