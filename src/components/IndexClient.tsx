"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import Portfolio from "@/components/Portfolio";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import BackgroundEffect from "@/components/BackgroundEffect";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useDictionary } from "@/components/DictionaryProvider";

export default function IndexClient({ locale }: { locale: string }) {
  const dictionary = useDictionary();
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
        {locale === 'ro' ? "Sari la conținut" : "Skip to content"}
      </a>

      <BackgroundEffect />
      <Header />
      <main id="main-content" role="main" tabIndex={-1}>
        <Hero id="hero" />
        <div className="relative z-10" id="problems">
          <ProblemSection />
        </div>
        <SolutionSection locale={locale} />
        <Portfolio />
        <div className="bg-card/20 border-y border-white/5">
          <HowItWorks />
        </div>
        <Pricing onSelectPackage={(name) => handleSelectPackage(name, 'website')} id="pricing" />
        <SEO onSelectPackage={(name) => handleSelectPackage(name, 'seo')} id="seo" />
        <FAQSection />
        <ContactSection initialPackage={selectedPackage} packageCategory={packageCategory} id="contact" />
      </main>
      <Footer />
    </div>
  );
}
