'use client';

import { AdminUserManagementApi } from '@/features/admin-user-management/admin-user-management.api';
import { TAdminUpdateUserStatusRequest } from '@/features/admin-user-management/admin-user-management.types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
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
import { Button } from '@/components/ui/button';
import { Edit, Loader2 } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function UsersTableStatusChange({ userId, initialActive }: { userId: number; initialActive: boolean }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(initialActive);
  const [reason, setReason] = useState('');

  const { mutate: updateUserStatus, isPending } = useMutation({
    mutationFn: async (data: TAdminUpdateUserStatusRequest) => {
      const result = await AdminUserManagementApi.updateUserStatus(userId, data);

      if (!result.success) {
        throw new Error(result.message);
      }

      return result.data;
    },
    onSuccess() {
      router.refresh();
      toast.success('User status updated successfully');
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
          <Edit className='w-4 h-4' />
        </Button>
      </DialogTrigger>

      <DialogContent className='max-w-md'>
        <DialogHeader>
          <DialogTitle>Update User Status</DialogTitle>
        </DialogHeader>
        <div className='flex items-center gap-2'>
          <Switch checked={active} onCheckedChange={setActive} />
          <Label>Active</Label>
        </div>

        <Textarea placeholder='Reason (optional)' value={reason} onChange={(e) => setReason(e.target.value)} />

        <DialogFooter>
          <DialogClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DialogClose>
          <Button variant='destructive' disabled={isPending} onClick={() => updateUserStatus({ active, reason })}>
            {isPending ? <Loader2 className='w-4 h-4 animate-spin' /> : 'Update'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
