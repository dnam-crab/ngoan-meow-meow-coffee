export const LANGUAGES = {
  vi: "vi",
  en: "en",
} as const;

export type AppLanguage = keyof typeof LANGUAGES;
