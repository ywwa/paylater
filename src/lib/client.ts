import axios from "axios";
import { ApiClientError } from "./client-error";
import { BASE_URL, TIMEOUT } from "./constants";
import type {
  AuthScheme,
  ClientConfig,
  Method,
  OperationType,
  OptionsType,
  PathsWithMethod,
  RequestOptions,
  SuccessResponse,
} from "./types";

export class APIClient<TPaths> {
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;
  private timeout: number;
  private authToken?: string;
  private authScheme?: AuthScheme;

  constructor(config?: Partial<ClientConfig>) {
    this.baseUrl = (config?.baseUrl || BASE_URL).replace(/\/$/, "");
    this.defaultHeaders = config?.defaultHeaders || {};
    this.timeout = config?.timeout || TIMEOUT;
  }

  setToken(scheme: AuthScheme, token: string): void {
    this.authScheme = scheme;
    this.authToken = token;
  }

  clearToken(): void {
    this.authToken = undefined;
    this.authScheme = undefined;
  }

  setDefaultHeader(key: string, value: string): void {
    this.defaultHeaders[key] = value;
  }

  removeDefaultHeader(key: string): void {
    delete this.defaultHeaders[key];
  }

  private async makeRequest<T>(method: Method, path: string, options?: RequestOptions): Promise<T> {
    const {
      params = {} as {
        path?: Record<string, unknown>;
        query?: Record<string, unknown>;
        header?: Record<string, unknown>;
        cookie?: Record<string, unknown>;
      },
      body,
      config = {},
    } = options || {};

    let url = path;

    // Handle path parameters
    if ("path" in params && typeof params.path === "object" && params.path !== null) {
      if (Object.keys(params.path).length) {
        Object.entries(params.path).forEach(([key, value]) => {
          url = url.replace(`{${key}}`, encodeURIComponent(String(value)));
        });
      }
    }

    // Search param setup
    const searchParams = new URLSearchParams();
    if ("query" in params && typeof params.query === "object" && params.query !== null) {
      if (Object.keys(params.query).length) {
        Object.entries(params.query).forEach(([key, value]) => {
          if (Array.isArray(value)) value.forEach((v) => searchParams.append(key, String(v)));
          else searchParams.append(key, String(value));
        });
      }
    }

    const queryString = searchParams.toString();
    if (queryString) url += `?${queryString}`;

    // Header Setup
    const requestHeaders: Record<string, string> = {
      ...this.defaultHeaders,
      ...Object.fromEntries(Object.entries(params.header ?? {}).map(([k, v]) => [k, String(v)])),
      ...Object.fromEntries(Object.entries(params.cookie ?? {}).map(([k, v]) => [k, String(v)])),
      ...Object.fromEntries(Object.entries(config.headers ?? {}).map(([k, v]) => [k, String(v)])),
    };

    console.log(requestHeaders);

    // Inject Authorization header if token is set and not explicitly overriden
    if (this.authToken && !requestHeaders.Authorization) {
      requestHeaders.Authorization = `${this.authScheme} ${this.authToken}`;
    }

    if (body && !requestHeaders["Content-Type"] && !requestHeaders["content-type"]) {
      requestHeaders["Content-Type"] = "application/json";
    }

    const controller = new AbortController();
    const timeoutValue = config?.timeout || this.timeout;
    const timeoutId = setTimeout(() => controller.abort(), timeoutValue);

    if (config.signal) {
      config.signal.addEventListener("abort", () => {
        controller.abort();
      });
    }

    try {
      const response = await axios({
        baseURL: this.baseUrl,
        url,
        method: method.toUpperCase(),
        headers: requestHeaders,
        data: body ? body : undefined,
        signal: controller.signal,
        timeout: config?.timeout || this.timeout,
        validateStatus: () => true,
      });

      clearTimeout(timeoutId);

      if (response.status === 204) {
        return undefined as T;
      }

      const responseData: unknown = response.data;

      if (!response.status || response.status < 200 || response.status >= 300) {
        if (
          responseData &&
          typeof responseData === "object" &&
          responseData !== null &&
          "code" in responseData &&
          "message" in responseData &&
          "status" in responseData
        ) {
          throw responseData;
        }

        throw new ApiClientError(`Request failed with status ${response.status}`);
      }

      // TODO: handle correct data transformation, (Dates)

      return responseData as T;
    } catch (error) {
      clearTimeout(timeoutId);
      if (
        error &&
        typeof error === "object" &&
        "code" in error &&
        "message" in error &&
        "status" in error
      ) {
        throw error;
      }

      if (error instanceof ApiClientError) {
        throw error;
      }

      if (error instanceof Error && error.name === "AbortError") {
        throw new ApiClientError("Request Timeout");
      }

      throw new ApiClientError(error instanceof Error ? error.message : "Unknown Error occured");
    }
  }

  async get<
    Path extends PathsWithMethod<TPaths, "get">,
    Operation extends OperationType<TPaths, Path, "get">,
  >(path: Path, options: OptionsType<Operation>): Promise<SuccessResponse<Operation>> {
    const params =
      "params" in options && typeof options.params === "object" && options.params !== null
        ? (options.params as Record<string, unknown>)
        : undefined;
    const config = options.config;

    return this.makeRequest("get", path as string, {
      params,
      config,
    });
  }

  async post<
    Path extends PathsWithMethod<TPaths, "post">,
    Operation extends OperationType<TPaths, Path, "post">,
  >(path: Path, options: OptionsType<Operation>): Promise<SuccessResponse<Operation>> {
    const params =
      "params" in options && typeof options.params === "object" && options.params !== null
        ? (options.params as Record<string, unknown>)
        : undefined;
    const body = "body" in options ? options.body : undefined;
    const config = options.config;

    return this.makeRequest("post", path as string, {
      params,
      body,
      config,
    });
  }

  async put<
    Path extends PathsWithMethod<TPaths, "put">,
    Operation extends OperationType<TPaths, Path, "put">,
  >(path: Path, options: OptionsType<Operation>): Promise<SuccessResponse<Operation>> {
    const params =
      "params" in options && typeof options.params === "object" && options.params !== null
        ? (options.params as Record<string, unknown>)
        : undefined;
    const body = "body" in options ? options.body : undefined;
    const config = options.config;

    return this.makeRequest("put", path as string, {
      params,
      body,
      config,
    });
  }

  async patch<
    Path extends PathsWithMethod<TPaths, "patch">,
    Operation extends OperationType<TPaths, Path, "patch">,
  >(path: Path, options: OptionsType<Operation>): Promise<SuccessResponse<Operation>> {
    const params =
      "params" in options && typeof options.params === "object" && options.params !== null
        ? (options.params as Record<string, unknown>)
        : undefined;
    const body = "body" in options ? options.body : undefined;
    const config = options.config;

    return this.makeRequest("patch", path as string, {
      params,
      body,
      config,
    });
  }

  async delete<
    Path extends PathsWithMethod<TPaths, "delete">,
    Operation extends OperationType<TPaths, Path, "delete">,
  >(path: Path, options: OptionsType<Operation>): Promise<SuccessResponse<Operation>> {
    const params =
      "params" in options && typeof options.params === "object" && options.params !== null
        ? (options.params as Record<string, unknown>)
        : undefined;
    const body = "body" in options ? options.body : undefined;
    const config = options.config;

    return this.makeRequest("delete", path as string, {
      params,
      body,
      config,
    });
  }
}
