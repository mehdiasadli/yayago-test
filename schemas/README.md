# YayaGo API Schemas

This directory contains comprehensive Zod schemas for the YayaGo Rent-A-Car Backend API. All schemas are based on the official Swagger specification and provide type-safe validation for API requests and responses.

## 📁 Structure

```
schemas/
├── auth.schema.ts           # Authentication & registration
├── user.schema.ts           # User management & admin users
├── car.schema.ts            # Car management & filtering
├── car-image.schema.ts      # Car image uploads & management
├── booking.schema.ts        # Booking creation & management
├── notification.schema.ts   # Notification system
├── admin-dashboard.schema.ts # Dashboard statistics & analytics
└── index.ts                 # Central export file
```

## 🚀 Usage

### Import from central location:

```typescript
import { LoginInputSchema, TLoginInput } from '@/schemas';
// or
import { LoginInputSchema, TLoginInput } from '@/schemas/auth.schema';
```

### Validation example:

```typescript
import { LoginInputSchema } from '@/schemas';

const result = LoginInputSchema.safeParse(data);

if (result.success) {
  // data is valid
  console.log(result.data);
} else {
  // validation errors
  console.log(result.error.errors);
}
```

### Type inference:

```typescript
import type { TLoginInput, TLoginOutput } from '@/schemas';

function login(credentials: TLoginInput): Promise<TLoginOutput> {
  // implementation
}
```

## 📚 Schema Naming Convention

All schemas follow a consistent naming pattern:

- **Input Schemas**: `*InputSchema` - Used for API request bodies
- **Output Schemas**: `*OutputSchema` - Used for API responses
- **Query Schemas**: `*QuerySchema` - Used for query parameters
- **Params Schemas**: `*ParamsSchema` - Used for path parameters
- **Types**: Prefixed with `T` (e.g., `TLoginInput`, `TCarDetailsOutput`)

## 📦 Available Schemas

### Auth Schemas (`auth.schema.ts`)

- `LoginInputSchema` / `TLoginInput` - Login credentials
- `LoginOutputSchema` / `TLoginOutput` - Login response with tokens
- `RegisterInputSchema` / `TRegisterInput` - User registration
- `RegisterOutputSchema` / `TRegisterOutput` - Registration response
- `RefreshTokenInputSchema` / `TRefreshTokenInput` - Token refresh request
- `RefreshTokenOutputSchema` / `TRefreshTokenOutput` - Token refresh response

### User Schemas (`user.schema.ts`)

- `UserSchema` / `TUser` - Basic user information
- `UserWithRelationsSchema` / `TUserWithRelations` - User with cars and bookings
- `AdminUserSchema` / `TAdminUser` - Admin user with statistics
- `AdminUserCreateInputSchema` / `TAdminUserCreateInput` - Create admin user
- `UserStatusUpdateInputSchema` / `TUserStatusUpdateInput` - Update user status
- `GetUsersQuerySchema` / `TGetUsersQuery` - Query parameters for filtering users

### Car Schemas (`car.schema.ts`)

- `CarDetailsInputSchema` / `TCarDetailsInput` - Create/update car
- `CarDetailsOutputSchema` / `TCarDetailsOutput` - Car details with images
- `AdminCarSchema` / `TAdminCar` - Admin car view with analytics
- `CarStatusUpdateInputSchema` / `TCarStatusUpdateInput` - Update car availability
- `CarPriceUpdateInputSchema` / `TCarPriceUpdateInput` - Update car price
- `GetCarsQuerySchema` / `TGetCarsQuery` - Query parameters for filtering cars

### Car Image Schemas (`car-image.schema.ts`)

- `CarImageOutputSchema` / `TCarImageOutput` - Image response
- `CarImageUploadInputSchema` / `TCarImageUploadInput` - File upload validation
- `CarImageUploadQuerySchema` / `TCarImageUploadQuery` - Upload query params
- `SetPrimaryImageParamsSchema` / `TSetPrimaryImageParams` - Set primary image
- `DeleteImageParamsSchema` / `TDeleteImageParams` - Delete image params
- `GetCarImagesParamsSchema` / `TGetCarImagesParams` - Get images params

### Booking Schemas (`booking.schema.ts`)

