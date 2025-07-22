import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type CreateCouponOptions = OptionsType<Management.operations["StoreCoupons_CreateCouponForStore"]>;
type GetCouponsOptions = OptionsType<Management.operations["StoreCoupons_GetCouponsForStore"]>;
type GetCouponOptions = OptionsType<Management.operations["StoreCoupons_GetCouponByIdForStore"]>;
type UpdateCouponOptions = OptionsType<Management.operations["StoreCoupons_UpdateCouponForStore"]>;
type DeleteCouponOptions = OptionsType<Management.operations["StoreCoupons_DeleteCouponForStore"]>;

export class CouponAPI {
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

  async createCoupon(options: CreateCouponOptions) {
    return this.client.post("/v1/stores/{storeId}/coupons", options);
  }
  async getCoupons(options: GetCouponsOptions) {
    return this.client.get("/v1/stores/{storeId}/coupons", options);
  }
  async getCoupon(options: GetCouponOptions) {
    return this.client.get("/v1/stores/{storeId}/coupons/{couponId}", options);
  }
  async updateCoupon(options: UpdateCouponOptions) {
    return this.client.patch("/v1/stores/{storeId}/coupons/{couponId}", options);
  }
  async deleteCoupon(options: DeleteCouponOptions) {
    return this.client.delete("/v1/stores/{storeId}/coupons/{couponId}", options);
  }
}
