import type { Management } from "../../generated";
import { APIClient } from "../../lib/client";
import type { AuthScheme, ClientConfig, OptionsType } from "../../lib/types";

type GetDownloadableFilesOptions = OptionsType<
  Management.operations["ProductsDownloadableFile_GetDownloadableFiles"]
>;
type StartDownloadableFileUploadOptions = OptionsType<
  Management.operations["ProductsDownloadableFile_StartDownloadableFileUpload"]
>;
type FinishDownloadableFileUploadOptions = OptionsType<
  Management.operations["ProductsDownloadableFile_FinishDownloadableFileUpload"]
>;
type CreateDownloadUrlOptions = OptionsType<
  Management.operations["ProductsDownloadableFile_CreateDownloadUrl"]
>;
type DeleteDownloadableFileOptions = OptionsType<
  Management.operations["ProductsDownloadableFile_DeleteDownloadableFile"]
>;

export class DownloadableFileAPI {
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

  async getDownloadableFiles(options: GetDownloadableFilesOptions) {
    return this.client.get("/v1/stores/{storeId}/products/{productId}/downloadable-files", options);
  }

  async startDownloadableFileUpload(options: StartDownloadableFileUploadOptions) {
    return this.client.post(
      "/v1/stores/{storeId}/products/{productId}/downloadable-files",
      options,
    );
  }

  async finishDownloadableFileUpload(options: FinishDownloadableFileUploadOptions) {
    return this.client.post(
      "/v1/stores/{storeId}/products/{productId}/downloadable-files/{downloadableFileId}/finish",
      options,
    );
  }

  async createDownloadUrl(options: CreateDownloadUrlOptions) {
    return this.client.get(
      "/v1/stores/{storeId}/products/{productId}/downloadable-files/{downloadableFileId}/download-url",
      options,
    );
  }

  async deleteDownloadableFile(options: DeleteDownloadableFileOptions) {
    return this.client.delete(
      "/v1/stores/{storeId}/products/{productId}/downloadable-files/{downloadableFileId}",
      options,
    );
  }
}
