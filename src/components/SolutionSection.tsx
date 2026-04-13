"use client";

import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import designIcon from "@/assets/wireframe-copped.png";
import searchIcon from "@/assets/solution-seo-v2.png";
import websiteIcon from "@/assets/solution-website-final-Picsart-BackgroundRemover-Photoroom.png";
import { useDictionary } from "@/components/DictionaryProvider";
import { t } from "@/lib/t";

const SolutionSection = ({ locale }: { locale: string }) => {
  const dictionary = useDictionary();

  const solutions = [
    {
      title: t(dictionary, "solutions.design_title"),
      description: t(dictionary, "solutions.design_desc"),
      image: designIcon,
      reversed: false,
      flipped: false,
      largexl: true,
      ctaText: t(dictionary, "solutions.design_cta"),
      link: `/${locale}/#contact`,
      learnMoreLink: `/${locale}/creare-site-web-targu-mures/`
    },
    {
      title: t(dictionary, "solutions.seo_title"),
      description: t(dictionary, "solutions.seo_desc"),
      image: searchIcon,
      reversed: true,
      flipped: false,
      ctaText: t(dictionary, "solutions.seo_cta"),
      link: `/${locale}/#contact`,
      learnMoreLink: `/${locale}/optimizare-seo-targu-mures/`
    },
    {
      title: t(dictionary, "solutions.consult_title"),
      description: t(dictionary, "solutions.consult_desc"),
      image: websiteIcon,
      reversed: false,
      flipped: false,
      large: true,
      ctaText: t(dictionary, "solutions.consult_cta"),
      link: `/${locale}/#contact`,
      learnMoreLink: `/${locale}/redesign-website-targu-mures/`
    },
  ];

  return (
    <section id="solutions" className="pt-8 sm:pt-20 px-4 overflow-visible relative ">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl xl:max-w-[80%] mx-auto ">
        {/* Section Headline */}
        <Reveal width="100%">
          <div className="text-center mb-8 md:mb-0 lg:mb-0 xl:mb-0 max-w-4xl xl:max-w-5xl mx-auto md:pb-16 lg:pb-6 xl:pb-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
              {t(dictionary, "solutions.headline_main")}
              <span className="text-secondary">{t(dictionary, "solutions.headline_highlight")}</span>
            </h2>
            <p className="text-[hsl(220,10%,60%)] text-lg sm:text-xl xl:text-2xl leading-relaxed max-w-2xl xl:max-w-4xl mx-auto">
              {t(dictionary, "solutions.headline_subtitle")}
            </p>
          </div>
        </Reveal>

        {/* Solutions Rows */}
        <div className="space-y-16 md:space-y-0 pl-0">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse ${solution.reversed ? " md:flex-row-reverse md:pb-28 xl:pb-24 " : " md:flex-row sm:pl-8 lg:pl-8 xl:pb-4"
                } items-center gap-12 md:gap-24 md:pb-16 `}
            >
              {/* Text Side */}
              <div className="flex-1 text-center md:text-left ">
                <Reveal overflowVisible>
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-bold text-foreground mb-6">
                      {solution.title}
                    </h3>
                    <p className="text-[hsl(220,10%,60%)] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8">
                      {solution.description}
                    </p>
                    <div className="flex flex-col items-center md:items-start gap-4">
                      <Button
                        asChild
                        size="lg"
                        className="rounded-full px-10 py-7 text-lg font-bold bg-primary hover:bg-primary/90 shadow-[0_0_1.875rem_-0.3125rem_rgba(124,58,237,0.5)] hover:shadow-[0_0_2.5rem_-0.3125rem_rgba(124,58,237,0.7)] transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <Link
                          href={solution.link}
                          onClick={(e) => {
                            if (solution.link.includes("#contact")) {
                              e.preventDefault();
                              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                        >
                          {solution.ctaText}
                        </Link>
                      </Button>
                      <Link href={solution.learnMoreLink} className="text-muted-foreground hover:text-foreground text-sm font-semibold transition-colors underline-offset-4 hover:underline">
                        {t(dictionary, "solutions.learn_more")} <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full relative">
                <Reveal delay={0.2} width="100%" overflowVisible>
                  <div className="relative group">
                    {/* Glow effect backend (targeted size) */}
                    <div className={`absolute ${index === 1 ? '-inset-3' : '-inset-4'} bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Image Container */}
                    <div className={`relative z-10 ${solution.large ? 'p-4 mt-20 md:mt-0 mb-[-5.5vh] md:mb-[0vh] lg:mb-[2vh] xl:mb-[0vh] md:p-6 lg:p-8' : 'p-8 mt-12 md:mt-0 mb-[-8vh] md:mb-[-10vh] md:p-12 lg:p-16 lg:mb-[-10vh]'} 
                    ${solution.largexl ? 'p-0 md:p-0 lg:p-0 mb-[-5vh] sm:mb-[-5vh] md:mb-[2vh] lg:mb-[2vh] xl:mb-[0vh] xl:mt-[2vh]' : ''} transition-transform duration-500 hover:scale-105`}>
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        className={`w-full h-auto mx-auto drop-shadow-2xl
                                    ${solution.large
                            ? 'max-w-[16.3125rem] sm:max-w-[19rem] md:max-w-[21.7125rem] lg:max-w-[23rem] xl:max-w-[24.5rem]'
                            : solution.largexl
                              ? 'max-w-[20rem] sm:max-w-[20rem] md:max-w-[20rem] lg:max-w-[22rem] xl:max-w-[25rem]'
                              : 'max-w-[15.125rem] sm:max-w-[18rem] lg:max-w-[20.3125rem] xl:max-w-[21.7125rem]'
                          }
                                  `}
                        unoptimized
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
