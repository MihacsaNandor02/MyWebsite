import { Metadata, Viewport } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import IndexClient from "@/components/IndexClient";

export async function generateViewport(): Promise<Viewport> {
  return {
    themeColor: [
      { media: "(prefers-color-scheme: dark)", color: "#000000" },
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    ],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const baseUrl = "https://futurebuilds.ro";
  const localizedUrl = `${baseUrl}/${locale}/`;

  return {
    title: dictionary.seo.page_title,
    description: dictionary.seo.page_desc,
    alternates: {
      canonical: localizedUrl,
      languages: {
        ro: `${baseUrl}/ro/`,
        en: `${baseUrl}/en/`,
      },
    },
    openGraph: {
      title: dictionary.seo.page_title,
      description: dictionary.seo.page_desc,
      url: localizedUrl,
      siteName: "FutureBuilds",
      locale: locale === "ro" ? "ro_RO" : "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/portfolio/Future%20Builds%20-%20Written-Transparent-Cropped.png`,
          width: 1200,
          height: 630,
          alt: dictionary.seo.page_title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@FutureBuilds",
      title: dictionary.seo.page_title,
      description: dictionary.seo.page_desc,
      images: [`${baseUrl}/portfolio/Future%20Builds%20-%20Written-Transparent-Cropped.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function IndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const baseUrl = "https://futurebuilds.ro";
  const localizedUrl = `${baseUrl}/${locale}/`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://futurebuilds.ro/#organization",
        "name": "Future Builds",
        "url": localizedUrl,
        "logo": {
          "@type": "ImageObject",
          "url": "https://futurebuilds.ro/portfolio/Future%20Builds%20-%20Written-Transparent-Cropped.png"
        },
        "description": dictionary.seo.org_desc
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://futurebuilds.ro/#localbusiness",
        "name": "Future Builds",
        "image": "https://futurebuilds.ro/portfolio/Future%20Builds%20-%20Written-Transparent-Cropped.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bulevardul 1 Decembrie 1918 213",
          "addressLocality": "Târgu Mureș",
          "addressRegion": "Mureș",
          "postalCode": "540000",
          "addressCountry": "RO"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "46.5456",
          "longitude": "24.5625"
        },
        "url": localizedUrl,
        "telephone": "+40768919621",
        "email": "contact@futurebuilds.ro",
        "priceRange": "€€",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "08:00",
            "closes": "20:00"
          }
        ],
        "areaServed": {
          "@type": "City",
          "name": "Târgu Mureș"
        },
        "sameAs": [
          "https://www.facebook.com/futurebuilds",
          "https://wa.me/40768919621",
          "https://share.google/NDhbCtHrpMYGIuXLh"
        ]
      },
      {
        "@type": "Service",
        "name": dictionary.seo.service_web_title,
        "serviceType": "Web Design",
        "provider": { "@id": "https://futurebuilds.ro/#organization" },
        "areaServed": { "@type": "City", "name": "Târgu Mureș" },
        "description": dictionary.seo.service_web_desc
      },
      {
        "@type": "Service",
        "name": dictionary.seo.service_seo_title,
        "serviceType": "Search Engine Optimization",
        "provider": { "@id": "https://futurebuilds.ro/#organization" },
        "areaServed": { "@type": "City", "name": "Târgu Mureș" },
        "description": dictionary.seo.service_seo_desc
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": dictionary.seo.breadcrumb_home,
            "item": localizedUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": dictionary.faq.items.how_long_q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": dictionary.faq.items.how_long_a
            }
          },
          {
            "@type": "Question",
            "name": dictionary.faq.items.seo_results_time_q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": dictionary.faq.items.seo_results_time_a
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "name": dictionary.seo.page_title,
        "description": dictionary.seo.page_desc,
        "url": localizedUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <IndexClient locale={locale} />
    </>
  );
}
