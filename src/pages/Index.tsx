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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Future Builds",
    "url": "https://futurebuilds.dev",
    "logo": "https://futurebuilds.dev/portfolio/Future Builds - Written-Transparent-Cropped.png",
    "email": "futurebuilds@futurebuilds.dev",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bulevardul 1 Decembrie 1918 213",
      "addressLocality": "Targu Mures",
      "addressCountry": "RO"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+40768919621",
      "contactType": "customer service",
      "email": "futurebuilds@futurebuilds.dev"
    },
    "sameAs": [
      "https://twitter.com/futurebuilds",
      "https://linkedin.com/company/futurebuilds"
    ],
    "description": "Conversion-focused web design agency helping businesses dominate Google and grow."
  };

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
            <a href="#about" className="hover:text-primary transition-colors">About Us</a>
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
