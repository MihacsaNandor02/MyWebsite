import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import Portfolio from "@/components/Portfolio";
import LeadFocus from "@/components/LeadFocus";
import HowItWorks from "@/components/HowItWorks";

import Pricing from "@/components/Pricing";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import BackgroundEffect from "@/components/BackgroundEffect";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'ro';
  const baseUrl = "https://futurebuilds.dev";
  const localizedUrl = currentLang === 'en' ? `${baseUrl}/en/` : `${baseUrl}/`;

  const organizationSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://futurebuilds.dev/#organization",
      "name": "Future Builds",
      "url": localizedUrl,
      "logo": {
        "@type": "ImageObject",
        "url": "https://futurebuilds.dev/portfolio/Future Builds - Written-Transparent-Cropped.png"
      },
      "description": t("seo.org_desc")
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://futurebuilds.dev/#localbusiness",
      "name": "Future Builds",
      "image": "https://futurebuilds.dev/portfolio/Future Build - Logo and BG with write - Cropped.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bulevardul 1 Decembrie 1918 213",
        "addressLocality": "Targu Mures",
        "addressCountry": "RO"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "46.5456",
        "longitude": "24.5625"
      },
      "url": localizedUrl,
      "telephone": "+40768919621",
      "priceRange": "€€"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": t("seo.service_web_title"),
      "serviceType": "Web Design",
      "provider": { "@id": "https://futurebuilds.dev/#organization" },
      "description": t("seo.service_web_desc")
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": t("seo.service_seo_title"),
      "serviceType": "Search Engine Optimization",
      "provider": { "@id": "https://futurebuilds.dev/#organization" },
      "description": t("seo.service_seo_desc")
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": t("seo.breadcrumb_home"),
          "item": localizedUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": t("faq.items.how_long_q"),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": t("faq.items.how_long_a")
          }
        },
        {
          "@type": "Question",
          "name": t("faq.items.seo_results_time_q"),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": t("faq.items.seo_results_time_a")
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": localizedUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${localizedUrl}search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": t("seo.page_title"),
      "description": t("seo.page_desc"),
      "url": localizedUrl
    }
  ];

  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [packageCategory, setPackageCategory] = useState<'website' | 'seo' | null>(null);

  const handleSelectPackage = (packageName: string, category: 'website' | 'seo') => {
    setSelectedPackage(packageName);
    setPackageCategory(category);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative selection:bg-primary/30">
      <Helmet>
        <title>{t("seo.page_title")}</title>
        <meta name="description" content={t("seo.page_desc")} />
        <link rel="canonical" href={localizedUrl} />
      </Helmet>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md shadow-xl"
      >
        {currentLang === 'ro' ? "Sari la conținut" : "Skip to content"}
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <BackgroundEffect />
      <Header />
      <main id="main-content" role="main" tabIndex={-1}>
        <Hero id="hero" />
        <div className="relative z-10" id="problems">
          <ProblemSection />
        </div>
        <SolutionSection />
        <LeadFocus />
        <Portfolio />
        <div className="bg-card/20 border-y border-white/5">
          <HowItWorks />
        </div>
        <Pricing onSelectPackage={(name) => handleSelectPackage(name, 'website')} id="pricing" />
        <SEO onSelectPackage={(name) => handleSelectPackage(name, 'seo')} id="seo" />
        <FAQSection />
        <ContactSection initialPackage={selectedPackage} packageCategory={packageCategory} id="contact" />
      </main>
      <footer className="py-12 px-4 border-t border-border bg-card/30" role="contentinfo">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <img src="/portfolio/Future Builds - Written-Transparent-Cropped.png" alt="Future Builds" className="h-8 md:h-10 w-auto object-contain" />
            <p className="text-sm text-muted-foreground mt-2">{t("footer.tagline")}</p>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground flex-wrap justify-center">
            <a href="#hero" className="hover:text-primary transition-colors">{t("footer.link_home")}</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">{t("footer.link_portfolio")}</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">{t("footer.link_process")}</a>
            <a href="#pricing" className="hover:text-primary transition-colors">{t("footer.link_pricing")}</a>
            <a href="#seo" className="hover:text-primary transition-colors">{t("footer.link_seo")}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{t("footer.link_contact")}</a>
            <a href="/privacy-policy" className="hover:text-primary transition-colors">{t("footer.link_privacy")}</a>
            <a href="/terms-of-service" className="hover:text-primary transition-colors">{t("footer.link_terms")}</a>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-xs text-muted-foreground/50">{t("footer.copyright", { year: new Date().getFullYear() })}</p>
            {/* Hidden Address Block for SEO */}
            <div className="hidden sr-only">
              <address>
                Future Builds Agency<br />
                Bulevardul 1 Decembrie 1918 213<br />
                Targu Mures, {t("seo.addr_country_full")} 540000<br />
                {t("seo.addr_phone")}: +40768919621<br />
                {t("seo.addr_email")}: hello@futurebuilds.dev
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
