"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import {
  getLanguageFromLocale,
  i18n,
  translations,
  type Locale,
  type Translation,
} from "@/i18n/translations";

const STORAGE_KEY = "portfolio-language";

type LanguageContextType = {
  language: Locale;
  setLanguage: Dispatch<SetStateAction<Locale>>;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

function isSupportedLanguage(value: string): value is Locale {
  return i18n.locales.includes(value as Locale);
}

function detectBrowserLanguage(): Locale {
  if (typeof navigator === "undefined") return i18n.defaultLocale;
  const candidateLocales = [...navigator.languages, navigator.language];
  for (const locale of candidateLocales) {
    const detected = getLanguageFromLocale(locale);
    if (isSupportedLanguage(detected)) {
      return detected;
    }
  }
  return i18n.defaultLocale;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Locale>(i18n.defaultLocale);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
    const nextLanguage =
      savedLanguage && isSupportedLanguage(savedLanguage)
        ? savedLanguage
        : detectBrowserLanguage();
    const timeoutId = window.setTimeout(() => setLanguage(nextLanguage), 0);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
