import { LoginSchema } from '@/data/auth/auth.schema';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

declare module 'next-auth' {
  interface User {
    id: string;
    email: string;
    name: string;
    isAdmin: boolean;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      isAdmin: boolean;
    };
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    id: string;
    email: string;
    name: string;
    isAdmin: boolean;
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
      authorize(credentials) {
        const data = LoginSchema.safeParse(credentials);

        if (!data.success) {
          throw new Error(data.error.errors[0].message);
        }

        // Regular user
        if (data.data.email === 'user@yayago.com' && data.data.password === 'user1234') {
          return {
            id: '1',
            email: 'user@yayago.com',
            name: 'Test User',
            isAdmin: false,
          };
        }

        // Admin user
        if (data.data.email === 'admin@yayago.com' && data.data.password === 'admin1234') {
          return {
            id: '999',
            email: 'admin@yayago.com',
            name: 'Admin User',
            isAdmin: true,
          };
        }

        throw new Error('Invalid credentials');
      },
    }),
  ],
  pages: {
    signIn: '/auth',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
  },
});
