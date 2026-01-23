import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  ArrowRight,
  ArrowDown,
  Check,
  Gauge,
  MapPin,
  FileSearch,
  Zap,
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

  const flowSteps = [
    "Website Built for SEO",
    "Content Optimized",
    "Google Crawls & Indexes",
    "Consistent Leads from Search"
  ];

  const weDo = [
    "SEO strategy and keyword research",
    "On-page optimization for every page",
    "Technical audits and fixes",
    "Google Business Profile setup",
    "Monthly performance reports"
  ];

  const youNeedTo = [
    "Provide access to your website (or let us build it)",
    "Share information about your services and customers",
    "Respond to review requests from happy customers",
    "Be patient—SEO takes 3–6 months to show results"
  ];

  const pricingTiers = [
    {
      name: "Starter Landing Page",
      description: "Single-page high-converting design",
      price: "$997",
      featured: false,
      seoFeatures: [
        "Basic on-page SEO",
        "Meta titles and descriptions",
        "Mobile responsive",
        "Fast loading speed"
      ]
    },
    {
      name: "Business Website",
      description: "Complete SEO-optimized website",
      price: "$2,497",
      featured: true,
      seoFeatures: [
        "Full on-page SEO for all pages",
        "Technical SEO audit & fixes",
        "Google Business Profile setup",
        "Schema markup implementation",
        "Speed optimization",
        "1 month of SEO support"
      ]
    },
    {
      name: "Premium Package",
      description: "Growth-focused SEO solution",
      price: "$4,997",
      featured: false,
      seoFeatures: [
        "Everything in Business Website",
        "Local citation building",
        "Competitor analysis",
        "Content strategy",
        "Analytics & monthly reporting",
        "3 months of SEO support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
            <Link to="/services" className="hover:text-foreground transition-colors">
              Services
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">SEO</span>
          </motion.nav>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(220,15%,12%)]/80 border border-[hsl(220,10%,18%)] text-sm text-muted-foreground mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[hsl(142,76%,36%)]" />
            Used by 50+ local businesses
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
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
              className="bg-foreground text-background hover:bg-foreground/90 text-lg px-8 py-6 rounded-full font-semibold"
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
            className="text-foreground hover:text-foreground hover:bg-foreground/5 text-base gap-2 group"
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
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
                className="relative p-8 rounded-2xl bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl border border-[hsl(220,10%,18%)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
                
                <div className="w-12 h-12 rounded-xl bg-[hsl(220,15%,15%)] flex items-center justify-center mb-6">
                  <problem.icon className="w-6 h-6 text-[hsl(220,10%,55%)]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {problem.title}
                </h3>
                <p className="text-[hsl(220,10%,55%)] leading-relaxed">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
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
                className="relative p-8 rounded-2xl bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl border border-[hsl(220,10%,18%)] shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col"
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
                
                <h3 className="text-2xl font-bold text-foreground mb-6 relative">
                  {component.title}
                </h3>

                {/* What It Includes */}
                <div className="mb-8 relative">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    What It Includes
                  </h4>
                  <ul className="space-y-3">
                    {component.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <item.icon className="w-4 h-4 text-[hsl(142,76%,36%)] mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why It Matters */}
                <div className="mb-8 relative">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Why It Matters
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {component.whyItMatters}
                  </p>
                </div>

                {/* Example */}
                <div className="mt-auto pt-6 border-t border-[hsl(220,10%,18%)] relative">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Example
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    {component.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - How SEO Fits Your Website */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              SEO Isn't Separate—It's Built Into Everything
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-[hsl(220,10%,55%)] text-lg leading-relaxed">
                Most agencies treat SEO as an add-on—something you buy after your website is built. That's backwards.
              </p>
              <p className="text-[hsl(220,10%,55%)] text-lg leading-relaxed">
                We build SEO into every page from the start. Your site structure, your content hierarchy, your page speed—all optimized before you launch.
              </p>
              <div className="pt-4">
                <h4 className="text-foreground font-semibold mb-4">Why This Matters:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(142,76%,36%)] font-bold">1.</span>
                    <span className="text-[hsl(220,10%,55%)]">No expensive retrofits later</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(142,76%,36%)] font-bold">2.</span>
                    <span className="text-[hsl(220,10%,55%)]">Google starts indexing you correctly from day one</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(142,76%,36%)] font-bold">3.</span>
                    <span className="text-[hsl(220,10%,55%)]">Faster time to first rankings</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Visual Flow */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative p-8 rounded-2xl bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl border border-[hsl(220,10%,18%)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
              
              <div className="relative flex flex-col items-center space-y-4">
                {flowSteps.map((step, index) => (
                  <div key={step} className="w-full">
                    <div className="relative px-6 py-4 rounded-xl bg-[hsl(220,15%,12%)] border border-[hsl(220,10%,18%)] text-center">
                      <span className="text-foreground font-medium">{step}</span>
                    </div>
                    {index < flowSteps.length - 1 && (
                      <div className="flex justify-center py-2">
                        <ArrowDown className="w-5 h-5 text-[hsl(220,10%,40%)]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8 - Your Role in SEO Success */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              What Success Requires From You
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* We Do Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-8 rounded-2xl bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl border border-[hsl(220,10%,18%)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
              
              <h3 className="text-xl font-bold text-foreground mb-6 relative">We Do</h3>
              <ul className="space-y-4 relative">
                {weDo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[hsl(142,76%,36%)] mt-0.5 flex-shrink-0" />
                    <span className="text-[hsl(220,10%,55%)]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* You Need To Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative p-8 rounded-2xl bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl border border-[hsl(220,10%,18%)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
              
              <h3 className="text-xl font-bold text-foreground mb-6 relative">You Need To</h3>
              <ul className="space-y-4 relative">
                {youNeedTo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-[hsl(220,10%,55%)]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* The Reality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative p-6 rounded-xl bg-[hsl(220,15%,12%)]/60 border border-[hsl(220,10%,18%)] text-center"
          >
            <p className="text-foreground/90 italic text-lg">
              <strong>The Reality:</strong> SEO is a long game. If you're looking for overnight results, we're not the right fit. But if you want sustainable, compounding growth—we'll get you there.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 9 - Pricing */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Section Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              SEO Pricing (Included in Website Packages)
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transparent pricing. No hidden fees. Choose the package that fits your goals.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 flex flex-col
                  ${
                    tier.featured
                      ? "bg-[hsl(220,15%,12%)]/90 border-primary/30 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.3)]"
                      : "bg-[hsl(220,15%,8%)]/80"
                  }
                  backdrop-blur-xl
                  border border-[hsl(220,10%,18%)]
                  shadow-[0_8px_32px_rgba(0,0,0,0.3)]`}
              >
                {/* Most Popular Badge */}
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                {/* Package Name */}
                <h3 className="text-xl font-bold text-foreground mb-2 relative">
                  {tier.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 relative">
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mb-8 relative">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">
                    {tier.price}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-grow relative">
                  {tier.seoFeatures.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className="text-muted-foreground mt-0.5 flex-shrink-0"
                      />
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant={tier.featured ? "default" : "outline"}
                  size="lg"
                  className={`w-full relative ${
                    tier.featured
                      ? ""
                      : "bg-[hsl(220,14%,14%)] hover:bg-[hsl(220,14%,18%)] border-[hsl(220,10%,22%)]"
                  }`}
                >
                  Request a Quote
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10 - Final CTA */}
      <section className="py-24 px-4 bg-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
              See What's Holding Your Rankings Back
            </h2>
            <p className="text-background/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Get a free SEO audit. Find out exactly what's working, what's broken, and your top 3 quick wins. No obligation, no sales pitch.
            </p>
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 text-lg px-10 py-6 rounded-full font-semibold mb-4"
            >
              Get Your Free SEO Review
            </Button>
            <p className="text-background/60 text-sm">
              Takes 15 minutes. We'll email you a one-page report with actionable recommendations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SEOService;
