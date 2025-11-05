'use client';

import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { differenceInDays, addDays, isBefore, startOfDay, addHours } from 'date-fns';
import Image from 'next/image';
import { Calendar as CalendarIcon, Clock, CreditCard, MapPin, CheckCircle2, X } from 'lucide-react';
import { TGetCarByIdResponse } from '@/features/cars/cars.types';
import { Button } from '@/components/ui/button';
import { Field, FieldLabel, FieldGroup, FieldError, FieldDescription } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import { DateTimePicker } from './date-time-picker';
import { useSession } from 'next-auth/react';

// Booking form schema
const bookingFormSchema = z
  .object({
    startDateTime: z.date({
      required_error: 'Please select a start date',
    }),
    endDateTime: z.date({
      required_error: 'Please select an end date',
    }),
    pickupTime: z.string().min(1, 'Pickup time is required'),
    returnTime: z.string().min(1, 'Return time is required'),
    fullName: z.string().min(2, 'Full name must be at least 2 characters').max(100),
    phoneNumber: z.string().min(10, 'Please enter a valid phone number'),
    notes: z.string().optional(),
  })
  .refine((data) => !isBefore(data.endDateTime, data.startDateTime), {
    message: 'End date must be after or equal to start date',
    path: ['endDate'],
  });

type BookingFormData = z.infer<typeof bookingFormSchema>;

