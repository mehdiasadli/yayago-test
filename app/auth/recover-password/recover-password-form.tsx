'use client';

import { Button } from '@/components/ui/button';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function RecoverPasswordForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className='w-full text-center'>
        {/* Success Icon */}
        <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
          <svg className='w-8 h-8 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
            <path
              fillRule='evenodd'
              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </div>

        {/* Header */}
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Check Your Email</h1>
        <p className='text-gray-600 mb-8'>
          We've sent a password reset link to <strong>{email}</strong>. Please check your inbox and follow the
          instructions.
        </p>

        {/* Back to Login */}
        <Link href='/auth'>
          <Button className='w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90'>
            <ArrowLeft className='w-5 h-5 mr-2' />
            Back to Login
          </Button>
        </Link>

        {/* Resend */}
        <div className='mt-6'>
          <button onClick={() => setSubmitted(false)} className='text-sm text-gray-600 hover:text-gray-900 font-medium'>
            Didn't receive the email? Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full'>
      {/* Back Link */}
      <Link href='/auth' className='inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8'>
        <ArrowLeft className='w-4 h-4' />
        Back to login
      </Link>

      {/* Header */}
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Forgot Password?</h1>
        <p className='text-gray-600'>No worries! Enter your email and we'll send you a reset link.</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className='space-y-6'>
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

        {/* Submit Button */}
        <Button type='submit' className='w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90'>
          Send Reset Link
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
