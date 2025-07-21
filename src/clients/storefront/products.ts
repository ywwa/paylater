import type { Storefront } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type GetProductsOptions = OptionsType<
  Storefront.operations["StorefrontProducts_GetStorefrontProducts"]
>;
type GetProductByIdOrSlugOptions = OptionsType<
  Storefront.operations["StorefrontProducts_GetStorefrontProductByIdOrSlug"]
>;

export class ProductsAPI {
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
   * Retrieves the available products.
   *
   * Requires the `x-paynow-store-id` header to be set.
   */
  async getProducts(options: GetProductsOptions) {
    return this.client.get("/v1/store/products", options);
  }

  /**
   * Retrieves a product by an ID or a slug.
   *
   * Requires the `x-paynow-store-id` header to be set.
   */
  async getProductByIdOrSlug(options: GetProductByIdOrSlugOptions) {
    return this.client.get("/v1/store/products/{idOrSlug}", options);
  }
}
