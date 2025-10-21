/**
 * @deprecated This file is deprecated. Please import from '@/schemas/car-image.schema' instead.
 * This file is kept for backward compatibility only.
 */

export {
  CarImageOutputSchema as ImageResponseSchema,
  CarImageUploadInputSchema as ImageUploadSchema,
  type TCarImageOutput as ImageResponseDto,
  type TCarImageUploadInput as ImageUploadData,
} from '@/schemas/car-image.schema';

// Validation helpers (maintained for backward compatibility)
import { CarImageOutputSchema, CarImageUploadInputSchema } from '@/schemas/car-image.schema';

export const validateImageResponse = (data: unknown) => {
  return CarImageOutputSchema.safeParse(data);
};

export const validateImageUpload = (data: unknown) => {
  return CarImageUploadInputSchema.safeParse(data);
};

// Helper function to validate file before upload (maintained for backward compatibility)
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
