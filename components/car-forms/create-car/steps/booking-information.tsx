import { ControllerInput } from '@/components/controller-input';
import { FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { CarFuelPolicySchema } from '@/features/cars/cars.enums';
import { TCreateCarRequest } from '@/features/cars/cars.types';
import { mapEnumLabel } from '@/lib/utils';
import { UseFormReturn } from 'react-hook-form';

interface CreateCarFormBookingInformationProps {
  form: UseFormReturn<TCreateCarRequest>;
}

export default function CreateCarFormBookingInformation({ form }: CreateCarFormBookingInformationProps) {
  return (
    <FieldGroup>
      <ControllerInput
        form={form}
        name='minimumRentalDays'
        label='Minimum Rental Days'
        description='The minimum number of days the car can be rented for'
        renderInput={(field) => (
          <Input type='number' value={field.value || 0} onChange={(e) => field.onChange(Number(e.target.value))} />
        )}
      />

      <FieldGroup className='grid grid-cols-3 gap-2'>
        <ControllerInput
          form={form}
          name='maxMileagePerDay'
          label='Max Mileage Per Day'
          description='The maximum mileage the car can be driven per day'
          renderInput={(field) => (
            <Input type='number' value={field.value || 0} onChange={(e) => field.onChange(Number(e.target.value))} />
          )}
        />

        <ControllerInput
          form={form}
          name='maxMileagePerWeek'
          label='Max Mileage Per Week'
          description='The maximum mileage the car can be driven per week'
          renderInput={(field) => (
            <Input type='number' value={field.value || 0} onChange={(e) => field.onChange(Number(e.target.value))} />
          )}
        />

        <ControllerInput
          form={form}
          name='maxMileagePerMonth'
          label='Max Mileage Per Month'
          description='The maximum mileage the car can be driven per month'
          renderInput={(field) => (
            <Input type='number' value={field.value || 0} onChange={(e) => field.onChange(Number(e.target.value))} />
          )}
        />
      </FieldGroup>

      <FieldGroup className='grid grid-cols-2 gap-2'>
        <ControllerInput
          form={form}
          name='minimumAge'
          label='Minimum Age'
          description='The minimum age of the driver'
          renderInput={(field) => (
            <Input type='number' value={field.value || 0} onChange={(e) => field.onChange(Number(e.target.value))} />
          )}
        />

        <ControllerInput
          form={form}
          name='minimumDrivingExperience'
          label='Minimum Driving Experience'
          description='The minimum driving experience of the driver'
          renderInput={(field) => (
            <Input type='number' value={field.value || 0} onChange={(e) => field.onChange(Number(e.target.value))} />
          )}
        />
      </FieldGroup>

      <ControllerInput
        form={form}
        name='deposit'
        label={
          <FieldLabel className='flex items-center justify-between'>
            <span>Deposit</span>
            <span className='text-sm text-gray-500'>{(100 * (form.watch('deposit') || 0)).toFixed(0)}%</span>
          </FieldLabel>
        }
        description='The deposit amount for the car (0-100%)'
        renderInput={(field) => (
          <Slider
            value={[field.value || 0]}
            onValueChange={(value) => field.onChange(value[0])}
            aria-label='Deposit slider'
            min={0}
            max={1}
            step={0.01}
          />
        )}
      />

      <ControllerInput
        form={form}
        name='transmission'
        label='Transmission Type'
        description='The type of transmission of the car (Manual, Automatic, Semi-Automatic, Dual-Clutch)'
        renderInput={(field) => (
          <RadioGroup
            id={field.name}
            className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'
            value={field.value}
            onValueChange={field.onChange}
          >
            {CarFuelPolicySchema.options.map((item) => (
              <div
                key={`${field.name}-${item}`}
                className='relative flex flex-col flex-1 items-start gap-4 rounded-md border border-input p-3 shadow-xs outline-none has-data-[state=checked]:border-primary/50'
              >
                <div className='flex items-center gap-2'>
                  <RadioGroupItem id={`${field.name}-${item}`} value={item} className='after:absolute after:inset-0' />
                  <Label htmlFor={`${field.name}-${item}`}>{mapEnumLabel(item)}</Label>
                </div>
              </div>
            ))}
          </RadioGroup>
        )}
      />
    </FieldGroup>
  );
}
