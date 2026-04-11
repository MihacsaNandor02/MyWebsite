import { getDictionary } from "@/lib/get-dictionary";
import { Providers } from "@/app/providers";
import { DictionaryProvider } from "@/components/DictionaryProvider";

export type Locale = "en" | "ro";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ro" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <DictionaryProvider dictionary={dictionary}>
      <Providers>
        {children}
      </Providers>
    </DictionaryProvider>
  );
}
