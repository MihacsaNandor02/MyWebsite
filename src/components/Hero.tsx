import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Award, ArrowRight } from "lucide-react";
import heroImage from "../assets/weboldalak-Picsart-BackgroundRemover_v2.png";
import { useTranslation } from "react-i18next";

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[6.25rem]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[7.5rem]" />
    </div>
  );
};

const Starfield = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full blur-[1px]"
          style={{
            opacity: Math.random() * 0.3 + 0.1,
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5
          }}
        />
      ))}
    </div>
  );
};

const InfinityGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute bottom-0 left-[-50%] right-[-50%] h-[120%] opacity-30"
        style={{
          backgroundSize: '100% 100%, 5rem 5rem, 5rem 5rem',
          transform: 'perspective(50rem) rotateX(60deg)',
          transformOrigin: 'center bottom',
        }}
      />
    </div>
  );
};

const Hero = ({ id }: { id?: string }) => {
  const { t } = useTranslation();

  return (
    <section
      id={id}
      style={{ fontSize: '1.25rem' }}
      className="relative min-h-[75vh] flex items-center justify-center pt-[6vw] lg:pl-12 sm:pt-0 md:pt-12 lg:pt-0 xl:pt-4 sm:pb-0 md:pb-8 lg:pb-0 mb-4 sm:mb-0 md:mb-0  px-[.5%] overflow-hidden"
    >
      <InfinityGrid />
      <Starfield />
      <FloatingShapes />

      <div className="relative z-20 w-full max-w-[95%] lg:max-w-none ">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-x-12 items-start">
          {/* Left Column: Text + CTA + Trust */}
          <div className="text-center lg:text-left lg:pl-[4vh] xl:pl-[8vh]">
            {/* Headline - ATTENTION */}
            <h1 className="text-4xl min-[450px]:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl 2xl:text-7xl lg:pt-0 font-bold tracking-tight mb-10 leading-[1.2] lg:leading-[1.15] xl:leading-[1.3] text-foreground">
              <span className="text-primary inline-block">
                {t('hero.title_part1')}
              </span>
              <br />
              <span className="inline-block">
                {t('hero.title_part2')}
              </span>
              <br />
              <span className="text-secondary italic inline-block">
                {t('hero.title_part3')}
              </span>
            </h1>

            {/* Subheadline - INTEREST & DESIRE */}
            <p className="text-muted-foreground text-md min-[450px]:text-md md:text-xl lg:text-xl xl:text-[1.4rem] max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed lg:leading-[1.4] xl:leading-[1.6] font-medium text-pretty">
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons - Primary + Secondary */}
            <div className="flex flex-col sm:flex-row max-w-[65vw] sm:max-w-xl xl:max-w-2xl sm:items-stretch sm:items-center justify-center lg:justify-start mb-12 gap-6 sm:gap-8  mx-auto sm:mx-auto lg:mx-0">
              <Button
                asChild
                size="lg"
                className="flex-1 group relative text-base lg:text-lg px-0 py-5  sm:py-8 lg:px-10 lg:py-8 font-bold rounded-2xl shadow-2xl shadow-primary/20 transition-all hover:shadow-primary/40 hover:-translate-y-1.5 overflow-hidden"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <a href="#contact">
                  <span className="relative z-10 transition-colors group-hover:text-white">{t('hero.cta_primary')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transition-transform duration-500 group-hover:scale-110" />
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-[45deg] -translate-x-[200%] group-hover:animate-[shimmer_1.5s_infinite]" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="flex-1 group text-base lg:text-lg px-0 py-5 sm:py-8 lg:px-10 lg:py-8 font-semibold rounded-2xl border-white/15 bg-white/5 backdrop-blur-sm text-foreground hover:bg-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <a href="#portfolio">
                  {t('hero.cta_secondary')}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            {/* Trust Indicators - Under CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm lg:text-base xl:text-xl  font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-secondary" />
                <span>{t('hero.trust_1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-secondary" />
                <span>{t('hero.trust_2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-secondary" />
                <span>{t('hero.trust_3')}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image (1.5x bigger) */}
          <div className="hidden lg:flex  items-start relative overflow-visible lg:justify-center lg:items-start lg:mt-4 2xl:pr-12  ">
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
              <img
                src={heroImage}
                alt={t('hero.alt_hero')}
                className="relative z-10 w-[clamp(24rem,32vw,38rem)] h-auto object-top drop-shadow-2xl transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
