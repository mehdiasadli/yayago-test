import { Api } from '../_common/common.api';
import { GetIntentStatusResponseSchema, TGetIntentStatusParams } from './stripe.schema';

export class StripeApi {
  static readonly baseURL = '/api/payments';

  static async getIntentStatus(params: TGetIntentStatusParams) {
    return await Api.get(`${this.baseURL}/status/${params.intentId}`, {
      outputSchema: GetIntentStatusResponseSchema,
      successMessage: 'Payment status fetched successfully',
    });
  }
}
