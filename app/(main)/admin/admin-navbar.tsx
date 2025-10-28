import { ArrowLeft, Bell } from 'lucide-react';
import Image from 'next/image';
import LogoutButton from '@/components/logout-button';
import Link from 'next/link';

interface AdminNavbarProps {
  name: string;
}

export default function AdminNavbar({ name }: AdminNavbarProps) {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b-2 border-gray-800 shadow-xl'>
      <div className='px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo & Admin Badge */}
          <div className='flex items-center gap-6'>
            <Link href='/admin' className='flex items-center gap-3'>
              <Image
                src='/assets/branding/Logo-White.svg'
                alt='YayaGo'
                width={120}
                height={32}
                className='h-8 w-auto'
              />
              <div className='px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider'>Admin</div>
            </Link>
          </div>

          {/* Actions */}
          <div className='flex items-center gap-4'>
            <Link
              href='/profile'
              className='flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white hover:text-primary transition-colors'
            >
              <ArrowLeft className='w-4 h-4' strokeWidth={2} />
              <span className='hidden sm:inline'>Back to Site</span>
            </Link>

            <Link
              href='/admin/notifications'
              className='relative w-10 h-10 flex items-center justify-center text-white hover:text-primary transition-colors'
            >
              <Bell className='w-5 h-5' strokeWidth={2} />
              <div className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full' />
            </Link>

            <div className='h-8 w-px bg-gray-700' />

            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-sm border-2 border-gray-700'>
                {name?.charAt(0) || 'A'}
              </div>
              <div className='hidden md:block'>
                <div className='text-sm font-semibold text-white'>{name}</div>
                <div className='text-xs text-gray-400'>Administrator</div>
              </div>
            </div>

            <LogoutButton variant='admin' />
          </div>
        </div>
      </div>
    </header>
  );
}
