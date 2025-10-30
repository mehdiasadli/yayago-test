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
import { AdminCarManagementApi } from '@/features/admin-car-management/admin-car-management.api';
import { useMutation } from '@tanstack/react-query';
import { Loader2, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export default function VehiclesTableDelete({ carId }: { carId: number }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { mutate: deleteCar, isPending } = useMutation({
    mutationFn: async () => {
      const result = await AdminCarManagementApi.deleteCar({ carId });

      if (!result.success) {
        throw new Error(result.message);
      }

      return result.data;
    },
    onSuccess() {
      router.refresh();
      toast.success('Car deleted successfully');
      setOpen(false);
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size='icon' variant='outline'>
          <Trash2 className='w-4 h-4' />
        </Button>
      </DialogTrigger>

      <DialogContent className='max-w-md'>
        <DialogHeader>
          <DialogTitle>Delete Car</DialogTitle>
        </DialogHeader>
        <DialogDescription>Are you sure you want to delete this car? This action cannot be undone.</DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DialogClose>
          <Button variant='destructive' disabled={isPending} onClick={() => deleteCar()}>
            {isPending ? <Loader2 className='w-4 h-4 animate-spin' /> : 'Delete'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
