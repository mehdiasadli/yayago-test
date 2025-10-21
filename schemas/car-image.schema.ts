import { z } from 'zod';

// ============================================================================
// CAR IMAGE OUTPUT SCHEMA (ImageResponseDto)
// ============================================================================

export const CarImageOutputSchema = z.object({
  id: z
    .number({ required_error: 'Image ID is required', invalid_type_error: 'Image ID must be a number' })
    .int('Image ID must be an integer')
    .positive('Image ID must be positive'),
  carId: z
    .number({ required_error: 'Car ID is required', invalid_type_error: 'Car ID must be a number' })
    .int('Car ID must be an integer')
    .positive('Car ID must be positive'),
  imageUrl: z.string({ required_error: 'Image URL is required' }).url('Image URL must be a valid URL'),
  imageName: z
    .string({ required_error: 'Image name is required' })
    .min(1, 'Image name is required')
    .max(255, 'Image name must be less than 255 characters'),
  imageSize: z
    .number({ required_error: 'Image size is required', invalid_type_error: 'Image size must be a number' })
    .int('Image size must be an integer')
    .positive('Image size must be positive')
    .max(10485760, 'Image size cannot exceed 10MB'), // 10MB limit
  mimeType: z
    .string({ required_error: 'MIME type is required' })
    .min(1, 'MIME type is required')
    .regex(/^image\/(jpeg|jpg|png|gif|webp)$/, 'Invalid MIME type. Must be a valid image format'),
  isPrimary: z.boolean({
    required_error: 'Primary status is required',
    invalid_type_error: 'Primary status must be a boolean',
  }),
  uploadDate: z.string({ required_error: 'Upload date is required' }).datetime('Invalid datetime format'),
  createdAt: z.string({ required_error: 'Created date is required' }).datetime('Invalid datetime format'),
});

export type TCarImageOutput = z.infer<typeof CarImageOutputSchema>;

// ============================================================================
// CAR IMAGE UPLOAD INPUT SCHEMA
// ============================================================================

export const CarImageUploadInputSchema = z.object({
  file: z
    .instanceof(File, { message: 'File is required' })
    .refine((file) => file.size <= 10485760, 'File size must not exceed 10MB')
    .refine(
      (file) => ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'].includes(file.type),
      'File must be a valid image format (JPEG, PNG, GIF, or WebP)'
    ),
  isPrimary: z.boolean({ invalid_type_error: 'Primary status must be a boolean' }).optional().default(false),
});

// For FormData uploads
export const CarImageUploadQuerySchema = z.object({
  isPrimary: z.boolean({ invalid_type_error: 'Primary status must be a boolean' }).optional().default(false),
});

export type TCarImageUploadInput = z.infer<typeof CarImageUploadInputSchema>;
export type TCarImageUploadQuery = z.infer<typeof CarImageUploadQuerySchema>;

// ============================================================================
// SET PRIMARY IMAGE INPUT SCHEMA
// ============================================================================

// No body required, just imageId in path parameter
export const SetPrimaryImageParamsSchema = z.object({
  imageId: z
    .number({ required_error: 'Image ID is required', invalid_type_error: 'Image ID must be a number' })
    .int('Image ID must be an integer')
    .positive('Image ID must be positive'),
});

export type TSetPrimaryImageParams = z.infer<typeof SetPrimaryImageParamsSchema>;

// ============================================================================
// DELETE IMAGE PARAMS SCHEMA
// ============================================================================

export const DeleteImageParamsSchema = z.object({
  imageId: z
    .number({ required_error: 'Image ID is required', invalid_type_error: 'Image ID must be a number' })
    .int('Image ID must be an integer')
    .positive('Image ID must be positive'),
});

export type TDeleteImageParams = z.infer<typeof DeleteImageParamsSchema>;

// ============================================================================
// GET CAR IMAGES PARAMS SCHEMA
// ============================================================================

export const GetCarImagesParamsSchema = z.object({
  carId: z
    .number({ required_error: 'Car ID is required', invalid_type_error: 'Car ID must be a number' })
    .int('Car ID must be an integer')
    .positive('Car ID must be positive'),
});

export type TGetCarImagesParams = z.infer<typeof GetCarImagesParamsSchema>;

// ============================================================================
// LEGACY EXPORTS (for backward compatibility)
// ============================================================================

export const CarImageSchema = CarImageOutputSchema;
export type CarImageSchemaType = TCarImageOutput;
