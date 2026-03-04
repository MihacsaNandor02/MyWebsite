import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  children?: ReactNode;
  delay?: number;
}

const FeatureCard = ({ title, description, children, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative bg-card/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)] overflow-hidden"
    >
      {/* Dynamic Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <h3 className="relative z-10 text-foreground text-2xl font-bold mb-3 tracking-tight">{title}</h3>
      <p className="relative z-10 text-muted-foreground text-base leading-relaxed mb-8 font-medium">
        {description}
      </p>
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </motion.div>
  );
};

export default FeatureCard;
