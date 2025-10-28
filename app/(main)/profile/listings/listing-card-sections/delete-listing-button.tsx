'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CarsApi } from '@/features/cars/cars.api';
import { carsQueryKeys } from '@/features/cars/cars.queries';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Loader2, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface DeleteListingButtonProps {
  id: number;
}

export default function DeleteListingButton({ id }: DeleteListingButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: async (id: number) => {
      const response = await CarsApi.deleteCar({ id });

      if (!response.success) {
        throw new Error(response.message);
      }

      return response.data;
    },
    onSuccess: () => {
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: carsQueryKeys.index() });
      router.refresh();
    },
  });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size='sm' variant='outline' className='hover:bg-red-50 text-red-700 border-red-300'>
          <Trash2 className='w-4 h-4 mr-2' />
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader>
          <DialogTitle>Delete Listing</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete this listing? This action cannot be undone.
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='outline' className='hover:bg-gray-50 text-gray-700 border-gray-300'>
              Cancel
            </Button>
          </DialogClose>
          <Button
            variant='destructive'
            className='hover:bg-red-50 text-white hover:text-red-700 border-red-300'
            onClick={() => mutate(id)}
            disabled={isPending}
          >
            {isPending ? <Loader2 className='w-4 h-4 animate-spin' /> : 'Delete'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
