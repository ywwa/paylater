import type { Storefront } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type GetNavlinksOptions = OptionsType<
  Storefront.operations["StorefrontNavLinks_GetStorefrontNavLinks"]
>;

export class NavlinksAPI {
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
   * Retrieves the store's navlink structure used for navigation.
   *
   * Requires the `x-paynow-store-id` header to be set.
   */
  async getNavlinks(options: GetNavlinksOptions) {
    return this.client.get("/v1/store/navlinks", options);
  }
}
