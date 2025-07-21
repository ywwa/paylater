import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type CreateAffiliateLinkOptions = OptionsType<
  Management.operations["AffiliateLinks_CreateAffiliateLink"]
>;
type GetAffiliateLinksOptions = OptionsType<
  Management.operations["AffiliateLinks_GetAffiliateLinks"]
>;
type GetAffiliateLinkOptions = OptionsType<
  Management.operations["AffiliateLinks_GetAffiliateLink"]
>;
type UpdateAffiliateLinkOptions = OptionsType<
  Management.operations["AffiliateLinks_UpdateAffiliateLink"]
>;
type DeleteAffiliateLinkOptions = OptionsType<
  Management.operations["AffiliateLinks_DeleteAffiliateLink"]
>;

export class AffiliateLinksAPI {
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

  async createAffiliateLink(options: CreateAffiliateLinkOptions) {
    return this.client.post("/v1/stores/{storeId}/affiliate-links", options);
  }

  async getAffiliateLinks(options: GetAffiliateLinksOptions) {
    return this.client.get("/v1/stores/{storeId}/affiliate-links", options);
  }

  async getAffiliateLink(options: GetAffiliateLinkOptions) {
    return this.client.get("/v1/stores/{storeId}/affiliate-links/{affiliateLinkId}", options);
  }

  async updateAffiliateLink(options: UpdateAffiliateLinkOptions) {
    return this.client.patch("/v1/stores/{storeId}/affiliate-links/{affiliateLinkId}", options);
  }

  async deleteAffiliateLink(options: DeleteAffiliateLinkOptions) {
    return this.client.delete("/v1/stores/{storeId}/affiliate-links/{affiliateLinkId}", options);
  }
}
