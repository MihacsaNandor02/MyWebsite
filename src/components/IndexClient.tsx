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
      <footer className="py-12 px-4 border-t border-border bg-card/30" role="contentinfo">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <img src="/portfolio/Future Builds - Written-Transparent-Cropped.png" alt="Future Builds — Agenție Web Design Târgu Mureș" className="h-8 md:h-10 w-auto object-contain" />
            <p className="text-sm text-muted-foreground mt-2">{dictionary.footer.tagline}</p>
          </div>
          <div className="flex gap-x-6 gap-y-3 text-sm text-muted-foreground flex-wrap justify-center">
            <a href="#hero" className="hover:text-primary transition-colors">{dictionary.footer.link_home}</a>
            <a href={`/${locale}/creare-site-web/`} className="hover:text-primary transition-colors">{locale === 'ro' ? 'Creare Site Web' : 'Web Design'}</a>
            <a href={`/${locale}/optimizare-seo/`} className="hover:text-primary transition-colors">{locale === 'ro' ? 'Optimizare SEO' : 'SEO Services'}</a>
            <a href={`/${locale}/redesign-website/`} className="hover:text-primary transition-colors">{locale === 'ro' ? 'Redesign Website' : 'Website Redesign'}</a>
            <a href={`/${locale}/mentenanta-website/`} className="hover:text-primary transition-colors">{locale === 'ro' ? 'Mentenanță' : 'Maintenance'}</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">{dictionary.footer.link_portfolio}</a>
            <a href="#pricing" className="hover:text-primary transition-colors">{dictionary.footer.link_pricing}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{dictionary.footer.link_contact}</a>
            <a href={`/${locale}/privacy-policy`} className="hover:text-primary transition-colors">{dictionary.footer.link_privacy}</a>
            <a href={`/${locale}/terms-of-service`} className="hover:text-primary transition-colors">{dictionary.footer.link_terms}</a>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            {/* Visible NAP for Local SEO */}
            <address className="not-italic text-xs text-muted-foreground/60 text-center md:text-right leading-relaxed">
              <span className="font-medium text-muted-foreground/80">Future Builds</span><br />
              Bulevardul 1 Decembrie 1918 213, Târgu Mureș 540000<br />
              <a href="tel:+40768919621" className="hover:text-primary transition-colors">+40 768 919 621</a>
              {" · "}
              <a href="mailto:contact@futurebuilds.ro" className="hover:text-primary transition-colors">contact@futurebuilds.ro</a>
            </address>
            <a
              href="https://maps.google.com/?q=Future+Builds+Bulevardul+1+Decembrie+1918+213+Targu+Mures"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary/60 hover:text-primary transition-colors mt-1"
            >
              📍 {locale === 'ro' ? 'Vezi pe Google Maps' : 'View on Google Maps'}
            </a>
            <p className="text-xs text-muted-foreground/50 mt-1">{dictionary.footer.copyright.replace('{{year}}', new Date().getFullYear().toString())}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
