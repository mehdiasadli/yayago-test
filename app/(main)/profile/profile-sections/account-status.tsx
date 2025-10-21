import { Shield, Check, TrendingUp } from 'lucide-react';
import { Link } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AccountStatus() {
  return (
    <div className='bg-gradient-to-br from-primary to-primary-dark text-white border-2 border-primary overflow-hidden'>
      <div className='p-6'>
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center'>
            <Shield className='w-6 h-6' strokeWidth={2} />
          </div>
          <div>
            <div className='font-bold text-sm uppercase tracking-wider'>Account Status</div>
            <div className='text-2xl font-bold'>Premium</div>
          </div>
        </div>
        <div className='space-y-2 mb-6'>
          <div className='flex items-center gap-2 text-sm'>
            <Check className='w-4 h-4' strokeWidth={2} />
            <span>Up to 12 cars</span>
          </div>
          <div className='flex items-center gap-2 text-sm'>
            <Check className='w-4 h-4' strokeWidth={2} />
            <span>Priority support</span>
          </div>
          <div className='flex items-center gap-2 text-sm'>
            <Check className='w-4 h-4' strokeWidth={2} />
            <span>Advanced analytics</span>
          </div>
          <div className='flex items-center gap-2 text-sm'>
            <Check className='w-4 h-4' strokeWidth={2} />
            <span>Custom branding</span>
          </div>
        </div>
        <div className='border-t border-white/20 pt-4 mb-6'>
          <div className='text-sm mb-1'>Next billing date</div>
          <div className='font-bold'>April 15, 2025</div>
        </div>
        <Link href='/pricing'>
          <Button className='w-full bg-white text-primary hover:bg-gray-100'>
            <TrendingUp className='w-4 h-4 mr-2' />
            Upgrade Plan
          </Button>
        </Link>
      </div>
    </div>
  );
}
