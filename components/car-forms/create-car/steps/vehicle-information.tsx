import ColorSelector from '@/components/color-selector';
import { ControllerInput } from '@/components/controller-input';
import { FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  CarDriveTypeSchema,
  CarFuelTypeEnumSchema,
  CarTransmissionEnumSchema,
  CarTypeEnumSchema,
} from '@/features/cars/cars.enums';
import { TCreateCarRequest } from '@/features/cars/cars.types';
import { mapEnumLabel } from '@/lib/utils';
import { UseFormReturn } from 'react-hook-form';

interface CreateCarFormVehicleInformationProps {
  form: UseFormReturn<TCreateCarRequest>;
}

export default function CreateCarFormVehicleInformation({ form }: CreateCarFormVehicleInformationProps) {
  return (
    <FieldGroup>
      <ControllerInput
        form={form}
        name='carType'
        label='Car Category'
        description='Select the category of the car'
        renderInput={(field) => (
          <RadioGroup
            id={field.name}
            className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'
            value={field.value}
            onValueChange={field.onChange}
          >
            {CarTypeEnumSchema.options.map((item) => (
              <div
                key={`${field.name}-${item}`}
                className='relative flex flex-col flex-1 items-start gap-4 rounded-md border border-input p-3 shadow-xs outline-none has-data-[state=checked]:border-primary/50'
              >
                <div className='flex items-center gap-2'>
                  <RadioGroupItem id={`${field.name}-${item}`} value={item} className='after:absolute after:inset-0' />
                  <Label htmlFor={`${field.name}-${item}`}>{item}</Label>
                </div>
              </div>
            ))}
          </RadioGroup>
        )}
      />

      <FieldGroup className='grid grid-cols-2 md:grid-cols-3 gap-2'>
        <ControllerInput
          form={form}
          name='horsePower'
          label='Horse Power'
          description='The power of the engine in horsepower'
          renderInput={(field) => (
            <Input type='number' value={field.value || 0} onChange={(e) => field.onChange(Number(e.target.value))} />
          )}
        />

        <ControllerInput
          form={form}
          name='torque'
          label='Torque'
          description='The torque of the engine in Newton meters'
          renderInput={(field) => (
            <Input type='number' value={field.value || 0} onChange={(e) => field.onChange(Number(e.target.value))} />
          )}
        />

        <ControllerInput
          form={form}
          name='maxSpeed'
          label='Max Speed'
          description='The maximum speed of the car in kilometers per hour'
          renderInput={(field) => (
            <Input type='number' value={field.value || 0} onChange={(e) => field.onChange(Number(e.target.value))} />
          )}
        />
      </FieldGroup>

      <FieldGroup className='grid grid-cols-2 gap-2'>
        <ControllerInput
          form={form}
          name='doorCount'
          label='Door Count'
          description='The number of doors of the car (2, 4, 5, etc.)'
          renderInput={(field) => (
            <Input type='number' value={field.value || 0} onChange={(e) => field.onChange(Number(e.target.value))} />
          )}
        />

        <ControllerInput
          form={form}
          name='seatCount'
          label='Seat Count'
          description='The number of seats of the car (2, 4, 5, etc.)'
          renderInput={(field) => (
            <Input type='number' value={field.value || 0} onChange={(e) => field.onChange(Number(e.target.value))} />
          )}
        />
      </FieldGroup>

      <ControllerInput
        form={form}
        name='driveType'
        label='Drive Type'
        description='The type of drive of the car (Front, Rear, All, Four Wheel Drive)'
        renderInput={(field) => (
          <RadioGroup
            id={field.name}
            className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'
            value={field.value}
            onValueChange={field.onChange}
          >
            {CarDriveTypeSchema.options.map((item) => (
              <div
                key={`${field.name}-${item}`}
                className='relative flex flex-col flex-1 items-start gap-4 rounded-md border border-input p-3 shadow-xs outline-none has-data-[state=checked]:border-primary/50'
              >
                <div className='flex items-center gap-2'>
                  <RadioGroupItem id={`${field.name}-${item}`} value={item} className='after:absolute after:inset-0' />
                  <Label htmlFor={`${field.name}-${item}`}>
                    {mapEnumLabel(item, {
                      joinWith: ' x ',
                    })}
                  </Label>
                </div>
              </div>
            ))}
          </RadioGroup>
        )}
      />

      <ControllerInput
        form={form}
        name='fuelType'
        label='Fuel Type'
        description='The type of fuel of the car (Petrol, Diesel, Electric, Hybrid)'
        renderInput={(field) => (
          <RadioGroup
            id={field.name}
            className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'
            value={field.value}
            onValueChange={field.onChange}
          >
            {CarFuelTypeEnumSchema.options.map((item) => (
              <div
                key={`${field.name}-${item}`}
                className='relative flex flex-col flex-1 items-start gap-4 rounded-md border border-input p-3 shadow-xs outline-none has-data-[state=checked]:border-primary/50'
              >
                <div className='flex items-center gap-2'>
                  <RadioGroupItem id={`${field.name}-${item}`} value={item} className='after:absolute after:inset-0' />
                  <Label htmlFor={`${field.name}-${item}`}>
                    {mapEnumLabel(item, {
                      joinWith: '-',
                      capitalization: {
                        rest: ['l'],
                      },
                    })}
                  </Label>
                </div>
              </div>
            ))}
          </RadioGroup>
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
            {CarTransmissionEnumSchema.options.map((item) => (
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

      <FieldGroup className='grid grid-cols-2 gap-2'>
        <ControllerInput
          form={form}
          name='engineVolume'
          label='Engine Volume'
          description='The volume of the engine in liters'
          renderInput={(field) => (
            <Input
              placeholder='Enter the engine volume'
              value={field.value || ''}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />
      </FieldGroup>

      <ControllerInput
        form={form}
        name='color'
        label='Color'
        description='The color of the car'
        renderInput={(field) => <ColorSelector value={field.value || ''} onChange={field.onChange} />}
      />
    </FieldGroup>
  );
}
