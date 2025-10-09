'use client';

import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

interface LogoutButtonProps {
  variant?: 'profile' | 'admin';
}

export default function LogoutButton({ variant = 'profile' }: LogoutButtonProps) {
  const handleLogout = async () => {
    await signOut({
      callbackUrl: '/',
      redirect: true,
    });
  };

  if (variant === 'admin') {
    return (
      <button
        onClick={handleLogout}
        className='w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-400 transition-colors'
        title='Logout'
      >
        <LogOut className='w-5 h-5' strokeWidth={2} />
      </button>
    );
  }

  return (
    <button
      onClick={handleLogout}
      className='flex items-center gap-2 px-4 py-3 bg-red-600/20 hover:bg-red-600/30 border border-red-500/50 text-red-300 hover:text-red-200 transition-colors font-semibold'
    >
      <LogOut className='w-4 h-4' strokeWidth={2} />
      <span className='hidden sm:inline'>Logout</span>
    </button>
  );
}
