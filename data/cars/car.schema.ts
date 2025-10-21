/**
 * @deprecated This file is deprecated. Please import from '@/schemas/car.schema' instead.
 * This file is kept for backward compatibility only.
 */

export {
  CarDetailsInputSchema as CarDetailsSchema,
  CarDetailsOutputSchema as CarDetailsResponseSchema,
  CarSchema,
  type TCarDetailsInput as CarDetailsDto,
  type TCarDetailsOutput as CarDetailsResponseDto,
  type CarSchemaType as Car,
} from '@/schemas/car.schema';

// Validation helpers (maintained for backward compatibility)
import { CarDetailsInputSchema, CarDetailsOutputSchema } from '@/schemas/car.schema';

export const validateCarDetails = (data: unknown) => {
  return CarDetailsInputSchema.safeParse(data);
};

export const validateCarResponse = (data: unknown) => {
  return CarDetailsOutputSchema.safeParse(data);
};
