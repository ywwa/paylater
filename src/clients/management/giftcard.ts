import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type GetGiftCardsOptions = OptionsType<Management.operations["GiftCards_GetGiftCards"]>;
type CreateGiftCardOptions = OptionsType<Management.operations["GiftCards_CreateGiftCard"]>;
type GetGiftCardOptions = OptionsType<Management.operations["GiftCards_GetGiftCard"]>;
type DeleteGiftCardOptions = OptionsType<Management.operations["GiftCards_DeleteGiftCard"]>;
type UpdateGiftCardOptions = OptionsType<Management.operations["GiftCards_UpdateGiftCard"]>;

export class GiftCardAPI {
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

  async getGiftCards(options: GetGiftCardsOptions) {
    return this.client.get("/v1/stores/{storeId}/giftcards", options);
  }

  async createGiftCard(options: CreateGiftCardOptions) {
    return this.client.post("/v1/stores/{storeId}/giftcards", options);
  }

  async getGiftCard(options: GetGiftCardOptions) {
    return this.client.get("/v1/stores/{storeId}/giftcards/{giftCardId}", options);
  }

  async deleteGiftCard(options: DeleteGiftCardOptions) {
    return this.client.delete("/v1/stores/{storeId}/giftcards/{giftCardId}", options);
  }

  async updateGiftCard(options: UpdateGiftCardOptions) {
    return this.client.patch("/v1/stores/{storeId}/giftcards/{giftCardId}", options);
  }
}
