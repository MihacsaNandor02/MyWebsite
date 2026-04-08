import { Reveal } from "./Reveal";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("how_it_works.step1_title"),
      description: t("how_it_works.step1_desc"),
    },
    {
      title: t("how_it_works.step2_title"),
      description: t("how_it_works.step2_desc"),
    },
    {
      title: t("how_it_works.step3_title"),
      description: t("how_it_works.step3_desc"),
    },
    {
      title: t("how_it_works.step4_title"),
      description: t("how_it_works.step4_desc"),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Section Headline */}
        <Reveal width="100%">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-foreground mb-8 xl:mb-4 leading-tight tracking-tight">
            {t("how_it_works.title")}
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
