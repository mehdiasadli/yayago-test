import { Mail, Phone, Check, FileText, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AccountVerification() {
  return (
    <div className='bg-white border-2 border-gray-200 overflow-hidden'>
      <div className='border-b-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white'>
        <h3 className='text-lg font-bold text-gray-900'>Verification</h3>
      </div>
      <div className='p-6 space-y-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 bg-green-100 flex items-center justify-center'>
              <Mail className='w-4 h-4 text-green-600' strokeWidth={2} />
            </div>
            <span className='text-sm font-semibold text-gray-900'>Email</span>
          </div>
          <span className='text-xs font-bold text-green-600 uppercase flex items-center gap-1'>
            <Check className='w-3.5 h-3.5' strokeWidth={3} />
            Verified
          </span>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 bg-green-100 flex items-center justify-center'>
              <Phone className='w-4 h-4 text-green-600' strokeWidth={2} />
            </div>
            <span className='text-sm font-semibold text-gray-900'>Phone</span>
          </div>
          <span className='text-xs font-bold text-green-600 uppercase flex items-center gap-1'>
            <Check className='w-3.5 h-3.5' strokeWidth={3} />
            Verified
          </span>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 bg-green-100 flex items-center justify-center'>
              <FileText className='w-4 h-4 text-green-600' strokeWidth={2} />
            </div>
            <span className='text-sm font-semibold text-gray-900'>ID Document</span>
          </div>
          <span className='text-xs font-bold text-green-600 uppercase flex items-center gap-1'>
            <Check className='w-3.5 h-3.5' strokeWidth={3} />
            Verified
          </span>
        </div>

        <div className='flex items-center justify-between pt-4 border-t-2 border-gray-100'>
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 bg-gray-100 flex items-center justify-center'>
              <CreditCard className='w-4 h-4 text-gray-400' strokeWidth={2} />
            </div>
            <span className='text-sm font-semibold text-gray-900'>Payment</span>
          </div>
          <Button variant='outline' size='sm' className='text-xs h-8'>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
