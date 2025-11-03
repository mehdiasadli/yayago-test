import { ControllerInput } from '@/components/controller-input';
import { FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { TCreateCarRequest } from '@/features/cars/cars.types';
import { UseFormReturn } from 'react-hook-form';
import { TagsInput } from '@/components/tags-input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface CreateCarFormMainInformationProps {
  form: UseFormReturn<TCreateCarRequest>;
}

export default function CreateCarFormMainInformation({ form }: CreateCarFormMainInformationProps) {
  return (
    <FieldGroup>
      <ControllerInput
        form={form}
        name='brand'
        label='Brand'
        renderInput={(field) => <Input {...field} placeholder='Enter the brand of the car' />}
      />
      <ControllerInput
        form={form}
        name='model'
        label='Model'
        renderInput={(field) => <Input {...field} placeholder='Enter the model of the car' />}
      />
      <ControllerInput
        form={form}
        name='year'
        label='Year'
        renderInput={(field) => <Input {...field} type='number' placeholder='Enter the production year of the car' />}
      />

      <ControllerInput
        form={form}
        name='description'
        label='Description'
        description='Write down a description of the car'
        renderInput={(field) => (
          <Textarea
            placeholder='Enter the description here'
            value={field.value || ''}
            onChange={(e) => field.onChange(e.target.value)}
          />
        )}
      />

      <ControllerInput
        form={form}
        name='features'
        label='Features'
        description='Add features of the car'
        renderInput={(field) => (
          <TagsInput
            id={field.name}
            placeholder='Add a feature and press enter'
            tags={field.value || []}
            setTags={field.onChange}
          />
        )}
      />

      <ControllerInput
        form={form}
        name='featured'
        renderInput={(field) => (
          <div className='relative flex w-full items-start gap-2 rounded-md border border-input p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50'>
            <Switch
              id={field.name}
              checked={field.value || false}
              onCheckedChange={(checked) => field.onChange(checked)}
              onBlur={field.onBlur}
              className='order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 data-[state=checked]:[&_span]:translate-x-2 data-[state=checked]:[&_span]:rtl:-translate-x-2'
            />
            <div className='grid grow gap-2'>
              <Label htmlFor={field.name}>Featured</Label>
              <p className='text-xs text-muted-foreground'>Show this car in the featured section.</p>
            </div>
          </div>
        )}
      />
    </FieldGroup>
  );
}
