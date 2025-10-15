import { Button } from '@/components/ui/button';
import { auth } from '@/lib/auth';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default async function GetStartedButton() {
  const session = await auth();

  const href = session ? '/list-your-car' : '/auth/register?callbackUrl=/list-your-car';

  return (
    <Link href={href}>
      <Button
        size='lg'
        className='h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all'
      >
        Get Started Now
        <ArrowRight className='w-5 h-5 ml-2' />
      </Button>
    </Link>
  );
}
