import {
  AffiliateLinkAPI,
  BanAPI,
  CheckoutAPI,
  CouponAPI,
  CustomerAPI,
  CustomVariableAPI,
  DataMigrationAPI,
  DeliverableAPI,
  DiscordAPI,
  DownloadableFileAPI,
  GlobalCommandAPI,
  MarketingAPI,
  OrderAPI,
  ProductAPI,
  SubscriptionAPI,
  TagAPI,
  TrustAPI,
  WebhookAPI,
} from "../clients/management";
import type { AuthScheme, ClientConfig } from "../lib/types";

export class ManagementAPI {
  public readonly affiliateLink: AffiliateLinkAPI;
  public readonly ban: BanAPI;
  public readonly checkout: CheckoutAPI;
  public readonly coupon: CouponAPI;
  public readonly customVariable: CustomVariableAPI;
  public readonly customer: CustomerAPI;
  public readonly dataMigration: DataMigrationAPI;
  public readonly deliverable: DeliverableAPI;
  public readonly discord: DiscordAPI;
  public readonly downloadableFile: DownloadableFileAPI;
  public readonly globalCommand: GlobalCommandAPI;
  public readonly marketing: MarketingAPI;
  public readonly order: OrderAPI;
  public readonly product: ProductAPI;
  public readonly subscription: SubscriptionAPI;
  public readonly tag: TagAPI;
  public readonly trust: TrustAPI;
  public readonly webhook: WebhookAPI;

  private subClients: Array<{
    setToken: (scheme: AuthScheme, token: string) => void;
    clearToken: () => void;
    setDefaultHeader: (key: string, value: string) => void;
    removeDefaultHeader: (key: string) => void;
  }>;

  constructor(config?: Partial<ClientConfig>) {
    this.affiliateLink = new AffiliateLinkAPI(config);
    this.ban = new BanAPI(config);
    this.checkout = new CheckoutAPI(config);
    this.coupon = new CouponAPI(config);
    this.customVariable = new CustomVariableAPI(config);
    this.customer = new CustomerAPI(config);
    this.dataMigration = new DataMigrationAPI(config);
    this.deliverable = new DeliverableAPI(config);
    this.discord = new DiscordAPI(config);
    this.downloadableFile = new DownloadableFileAPI(config);
    this.globalCommand = new GlobalCommandAPI(config);
    this.marketing = new MarketingAPI(config);
    this.order = new OrderAPI(config);
    this.product = new ProductAPI(config);
    this.subscription = new SubscriptionAPI(config);
    this.tag = new TagAPI(config);
    this.trust = new TrustAPI(config);
    this.webhook = new WebhookAPI(config);

    this.subClients = [
      this.affiliateLink,
      this.ban,
      this.checkout,
      this.coupon,
      this.customVariable,
      this.customer,
      this.dataMigration,
      this.deliverable,
      this.discord,
      this.downloadableFile,
      this.globalCommand,
      this.marketing,
      this.order,
      this.product,
      this.subscription,
      this.tag,
      this.trust,
      this.webhook,
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

export * from "../clients/management";
