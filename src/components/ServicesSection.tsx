import { motion } from "framer-motion";
import { LayoutTemplate, Search, RefreshCcw, ArrowRight } from "lucide-react";

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Pages from Scratch",
    description: "High-converting landing pages built from zero, designed to turn visitors into leads.",
    href: "#contact"
  },
  {
    icon: Search,
    title: "SEO (On-Site & Google)",
    description: "On-page SEO, technical optimization, and Google setup to help your business get found.",
    href: "#contact"
  },
  {
    icon: RefreshCcw,
    title: "Website Redesign",
    description: "Transform your existing website into a modern, conversion-focused experience.",
    href: "#contact"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-b from-white to-[hsl(220,20%,60%)] bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From branding to websites, we deliver high-impact design solutions that scale with your business.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group block"
            >
              <div className="relative h-full p-8 rounded-2xl bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] transition-all duration-300">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <service.icon className="w-8 h-8 text-[hsl(220,10%,50%)] group-hover:text-white/80 transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground text-center mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
          >
            Not sure which service you need? Let's talk.
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
