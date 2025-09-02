import type { Storefront } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type GetCustomerOptions = OptionsType<
  Storefront.operations["StorefrontCustomer_GetStorefrontCustomer"]
>;
type GetStorefrontGiftCard = OptionsType<
  Storefront.operations["StorefrontCustomer_GetStorefrontGiftCard"]
>;
type RootGetStorefrontCustomerDeliveryItemsOptions = OptionsType<
  Storefront.operations["StorefrontCustomer_RootGetStorefrontCustomerDeliveryItems"]
>;

export class CustomerAPI {
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
   * Retrieves the current customer from the passed Customer token.
   */
  async getCustomer(options?: GetCustomerOptions) {
    return this.client.get("/v1/store/customer", options ?? {});
  }

  /**
   * Lookup a giftcard by the code
   */
  async getStorefrontGiftCard(options: GetStorefrontGiftCard) {
    return this.client.get("/v1/store/customer/giftcards/lookup/{code}", options);
  }

  /**
   * Get storefront customer delivery items
   */
  async getStorefrontCustomerDeliveryItems(options: RootGetStorefrontCustomerDeliveryItemsOptions) {
    return this.client.get("/v1/store/customer/command-delivery", options);
  }
}
