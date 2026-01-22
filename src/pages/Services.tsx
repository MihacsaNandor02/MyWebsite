import { motion } from "framer-motion";
import { LayoutTemplate, Search, RefreshCcw, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Pages from Scratch",
    description: "High-converting landing pages built from zero, designed to turn visitors into leads.",
    href: "/services/landing-pages"
  },
  {
    icon: Search,
    title: "SEO (On-Site & Google)",
    description: "On-page SEO, technical optimization, and Google setup to help your business get found.",
    href: "/services/seo"
  },
  {
    icon: RefreshCcw,
    title: "Website Redesign",
    description: "Transform your existing website into a modern, conversion-focused experience.",
    href: "/services/redesign"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-b from-white to-[hsl(220,20%,60%)] bg-clip-text text-transparent">
                Services
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                From branding to websites, we deliver high-impact design solutions that scale with your business—fast, flexible, and on demand.
              </p>
            </motion.div>

            {/* Service Cards - 2 Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group block"
                >
                  <Link to={service.href}>
                  <div className="relative h-full p-6 md:p-8 rounded-2xl bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-6">
                      {/* Icon Container */}
                      <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-xl bg-[hsl(220,15%,12%)] border border-white/5 flex items-center justify-center">
                        <service.icon className="w-10 h-10 md:w-12 md:h-12 text-[hsl(220,10%,50%)] group-hover:text-white/80 transition-colors duration-300" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-white transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* Hover Arrow */}
                        <div className="mt-4">
                          <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
      </main>
    </div>
  );
};

export default Services;
