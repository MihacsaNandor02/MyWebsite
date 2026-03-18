import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

interface PricingProps {
  onSelectPackage: (packageName: string) => void;
}

const Pricing = ({ onSelectPackage }: PricingProps) => {
  const websiteTiers = [
    {
      name: "Essential",
      description: "Perfect for small businesses that want a professional website which brings in customers.",
      price: "$2,499",
      option: "(or 3 payments of $833)",
      featured: false,
      features: [
        { title: "Free Mockup Included", subtext: "Get a preview design before development begins." },
        { title: "Custom High-End Design", subtext: "Design tailored to your business so it builds trust with your customers" },
        { title: "Conversion Optimization", subtext: "Every element is carefully designed to convert visitors into paying customers." },
        { title: "Mobile & Speed Optimization", subtext: "Optimized for mobile devices and quick loading." },
        { title: "Limited Website Optimization", subtext: "Getting found on Google isn't included — that's what the Recommended plan is for." },
        { title: "1 Month Unlimited Modifications", subtext: "Unlimited edits during the first month after launch." }
      ],
      cta: "Claim Your Free Mockup",
    },
    {
      name: "Recommended",
      description: "For small businesses that want to rank on Google and get customers without paying for ads.",
      price: "$4,999",
      featured: true,
      features: [
        { title: "Everything in Essential" },
        { title: "Ready in 10 Days", subtext: "So you can start getting customers as soon as possible." },
        { title: "Traffic Tracking", subtext: "Track visitors and see what drives customers to take action." },
        { title: "Top 5 On Google Guaranteed", subtext: "Get in the top 5 Google results within 90 days — or we work for free until you do." },
        { title: "Full Website Optimization", subtext: "Every page fine-tuned to get more customers from Google." },
        { title: "Stop Paying for Ads", subtext: "Attract customers from Google without paying for expensive ads." }
      ],
      cta: "Get My Free Strategy Call",
    },
    {
      name: "Custom",
      description: "Got an online store or want your existing site redesigned? Let's build something around your business.",
      price: "Quote",
      featured: false,
      features: [
        { title: "Everything in Recommended" },
        { title: "Built Around You", subtext: "Have something specific in mind? If it belongs on a website, we can build it." },
        { title: "E-Commerce Ready", subtext: "Sell your products online — we build the store, you handle the orders." },
        { title: "Website Redesign", subtext: "Already have a site that isn't working? We'll rebuild it from the ground up." },
        { title: "Custom Quote", subtext: "Every project is different — you only pay for what your business actually needs." },
      ],
      cta: "Get a Custom Quote",
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl xl:max-w-[1300px] mx-auto relative w-[95%]">
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
                        Best Value
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
                    {tier.price !== "Custom" && tier.price !== "Quote" && (
                      <span className="text-muted-foreground text-sm font-medium">/project</span>
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
                          {typeof feature === "string" ? (
                            <span>{feature}</span>
                          ) : (
                            <div className="flex flex-col">
                              <span className="text-foreground">{feature.title}</span>
                              <span className="text-[0.95rem] md:text-base mt-2 opacity-80 leading-snug">{feature.subtext}</span>
                            </div>
                          )}
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
