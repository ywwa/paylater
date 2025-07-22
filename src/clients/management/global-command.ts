import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type CreateGlobalCommandOptions = OptionsType<
  Management.operations["GlobalCommands_CreateGlobalCommand"]
>;
type GetGlobalCommandsOptions = OptionsType<
  Management.operations["GlobalCommands_GetGlobalCommands"]
>;
type UpdateGlobalCommandOptions = OptionsType<
  Management.operations["GlobalCommands_UpdateGlobalCommand"]
>;
type DeleteGlobalCommandOptions = OptionsType<
  Management.operations["GlobalCommands_DeleteGlobalCommand"]
>;

export class GlobalCommandAPI {
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

  async createGlobalCommand(options: CreateGlobalCommandOptions) {
    return this.client.post("/v1/stores/{storeId}/global-commands", options);
  }

  async getGlobalCommands(options: GetGlobalCommandsOptions) {
    return this.client.get("/v1/stores/{storeId}/global-commands", options);
  }

  async updateGlobalCommand(options: UpdateGlobalCommandOptions) {
    return this.client.patch("/v1/stores/{storeId}/global-commands/{globalCommandId}", options);
  }

  async deleteGlobalCommand(options: DeleteGlobalCommandOptions) {
    return this.client.delete("/v1/stores/{storeId}/global-commands/{globalCommandId}", options);
  }
}
