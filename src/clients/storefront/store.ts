import type { Storefront } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type GetStoreOptions = OptionsType<Storefront.operations["StorefrontStore_GetStorefrontStore"]>;

export class StoreAPI {
  private client: APIClient<Storefront.paths>;

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
   * Retrieves a store by the passed in x-paynow-store-id or Customer token.
   *
   * Requires the `x-paynow-store-id` header to be set.
   */
  async getStore(options: GetStoreOptions) {
    return this.client.get("/v1/store", options);
  }
}
