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
  const localizedUrl = `${baseUrl}/${locale}/creare-site-web/`;

  return {
    title: dictionary.services?.creare_site?.page_title,
    description: dictionary.services?.creare_site?.page_desc,
    alternates: {
      canonical: localizedUrl,
      languages: {
        ro: `${baseUrl}/ro/creare-site-web/`,
        en: `${baseUrl}/en/creare-site-web/`,
      },
    },
    openGraph: {
      title: dictionary.services?.creare_site?.page_title,
      description: dictionary.services?.creare_site?.page_desc,
      url: localizedUrl,
      siteName: "Future Builds",
      locale: locale === "ro" ? "ro_RO" : "en_US",
      type: "website",
    },
  };
}

export default async function CreareSiteWebPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": dictionary.services?.creare_site?.h1 || "Creare Site Web Târgu Mureș",
    "serviceType": "Web Design",
    "provider": {
      "@type": "ProfessionalService",
      "@id": "https://futurebuilds.ro/#localbusiness",
    },
    "areaServed": {
      "@type": "City",
      "name": "Târgu Mureș",
    },
    "description": dictionary.services?.creare_site?.page_desc,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "RON",
      "price": "2497",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "RON",
        "price": "2497",
        "description": "Planul Essential — creare site web profesional",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (dictionary.services?.creare_site?.faq_items || []).map(
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
      <ServicePageClient serviceKey="creare_site" locale={locale} />
    </>
  );
}
