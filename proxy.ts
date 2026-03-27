import { match as matchLocale } from "@formatjs/intl-localematcher";
import { NextResponse, type NextRequest } from "next/server";
import { i18n, type Locale } from "@/i18n.config";

function getPreferredLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return i18n.defaultLocale;

  const requestedLocales = acceptLanguage
    .split(",")
    .map((language) => language.split(";")[0]?.trim())
    .filter((language): language is string => Boolean(language));

  if (requestedLocales.length === 0) return i18n.defaultLocale;

  return matchLocale(requestedLocales, i18n.locales, i18n.defaultLocale) as Locale;
}

function hasLocale(pathname: string) {
  return i18n.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (hasLocale(pathname)) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);
  const pathnameWithLocale = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(new URL(pathnameWithLocale, request.url));
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
