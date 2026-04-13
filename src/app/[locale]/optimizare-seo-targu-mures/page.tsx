import { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import OptimizareSeoClient from "@/components/OptimizareSeoClient";

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
  const localizedUrl = `${baseUrl}/${locale}/optimizare-seo-targu-mures/`;

  return {
    title: dictionary.services?.optimizare_seo?.page_title,
    description: dictionary.services?.optimizare_seo?.page_desc,
    alternates: {
      canonical: localizedUrl,
      languages: {
        ro: `${baseUrl}/ro/optimizare-seo-targu-mures/`,
        en: `${baseUrl}/en/optimizare-seo-targu-mures/`,
      },
    },
    openGraph: {
      title: dictionary.services?.optimizare_seo?.page_title,
      description: dictionary.services?.optimizare_seo?.page_desc,
      url: localizedUrl,
      siteName: "Future Builds",
      locale: locale === "ro" ? "ro_RO" : "en_US",
      type: "website",
    },
  };
}

export default async function OptimizareSeoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": dictionary.services?.optimizare_seo?.hero_h1 || "Servicii SEO Târgu Mureș",
    "serviceType": "Search Engine Optimization",
    "provider": {
      "@type": "ProfessionalService",
      "@id": "https://futurebuilds.ro/#localbusiness",
    },
    "areaServed": {
      "@type": "City",
      "name": "Târgu Mureș",
    },
    "description": dictionary.services?.optimizare_seo?.page_desc,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "RON",
      "price": "600",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "RON",
        "price": "600",
        "unitText": "MONTH",
        "description": "Planul Local — optimizare SEO lunară",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (dictionary.services?.optimizare_seo?.faq_items || []).map(
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
      <OptimizareSeoClient locale={locale} />
    </>
  );
}
