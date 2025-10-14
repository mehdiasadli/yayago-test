import { z } from 'zod';

/**
 * Zod schemas for Car API based on backend Swagger specification
 * Backend: YayaGo Rent-A-Car API v2.0
 */

// Schema for creating/updating a car (request body)
export const CarDetailsSchema = z.object({
  brand: z.string().min(1, 'Brand is required'),
  model: z.string().min(1, 'Model is required'),
  year: z
    .number()
    .int()
    .min(1900, 'Year must be 1900 or later')
    .max(new Date().getFullYear() + 1, 'Year cannot be in the future'),
  pricePerDay: z.number().min(0, 'Price must be positive'),
  currency: z.string().min(1, 'Currency is required').default('AED'),
  available: z.boolean().default(true),
});

// Schema for car response (includes ID)
export const CarDetailsResponseSchema = CarDetailsSchema.extend({
  id: z.number().int().positive(),
});

// Extended car schema for frontend use (includes images and other frontend fields)
export const CarSchema = CarDetailsResponseSchema.extend({
  images: z.array(z.string()).default([]),
  // Frontend extensions (not in backend yet)
  transmission: z.enum(['Automatic', 'Manual']).optional(),
  fuelType: z.enum(['Petrol', 'Diesel', 'Electric', 'Hybrid']).optional(),
  seats: z.number().int().min(2).max(9).optional(),
  features: z.array(z.string()).optional(),
  description: z.string().optional(),
});

// Type exports
export type CarDetailsDto = z.infer<typeof CarDetailsSchema>;
export type CarDetailsResponseDto = z.infer<typeof CarDetailsResponseSchema>;
export type Car = z.infer<typeof CarSchema>;

// Validation helper
export const validateCarDetails = (data: unknown) => {
  return CarDetailsSchema.safeParse(data);
};

export const validateCarResponse = (data: unknown) => {
  return CarDetailsResponseSchema.safeParse(data);
};
