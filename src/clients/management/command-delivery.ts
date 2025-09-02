import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type AssignDeliveryItemsBulkOptions = OptionsType<
  Management.operations["RootCommandDelivery_AssignDeliveryItemsBulk"]
>;
type UpdateInventoryItemProductVersionOptions = OptionsType<
  Management.operations["RootCommandDelivery_UpdateInventoryItemProductVersion"]
>;

export class CommandDeliveryAPI {
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

  /**
   * Assign delivery items in bulk
   * @description Allows you to assign multiple delivery items for multiple customers in bulk
   */
  async assignDeliveyItemsBulk(options: AssignDeliveryItemsBulkOptions) {
    return this.client.post("/v1/stores/{storeId}/command-delivery", options);
  }

  async updateInventoryItemProductVersion(options: UpdateInventoryItemProductVersionOptions) {
    return this.client.post(
      "/v1/stores/{storeId}/command-delivery/inventory-item/update-product-versions",
      options,
    );
  }
}
