import { auth } from '@/lib/auth';
import { Loader2 } from 'lucide-react';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

interface GetStartedPageProps {
  searchParams: Promise<{
    priceId?: string;
    redirectUrl?: string;
  }>;
}

export default async function GetStartedPage({ searchParams }: GetStartedPageProps) {
  const { priceId = 'price_1SQ6oPJ7VcJzgKpAJysXZkyM', redirectUrl = '/' } = await searchParams;

  const session = await auth();

  if (!session?.user) {
    redirect(
      `/auth?callbackUrl=${encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL + '/pricing/get-started' + '?priceId=' + priceId + '&redirectUrl=' + encodeURIComponent(redirectUrl))}`
    );
  }

  redirect(`/checkout?priceId=${priceId}&redirectUrl=${encodeURIComponent(redirectUrl)}`);

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center space-y-4'>
        <Loader2 className='size-10 animate-spin text-primary' />
        <p className='text-sm text-gray-500'>Redirecting to checkout...</p>
      </div>
    </div>
  );
}
