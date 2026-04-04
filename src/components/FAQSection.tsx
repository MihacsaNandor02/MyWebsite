import { useState } from "react";
import { Reveal } from "./Reveal";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQGroup {
  label: string;
  items: FAQItem[];
}

const faqData: FAQGroup[] = [
  {
    label: "Getting Started",
    items: [
      {
        id: "how-long",
        question: "How long does it take to build my website?",
        answer: "The Essential plan typically takes 2-3 weeks from the moment we have everything we need from you. The Recommended plan is ready in 10 days. The main thing that affects timeline on our end is how quickly we receive your content — logo, photos, and a rough idea of what you want to say. We'll walk you through exactly what we need before we start."
      },
      {
        id: "what-to-provide",
        question: "What do I need to provide to get started?",
        answer: "Not as much as you'd think. Mainly your logo, any photos of your business or team, and a general idea of your services and prices. If you don't have professional photos we can work around that — we'll let you know what works best for your specific case during the strategy call."
      },
      {
        id: "changes-after-launch",
        question: "Can I make changes after the site is launched?",
        answer: "Yes — every plan includes one month of unlimited modifications after launch. If something needs adjusting, rewording, or moving around, just let us know and we'll handle it. After that first month, changes can be handled through our maintenance retainer or quoted individually depending on scope."
      },
      {
        id: "react-vs-wordpress",
        question: "Why does a custom React website cost more than a WordPress site?",
        answer: "WordPress sites are built on templates — they're faster to put together but you're always working within someone else's framework. What we build is written from scratch, which means it loads faster, behaves exactly how your business needs it to, and doesn't come with the security vulnerabilities and plugin bloat that WordPress sites accumulate over time. The difference shows up most clearly in Google rankings and in how the site actually performs under real traffic."
      },
      {
        id: "ownership",
        question: "Do I own the website after it's built?",
        answer: "Yes, fully. Once the project is complete and paid for, the code and everything on it belongs to you. We'll hand over all the files and access. The only ongoing cost is hosting, which we offer at €30-50 per month — but you're free to host it wherever you prefer."
      }
    ]
  },
  {
    label: "About SEO & Rankings",
    items: [
      {
        id: "seo-results-time",
        question: "How long until I see results from SEO?",
        answer: "Honestly, it depends on how competitive your market is and where you're starting from. Most clients start seeing movement in rankings within the first 30-45 days. Meaningful traffic usually follows in months two and three. That's why our Growth plan has a 90-day guarantee — it's a realistic timeframe for results, not an arbitrary number."
      },
      {
        id: "guarantee",
        question: "What exactly is the 90-day guarantee — what happens if you don't deliver?",
        answer: "If we don't get you into the top 5 Google results for the agreed keywords within 90 days, we keep working at no extra charge until we do. We're not going to disappear or make excuses — we just keep going. The guarantee applies to the keywords we agree on together at the start, so there are no surprises about what we're being held to."
      },
      {
        id: "new-site-for-seo",
        question: "Do I need a new website to start SEO?",
        answer: "Not necessarily. We can work with your existing site as long as it's technically sound enough to optimize. We'll take a look during the strategy call and give you an honest assessment. If there are issues that would hold back your rankings we'll tell you upfront rather than taking your money and delivering weak results."
      },
      {
        id: "monthly-seo-necessity",
        question: "Why do I need monthly SEO — can't you just do it once?",
        answer: "SEO isn't a one-time fix — it's more like maintaining a position than reaching one. Your competitors are actively working on their rankings every month, Google updates its algorithm regularly, and fresh content signals keep your site relevant. A one-time optimization will give you a bump, but without ongoing work that bump fades within a few months. The monthly retainer is what keeps the progress compounding rather than sliding back."
      }
    ]
  },
  {
    label: "Not Sure What You Need?",
    items: [
      {
        id: "website-vs-seo",
        question: "Do I need both a website and SEO, or just one?",
        answer: "It depends on where you are right now. If you don't have a website or your current one is hurting more than helping, that's the starting point — there's no point driving traffic to something that doesn't convert. If your site is solid but nobody's finding it, SEO is the move. If you want both, our Recommended website plan already includes the foundational SEO work, so you'd only need to add the monthly retainer for ongoing rankings."
      },
      {
        id: "location-romania-hungary",
        question: "You're based in Romania — can you work with businesses in Hungary too?",
        answer: "Yes, we work with businesses in both Romania and Hungary. Language isn't a barrier — we handle Hungarian-market projects regularly and understand the local business landscape in both countries. Everything is managed remotely so location doesn't affect the process at all."
      },
      {
        id: "freelancer-vs-agency",
        question: "How is this different from hiring a freelancer or a local agency?",
        answer: "A freelancer is usually strong in one area — design, or development, or SEO — rarely all three at once. A larger local agency often means your project gets handed off to a junior and the senior you met during the pitch disappears. We're a small focused team where the same people who scoped your project are the ones building it, and we combine design, development, and SEO into one coherent process rather than treating them as separate services that don't talk to each other."
      }
    ]
  },
  {
    label: "Pricing & Payments",
    items: [
      {
        id: "payment-terms",
        question: "How do I pay, and are there contracts?",
        answer: "Website projects are split into two payments — 50% upfront to begin, and 50% on delivery before we hand over the files. SEO retainers are billed monthly with no long-term contract — you can cancel with 30 days notice. We process payments via card through Stripe, or bank transfer if you prefer."
      },
      {
        id: "free-mockup-details",
        question: "What does the free mockup actually include?",
        answer: "It's a real visual design of your homepage — not a wireframe or a rough sketch. We design it in full based on your brand, your services, and what we know about your market. You'll see exactly what your site will look like before committing to anything. If you decide not to move forward after seeing it, there's no charge and no pressure."
      }
    ]
  }
];

