import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import designIcon from "../assets/wireframe-copped.png";
import searchIcon from "../assets/solution-seo-v2.png";
import websiteIcon from "../assets/solution-website-final-Picsart-BackgroundRemover-Photoroom.png";

const SolutionSection = () => {
  const solutions = [
    {
      title: "Conversion-Focused Design",
      description:
        "We don’t just focus on making sites look good — we build websites that are thoughtfully designed to help your business attract and convert more customers.",
      image: designIcon,
      reversed: false,
      flipped: false,
      largexl: true,
      ctaText: "Get Your Free Website Mockup",
    },
    {
      title: "Top 5 Google Ranking Guarantee",
      description:
        "If we don't rank you in the top 5 for your keywords within 90 days, we work for free until you do. No excuses, just results.",
      image: searchIcon,
      reversed: true,
      flipped: false,
      ctaText: "I Want to Rank Higher",
    },
    {
      title: "Risk-Free Strategy Call",
      description:
        "Get a professional mockup of your new site for free before you spend a dime. Plus, 1 month of unlimited modifications after launch.",
      image: websiteIcon,
      reversed: false,
      flipped: false,
      large: true,
      ctaText: "Book Your Consultation Call",
    },
  ];

  return (
    <section id="solutions" className="py-24 px-4 overflow-hidden relative ">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl xl:max-w-[80%] mx-auto ">
        {/* Section Headline */}
        <Reveal width="100%">
          <div className="text-center mb-8 md:mb-8 lg:mb-12 xl:mb-12 max-w-4xl xl:max-w-5xl mx-auto md:pb-16 lg:pb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
              Everything You Need to{" "}
              <span className="text-secondary">Grow Your Business</span>
            </h2>
            <p className="text-[hsl(220,10%,60%)] text-lg sm:text-xl xl:text-2xl leading-relaxed max-w-2xl xl:max-w-4xl mx-auto">
              Proven strategies used across dozens of successful brands — delivered
              through a done-for-you system that brings you more customers.
            </p>
          </div>
        </Reveal>

        {/* Solutions Rows */}
        <div className="space-y-16 md:space-y-0 pl-0">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse ${solution.reversed ? " md:flex-row-reverse " : " md:flex-row sm:pl-8 lg:pl-8"
                } items-center gap-12 md:gap-24 md:pb-28`}
            >
              {/* Text Side */}
              <div className="flex-1 text-center md:text-left ">
                <Reveal>
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-bold text-foreground mb-6">
                      {solution.title}
                    </h3>
                    <p className="text-[hsl(220,10%,60%)] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8">
                      {solution.description}
                    </p>
                    <Button
                      size="lg"
                      className="rounded-full px-10 py-7 text-lg font-bold bg-primary hover:bg-primary/90 shadow-[0_0_1.875rem_-0.3125rem_rgba(124,58,237,0.5)] hover:shadow-[0_0_2.5rem_-0.3125rem_rgba(124,58,237,0.7)] transition-all duration-300 transform hover:-translate-y-1"
                      onClick={() =>
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      {solution.ctaText}
                    </Button>
                  </div>
                </Reveal>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full relative">
                <Reveal delay={0.2} width="100%">
                  <div className="relative group">
                    {/* Glow effect backend (targeted size) */}
                    <div className={`absolute ${index === 1 ? '-inset-3' : '-inset-4'} bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Image Container */}
                    <div className={`relative z-10 ${solution.large ? 'p-4 mt-20 md:mt-0 mb-[-5.5vh] md:mb-[0vh] lg:mb-[2vh] xl:mb-[0vh] md:p-6 lg:p-8' : 'p-8 mt-12 md:mt-0 mb-[-8vh] md:mb-[-10vh]  md:p-12 lg:p-16 lg:mb-[-10vh]'} 
                    ${solution.largexl ? 'p-0 md:p-0 lg:p-0 mb-[-5vh] sm:mb-[-5vh] md:mb-[2vh] lg:mb-[2vh] xl:mb-[0vh] xl:mt-[2vh]' : ''} transition-transform duration-500 hover:scale-105`}>
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className={`w-full h-auto mx-auto drop-shadow-2xl
                                    ${solution.large
                            ? 'max-w-[16.3125rem] sm:max-w-[19rem] md:max-w-[21.7125rem] lg:max-w-[23rem] xl:max-w-[24.5rem]'
                            : solution.largexl
                              ? 'max-w-[20rem] sm:max-w-[20rem] md:max-w-[20rem] lg:max-w-[22rem] xl:max-w-[25rem]'
                              : 'max-w-[15.125rem] sm:max-w-[18rem] lg:max-w-[20.3125rem] xl:max-w-[21.7125rem]'
                          }
                                  `} />
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
