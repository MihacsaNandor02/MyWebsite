"use client";

import Header from "@/components/Header";
import BackgroundEffect from "@/components/BackgroundEffect";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { useDictionary } from "@/components/DictionaryProvider";
import { t } from "@/lib/t";
import { Check, Phone, ArrowRight, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

interface CreareSiteClientProps {
  locale: string;
}

export default function CreareSiteTarguMuresClient({ locale }: CreareSiteClientProps) {
  const dictionary = useDictionary();
  const pathname = usePathname();

  const handleSelectPackage = (packageName: string) => {
    // Navigate to contact or open a modal. For now, scroll to CTA.
    const ctaSection = document.getElementById("service-cta");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const c = (key: string) => t(dictionary, `services.creare_site_targu_mures.${key}`);
  const features = t(dictionary, `services.creare_site_targu_mures.features`) as Array<{ title: string; desc: string }>;
  const genericSvc = (key: string) => t(dictionary, `services.creare_site.${key}`);
  const faqItems = t(dictionary, `services.creare_site.faq_items`) as Array<{ q: string; a: string }>;

  return (
    <div key={pathname} className="min-h-screen relative selection:bg-primary/30 font-sans">


      <BackgroundEffect />
      <Header />

      <main id="main-content" role="main">
        {/* 1. Hero Section */}
        <section className="pt-32 pb-24 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-white/5 w-fit mx-auto px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                <li>
                  <Link href={`/${locale}/`} className="hover:text-primary transition-colors font-medium">
                    {t(dictionary, "seo.breadcrumb_home")}
                  </Link>
                </li>
                <li className="text-muted-foreground/40 text-xs">/</li>
                <li className="text-foreground/90 font-semibold">{c("hero_h1").substring(0, 15)}...</li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-foreground">
              {c("hero_h1")}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium mb-12">


              {c("hero_p")}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="rounded-full px-10 py-7 text-lg font-bold shadow-[0_8px_32px_rgba(236,72,153,0.25)]"
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              >
                {c("hero_cta")}
              </Button>
            </div>
          </div>
        </section>

        {/* 2. Problem (Agitation) */}
        <section className="py-32 px-4 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-20 text-center">



              {c("problem_title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((num: number) => (
                <div key={num} className="p-10 rounded-[2.5rem] bg-card/20 border border-red-500/10 backdrop-blur-xl relative overflow-hidden group">


                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-primary mb-4">{c(`problem_${num}_title`)}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium">{c(`problem_${num}_desc`)}</p>


                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Solution */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground text-center mb-8">
              {c("solution_title")}
            </h2>

            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-20 leading-relaxed font-medium">


              {c("solution_intro")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((num: number) => (
                <div key={num} className="p-10 rounded-3xl bg-primary/5 border border-primary/20 backdrop-blur-xl group hover:border-primary/40 transition-all duration-500 shadow-2xl">


                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-bold text-xl text-primary">{c(`solution_${num}`)}</p>


                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Features */}
        <section className="py-32 px-4 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-16 text-center">
              {c("features_title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array.isArray(features) &&
                features.map((feature: { title: string; desc: string }, i: number) => (
                  <div
                    key={i}
                    className="group flex items-start gap-8 p-10 rounded-[2.5rem] bg-card/40 border border-border/40 backdrop-blur-xl shadow-2xl transition-all group hover:border-primary/30"
                  >
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* 5. Process & 6. Trust */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-3xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">{c("process_title")}</h2>



              <div className="space-y-6">
                {[1, 2, 3].map((num: number) => (
                  <div key={num} className="flex gap-4">
                    <div className="w-16 h-16 rounded-full border-2 border-border/40 flex items-center justify-center text-2xl font-extrabold group-hover:border-primary group-hover:text-primary transition-all flex-shrink-0">
                      {num}
                    </div>
                    <div className="pt-1">
                      <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2 leading-tight">{c(`process_${num}_title`)}</h3>
                      <p className="text-muted-foreground text-xl font-medium leading-tight">{c(`process_${num}_desc`)}</p>


                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card/40 border border-border/40 p-10 lg:p-14 rounded-[40px] backdrop-blur-xl relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              <h2 className="text-4xl font-bold tracking-tight mb-6 text-foreground group-hover:text-primary transition-colors">{c("trust_title")}</h2>

              <p className="text-xl text-muted-foreground leading-relaxed font-medium italic">{c("trust_desc")}</p>
            </div>


          </div>
        </section>

        {/* 8. Pricing Container */}
        <div className="mt-10">
          <Pricing onSelectPackage={handleSelectPackage} />
        </div>

        {/* 10. FAQ Section (Before CTA as requested) */}
        <section className="py-24 px-4 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground text-center mb-16">{genericSvc("faq_title")}</h2>

            <div className="space-y-6 mb-20">
              {Array.isArray(faqItems) &&
                faqItems.map((faq: { q: string; a: string }, i: number) => (
                  <div key={i} className="p-10 rounded-[2.5rem] bg-card/30 border border-border/40 backdrop-blur-md shadow-xl">
                    <h3 className="text-2xl font-bold tracking-tight mb-4 text-primary">{faq.q}</h3>
                    <p className="text-muted-foreground text-xl font-medium leading-relaxed">{faq.a}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>


        {/* 9. Final CTA */}
        <section id="service-cta" className="py-32 px-4 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 leading-tight">

              {c("cta_main_title")}
            </h2>
            <p className="text-lg sm:text-2xl text-muted-foreground leading-tight max-w-3xl mx-auto font-medium mb-12">
              {c("cta_main_desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="h-20 px-12 text-2xl font-bold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:-translate-y-2 transition-all group"
              >
                <Link href={`/${locale}/#contact`} className="flex items-center">
                  {c("cta_button")}
                  <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 11. Internal Links (Existing Site Owners) */}
        <section className="py-24 px-4 bg-white/[0.01]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center p-12 rounded-[2.5rem] bg-card/20 border border-border/40 backdrop-blur-md shadow-2xl">
              <h3 className="text-3xl font-bold tracking-tight mb-4 text-foreground">{c("internal_title")}</h3>
              <p className="text-muted-foreground text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">{c("internal_desc")}</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-16 px-10 text-xl font-bold rounded-2xl bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-all hover:-translate-y-2 shadow-xl"
                  asChild
                >
                  <Link href={`/${locale}/optimizare-seo-targu-mures/`}>
                    {c("internal_cta")} <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-16 px-10 text-xl font-bold rounded-2xl bg-white/5 hover:bg-white/10 text-foreground border border-white/10 transition-all hover:-translate-y-2 shadow-xl"
                  asChild
                >
                  <Link href={`/${locale}/redesign-website-targu-mures/`}>
                    {locale === "ro" ? "Vezi serviciile de redesign" : "See redesign services"} <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>



      </main>
      <Footer />
    </div>
  );
}
