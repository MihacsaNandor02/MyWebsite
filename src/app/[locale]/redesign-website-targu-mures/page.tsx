import { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import RedesignPageClient from "@/components/RedesignPageClient";

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
  const localizedUrl = `${baseUrl}/${locale}/redesign-website-targu-mures/`;

  return {
    title: dictionary.services?.redesign_website?.page_title,
    description: dictionary.services?.redesign_website?.page_desc,
    alternates: {
      canonical: localizedUrl,
      languages: {
        ro: `${baseUrl}/ro/redesign-website-targu-mures/`,
        en: `${baseUrl}/en/redesign-website-targu-mures/`,
      },
    },
    openGraph: {
      title: dictionary.services?.redesign_website?.page_title,
      description: dictionary.services?.redesign_website?.page_desc,
      url: localizedUrl,
      siteName: "Future Builds",
      locale: locale === "ro" ? "ro_RO" : "en_US",
      type: "website",
    },
  };
}

export default async function RedesignWebsitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": dictionary.services?.redesign_website?.h1 || "Redesign Website Târgu Mureș",
    "serviceType": "Website Redesign",
    "provider": {
      "@type": "ProfessionalService",
      "@id": "https://futurebuilds.ro/#localbusiness",
    },
    "areaServed": {
      "@type": "City",
      "name": "Târgu Mureș",
    },
    "description": dictionary.services?.redesign_website?.page_desc,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (dictionary.services?.redesign_website?.faq_items || []).map(
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
      <RedesignPageClient locale={locale} />
    </>
  );
}
