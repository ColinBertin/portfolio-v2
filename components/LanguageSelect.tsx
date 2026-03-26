"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { i18n, type Locale } from "@/i18n/translations";

export default function LanguageSelect() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <label className="flex items-center gap-2 text-sm text-secondary">
      <span className="sr-only">{t.nav.languageLabel}</span>
      <select
        aria-label={t.nav.languageLabel}
        value={language}
        onChange={(e) => setLanguage(e.target.value as Locale)}
        className="cursor-pointer rounded-md border border-tertiary/30 bg-bg px-2 py-1 text-secondary outline-none focus:border-pink-500"
      >
        {i18n.locales.map((lang) => (
          <option key={lang} value={lang}>
            {t.languageNames[lang]}
          </option>
        ))}
      </select>
    </label>
  );
}
