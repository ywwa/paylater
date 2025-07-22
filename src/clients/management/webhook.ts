import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type CreateSubscriptionOptions = OptionsType<Management.operations["Webhooks_CreateSubscription"]>;
type GetSubscriptionsOptions = OptionsType<Management.operations["Webhooks_GetSubscriptions"]>;
type GetVariablesOptions = OptionsType<Management.operations["Webhooks_GetVariables"]>;
type UpdateSubscriptionOptions = OptionsType<Management.operations["Webhooks_UpdateSubscription"]>;
type DeleteSubscriptionOptions = OptionsType<Management.operations["Webhooks_DeleteSubscription"]>;
type GetHistoryOptions = OptionsType<Management.operations["Webhooks_GetHistory"]>;

export class WebhookAPI {
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

  async createSubscription(options: CreateSubscriptionOptions) {
    return this.client.post("/v1/stores/{storeId}/webhooks", options);
  }

  async getSubscriptions(options: GetSubscriptionsOptions) {
    return this.client.get("/v1/stores/{storeId}/webhooks", options);
  }

  async getVariables(options: GetVariablesOptions) {
    return this.client.get("/v1/stores/{storeId}/webhooks/variables", options);
  }

  async updateSubscription(options: UpdateSubscriptionOptions) {
    return this.client.patch("/v1/stores/{storeId}/webhooks/{webhookId}", options);
  }

  async deleteSubscription(options: DeleteSubscriptionOptions) {
    return this.client.delete("/v1/stores/{storeId}/webhooks/{webhookId}", options);
  }

  async getHistory(options: GetHistoryOptions) {
    return this.client.get("/v1/stores/{storeId}/webhooks/{webhookId}/history", options);
  }
}
