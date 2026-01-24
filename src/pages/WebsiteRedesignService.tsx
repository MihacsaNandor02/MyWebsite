import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  ArrowRight,
  Check,
  Clock,
  Palette,
  TrendingDown,
  Smartphone,
  HelpCircle,
  Users,
  Search,
  FileText,
  BarChart3,
  MousePointer,
  MessageSquare,
  Eye,
  Layers,
  PlusCircle,
  RefreshCw,
  ClipboardCheck,
  Lightbulb,
  PenTool,
  Rocket,
  Wrench,
  Monitor,
  Zap,
  Target,
  GraduationCap,
  LineChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const WebsiteRedesignService = () => {
  const problemSigns = [
    {
      icon: Palette,
      title: "Your Design Looks Outdated",
      description: "If your website looks like it was built in 2015, visitors make snap judgments about your credibility. Modern design takes 50 milliseconds. A dated site says 'we're not professional' before anyone reads a word.",
      realImpact: "40% of visitors will leave an outdated site immediately, even if your service is good."
    },
    {
      icon: TrendingDown,
      title: "Visitors Don't Convert to Leads",
      description: "You get traffic, but no one's calling or filling out forms. This usually means unclear messaging, weak CTAs, or too many distracting elements. A redesign fixes the pathway from visitor to lead.",
      realImpact: "A site with 1,000 monthly visitors but 0 leads is losing $10K+ per month compared to a site converting even 1%."
    },
    {
      icon: Smartphone,
      title: "Mobile Experience Is Broken",
      description: "Your site might look okay on desktop, but on phones it's unusable. Text is too small, buttons are hard to click, or pages take forever to load. You're losing half your visitors right there.",
      realImpact: "70% of internet traffic is mobile. If your site doesn't work on phones, you're invisible to most people."
    },
    {
      icon: HelpCircle,
      title: "Your Site Has No Clear Purpose",
      description: "Visitors land on your homepage and don't know what you offer or what to do next. Too many options, unclear benefits, confusing navigation. They leave confused instead of convinced.",
      realImpact: "Unclear websites have bounce rates above 70%. Clear sites keep visitors engaged and move them toward action."
    },
    {
      icon: Users,
      title: "Competitors Have Better Websites",
      description: "You've noticed competitors with less experience or smaller budgets have websites that look more professional. Your website is costing you business.",
      realImpact: "58% of consumers judge a business by their website quality. A worse website = lost sales."
    }
  ];

  const assessmentPoints = [
    {
      icon: Layers,
      title: "Can we keep your current structure?",
      description: "If your site is already technically solid, we redesign the visual layer. Keep the good, modernize the rest."
    },
    {
      icon: PlusCircle,
      title: "Do we need to add pages?",
      description: "If your messaging is unclear, we might add a services page, benefits section, or clearer navigation. But we're strategic about it—not adding bloat."
    },
    {
      icon: RefreshCw,
      title: "Should we rebuild from scratch?",
      description: "Only if your site has fundamental technical problems, is built on outdated technology, or needs a completely different strategy."
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Audit & Diagnosis",
      duration: "(Week 1)",
      description: "We analyze your current site: design, conversions, mobile experience, speed, messaging clarity. We identify what's working, what's broken, and why visitors leave. You get a detailed report.",
      listTitle: "What We Look For:",
      listItems: [
        { icon: BarChart3, text: "Conversion rate (what % of visitors take action?)" },
        { icon: TrendingDown, text: "Bounce rate (how many leave immediately?)" },
        { icon: MousePointer, text: "User flow (is the path to action clear?)" },
        { icon: Palette, text: "Design age (does it look professional today?)" },
        { icon: Smartphone, text: "Mobile usability (does it work on phones?)" },
        { icon: MessageSquare, text: "Message clarity (do visitors understand what you offer?)" }
      ]
    },
    {
      number: 2,
      title: "Strategy & Proposal",
      duration: "(Week 2)",
      description: "Based on the audit, we propose exactly what to redesign and why. We show you: which elements hurt conversions, what messaging changes matter, what visual improvements help credibility. You know the 'why' behind every change.",
      listTitle: "We Recommend:",
      listItems: [
        { icon: RefreshCw, text: "Redesign (visual refresh) vs. Rebuild (structural change)" },
        { icon: FileText, text: "Which pages need attention" },
        { icon: Target, text: "What messaging changes will improve conversions" },
        { icon: Clock, text: "Timeline and investment" },
        { icon: LineChart, text: "Expected improvements (traffic, clarity, leads)" }
      ]
    },
    {
      number: 3,
      title: "Design & Build",
      duration: "(3-4 weeks)",
      description: "We redesign your site with conversion as the goal. Modern visuals, clear messaging, smooth user flow. Every element serves a purpose. We test on all devices and build for speed.",
      listTitle: "We Deliver:",
      listItems: [
        { icon: PenTool, text: "Modern, professional design" },
        { icon: Smartphone, text: "Optimized for mobile" },
        { icon: Zap, text: "Faster loading (we compress, optimize, simplify)" },
        { icon: Eye, text: "Clear value proposition and CTAs" },
        { icon: Search, text: "SEO-friendly structure" },
        { icon: Users, text: "User testing for clarity" }
      ]
    },
    {
      number: 4,
      title: "Launch & Support",
      duration: "(1 week + ongoing)",
      description: "We migrate your site, test everything, and go live. You get training on how to use your new site. We monitor performance and make adjustments based on actual visitor behavior.",
      listTitle: "We Provide:",
      listItems: [
        { icon: Monitor, text: "Full site migration (no lost data)" },
        { icon: Wrench, text: "2 weeks of free support/tweaks" },
        { icon: GraduationCap, text: "Training for you to update content" },
        { icon: BarChart3, text: "Performance monitoring" },
        { icon: Lightbulb, text: "Recommendations for ongoing optimization" }
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
            <span className="text-foreground">Website Redesign</span>
          </motion.nav>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(220,15%,12%)]/80 border border-[hsl(220,10%,18%)] text-sm text-muted-foreground mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[hsl(142,76%,36%)]" />
            Improved conversion rates by average 35% for clients
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
          >
            Your Website Should Be an Asset, Not a Liability
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            An outdated website costs you customers every single day. We redesign strategically—improving conversions, trust, and clarity without unnecessary rebuilds.
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
              See What Your Website Could Do Better
            </Button>
            <p className="text-sm text-muted-foreground max-w-md">
              Free audit shows exactly what's hurting your results and how to fix it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Signs You Need a Redesign */}
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
              Does Your Website Feel Stuck in Time?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Not every website needs a complete rebuild. But if your site has these problems, a redesign will directly improve your revenue.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemSigns.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl border border-[hsl(220,10%,18%)] shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col"
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
                
                <div className="w-12 h-12 rounded-xl bg-[hsl(220,15%,15%)] flex items-center justify-center mb-6">
                  <problem.icon className="w-6 h-6 text-[hsl(220,10%,55%)]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {problem.title}
                </h3>
                <p className="text-[hsl(220,10%,55%)] leading-relaxed mb-6 flex-grow">
                  {problem.description}
                </p>
                <div className="pt-4 border-t border-[hsl(220,10%,18%)]">
                  <p className="text-sm font-medium text-foreground/80">
                    <span className="text-[hsl(0,65%,50%)]">Real Impact:</span> {problem.realImpact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Website Redesign Isn't One-Size-Fits-All */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              We Don't Rebuild Everything (That Would Be Wasteful)
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-8 md:p-12 rounded-2xl bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl border border-[hsl(220,10%,18%)] shadow-[0_8px_32px_rgba(0,0,0,0.3)] mb-12"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
            
            <div className="relative">
              <p className="text-lg text-[hsl(220,10%,55%)] leading-relaxed mb-8">
                Here's the thing: Not all websites need a from-scratch rebuild. Sometimes a strategic redesign is better—faster, cheaper, and more effective.
              </p>
              
              <p className="text-lg text-foreground font-semibold mb-6">
                We assess three things:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {assessmentPoints.map((point, index) => (
                  <div key={point.title} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[hsl(220,15%,15%)] flex items-center justify-center flex-shrink-0">
                        <point.icon className="w-5 h-5 text-[hsl(142,76%,36%)]" />
                      </div>
                      <h4 className="text-foreground font-semibold">{point.title}</h4>
                    </div>
                    <p className="text-[hsl(220,10%,55%)] text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-[hsl(220,10%,18%)]">
                <p className="text-lg text-foreground">
                  <span className="font-semibold">Our approach:</span>{" "}
                  <span className="text-[hsl(220,10%,55%)]">
                    Audit first, recommend second. We won't sell you a $15K rebuild if a $3.5K redesign will fix your real problems.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 - Our Redesign Process */}
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
              Four Clear Steps from Audit to Launch
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We take the guesswork out of redesigns. Here's exactly what happens:
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 md:p-10 rounded-2xl bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl border border-[hsl(220,10%,18%)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                    {/* Step Number */}
                    <div className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-foreground">
                          {step.title}
                        </h3>
                        <span className="text-sm text-muted-foreground bg-[hsl(220,15%,15%)] px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-[hsl(220,10%,55%)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* List */}
                  <div className="md:ml-20">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      {step.listTitle}
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {step.listItems.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <item.icon className="w-4 h-4 text-[hsl(142,76%,36%)] mt-1 flex-shrink-0" />
                          <span className="text-sm text-foreground/80">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Before & After: What Changes */}
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
              What Improves in a Redesign
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A strategic redesign impacts multiple areas. Here's what real clients experienced:
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                metric: "Conversion Rate",
                before: "1% of visitors take action (1,000 visitors = 10 leads/month)",
                after: "3-4% of visitors take action (1,000 visitors = 30-40 leads/month)",
                why: "Clearer messaging, better CTAs, and a more trustworthy design means more visitors become leads. Same traffic, 3x more results."
              },
              {
                metric: "Site Speed",
                before: "5.2 second load time (slow, hurts Google rankings)",
                after: "2.1 second load time (fast, Google rewards this)",
                why: "Faster sites rank better on Google AND convert better. People leave slow sites. Fast sites keep visitors engaged."
              },
              {
                metric: "Mobile Experience",
                before: "40% of mobile visitors bounce immediately (site doesn't work on phones)",
                after: "10% bounce rate (site is designed for mobile first)",
                why: "70% of traffic is mobile. If your site works on phones, you instantly reach more customers. More traffic + more conversions = more leads."
              },
              {
                metric: "Trust/Credibility",
                before: "Dated visuals, unclear messaging = visitors think 'this company isn't professional'",
                after: "Modern design, clear benefits = visitors think 'I trust this company'",
                why: "58% of people judge businesses by their website. A professional site wins more customers. You don't get a second chance at first impressions."
              },
              {
                metric: "Google Rankings",
                before: "Page 2-3 for main keywords (invisible)",
                after: "Page 1 for main keywords (visible, getting traffic)",
                why: "90% of clicks go to page 1 results. A redesign with proper SEO gets you visible. More visibility = more customers finding you naturally."
              }
            ].map((item, index) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl border border-[hsl(220,10%,18%)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
                
                <div className="relative">
                  <h3 className="text-xl font-bold text-foreground mb-6">{item.metric}</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 rounded-xl bg-[hsl(0,65%,50%)]/10 border border-[hsl(0,65%,50%)]/20">
                      <span className="text-sm font-semibold text-[hsl(0,65%,50%)] uppercase tracking-wider">Before</span>
                      <p className="text-foreground/80 mt-2">{item.before}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[hsl(142,76%,36%)]/10 border border-[hsl(142,76%,36%)]/20">
                      <span className="text-sm font-semibold text-[hsl(142,76%,36%)] uppercase tracking-wider">After</span>
                      <p className="text-foreground/80 mt-2">{item.after}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-[hsl(220,10%,18%)]">
                    <p className="text-[hsl(220,10%,55%)]">
                      <span className="font-semibold text-foreground">Why It Matters:</span> {item.why}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - What's Included in a Redesign */}
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
              The Full Redesign Package
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Here's exactly what you get when you redesign with us:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Professional Audit & Report", details: "We analyze your current site, identify problems, and give you a detailed report with recommendations. You understand the 'why' before any work starts.", icon: ClipboardCheck },
              { title: "Modern, Professional Design", details: "Updated visuals that match today's standards. Clean, professional, trustworthy. Built for your specific business (we don't use templates).", icon: PenTool },
              { title: "Mobile Optimization", details: "Your site works beautifully on phones, tablets, and desktops. Mobile-first design means it's functional and fast everywhere.", icon: Smartphone },
              { title: "Conversion-Focused Structure", details: "Clear messaging, obvious CTAs, and a logical flow from visitor to lead. Every element serves a purpose.", icon: Target },
              { title: "Speed Optimization", details: "We compress images, optimize code, and use fast hosting. Your site loads in under 3 seconds (Google requirement, conversion necessity).", icon: Zap },
              { title: "SEO-Friendly Setup", details: "Proper heading structure, meta tags, image alt text, internal linking. Your redesigned site ranks better on Google than your old one.", icon: Search },
              { title: "Content Migration", details: "We move all your important content to the new site. No lost information, proper redirects, everything preserved.", icon: FileText },
              { title: "2 Weeks of Free Support", details: "After launch, we're here to help. Minor tweaks, training, questions—all included.", icon: Wrench },
              { title: "Analytics Setup", details: "We set up Google Analytics and Google Search Console so you can track performance. You'll see exactly what's working.", icon: BarChart3 },
              { title: "Training", details: "We show you how to update your site, manage content, respond to reviews. You're not stuck depending on us.", icon: GraduationCap }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative p-6 rounded-2xl bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl border border-[hsl(220,10%,18%)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
                
                <div className="relative flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[hsl(220,15%,15%)] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[hsl(142,76%,36%)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-[hsl(220,10%,55%)] leading-relaxed">{item.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 - Pricing */}
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
              Website Redesign Investment
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pricing depends on complexity. Here's what you can expect:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "Redesign",
                subtitle: "(Visual Update Only)",
                price: "$3,500",
                features: [
                  "Modern design update",
                  "Mobile optimization",
                  "Speed improvements",
                  "Keep current structure"
                ],
                bestFor: "Sites with good structure, just outdated look",
                featured: false
              },
              {
                name: "Redesign + New Pages",
                subtitle: "",
                price: "$4,500",
                features: [
                  "Modern design",
                  "1-3 new pages (services, benefits, case studies, etc.)",
                  "Mobile optimization",
                  "Speed improvements",
                  "SEO optimization"
                ],
                bestFor: "Sites that need improved messaging + modern look",
                featured: true
              },
              {
                name: "Complete Redesign",
                subtitle: "(Rebuild)",
                price: "$6,000",
                features: [
                  "Full redesign from scratch",
                  "Restructured navigation/flow",
                  "New pages + content strategy",
                  "Mobile-first build",
                  "SEO optimization",
                  "Speed optimization",
                  "Analytics setup"
                ],
                bestFor: "Outdated sites that need structural changes",
                featured: false
              }
            ].map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl backdrop-blur-xl border shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col ${
                  tier.featured 
                    ? 'bg-[hsl(220,15%,10%)]/90 border-primary/30 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.3)]' 
                    : 'bg-[hsl(220,15%,8%)]/80 border-[hsl(220,10%,18%)]'
                }`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
                
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="relative flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {tier.name}
                  </h3>
                  {tier.subtitle && (
                    <p className="text-sm text-muted-foreground mb-4">{tier.subtitle}</p>
                  )}
                  <p className="text-4xl font-bold text-foreground mb-6">{tier.price}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[hsl(142,76%,36%)] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-[hsl(220,10%,18%)]">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Best for:</span> {tier.bestFor}
                    </p>
                  </div>
                </div>
                
                <Button
                  className={`mt-6 w-full rounded-full font-semibold ${
                    tier.featured
                      ? 'bg-foreground text-background hover:bg-foreground/90'
                      : 'bg-[hsl(220,15%,15%)] text-foreground hover:bg-[hsl(220,15%,20%)]'
                  }`}
                >
                  Request a Quote
                </Button>
              </motion.div>
            ))}
          </div>

          {/* What's Included in All */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-8 rounded-2xl bg-[hsl(220,15%,8%)]/80 backdrop-blur-xl border border-[hsl(220,10%,18%)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
            
            <div className="relative">
              <h3 className="text-lg font-semibold text-foreground mb-4">What's Included in All Redesigns:</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  "Professional audit",
                  "Strategy & recommendations",
                  "Mobile optimization",
                  "Speed improvements",
                  "2 weeks free support",
                  "Analytics setup",
                  "Training on content management"
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-[hsl(142,76%,36%)]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 12 - Final CTA */}
      <section className="py-20 px-4 bg-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-background">
              See What Your Website Could Do Better
            </h2>
            <p className="text-lg text-background/70 mb-10 max-w-2xl mx-auto">
              Get a free audit. We'll show you exactly what's holding back your results and how to fix it. No obligation.
            </p>
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 text-lg px-10 py-6 rounded-full font-semibold shadow-lg"
            >
              Get Your Free Website Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="mt-6 text-sm text-background/60">
              Takes 20 minutes. You'll get a detailed report with 3 specific recommendations for improvement.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteRedesignService;
