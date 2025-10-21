// import { Button } from '@/components/ui/button';
// import { Edit } from 'lucide-react';
// import Link from 'next/link';

export default function ProfilePageHeader() {
  return (
    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
      <div>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>My Profile</h1>
        <p className='text-gray-600'>Manage your personal information and account settings</p>
      </div>
      {/* <Link href='/profile/settings'>
        <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
          <Edit className='w-4 h-4 mr-2' />
          Edit Profile
        </Button>
      </Link> */}
    </div>
  );
}
