/** Authentication method. Using 'user' is not recommended */
export type AuthScheme = "user" | "api" | "customer";

// API CLIENT TYPES

export type Method = "get" | "put" | "post" | "delete" | "options" | "head" | "patch" | "trace";

/** @description A validation error. */
interface ValidationError {
  /** @description The parseable error code. */
  code: string;
  /** @description The human-readable error message. */
  message: string;
  /** @description The path leading to the validation error. */
  path: string;
  /** @description Type of the validation that failed. */
  validation: string;
}

/** @description Represents a PayNow error */
export interface PayNowError {
  /**
   * Format: int32
   * @description The HTTP status code.
   * @example 400
   */
  status: number;
  /**
   * @description The PayNow parseable error code.
   * @example bad-request
   */
  code: string;
  /**
   * @description The human-readable error message.
   * @example Bad Request Example
   */
  message: string;
  /**
   * @description A distributed trace ID used for debugging.
   * @example 234a5bcd543ef3fa53ce929d0e0e4736
   */
  trace_id?: string | null;
  /** @description An array of multiple errors. Only used by some API services. */
  errors?: Array<ValidationError> | null;
}

export interface ClientConfig {
  baseUrl: string;
  defaultHeaders: Record<string, string>;
  timeout: number;
}

export interface RequestConfig {
  headers?: Record<string, string>;
  signal?: AbortSignal;
  timeout?: number;
}

export type PathsWithMethod<TPath, TMethod extends Method> = {
  [Key in keyof TPath]: Extract<TMethod, Extract<keyof TPath[Key], string>> extends never
    ? never
    : TPath[Key][TMethod & keyof TPath[Key]] extends never | undefined
      ? never
      : Key;
}[keyof TPath];

export type OperationType<TPaths, TPath, TMethod extends Method> = TPath extends keyof TPaths
  ? TMethod extends keyof TPaths[TPath]
    ? NonNullable<TPaths[TPath][TMethod]>
    : never
  : never;

export type AllParams<TOperation> = TOperation extends { parameters: infer Parameters }
  ? Parameters
  : undefined;

export type IsBodyRequired<TOperation> = TOperation extends { requestBody: { required: true } }
  ? true
  : false;

export type RequestBody<TOperation> = TOperation extends {
  requestBody?: { content: { "application/json": infer Body } };
}
  ? Body
  : never;

export type HasBody<TOperation> = [RequestBody<TOperation>] extends [never] ? false : true;

export type OptionsType<TOperation> = (AllParams<TOperation> extends undefined
  ? // biome-ignore lint/complexity/noBannedTypes: -
    {}
  : { params?: AllParams<TOperation> }) &
  (IsBodyRequired<TOperation> extends true
    ? { body: RequestBody<TOperation> }
    : HasBody<TOperation> extends true
      ? { body?: RequestBody<TOperation> }
      : // biome-ignore lint/complexity/noBannedTypes: -
        {}) & { config?: RequestConfig };

export type SuccessResponse<TOperation> = TOperation extends {
  responses: { 200: { content: { "application/json": infer Response } } };
}
  ? Response
  : TOperation extends { responses: { 201: { content: { "application/json": infer Response } } } }
    ? Response
    : // biome-ignore lint/suspicious/noConfusingVoidType: -
      void;

export type RequestOptions = {
  params?: Record<string, unknown>;
  // query?: Record<string, unknown>;
  // headers?: Record<string, unknown>;
  body?: unknown;
  config?: RequestConfig;
};
