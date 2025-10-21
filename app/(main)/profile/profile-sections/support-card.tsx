import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

interface SupportCardProps {
  email: string;
}

export default function SupportCard({ email }: SupportCardProps) {
  return (
    <div className='bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 p-6'>
      <h3 className='text-lg font-bold text-gray-900 mb-2'>Need Help?</h3>
      <p className='text-sm text-gray-600 mb-4'>Our support team is available 24/7 to assist you with any questions.</p>
      <Link href={`/support/contact?email=${encodeURIComponent(email)}`}>
        <Button variant='outline' className='w-full hover:bg-white'>
          <MessageCircle className='w-4 h-4 mr-2' />
          Contact Support
        </Button>
      </Link>
    </div>
  );
}
