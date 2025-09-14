import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type GetOverridesOptions = OptionsType<
  Management.operations["CustomersTrialEligibility_GetOverrides"]
>;
type CreateOverrideOptions = OptionsType<
  Management.operations["CustomersTrialEligibility_CreateOverride"]
>;
type DeleteOverrideOptions = OptionsType<
  Management.operations["CustomersTrialEligibility_DeleteOverride"]
>;

export class TrialEligibilityAPI {
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

  async getOverrides(options: GetOverridesOptions) {
    return this.client.get(
      "/v1/stores/{storeId}/customers/{customerId}/trial-eligibility/overrides",
      options,
    );
  }

  async createOverride(options: CreateOverrideOptions) {
    return this.client.post(
      "/v1/stores/{storeId}/customers/{customerId}/trial-eligibility/overrides",
      options,
    );
  }

  async deleteOverride(options: DeleteOverrideOptions) {
    return this.client.delete(
      "/v1/stores/{storeId}/customers/{customerId}/trial-eligibility/overrides/{trialEligibilityOverrideId}",
      options,
    );
  }
}
