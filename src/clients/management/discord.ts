import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type CreateActionOptions = OptionsType<Management.operations["ProductsDiscord_CreateAction"]>;
type GetActionsOptions = OptionsType<Management.operations["ProductsDiscord_GetActions"]>;
type GetLinkedDiscordAccountsOptions = OptionsType<
  Management.operations["OrdersDiscord_GetLinkedDiscordAccounts"]
>;
type GetDiscordActionExecutionHistoryOptions = OptionsType<
  Management.operations["OrdersDiscord_GetDiscordActionExecutionHistory"]
>;
type GetQueuedDiscordActionForDeliveryItemOptions = OptionsType<
  Management.operations["DiscordInventoryItem_GetQueuedDiscordActionForDeliveryItem"]
>;
type GetUserToDeliveryItemLinksOptions = OptionsType<
  Management.operations["DiscordInventoryItem_GetUserToDeliveryItemLinks"]
>;
type SetUserToDeliveryItemLinkOptions = OptionsType<
  Management.operations["DiscordInventoryItem_SetUserToDeliveryItemLink"]
>;
type DeleteUserToDeliveryItemLinkOptions = OptionsType<
  Management.operations["DiscordInventoryItem_DeleteUserToDeliveryItemLink"]
>;
type GetDiscordServerLinksOptions = OptionsType<
  Management.operations["DiscordServers_GetDiscordServerLinks"]
>;
type CreateDiscordServerLinkOptions = OptionsType<
  Management.operations["DiscordServers_CreateDiscordServerLink"]
>;
type DeleteDiscordServerLinksOptions = OptionsType<
  Management.operations["DiscordServers_DeleteDiscordServerLinks"]
>;
type GetDiscordServerRolesOptions = OptionsType<
  Management.operations["DiscordServers_GetDiscordServerRoles"]
>;
type GetDiscordServerTextChannelsOptions = OptionsType<
  Management.operations["DiscordServers_GetDiscordServerTextChannels"]
>;

export class DiscordAPI {
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

  async createAction(options: CreateActionOptions) {
    return this.client.put(
      "/v1/stores/{storeId}/product_versions/{productVersionId}/discord_actions",
      options,
    );
  }

  async getActions(options: GetActionsOptions) {
    return this.client.get(
      "/v1/stores/{storeId}/product_versions/{productVersionId}/discord_actions",
      options,
    );
  }

  async getLinkedDiscordAccounts(options: GetLinkedDiscordAccountsOptions) {
    return this.client.get("/v1/stores/{storeId}/orders/{orderId}/discord", options);
  }

  async getDiscordActionExecutionHistory(options: GetDiscordActionExecutionHistoryOptions) {
    return this.client.get("/v1/stores/{storeId}/orders/{orderId}/discord/queued", options);
  }

  async getQueuedDiscordActionForDeliveryItem(
    options: GetQueuedDiscordActionForDeliveryItemOptions,
  ) {
    return this.client.get(
      "/v1/stores/{storeId}/inventory/{inventoryItemId}/discord/queued",
      options,
    );
  }

  async getUserToDeliveryItemLinks(options: GetUserToDeliveryItemLinksOptions) {
    return this.client.get(
      "/v1/stores/{storeId}/inventory/{inventoryItemId}/discord/link",
      options,
    );
  }

  async setUserToDeliveryItemLink(options: SetUserToDeliveryItemLinkOptions) {
    return this.client.put(
      "/v1/stores/{storeId}/inventory/{inventoryItemId}/discord/link",
      options,
    );
  }
  async deleteUserToDeliveryItemLink(options: DeleteUserToDeliveryItemLinkOptions) {
    return this.client.delete(
      "/v1/stores/{storeId}/inventory/{inventoryItemId}/discord/link",
      options,
    );
  }

  async getDiscordServerLinks(options: GetDiscordServerLinksOptions) {
    return this.client.get("/v1/stores/{storeId}/discord/links", options);
  }

  async createDiscordServerLink(options: CreateDiscordServerLinkOptions) {
    return this.client.post("/v1/stores/{storeId}/discord/links", options);
  }

  async deleteDiscordServerLinks(options: DeleteDiscordServerLinksOptions) {
    return this.client.delete("/v1/stores/{storeId}/discord/links/{token}", options);
  }

  async getDiscordServerRoles(options: GetDiscordServerRolesOptions) {
    return this.client.get("/v1/stores/{storeId}/discord/{discordServerId}/roles", options);
  }
  async getDiscordServerTextChannels(options: GetDiscordServerTextChannelsOptions) {
    return this.client.get(
      "/v1/stores/{storeId}/discord/{discordServerId}/discord/text_channels",
      options,
    );
  }
}
