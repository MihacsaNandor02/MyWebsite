import { useState } from "react";
import { Reveal } from "./Reveal";
import { useTranslation } from "react-i18next";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQGroup {
  label: string;
  items: FAQItem[];
}

const FAQSection = () => {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<string | null>("guarantee");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const faqData: FAQGroup[] = [
    {
      label: t("faq.groups.getting_started"),
      items: [
        {
          id: "how-long",
          question: t("faq.items.how_long_q"),
          answer: t("faq.items.how_long_a")
        },
        {
          id: "what-to-provide",
          question: t("faq.items.what_to_provide_q"),
          answer: t("faq.items.what_to_provide_a")
        },
        {
          id: "changes-after-launch",
          question: t("faq.items.changes_after_launch_q"),
          answer: t("faq.items.changes_after_launch_a")
        },
        {
          id: "react-vs-wordpress",
          question: t("faq.items.react_vs_wordpress_q"),
          answer: t("faq.items.react_vs_wordpress_a")
        },
        {
          id: "ownership",
          question: t("faq.items.ownership_q"),
          answer: t("faq.items.ownership_a")
        }
      ]
    },
    {
      label: t("faq.groups.seo_rankings"),
      items: [
        {
          id: "seo-results-time",
          question: t("faq.items.seo_results_time_q"),
          answer: t("faq.items.seo_results_time_a")
        },
        {
          id: "guarantee",
          question: t("faq.items.guarantee_q"),
          answer: t("faq.items.guarantee_a")
        },
        {
          id: "new-site-for-seo",
          question: t("faq.items.new_site_for_seo_q"),
          answer: t("faq.items.new_site_for_seo_a")
        },
        {
          id: "monthly-seo-necessity",
          question: t("faq.items.monthly_seo_necessity_q"),
          answer: t("faq.items.monthly_seo_necessity_a")
        }
      ]
    },
    {
      label: t("faq.groups.not_sure"),
      items: [
        {
          id: "website-vs-seo",
          question: t("faq.items.website_vs_seo_q"),
          answer: t("faq.items.website_vs_seo_a")
        },
        {
          id: "location-romania-hungary",
          question: t("faq.items.location_romania_hungary_q"),
          answer: t("faq.items.location_romania_hungary_a")
        },
        {
          id: "freelancer-vs-agency",
          question: t("faq.items.freelancer_vs_agency_q"),
          answer: t("faq.items.freelancer_vs_agency_a")
        }
      ]
    },
    {
      label: t("faq.groups.pricing_payments"),
      items: [
        {
          id: "payment-terms",
          question: t("faq.items.payment_terms_q"),
          answer: t("faq.items.payment_terms_a")
        },
        {
          id: "free-mockup-details",
          question: t("faq.items.free_mockup_details_q"),
          answer: t("faq.items.free_mockup_details_a")
        }
      ]
    }
  ];

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
              {t("faq.title_main")} <span className="text-primary italic">{t("faq.title_highlight")}</span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto font-medium">
              {t("faq.subtitle")}
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
            <p className="text-muted-foreground text-lg mb-6 font-medium">{t("faq.still_questions")}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <a
                href="#contact"
                className="group flex items-center gap-2 text-primary font-semibold text-lg transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t("faq.cta_call")}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <span className="hidden sm:block text-muted-foreground/30 text-xl font-light">|</span>

              <a
                href="https://wa.me/40768919621?text=Hi%2C%20I'm%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[#25D366] font-semibold text-lg transition-all"
              >
                {t("faq.cta_whatsapp")}
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
