import { motion } from "framer-motion";
import { ArrowRight, Check, Target, Zap, Smartphone, MousePointerClick } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const LandingPagesService = () => {
  const idealFor = [
    "Launching a new product or service",
    "Running paid ad campaigns (Google, Meta, LinkedIn)",
    "Promoting a limited-time offer or event",
    "Capturing leads for your sales pipeline",
    "Testing a new market or idea",
  ];

  const features = [
    { icon: Target, title: "Conversion-Focused Copy", description: "Every word is crafted to guide visitors toward action." },
    { icon: Smartphone, title: "Fully Responsive Design", description: "Looks and performs flawlessly on every device." },
    { icon: MousePointerClick, title: "Lead Capture Built In", description: "Forms, CTAs, and integrations ready to collect leads." },
    { icon: Zap, title: "Fast Load Times", description: "Optimized for speed to reduce bounce and boost conversions." },
  ];

  const process = [
    { step: "01", title: "Strategy", description: "We define your goals, audience, and key messaging." },
    { step: "02", title: "Design", description: "We create a high-converting layout tailored to your brand." },
    { step: "03", title: "Launch", description: "We build, test, and deploy—ready to capture leads." },
  ];

  const benefits = [
    "More qualified leads entering your pipeline",
    "Clear messaging that resonates with your audience",
    "A professional first impression that builds trust",
    "Faster time-to-market for your campaigns",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
          >
            Landing Pages Built From Scratch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            High-converting landing pages designed to turn visitors into leads. Built with strategy, not just style.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button size="lg" className="group">
              Book a Free Discovery Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl rounded-2xl border border-white/5 p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Who This Is For</h2>
            <ul className="space-y-4">
              {idealFor.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <Check className="h-5 w-5 text-[#2ECC71] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-12 text-center text-white"
          >
            What You Get
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl rounded-2xl border border-white/5 p-6"
              >
                <feature.icon className="h-8 w-8 text-[#2ECC71] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build It */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-12 text-center text-white"
          >
            How We Build It
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl rounded-2xl border border-white/5 p-6 text-center"
              >
                <div className="text-4xl font-bold text-white/10 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl rounded-2xl border border-white/5 p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Results You Can Expect</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <Check className="h-5 w-5 text-[#2ECC71] mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
              Ready to Launch a Page That Converts?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your goals and build a landing page that turns visitors into leads. No pressure, no commitment—just a conversation.
            </p>
            <Button size="lg" className="group">
              Book a Free Discovery Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPagesService;
