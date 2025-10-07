'use client';

import { Button } from '@/components/ui/button';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Mail, Lock, User, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', formData);
    // Handle registration logic here
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className='w-full'>
      {/* Header */}
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Create Account</h1>
        <p className='text-gray-600'>Join YayaGo and start renting today</p>
      </div>

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
              value={formData.name}
              onChange={handleChange('name')}
              required
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
              value={formData.phone}
              onChange={handleChange('phone')}
              required
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
              placeholder='Create a strong password'
              value={formData.password}
              onChange={handleChange('password')}
              required
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
        <Button type='submit' className='w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90'>
          Create Account
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
