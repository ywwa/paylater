import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type GetStoreOnboardingStatusOptions = OptionsType<
  Management.operations["TrustStoreOnboarding_GetStoreOnboardingStatus"]
>;

export class TrustAPI {
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

  async getStoreOnboardingStatus(options: GetStoreOnboardingStatusOptions) {
    return this.client.get("/v1/stores/{storeId}/trust/onboarding/status", options);
  }
}
