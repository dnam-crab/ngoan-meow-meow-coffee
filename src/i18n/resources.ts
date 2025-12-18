import viCommon from "../locales/vi/common.";
import enCommon from "../locales/en/common";

export const resources = {
  vi: { common: viCommon },
  en: { common: enCommon },
} as const;

export type AppLanguage = keyof typeof resources;