- `LocalTimeSchema` / `TLocalTime` - Time representation
- `BookingStatusEnum` / `TBookingStatus` - Booking status enum
- `CreateBookingInputSchema` / `TCreateBookingInput` - Create booking
- `BookingOutputSchema` / `TBookingOutput` - Booking details
- `UpdateBookingStatusQuerySchema` / `TUpdateBookingStatusQuery` - Update status
- `GetBookingByIdParamsSchema` / `TGetBookingByIdParams` - Get by ID
- `GetBookingsByUserParamsSchema` / `TGetBookingsByUserParams` - Get by user

### Notification Schemas (`notification.schema.ts`)

- `NotificationTypeEnum` / `TNotificationType` - Notification types
- `NotificationStatusEnum` / `TNotificationStatus` - Notification statuses
- `CreateNotificationInputSchema` / `TCreateNotificationInput` - Create notification
- `NotificationOutputSchema` / `TNotificationOutput` - Notification response
- `GetNotificationByIdParamsSchema` / `TGetNotificationByIdParams` - Get by ID
- `GetNotificationsByUserParamsSchema` / `TGetNotificationsByUserParams` - Get by user

### Admin Dashboard Schemas (`admin-dashboard.schema.ts`)

- `DashboardStatsSchema` / `TDashboardStats` - Complete dashboard statistics
- `RevenueStatsSchema` / `TRevenueStats` - Revenue statistics by date
- `GetRevenueStatsQuerySchema` / `TGetRevenueStatsQuery` - Date range query
- `OccupancyRateOutputSchema` / `TOccupancyRateOutput` - Occupancy rate
- `RevenueOutputSchema` / `TRevenueOutput` - Revenue amount
- `BookingsCountOutputSchema` / `TBookingsCountOutput` - Bookings count

## ✨ Features

- ✅ **Comprehensive validation** - All API fields validated with proper error messages
- ✅ **Type safety** - Full TypeScript type inference
- ✅ **Error messages** - User-friendly validation error messages
- ✅ **Enums** - Proper enum validation for status fields
- ✅ **Date validation** - Date format and range validation
- ✅ **File validation** - Image upload validation with size and type checks
- ✅ **Custom validation** - Complex validation rules (e.g., date ranges)
- ✅ **Backward compatibility** - Legacy exports maintained

## 🔧 Validation Rules

All schemas include appropriate validation rules:

- **Strings**: min/max length, format validation, regex patterns
- **Numbers**: min/max values, integer validation, positive/negative checks
- **Emails**: RFC 5322 compliant email validation
- **Dates**: ISO 8601 format validation
- **Files**: Size limits (10MB), MIME type validation
- **Enums**: Strict enum value validation

## 📝 Examples

### Login Example

```typescript
import { LoginInputSchema, type TLoginInput } from '@/schemas';

const loginData: TLoginInput = {
  email: 'user@example.com',
  password: 'password123',
};

const result = LoginInputSchema.safeParse(loginData);
if (result.success) {
  // Call API
}
```

### Car Creation Example

```typescript
import { CarDetailsInputSchema, type TCarDetailsInput } from '@/schemas';

const carData: TCarDetailsInput = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2024,
  pricePerDay: 50,
  currency: 'AZN',
  available: true,
  fuelType: 'Petrol',
  doorCount: 4,
  carType: 'Sedan',
  engineVolume: '2.5',
  color: 'White',
};

const result = CarDetailsInputSchema.safeParse(carData);
```

### Image Upload Example

```typescript
import { CarImageUploadInputSchema } from '@/schemas';

const uploadData = {
  file: selectedFile, // File object
  isPrimary: true,
};

const result = CarImageUploadInputSchema.safeParse(uploadData);
```

## 🔄 Migration from Old Schemas

Old schema files in `/data` have been updated to re-export from the new location for backward compatibility. However, it's recommended to update imports:

### Before:

```typescript
import { LoginSchema } from '@/data/auth/auth.schema';
import { CarDetailsSchema } from '@/data/cars/car.schema';
```

### After:

```typescript
import { LoginInputSchema } from '@/schemas';
import { CarDetailsInputSchema } from '@/schemas';
```

## 📖 Documentation

All schemas are documented based on the official [YayaGo Backend API Swagger specification](../SWAGGER.json).

For detailed API documentation, refer to the Swagger file.

## 🤝 Contributing

When adding new schemas:

1. Follow the existing naming convention
2. Add comprehensive validation rules
3. Include user-friendly error messages
4. Export types with `T` prefix
5. Update the index file
6. Update this README

## 📄 License

Part of the YayaGo Rent-A-Car project.
