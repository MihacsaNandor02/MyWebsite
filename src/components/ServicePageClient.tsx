"use client";

import Header from "@/components/Header";
import BackgroundEffect from "@/components/BackgroundEffect";
import { useDictionary } from "@/components/DictionaryProvider";
import { t } from "@/lib/t";
import { Check, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicePageClientProps {
  serviceKey: string;
  locale: string;
}

export default function ServicePageClient({ serviceKey, locale }: ServicePageClientProps) {
  const dictionary = useDictionary();

  const svc = (key: string) => t(dictionary, `services.${serviceKey}.${key}`);
  const features = t(dictionary, `services.${serviceKey}.features`) as Array<{ title: string; desc: string }>;
  const whyItems = t(dictionary, `services.${serviceKey}.why_items`) as string[];
  const faqItems = t(dictionary, `services.${serviceKey}.faq_items`) as Array<{ q: string; a: string }>;

  const otherServices = [
    { key: "creare_site", slug: "creare-site-web", label: locale === "ro" ? "Creare Site Web" : "Web Design" },
    { key: "optimizare_seo", slug: "optimizare-seo", label: locale === "ro" ? "Optimizare SEO" : "SEO Services" },
    { key: "redesign_website", slug: "redesign-website", label: locale === "ro" ? "Redesign Website" : "Website Redesign" },
    { key: "mentenanta_website", slug: "mentenanta-website", label: locale === "ro" ? "Mentenanță Website" : "Website Maintenance" },
  ].filter((s) => s.key !== serviceKey);

  return (
    <div className="min-h-screen relative selection:bg-primary/30">
      <BackgroundEffect />
      <Header />
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <li>
                  <a href={`/${locale}/`} className="hover:text-primary transition-colors">
                    {t(dictionary, "seo.breadcrumb_home")}
                  </a>
                </li>
                <li className="text-muted-foreground/40">/</li>
                <li className="text-foreground font-medium">{svc("h1")}</li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-8 leading-tight">
              {svc("h1")}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {svc("intro")}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full px-10 py-7 text-lg font-bold shadow-2xl shadow-primary/20"
                onClick={() => document.getElementById("service-cta")?.scrollIntoView({ behavior: "smooth" })}
              >
                {svc("cta_button")}
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-10 py-7 text-lg font-semibold border-white/15"
              >
                <a
                  href="https://wa.me/40768919621"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5 mr-2 text-[#25D366]" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-12 text-center">
              {svc("features_title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.isArray(features) &&
                features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-xl hover:border-primary/30 transition-colors"
                  >
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-card/20 border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-12 text-center">
              {svc("why_title")}
            </h2>
            <div className="space-y-6">
              {Array.isArray(whyItems) &&
                whyItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm">
                      {i + 1}
                    </div>
                    <p className="text-lg text-foreground/90 leading-relaxed">{item}</p>
                  </div>
                ))}
            </div>
            <p className="text-center mt-10 text-muted-foreground font-medium text-lg">{svc("pricing_note")}</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-12 text-center">
              {svc("faq_title")}
            </h2>
            <div className="space-y-6">
              {Array.isArray(faqItems) &&
                faqItems.map((faq, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-xl">
                    <h3 className="text-lg font-bold text-foreground mb-3">{faq.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="service-cta" className="py-20 px-4 bg-card/20 border-y border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-6">
              {svc("cta_title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">{svc("cta_desc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-10 py-7 text-lg font-bold shadow-2xl shadow-primary/20">
                <a href={`/${locale}/#contact`}>{svc("cta_button")}</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-10 py-7 text-lg font-semibold border-white/15"
              >
                <a href="https://wa.me/40768919621" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2 text-[#25D366]" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Internal Links — Other Services */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              {locale === "ro" ? "Alte servicii" : "Other Services"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherServices.map((s) => (
                <a
                  key={s.key}
                  href={`/${locale}/${s.slug}/`}
                  className="group flex items-center justify-between p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/40 transition-all"
                >
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {s.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-card/30" role="contentinfo">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <a href={`/${locale}/`}>
              <img
                src="/portfolio/Future Builds - Written-Transparent-Cropped.png"
                alt="Future Builds — Agenție Web Design Târgu Mureș"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-muted-foreground mt-2">{t(dictionary, "footer.tagline")}</p>
          </div>
          <div className="flex gap-x-6 gap-y-3 text-sm text-muted-foreground flex-wrap justify-center">
            <a href={`/${locale}/`} className="hover:text-primary transition-colors">
              {t(dictionary, "footer.link_home")}
            </a>
            <a href={`/${locale}/creare-site-web/`} className="hover:text-primary transition-colors">
              {locale === "ro" ? "Creare Site Web" : "Web Design"}
            </a>
            <a href={`/${locale}/optimizare-seo/`} className="hover:text-primary transition-colors">
              {locale === "ro" ? "Optimizare SEO" : "SEO Services"}
            </a>
            <a href={`/${locale}/#contact`} className="hover:text-primary transition-colors">
              {t(dictionary, "footer.link_contact")}
            </a>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <address className="not-italic text-xs text-muted-foreground/60 text-center md:text-right leading-relaxed">
              <span className="font-medium text-muted-foreground/80">Future Builds</span>
              <br />
              Bulevardul 1 Decembrie 1918 213, Târgu Mureș 540000
              <br />
              <a href="tel:+40768919621" className="hover:text-primary transition-colors">
                +40 768 919 621
              </a>
              {" · "}
              <a href="mailto:contact@futurebuilds.ro" className="hover:text-primary transition-colors">
                contact@futurebuilds.ro
              </a>
            </address>
            <a
              href="https://maps.google.com/?q=Future+Builds+Bulevardul+1+Decembrie+1918+213+Targu+Mures"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary/60 hover:text-primary transition-colors mt-1"
            >
              📍 {locale === "ro" ? "Vezi pe Google Maps" : "View on Google Maps"}
            </a>
            <p className="text-xs text-muted-foreground/50 mt-1">
              {t(dictionary, "footer.copyright")?.replace("{{year}}", new Date().getFullYear().toString())}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
