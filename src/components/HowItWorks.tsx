import { Phone, FileText, Rocket } from "lucide-react";
import { Reveal } from "./Reveal";

const HowItWorks = () => {
  const steps = [
    {
      title: "Step 1: Consultation & Booking",
      description:
        "Choose a suitable package and fill out the form to get started.",
    },
    {
      title: "Step 2: Strategy & Planning",
      description:
        "We help you identify what content and details your website needs — and we send you a step-by-step plan to kick off the project smoothly.",
    },
    {
      title: "Step 3: Review & Refinement",
      description:
        "We help you review the first version of your website, make improvements together, and send you a ready-to-launch version.",
    },
    {
      title: "Step 4: Launch & Lead Generation",
      description:
        "We help you launch your website with confidence, double-check every feature, and ensure it looks great, performs flawlessly, and starts bringing in new leads.",
    },
  ];

  return (
    <section className="py-24 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Section Headline */}
        <Reveal width="100%">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-extrabold text-center text-foreground mb-20 xl:mb-4 leading-tight tracking-tight">
            How It Works
          </h2>
        </Reveal>

        {/* Steps Container */}
        <div className="flex flex-col">
          {steps.map((step, index) => (
            <Reveal key={index} delay={0.2 + index * 0.15} width="100%">
              <div className={`flex items-start gap-8 py-12 ${index !== 0 ? 'border-t border-white/10' : ''}`}>
                {/* Number Indicator */}
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-2xl sm:text-3xl font-bold text-primary relative z-10">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow pt-2 md:pt-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[hsl(220,10%,70%)] text-lg sm:text-xl leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
