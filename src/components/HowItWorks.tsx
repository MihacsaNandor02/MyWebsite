import { Phone, FileText, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      title: "Free Discovery Call (15–30 min)",
      description:
        "We discuss your business, goals, and current challenges. No obligation, no sales pitch.",
    },
    {
      icon: FileText,
      title: "Proposal & Strategy",
      description:
        "You receive a detailed plan showing what your new website will do, what pages it includes, and the ROI you can expect.",
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description:
        "We build, optimize, and launch. You get training and ongoing support to make the most of your new asset.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-20 max-w-4xl mx-auto leading-tight">
          How It Works
        </h2>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Line (desktop only) */}
          <div className="hidden md:block absolute top-[60px] left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[hsl(220,10%,20%)] to-transparent" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circular Icon Container */}
                  <div
                    className="relative w-[120px] h-[120px] rounded-full mb-8 flex items-center justify-center
                      bg-[hsl(220,15%,8%)]/60
                      backdrop-blur-md
                      border border-[hsl(220,10%,18%)]
                      shadow-[0_4px_30px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.04)]"
                  >
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                    <IconComponent
                      size={36}
                      className="text-[hsl(220,10%,70%)]"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[hsl(220,10%,55%)] text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
