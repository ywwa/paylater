import {
  CartAPI,
  CheckoutAPI,
  CustomerAPI,
  DiscordAPI,
  NavlinksAPI,
  ProductsAPI,
  StoreAPI,
  TagsAPI,
} from "../clients/storefront";
import type { AuthScheme, ClientConfig } from "../lib/types";

export class StorefrontAPI {
  public readonly cart: CartAPI;
  public readonly checkout: CheckoutAPI;
  public readonly customer: CustomerAPI;
  public readonly discord: DiscordAPI;
  public readonly navlinks: NavlinksAPI;
  public readonly products: ProductsAPI;
  public readonly store: StoreAPI;
  public readonly tags: TagsAPI;

  private subClients: Array<{
    setToken: (scheme: AuthScheme, token: string) => void;
    clearToken: () => void;
    setDefaultHeader: (key: string, value: string) => void;
    removeDefaultHeader: (key: string) => void;
  }>;

  constructor(config?: Partial<ClientConfig>) {
    this.cart = new CartAPI(config);
    this.checkout = new CheckoutAPI(config);
    this.customer = new CustomerAPI(config);
    this.discord = new DiscordAPI(config);
    this.navlinks = new NavlinksAPI(config);
    this.products = new ProductsAPI(config);
    this.store = new StoreAPI(config);
    this.tags = new TagsAPI(config);

    this.subClients = [
      this.cart,
      this.checkout,
      this.customer,
      this.discord,
      this.navlinks,
      this.products,
      this.store,
      this.tags,
    ];
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

export * from "../clients/storefront";
