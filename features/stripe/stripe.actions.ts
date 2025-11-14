'use server';

import { Api } from '../_common/common.api';
import {
  CreateStripeIntentBodySchema,
  CreateStripeIntentResponseSchema,
  TCreateStripeIntentBody,
} from './stripe.schema';

const BASE = '/api/payments';

export async function createStripeIntent(body: TCreateStripeIntentBody) {
  return await Api.post(BASE + '/create-intent', body, {
    inputSchema: CreateStripeIntentBodySchema,
    outputSchema: CreateStripeIntentResponseSchema,
    successMessage: 'Stripe intent created successfully',
  });
}
