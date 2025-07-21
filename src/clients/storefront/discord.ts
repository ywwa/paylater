import type { Storefront } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type CheckProductVersionActionsOptions = OptionsType<
  Storefront.operations["ProductsDiscord_DoProductsHaveDiscordActions"]
>;

export class DiscordAPI {
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
   * Retrieves a mapping of product version IDs to a boolean indicating whether
   * Discord actions are configured for each version.
   */
  async checkProductVersionActions(options: CheckProductVersionActionsOptions) {
    return this.client.get("/v1/stores/{storeId}/product_versions/discord_actions", options);
  }
}
