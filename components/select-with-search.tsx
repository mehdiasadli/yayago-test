'use client';

import { useId, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CheckIcon, ChevronDownIcon } from 'lucide-react';

interface SelectWithSearchProps {
  options: { value: string; label: string }[];
  selectPlaceholder?: string;
  searchPlaceholder?: string;
  noFoundMessage?: string;
  value?: string;
  setValue: (value: string) => void;
}

export default function SelectWithSearch({
  options,
  selectPlaceholder = 'Select an option',
  searchPlaceholder = 'Search an option',
  noFoundMessage = 'No options found',
  value,
  setValue,
}: SelectWithSearchProps) {
  const id = useId();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-full justify-between border-input bg-background px-3 font-normal outline-offset-0 outline-none hover:bg-background focus-visible:outline-[3px]'
        >
          <span className={cn('truncate', !value && 'text-muted-foreground')}>
            {value ? options.find((option) => option.value === value)?.label : selectPlaceholder}
          </span>
          <ChevronDownIcon size={16} className='shrink-0 text-muted-foreground/80' aria-hidden='true' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full min-w-[var(--radix-popper-anchor-width)] border-input p-0' align='start'>
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{noFoundMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  {option.label}
                  {value === option.value && <CheckIcon size={16} className='ml-auto' />}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
