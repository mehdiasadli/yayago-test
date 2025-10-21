import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import Link from 'next/link';

export default function EditProfileButton() {
  return (
    <Link href='/profile/settings'>
      <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
        <Edit className='w-4 h-4 mr-2' />
        Edit Profile
      </Button>
    </Link>
  );
}
