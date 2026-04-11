import { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import ServicePageClient from "@/components/ServicePageClient";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ro" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const baseUrl = "https://futurebuilds.ro";
  const localizedUrl = `${baseUrl}/${locale}/mentenanta-website/`;

  return {
    title: dictionary.services?.mentenanta_website?.page_title,
    description: dictionary.services?.mentenanta_website?.page_desc,
    alternates: {
      canonical: localizedUrl,
      languages: {
        ro: `${baseUrl}/ro/mentenanta-website/`,
        en: `${baseUrl}/en/mentenanta-website/`,
      },
    },
    openGraph: {
      title: dictionary.services?.mentenanta_website?.page_title,
      description: dictionary.services?.mentenanta_website?.page_desc,
      url: localizedUrl,
      siteName: "Future Builds",
      locale: locale === "ro" ? "ro_RO" : "en_US",
      type: "website",
    },
  };
}

export default async function MentenantaWebsitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": dictionary.services?.mentenanta_website?.h1 || "Mentenanță Website Târgu Mureș",
    "serviceType": "Website Maintenance",
    "provider": {
      "@type": "ProfessionalService",
      "@id": "https://futurebuilds.ro/#localbusiness",
    },
    "areaServed": {
      "@type": "City",
      "name": "Târgu Mureș",
    },
    "description": dictionary.services?.mentenanta_website?.page_desc,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (dictionary.services?.mentenanta_website?.faq_items || []).map(
      (faq: { q: string; a: string }) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageClient serviceKey="mentenanta_website" locale={locale} />
    </>
  );
}
