import type { Storefront } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type CreateCheckoutOptions = OptionsType<
  Storefront.operations["StorefrontCheckout_CreateCheckoutSession"]
>;

export class CheckoutAPI {
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
   * Creates a checkout session using a Customer token.
   * After creating the checkout session, redirect the customer to the `url` returned.
   *
   * @param options - Options for creating a checkout session.
   */
  async createCheckoutSession(options: CreateCheckoutOptions) {
    return this.client.post("/v1/checkouts", options);
  }
}
