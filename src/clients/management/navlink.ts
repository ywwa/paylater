import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type CreateNavLinkOptions = OptionsType<Management.operations["NavLinks_CreateNavLink"]>;
type GetNavLinksOptions = OptionsType<Management.operations["NavLinks_GetNavLinks"]>;
type GetNavLinkOptions = OptionsType<Management.operations["NavLinks_GetNavLink"]>;
type UpdateNavLinkOptions = OptionsType<Management.operations["NavLinks_UpdateNavLink"]>;
type DeleteNavLinkOptions = OptionsType<Management.operations["NavLinks_DeleteNavLink"]>;
type UpdateNavLinkOrderOptions = OptionsType<Management.operations["NavLinks_UpdateNavLinkOrder"]>;

export class NavlinkAPI {
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

  async createNavLink(options: CreateNavLinkOptions) {
    return this.client.post("/v1/stores/{storeId}/navlinks", options);
  }

  async getNavLinks(options: GetNavLinksOptions) {
    return this.client.get("/v1/stores/{storeId}/navlinks", options);
  }

  async getNavLink(options: GetNavLinkOptions) {
    return this.client.get("/v1/stores/{storeId}/navlinks/{navLinkId}", options);
  }

  async updateNavLink(options: UpdateNavLinkOptions) {
    return this.client.patch("/v1/stores/{storeId}/navlinks/{navLinkId}", options);
  }

  async deleteNavLink(options: DeleteNavLinkOptions) {
    return this.client.delete("/v1/stores/{storeId}/navlinks/{navLinkId}", options);
  }

  async updateNavLinkOrder(options: UpdateNavLinkOrderOptions) {
    return this.client.patch("/v1/stores/{storeId}/navlinks/sort-orders", options);
  }
}
