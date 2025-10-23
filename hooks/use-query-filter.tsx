'use client';

import { useCallback, useEffect, useState, useRef } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { z } from 'zod';

type SerializeOptions<T> = {
  /**
   * Custom serialization function to convert value to URL string
   * @default String(value)
   */
  stringify?: (value: T) => string;

  /**
   * Custom parsing function to convert URL string to value
   * @default (str) => str as T
   */
  parse?: (value: string) => T;

  /**
   * Whether to replace the current history entry instead of pushing a new one
   * @default false
   */
  replace?: boolean;

  /**
   * Whether to scroll to top when URL changes
   * @default false
   */
  scroll?: boolean;

  /**
   * Debounce time in milliseconds before updating URL
   * @default 0
   */
  debounce?: number;
};

/**
 * Hook for managing URL query parameters with automatic validation and synchronization
 *
 * @param key - The URL query parameter key
 * @param schema - Zod schema for validation only (parse/stringify handle serialization)
 * @param options - Serialization and behavior options
 *
 * @example
 * const [minPrice, setMinPrice] = useQueryFilter(
 *   'minPrice',
 *   z.number().min(0).nullish(),
 *   {
 *     parse: (str) => str ? Number(str) : null,
 *     stringify: (value) => value?.toString() ?? '',
 *     debounce: 300
 *   }
 * );
 */
export function useQueryFilter<Schema extends z.ZodSchema>(
  key: string,
  schema: Schema,
  options: SerializeOptions<z.infer<Schema>> = {}
): [z.infer<Schema>, (value: z.infer<Schema>) => void] {
  const {
    stringify = (value: any) => {
      if (value === null || value === undefined) return '';
      return String(value);
    },
    parse = (value: string) => value as z.infer<Schema>,
    replace = false,
    scroll = false,
    debounce = 0,
  } = options;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isInitialMount = useRef(true);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  /**
   * Parse URL parameter value using custom parser and validate with schema
   */
  const parseUrlValue = useCallback(
    (urlValue: string | null): z.infer<Schema> | null => {
      // If no URL value, try getting default from schema
      if (urlValue === null || urlValue === '') {
        const defaultResult = schema.safeParse(undefined);
        if (defaultResult.success) {
          return defaultResult.data;
        }
        return null;
      }

      try {
        // Use custom parser
        const parsed = parse(urlValue);

        // Validate with schema
        const result = schema.safeParse(parsed);
        if (result.success) {
          return result.data;
        }

        console.warn(`[${key}] Schema validation failed for parsed value:`, parsed, result.error);
        return null;
      } catch (error) {
        console.warn(`[${key}] Failed to parse URL value:`, urlValue, error);
        return null;
      }
    },
    [schema, key, parse]
  );

  /**
   * Get initial state from URL or default from schema
   */
  const getInitialState = useCallback((): z.infer<Schema> => {
    const urlValue = searchParams.get(key);

    const parsed = parseUrlValue(urlValue);

    if (parsed !== null) {
      return parsed;
    }

    // Try to get default from schema
    const defaultResult = schema.safeParse(undefined);
    return defaultResult.success ? defaultResult.data : null;
  }, [key, searchParams, parseUrlValue, schema]);

  const [state, setState] = useState<z.infer<Schema>>(getInitialState);

  /**
   * Update URL with new parameter value
   */
  const updateUrl = useCallback(
    (value: z.infer<Schema>) => {
      const params = new URLSearchParams(searchParams.toString());

      try {
        const serialized = stringify(value);

        // Remove param if value is empty, null, or undefined
        if (!serialized || value === null || value === undefined) {
          params.delete(key);
        } else {
          params.set(key, serialized);
        }

        const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;

        if (replace) {
          router.replace(newUrl, { scroll });
        } else {
          router.push(newUrl, { scroll });
        }
      } catch (error) {
        console.error(`[${key}] Failed to stringify value:`, value, error);
      }
    },
    [key, pathname, router, searchParams, stringify, replace, scroll]
  );

  /**
   * Set state with validation
   */
  const setValue = useCallback(
    (newValue: z.infer<Schema>) => {
      // Validate the new value with schema
      const result = schema.safeParse(newValue);

      if (!result.success) {
        console.warn(`[${key}] Validation failed for value:`, newValue, result.error.errors);
        return; // Don't update if validation fails
      }

      const validatedValue = result.data;
      setState(validatedValue);

      // Clear existing debounce timer
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      // Update URL with debounce
      if (debounce > 0) {
        debounceTimer.current = setTimeout(() => {
          updateUrl(validatedValue);
        }, debounce);
      } else {
        updateUrl(validatedValue);
      }
    },
    [schema, key, debounce, updateUrl]
  );

  /**
   * Sync state when URL changes (browser back/forward, external URL change)
   */
  useEffect(() => {
    // Skip URL sync on initial mount (we already set initial state)
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const urlValue = searchParams.get(key);
    const parsed = parseUrlValue(urlValue);

    if (parsed !== null) {
      setState((current) => {
        const isSame = JSON.stringify(current) === JSON.stringify(parsed);
        return isSame ? current : parsed;
      });
    }
  }, [searchParams, key, parseUrlValue]);

  /**
   * Cleanup debounce timer on unmount
   */
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  return [state, setValue];
}
