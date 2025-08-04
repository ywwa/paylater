import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type GetSalesOptions = OptionsType<Management.operations["Sales_GetSales"]>;
type CreateSaleOptions = OptionsType<Management.operations["Sales_CreateSale"]>;
type GetSaleOptions = OptionsType<Management.operations["Sales_GetSale"]>;
type DeleteSaleByIdOptions = OptionsType<Management.operations["Sales_DeleteSaleById"]>;
type UpdateSaleOptions = OptionsType<Management.operations["Sales_UpdateSale"]>;

export class SaleAPI {
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

  async getSales(options: GetSalesOptions) {
    return this.client.get("/v1/stores/{storeId}/sales", options);
  }

  async createSale(options: CreateSaleOptions) {
    return this.client.post("/v1/stores/{storeId}/sales", options);
  }

  async getSale(options: GetSaleOptions) {
    return this.client.get("/v1/stores/{storeId}/sales/{saleId}", options);
  }

  async deleteSaleById(options: DeleteSaleByIdOptions) {
    return this.client.delete("/v1/stores/{storeId}/sales/{saleId}", options);
  }

  async updateSale(options: UpdateSaleOptions) {
    return this.client.patch("/v1/stores/{storeId}/sales/{saleId}", options);
  }
}
