import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  ArrowRight,
  Search,
  Gauge,
  MapPin,
  FileSearch,
  Zap,
  Globe,
  Target,
  FileText,
  Link2,
  MessageSquare,
  Smartphone,
  Lock,
  FileCode,
  Database,
  AlertTriangle,
  Building,
  FolderSearch,
  Camera,
  Star,
  MapPinned
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const SEOService = () => {
  const problems = [
    {
      icon: FileSearch,
      title: "Google Can't Find Your Content",
      description: "Your website exists, but Google isn't indexing your important pages or understanding what you do. Without proper structure, Google treats your site like a mystery."
    },
    {
      icon: Gauge,
      title: "Your Site Is Slow (And Google Notices)",
      description: "If your website takes 5+ seconds to load, Google ranks you lower AND your visitors leave. Speed isn't optional—it's a ranking factor and a conversion killer."
    },
    {
      icon: MapPin,
      title: "You're Not Showing Up Locally",
      description: "When someone searches 'plumber near me' or 'best coffee in [city]', you should appear. But most local businesses skip Google Business Profile setup, losing 40% of possible leads."
    }
  ];

  const seoComponents = [
    {
      title: "On-Page SEO",
      includes: [
        { icon: Target, text: "Target keyword research for your business" },
        { icon: FileText, text: "Optimized page titles and meta descriptions" },
        { icon: FileCode, text: "H1-H3 header structure for Google" },
        { icon: Camera, text: "Image optimization with proper alt text" },
        { icon: Link2, text: "Internal linking strategy" },
        { icon: MessageSquare, text: "Content that answers customer questions" }
      ],
      whyItMatters: "On-page SEO tells Google exactly what your page is about. When your titles, headings, and content align with what people search for, Google knows you're relevant. This is the foundation.",
      example: "Instead of 'Home' as your H1, we use 'Emergency Plumbing Services in [City] Available 24/7'. Google immediately understands your niche, your service, and your location."
    },
    {
      title: "Technical SEO",
      includes: [
        { icon: Zap, text: "Site speed optimization (load times under 3 seconds)" },
        { icon: Smartphone, text: "Mobile responsiveness testing" },
        { icon: Lock, text: "SSL certificate (HTTPS security)" },
        { icon: Database, text: "Proper sitemap and robots.txt setup" },
        { icon: FileCode, text: "Structured data/schema markup" },
        { icon: AlertTriangle, text: "Fix crawl errors and broken links" }
      ],
      whyItMatters: "Technical SEO ensures Google can crawl, index, and understand your entire website without problems. A slow, broken site looks unprofessional to both Google and customers.",
      example: "We use Google PageSpeed Insights to identify slowdowns. We optimize images, minify CSS, and use a CDN. Result: Your site loads 40-50% faster, Google ranks it higher, and customers don't bounce."
    },
    {
      title: "Local SEO (Google Business Profile)",
      includes: [
        { icon: Building, text: "Complete profile setup with verified address" },
        { icon: FolderSearch, text: "Business category and service area optimization" },
        { icon: Target, text: "Local keyword targeting" },
        { icon: Camera, text: "Photo management and organization" },
        { icon: Star, text: "Review management strategy" },
        { icon: MapPinned, text: "Local citation building (consistent name, address, phone)" }
      ],
      whyItMatters: "When someone searches 'restaurants near me' or 'roofing in [city]', Google shows 3 local results. A complete Google Business Profile gets you in that 3-pack. For local services, this is 40% of your leads.",
      example: "We set up your profile so Google knows: (1) What you do, (2) Where you serve, (3) What customers say about you. We add photos, verify your address, and optimize your categories. Result: You show up in local search results."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">SEO</span>
          </motion.nav>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(220,15%,12%)]/80 border border-white/10 text-sm text-muted-foreground mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#2ECC71]" />
            Used by 50+ local businesses
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent"
          >
            Rank on Google. Get consistent leads from local search.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            SEO isn't luck or guesswork. It's a structured system built into your website from day one. We optimize for both Google and your customers.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6 rounded-full font-semibold"
            >
              Get Your Free SEO Review
            </Button>
            <p className="text-sm text-muted-foreground max-w-md">
              See exactly what's holding your rankings back—and what to fix first. No pressure, no sales pitch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA #1 - After Hero */}
      <section className="py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <Button
            variant="ghost"
            className="text-white hover:text-white hover:bg-white/5 text-base gap-2 group"
          >
            👉 See Why Your Site Isn't Ranking
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Takes 2 minutes to understand what's holding you back.
          </p>
        </motion.div>
      </section>

      {/* Section 2 - Common SEO Problems */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent">
              Why You're Not Ranking on Google (Yet)
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Most small business websites are losing money every month. Not because the business isn't good—but because Google can't find you. Here's what's actually holding you back:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl border border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-[hsl(220,15%,15%)] flex items-center justify-center mb-6">
                  <problem.icon className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - What's Included */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent">
              Our SEO Approach: Three Layers of Optimization
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We don't promise #1 rankings overnight. We build a foundation that Google trusts, then we let consistency do the work. Here's exactly what we optimize:
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {seoComponents.map((component, index) => (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl border border-white/10 flex flex-col"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  {component.title}
                </h3>

                {/* What It Includes */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    What It Includes
                  </h4>
                  <ul className="space-y-3">
                    {component.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <item.icon className="w-4 h-4 text-[#2ECC71] mt-1 flex-shrink-0" />
                        <span className="text-sm text-white/80">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why It Matters */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Why It Matters
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {component.whyItMatters}
                  </p>
                </div>

                {/* Example */}
                <div className="mt-auto pt-6 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Example
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed italic">
                    {component.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOService;
