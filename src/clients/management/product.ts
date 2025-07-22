import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type CreateProductOptions = OptionsType<Management.operations["Products_CreateProduct"]>;
type GetProductsOptions = OptionsType<Management.operations["Products_GetProducts"]>;
type GetProductOptions = OptionsType<Management.operations["Products_GetProduct"]>;
type UpdateProductOptions = OptionsType<Management.operations["Products_UpdateProduct"]>;
type DeleteProductOptions = OptionsType<Management.operations["Products_DeleteProduct"]>;
type UpdateProductSortOrderOptions = OptionsType<
  Management.operations["Products_UpdateProductSortOrder"]
>;
type GetStorePricingRegionsOptions = OptionsType<
  Management.operations["ProductsPricing_GetStorePricingRegions"]
>;
type GetProductPricingRegionsOptions = OptionsType<
  Management.operations["ProductsPricing_GetProductPricingRegions"]
>;
type SetProductPricingRegionOverrideOptions = OptionsType<
  Management.operations["ProductsPricing_SetProductPricingRegionOverride"]
>;
type SetStorePricingRegionOverideOptions = OptionsType<
  Management.operations["ProductsPricing_SetStorePricingRegionOverride"]
>;
type GetStorePricingRegionGroupsOptions = OptionsType<
  Management.operations["ProductsPricing_GetStorePricingRegionGroups"]
>;

export class ProductAPI {
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

  async createProduct(options: CreateProductOptions) {
    return this.client.post("/v1/stores/{storeId}/products", options);
  }

  async getProducts(options: GetProductsOptions) {
    return this.client.get("/v1/stores/{storeId}/products", options);
  }

  async getProduct(options: GetProductOptions) {
    return this.client.get("/v1/stores/{storeId}/products/{productId}", options);
  }

  async updateProduct(options: UpdateProductOptions) {
    return this.client.patch("/v1/stores/{storeId}/products/{productId}", options);
  }

  async deleteProduct(options: DeleteProductOptions) {
    return this.client.delete("/v1/stores/{storeId}/products/{productId}", options);
  }

  async updateProductSortOrder(options: UpdateProductSortOrderOptions) {
    return this.client.post("/v1/stores/{storeId}/products/sort-order", options);
  }

  async getProductPricingRegions(options: GetProductPricingRegionsOptions) {
    return this.client.get("/v1/stores/{storeId}/products/{productId}/pricing/regions", options);
  }

  async setProductPricingRegionOverride(options: SetProductPricingRegionOverrideOptions) {
    return this.client.patch("/v1/stores/{storeId}/products/pricing/regions/{regionId}", options);
  }

  async getStorePricingRegions(options: GetStorePricingRegionsOptions) {
    return this.client.get("/v1/stores/{storeId}/products/pricing/regions", options);
  }

  async setStorePricingRegionOverride(options: SetStorePricingRegionOverideOptions) {
    return this.client.patch("/v1/stores/{storeId}/products/pricing/regions/{regionId}", options);
  }

  async getStorePricingRegionGroups(options: GetStorePricingRegionGroupsOptions) {
    return this.client.get("/v1/stores/{storeId}/products/pricing/region-groups", options);
  }
}
