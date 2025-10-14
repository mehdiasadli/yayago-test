/**
 * TypeScript types generated from Swagger API schema
 * Backend: YayaGo Rent-A-Car API v1.0
 */

// ============ Authentication Types ============

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  userId: number;
}

export interface RegisterRequest {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
}

export interface RegisterResponse {
  id: number;
  email: string;
  fullName: string;
  phoneNumber: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  token: string;
  userId: number;
}

// ============ User Types ============

export interface UserDto {
  id: number;
  email: string;
  fullName: string;
  phoneNumber: string;
}

// ============ Car Types ============

export interface CarDetailsDto {
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  currency: string;
  available: boolean;
}

export interface CarDetailsResponseDto {
  id: number;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  currency: string;
  available: boolean;
}

// ============ Car Images Types ============

export interface ImageResponseDto {
  id: number;
  carId: number;
  imageUrl: string;
  imageName: string;
  imageSize: number;
  mimeType: string;
  isPrimary: boolean;
  uploadDate: string;
  createdAt: string;
}

// ============ Booking Types ============

export interface BookingRequest {
  userId: number;
  fullName: string;
  carId: number;
  startDate: string; // date format
  endDate: string; // date format
}

export interface BookingDetails {
  id: number;
  userId: number;
  userFullName: string;
  carId: number;
  carModel: string;
  carBrand: string;
  totalPrice: number;
  currency: string;
  status: string;
  startDate: string;
  endDate: string;
}

export type BookingStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED';

// ============ Notification Types ============

export type NotificationType =
  | 'BOOKING_CONFIRMED'
  | 'BOOKING_CANCELLED'
  | 'BOOKING_REMINDER'
  | 'PAYMENT_CONFIRMED'
  | 'PAYMENT_FAILED'
  | 'CAR_AVAILABLE'
  | 'WELCOME'
  | 'PASSWORD_RESET';

export type NotificationStatus = 'PENDING' | 'SENT' | 'FAILED' | 'CANCELLED';

export interface NotificationRequest {
  userId: number;
  type: NotificationType;
  subject: string;
  content: string;
  recipientEmail: string;
}

export interface NotificationResponse {
  id: number;
  userId: number;
  type: NotificationType;
  status: NotificationStatus;
  subject: string;
  content: string;
  recipientEmail: string;
  sentAt?: string;
  errorMessage?: string;
  retryCount: number;
  createdAt: string;
}

// ============ API Error Response ============

export interface ApiError {
  message: string;
  status: number;
  timestamp?: string;
  path?: string;
}

// ============ Generic API Response ============

export interface ApiResponse<T> {
  data?: T;
  error?: ApiError;
  success: boolean;
}