interface BookingDialogProps {
  car: TGetCarByIdResponse;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookingDialog({ car, open, onOpenChange }: BookingDialogProps) {
  const { data: session, status } = useSession();

  const [totalDays, setTotalDays] = useState(1);
  const [totalPrice, setTotalPrice] = useState(car.pricePerDay);
  const [hasSetDefaultValues, setHasSetDefaultValues] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      startDateTime: addDays(startOfDay(new Date()), 1),
      endDateTime: addDays(startOfDay(new Date()), 2),
      fullName: session?.user?.fullName || '',
      phoneNumber: session?.user?.phoneNumber || '',
      notes: '',
    },
  });

  useEffect(() => {
    if (status === 'authenticated' && !hasSetDefaultValues) {
      setValue('fullName', session?.user?.fullName || '');
      setValue('phoneNumber', session?.user?.phoneNumber || '');
      setHasSetDefaultValues(true);
    }
  }, [status, session, setValue, hasSetDefaultValues]);

  const startDateTime = watch('startDateTime');
  const endDateTime = watch('endDateTime');

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

  const onSubmit = async (data: BookingFormData) => {
    try {
      // TODO: Integrate with backend API to create booking
      console.log('Booking data:', {
        ...data,
        carId: car.id,
        totalPrice,
        totalDays,
        currency: car.currency,
      });

      // TODO: Redirect to Stripe checkout
      toast.success('Redirecting to payment...');

      // Simulate payment redirect
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.info('Stripe payment integration coming soon!');

      // Reset form and close dialog on success
      reset();
      onOpenChange(false);
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Failed to process booking. Please try again.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-6xl p-0'>
        <DialogHeader className='p-6 pb-4'>
          <DialogTitle className='text-2xl font-bold'>Complete Your Booking</DialogTitle>
          <p className='text-gray-600 text-sm mt-1'>Just a few more details and you'll be ready to hit the road!</p>
        </DialogHeader>

        <ScrollArea className='max-h-[calc(90vh-100px)]'>
          <div className='px-6 pb-6'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              {/* Main Form - Left Side */}
              <div className='lg:col-span-2'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                  {/* Rental Period Section */}
                  <div className='border rounded-lg p-5 bg-gray-50/50'>
                    <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
                      <CalendarIcon className='w-5 h-5 text-primary' />
                      Rental Period
                    </h3>

                    <FieldGroup>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {/* Start Date & Time */}
                        <Field>
                          <FieldLabel htmlFor='startDate'>
                            Pickup Date & Time <span className='text-destructive'>*</span>
                          </FieldLabel>
                          <Controller
                            control={control}
                            name='startDateTime'
                            render={({ field }) => (
                              <DateTimePicker
                                // set hours, minutes, seconds to 0
                                minDate={new Date(new Date().setHours(0, 0, 0, 0))}
                                value={field.value || new Date()}
                                onChange={(date) => field.onChange(date)}
                                granularity='minute'
                                hourCycle={24}
                              />
                            )}
                          />
                          <FieldError errors={errors.startDateTime ? [errors.startDateTime] : []} />
                        </Field>

                        {/* End Date */}
                        <Field>
                          <FieldLabel htmlFor='endDate'>
                            Return Date <span className='text-destructive'>*</span>
                          </FieldLabel>
                          <Controller
                            control={control}
                            name='endDateTime'
                            render={({ field }) => (
                              <DateTimePicker
                                minDate={startDateTime ? addHours(startDateTime, 1) : undefined}
                                value={field.value || new Date()}
                                onChange={(date) => field.onChange(date)}
                                granularity='minute'
                                hourCycle={24}
                              />
                            )}
                          />
                          <FieldError errors={errors.endDateTime ? [errors.endDateTime] : []} />
                        </Field>
                      </div>

                      <div className='bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4'>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-2'>
                            <Clock className='w-5 h-5 text-primary' />
                            <span className='font-medium'>Total Duration</span>
                          </div>
                          <Badge variant='secondary' className='text-base font-semibold'>
                            {totalDays} {totalDays === 1 ? 'Day' : 'Days'}
                          </Badge>
                        </div>
                      </div>
                    </FieldGroup>
                  </div>

                  {/* Contact Information Section */}
                  <div className='border rounded-lg p-5 bg-gray-50/50'>
                    <h3 className='text-lg font-semibold mb-4'>Contact Information</h3>

                    <FieldGroup>
                      {/* Full Name */}
                      <Field>
                        <FieldLabel htmlFor='fullName'>
                          Full Name <span className='text-destructive'>*</span>
                        </FieldLabel>
                        <Controller
                          control={control}
                          name='fullName'
                          render={({ field }) => <Input id='fullName' placeholder='John Doe' {...field} />}
                        />
                        <FieldError errors={errors.fullName ? [errors.fullName] : []} />
                      </Field>

                      {/* Phone Number */}
                      <Field>
                        <FieldLabel htmlFor='phoneNumber'>
                          Phone Number <span className='text-destructive'>*</span>
                        </FieldLabel>
                        <Controller
                          control={control}
                          name='phoneNumber'
                          render={({ field }) => (
                            <Input id='phoneNumber' type='tel' placeholder='+994 XX XXX XX XX' {...field} />
                          )}
                        />
                        <FieldDescription>We'll use this to confirm your booking and send updates</FieldDescription>
                        <FieldError errors={errors.phoneNumber ? [errors.phoneNumber] : []} />
                      </Field>

                      {/* Additional Notes */}
                      <Field>
                        <FieldLabel htmlFor='notes'>Additional Notes (Optional)</FieldLabel>
                        <Controller
                          control={control}
                          name='notes'
                          render={({ field }) => (
                            <Input id='notes' placeholder='Any special requests or requirements...' {...field} />
                          )}
                        />
                      </Field>
                    </FieldGroup>
                  </div>

                  {/* Submit Button - Mobile Only */}
                  <div className='lg:hidden'>
                    <Button type='submit' size='lg' className='w-full' disabled={isSubmitting}>
                      <CreditCard className='w-5 h-5 mr-2' />
                      {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
                    </Button>
                  </div>
                </form>
              </div>

              {/* Booking Summary - Right Side */}
              <div className='lg:col-span-1'>
                <div className='border rounded-lg p-5 bg-white sticky top-0'>
                  <h3 className='text-lg font-semibold mb-4'>Booking Summary</h3>

                  {/* Car Info */}
                  <div className='mb-4'>
                    <div className='relative h-40 rounded-lg overflow-hidden mb-3'>
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
                  <div className='space-y-2'>
                    <div className='flex justify-between text-sm'>
                      <span className='text-gray-600'>
                        {car.pricePerDay} {car.currency} × {totalDays} {totalDays === 1 ? 'day' : 'days'}
                      </span>
                      <span className='font-medium'>
                        {totalPrice} {car.currency}
                      </span>
                    </div>

                    {car.deposit && car.deposit > 0 && (
                      <div className='flex justify-between text-sm'>
                        <span className='text-gray-600'>Security Deposit</span>
                        <span className='font-medium'>
                          {car.deposit} {car.currency}
                        </span>
                      </div>
                    )}

                    <Separator />

                    <div className='flex justify-between text-base font-bold'>
                      <span>Total</span>
                      <span className='text-primary'>
                        {totalPrice + (car.deposit || 0)} {car.currency}
                      </span>
                    </div>

                    {car.deposit && car.deposit > 0 && (
                      <p className='text-xs text-gray-500 mt-2'>
                        * Security deposit of {car.deposit} {car.currency} will be refunded after return
                      </p>
                    )}
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
                    disabled={isSubmitting}
                    onClick={handleSubmit(onSubmit)}
                  >
                    <CreditCard className='w-5 h-5 mr-2' />
                    {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
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
