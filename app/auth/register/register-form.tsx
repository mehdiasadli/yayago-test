'use client';

import { Button } from '@/components/ui/button';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Mail, Lock, User, Phone, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { register } from '@/data/auth/auth.actions';

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setIsLoading(true);

    try {
      const result = await register(formData);

      if (result.success) {
        setSuccess(true);
        // Redirect to login page after 2 seconds
        setTimeout(() => {
          router.push('/auth?registered=true');
        }, 2000);
      } else {
        setError(result.error || 'Registration failed');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    setError(''); // Clear error on change
  };

  return (
    <div className='w-full'>
      {/* Header */}
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Create Account</h1>
        <p className='text-gray-600'>Join YayaGo and start renting today</p>
      </div>

      {/* Error Message */}
      {error && (
        <div className='mb-6 p-4 bg-red-50 border-l-4 border-red-500 flex items-center gap-3'>
          <AlertCircle className='w-5 h-5 text-red-500 flex-shrink-0' />
          <p className='text-sm text-red-700'>{error}</p>
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className='mb-6 p-4 bg-green-50 border-l-4 border-green-500 flex items-center gap-3'>
          <CheckCircle className='w-5 h-5 text-green-500 flex-shrink-0' />
          <p className='text-sm text-green-700'>Account created successfully! Redirecting to login...</p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Name */}
        <div className='space-y-2'>
          <label htmlFor='name' className='block text-sm font-semibold text-gray-700 uppercase tracking-wider'>
            Full Name
          </label>
          <InputGroup>
            <InputGroupInput
              id='name'
              type='text'
              placeholder='Enter your full name'
              value={formData.fullName}
              onChange={handleChange('fullName')}
              required
              disabled={isLoading || success}
              className='h-12'
            />
            <InputGroupAddon>
              <User className='w-5 h-5 text-gray-400' />
            </InputGroupAddon>
          </InputGroup>
        </div>

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
              value={formData.email}
              onChange={handleChange('email')}
              required
              disabled={isLoading || success}
              className='h-12'
            />
            <InputGroupAddon>
              <Mail className='w-5 h-5 text-gray-400' />
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Phone Number */}
        <div className='space-y-2'>
          <label htmlFor='phone' className='block text-sm font-semibold text-gray-700 uppercase tracking-wider'>
            Phone Number
          </label>
          <InputGroup>
            <InputGroupInput
              id='phone'
              type='tel'
              placeholder='+971 XX XXX XXXX'
              value={formData.phoneNumber}
              onChange={handleChange('phoneNumber')}
              required
              disabled={isLoading || success}
              className='h-12'
            />
            <InputGroupAddon>
              <Phone className='w-5 h-5 text-gray-400' />
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
              placeholder='Create a strong password (min 8 characters)'
              value={formData.password}
              onChange={handleChange('password')}
              required
              minLength={8}
              disabled={isLoading || success}
              className='h-12'
            />
            <InputGroupAddon>
              <Lock className='w-5 h-5 text-gray-400' />
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Terms */}
        <div className='flex items-start gap-2'>
          <input
            type='checkbox'
            id='terms'
            required
            className='mt-1 w-4 h-4 text-primary border-gray-300 focus:ring-primary'
          />
          <label htmlFor='terms' className='text-sm text-gray-600'>
            I agree to the{' '}
            <Link href='/terms' className='text-primary hover:text-primary/80 font-medium'>
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href='/privacy' className='text-primary hover:text-primary/80 font-medium'>
              Privacy Policy
            </Link>
          </label>
        </div>

        {/* Submit Button */}
        <Button
          type='submit'
          disabled={isLoading || success}
          className='w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90'
        >
          {isLoading ? 'Creating Account...' : success ? 'Account Created!' : 'Create Account'}
        </Button>
      </form>

      {/* Sign In Link */}
      <div className='mt-8 text-center'>
        <p className='text-gray-600'>
          Already have an account?{' '}
          <Link href='/auth' className='text-primary hover:text-primary/80 font-semibold'>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
