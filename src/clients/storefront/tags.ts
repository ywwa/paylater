import type { Storefront } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type GetTagsOptions = OptionsType<Storefront.operations["StorefrontTags_GetStorefrontTags"]>;

export class TagsAPI {
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
   * Retrieves the store's tags.
   *
   * Requires the `x-paynow-store-id` header to be set.
   */
  async getTags(options: GetTagsOptions) {
    return this.client.get("/v1/store/tags", options);
  }
}
