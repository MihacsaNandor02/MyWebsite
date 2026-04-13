"use client";

import Header from "@/components/Header";
import BackgroundEffect from "@/components/BackgroundEffect";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { useDictionary } from "@/components/DictionaryProvider";
import { t } from "@/lib/t";
import { Check, Search, TrendingUp, ArrowRight, MousePointerClick, BarChart3, ShieldCheck, Users, XCircle, Crosshair, MapPin, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

interface OptimizareSeoClientProps {
  locale: string;
}

export default function OptimizareSeoClient({ locale }: OptimizareSeoClientProps) {
  const dictionary = useDictionary();
  const pathname = usePathname();

  // All CTAs go to the contact form
  const handleCtaClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback to home page contact if section not on this page
      window.location.href = `/${locale}/#contact`;
    }
  };

  const c = (key: string) => t(dictionary, `services.optimizare_seo.${key}`);
  const servicesList = t(dictionary, `services.optimizare_seo.services`) as Array<{ title: string; desc: string }>;
  const faqItems = t(dictionary, `services.optimizare_seo.faq_items`) as Array<{ q: string; a: string }>;
  const keywordCluster = t(dictionary, `services.optimizare_seo.keyword_cluster`) as string[];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const headerStyles = "font-black";

  return (
    <div className="min-h-screen relative selection:bg-primary/30 text-foreground font-sans">
      <BackgroundEffect />
      <Header />

      <main id="main-content" role="main">
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-24 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
            {/* SEO Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10"
            >
              <ol className="flex items-center justify-center gap-2 text-sm text-muted-foreground/80 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                <li><Link href={`/${locale}/`} className="hover:text-primary transition-colors uppercase tracking-widest text-[10px] font-bold">{t(dictionary, "seo.breadcrumb_home")}</Link></li>
                <li className="text-white/20">/</li>
                <li className="font-bold text-foreground/90 uppercase tracking-widest text-[10px]">{c("page_title").substring(0, 15)}...</li>
              </ol>
            </motion.nav>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className={`text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-foreground`}
            >
              <span className="text-primary">{c("hero_h1").split("Târgu Mureș")[0]}</span>
              <span className="text-foreground">Târgu Mureș {c("hero_h1").split("Târgu Mureș")[1]}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl sm:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-12 font-medium"
            >
              {c("hero_p")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col items-center gap-6"
            >
              <Button
                size="lg"
                className="h-20 px-12 text-2xl font-black italic uppercase tracking-widest rounded-3xl bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/20 transition-all hover:-translate-y-2 group"
                onClick={handleCtaClick}
              >
                {c("hero_cta")}
                <ArrowRight className="ml-4 w-7 h-7 transition-transform group-hover:translate-x-2" />
              </Button>
              <p className="text-muted-foreground/40 text-sm font-bold uppercase tracking-[0.25em]">{c("hero_micro")}</p>
            </motion.div>
          </div>
        </section>

        {/* 2. PROBLEM SECTION */}
        <section className="py-24 px-4 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={containerVariants}
            >
              <motion.h2
                variants={itemVariants}
                className={`text-3xl lg:text-5xl ${headerStyles} mb-20`}
              >
                {c("problem_title")}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {[1, 2, 3].map((num) => (
                  <motion.div
                    key={num}
                    variants={itemVariants}
                    className="p-10 rounded-3xl bg-card/20 border border-white/5 backdrop-blur-xl group hover:border-primary/30 transition-all duration-500"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary shadow-inner">
                      {num === 1 && <Search className="w-8 h-8" />}
                      {num === 2 && <Users className="w-8 h-8" />}
                      {num === 3 && <XCircle className="w-8 h-8" />}
                    </div>
                    <h3 className={`text-2xl font-black mb-4 uppercase italic tracking-tight`}>{c(`problem_${num}_title`)}</h3>
                    <p className="text-muted-foreground/90 leading-relaxed text-lg">{c(`problem_${num}_desc`)}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. FLOW SECTION - Cum ajung clienții (Glasmorphic) */}
        <section className="py-24 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className={`text-3xl lg:text-5xl ${headerStyles} text-center mb-24`}>
                {c("flow_title")}
              </motion.h2>

              <div className="relative">
                <div className="hidden lg:block absolute top-[64px] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent z-0" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div key={i} variants={itemVariants} className="flex flex-col items-center">
                      <div className="w-32 h-32 rounded-3xl bg-card/20 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-6 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {i === 1 && <Search className="w-12 h-12 text-primary" />}
                        {i === 2 && <TrendingUp className="w-12 h-12 text-primary" />}
                        {i === 3 && <MousePointerClick className="w-12 h-12 text-primary" />}
                        {i === 4 && <Check className="w-12 h-12 text-primary" />}
                      </div>
                      <p className={`text-xl font-bold text-center max-w-[200px] leading-tight text-foreground/90 uppercase italic tracking-tighter`}>
                        {c(`flow_${i}`)}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. SOLUTION - Cum lucrăm (Glasmorphic + New Icons) */}
        <section className="py-24 px-4 bg-primary/[0.03]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className={`text-3xl lg:text-5xl ${headerStyles} text-center mb-8`}>
                {c("solution_title")}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-20 leading-relaxed font-medium">
                {c("solution_intro")}
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((num) => {
                  const fullText = c(`solution_${num}`);
                  const title = fullText.includes(':') ? fullText.split(':')[0] : fullText;
                  const desc = fullText.includes(':') ? fullText.split(':')[1] : "";

                  return (
                    <motion.div
                      key={num}
                      variants={itemVariants}
                      className="p-10 rounded-3xl bg-card/20 border border-white/10 backdrop-blur-xl relative overflow-hidden group shadow-2xl"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:bg-primary/20 transition-all">
                        {num === 1 && <Crosshair className="w-8 h-8" />}
                        {num === 2 && <Settings className="w-8 h-8" />}
                        {num === 3 && <MapPin className="w-8 h-8" />}
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all" />
                      <h3 className={`text-2xl font-black mb-4 uppercase italic tracking-tight text-primary`}>{title}</h3>
                      <p className="text-muted-foreground/90 leading-relaxed text-lg">{desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* NEW: KEYWORD CLUSTER RESTORATION */}
        {Array.isArray(keywordCluster) && keywordCluster.length > 0 && (
          <section className="py-24 px-4 overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={containerVariants}
                className="flex flex-wrap justify-center gap-4 lg:gap-6"
              >
                {keywordCluster.map((word, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="px-8 py-4 rounded-2xl bg-card/10 border border-white/5 backdrop-blur-md text-muted-foreground/60 font-bold uppercase italic tracking-widest text-sm hover:border-primary/30 hover:text-primary transition-all cursor-default"
                  >
                    {word}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* 5. SERVICES DETAILS (Humanized) */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            >
              <div className="space-y-10">
                <motion.h2 variants={itemVariants} className={`text-3xl lg:text-5xl ${headerStyles} leading-[1.05]`}>
                  {c("services_title")}
                </motion.h2>
                <div className="space-y-6">
                  {Array.isArray(servicesList) && servicesList.map((srv, i) => (
                    <motion.div key={i} variants={itemVariants} className="flex gap-4 p-6 rounded-3xl bg-card/10 border border-white/5 backdrop-blur-sm group hover:bg-card/20 transition-all">
                      <div className="mt-1 flex-shrink-0">
                        <Check className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-1 uppercase tracking-tight">{srv.title}</h4>
                        <p className="text-muted-foreground/80 leading-relaxed text-lg">{srv.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                variants={itemVariants}
                className="relative rounded-[48px] overflow-hidden aspect-square shadow-2xl border border-white/5 bg-gradient-to-br from-primary/10 to-indigo-500/10 flex items-center justify-center group"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <BarChart3 className="w-48 h-48 text-primary/30 transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 6. EXPECTATIONS (Timeline) */}
        <section className="py-24 px-4 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className={`text-3xl lg:text-6xl ${headerStyles} mb-20`}>
                {c("results_title")}
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {[30, 60, 90].map((days) => (
                  <motion.div
                    key={days}
                    variants={itemVariants}
                    className="p-10 rounded-3xl bg-card/20 border border-white/10 relative group hover:border-primary/30 transition-all duration-500 shadow-xl"
                  >
                    <div className="text-7xl font-black text-primary/5 absolute top-6 right-8 select-none group-hover:text-primary/10 transition-colors pointer-events-none italic uppercase tracking-tighter">
                      {days}
                    </div>
                    <h4 className={`text-2xl font-black text-foreground mb-4 uppercase italic tracking-tighter`}>
                      {c(`results_${days}_t`)}
                    </h4>
                    <p className="text-muted-foreground/90 font-medium text-lg leading-relaxed relative z-10">
                      {c(`results_${days}_d`)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 7. GUARANTEE BLOCK (20% Smaller) */}
        <section className="py-24 px-4 overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              className="p-10 sm:p-14 rounded-[40px] bg-gradient-to-br from-primary/10 via-card to-background border-4 border-primary/20 text-center relative shadow-3xl"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_50px_hsl(var(--primary)/0.5)]">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h2 className={`text-2xl sm:text-3xl lg:text-5xl ${headerStyles} mb-6 mt-4 leading-tight`}>{c("guarantee_title")}</h2>
              <p className="text-lg sm:text-xl text-muted-foreground/90 leading-relaxed font-medium italic">
                {c("guarantee_desc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* 8. PRICING */}
        <div id="seo-pricing-section" className="py-12">
          <SEO
            onSelectPackage={handleCtaClick}
            id="pricing"
            primaryOutcome={c("pricing_local_outcome")}
            growthOutcome={c("pricing_growth_outcome")}
          />
        </div>

        {/* 9. TRUST / SKEPTICISM REDUCTION */}
        <section className="py-24 px-4 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            >
              <motion.div variants={itemVariants} className="space-y-10">
                <h2 className={`text-3xl lg:text-6xl ${headerStyles} leading-[1.05]`}>
                  {c("trust_title")}
                </h2>
                <div className="text-xl text-muted-foreground leading-relaxed font-medium">
                  {c("trust_desc")}
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-bold uppercase tracking-widest shadow-sm group hover:border-primary/30 transition-all">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{t(dictionary, "hero.trust_1")}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-bold uppercase tracking-widest shadow-sm group hover:border-primary/30 transition-all">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Transparență Totală</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-card/30 border border-white/5 rounded-3xl p-10 lg:p-14 backdrop-blur-xl relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                <p className={`text-3xl font-black italic mb-8 uppercase tracking-tighter text-foreground group-hover:text-primary transition-colors`}>„{c('trust_quote') || "Nu promitem magie."}”</p>
                <div className="text-lg text-muted-foreground/90 leading-relaxed font-medium italic space-y-4">
                  <p>Efortul nostru este bazat pe date. Google este o mașinărie care caută valoare, nu „păcăleli”.</p>
                  <p>Construim această valoare cot la cot cu tine.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 10. PROCESS (How we start) */}
        <section className="py-24 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className={`text-3xl lg:text-6xl ${headerStyles} text-center mb-28`}>
                {c("start_title")}
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {[1, 2, 3, 4].map((step) => (
                  <motion.div key={step} variants={itemVariants} className="relative group">
                    <div className="text-[10rem] font-black text-white/[0.03] absolute -top-24 left-0 select-none italic pointer-events-none group-hover:text-primary/5 transition-colors">
                      {step}
                    </div>
                    <div className="relative z-10 pt-10">
                      <h4 className={`text-2xl font-black text-primary mb-4 uppercase italic tracking-tighter leading-tight`}>{c(`start_${step}`)}</h4>
                      <p className="text-lg text-muted-foreground/90 leading-relaxed font-medium">
                        {c(`start_${step}_desc`)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 11. FAQ */}
        <section id="faq" className="py-24 px-4 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className={`text-3xl lg:text-6xl ${headerStyles} text-center mb-16`}
            >
              {c("faq_title")}
            </motion.h2>

            <div className="space-y-6">
              {Array.isArray(faqItems) && faqItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 lg:p-10 rounded-3xl bg-card border border-white/5 hover:border-primary/20 transition-all shadow-xl"
                >
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 flex items-center gap-4 italic tracking-tight uppercase">
                    <span className="w-1.5 h-8 bg-primary/20 rounded-full flex-shrink-0" />
                    {item.q}
                  </h3>
                  <div className="text-lg text-muted-foreground/80 leading-relaxed pl-6 border-l-2 border-white/5 font-medium italic">
                    {item.a}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA (20% Smaller Button) */}
        <section id="seo-cta" className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10" />
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
            >
              <h2 className={`text-4xl sm:text-5xl lg:text-7xl ${headerStyles} mb-12 leading-[1.05]`}>
                {c("final_cta_title")}
              </h2>
              <div className="flex flex-col items-center gap-10">
                <Button
                  size="lg"
                  className="h-16 px-10 text-xl font-bold rounded-2xl bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 transition-all hover:-translate-y-2 group"
                  onClick={handleCtaClick}
                >
                  {c("final_cta_button")}
                  <ArrowRight className="w-7 h-7 ml-4 transition-transform group-hover:translate-x-2" />
                </Button>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
                  {(c("final_cta_micro") || "Fără obligații • Răspuns în 24h • Plan clar").split("•").map((item: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 text-muted-foreground/50 font-black uppercase tracking-[0.2em] text-xs">
                      <div className="w-2 h-2 rounded-full bg-primary/40" />
                      {item.trim()}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 13. Internal Links (Complementary Services) */}
        <section className="py-24 px-4 bg-white/[0.01]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-center p-12 rounded-[2.5rem] bg-card/20 border border-border/40 backdrop-blur-md shadow-2xl"
            >
              <h3 className="text-3xl font-bold tracking-tight mb-4 text-foreground">
                {c("internal_title")}
              </h3>
              <p className="text-muted-foreground text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
                {c("internal_desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-16 px-10 text-xl font-bold rounded-2xl bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-all hover:-translate-y-2 shadow-xl"
                  asChild
                >
                  <Link href={`/${locale}/creare-site-web-targu-mures/`}>
                    {c("internal_cta_web")} <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-16 px-10 text-xl font-bold rounded-2xl bg-white/5 hover:bg-white/10 text-foreground border border-white/10 transition-all hover:-translate-y-2 shadow-xl"
                  asChild
                >
                  <Link href={`/${locale}/mentenanta-website-targu-mures/`}>
                    {c("internal_cta_mentenanta")} <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>

            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
