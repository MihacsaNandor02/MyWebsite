import type { Locale } from "@/app/[locale]/layout";

const dictionaries = {
  en: () => import("@/locales/en/translation.json").then((module) => module.default),
  ro: () => import("@/locales/ro/translation.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  return dictionaries[locale as Locale]();
};
