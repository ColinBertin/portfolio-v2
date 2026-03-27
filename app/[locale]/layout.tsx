import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { I18nProvider } from "@/app/i18n-provider";
import { getDictionary } from "@/dictionaries/getDictionary";
import { i18n, type Locale } from "@/i18n.config";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!i18n.locales.includes(locale as Locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale as Locale);

  return (
    <I18nProvider locale={locale as Locale} dictionary={dictionary}>
      <Navbar />
      {children}
    </I18nProvider>
  );
}
