"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import BackgroundEffect from "@/components/BackgroundEffect";
import Footer from "@/components/Footer";
import { useDictionary } from "@/components/DictionaryProvider";
import { t } from "@/lib/t";
import {
  Check,
  ArrowRight,
  Phone,
  Smartphone,
  Zap,
  ShieldCheck,
  BarChart3,
  Search,
  PenTool,
  Activity,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface RedesignPageClientProps {
  locale: string;
}

export default function RedesignPageClient({ locale }: RedesignPageClientProps) {
  const dictionary = useDictionary();
  const pathname = usePathname();
  const [sliderPos, setSliderPos] = useState(50);

  const svc = (key: string) => t(dictionary, `services.redesign_website.${key}`);
  const faqItems = t(dictionary, `services.redesign_website.faq_items`) as Array<{ q: string; a: string }>;
  const features = t(dictionary, `services.redesign_website.features`) as Array<{ title: string; desc: string }>;

  const handleMove = (clientX: number, container: HTMLElement) => {
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = (e.currentTarget as HTMLElement).parentElement;
    if (!container) return;
    const onMove = (moveEvent: MouseEvent) => handleMove(moveEvent.clientX, container);
    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const container = (e.currentTarget as HTMLElement).parentElement;
    if (!container) return;
    const onMove = (touchEvent: TouchEvent) => handleMove(touchEvent.touches[0].clientX, container);
    const onEnd = () => {
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onEnd);
  };

  return (
    <div className="min-h-screen relative selection:bg-primary/30 font-sans">


      <BackgroundEffect />
      <Header />

      <main id="main-content" role="main">
        {/* 1. Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <nav aria-label="Breadcrumb" className="mb-10">
                <ol className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-card/40 w-fit mx-auto px-4 py-1.5 rounded-full border border-border/40 backdrop-blur-sm">

                  <li>
                    <Link href={`/${locale}/`} className="hover:text-primary transition-colors font-medium">
                      {t(dictionary, "seo.breadcrumb_home")}
                    </Link>
                  </li>
                  <li className="text-muted-foreground/40 text-xs">/</li>
                  <li className="text-foreground/90 font-semibold">{svc("h1").substring(0, 20)}...</li>

                </ol>
              </nav>

              <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight text-foreground mb-8">
                {svc("h1")}
              </h1>

              <p className="text-lg sm:text-2xl text-muted-foreground leading-tight max-w-3xl mx-auto font-medium mb-12">

                {svc("intro")}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="h-16 px-10 text-xl font-black italic uppercase tracking-widest rounded-2xl bg-primary hover:bg-primary/90 text-white shadow-[0_0_50px_hsl(var(--primary)/0.2)]"
                  onClick={() => document.getElementById("redesign-cta")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {svc("cta_button")}
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-16 px-10 text-xl font-bold rounded-2xl border-white/10 bg-white/5 hover:bg-white/10"
                >
                  <a href="https://wa.me/40768919621" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-6 h-6 mr-3 text-[#25D366]" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Problem Section - The Dated Site Trap */}
        <section className="py-32 px-4 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-6xl mx-auto text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              {svc("problem_title")}
            </h2>


          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[1, 2, 3].map((num: number) => (
              <div key={num} className="p-10 rounded-[2.5rem] bg-card/20 border border-border/40 backdrop-blur-xl relative overflow-hidden group">

                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  {num === 1 && <PenTool className="w-24 h-24" />}
                  {num === 2 && <Zap className="w-24 h-24" />}
                  {num === 3 && <Search className="w-24 h-24" />}
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-primary mb-4">{svc(`problem_${num}_t`)}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-medium">{svc(`problem_${num}_d`)}</p>

              </div>
            ))}
          </div>
        </section>

        {/* 3. Proof Section - Comparison Slider */}
        <section className="py-32 px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground">{svc("proof_title")}</h2>
              <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto font-medium">{svc("proof_desc")}</p>



            </div>

            <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 bg-black group/slider shadow-2xl">
              {/* Comparison Canvas */}
              <div className="absolute inset-0 select-none">
                {/* After (Redesign) */}
                <div className="absolute inset-0">
                  <img
                    src="/portfolio/bdf-after.png"
                    alt="After Redesign"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Before (Original) - Clipped by Slider */}
                <div
                  className="absolute inset-0 border-r-2 border-primary z-10"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <img
                    src="/portfolio/bdf-before.png"
                    alt="Before Redesign"
                    className="w-full h-full object-cover grayscale opacity-80"
                  />
                </div>

                {/* Labels */}
                <div className="absolute bottom-10 left-10 z-20 pointer-events-none hidden sm:block">
                  <Badge className="bg-black/60 backdrop-blur-md border-border/40 text-muted-foreground px-6 py-3 tracking-widest uppercase font-bold">
                    {t(dictionary, 'modals.fight_club.label_legacy')}
                  </Badge>
                </div>
                <div className="absolute bottom-10 right-10 z-20 pointer-events-none hidden sm:block">
                  <Badge className="bg-primary text-primary-foreground px-6 py-3 tracking-widest font-bold uppercase">
                    {t(dictionary, 'modals.fight_club.label_new')}
                  </Badge>
                </div>

              </div>

              {/* Handle */}
              <div
                className="absolute inset-y-0 z-30 w-1 bg-primary cursor-ew-resize group/handle"
                style={{ left: `${sliderPos}%` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-[0_0_50px_hsl(var(--primary)/0.5)] border-8 border-[#050505] group-active/handle:scale-110 transition-transform">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-5 bg-white/20 rounded-full" />
                    <div className="w-1.5 h-5 bg-white rounded-full" />
                    <div className="w-1.5 h-5 bg-white/20 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Solution Section - Digital Engine */}
        <section className="py-32 px-4 bg-primary text-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-6xl font-bold tracking-tight mb-8 leading-tighter">
                {svc("solution_title")}
              </h2>

              <p className="text-xl md:text-2xl font-bold leading-tight mb-10 text-white/80">
                {svc("solution_desc")}
              </p>
              <Button
                variant="outline"
                size="lg"
                className="h-16 px-10 text-xl font-bold tracking-widest rounded-2xl border-white bg-transparent hover:bg-white hover:text-primary transition-all group"
                onClick={() => document.getElementById("redesign-cta")?.scrollIntoView({ behavior: "smooth" })}
              >
                {svc("cta_button")}
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <Smartphone className="w-10 h-10 mb-4" />
                    <p className="font-bold">Mobile First</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <Zap className="w-10 h-10 mb-4" />
                    <p className="font-bold">Sub-Second</p>
                  </div>

                </div>
                <div className="space-y-4 translate-y-8">
                  <div className="p-8 rounded-3xl bg-secondary text-primary-foreground shadow-lg shadow-secondary/20">
                    <ShieldCheck className="w-10 h-10 mb-4" />
                    <p className="font-bold uppercase text-sm tracking-widest opacity-90">SEO Safe</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <BarChart3 className="w-10 h-10 mb-4" />
                    <p className="font-bold uppercase text-sm tracking-widest opacity-90">ROI Driven</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Features Detailed */}
        <section className="py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-16 text-center">
              {svc("features_title")}
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array.isArray(features) && features.map((feature: { title: string; desc: string }, i: number) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-card/40 border border-border/40 backdrop-blur-md flex gap-8 group hover:border-primary/30 transition-all">

                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Check className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-medium">{feature.desc}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. BLAST Methodology (Process) */}
        <section className="py-32 px-4 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-20 text-center">
              BLAST <span className="text-primary">Methodology</span>
            </h2>


            <div className="space-y-12">
              {[
                { l: "B", t: "Bulletproof Audit", d: "We dissect every line of code and every pixel to find where you're losing money.", i: <Search className="w-8 h-8" /> },
                { l: "L", t: "Logic & UX", d: "We rebuild the user journey based on buying triggers, not just guesses.", i: <Activity className="w-8 h-8" /> },
                { l: "A", t: "Aesthetic ROI", d: "We design for authority. Your brand will look premium, expensive, and trustworthy.", i: <PenTool className="w-8 h-8" /> },
                { l: "S", t: "Speed & SEO", d: "We migrate your SEO protocols with zero ranking loss and maximize performance.", i: <Zap className="w-8 h-8" /> },
                { l: "T", t: "Trust Infrastructure", d: "We implement social proof and conversion points that force action.", i: <Lock className="w-8 h-8" /> }
              ].map((step: { l: string; t: string; d: string; i: React.ReactNode }, idx: number) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="w-20 h-20 rounded-full border-2 border-border/40 flex items-center justify-center text-4xl font-extrabold group-hover:border-primary group-hover:text-primary transition-all flex-shrink-0">
                    {step.l}
                  </div>

                  <div className="pt-2">
                    <h3 className="text-2xl font-bold tracking-tight mb-2 uppercase">{step.t}</h3>
                    <p className="text-muted-foreground text-xl font-medium leading-relaxed">{step.d}</p>
                  </div>


                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CTA & 8. FAQ */}
        <section className="py-24 px-4 bg-white/[0.01]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-20 text-center">{svc("faq_title")}</h2>
            <div className="space-y-6 text-left">
              {Array.isArray(faqItems) && faqItems.map((item: { q: string; a: string }, i: number) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-card/20 border border-border/40 backdrop-blur-md">
                  <h3 className="text-2xl font-bold tracking-tight mb-4 text-primary">{item.q}</h3>
                  <p className="text-muted-foreground text-xl font-medium leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="redesign-cta" className="py-32 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight mb-8">
                {svc("cta_title")}
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
                {svc("cta_desc")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="h-20 px-12 text-2xl font-bold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl transition-all hover:-translate-y-2 group"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = `/${locale}/#contact`;
                  }
                }}
              >
                {svc("cta_button")}
                <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* 9. Internal Links (Complementary Services) */}
        <section className="py-24 px-4 bg-white/[0.01]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-center p-12 rounded-[2.5rem] bg-card/20 border border-border/40 backdrop-blur-md shadow-2xl"
            >
              <h3 className="text-3xl font-bold tracking-tight mb-4 text-foreground">
                {svc("internal_title")}
              </h3>
              <p className="text-muted-foreground text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
                {svc("internal_desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-16 px-10 text-xl font-bold rounded-2xl bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-all hover:-translate-y-2 shadow-xl"
                  asChild
                >
                  <Link href={`/${locale}/optimizare-seo-targu-mures/`}>
                    {svc("internal_cta_seo")} <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-16 px-10 text-xl font-bold rounded-2xl bg-white/5 hover:bg-white/10 text-foreground border border-white/10 transition-all hover:-translate-y-2 shadow-xl"
                  asChild
                >
                  <Link href={`/${locale}/creare-site-web-targu-mures/`}>
                    {svc("internal_cta_web")} <ArrowRight className="w-5 h-5 ml-2" />
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
