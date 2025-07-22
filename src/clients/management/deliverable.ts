import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type ResendCommandsForGameServerOptions = OptionsType<
  Management.operations["Deliverables_ResendCommandsForGameServer"]
>;

export class DeliverableAPI {
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

  async getDataMigrations(options: ResendCommandsForGameServerOptions) {
    return this.client.post(
      "/v1/stores/{storeId}/deliverables/{deliverableId}/commands/resend",
      options,
    );
  }
}
