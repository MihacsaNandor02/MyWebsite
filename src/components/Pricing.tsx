import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const tiers = [
    {
      name: "Starter Landing Page",
      description: "Single-page high-converting design",
      price: "$997",
      featured: false,
      features: [
        "Mobile responsive",
        "Basic SEO optimization",
        "Contact form with lead capture",
        "2 rounds of revisions",
      ],
    },
    {
      name: "Business Website",
      description: "A complete website built to grow your business",
      price: "$2,497",
      featured: true,
      features: [
        "4–6 pages (Home, About, Services, Portfolio, Contact, etc.)",
        "Blog / SEO content strategy (included)",
        "Advanced on-page SEO",
        "Speed & performance optimization",
        "3 rounds of revisions",
        "1 month of free support",
      ],
    },
    {
      name: "Premium Package",
      description: "A growth-focused website with ongoing optimization",
      price: "$4,997",
      featured: false,
      features: [
        "Everything in Business Website",
        "Paid ad strategy consultation",
        "Local SEO setup (Google Business Profile optimization)",
        "Analytics setup & monthly reporting",
        "3 months of free support",
      ],
    },
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Headline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparent pricing. No hidden fees. Choose the package that fits your goals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 flex flex-col
                ${
                  tier.featured
                    ? "bg-[hsl(220,15%,12%)]/90 border-primary/30 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.3)]"
                    : "bg-[hsl(220,15%,8%)]/80"
                }
                backdrop-blur-xl
                border border-[hsl(220,10%,18%)]
                shadow-[0_8px_32px_rgba(0,0,0,0.3)]`}
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
              <h3 className="text-xl font-bold text-foreground mb-2">
                {tier.name}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6">
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-bold text-foreground">
                  {tier.price}
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-muted-foreground mt-0.5 flex-shrink-0"
                    />
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={tier.featured ? "default" : "outline"}
                size="lg"
                className={`w-full ${
                  tier.featured
                    ? ""
                    : "bg-[hsl(220,14%,14%)] hover:bg-[hsl(220,14%,18%)] border-[hsl(220,10%,22%)]"
                }`}
              >
                Request a Quote
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
