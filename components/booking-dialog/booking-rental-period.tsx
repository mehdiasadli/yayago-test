import { CalendarIcon } from 'lucide-react';
import { FieldError, FieldGroup } from '../ui/field';
import { FieldLabel } from '../ui/field';
import { Field } from '../ui/field';
import { Controller, UseFormReturn } from 'react-hook-form';
import { DateTimePicker } from '../date-time-picker';
import { Badge } from '../ui/badge';
import { Clock } from 'lucide-react';
import { TCreateBookingFormInput } from '@/schemas';
import { addHours } from 'date-fns';

interface BookingRentalPeriodProps {
  form: UseFormReturn<TCreateBookingFormInput>;
  totalDays: number;
}

export default function BookingRentalPeriod({ form, totalDays }: BookingRentalPeriodProps) {
  return (
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
              control={form.control}
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
            <FieldError errors={form.formState.errors.startDateTime ? [form.formState.errors.startDateTime] : []} />
          </Field>

          {/* End Date */}
          <Field>
            <FieldLabel htmlFor='endDate'>
              Return Date <span className='text-destructive'>*</span>
            </FieldLabel>
            <Controller
              control={form.control}
              name='endDateTime'
              render={({ field }) => (
                <DateTimePicker
                  minDate={form.watch('startDateTime') ? addHours(form.watch('startDateTime'), 1) : undefined}
                  value={field.value || new Date()}
                  onChange={(date) => field.onChange(date)}
                  granularity='minute'
                  hourCycle={24}
                />
              )}
            />
            <FieldError errors={form.formState.errors.endDateTime ? [form.formState.errors.endDateTime] : []} />
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
  );
}
