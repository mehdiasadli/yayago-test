import {
  Controller,
  ControllerFieldState,
  ControllerProps,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseFormReturn,
  UseFormStateReturn,
} from 'react-hook-form';
import { Field, FieldDescription, FieldError, FieldLabel } from './ui/field';

interface ControllerInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
> {
  controllerProps?: Omit<ControllerProps<TFieldValues, TName, TTransformedValues>, 'control' | 'name' | 'render'>;
  form: UseFormReturn<TFieldValues>;
  name: TName;
  label?: string | React.ReactNode;
  description?: string | React.ReactNode;
  descriptionPosition?: 'before-label' | 'after-label' | 'before-error' | 'after-error';
  hideError?: boolean;
  descriptionProps?: Omit<React.ComponentProps<typeof FieldDescription>, 'className'>;
  fieldProps?: Omit<React.ComponentProps<typeof Field>, 'data-invalid' | 'className'>;
  errorProps?: Omit<React.ComponentProps<typeof FieldError>, 'errors' | 'className'>;
  labelProps?: Omit<React.ComponentProps<typeof FieldLabel>, 'htmlFor' | 'className'>;
  classNames?: {
    field?: string;
    label?: string;
    error?: string;
    description?: string;
  };
  renderInput: (
    field: ControllerRenderProps<TFieldValues, TName>,
    fieldState: ControllerFieldState,
    formState: UseFormStateReturn<TFieldValues>
  ) => React.ReactNode;
}

export function ControllerInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
>({
  renderInput,
  form,
  name,
  label,
  controllerProps,
  classNames,
  fieldProps,
  errorProps,
  labelProps,
  descriptionPosition = 'after-label',
  description,
  descriptionProps,
  hideError = false,
}: ControllerInputProps<TFieldValues, TName, TTransformedValues>) {
  return (
    <Controller
      {...controllerProps}
      control={form.control}
      name={name}
      render={({ field, fieldState, formState }) => (
        <Field data-invalid={fieldState.invalid} className={classNames?.field} {...fieldProps}>
          {descriptionPosition === 'before-label' && (
            <Desc description={description} descriptionProps={descriptionProps} className={classNames?.description} />
          )}

          {typeof label === 'string' ? (
            <FieldLabel htmlFor={field.name} className={classNames?.label} {...labelProps}>
              {label}
            </FieldLabel>
          ) : (
            label || null
          )}

          {descriptionPosition === 'after-label' && (
            <Desc description={description} descriptionProps={descriptionProps} className={classNames?.description} />
          )}

          {renderInput(field, fieldState, formState)}

          {descriptionPosition === 'before-error' && (
            <Desc description={description} descriptionProps={descriptionProps} className={classNames?.description} />
          )}

          {fieldState.invalid && !hideError && (
            <FieldError errors={[fieldState.error]} className={classNames?.error} {...errorProps} />
          )}

          {descriptionPosition === 'after-error' && (
            <Desc description={description} descriptionProps={descriptionProps} className={classNames?.description} />
          )}
        </Field>
      )}
    />
  );
}

function Desc({
  description,
  descriptionProps,
  className,
}: {
  description?: string | React.ReactNode;
  descriptionProps?: React.ComponentProps<typeof FieldDescription>;
  className?: string;
}) {
  return typeof description === 'string' ? (
    <FieldDescription className={className} {...descriptionProps}>
      {description}
    </FieldDescription>
  ) : (
    description || null
  );
}
