import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const Pricing = () => {
  const tiers = [
    {
      name: "Standard Design",
      description: "Perfect for SMBs looking for a professional, lead-generating presence.",
      price: "$2,499",
      featured: false,
      features: [
        "Custom High-End Design",
        "Conversion Optimization",
        "Mobile & Speed Optimization",
        "Free Mockup Included",
        "1 Month Unlimited Modifications",
      ],
      cta: "Claim Your Free Mockup",
    },
    {
      name: "SEO + Design Alpha",
      description: "Our core solution to dominate your local or national niche.",
      price: "$4,999",
      featured: true,
      features: [
        "Everything in Standard",
        "Top 5 Google Rank Guarantee*",
        "90-Day Money-Back Ranking Plan",
        "On-Page & Technical SEO",
        "Strategic Keyword Research",
      ],
      cta: "Book a Strategy Call",
    },
    {
      name: "Enterprise Scaler",
      description: "Full-scale digital dominance for established businesses.",
      price: "Custom",
      featured: false,
      features: [
        "Everything in SEO + Design",
        "Off-Page Link Building",
        "Content Matrix Strategy",
        "Priority Direct Support",
        "Advanced Industry Analysis",
      ],
      cta: "Get a Custom Quote",
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl xl:max-w-7xl mx-auto relative w-[95%]">
        {/* Section Headline */}
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Simple Pricing. <span className="text-primary italic">Guaranteed Results.</span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <p className="text-muted-foreground text-lg sm:text-xl xl:text-2xl max-w-2xl mx-auto font-medium w-[80%]">
              No hidden fees. Just industry-leading design and SEO that actually grows your business.
              <br />
              <span className="text-xs xl:text-lg mt-2 block opacity-70">*90-day ranking guarantee applies to selected keywords.</span>
            </p>
          </Reveal>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {tiers.map((tier, index) => (
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
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                        Most Popular
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
                    {tier.price !== "Custom" && (
                      <span className="text-muted-foreground text-sm font-medium">/project</span>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="text-primary mt-0.5 flex-shrink-0"
                        />
                        <span className="text-[hsl(220,10%,70%)] text-lg md:text-xl font-medium leading-tight">
                          {feature}
                        </span>
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
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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
