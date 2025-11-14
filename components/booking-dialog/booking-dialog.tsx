'use client';

import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { differenceInDays, addDays, startOfDay } from 'date-fns';
import Image from 'next/image';
import { CreditCard, MapPin, CheckCircle2, LogIn, Shield, Baby, UserPlus, Plane, Clock } from 'lucide-react';
import { TGetCarByIdResponse } from '@/features/cars/cars.types';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import BookingDialogTitle from './booking-dialog-title';
import BookingRentalPeriod from './booking-rental-period';
import { CreateBookingFormInputSchema, TCreateBookingFormInput, TCreateBookingInput } from '@/schemas';
import { useMutation } from '@tanstack/react-query';
import { BookingsApi } from '@/features/bookings/bookings.api';

interface BookingDialogProps {
  car: TGetCarByIdResponse;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookingDialog({ car, open, onOpenChange }: BookingDialogProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [totalDays, setTotalDays] = useState(1);
  const [totalPrice, setTotalPrice] = useState(car.pricePerDay);

  const { mutate: createBooking } = useMutation({
    mutationFn: async (data: TCreateBookingFormInput) => {
      if (!session?.user) {
        throw new Error('User not authenticated');
      }

      const { startDateTime, endDateTime, carId } = data;

      // format time format to "HH:mm"
      const pickupTime = startDateTime.toISOString().split('T')[1].split(':').slice(0, 2).join(':');
      const returnTime = endDateTime.toISOString().split('T')[1].split(':').slice(0, 2).join(':');

      const response = await BookingsApi.createBooking({
        carId,
        userId: parseInt(session.user.id || '0'),
        fullName: session.user.fullName,
        startDate: startDateTime.toISOString().split('T')[0],
        endDate: endDateTime.toISOString().split('T')[0],
        pickupTime,
        returnTime,
      });

      if (!response.success) {
        throw new Error(response.message);
      }

      return response.data;
    },
    onSuccess: (data) => {
      const title = encodeURIComponent(
        `${car.brand} ${car.model} ${car.year} - ${totalDays} ${totalDays === 1 ? 'day' : 'days'}`
      );

      const successRedirectUrl = encodeURIComponent(`${window.location.origin}/profile/bookings`);

      router.push(
        `/checkout/booking?email=${session?.user?.email}&userId=${data.userId}&amountAED=${data.totalPrice}&bookingId=${data.id}&carId=${data.carId}&carTitle=${title}&successRedirectUrl=${successRedirectUrl}`
      );
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : 'Failed to create booking');
    },
  });

  const form = useForm<TCreateBookingFormInput>({
    resolver: zodResolver(CreateBookingFormInputSchema),
    defaultValues: {
      startDateTime: addDays(startOfDay(new Date()), 1),
      endDateTime: addDays(startOfDay(new Date()), 2),
      carId: car.id,
      childSeat: false,
      additionalDriver: false,
      fullInsurance: false,
      airportPickup: false,
      flexibleReturn: false,
    },
  });

  const startDateTime = form.watch('startDateTime');
  const endDateTime = form.watch('endDateTime');

  // Calculate total days and price
  useEffect(() => {
    if (startDateTime && endDateTime) {
      const days = Math.max(1, differenceInDays(endDateTime, startDateTime) + 1);
      setTotalDays(days);

      // Calculate price based on duration
      let price = 0;
      if (car.pricePerMonth && days >= 30) {
        const months = Math.floor(days / 30);
        const remainingDays = days % 30;
        price = months * car.pricePerMonth;

        if (remainingDays > 0) {
          if (car.pricePerWeek && remainingDays >= 7) {
            const weeks = Math.floor(remainingDays / 7);
            const extraDays = remainingDays % 7;
            price += weeks * car.pricePerWeek + extraDays * car.pricePerDay;
          } else {
            price += remainingDays * car.pricePerDay;
          }
        }
      } else if (car.pricePerWeek && days >= 7) {
        const weeks = Math.floor(days / 7);
        const remainingDays = days % 7;
        price = weeks * car.pricePerWeek + remainingDays * car.pricePerDay;
      } else {
        price = days * car.pricePerDay;
      }

      setTotalPrice(price);
    }
  }, [startDateTime, endDateTime, car.pricePerDay, car.pricePerWeek, car.pricePerMonth]);

