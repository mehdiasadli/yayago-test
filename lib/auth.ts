import { LoginSchema } from '@/data/auth/auth.schema';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

declare module 'next-auth' {
  interface User {
    id: string;
    email: string;
    name: string;
    isAdmin: boolean;
    phoneNumber?: string;
    accessToken?: string;
    refreshToken?: string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      isAdmin: boolean;
      phoneNumber?: string;
    };
    accessToken?: string;
    refreshToken?: string;
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    id: string;
    email: string;
    name: string;
    isAdmin: boolean;
    phoneNumber?: string;
    accessToken?: string;
    refreshToken?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        const data = LoginSchema.safeParse(credentials);

        console.log('AUTHORIZE DATA:', data);

        if (!data.success) {
          throw new Error(data.error.errors[0].message);
        }

        try {
          // Call backend API
          const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: data.data.email,
              password: data.data.password,
            }),
          });

          if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new Error(errorData?.message || 'Invalid credentials');
          }

          const loginResponse = await response.json();

          console.log('LOGIN RESPONSE:', loginResponse);

          // userId is now returned directly from the API
          const userId = loginResponse.userId;

          console.log('USER ID from API:', userId);

          // Fetch full user details
          try {
            const userResponse = await fetch(`${API_BASE_URL}/api/user/${userId}`, {
              headers: {
                Authorization: `Bearer ${loginResponse.token}`,
              },
            });

            if (userResponse.ok) {
              const userData = await userResponse.json();
              console.log('FETCHED USER DATA:', userData);

              return {
                id: userData.id?.toString() || userId.toString(),
                email: userData.email || data.data.email,
                name: userData.fullName || data.data.email.split('@')[0],
                phoneNumber: userData.phoneNumber,
                isAdmin: false, // TODO: Add role detection when backend supports it
                accessToken: loginResponse.token,
                refreshToken: loginResponse.refreshToken,
              };
            }
          } catch (e) {
            console.error('Failed to fetch user details:', e);
          }

          // Fallback: Use minimal user data if fetch failed
          console.log('Using fallback user data (fetch failed)');
          return {
            id: userId?.toString() || data.data.email,
            email: data.data.email,
            name: data.data.email.split('@')[0],
            phoneNumber: undefined,
            isAdmin: false,
            accessToken: loginResponse.token,
            refreshToken: loginResponse.refreshToken,
          };
        } catch (error) {
          console.error('Auth error:', error);
          throw new Error(error instanceof Error ? error.message : 'Authentication failed');
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      // Initial sign in
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.isAdmin = user.isAdmin;
        token.phoneNumber = user.phoneNumber;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }

      // TODO: Add token refresh logic here when token is about to expire

      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.isAdmin = token.isAdmin;
        session.user.phoneNumber = token.phoneNumber;
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
      }
      return session;
    },
  },
});
