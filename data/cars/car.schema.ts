import { z } from 'zod';

export const CarSchema = z.object({
  id: z.number().int().min(1),
  brand: z.string(),
  model: z.string(),
  year: z.number().int().min(1850),
  pricePerDay: z.number().min(0),
  currency: z.string(),
  available: z.boolean(),
  images: z.array(z.string()),
});

export type Car = z.infer<typeof CarSchema>;
