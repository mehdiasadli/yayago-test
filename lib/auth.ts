import { ACCESS_TOKEN_TTL, REFRESH_TOKEN_TTL } from '@/features/auth/auth.constants';
import { TCreateUserResponse } from '@/features/users/users.types';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

declare module 'next-auth' {
  interface User extends Omit<TCreateUserResponse, 'id'> {
    id: string;
    accessToken: string;
    refreshToken: string;
    avatarUrl?: string | null;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      fullName: string;
      phoneNumber: string;
      role: 'USER' | 'ADMIN';
      createdAt: string;
      avatarUrl?: string | null;
    };
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
  }
}

declare module '@auth/core/jwt' {
  interface JWT extends Omit<TCreateUserResponse, 'id'> {
    id: string;
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
    avatarUrl?: string | null;
  }
}

const REFRESH_THRESHOLD = 60; // Refresh 1 minute before expiry

// Import your existing DTOs instead of defining new schemas
import { LoginResponseDto, RefreshTokenResponseDto } from '@/features/auth/auth.dto';
import { GetUserByIdResponseDto } from '@/features/users/users.dto';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          console.log('Starting authorization...');

          // IMPORTANT: Use plain fetch here, NOT AuthApi.login()
          const loginResponse = await fetch(`${API_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          });

          if (!loginResponse.ok) {
            console.error('Login failed:', loginResponse.status, loginResponse.statusText);
            return null; // Return null, don't throw
          }

          const loginResponseData = await loginResponse.json();
          console.log('Login response received');

          // Validate login response using your DTO
          const loginValidation = LoginResponseDto.safeParse(loginResponseData);
          if (!loginValidation.success) {
            console.error('Invalid login response:', loginValidation.error);
            return null; // Return null, don't throw
          }

          const loginData = loginValidation.data;
          const { token, refreshToken, userId } = loginData;

          console.log(`Requesting: ${API_URL}/api/users/${userId} with token: ${token}`);

          // Fetch user details using the token we just received
          const userResponse = await fetch(`${API_URL}/api/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });

          if (!userResponse.ok) {
            console.error('Failed to fetch user details:', userResponse.status, userResponse.statusText);
            return null; // Return null, don't throw
          }

          const userResponseData = await userResponse.json();
          console.log('User data received');

          const importantUserSchema = GetUserByIdResponseDto.omit({
            addedCars: true,
            bookings: true,
          });

          // Validate user response
          const userValidation = importantUserSchema.safeParse(userResponseData);
          if (!userValidation.success) {
            console.error('Invalid user data:', userValidation.error);
            return null; // Return null, don't throw
          }

          const userData = userValidation.data;
          const expiresAt = Math.floor(Date.now() / 1000) + ACCESS_TOKEN_TTL;

          console.log('Authorization successful for user:', userData.email);

          return {
            id: userData.id.toString(),
            email: userData.email,
            phoneNumber: userData.phoneNumber,
            role: userData.role,
            avatarUrl: userData.avatarUrl,
            accessToken: token,
            refreshToken: refreshToken,
            expiresAt: expiresAt,
            fullName: userData.fullName,
            createdAt: userData.createdAt,
          };
        } catch (error) {
          console.error('Authorization error:', error);
          return null; // Return null on any error
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth',
  },
  session: {
    strategy: 'jwt',
    maxAge: REFRESH_TOKEN_TTL,
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // Initial sign-in: populate token with user data
      if (user) {
        return {
          id: user.id.toString(),
          email: user.email!,
          fullName: user.fullName,
          phoneNumber: user.phoneNumber,
          role: user.role,
          avatarUrl: user.avatarUrl,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          createdAt: user.createdAt,
          expiresAt: Math.floor(Date.now() / 1000) + ACCESS_TOKEN_TTL,
        };
      }

      // If update is called with data, use that data directly
      if (trigger === 'update' && session) {
        return {
          ...token,
          ...session,
        };
      }

      // Check if token needs refresh
      const timeUntilExpiry = token.expiresAt - Math.floor(Date.now() / 1000);
      const shouldRefresh = timeUntilExpiry < REFRESH_THRESHOLD;

      if (shouldRefresh) {
        try {
          console.log('Refreshing token...');

          const refreshResponse = await fetch(`${API_URL}/api/auth/refresh`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              refreshToken: token.refreshToken,
            }),
          });

          if (!refreshResponse.ok) {
            console.error('Token refresh failed:', refreshResponse.status);
            // Return null to force re-login
            return null as any;
            return { ...token, error: 'RefreshTokenError' } as any;
          }

          const refreshData = await refreshResponse.json();

          // Validate refresh response using your DTO
          const refreshValidation = RefreshTokenResponseDto.safeParse(refreshData);
          if (!refreshValidation.success) {
            console.error('Invalid refresh response:', refreshValidation.error);
            return null as any;
            return { ...token, error: 'RefreshTokenError' } as any;
          }

          const refreshTokenData = refreshValidation.data;
          console.log('Token refreshed successfully');

          return {
            ...token,
            accessToken: refreshTokenData.token,
            expiresAt: Math.floor(Date.now() / 1000) + ACCESS_TOKEN_TTL,
          };
        } catch (error) {
          console.error('Error refreshing token:', error);
          // Return token with error flag instead of throwing
          return null as any;
          return { ...token, error: 'RefreshTokenError' } as any;
        }
      }

      // Manual update trigger - refresh user data from backend
      // This CAN use plain fetch with the existing token
      if (trigger === 'update') {
        try {
          console.log('Updating user data...');

          const userResponse = await fetch(`${API_URL}/api/users/${token.id}`, {
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
              'Content-Type': 'application/json',
            },
          });

          if (!userResponse.ok) {
            console.error('Failed to fetch user details:', userResponse.status);
            return token; // Return unchanged token
          }

          const userResponseData = await userResponse.json();
          const userValidation = GetUserByIdResponseDto.safeParse(userResponseData);

          if (!userValidation.success) {
            console.error('Invalid user data:', userValidation.error);
            return token; // Return unchanged token
          }

          const userData = userValidation.data;

          return {
            ...token,
            email: userData.email,
            fullName: userData.fullName,
            phoneNumber: userData.phoneNumber,
            role: userData.role,
            avatarUrl: userData.avatarUrl,
          };
        } catch (error) {
          console.error('Error updating user data:', error);
          return token; // Return unchanged token
        }
      }

      return token;
    },

    async session({ session, token }) {
      if (token?.accessToken) {
        session.user.id = token.id;
        session.user.email = token.email!;
        session.user.fullName = token.fullName;
        session.user.phoneNumber = token.phoneNumber;
        session.user.role = token.role;
        session.user.avatarUrl = token.avatarUrl;
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.expiresAt = token.expiresAt;
        session.user.createdAt = new Date(token.createdAt).toISOString() as unknown as Date & string;
      }
      return session;
    },
  },
});
