import { DialogHeader, DialogTitle } from '../ui/dialog';

export default function BookingDialogTitle() {
  return (
    <DialogHeader className='p-6 pb-4'>
      <DialogTitle className='text-2xl font-bold'>Complete Your Booking</DialogTitle>
      <p className='text-gray-600 text-sm mt-1'>Just a few more details and you'll be ready to hit the road!</p>
    </DialogHeader>
  );
}