  const onSubmit = async (data: TCreateBookingFormInput) => {
    createBooking(data);
  };

  if (status === 'unauthenticated') {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className='max-w-6xl p-0'>
          <BookingDialogTitle />
          <div className='px-6 pb-6'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              <div className='lg:col-span-2'>
                <p className='text-gray-600 text-sm mt-1'>Please sign in to complete your booking.</p>
                <Button
                  onClick={() =>
                    router.push(
                      `/auth?callback_url=${encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL + '/cars/rent/' + car.id)}`
                    )
                  }
                  className='w-full mt-4'
                >
                  <LogIn className='w-5 h-5 mr-2' />
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-6xl p-0'>
        <BookingDialogTitle />

        <ScrollArea className='max-h-[calc(90vh-100px)]'>
          <div className='px-6 pb-6'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              {/* Main Form - Left Side */}
              <div className='lg:col-span-2 space-y-6'>
                <form
                  onSubmit={form.handleSubmit(onSubmit, (errors) => {
                    console.log(errors);
                  })}
                  className='space-y-6'
                >
                  {/* Rental Period Section */}
                  <BookingRentalPeriod form={form} totalDays={totalDays} />

                  {/* Extras Section */}
                  <div className='border rounded-lg p-5 bg-white'>
                    <h3 className='text-lg font-semibold mb-3 flex items-center gap-2'>
                      <Shield className='w-5 h-5 text-primary' />
                      Booking options
                    </h3>
                    <p className='text-xs text-gray-500 mb-4'>
                      These options are visual for now and help your guests understand what&apos;s available. They
                      won&apos;t affect the final price yet.
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                      <label className='flex items-start gap-3 text-sm text-gray-700'>
                        <Checkbox
                          checked={form.watch('childSeat')}
                          onCheckedChange={(val) => form.setValue('childSeat', Boolean(val))}
                        />
                        <span>
                          <span className='font-medium flex items-center gap-1'>
                            <Baby className='w-4 h-4 text-primary' />
                            Child seat
                          </span>
                          <span className='block text-xs text-gray-500'>
                            Add a comfortable seat for younger passengers.
                          </span>
                        </span>
                      </label>

                      <label className='flex items-start gap-3 text-sm text-gray-700'>
                        <Checkbox
                          checked={form.watch('additionalDriver')}
                          onCheckedChange={(val) => form.setValue('additionalDriver', Boolean(val))}
                        />
                        <span>
                          <span className='font-medium flex items-center gap-1'>
                            <UserPlus className='w-4 h-4 text-primary' />
                            Additional driver
                          </span>
                          <span className='block text-xs text-gray-500'>Allow a second driver on your rental.</span>
                        </span>
                      </label>

                      <label className='flex items-start gap-3 text-sm text-gray-700'>
                        <Checkbox
                          checked={form.watch('fullInsurance')}
                          onCheckedChange={(val) => form.setValue('fullInsurance', Boolean(val))}
                        />
                        <span>
                          <span className='font-medium flex items-center gap-1'>
                            <Shield className='w-4 h-4 text-primary' />
                            Full insurance
                          </span>
                          <span className='block text-xs text-gray-500'>Extra peace of mind for your journey.</span>
                        </span>
                      </label>

                      <label className='flex items-start gap-3 text-sm text-gray-700'>
                        <Checkbox
                          checked={form.watch('airportPickup')}
                          onCheckedChange={(val) => form.setValue('airportPickup', Boolean(val))}
                        />
                        <span>
                          <span className='font-medium flex items-center gap-1'>
                            <Plane className='w-4 h-4 text-primary' />
                            Airport pickup
                          </span>
                          <span className='block text-xs text-gray-500'>
                            Pick up or drop off at the airport (subject to availability).
                          </span>
                        </span>
                      </label>

                      <label className='flex items-start gap-3 text-sm text-gray-700'>
                        <Checkbox
                          checked={form.watch('flexibleReturn')}
                          onCheckedChange={(val) => form.setValue('flexibleReturn', Boolean(val))}
                        />
                        <span>
                          <span className='font-medium flex items-center gap-1'>
                            <Clock className='w-4 h-4 text-primary' />
                            Flexible return time
                          </span>
                          <span className='block text-xs text-gray-500'>
                            Extra flexibility around your return schedule.
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button - Mobile Only */}
                  <div className='lg:hidden'>
                    <Button type='submit' size='lg' className='w-full' disabled={form.formState.isSubmitting}>
                      <CreditCard className='w-5 h-5 mr-2' />
                      {form.formState.isSubmitting ? 'Processing...' : 'Proceed to Payment'}
                    </Button>
                  </div>
                </form>
              </div>

