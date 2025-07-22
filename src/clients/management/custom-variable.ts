import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type CreateCustomVariableOptions = OptionsType<
  Management.operations["CustomVariables_CreateCustomVariableForStore"]
>;
type GetCustomVariablesOptions = OptionsType<
  Management.operations["CustomVariables_GetCustomVariablesForStore"]
>;
type GetCustomVariableByIdOptions = OptionsType<
  Management.operations["CustomVariables_GetCustomVariableByIdForStore"]
>;
type UpdateCustomVariableOptions = OptionsType<
  Management.operations["CustomVariables_UpdateCustomVariableForStore"]
>;
type DeleteCustomVariableOptions = OptionsType<
  Management.operations["CustomVariables_DeleteCustomVariableForStore"]
>;

export class CustomVariableAPI {
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

  async createCustomVariable(options: CreateCustomVariableOptions) {
    return this.client.post("/v1/stores/{storeId}/custom-variables", options);
  }
  async getCustomVariables(options: GetCustomVariablesOptions) {
    return this.client.get("/v1/stores/{storeId}/custom-variables", options);
  }
  async getCustomVariableById(options: GetCustomVariableByIdOptions) {
    return this.client.get("/v1/stores/{storeId}/custom-variables/{customVariableId}", options);
  }
  async updateCustomVariable(options: UpdateCustomVariableOptions) {
    return this.client.patch("/v1/stores/{storeId}/custom-variables/{customVariableId}", options);
  }
  async deleteCustomVariable(options: DeleteCustomVariableOptions) {
    return this.client.delete("/v1/stores/{storeId}/custom-variables/{customVariableId}", options);
  }
}
