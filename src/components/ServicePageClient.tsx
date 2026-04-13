"use client";

import Header from "@/components/Header";
import BackgroundEffect from "@/components/BackgroundEffect";
import Footer from "@/components/Footer";
import { useDictionary } from "@/components/DictionaryProvider";
import { t } from "@/lib/t";
import { Check, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ServicePageClientProps {
  serviceKey: string;
  locale: string;
}

export default function ServicePageClient({ serviceKey, locale }: ServicePageClientProps) {
  const dictionary = useDictionary();
  const pathname = usePathname();

  const svc = (key: string) => t(dictionary, `services.${serviceKey}.${key}`);
  const features = t(dictionary, `services.${serviceKey}.features`) as Array<{ title: string; desc: string }>;
  const whyItems = t(dictionary, `services.${serviceKey}.why_items`) as string[];
  const faqItems = t(dictionary, `services.${serviceKey}.faq_items`) as Array<{ q: string; a: string }>;

  const otherServices = [
    { key: "creare_site", slug: "creare-site-web-targu-mures", label: locale === "ro" ? "Creare Site Web" : "Web Design" },
    { key: "optimizare_seo", slug: "optimizare-seo-targu-mures", label: locale === "ro" ? "Optimizare SEO" : "SEO Services" },
    { key: "redesign_website", slug: "redesign-website-targu-mures", label: locale === "ro" ? "Redesign Website" : "Website Redesign" },
    { key: "mentenanta_website", slug: "mentenanta-website-targu-mures", label: locale === "ro" ? "Mentenanță Website" : "Website Maintenance" },

  ].filter((s) => s.key !== serviceKey);

  return (
    <div className="min-h-screen relative selection:bg-primary/30 font-sans">


      <BackgroundEffect />
      <Header />
      <main id="main-content" role="main">
        {/* Hero Section */}
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
                <li className="text-foreground/90 font-semibold">{svc("h1")}</li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-foreground">
              {svc("h1")}
            </h1>


            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
              {svc("intro")}
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="h-16 px-10 text-xl font-bold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl transition-all hover:-translate-y-2 group"


                onClick={() => document.getElementById("service-cta")?.scrollIntoView({ behavior: "smooth" })}
              >
                {svc("cta_button")}
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-16 px-10 text-xl font-bold rounded-2xl border-primary/20 bg-card/20 hover:bg-primary/5 hover:border-primary/40 text-foreground transition-all"


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
        <section className="py-32 px-4 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-20 text-center">
              {svc("features_title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


              {Array.isArray(features) &&
                features.map((feature: { title: string; desc: string }, i: number) => (
                  <div
                    key={i}
                    className="group flex items-start gap-8 p-10 rounded-[2.5rem] bg-card/40 border border-border/40 backdrop-blur-xl hover:border-primary/40 transition-all duration-300 transform shadow-xl hover:-translate-y-1"
                  >
                    <div className="mt-1 flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">


                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed font-medium">{feature.desc}</p>


                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-32 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-20 text-center leading-tight">
              {svc("why_title")}
            </h2>

            <div className="space-y-8">


              {Array.isArray(whyItems) &&
                whyItems.map((item: string, i: number) => (
                  <div key={i} className="group flex items-start gap-8 p-10 rounded-[2.5rem] bg-card/20 border border-border/40 hover:bg-card/40 transition-colors backdrop-blur-xl shadow-xl">
                    <div className="w-16 h-16 rounded-full border-2 border-border/40 flex items-center justify-center text-2xl font-extrabold group-hover:border-primary group-hover:text-primary transition-all flex-shrink-0">


                      {i + 1}
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed font-medium pt-2">{item}</p>


                  </div>
                ))}
            </div>
            <p className="text-center mt-12 text-muted-foreground font-bold uppercase tracking-widest text-sm">{svc("pricing_note")}</p>


          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-16 text-center leading-tight">
              {svc("faq_title")}
            </h2>



            <div className="space-y-6">
              {Array.isArray(faqItems) &&
                faqItems.map((faq: { q: string; a: string }, i: number) => (
                  <div key={i} className="p-10 rounded-[2.5rem] bg-card/30 border border-border/40 backdrop-blur-md shadow-xl">


                    <h3 className="text-2xl font-bold tracking-tight text-primary mb-4">{faq.q}</h3>
                    <p className="text-muted-foreground text-xl font-medium leading-relaxed">{faq.a}</p>


                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="service-cta" className="py-32 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">


            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 leading-tight">
              {svc("cta_title")}
            </h2>

            <p className="text-lg sm:text-2xl text-muted-foreground leading-tight max-w-3xl mx-auto font-medium">{svc("cta_desc")}</p>


            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="h-20 px-12 text-2xl font-bold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl transition-all hover:-translate-y-2 group">
                <Link href={`/${locale}/#contact`}>{svc("cta_button")} <ArrowRight className="w-8 h-8 ml-4 transition-transform group-hover:translate-x-2" /></Link>
              </Button>


              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-20 px-12 text-2xl font-bold rounded-2xl border-primary/20 bg-card/20 hover:bg-primary/5 hover:border-primary/40 text-foreground shadow-xl transition-all hover:-translate-y-2"
              >
                <a href="https://wa.me/40768919621" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-8 h-8 mr-4 text-[#25D366]" />
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
              {otherServices.map((s: { key: string; slug: string; label: string }) => (
                <Link
                  key={s.key}
                  href={`/${locale}/${s.slug}/`}
                  className="group flex items-center justify-between p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/40 transition-all"
                >
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {s.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
