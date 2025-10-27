import z from 'zod';

export const CarTypeEnumSchema = z.enum(
  ['SEDAN', 'SUV', 'HATCHBACK', 'WAGON', 'VAN', 'PICKUP', 'MOTORCYCLE', 'OTHER'],
  {
    invalid_type_error: 'Invalid car type',
    message: 'Invalid car type',
    required_error: 'Car type is required',
  }
);

export const CarColorEnumSchema = z.enum(
  ['RED', 'BLUE', 'GREEN', 'YELLOW', 'BLACK', 'WHITE', 'SILVER', 'GRAY', 'BROWN', 'PINK', 'PURPLE', 'ORANGE', 'OTHER'],
  {
    invalid_type_error: 'Invalid car color',
    message: 'Invalid car color',
    required_error: 'Car color is required',
  }
);

export const CarTransmissionEnumSchema = z.enum(['MANUAL', 'AUTOMATIC', 'OTHER'], {
  invalid_type_error: 'Invalid car transmission',
  message: 'Invalid car transmission',
  required_error: 'Car transmission is required',
});

export const CarFuelTypeEnumSchema = z.enum(['PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID', 'PLUG_IN_HYBRID', 'OTHER'], {
  invalid_type_error: 'Invalid car fuel type',
  message: 'Invalid car fuel type',
  required_error: 'Car fuel type is required',
});

export const CarFuelPolicySchema = z.enum(
  ['SAME_TO_SAME', 'PRE_PURCHASE', 'PAY_FOR_USAGE', 'QUARTER_TANK', 'SAME_LEVEL', 'FREE_TANK'],
  {
    invalid_type_error: 'Invalid car fuel policy',
    message: 'Invalid car fuel policy',
    required_error: 'Car fuel policy is required',
  }
);

export const CarDriveTypeSchema = z.enum(['FRONT', 'REAR', 'ALL', 'FOUR_FOUR'], {
  invalid_type_error: 'Invalid car drive type',
  message: 'Invalid car drive type',
  required_error: 'Car drive type is required',
});
