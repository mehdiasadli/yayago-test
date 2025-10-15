import { z } from 'zod';

/**
 * Zod schemas for Car Images API based on backend Swagger specification
 * Backend: YayaGo Rent-A-Car API v2.0
 */

// Schema for image response from API
export const ImageResponseSchema = z.object({
  id: z.number().int().positive(),
  carId: z.number().int().positive(),
  imageUrl: z.string().url('Must be a valid URL'),
  imageName: z.string().min(1, 'Image name is required'),
  imageSize: z.number().int().positive('Image size must be positive'),
  mimeType: z.string().min(1, 'MIME type is required'),
  isPrimary: z.boolean(),
  uploadDate: z.string().datetime(),
  createdAt: z.string().datetime(),
});

// Schema for uploading an image (client-side validation)
export const ImageUploadSchema = z.object({
  file: z
    .instanceof(File, { message: 'File is required' })
    .refine(
      (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
        return validTypes.includes(file.type);
      },
      {
        message: 'File must be a valid image (JPEG, PNG, WebP, or GIF)',
      }
    )
    .refine(
      (file) => {
        const maxSize = 10 * 1024 * 1024; // 10MB
        return file.size <= maxSize;
      },
      {
        message: 'File size must be less than 10MB',
      }
    ),
  isPrimary: z.boolean().optional().default(false),
});

// Type exports
export type ImageResponseDto = z.infer<typeof ImageResponseSchema>;
export type ImageUploadData = z.infer<typeof ImageUploadSchema>;

// Validation helpers
export const validateImageResponse = (data: unknown) => {
  return ImageResponseSchema.safeParse(data);
};

export const validateImageUpload = (data: unknown) => {
  return ImageUploadSchema.safeParse(data);
};

// Helper function to validate file before upload
export function isValidImageFile(file: File) {
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
  const maxSize = 10 * 1024 * 1024; // 10MB

  if (!validTypes.includes(file.type)) {
    return {
      success: false,
      error: {
        issues: [{ message: 'File must be a valid image (JPEG, PNG, WebP, or GIF)' }],
      },
    };
  }

  if (file.size > maxSize) {
    return {
      success: false,
      error: {
        issues: [{ message: 'File size must be less than 10MB' }],
      },
    };
  }

  if (file.size === 0) {
    return {
      success: false,
      error: {
        issues: [{ message: 'File is empty' }],
      },
    };
  }

  return { success: true };
}
