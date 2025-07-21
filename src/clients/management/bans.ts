import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type CreateBanOptions = OptionsType<Management.operations["Bans_CreateBan"]>;
type GetBansOptions = OptionsType<Management.operations["Bans_GetBans"]>;
type GetBanOptions = OptionsType<Management.operations["Bans_GetBan"]>;
type CheckBansOptions = OptionsType<Management.operations["Bans_CheckForBanByIdentities"]>;
type UpdateBanOptions = OptionsType<Management.operations["Bans_UpdateBan"]>;
type DeleteBanOptions = OptionsType<Management.operations["Bans_DeleteBan"]>;

export class BansAPI {
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

  async createBan(options: CreateBanOptions) {
    return this.client.post("/v1/stores/{storeId}/bans", options);
  }

  async getBans(options: GetBansOptions) {
    return this.client.get("/v1/stores/{storeId}/bans", options);
  }

  async getBan(options: GetBanOptions) {
    return this.client.get("/v1/stores/{storeId}/bans/{banId}", options);
  }

  async checkBans(options: CheckBansOptions) {
    return this.client.post("/v1/stores/{storeId}/bans/check", options);
  }

  async updateBan(options: UpdateBanOptions) {
    return this.client.patch("/v1/stores/{storeId}/bans/{banId}", options);
  }

  async deleteBan(options: DeleteBanOptions) {
    return this.client.delete("/v1/stores/{storeId}/bans/{banId}", options);
  }
}
