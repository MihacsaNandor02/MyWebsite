import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import Portfolio from "@/components/Portfolio";
import HowItWorks from "@/components/HowItWorks";

import Pricing from "@/components/Pricing";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";
import BackgroundEffect from "@/components/BackgroundEffect";
import { useState } from "react";

const Index = () => {
  const organizationSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://futurebuilds.dev/#organization",
      "name": "Future Builds",
      "url": "https://futurebuilds.dev",
      "logo": {
        "@type": "ImageObject",
        "url": "https://futurebuilds.dev/portfolio/Future Builds - Written-Transparent-Cropped.png"
      },
      "description": "Conversion-focused web design agency helping businesses dominate Google and grow."
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
      "url": "https://futurebuilds.dev",
      "telephone": "+40768919621",
      "priceRange": "€€"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Conversion-Focused Web Design",
      "serviceType": "Web Design",
      "provider": { "@id": "https://futurebuilds.dev/#organization" },
      "description": "High-performance websites designed to turn visitors into buyers with 90-day ranking guarantees."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Google SEO Strategy",
      "serviceType": "Search Engine Optimization",
      "provider": { "@id": "https://futurebuilds.dev/#organization" },
      "description": "Professional SEO services to help businesses rank in the top 5 of Google results."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://futurebuilds.dev"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to see SEO results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We guarantee a Top 5 Google ranking within 90 days for our Growth plan partners, though many see improvements in as little as 30 days."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer custom web design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we build custom, conversion-focused websites tailored to the specific needs of creative agencies and founders."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://futurebuilds.dev",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://futurebuilds.dev/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Future Builds - Conversion-Focused Web Design & SEO Agency",
      "description": "Future Builds crafts high-performance websites and provides expert SEO services to help businesses dominate Google and convert visitors into buyers.",
      "url": "https://futurebuilds.dev"
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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md shadow-xl"
      >
        Skip to content
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
        <Portfolio />
        <div className="bg-card/20 border-y border-white/5">
          <HowItWorks />
        </div>
        <Pricing onSelectPackage={(name) => handleSelectPackage(name, 'website')} id="pricing" />
        <SEO onSelectPackage={(name) => handleSelectPackage(name, 'seo')} id="seo" />
        <ContactSection initialPackage={selectedPackage} packageCategory={packageCategory} id="contact" />
      </main>
      <footer className="py-12 px-4 border-t border-border bg-card/30" role="contentinfo">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <img src="/portfolio/Future Builds - Written-Transparent-Cropped.png" alt="Future Builds" className="h-8 md:h-10 w-auto object-contain" />
            <p className="text-sm text-muted-foreground mt-2">Websites that convert visitors into buyers.</p>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground flex-wrap justify-center">
            <a href="#hero" className="hover:text-primary transition-colors">Future Builds Home</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Case Studies</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">Our Process</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Website Pricing</a>
            <a href="#seo" className="hover:text-primary transition-colors">SEO Services</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact Us</a>
            <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
          <p className="text-xs text-muted-foreground/50">© 2026 Future Builds Agency. Built for growth.</p>

        </div>
      </footer>
    </div>
  );
};

export default Index;
