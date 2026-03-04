import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import BarChart from "./BarChart";
import { Zap, Shield, Rocket } from "lucide-react";

const Features = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Everything you need to <span className="text-primary">dominate</span> your niche
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            From Top 5 Google rankings to conversion-focused designs, we provide the ultimate toolkit for SMBs to win online.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Scale as you grow"
            description="Upgrade anytime—whether you need a landing page or a website."
            delay={0.1}
          >
            <BarChart />
          </FeatureCard>

          <FeatureCard
            title="Lightning fast delivery"
            description="Get your website up and running in days, not weeks. No more waiting."
            delay={0.2}
          >
            <div className="flex items-center justify-center py-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/20"
              >
                <Zap className="w-8 h-8 text-primary" />
              </motion.div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Enterprise security"
            description="Bank-grade security with SSL, DDoS protection, and 99.9% uptime."
            delay={0.3}
          >
            <div className="flex items-center justify-center py-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center border border-accent/20"
              >
                <Shield className="w-8 h-8 text-accent" />
              </motion.div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="SEO optimized"
            description="Built with best practices to rank higher and drive organic traffic."
            delay={0.4}
          >
            <div className="flex items-center justify-center py-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-gradient-to-br from-star/20 to-star/5 rounded-2xl flex items-center justify-center border border-star/20"
              >
                <Rocket className="w-8 h-8 text-star" />
              </motion.div>
            </div>
          </FeatureCard>

          {/* Wide card */}
          <div className="md:col-span-2">
            <FeatureCard
              title="Dedicated support"
              description="Get priority access to our team. We're here to help you succeed with dedicated account management and 24/7 support."
              delay={0.5}
            >
              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-muted to-secondary border-2 border-card flex items-center justify-center text-xs font-medium text-muted-foreground"
                    >
                      {String.fromCharCode(64 + i)}
                    </motion.div>
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">
                  +12 team members ready to help
                </span>
              </div>
            </FeatureCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
