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
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 card-glow"
    >
      <h3 className="text-foreground text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {description}
      </p>
      {children && (
        <div className="relative">
          {children}
        </div>
      )}
    </motion.div>
  );
};

export default FeatureCard;
