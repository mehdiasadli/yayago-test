// fetch wrapper only for GET requests

import z from 'zod';

interface GetConfig extends Omit<RequestInit, 'method'> {
  notOkMessage?: string;
  defaultErrorMessage?: string;
}

export async function get<OutputSchema extends z.ZodSchema>(
  url: string,
  output: OutputSchema,
  config: GetConfig = {}
): Promise<z.infer<OutputSchema>> {
  const { notOkMessage, defaultErrorMessage = 'Unknown error occured', ...fetchConfig } = config;

  try {
    const response = await fetch(url, fetchConfig);

    if (!response.ok) {
      throw new Error(notOkMessage || defaultErrorMessage);
    }

    const data = await response.json();

    return output.parse(data) as z.infer<OutputSchema>;
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      throw new Error(error.errors[0]?.message || defaultErrorMessage);
    }

    throw new Error(error instanceof Error ? error.message : defaultErrorMessage);
  }
}

async function test() {
  const data = await get(
    'https://api.example.com',
    z.object({
      name: z.string(),
    })
  );

  return data;
}
