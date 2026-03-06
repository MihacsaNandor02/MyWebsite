import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import Portfolio from "@/components/Portfolio";
import HowItWorks from "@/components/HowItWorks";

import Pricing from "@/components/Pricing";
import ContactSection from "@/components/ContactSection";
import BackgroundEffect from "@/components/BackgroundEffect";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Design Hug",
    "url": "https://designhug.com",
    "logo": "https://designhug.com/logo.png",
    "sameAs": [
      "https://twitter.com/designhug",
      "https://linkedin.com/company/designhug"
    ],
    "description": "Conversion-focused web design agency helping businesses dominate Google and grow.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "UK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-000-000-0000",
      "contactType": "customer service"
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-primary/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <BackgroundEffect />
      <Header />
      <main id="main-content">
        <Hero />
        <div className="relative z-10">
          <ProblemSection />
        </div>
        <SolutionSection />
        <Portfolio />
        <div className="bg-card/20 border-y border-white/5">
          <HowItWorks />
        </div>
        <Pricing />
        <ContactSection />
      </main>
      <footer className="py-12 px-4 border-t border-border bg-card/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-xl text-primary">Design Hug</span>
            <p className="text-sm text-muted-foreground">Websites that convert visitors into buyers.</p>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground flex-wrap justify-center">
            <a href="#hero" className="hover:text-primary transition-colors">Home</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Case Studies</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">Process</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact Us</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
          <p className="text-xs text-muted-foreground/50">© 2026 Design Hug Agency. Built for growth.</p>

        </div>
      </footer>
    </div>
  );
};

export default Index;
