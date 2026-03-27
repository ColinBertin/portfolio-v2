import type { Locale } from "@/i18n.config";
import { dictionaryEn } from "./dictionary.en";
import { dictionaryFr } from "./dictionary.fr";
import { dictionaryJa } from "./dictionary.ja";

const dictionaries = {
  en: () => dictionaryEn,
  fr: () => dictionaryFr,
  ja: () => dictionaryJa,
} as const;

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