              {/* Booking Summary - Right Side */}
              <div className='lg:col-span-1'>
                <div className='border rounded-2xl p-5 bg-white sticky top-0 shadow-sm'>
                  <h3 className='text-lg font-semibold mb-4'>Booking summary</h3>

                  {/* Car Info */}
                  <div className='mb-5'>
                    <div className='relative h-40 rounded-xl overflow-hidden mb-3'>
                      <Image
                        src={car.primaryImageUrl || '/placeholder-car.jpg'}
                        alt={`${car.brand} ${car.model}`}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <h4 className='font-semibold text-base'>
                      {car.year} {car.brand} {car.model}
                    </h4>
                    <div className='flex items-center gap-2 text-xs text-gray-600 mt-1'>
                      <MapPin className='w-3 h-3' />
                      Available in Dubai
                    </div>
                  </div>

                  <Separator className='my-4' />

                  {/* Price Breakdown */}
                  <div className='space-y-2 mb-4'>
                    <div className='flex justify-between text-sm'>
                      <span className='text-gray-600'>
                        {car.pricePerDay} {car.currency} × {totalDays} {totalDays === 1 ? 'day' : 'days'}
                      </span>
                      <span className='font-medium'>
                        {totalPrice} {car.currency}
                      </span>
                    </div>

                    <div className='flex justify-between text-sm'>
                      <span className='text-gray-600'>Security Deposit</span>
                      <span className='font-medium'>{car.deposit ? `${car.deposit} ${car.currency}` : 'Free'}</span>
                    </div>

                    <Separator />

                    <div className='flex justify-between text-base font-bold'>
                      <span>Total</span>
                      <span className='text-primary'>
                        {totalPrice + (car.deposit || 0)} {car.currency}
                      </span>
                    </div>

                    <p className='text-xs text-gray-500 mt-2'>
                      * Security deposit of {car.deposit} {car.currency} will be refunded after return
                    </p>
                  </div>

                  <Separator className='my-4' />

                  {/* What's Included */}
                  <div className='space-y-2'>
                    <h4 className='font-semibold text-sm'>What's included:</h4>
                    <ul className='space-y-1.5 text-xs text-gray-600'>
                      <li className='flex items-start gap-2'>
                        <CheckCircle2 className='w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0' />
                        <span>24/7 customer support</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <CheckCircle2 className='w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0' />
                        <span>Insurance coverage</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <CheckCircle2 className='w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0' />
                        <span>Free cancellation up to 24h before</span>
                      </li>
                    </ul>
                  </div>

                  {/* Submit Button - Desktop */}
                  <Button
                    type='submit'
                    size='lg'
                    className='w-full mt-5 hidden lg:flex'
                    disabled={form.formState.isSubmitting}
                    onClick={form.handleSubmit(onSubmit)}
                  >
                    <CreditCard className='w-5 h-5 mr-2' />
                    {form.formState.isSubmitting ? 'Processing...' : 'Proceed to Payment'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