const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>("guarantee");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Reveal width="100%">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              FAQ
            </div>
          </Reveal>
          <Reveal width="100%" delay={0.2}>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
              Got Questions? <span className="text-primary italic">We've Got Answers.</span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto font-medium">
              Everything you need to know before getting started.
            </p>
          </Reveal>
        </div>

        {/* FAQ Groups */}
        <div className="grid grid-cols-1 gap-12 items-start max-w-4xl mx-auto">
          {faqData.map((group, groupIndex) => (
            <Reveal key={groupIndex} width="100%" delay={0.1 * groupIndex}>
              <div className="flex flex-col gap-4 lg:mb-10">
                <span className="text-xs lg:text-lg font-bold uppercase tracking-widest text-muted-foreground/90 px-2">
                  {group.label}
                </span>
                <div className="bg-[#111317] border border-[hsl(220,10%,18%)] shadow-[0_2rem_4rem_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.05)] rounded-3xl backdrop-blur-xl relative overflow-hidden">
                  {/* Inner glow/gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />

                  <div className="relative z-10 flex flex-col">
                    {group.items.map((item, itemIndex) => {
                      const isOpen = openId === item.id;
                      return (
                        <div
                          key={item.id}
                          className={`${itemIndex !== 0 ? "border-t border-[hsl(220,10%,18%)]" : ""}`}
                        >
                          <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full text-left p-6 sm:p-7 flex justify-between items-start gap-4 hover:bg-white/[0.02] transition-colors"
                          >
                            <span className="text-lg lg:text-xl font-bold text-foreground/90 leading-tight">
                              {item.question}
                            </span>
                            <span className={`text-primary text-2xl font-bold leading-none transition-transform duration-300 transform ${isOpen ? "rotate-45" : "rotate-0"}`}>
                              +
                            </span>
                          </button>

                          <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                          >
                            <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-muted-foreground text-base sm:text-lg lg:text-xl leading-[1.8rem] lg:leading-[2rem] font-medium">
                              {item.answer}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal width="100%" delay={0.6}>
          <div className="mt-24 text-center">
            <p className="text-muted-foreground text-lg mb-6 font-medium">Still have questions?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <a
                href="#contact"
                className="group flex items-center gap-2 text-primary font-semibold text-lg transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book a Free Strategy Call
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <span className="hidden sm:block text-muted-foreground/30 text-xl font-light">|</span>

              <a
                href="https://wa.me/40768919621?text=Hi%2C%20I'm%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[#25D366] font-semibold text-lg transition-all"
              >
                Chat on WhatsApp
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQSection;
