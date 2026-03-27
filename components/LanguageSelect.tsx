"use client";

import { useI18n } from "@/app/i18n-provider";
import { i18n, type Locale } from "@/i18n.config";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSelect() {
  const { locale, dictionary: t } = useI18n();
  const pathname = usePathname();
  const router = useRouter();

  const localePattern = new RegExp(`^/(${i18n.locales.join("|")})(?=/|$)`);

  function handleLocaleChange(nextLocale: Locale) {
    const pathWithoutLocale = pathname.replace(localePattern, "") || "/";
    const nextPath = `/${nextLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
    const hash = window.location.hash ?? "";
    router.push(`${nextPath}${hash}`);
  }

  return (
    <label className="flex items-center gap-2 text-sm text-secondary">
      <span className="sr-only">{t.nav.languageLabel}</span>
      <select
        aria-label={t.nav.languageLabel}
        value={locale}
        onChange={(e) => handleLocaleChange(e.target.value as Locale)}
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
