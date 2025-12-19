import { isAxiosError } from "axios";
import type { TFunction } from "i18next";
import type { ApiErrorBody } from "../../services/http";

export function getHttpErrorMessage(err: unknown, t: TFunction): string {
  if (!isAxiosError<ApiErrorBody>(err)) return t("errors.unknown");

  const status = err.response?.status;
  if (!status) return t("errors.network");

  if (status === 401) return t("errors.unauthorized");
  if (status === 403) return t("errors.forbidden");
  if (status >= 500) return t("errors.server");

  const msg = err.response?.data?.message;
  if (typeof msg === "string" && msg.trim().length > 0) return msg;

  return t("errors.unknown");
}
