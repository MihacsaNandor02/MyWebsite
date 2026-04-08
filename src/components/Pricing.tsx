import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { useTranslation } from "react-i18next";

interface PricingProps {
  onSelectPackage: (packageName: string) => void;
  id?: string;
}

const Pricing = ({ onSelectPackage, id }: PricingProps) => {
  const { t } = useTranslation();

  const websiteTiers = [
    {
      name: t("pricing.essential.name"),
      description: t("pricing.essential.desc"),
      price: t("pricing.essential.price"),
      option: t("pricing.essential.option"),
      featured: false,
      features: [
        { title: t("pricing.essential.f1_t"), subtext: t("pricing.essential.f1_s") },
        { title: t("pricing.essential.f2_t"), subtext: t("pricing.essential.f2_s") },
        { title: t("pricing.essential.f3_t"), subtext: t("pricing.essential.f3_s") },
        { title: t("pricing.essential.f4_t"), subtext: t("pricing.essential.f4_s") },
        { title: t("pricing.essential.f5_t"), subtext: t("pricing.essential.f5_s") },
        { title: t("pricing.essential.f6_t"), subtext: t("pricing.essential.f6_s") }
      ],
      cta: t("pricing.essential.cta"),
    },
    {
      name: t("pricing.recommended.name"),
      description: t("pricing.recommended.desc"),
      price: t("pricing.recommended.price"),
      featured: true,
      features: [
        { title: t("pricing.recommended.f1_t") },
        { title: t("pricing.recommended.f2_t"), subtext: t("pricing.recommended.f2_s") },
        { title: t("pricing.recommended.f3_t"), subtext: t("pricing.recommended.f3_s") },
        { title: t("pricing.recommended.f4_t"), subtext: t("pricing.recommended.f4_s") },
        { title: t("pricing.recommended.f5_t"), subtext: t("pricing.recommended.f5_s") },
        { title: t("pricing.recommended.f6_t"), subtext: t("pricing.recommended.f6_s") }
      ],
      cta: t("pricing.recommended.cta"),
    },
    {
      name: t("pricing.custom.name"),
      description: t("pricing.custom.desc"),
      price: t("pricing.custom.price"),
      featured: false,
      features: [
        { title: t("pricing.custom.f1_t") },
        { title: t("pricing.custom.f2_t"), subtext: t("pricing.custom.f2_s") },
        { title: t("pricing.custom.f3_t"), subtext: t("pricing.custom.f3_s") },
        { title: t("pricing.custom.f4_t"), subtext: t("pricing.custom.f4_s") },
        { title: t("pricing.custom.f5_t"), subtext: t("pricing.custom.f5_s") },
      ],
      cta: t("pricing.custom.cta"),
    }
  ];

  return (
    <section id={id || "pricing"} className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl xl:max-w-[1300px] mx-auto relative w-[95%]">
        {/* Section Headline */}
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              {t("pricing.title_main")} <span className="text-primary italic">{t("pricing.title_highlight")}</span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <p className="text-muted-foreground text-lg sm:text-xl xl:text-2xl max-w-2xl mx-auto font-medium w-[80%]">
              {t("pricing.subtitle")}
              <br />
              <span className="text-xs xl:text-lg mt-2 block opacity-70">{t("pricing.guarantee_note")}</span>
            </p>
          </Reveal>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {websiteTiers.map((tier, index) => (
            <Reveal key={index} delay={0.2 + index * 0.1} width="100%" fullHeight>
              <div className="w-full max-w-none sm:max-w-[75%] lg:max-w-none mx-auto h-full">
                <div
                  className={`relative rounded-3xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 cursor-pointer
                  ${tier.featured
                      ? "bg-primary/5 border-primary/30 shadow-[0_1.25rem_3.125rem_rgba(236,72,153,0.1)]"
                      : "bg-card/50 border-border/50 shadow-[0_0.5rem_1.875rem_rgb(0,0,0,0.04)]"
                    }
                  backdrop-blur-xl border`}
                >
                  {/* Most Popular Badge */}
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs xl:text-[1.1rem] font-semibold px-4 py-1.5 rounded-full">
                        {t("pricing.best_value")}
                      </span>
                    </div>
                  )}

                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                  {/* Package Name */}
                  <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-foreground mb-2">
                    {tier.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-lg md:text-xl lg:text-xl mb-6 lg:mt-4">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-foreground">
                      {tier.price}
                    </span>
                    {tier.name !== t("pricing.custom.name") && (
                      <span className="text-muted-foreground text-sm font-medium">{t("pricing.per_project")}</span>
                    )}
                  </div>


                  {/* Features List */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((feature: any, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="text-primary mt-1 flex-shrink-0"
                        />
                        <div className="text-[hsl(220,10%,70%)] text-lg md:text-xl font-medium leading-tight">
                          <div className="flex flex-col">
                            <span className="text-foreground">{feature.title}</span>
                            {feature.subtext && <span className="text-[0.95rem] md:text-base mt-2 opacity-80 leading-snug">{feature.subtext}</span>}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant={tier.featured ? "default" : "outline"}
                    size="lg"
                    className={`w-full rounded-2xl font-bold xl:text-lg py-7 xl:py-8 xl:mt-4 transition-all ${tier.featured
                      ? "shadow-lg shadow-primary/20"
                      : "border-primary/20 hover:bg-primary/5 hover:border-primary/40 hover:text-primary transition-colors"
                      }`}
                    onClick={() => onSelectPackage(`${tier.name} Website`)}
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Pricing;
