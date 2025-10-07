'use client';

import { Button } from '@/components/ui/button';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { login } from '@/data/auth/auth.actions';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const result = await login(email, password);

      if (result.error) {
        setError(result.error);
      } else {
        router.push('/');
        router.refresh();
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='w-full'>
      {/* Header */}
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Welcome Back</h1>
        <p className='text-gray-600'>Sign in to your account to continue</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Error Message */}
        {error && (
          <div className='flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 text-sm'>
            <AlertCircle className='w-4 h-4 flex-shrink-0' />
            <p>{error}</p>
          </div>
        )}

        {/* Email */}
        <div className='space-y-2'>
          <label htmlFor='email' className='block text-sm font-semibold text-gray-700 uppercase tracking-wider'>
            Email Address
          </label>
          <InputGroup>
            <InputGroupInput
              id='email'
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='h-12'
            />
            <InputGroupAddon>
              <Mail className='w-5 h-5 text-gray-400' />
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Password */}
        <div className='space-y-2'>
          <label htmlFor='password' className='block text-sm font-semibold text-gray-700 uppercase tracking-wider'>
            Password
          </label>
          <InputGroup>
            <InputGroupInput
              id='password'
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='h-12'
            />
            <InputGroupAddon>
              <Lock className='w-5 h-5 text-gray-400' />
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Forgot Password Link */}
        <div className='flex justify-end'>
          <Link href='/auth/recover-password' className='text-sm text-primary hover:text-primary/80 font-medium'>
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <Button
          type='submit'
          disabled={isLoading}
          className='w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>

      {/* Sign Up Link */}
      <div className='mt-8 text-center'>
        <p className='text-gray-600'>
          Don't have an account?{' '}
          <Link href='/auth/register' className='text-primary hover:text-primary/80 font-semibold'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
