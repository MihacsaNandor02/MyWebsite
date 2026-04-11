import { getDictionary } from "@/lib/get-dictionary";
import { Providers } from "@/app/providers";
import { DictionaryProvider } from "@/components/DictionaryProvider";
import HtmlLangSetter from "@/components/HtmlLangSetter";

export type Locale = "en" | "ro";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ro" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale as Locale);

  return (
    <DictionaryProvider dictionary={dictionary}>
      <HtmlLangSetter locale={locale} />
      <Providers>
        {children}
      </Providers>
    </DictionaryProvider>
  );
}
