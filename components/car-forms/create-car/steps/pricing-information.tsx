import { ControllerInput } from '@/components/controller-input';
import { FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TCreateCarRequest } from '@/features/cars/cars.types';
import { UseFormReturn } from 'react-hook-form';

interface CreateCarFormPricingInformationProps {
  form: UseFormReturn<TCreateCarRequest>;
  currencies: string[];
}

export default function CreateCarFormPricingInformation({ form, currencies }: CreateCarFormPricingInformationProps) {
  return (
    <FieldGroup>
      <ControllerInput
        form={form}
        name='currency'
        label='Currency'
        description='The currency of the car'
        renderInput={(field) => (
          <Select value={field.value} onValueChange={(value) => field.onChange(value)}>
            <SelectTrigger>
              <SelectValue placeholder='Select currency' />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      <FieldGroup className='grid grid-cols-3'>
        <ControllerInput
          form={form}
          name='pricePerDay'
          label='Price Per Day'
          description={`${form.watch('pricePerDay') || 100} ${form.watch('currency')} / day`}
          renderInput={(field) => (
            <Input type='number' value={field.value || 100} onChange={(e) => field.onChange(Number(e.target.value))} />
          )}
        />
        <ControllerInput
          form={form}
          name='pricePerWeek'
          label='Price Per Week'
          description={`~${((form.watch('pricePerWeek') || 500) / 7).toFixed(2)} ${form.watch('currency')} / day`}
          renderInput={(field) => (
            <Input type='number' value={field.value || 500} onChange={(e) => field.onChange(Number(e.target.value))} />
          )}
        />
        <ControllerInput
          form={form}
          name='pricePerMonth'
          label='Price Per Month'
          description={`~${((form.watch('pricePerMonth') || 2000) / 30).toFixed(2)} ${form.watch('currency')} / day`}
          renderInput={(field) => (
            <Input type='number' value={field.value || 2000} onChange={(e) => field.onChange(Number(e.target.value))} />
          )}
        />
      </FieldGroup>
    </FieldGroup>
  );
}
