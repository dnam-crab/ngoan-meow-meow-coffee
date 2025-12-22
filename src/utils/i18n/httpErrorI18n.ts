import type { AxiosError } from "axios";

type BackendErrorBody = {
  code?: string;        
  message?: string;     // fallback message backend
  errors?: unknown;     // validation details (optional)
};

// key i18n
export type I18nErrorKey =
  | "errors.network"
  | "errors.timeout"
  | "errors.unauthorized"
  | "errors.forbidden"
  | "errors.notFound"
  | "errors.conflict"
  | "errors.tooManyRequests"
  | "errors.server"
  | "errors.badRequest"
  | "errors.invalidCredentials"
  | "errors.validation"
  | "errors.unknown";

export function mapAxiosErrorToI18n(
  error: unknown
): { key: I18nErrorKey; fallbackMessage?: string; status?: number } {
  const ax = error as AxiosError<BackendErrorBody>;

  // Không có response => network / CORS / DNS / offline
  if (!ax?.response) {
    // axios timeout = "ECONNABORTED"
    if ((ax as any)?.code === "ECONNABORTED") {
      return { key: "errors.timeout" };
    }
    return { key: "errors.network" };
  }

  const status = ax.response.status;
  const data = ax.response.data;

  const code = data?.code?.toUpperCase();
  if (code) {
    switch (code) {
      case "INVALID_CREDENTIALS":
        return { key: "errors.invalidCredentials", status };
      case "VALIDATION_ERROR":
        return { key: "errors.validation", status };
      case "UNAUTHORIZED":
        return { key: "errors.unauthorized", status };
      case "FORBIDDEN":
        return { key: "errors.forbidden", status };
      case "NOT_FOUND":
        return { key: "errors.notFound", status };
      case "CONFLICT":
        return { key: "errors.conflict", status };
      case "TOO_MANY_REQUESTS":
        return { key: "errors.tooManyRequests", status };
      default:
        break;
    }
  }

  // 3) Map HTTP status
  switch (status) {
    case 400:
      return { key: "errors.badRequest", status, fallbackMessage: data?.message };
    case 401:
      return { key: "errors.unauthorized", status };
    case 403:
      return { key: "errors.forbidden", status };
    case 404:
      return { key: "errors.notFound", status };
    case 409:
      return { key: "errors.conflict", status };
    case 422:
      return { key: "errors.validation", status };
    case 429:
      return { key: "errors.tooManyRequests", status };
    default:
      if (status >= 500) return { key: "errors.server", status };
      return { key: "errors.unknown", status, fallbackMessage: data?.message };
  }
}
