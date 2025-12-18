import type { TFunction } from "i18next";

export function validateEmail(value: string, t: TFunction): string | null {
  if (!value) return t("errors.emailRequired");
  if (!/^\S+@\S+\.\S+$/.test(value)) return t("errors.emailInvalid");
  return null;
}

export function validatePassword(
  value: string,
  t: TFunction,
  minLength = 6
): string | null {
  if (!value) return t("errors.passwordRequired");
  if (value.length < minLength)
    return t("errors.passwordMin", { min: minLength });
  return null;
}
