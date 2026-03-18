import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const seoTiers = [
  {
    name: "Local",
    description: "Get found by customers searching for your business in your area.",
    price: "€250",
    priceLabel: "/month",
    featured: false,
    visibility: "Visible on 30%+ of local searches",
    visibilityStrength: 0.3,
    features: [
      { title: "Get Found on Google Maps", subtext: "Show up when nearby customers search for your service." },
      { title: "Rank for Your Main Keyword", subtext: "Show up when customers search for what you do." },
      { title: "Basic Competitor Analysis", subtext: "See where you stand against other local businesses." },
      { title: "Updates Every Two Weeks", subtext: "We keep working on your rankings consistently." },
      { title: "Monthly Progress Report", subtext: "See exactly how your rankings are improving each month." },
    ],
    cta: "Start Getting Found",
    packageName: "Local SEO",
  },
  {
    name: "Growth",
    description: "Show up before your competitors when customers are ready to buy.",
    price: "€319",
    priceLabel: "/month",
    quarterlyPrice: "€837",
    quarterlySaving: "Save €120",
    featured: true,
    visibility: "Visible on 75%+ of searches in your area",
    visibilityStrength: 0.75,
    features: [
      { title: "Top 3 on Google in 90 Days", subtext: "Guaranteed — or you don't pay until you get there." },
      { title: "Rank for Multiple Keywords", subtext: "Show up for every service your customers search for." },
      { title: "Full Website Fine-Tuned for Google", subtext: "Every page on your site optimized to rank higher." },
      { title: "Beat Your Top Competitors", subtext: "We analyze what they're doing and outrank them." },
      { title: "Updates Every Two Weeks", subtext: "We keep working on your rankings consistently." },
      { title: "Monthly Progress Report", subtext: "See exactly where you rank and how fast you're climbing." },
    ],
    cta: "Get to the Top",
    packageName: "Growth SEO",
  },
];

interface SEOProps {
  onSelectPackage: (packageName: string) => void;
  id?: string;
}

const SEO = ({ onSelectPackage, id }: SEOProps) => {
  return (
    <section id={id || "seo"} className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl xl:max-w-7xl mx-auto relative w-[95%]">

        {/* Section Headline */}
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Already have a website?{" "}
              <span className="text-teal-400 italic">Get to the top of Google.</span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <p className="text-muted-foreground text-lg sm:text-xl xl:text-2xl max-w-2xl mx-auto font-medium w-[80%]">
              No new website needed. We work with what you have and get you ranking above your competitors.
              <br />
              <span className="text-xs xl:text-lg mt-2 block opacity-70">
                *90-day ranking guarantee applies to Growth plan and selected keywords.
              </span>
            </p>
          </Reveal>
        </div>

        {/* SEO Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 justify-items-center max-w-3xl lg:max-w-5xl mx-auto">
          {seoTiers.map((tier, index) => (
            <Reveal key={index} delay={0.2 + index * 0.1} width="100%" fullHeight>
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
                        Best Value
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
                        or <span className="text-foreground font-semibold">{tier.quarterlyPrice}</span> billed every 3 months
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
                          {typeof feature === "string" ? (
                            <span className="text-foreground">{feature}</span>
                          ) : (
                            <div className="flex flex-col">
                              <span className="text-foreground">{feature.title}</span>
                              {feature.subtext && (
                                <span className="text-[0.95rem] md:text-base mt-2 opacity-80 leading-snug text-muted-foreground font-normal">
                                  {feature.subtext}
                                </span>
                              )}
                            </div>
                          )}
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
                      Book a {tier.name} Call
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