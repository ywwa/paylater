import type { Storefront as TStorefront } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type GetCartOptions = OptionsType<TStorefront.operations["StorefrontCart_GetCart"]>;
type ClearCartOptions = OptionsType<TStorefront.operations["StorefrontCart_ClearCart"]>;
type AddLineOptions = OptionsType<TStorefront.operations["StorefrontCart_AddLine"]>;
type CreateCheckoutSessionOptions = OptionsType<
  TStorefront.operations["StorefrontCart_CreateCartCheckout"]
>;

export class CartAPI {
  private client: APIClient<TStorefront.paths>;

  constructor(config?: Partial<ClientConfig>) {
    this.client = new APIClient<TStorefront.paths>({ ...config });
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
   * Retrieves the current customer's shopping cart.
   */
  async getCart(options?: GetCartOptions) {
    return this.client.get("/v1/store/cart", options ?? {});
  }

  /**
   * Clears all items from the customer's shopping cart.
   */
  async clearCart(options?: ClearCartOptions) {
    return this.client.delete("/v1/store/cart", options ?? {});
  }

  /**
   * Adds a product to the cart or updates the quantity of an existing product.
   */
  async addLine(options: AddLineOptions) {
    return this.client.put("/v1/store/cart/lines", options);
  }

  /**
   * Creates a checkout session from the contents of the cart.
   */
  async createCheckoutSession(options: CreateCheckoutSessionOptions) {
    return this.client.post("/v1/store/cart/checkout", options);
  }
}
