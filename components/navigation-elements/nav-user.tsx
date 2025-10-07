'use client';

import { AnimateIcon } from '../animate-ui/icons/icon';
import { Button } from '../ui/button';
import Link from 'next/link';
import { UserRound } from '../animate-ui/icons/user-round';
import { useSession } from 'next-auth/react';

export default function NavUser() {
  const { data: session } = useSession();

  const label = session?.user ? session.user.name : 'Sign In';
  const href = session?.user ? '/profile' : '/auth';

  return (
    <AnimateIcon animateOnHover className='h-full'>
      <Button asChild variant='ghost' className='h-full hover:text-primary hover:bg-primary/20'>
        <Link href={href} className='h-full'>
          <UserRound />
          <span className='hidden md:block'>{label}</span>
        </Link>
      </Button>
    </AnimateIcon>
  );
}
