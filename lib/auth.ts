import { LoginSchema } from '@/data/auth/auth.schema';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

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

        if (data.data.email === 'test@test.com' && data.data.password === 'password') {
          return {
            id: '1',
            email: 'test@test.com',
            name: 'Test User',
          };
        }

        throw new Error('Invalid credentials');
      },
    }),
  ],
  pages: {
    signIn: '/auth',
  },
});
