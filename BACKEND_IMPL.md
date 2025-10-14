# Backend Implementation Documentation

**YayaGo Web Application - Backend Integration Guide**

Version: 2.0  
Last Updated: October 13, 2025

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Environment Setup](#environment-setup)
4. [Authentication Flow](#authentication-flow)
5. [API Client](#api-client)
6. [Services](#services)
7. [Hybrid Data Strategy](#hybrid-data-strategy)
8. [Error Handling](#error-handling)
9. [Token Management](#token-management)
10. [API Endpoints](#api-endpoints)
11. [Migration Path](#migration-path)
12. [Data Models & Schemas](#data-models--schemas)
13. [Backend Features & Improvements](#backend-features--improvements)
14. [Troubleshooting](#troubleshooting)
15. [Best Practices](#best-practices)
16. [Security Considerations](#security-considerations)
17. [Changelog](#changelog)

---

## Overview

This document describes the integration between the YayaGo Next.js frontend and the Java backend API. The integration follows a **hybrid approach** where:

- **Backend provides** core data (cars, users, bookings, authentication)
- **Frontend extends** with additional fields not yet in backend (transmission, fuel type, features, etc.)
- **Gradual migration** path as backend features are completed

### Current Status

✅ **Implemented:**

- Authentication (login, register, logout, token refresh with userId)
- Token management (JWT with automatic refresh)
- API client with interceptors
- Error handling and type-safe API calls
- User management (public and admin endpoints)
- Car management (public and admin endpoints)
- Bookings system
- Notifications system
- Admin dashboard with analytics
- Revenue tracking and reporting
- Occupancy rate calculations
- Advanced search and filtering

🚧 **In Progress:**

- Frontend integration with admin endpoints
- Full car data migration (transmission, fuel type, features)
- Hybrid data adapter implementation

❌ **Not Yet Started:**

- Reviews & ratings system
- Payment processing integration
- Real-time WebSocket notifications
- Advanced analytics dashboards

---

## Architecture

```
┌─────────────────┐
│   Next.js App   │
│  (Frontend)     │
└────────┬────────┘
         │
         ├──────────────┐
         │              │
    ┌────▼────┐    ┌───▼────┐
    │ NextAuth│    │  API   │
    │  (JWT)  │    │ Client │
    └────┬────┘    └───┬────┘
         │              │
         └──────┬───────┘
                │
       ┌────────▼─────────┐
       │  Token Manager   │
       │ (Local Storage)  │
       └────────┬─────────┘
                │
       ┌────────▼─────────┐
       │   Java Backend   │
       │  (Spring Boot)   │
       └──────────────────┘
```

### Key Components

1. **API Client** (`lib/api/client.ts`)

   - Centralized HTTP client
   - Automatic token refresh
   - Request/response interceptors
   - Type-safe methods

2. **Token Manager** (`lib/api/token-manager.ts`)

   - JWT storage and retrieval
   - Token expiration checking
   - Refresh token rotation

3. **Auth Service** (`lib/api/services/auth.service.ts`)

   - Login/register/logout
   - Token refresh
   - Authentication state

4. **NextAuth** (`lib/auth.ts`)
   - Session management
   - Credentials provider
   - Backend integration

---

## Environment Setup

### Required Environment Variables

Create a `.env.local` file in the project root:

```env
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:8080

# NextAuth Configuration
NEXTAUTH_SECRET=your-super-secret-key-min-32-chars
NEXTAUTH_URL=http://localhost:3000
```

### Generate NextAuth Secret

```bash
openssl rand -base64 32
```

### Development vs Production

**Development:**

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXTAUTH_URL=http://localhost:3000
```

**Production:**

```env
NEXT_PUBLIC_API_URL=https://api.yayago.com
NEXTAUTH_URL=https://yayago.com
```

---

## Authentication Flow

### Registration Flow

```
1. User fills registration form
   ├─ fullName
   ├─ email
   ├─ phoneNumber
   └─ password

2. Frontend validates data (Zod schema)

3. POST /api/user/register
   ├─ Request: RegisterRequest
   └─ Response: RegisterResponse

4. Success → Redirect to login
   Failure → Show error message
```

### Login Flow

```
1. User enters credentials
   ├─ email
   └─ password

2. NextAuth authorize() function
   │
   ├─ POST /api/auth/login
   │  ├─ Request: LoginRequest { email, password }
   │  └─ Response: LoginResponse { token, refreshToken, userId }
   │
   ├─ GET /api/user/{userId}
   │  └─ Fetch full user details (email, fullName, phoneNumber)
   │
   └─ Create session with complete data
       ├─ id: userId from API
       ├─ email: from user details
       ├─ name: fullName from user details
       ├─ phoneNumber: from user details
       └─ tokens: accessToken, refreshToken

3. Store tokens in:
   ├─ NextAuth session (JWT)
   └─ Local storage (token-manager)

4. Redirect to dashboard

✅ Backend now returns userId directly in login response.
   Frontend uses this to fetch complete user details from /api/user/{id}.
```

### Token Refresh Flow

```
1. API request returns 401 Unauthorized

2. API Client interceptor triggers refresh
   │
   ├─ Check if already refreshing
   │  └─ If yes, wait for current refresh
   │
   ├─ POST /api/auth/refresh?refreshToken={token}
   │  └─ Response: { token, refreshToken }
   │
   ├─ Update tokens in storage
   │
   └─ Retry original request with new token

3. If refresh fails → Clear tokens → Redirect to login
```

### Logout Flow

```
1. User clicks logout

2. POST /api/auth/logout
   ├─ Headers: Authorization: Bearer {token}
   └─ Backend invalidates session

3. Clear tokens from:
   ├─ NextAuth session
   └─ Local storage

4. Redirect to login page
```

---

## API Client

### Basic Usage

```typescript
import { apiClient } from '@/lib/api/client';

// GET request
const cars = await apiClient.get<CarDetailsResponseDto[]>('/api/cars');

// POST request
const car = await apiClient.post<CarDetailsResponseDto>(
  '/api/cars',
  { brand: 'Toyota', model: 'Camry', ... }
);

// PUT request
const updated = await apiClient.put<CarDetailsResponseDto>(
  `/api/cars/${id}`,
  { ...carData }
);

// DELETE request
await apiClient.delete(`/api/cars/${id}`);
```

### Skip Authentication

For public endpoints (login, register):

```typescript
await apiClient.post('/api/auth/login', data, { skipAuth: true });
```

### File Upload

```typescript
const formData = new FormData();
formData.append('file', file);

await apiClient.uploadFile<ImageResponseDto>(`/api/cars/${carId}/images`, formData);
```

---

## Services

### Auth Service

```typescript
import { authService } from '@/lib/api/services/auth.service';

// Login
const response = await authService.login(email, password);

// Register
const user = await authService.register({
  fullName,
  email,
  phoneNumber,
  password,
});

// Logout
await authService.logout();

// Check authentication
if (authService.isAuthenticated()) {
  // User is logged in
}
```

### Creating New Services

Example: Cars Service

```typescript
// lib/api/services/cars.service.ts
import { apiClient } from '../client';
import type { CarDetailsResponseDto, CarDetailsDto } from '../types';

class CarsService {
  async getAllCars() {
    return apiClient.get<CarDetailsResponseDto[]>('/api/cars');
  }

  async getCarById(id: number) {
    return apiClient.get<CarDetailsResponseDto>(`/api/cars/${id}`);
  }

  async createCar(data: CarDetailsDto) {
    return apiClient.post<CarDetailsResponseDto>('/api/cars', data);
  }

  async updateCar(id: number, data: CarDetailsDto) {
    return apiClient.put<CarDetailsResponseDto>(`/api/cars/${id}`, data);
  }

  async deleteCar(id: number) {
    return apiClient.delete(`/api/cars/${id}`);
  }
}

export const carsService = new CarsService();
```

### Admin Services Examples

Example: Admin Dashboard Service

```typescript
// lib/api/services/admin-dashboard.service.ts
import { apiClient } from '../client';
import type { DashboardStatsDto, RevenueStatsDto } from '../types';

class AdminDashboardService {
  async getDashboardStats() {
    return apiClient.get<DashboardStatsDto>('/api/admin/dashboard/stats');
  }

  async getRevenueStats(startDate: string, endDate: string) {
    return apiClient.get<RevenueStatsDto[]>(`/api/admin/dashboard/revenue?startDate=${startDate}&endDate=${endDate}`);
  }

  async getTotalRevenue() {
    return apiClient.get<number>('/api/admin/dashboard/revenue/total');
  }

  async getMonthlyRevenue() {
    return apiClient.get<number>('/api/admin/dashboard/revenue/monthly');
  }

  async getDailyRevenue() {
    return apiClient.get<number>('/api/admin/dashboard/revenue/daily');
  }

  async getOccupancyRate() {
    return apiClient.get<number>('/api/admin/dashboard/occupancy-rate');
  }
}

export const adminDashboardService = new AdminDashboardService();
```

Example: Admin Users Service

```typescript
// lib/api/services/admin-users.service.ts
import { apiClient } from '../client';
import type { AdminUserDto, AdminUserCreateRequest, UserStatusUpdateRequest, BookingDetails } from '../types';

class AdminUsersService {
  async getAllUsers(params?: { searchTerm?: string; active?: boolean; page?: number; size?: number }) {
    const queryParams = new URLSearchParams();
    if (params?.searchTerm) queryParams.append('searchTerm', params.searchTerm);
    if (params?.active !== undefined) queryParams.append('active', String(params.active));
    if (params?.page !== undefined) queryParams.append('page', String(params.page));
    if (params?.size !== undefined) queryParams.append('size', String(params.size));

    const url = `/api/admin/users${queryParams.toString() ? `?${queryParams}` : ''}`;
    return apiClient.get<AdminUserDto[]>(url);
  }

  async getUserById(userId: number) {
    return apiClient.get<AdminUserDto>(`/api/admin/users/${userId}`);
  }

  async createAdminUser(data: AdminUserCreateRequest) {
    return apiClient.post<AdminUserDto>('/api/admin/users/admin', data);
  }

  async updateUserStatus(userId: number, data: UserStatusUpdateRequest) {
    return apiClient.put(`/api/admin/users/${userId}/status`, data);
  }

  async deleteUser(userId: number) {
    return apiClient.delete(`/api/admin/users/${userId}`);
  }

  async getUserBookings(userId: number) {
    return apiClient.get<BookingDetails[]>(`/api/admin/users/${userId}/bookings`);
  }

  async getUserTotalBookings(userId: number) {
    return apiClient.get<number>(`/api/admin/users/${userId}/bookings/count`);
  }

  async getUserActiveBookings(userId: number) {
    return apiClient.get<number>(`/api/admin/users/${userId}/bookings/active-count`);
  }
}

export const adminUsersService = new AdminUsersService();
```

Example: Admin Cars Service

```typescript
// lib/api/services/admin-cars.service.ts
import { apiClient } from '../client';
import type { AdminCarDto, CarStatusUpdateRequest, CarPriceUpdateRequest, BookingDetails } from '../types';

class AdminCarsService {
  async getAllCars(params?: {
    searchTerm?: string;
    brand?: string;
    model?: string;
    year?: number;
    minPrice?: number;
    maxPrice?: number;
    available?: boolean;
  }) {
    const queryParams = new URLSearchParams();
    if (params?.searchTerm) queryParams.append('searchTerm', params.searchTerm);
    if (params?.brand) queryParams.append('brand', params.brand);
    if (params?.model) queryParams.append('model', params.model);
    if (params?.year) queryParams.append('year', String(params.year));
    if (params?.minPrice) queryParams.append('minPrice', String(params.minPrice));
    if (params?.maxPrice) queryParams.append('maxPrice', String(params.maxPrice));
    if (params?.available !== undefined) queryParams.append('available', String(params.available));

    const url = `/api/admin/cars${queryParams.toString() ? `?${queryParams}` : ''}`;
    return apiClient.get<AdminCarDto[]>(url);
  }

  async getCarById(carId: number) {
    return apiClient.get<AdminCarDto>(`/api/admin/cars/${carId}`);
  }

  async createCar(data: AdminCarDto) {
    return apiClient.post<AdminCarDto>('/api/admin/cars', data);
  }

  async updateCar(carId: number, data: AdminCarDto) {
    return apiClient.put<AdminCarDto>(`/api/admin/cars/${carId}`, data);
  }

  async deleteCar(carId: number) {
    return apiClient.delete(`/api/admin/cars/${carId}`);
  }

  async updateCarStatus(carId: number, data: CarStatusUpdateRequest) {
    return apiClient.put(`/api/admin/cars/${carId}/status`, data);
  }

  async updateCarPrice(carId: number, data: CarPriceUpdateRequest) {
    return apiClient.put(`/api/admin/cars/${carId}/price`, data);
  }

  async getCarBookings(carId: number) {
    return apiClient.get<BookingDetails[]>(`/api/admin/cars/${carId}/bookings`);
  }

  async getCarTotalBookings(carId: number) {
    return apiClient.get<number>(`/api/admin/cars/${carId}/bookings/count`);
  }

  async getCarActiveBookings(carId: number) {
    return apiClient.get<number>(`/api/admin/cars/${carId}/bookings/active-count`);
  }

  async getCarOccupancyRate(carId: number) {
    return apiClient.get<number>(`/api/admin/cars/${carId}/occupancy-rate`);
  }

  async getMostPopularCars() {
    return apiClient.get<AdminCarDto[]>('/api/admin/cars/analytics/popular');
  }

  async getCarsByRevenue() {
    return apiClient.get<AdminCarDto[]>('/api/admin/cars/analytics/revenue');
  }
}

export const adminCarsService = new AdminCarsService();
```

---

## Hybrid Data Strategy

### Problem

Backend provides limited car data:

- ✅ id, brand, model, year, price, currency, available

Frontend needs additional fields:

- ❌ transmission, fuelType, seats, features, description, images

### Solution: Hybrid Model

```typescript
// Backend data (from API)
type BackendCar = {
  id: number;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  currency: string;
  available: boolean;
};

// Frontend extensions (mock data)
type FrontendExtensions = {
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  seats: number;
  features: string[];
  description: string;
  images: string[];
};

// Combined model
type HybridCar = BackendCar & FrontendExtensions;
```

### Data Adapter

```typescript
// lib/api/adapters/car.adapter.ts
import type { CarDetailsResponseDto } from '../types';
import { mockCars } from '@/data/cars';

export function adaptBackendCar(backendCar: CarDetailsResponseDto): HybridCar {
  // Find matching mock data by brand/model
  const mockData = mockCars.find((m) => m.brand === backendCar.brand && m.model === backendCar.model);

  return {
    // Backend data
    ...backendCar,

    // Frontend extensions with fallbacks
    transmission: mockData?.transmission || 'Automatic',
    fuelType: mockData?.fuelType || 'Petrol',
    seats: mockData?.seats || 5,
    features: mockData?.features || [],
    description: mockData?.description || `${backendCar.year} ${backendCar.brand} ${backendCar.model}`,
    images: mockData?.images || [],
  };
}
```

### Usage

```typescript
// Fetch from backend
const backendCars = await carsService.getAllCars();

// Adapt to hybrid model
const hybridCars = backendCars.map(adaptBackendCar);

// Use in component
<CarCard car={hybridCars[0]} />
```

---

## Error Handling

### API Client Errors

```typescript
import { ApiClientError, getErrorMessage } from '@/lib/api/error-handler';

try {
  await apiClient.post('/api/cars', data);
} catch (error) {
  if (error instanceof ApiClientError) {
    // Network error (status 0)
    if (error.status === 0) {
      console.error('Network error');
    }

    // Authentication error (401, 403)
    if (error.status === 401 || error.status === 403) {
      console.error('Unauthorized');
    }

    // Server error (5xx)
    if (error.status >= 500) {
      console.error('Server error');
    }
  }

  // Get user-friendly message
  const message = getErrorMessage(error);
  alert(message);
}
```

### Server Actions

```typescript
// data/auth/auth.actions.ts
export async function register(data: RegisterSchemaType) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/user/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return {
        success: false,
        error: errorData?.message || 'Registration failed',
      };
    }

    return {
      success: true,
      data: await response.json(),
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unexpected error',
    };
  }
}
```

---

## Token Management

### Storage Strategy

**Access Token:**

- Stored in: Local storage + NextAuth session
- Lifetime: Short (15-30 minutes)
- Used for: API requests

**Refresh Token:**

- Stored in: Local storage + NextAuth session
- Lifetime: Long (30 days)
- Used for: Getting new access tokens

### Token Expiration

```typescript
import { tokenManager } from '@/lib/api/token-manager';

// Check if access token is expired
if (tokenManager.isAccessTokenExpired()) {
  // Trigger refresh
}

// Check if refresh token is expired
if (tokenManager.isRefreshTokenExpired()) {
  // Redirect to login
  window.location.href = '/auth';
}
```

### Manual Token Refresh

```typescript
import { authService } from '@/lib/api/services/auth.service';

const refreshToken = authService.getRefreshToken();
if (refreshToken) {
  await authService.refreshToken(refreshToken);
}
```

---

## API Endpoints

### Authentication

| Method | Endpoint            | Description   | Auth Required | Response                          |
| ------ | ------------------- | ------------- | ------------- | --------------------------------- |
| POST   | `/api/auth/login`   | User login    | No            | `{ token, refreshToken, userId }` |
| POST   | `/api/auth/logout`  | User logout   | Yes           | Success message                   |
| POST   | `/api/auth/refresh` | Refresh token | No            | `{ token, userId }`               |

### Users

| Method | Endpoint             | Description      | Auth Required |
| ------ | -------------------- | ---------------- | ------------- |
| POST   | `/api/user/register` | Create user      | No            |
| GET    | `/api/user/{id}`     | Get user details | Yes           |

### Cars (Public)

| Method | Endpoint         | Description     | Auth Required |
| ------ | ---------------- | --------------- | ------------- |
| GET    | `/api/cars`      | List all cars   | No            |
| GET    | `/api/cars/{id}` | Get car details | No            |
| POST   | `/api/cars`      | Create car      | Yes           |
| PUT    | `/api/cars/{id}` | Update car      | Yes           |
| DELETE | `/api/cars/{id}` | Delete car      | Yes           |

### Car Images

| Method | Endpoint                             | Description           | Auth Required |
| ------ | ------------------------------------ | --------------------- | ------------- |
| GET    | `/api/cars/{carId}/images`           | Get all images        | No            |
| POST   | `/api/cars/{carId}/images`           | Upload image          | Yes           |
| GET    | `/api/cars/{carId}/images/primary`   | Get primary image     | No            |
| PUT    | `/api/cars/images/{imageId}/primary` | Set primary           | Yes           |
| DELETE | `/api/cars/images/{imageId}`         | Delete image          | Yes           |
| DELETE | `/api/cars/{carId}/images`           | Delete all car images | Yes           |

### Bookings

| Method | Endpoint                      | Description    | Auth Required |
| ------ | ----------------------------- | -------------- | ------------- |
| POST   | `/api/bookings/create`        | Create booking | Yes           |
| GET    | `/api/bookings/user/{userId}` | User bookings  | Yes           |
| PATCH  | `/api/bookings/{id}/status`   | Update status  | Yes           |

### Notifications

| Method | Endpoint                             | Description                   | Auth Required |
| ------ | ------------------------------------ | ----------------------------- | ------------- |
| POST   | `/api/notifications`                 | Create notification           | Yes (Admin)   |
| GET    | `/api/notifications/{id}`            | Get notification by ID        | Yes           |
| GET    | `/api/notifications/user/{userId}`   | Get user notifications        | Yes           |
| POST   | `/api/notifications/retry-failed`    | Retry failed notifications    | Yes (Admin)   |
| POST   | `/api/notifications/process-pending` | Process pending notifications | Yes (Admin)   |

### Admin - User Management

| Method | Endpoint                                          | Description                | Auth Required |
| ------ | ------------------------------------------------- | -------------------------- | ------------- |
| GET    | `/api/admin/users`                                | List all users (paginated) | Yes (Admin)   |
| GET    | `/api/admin/users/{userId}`                       | Get user details           | Yes (Admin)   |
| POST   | `/api/admin/users/admin`                          | Create admin user          | Yes (Admin)   |
| PUT    | `/api/admin/users/{userId}/status`                | Update user status         | Yes (Admin)   |
| DELETE | `/api/admin/users/{userId}`                       | Delete user (soft delete)  | Yes (Admin)   |
| GET    | `/api/admin/users/{userId}/bookings`              | Get user's bookings        | Yes (Admin)   |
| GET    | `/api/admin/users/{userId}/bookings/count`        | Get user's total bookings  | Yes (Admin)   |
| GET    | `/api/admin/users/{userId}/bookings/active-count` | Get user's active bookings | Yes (Admin)   |

**Query Parameters for GET `/api/admin/users`:**

- `searchTerm` - Search in name, email, or phone
- `active` - Filter by active status (boolean)
- `page` - Page number (default: 0)
- `size` - Page size (default: 20)

### Admin - Car Management

| Method | Endpoint                                        | Description                  | Auth Required |
| ------ | ----------------------------------------------- | ---------------------------- | ------------- |
| GET    | `/api/admin/cars`                               | List all cars (with filters) | Yes (Admin)   |
| POST   | `/api/admin/cars`                               | Create new car               | Yes (Admin)   |
| GET    | `/api/admin/cars/{carId}`                       | Get car details              | Yes (Admin)   |
| PUT    | `/api/admin/cars/{carId}`                       | Update car                   | Yes (Admin)   |
| DELETE | `/api/admin/cars/{carId}`                       | Delete car (soft delete)     | Yes (Admin)   |
| PUT    | `/api/admin/cars/{carId}/status`                | Update car availability      | Yes (Admin)   |
| PUT    | `/api/admin/cars/{carId}/price`                 | Update car price             | Yes (Admin)   |
| GET    | `/api/admin/cars/{carId}/bookings`              | Get car's bookings           | Yes (Admin)   |
| GET    | `/api/admin/cars/{carId}/bookings/count`        | Get car's total bookings     | Yes (Admin)   |
| GET    | `/api/admin/cars/{carId}/bookings/active-count` | Get car's active bookings    | Yes (Admin)   |
| GET    | `/api/admin/cars/{carId}/occupancy-rate`        | Get car's occupancy rate     | Yes (Admin)   |
| GET    | `/api/admin/cars/analytics/popular`             | Get most popular cars        | Yes (Admin)   |
| GET    | `/api/admin/cars/analytics/revenue`             | Get cars by revenue          | Yes (Admin)   |

**Query Parameters for GET `/api/admin/cars`:**

- `searchTerm` - Search in brand or model
- `brand` - Filter by brand
- `model` - Filter by model
- `year` - Filter by year
- `minPrice` - Minimum price filter
- `maxPrice` - Maximum price filter
- `available` - Filter by availability (boolean)

### Admin - Dashboard & Analytics

| Method | Endpoint                               | Description                    | Auth Required |
| ------ | -------------------------------------- | ------------------------------ | ------------- |
| GET    | `/api/admin/dashboard/stats`           | Get dashboard statistics       | Yes (Admin)   |
| GET    | `/api/admin/dashboard/revenue`         | Get revenue stats (date range) | Yes (Admin)   |
| GET    | `/api/admin/dashboard/revenue/total`   | Get total revenue              | Yes (Admin)   |
| GET    | `/api/admin/dashboard/revenue/monthly` | Get monthly revenue            | Yes (Admin)   |
| GET    | `/api/admin/dashboard/revenue/daily`   | Get daily revenue              | Yes (Admin)   |
| GET    | `/api/admin/dashboard/occupancy-rate`  | Get overall occupancy rate     | Yes (Admin)   |

**Query Parameters for GET `/api/admin/dashboard/revenue`:**

- `startDate` - Start date (required, format: YYYY-MM-DD)
- `endDate` - End date (required, format: YYYY-MM-DD)

---

## Migration Path

### Phase 1: Authentication ✅ (COMPLETE)

- [x] API client infrastructure
- [x] Token management
- [x] Login integration (with userId in response)
- [x] Register integration
- [x] Logout integration
- [x] Auto token refresh (with userId in response)
- [x] User details fetching

### Phase 2: Admin Infrastructure 🚧 (IN PROGRESS)

#### Admin Services

- [ ] Create admin API services
  - [ ] AdminUsersService
  - [ ] AdminCarsService
  - [ ] AdminDashboardService
  - [ ] AdminAnalyticsService

#### Admin Pages & Components

- [ ] Admin user management pages
  - [ ] User list with search/filter
  - [ ] User detail view
  - [ ] User status management
  - [ ] Create admin user
- [ ] Admin car management pages
  - [ ] Car list with filters
  - [ ] Car analytics dashboard
  - [ ] Car status/price management
  - [ ] Car bookings view
- [ ] Admin dashboard
  - [ ] Statistics overview
  - [ ] Revenue charts
  - [ ] Occupancy rate display
  - [ ] Recent bookings

### Phase 3: Cars Integration 🚧 (IN PROGRESS)

- [x] Cars API endpoints available
- [ ] Create public cars service
- [ ] Implement hybrid data adapter
- [ ] Integrate car listing page
- [ ] Integrate car detail page
- [ ] Car search and filters

### Phase 4: Bookings Integration

- [x] Bookings API endpoints available
- [ ] Create bookings service
- [ ] Implement booking flow
- [ ] Display user bookings
- [ ] Booking status management
- [ ] Booking history

### Phase 5: Notifications Integration

- [x] Notifications API endpoints available
- [ ] Create notifications service
- [ ] Display user notifications
- [ ] Admin notification management
- [ ] Notification retry/processing

### Phase 6: Advanced Features

- [ ] Revenue analytics dashboard
- [ ] Advanced search & filters
- [ ] Export functionality (users, cars, bookings)
- [ ] Bulk operations
- [ ] Audit logs display

### Phase 7: Full Migration & Optimization

- [ ] Remove all mock data dependencies
- [ ] Backend provides extended car fields
- [ ] Remove hybrid data adapters
- [ ] Performance optimization
- [ ] Caching strategy
- [ ] Error boundary improvements

---

## Data Models & Schemas

### Core Models

#### LoginResponse

```typescript
{
  token: string; // JWT access token
  refreshToken: string; // Refresh token
  userId: number; // User's numeric ID ✅ NEW
}
```

#### RefreshTokenResponse

```typescript
{
  token: string; // New JWT access token
  userId: number; // User's numeric ID ✅ NEW
}
```

#### UserDto

```typescript
{
  id: number;
  email: string;
  fullName: string;
  phoneNumber: string;
}
```

#### AdminUserDto (extends UserDto)

```typescript
{
  id: number;
  email: string;
  fullName: string;
  phoneNumber: string;
  active: boolean; // ✅ NEW
  createdAt: Date; // ✅ NEW
  lastLoginAt: Date; // ✅ NEW
  totalBookings: number; // ✅ NEW
  activeBookings: number; // ✅ NEW
}
```

#### CarDetailsResponseDto

```typescript
{
  id: number;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  currency: string;
  available: boolean;
}
```

#### AdminCarDto (extends CarDetailsResponseDto)

```typescript
{
  id: number;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  currency: string;
  available: boolean;
  createdAt: Date; // ✅ NEW
  updatedAt: Date; // ✅ NEW
  totalBookings: number; // ✅ NEW
  activeBookings: number; // ✅ NEW
  totalRevenue: number; // ✅ NEW
}
```

#### DashboardStatsDto

```typescript
{
  totalUsers: number;
  totalCars: number;
  totalBookings: number;
  activeBookings: number;
  availableCars: number;
  occupiedCars: number;
  totalRevenue: number;
  monthlyRevenue: number;
  dailyRevenue: number;
  occupancyRate: number;
  pendingBookings: number;
  confirmedBookings: number;
  cancelledBookings: number;
}
```

#### RevenueStatsDto

```typescript
{
  date: Date; // Date for this revenue record
  dailyRevenue: number; // Revenue for this day
  cumulativeRevenue: number; // Total revenue up to this day
  bookingsCount: number; // Number of bookings on this day
}
```

#### BookingDetails

```typescript
{
  id: number;
  userId: number;
  userFullName: string;
  carId: number;
  carModel: string;
  carBrand: string;
  totalPrice: number;
  currency: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  startDate: Date;
  endDate: Date;
}
```

#### NotificationResponse

```typescript
{
  id: number;
  userId: number;
  type: 'BOOKING_CONFIRMED' | 'BOOKING_CANCELLED' | 'BOOKING_REMINDER' |
        'PAYMENT_CONFIRMED' | 'PAYMENT_FAILED' | 'CAR_AVAILABLE' |
        'WELCOME' | 'PASSWORD_RESET';
  status: 'PENDING' | 'SENT' | 'FAILED' | 'CANCELLED';
  subject: string;
  content: string;
  recipientEmail: string;
  sentAt?: Date;
  errorMessage?: string;
  retryCount: number;
  createdAt: Date;
}
```

### Request Models

#### UserStatusUpdateRequest

```typescript
{
  active: boolean;
  reason?: string;
}
```

#### CarStatusUpdateRequest

```typescript
{
  available: boolean;
  reason?: string;
}
```

#### CarPriceUpdateRequest

```typescript
{
  pricePerDay: number;
  reason?: string;
}
```

#### AdminUserCreateRequest

```typescript
{
  email: string;
  password: string; // min 6 characters
  fullName: string;
  phoneNumber: string;
  admin: boolean;
}
```

---

## Backend Features & Improvements

### ✅ Completed Improvements

#### 1. Login Response Now Includes userId

**Status:** ✅ **IMPLEMENTED**

The `/api/auth/login` endpoint now returns `userId` directly in the response:

```json
{
  "token": "jwt-token",
  "refreshToken": "refresh-token",
  "userId": 123
}
```

**Benefits:**

- Frontend can immediately fetch full user details via `GET /api/user/{userId}`
- No need to decode JWT to extract user information
- Simpler and more reliable authentication flow

#### 2. Refresh Token Response Includes userId

**Status:** ✅ **IMPLEMENTED**

The `/api/auth/refresh` endpoint now returns `userId`:

```json
{
  "token": "new-jwt-token",
  "userId": 123
}
```

#### 3. Comprehensive Admin Endpoints

**Status:** ✅ **IMPLEMENTED**

Complete admin dashboard functionality with:

**User Management:**

- CRUD operations for users
- User status management (active/inactive)
- Admin user creation
- User bookings and statistics
- Paginated user list with search and filters

**Car Management:**

- Advanced car CRUD with analytics
- Car status and price management
- Occupancy rate tracking
- Booking statistics per car
- Popular cars and revenue analytics
- Search and filter capabilities

**Dashboard & Analytics:**

- Real-time dashboard statistics
- Revenue tracking (total, monthly, daily)
- Occupancy rate calculations
- Booking status breakdown
- Date-range revenue reports

### Future Considerations

#### 1. Extended Car Data

**Current State:**
Backend provides core car fields (brand, model, year, price, availability).

**Potential Enhancement:**
Add extended fields to support richer car listings:

- `transmission`: 'Automatic' | 'Manual'
- `fuelType`: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid'
- `seats`: number
- `description`: string
- `features`: string[]

**Workaround:**
Frontend uses hybrid model combining backend data with mock extensions.

#### 2. Role-Based Access Control (RBAC)

**Consideration:**
All admin endpoints require authentication. Consider implementing:

- Role field in UserDto (`ADMIN`, `USER`, `SUPER_ADMIN`)
- Permission-based access control
- Audit logging for admin actions

#### 3. Real-Time Notifications

**Enhancement:**
Current notification system is database-driven. Consider:

- WebSocket support for real-time push notifications
- Email notification delivery status tracking
- SMS notification support

---

## Troubleshooting

### Common Issues

#### 1. "Network error. Please check your connection."

**Cause:** Backend API is not running or wrong URL

**Solution:**

```bash
# Check backend is running
curl http://localhost:8080/api/cars

# Update .env.local with correct URL
NEXT_PUBLIC_API_URL=http://localhost:8080
```

#### 2. "Session expired. Please login again."

**Cause:** Refresh token is expired

**Solution:**

- User must login again
- Check token lifetimes in backend
- Implement "Remember me" for longer sessions

#### 3. "Invalid credentials"

**Cause:** Wrong email/password or backend error

**Solution:**

- Verify credentials
- Check backend logs
- Ensure user exists in database

#### 4. CORS errors

**Cause:** Backend not allowing frontend origin

**Solution:**
Add to backend CORS configuration:

```java
@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                    .allowedOrigins("http://localhost:3000", "https://yayago.com")
                    .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH")
                    .allowedHeaders("*")
                    .allowCredentials(true);
            }
        };
    }
}
```

#### 5. Token not being sent

**Cause:** Token not in storage or client-side only

**Solution:**

- Check browser console for token
- Verify `tokenManager.getAccessToken()` returns value
- Ensure NextAuth session is active

### Debug Mode

Enable API debugging:

```typescript
// lib/api/client.ts
const DEBUG = process.env.NODE_ENV === 'development';

if (DEBUG) {
  console.log('Request:', { method, url, data });
  console.log('Response:', { status, data });
}
```

---

## Best Practices

### 1. Always Use Services

❌ **Bad:**

```typescript
const response = await fetch('http://localhost:8080/api/cars');
```

✅ **Good:**

```typescript
const cars = await carsService.getAllCars();
```

### 2. Handle Errors Gracefully

❌ **Bad:**

```typescript
const cars = await carsService.getAllCars();
```

✅ **Good:**

```typescript
try {
  const cars = await carsService.getAllCars();
} catch (error) {
  const message = getErrorMessage(error);
  toast.error(message);
}
```

### 3. Use TypeScript Types

❌ **Bad:**

```typescript
const response = await apiClient.get('/api/cars');
```

✅ **Good:**

```typescript
const cars = await apiClient.get<CarDetailsResponseDto[]>('/api/cars');
```

### 4. Server Actions for Mutations

Use server actions for data mutations (POST, PUT, DELETE):

```typescript
// data/cars/cars.actions.ts
'use server';

export async function createCar(data: CarDetailsDto) {
  // Validation, authorization, etc.
  return apiClient.post('/api/cars', data);
}
```

### 5. Client-Side for Reads

Use client-side fetching for data reads (GET):

```typescript
// components/CarsList.tsx
'use client';

const { data, error, isLoading } = useSWR('/api/cars', () => carsService.getAllCars());
```

---

## Security Considerations

1. **Never expose sensitive tokens**

   - Don't log tokens in production
   - Use httpOnly cookies when possible

2. **Validate all inputs**

   - Use Zod schemas
   - Sanitize user inputs

3. **Implement rate limiting**

   - Prevent brute force attacks
   - Use backend rate limiting

4. **HTTPS in production**

   - Always use HTTPS
   - Configure secure cookies

5. **Token rotation**
   - Rotate refresh tokens
   - Implement token revocation

---

## Contact & Support

For questions or issues:

- Backend Team: backend@yayago.com
- Frontend Team: frontend@yayago.com
- Documentation: https://docs.yayago.com

---

**Last Updated:** October 13, 2025  
**Version:** 2.0  
**Maintainer:** YayaGo Development Team

---

## Changelog

### Version 2.0 (October 13, 2025)

**Major Updates:**

- ✅ Added `userId` to login and refresh token responses
- ✅ Comprehensive admin endpoints documentation
  - Admin user management (CRUD, status, bookings)
  - Admin car management (CRUD, status, price, analytics)
  - Admin dashboard with statistics and analytics
  - Revenue tracking and reporting
  - Occupancy rate calculations
- ✅ New data models and schemas documentation
- ✅ Complete service implementation examples
- ✅ Updated migration path with admin infrastructure phase
- ✅ Removed JWT decoding workarounds (no longer needed)

**New API Endpoints (30+):**

- 8 admin user management endpoints
- 11 admin car management endpoints
- 6 admin dashboard/analytics endpoints
- Enhanced notification endpoints with retry/processing

### Version 1.0 (October 12, 2025)

**Initial Release:**

- Basic authentication flow documentation
- API client infrastructure
- Token management system
- Core endpoints (cars, users, bookings, notifications)
- Hybrid data strategy guidelines
