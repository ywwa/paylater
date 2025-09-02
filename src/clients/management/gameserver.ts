import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type GetGameServersOptions = OptionsType<Management.operations["GameServers_GetGameServers"]>;

type CreateGameServerOptions = OptionsType<Management.operations["GameServers_CreateGameServer"]>;

type GetGameServerOptions = OptionsType<Management.operations["GameServers_GetGameServer"]>;

type DeleteGameServerOptions = OptionsType<Management.operations["GameServers_DeleteGameServer"]>;

type UpdateGameServerOptions = OptionsType<Management.operations["GameServers_UpdateGameServer"]>;

type ResetGameServerTokenOptions = OptionsType<
  Management.operations["GameServers_ResetGameServerToken"]
>;

export class GameServerAPI {
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

  /**
   * Get Game Servers for a store
   */
  async getGameServers(options: GetGameServersOptions) {
    return this.client.get("/v1/stores/{storeId}/gameservers", options);
  }

  /**
   * Create a new Game Server for a store
   */
  async createGameServer(options: CreateGameServerOptions) {
    return this.client.post("/v1/stores/{storeId}/gameservers", options);
  }

  /**
   * Get a Game Server by ID for a store
   */
  async getGameServer(options: GetGameServerOptions) {
    return this.client.get("/v1/stores/{storeId}/gameservers/{gameServerId}", options);
  }

  /**
   * Delete a Game Server by ID for a store
   */
  async deleteGameServer(options: DeleteGameServerOptions) {
    return this.client.delete("/v1/stores/{storeId}/gameservers/{gameServerId}", options);
  }

  /**
   * Update a Game Server by ID for a store
   */
  async updateGameServer(options: UpdateGameServerOptions) {
    return this.client.patch("/v1/stores/{storeId}/gameservers/{gameServerId}", options);
  }

  /**
   * Reset the API Key Token for a Game Server for a store
   */
  async resetGameServerToken(options: ResetGameServerTokenOptions) {
    return this.client.post("/v1/stores/{storeId}/gameservers/{gameServerId}/reset-token", options);
  }
}
