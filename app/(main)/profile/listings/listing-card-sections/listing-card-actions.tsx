import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Edit, BarChart3, Eye, Share2, Copy, Trash2, CheckCircle, EyeOff } from 'lucide-react';
import DeleteListingButton from './delete-listing-button';
import ShareButton from '@/components/share-button';

interface ListingCardActionsProps {
  id: number;
  status: 'active' | 'inactive' | 'blocked' | 'rented' | 'pending';
}

export default function ListingCardActions({ id, status }: ListingCardActionsProps) {
  return (
    <div className='flex flex-wrap gap-3'>
      <Link href={`/profile/listings/${id}/edit`}>
        <Button size='sm' variant='outline' className='hover:bg-gray-50'>
          <Edit className='w-4 h-4 mr-2' />
          Edit
        </Button>
      </Link>

      <Button size='sm' variant='outline' className='hover:bg-gray-50'>
        <BarChart3 className='w-4 h-4 mr-2' />
        Analytics
      </Button>

      <Link href={`/cars/rent/${id}`} target='_blank'>
        <Button size='sm' variant='outline' className='hover:bg-gray-50'>
          <Eye className='w-4 h-4 mr-2' />
          Preview
        </Button>
      </Link>

      <ShareButton title='Share this listing' url={`${process.env.AUTH_URL}/cars/rent/${id}`}>
        <Button size='sm' variant='outline' className='hover:bg-gray-50'>
          <Share2 className='w-4 h-4 mr-2' />
          Share
        </Button>
      </ShareButton>

      <Button size='sm' variant='outline' className='hover:bg-gray-50'>
        <Copy className='w-4 h-4 mr-2' />
        Duplicate
      </Button>

      {status === 'active' && (
        <Button size='sm' variant='outline' className='hover:bg-gray-50'>
          <EyeOff className='w-4 h-4 mr-2' />
          Deactivate
        </Button>
      )}

      {status === 'inactive' && (
        <Button size='sm' variant='outline' className='hover:bg-gray-50 text-green-700 border-green-300'>
          <CheckCircle className='w-4 h-4 mr-2' />
          Activate
        </Button>
      )}

      <DeleteListingButton id={id} />
    </div>
  );
}
