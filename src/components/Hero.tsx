import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden bg-background">
      {/* Perspective grid background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" />
        
        {/* Perspective grid */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[60%]"
          style={{
            background: `
              linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 30%),
              linear-gradient(to right, hsl(220 14% 15% / 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(220 14% 15% / 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 60px 60px, 60px 60px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center bottom',
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(220,14%,14%)] rounded-full border border-[hsl(220,14%,20%)] mb-8"
        >
          <span className="w-2 h-2 bg-[hsl(142,76%,45%)] rounded-full animate-pulse" />
          <span className="text-[hsl(220,10%,55%)] text-sm font-medium">
            3 spots left for Q2
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tight mb-6 leading-[1.15]"
        >
          <span className="bg-gradient-to-b from-white via-white/90 to-[hsl(220,10%,45%)] bg-clip-text text-transparent">
            Websites that convert
          </span>
          <br />
          <span className="bg-gradient-to-b from-white/80 via-[hsl(220,10%,55%)] to-[hsl(220,10%,40%)] bg-clip-text text-transparent">
            visitors into buyers
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[hsl(220,10%,50%)] text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Get a high-performing website designed to turn clicks into customers,
          all with a simple, stress-free subscription—no contracts, no hassle.
        </motion.p>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button size="lg" className="text-base px-8 py-6 font-semibold rounded-xl">
            Get template for free
          </Button>

          {/* Social Proof */}
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-[hsl(45,93%,58%)] text-[hsl(45,93%,58%)]"
                />
              ))}
            </div>
            <span className="text-[hsl(220,10%,55%)] text-sm">
              300+ founders trust us
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
