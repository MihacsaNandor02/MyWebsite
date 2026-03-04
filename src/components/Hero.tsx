import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Award, ArrowRight } from "lucide-react";
import heroImage from "../assets/weboldalak-Picsart-BackgroundRemover.png";

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[6.25rem]"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[7.5rem]"
      />
      {/* Floating Glass Element */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          rotate: [15, 25, 15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[15%] w-32 h-48 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hidden lg:block"
        style={{ transform: "rotate(15deg)" }}
      />
    </div>
  );
};

const Starfield = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: Math.random() * 0.5 + 0.1,
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: ["-5%", "105%"],
            x: [null, (Math.random() - 0.5) * 50 + "px"],
            opacity: [null, 0.8, null],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
          className="absolute w-1 h-1 bg-primary/40 rounded-full blur-[1px]"
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

const LightBeams = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            x: "-100%",
            y: "-100%",
            rotate: -45
          }}
          animate={{
            x: ["-100%", "200%"],
            y: ["-100%", "200%"],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 5,
            repeatDelay: Math.random() * 10
          }}
          className="absolute w-[31.25rem] h-32 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-3xl"
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const // Type casting to satisfy Easing type
      },
    },
  };

  return (
    <section
      style={{ fontSize: '1.25rem' }}
      className="relative min-h-[75vh] flex items-center justify-center pt-[8vw] lg:pt-0 lg:mt-[-2rem] sm:pb-8 md:pb-8 mb-12 sm:mb-0 md:mb-0 lg:mb-[-7rem] px-[.5%] overflow-hidden"
    >
      <InfinityGrid />
      <Starfield />
      <LightBeams />
      <FloatingShapes />

      <div className="relative z-20 w-full max-w-[95%] lg:max-w-none lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-6 lg:gap-x-12 items-center"
        >
          {/* Left Column: Text + CTA + Trust */}
          <div className="text-center lg:text-left lg:pl-[4vh] xl:pl-[8vh]">
            {/* Headline - ATTENTION */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-6xl lg:pt-0 font-bold tracking-tight mb-10 leading-[1.2] lg:leading-[1.15] xl:leading-[1.2] text-foreground"
            >
              <span className="text-primary inline-block">
                Conversion-Focused.
              </span>
              <br />
              <span className="inline-block">
                Google-Optimized.
              </span>
              <br />
              <span className="text-secondary italic inline-block">
                Guaranteed Growth.
              </span>
            </motion.h1>

            {/* Subheadline - INTEREST & DESIRE */}
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-md md:text-xl lg:text-xl xl:text-[1.4rem] max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed lg:leading-[1.4] xl:leading-[1.6] font-medium text-pretty"
            >
              Stop hiding on page 2. We help you <span className="text-foreground font-bold italic">dominate the first page of Google in 90 days</span> while building high-performance websites optimized to convert every visitor into a customer.
            </motion.p>

            {/* CTA Buttons - Primary + Secondary */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col max-w-[70vw] sm:flex-row sm:max-w-none sm:items-stretch sm:items-center justify-center lg:justify-start mb-12 gap-6 sm:gap-8 sm:mx-8  max-w-2xl mx-auto lg:mx-0"
            >
              <Button
                size="lg"
                className="flex-1 group relative text-base lg:text-lg px-6 py-5 sm:py-8 lg:px-10 lg:py-8 font-bold rounded-2xl shadow-2xl shadow-primary/20 transition-all hover:shadow-primary/40 hover:-translate-y-1.5 overflow-hidden"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 transition-colors group-hover:text-white">Book Your Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transition-transform duration-500 group-hover:scale-110" />
                {/* Shimmer Effect */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-[45deg] -translate-x-[200%] group-hover:animate-[shimmer_1.5s_infinite]" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="flex-1 group text-base lg:text-lg px-6 py-5 sm:py-8 lg:px-10 lg:py-8 font-semibold rounded-2xl border-white/15 bg-white/5 backdrop-blur-sm text-foreground hover:bg-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Our Work
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* Trust Indicators - Under CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm xl:text-xl font-medium text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-secondary" />
                <span>High-Converting Designs</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-secondary" />
                <span>4+ Years Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-secondary" />
                <span>Fast Delivery</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image (1.5x bigger) */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex justify-end items-center relative overflow-visible pr-0 lg:-mr-20 lg:justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
              <img
                src={heroImage}
                alt="Modern Digital Devices showing web interfaces"
                className="relative z-10 w-[46.875rem] h-[46.875rem] object-contain drop-shadow-2xl transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
