import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type GetTrialsOptions = OptionsType<Management.operations["Trials_GetTrials"]>;
type GetTrialOptions = OptionsType<
  Management.operations["Trials_GetTrial"]
>;

export class TrialAPI {
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

  async getTrials(options: GetTrialsOptions) {
    return this.client.get("/v1/stores/{storeId}/trials", options);
  }

  async getTrial(options: GetTrialOptions) {
    return this.client.get("/v1/stores/{storeId}/trials/{trialId}", options);
  }
}
