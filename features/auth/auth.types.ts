import z from 'zod';
import { LoginRequestDto, LoginResponseDto, RefreshTokenRequestDto, RefreshTokenResponseDto } from './auth.dto';

export type TRefreshTokenRequest = z.infer<typeof RefreshTokenRequestDto>;
export type TRefreshTokenResponse = z.infer<typeof RefreshTokenResponseDto>;
export type TLoginRequest = z.infer<typeof LoginRequestDto>;
export type TLoginResponse = z.infer<typeof LoginResponseDto>;
