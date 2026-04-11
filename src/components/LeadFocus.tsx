"use client";

import { Search, MousePointerClick, PhoneCall } from "lucide-react";
import { Reveal } from "./Reveal";
import { useDictionary } from "@/components/DictionaryProvider";
import { t } from "@/lib/t";

const LeadFocus = () => {
  const dictionary = useDictionary();

  const leadFocusItems = t(dictionary, "lead_focus.items") as string[];
  const icons = [Search, MousePointerClick, PhoneCall];

  const items = Array.isArray(leadFocusItems) ? leadFocusItems.map((text, index) => ({
    icon: icons[index] || Search,
    text,
  })) : [];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <Reveal width="100%">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-foreground mb-16 tracking-tight">
            {t(dictionary, "lead_focus.title")}
          </h2>
        </Reveal>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={index} delay={0.2 + index * 0.15} width="100%" overflowVisible>
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-20 h-20 rounded-3xl bg-card border border-border/50 flex items-center justify-center mb-6 relative z-10 
                                  shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:border-primary/50 group-hover:shadow-[0_8px_30px_rgba(var(--primary-rgb),0.15)] transition-all duration-300 group-hover:-translate-y-1">
                      <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                      
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border border-border/50 flex items-center justify-center text-sm font-bold text-muted-foreground shadow-lg group-hover:text-primary group-hover:border-primary/40 transition-colors">
                        {index + 1}
                      </div>
                    </div>
                    
                    <p className="text-xl sm:text-2xl font-bold text-[hsl(220,10%,80%)] group-hover:text-foreground transition-colors max-w-[200px] leading-tight">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFocus;
