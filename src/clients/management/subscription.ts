import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type GetSubscriptionsOptions = OptionsType<Management.operations["Subscriptions_GetSubscriptions"]>;
type GetSubscriptionByIdOptions = OptionsType<
  Management.operations["Subscriptions_GetSubscriptionById"]
>;
type CancelSubscriptionOptions = OptionsType<
  Management.operations["Subscriptions_CancelSubscription"]
>;

export class SubscriptionAPI {
  private client: APIClient<Management.paths>;

  constructor(config?: Partial<ClientConfig>) {
    this.client = new APIClient({ ...config });
  }

  setToken(scheme: AuthScheme, token: string): void {
    this.client.setToken(scheme, token);
  }

  clearToken(): void {
    this.client.clearToken();
  }

  setDefaultHeader(key: string, value: string): void {
    this.client.setDefaultHeader(key, value);
  }

  removeDefaultHeader(key: string): void {
    this.client.removeDefaultHeader(key);
  }

  async getSubscriptions(options: GetSubscriptionsOptions) {
    return this.client.get("/v1/stores/{storeId}/subscriptions", options);
  }

  async getSubscriptionById(options: GetSubscriptionByIdOptions) {
    return this.client.get("/v1/stores/{storeId}/subscriptions/{subscriptionId}", options);
  }

  async cancelSubscription(options: CancelSubscriptionOptions) {
    return this.client.post("/v1/stores/{storeId}/subscriptions/{subscriptionId}/cancel", options);
  }
}
