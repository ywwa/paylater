import type { AuthScheme, ClientConfig } from "../../lib/types";

export class ManagementAPI {
  private subClients: Array<{
    setToken: (scheme: AuthScheme, token: string) => void;
    clearToken: () => void;
    setDefaultHeader: (key: string, value: string) => void;
    removeDefaultHeader: (key: string) => void;
  }>;

  constructor(config?: Partial<ClientConfig>) {
    this.subClients = [];
  }

  setToken(scheme: AuthScheme, token: string): void {
    for (const client of this.subClients) {
      client.setToken(scheme, token);
    }
  }

  clearToken(): void {
    for (const client of this.subClients) {
      client.clearToken();
    }
  }

  setDefaultHeader(key: string, value: string): void {
    for (const client of this.subClients) {
      client.setDefaultHeader(key, value);
    }
  }

  removeDefaultHeader(key: string): void {
    for (const client of this.subClients) {
      client.removeDefaultHeader(key);
    }
  }
}
