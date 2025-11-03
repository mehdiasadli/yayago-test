'use client';

import { useState } from 'react';
import { Tag, TagInput as EmblorTagInput, TagInputStyleClassesProps } from 'emblor-maintained';
import { cn } from '@/lib/utils';

interface TagsInputProps {
  id?: string;
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  placeholder?: string;
  styles?: TagInputStyleClassesProps;
  inputFieldPosition?: 'top' | 'bottom';
}

export function TagsInput({ id, tags, setTags, placeholder, styles, inputFieldPosition = 'top' }: TagsInputProps) {
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  const handleChange = (newTags: React.SetStateAction<Tag[]>) => {
    if (Array.isArray(newTags)) {
      setTags(newTags.map((t) => t.text));
    }
  };

  return (
    <EmblorTagInput
      id={id}
      tags={tags.map((t) => ({ id: t, text: t }))}
      setTags={handleChange}
      placeholder={placeholder}
      styleClasses={{
        ...styles,
        tagList: {
          ...styles?.tagList,
          container: cn(styles?.tagList?.container, 'gap-1'),
        },
        input: cn(
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          styles?.input
        ),
        tag: {
          ...styles?.tag,
          body: cn(
            'relative h-7 bg-background border border-input hover:bg-background rounded-md font-medium text-xs ps-2 pe-7',
            styles?.tag?.body
          ),
          closeButton: cn(
            'absolute -inset-y-px -end-px p-0 rounded-s-none rounded-e-md flex size-7 transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] text-muted-foreground/80 hover:text-foreground',
            styles?.tag?.closeButton
          ),
        },
      }}
      activeTagIndex={activeTagIndex}
      setActiveTagIndex={setActiveTagIndex}
      inlineTags={false}
      inputFieldPosition={inputFieldPosition}
    />
  );
}
