import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function AddNewCarButton() {
  return (
    <Link href='/profile/listings/new'>
      <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
        <Plus className='w-4 h-4 mr-2' />
        Add New Car
      </Button>
    </Link>
  );
}
