import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type CreateCustomerOptions = OptionsType<Management.operations["Customers_CreateCustomer"]>;
type GetCustomersOptions = OptionsType<Management.operations["Customers_GetCustomers"]>;
type GetCustomerByIdOptions = OptionsType<Management.operations["Customers_GetCustomerById"]>;
type UpdateCustomerOptions = OptionsType<Management.operations["Customers_UpdateCustomer"]>;

// Tokens
type CreateCustomerTokenOptions = OptionsType<
  Management.operations["Customers_CreateCustomerToken"]
>;
type InvalidateCustomerTokensOptions = OptionsType<
  Management.operations["Customers_InvalidateCustomerTokens"]
>;

// Lookup
type LookupCustomerOptions = OptionsType<Management.operations["Customers_LookupCustomer"]>;

// Bulk
type BulkCreateCustomersOptions = OptionsType<
  Management.operations["Customers_BulkCreateCustomers"]
>;

export class CustomerAPI {
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

  async createCustomer(options: CreateCustomerOptions) {
    return this.client.post("/v1/stores/{storeId}/customers", options);
  }

  async getCustomers(options: GetCustomersOptions) {
    return this.client.get("/v1/stores/{storeId}/customers", options);
  }

  async getCustomerById(options: GetCustomerByIdOptions) {
    return this.client.get("/v1/stores/{storeId}/customers/{customerId}", options);
  }

  async updateCustomer(options: UpdateCustomerOptions) {
    return this.client.patch("/v1/stores/{storeId}/customers/{customerId}", options);
  }

  async createCustomerToken(options: CreateCustomerTokenOptions) {
    return this.client.post("/v1/stores/{storeId}/customers/{customerId}/tokens", options);
  }

  async invalidateCustomerTokens(options: InvalidateCustomerTokensOptions) {
    return this.client.delete("/v1/stores/{storeId}/customers/{customerId}/tokens", options);
  }

  async lookupCustomer(options: LookupCustomerOptions) {
    return this.client.get("/v1/stores/{storeId}/customers/lookup", options);
  }

  async bulkCreateCustomers(options: BulkCreateCustomersOptions) {
    return this.client.post("/v1/stores/{storeId}/customers/bulk", options);
  }
}
