import { getDictionary } from "@/lib/get-dictionary";
import { Providers } from "@/app/providers";
import { DictionaryProvider } from "@/components/DictionaryProvider";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} font-sans antialiased bg-background text-foreground`}>
        <DictionaryProvider dictionary={dictionary}>
          <Providers>
            {children}
          </Providers>
        </DictionaryProvider>
      </body>
    </html>
  );
}
