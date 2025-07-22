import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type GetStoreAbandonedCheckoutConfigutationOptionsOptions = OptionsType<
  Management.operations["StoreAbandonedCheckouts_GetStoreAbandonedCheckoutConfigurationOptions"]
>;
type SetStoreAbandonedCheckoutConfigutationOptionsOptions = OptionsType<
  Management.operations["StoreAbandonedCheckouts_SetStoreAbandonedCheckoutConfigurationOptions"]
>;

type GetStorePurchaseFollowUpConfigutationOptionsOptions = OptionsType<
  Management.operations["StorePurchaseFollowUps_GetStorePurchaseFollowUpConfigurationOptions"]
>;
type SetStorePurchaseFollowUpConfigutationOptionsOptions = OptionsType<
  Management.operations["StorePurchaseFollowUps_SetStorePurchaseFollowUpConfigurationOptions"]
>;

export class MarketingAPI {
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

  async getStoreAbandonedCheckoutConfigurationOptions(
    options: GetStoreAbandonedCheckoutConfigutationOptionsOptions,
  ) {
    return this.client.get(
      "/v1/stores/{storeId}/marketing/abandoned-checkouts/configuration",
      options,
    );
  }

  async setStoreAbandonedCheckoutConfigurationOptions(
    options: SetStoreAbandonedCheckoutConfigutationOptionsOptions,
  ) {
    return this.client.put(
      "/v1/stores/{storeId}/marketing/abandoned-checkouts/configuration",
      options,
    );
  }

  async getStorePurchaseFollowUpConfigurationOptions(
    options: GetStorePurchaseFollowUpConfigutationOptionsOptions,
  ) {
    return this.client.get(
      "/v1/stores/{storeId}/marketing/purchase-follow-ups/configuration",
      options,
    );
  }

  async setStorePurchaseFollowUpConfigurationOptions(
    options: SetStorePurchaseFollowUpConfigutationOptionsOptions,
  ) {
    return this.client.put(
      "/v1/stores/{storeId}/marketing/purchase-follow-ups/configuration",
      options,
    );
  }
}
