import { motion } from "framer-motion";

const bars = [
  { height: 40, delay: 0 },
  { height: 65, delay: 0.1 },
  { height: 55, delay: 0.2 },
  { height: 80, delay: 0.3 },
  { height: 95, delay: 0.4 },
];

const BarChart = () => {
  return (
    <div className="relative">
      {/* +42% label */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="absolute -top-2 left-0 text-primary font-semibold text-sm"
      >
        +42%
      </motion.div>

      {/* Chart */}
      <div className="flex items-end gap-3 h-32 pt-6">
        {bars.map((bar, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            whileInView={{ height: `${bar.height}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: bar.delay,
              ease: "easeOut",
            }}
            className="w-6 bg-gradient-to-t from-primary/60 to-primary rounded-t-md"
          />
        ))}
        
        {/* Pie chart icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: "spring" }}
          className="ml-2 w-10 h-10 rounded-full bg-gradient-to-br from-primary via-accent to-star animate-float"
          style={{
            background: `conic-gradient(
              hsl(var(--primary)) 0deg 120deg,
              hsl(var(--accent)) 120deg 240deg,
              hsl(var(--star-gold)) 240deg 360deg
            )`,
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;
