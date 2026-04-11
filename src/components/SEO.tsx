"use client";

import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { useDictionary } from "@/components/DictionaryProvider";
import { t } from "@/lib/t";

interface SEOProps {
  onSelectPackage: (packageName: string) => void;
  id?: string;
}

const SEO = ({ onSelectPackage, id }: SEOProps) => {
  const dictionary = useDictionary();

  const seoTiers = [
    {
      name: t(dictionary, "seo_pricing.local.name"),
      description: t(dictionary, "seo_pricing.local.desc"),
      price: t(dictionary, "seo_pricing.local.price"),
      priceLabel: t(dictionary, "seo_pricing.local.price_label"),
      featured: false,
      visibility: t(dictionary, "seo_pricing.local.visibility"),
      visibilityStrength: 0.3,
      features: [
        { title: t(dictionary, "seo_pricing.local.f1_t"), subtext: t(dictionary, "seo_pricing.local.f1_s") },
        { title: t(dictionary, "seo_pricing.local.f2_t"), subtext: t(dictionary, "seo_pricing.local.f2_s") },
        { title: t(dictionary, "seo_pricing.local.f3_t"), subtext: t(dictionary, "seo_pricing.local.f3_s") },
        { title: t(dictionary, "seo_pricing.local.f4_t"), subtext: t(dictionary, "seo_pricing.local.f4_s") },
        { title: t(dictionary, "seo_pricing.local.f5_t"), subtext: t(dictionary, "seo_pricing.local.f5_s") },
      ],
      cta: t(dictionary, "seo_pricing.local.cta"),
      packageName: "Local SEO",
    },
    {
      name: t(dictionary, "seo_pricing.growth.name"),
      description: t(dictionary, "seo_pricing.growth.desc"),
      price: t(dictionary, "seo_pricing.growth.price"),
      priceLabel: t(dictionary, "seo_pricing.growth.price_label"),
      quarterlyPrice: t(dictionary, "seo_pricing.growth.q_price"),
      quarterlySaving: t(dictionary, "seo_pricing.growth.q_save"),
      featured: true,
      visibility: t(dictionary, "seo_pricing.growth.visibility"),
      visibilityStrength: 0.75,
      features: [
        { title: t(dictionary, "seo_pricing.growth.f1_t"), subtext: t(dictionary, "seo_pricing.growth.f1_s") },
        { title: t(dictionary, "seo_pricing.growth.f2_t"), subtext: t(dictionary, "seo_pricing.growth.f2_s") },
        { title: t(dictionary, "seo_pricing.growth.f3_t"), subtext: t(dictionary, "seo_pricing.growth.f3_s") },
        { title: t(dictionary, "seo_pricing.growth.f4_t"), subtext: t(dictionary, "seo_pricing.growth.f4_s") },
        { title: t(dictionary, "seo_pricing.growth.f5_t"), subtext: t(dictionary, "seo_pricing.growth.f5_s") },
        { title: t(dictionary, "seo_pricing.growth.f6_t"), subtext: t(dictionary, "seo_pricing.growth.f6_s") },
      ],
      cta: t(dictionary, "seo_pricing.growth.cta"),
      packageName: "Growth SEO",
    },
  ];

  return (
    <section id={id || "seo"} className="py-12 px-4 overflow-hidden">
      <div className="max-w-6xl xl:max-w-7xl mx-auto relative w-[95%]">

        {/* Section Headline */}
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl sm:text-4xl md:text-[2.5rem] lg:text-5xl font-extrabold text-foreground mb-6">
              {t(dictionary, "seo_pricing.title_main")}
              <span className="text-teal-400 italic">{t(dictionary, "seo_pricing.title_highlight")}</span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <p className="text-muted-foreground text-lg sm:text-xl xl:text-2xl max-w-2xl mx-auto font-medium w-[80%]">
              {t(dictionary, "seo_pricing.subtitle")}
              <br />
              <span className="text-xs xl:text-lg mt-2 block opacity-70">
                {t(dictionary, "seo_pricing.guarantee_note")}
              </span>
            </p>
          </Reveal>
        </div>

        {/* SEO Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 justify-items-center items-stretch max-w-3xl lg:max-w-5xl mx-auto">
          {seoTiers.map((tier, index) => (
            <Reveal key={index} delay={0.2 + index * 0.1} width="100%" fullHeight overflowVisible>
              <div className="w-full max-w-none sm:max-w-[75%] lg:max-w-none mx-auto h-full">
                <div
                  className={`relative rounded-3xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 cursor-pointer backdrop-blur-xl border
                  ${tier.featured
                      ? "bg-teal-500/5 border-teal-500/30 shadow-[0_1.25rem_3.125rem_rgba(20,184,166,0.12)]"
                      : "bg-card/50 border-border/50 shadow-[0_0.5rem_1.875rem_rgb(0,0,0,0.04)]"
                    }`}
                >
                  {/* Best Value Badge */}
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-teal-500 text-white text-xs xl:text-[1.1rem] font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                        {t(dictionary, "seo_pricing.best_value")}
                      </span>
                    </div>
                  )}

                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                  {/* Tier Name */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {tier.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-lg md:text-xl mb-6 lg:mt-4">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className={`${tier.quarterlyPrice ? "mb-2" : "mb-6"} flex items-baseline gap-1`}>
                    <span className="text-3xl md:text-4xl font-extrabold text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-muted-foreground text-sm font-medium">{tier.priceLabel}</span>
                  </div>

                  {/* Quarterly Option */}
                  {tier.quarterlyPrice && (
                    <div className="mb-6 flex items-center gap-2">
                      <span className="text-muted-foreground text-sm">
                        {t(dictionary, "seo_pricing.or")} <span className="text-foreground font-semibold">{tier.quarterlyPrice}</span> {t(dictionary, "seo_pricing.billed_quarterly")}
                      </span>
                      <span className="bg-teal-500/15 text-teal-400 text-xs font-bold px-2 py-0.5 rounded-full">
                        {tier.quarterlySaving}
                      </span>
                    </div>
                  )}

                  {/* Visibility Bar */}
                  <div className="mb-8">
                    <div className="w-full bg-white/5 rounded-full h-7 overflow-hidden relative border border-white/5">
                      <div
                        className={`h-full rounded-full transition-all duration-700
                        ${tier.featured ? "bg-teal-500/30" : "bg-teal-500/20"}`}
                        style={{ width: `${tier.visibilityStrength * 100}%` }}
                      />
                      <span className={`absolute inset-0 flex items-center justify-center text-xs lg:text-[.9rem] font-bold
                        ${tier.featured ? "text-teal-300" : "text-teal-400/80"}`}>
                        {tier.visibility}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="text-teal-400 mt-1 flex-shrink-0"
                        />
                        <div className="text-lg md:text-xl font-medium leading-tight">
                          <div className="flex flex-col">
                            <span className="text-foreground">{feature.title}</span>
                            {feature.subtext && (
                              <span className="text-[0.95rem] md:text-base mt-2 opacity-80 leading-snug text-muted-foreground font-normal">
                                {feature.subtext}
                              </span>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="flex flex-col gap-3">
                    <Button
                      variant={tier.featured ? "default" : "outline"}
                      size="lg"
                      className={`w-full rounded-2xl font-bold xl:text-lg py-7 xl:py-8 transition-all
                      ${tier.featured
                          ? "bg-teal-500 hover:bg-teal-400 text-white shadow-lg shadow-teal-500/20 border-0"
                          : "border-teal-500/20 hover:bg-teal-500/5 hover:border-teal-500/40 hover:text-teal-400 transition-colors"
                        }`}
                      onClick={() => onSelectPackage(tier.packageName)}
                    >
                      {tier.cta}
                    </Button>
                    <Button
                      variant="ghost"
                      size="lg"
                      className="w-full rounded-2xl font-bold xl:text-lg py-7 xl:py-8 text-muted-foreground hover:text-foreground gap-2 transition-colors"
                      onClick={() => onSelectPackage(tier.packageName)}
                    >
                      <Phone size={16} className="text-teal-400" />
                      {t(dictionary, "seo_pricing.book_call").replace('{{name}}', tier.name)}
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEO;