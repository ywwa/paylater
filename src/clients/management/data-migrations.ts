import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type GetDataMigrationsOptions = OptionsType<
  Management.operations["DataMigrations_GetDataMigrations"]
>;
type StartDataMigrationFromTebexOptions = OptionsType<
  Management.operations["DataMigrations_StartDataMigrationFromTebex"]
>;

export class DataMigrationAPI {
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

  async getDataMigrations(options: GetDataMigrationsOptions) {
    return this.client.get("/v1/stores/{storeId}/data-migrations", options);
  }

  async startDataMigrationFromTebex(options: StartDataMigrationFromTebexOptions) {
    return this.client.post("/v1/stores/{storeId}/data-migrations/tebex", options);
  }
}
