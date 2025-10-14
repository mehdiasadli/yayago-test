/**
 * API Services Index
 * Central export point for all API services
 */

export { authService } from './auth.service';
export { carsService } from './cars.service';

// Export types for convenience
export type { CarDetailsDto, CarDetailsResponseDto } from '../types';
export type { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '../types';
