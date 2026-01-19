import { Sparkles, Search, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "High-Converting Design",
      description:
        "Built on proven principles, not trends. Every element serves a purpose: capturing leads and building trust.",
    },
    {
      icon: Search,
      title: "SEO Built-In from Day One",
      description:
        "Google ranking isn't an afterthought. On-page SEO optimization, fast loading speeds, and mobile perfection are standard, not premium add-ons.",
    },
    {
      icon: DollarSign,
      title: "Transparent, Affordable Pricing",
      description:
        "No hidden fees. No surprise costs. You know exactly what you're getting and why it matters to your business.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16 max-w-4xl mx-auto leading-tight">
          Everything You Need to{" "}
          <span className="text-[hsl(220,10%,50%)]">Grow Your Business</span>
        </h2>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="relative group rounded-2xl p-8
                  bg-[hsl(220,15%,8%)]/80 
                  backdrop-blur-xl
                  border border-[hsl(220,10%,18%)]
                  shadow-[0_4px_30px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.03)]
                  hover:border-[hsl(220,10%,25%)]
                  transition-all duration-300"
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                {/* Icon */}
                <div className="mb-4 relative z-10">
                  <IconComponent
                    size={32}
                    className="text-[#2ECC71]"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 relative z-10">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-[hsl(220,10%,60%)] text-sm leading-relaxed relative z-10">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90"
          >
            Book a Free Website Review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
