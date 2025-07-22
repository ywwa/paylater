import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type GetOrdersOptions = OptionsType<Management.operations["Orders_GetOrders"]>;
type GetOrderByIdOptions = OptionsType<Management.operations["Orders_GetOrderById"]>;
type RefundOrderOptions = OptionsType<Management.operations["Orders_RefundOrder"]>;

export class OrderAPI {
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

  async getOrders(options: GetOrdersOptions) {
    return this.client.get("/v1/stores/{storeId}/orders", options);
  }

  async getOrderById(options: GetOrderByIdOptions) {
    return this.client.get("/v1/stores/{storeId}/orders/{orderId}", options);
  }

  async refundOrder(options: RefundOrderOptions) {
    return this.client.post("/v1/stores/{storeId}/orders/{orderId}/refund", options);
  }
}
