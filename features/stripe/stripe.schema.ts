import z from 'zod';

export const CreateStripeIntentBodySchema = z.object({
  amount: z.number().positive(),
  description: z.string().optional(),
  customerEmail: z.string().email(),
});

export const CreateStripeIntentResponseSchema = z.object({
  intentId: z.string(),
  clientSecret: z.string(),
});

export const GetIntentStatusParamsSchema = z.object({
  intentId: z.string(),
});

export const GetIntentStatusResponseSchema = z.object({
  paymentIntentId: z.string(),
  clientSecret: z.string().nullable(),
  status: z.string().transform((val) => val.toLowerCase()),
});

export type TCreateStripeIntentBody = z.infer<typeof CreateStripeIntentBodySchema>;
export type TCreateStripeIntentResponse = z.infer<typeof CreateStripeIntentResponseSchema>;
export type TGetIntentStatusParams = z.infer<typeof GetIntentStatusParamsSchema>;
export type TGetIntentStatusResponse = z.infer<typeof GetIntentStatusResponseSchema>;
