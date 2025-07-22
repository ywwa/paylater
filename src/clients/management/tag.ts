import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type CreateTagOptions = OptionsType<Management.operations["Tags_CreateTag"]>;
type GetTagsOptions = OptionsType<Management.operations["Tags_GetTags"]>;
type GetTagOptions = OptionsType<Management.operations["Tags_GetTag"]>;
type UpdateTagOptions = OptionsType<Management.operations["Tags_UpdateTag"]>;
type DeleteTagOptions = OptionsType<Management.operations["Tags_DeleteTag"]>;

type GetTagImageUploadUrlOptions = OptionsType<Management.operations["Tags_GetTagImageUploadUrl"]>;
type FinishTagImageUploadOptions = OptionsType<Management.operations["Tags_FinishTagImageUpload"]>;
type DeleteTagImageOptions = OptionsType<Management.operations["Tags_DeleteTagImage"]>;

export class TagAPI {
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

  async createTag(options: CreateTagOptions) {
    return this.client.post("/v1/stores/{storeId}/tags", options);
  }

  async getTags(options: GetTagsOptions) {
    return this.client.get("/v1/stores/{storeId}/tags", options);
  }

  async getTag(options: GetTagOptions) {
    return this.client.get("/v1/stores/{storeId}/tags/{tagId}", options);
  }

  async updateTag(options: UpdateTagOptions) {
    return this.client.patch("/v1/stores/{storeId}/tags/{tagId}", options);
  }

  async deleteTag(options: DeleteTagOptions) {
    return this.client.delete("/v1/stores/{storeId}/tags/{tagId}", options);
  }

  async getTagImageUploadUrl(options: GetTagImageUploadUrlOptions) {
    return this.client.get("/v1/stores/{storeId}/tags/{tagId}/image-upload-url", options);
  }

  async finishTagImageUpload(options: FinishTagImageUploadOptions) {
    return this.client.post("/v1/stores/{storeId}/tags/{tagId}/image-upload-finish", options);
  }

  async deleteTagImage(options: DeleteTagImageOptions) {
    return this.client.delete("/v1/stores/{storeId}/tags/{tagId}/image", options);
  }
}
