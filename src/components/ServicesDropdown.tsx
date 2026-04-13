"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight, Laptop, TrendingUp, Settings, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";

interface ServiceLinkProps {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

const ServiceLink = ({ title, href, icon }: ServiceLinkProps) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          {icon && <div className="text-primary/70 group-hover:text-primary transition-colors">{icon}</div>}
          <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">
            {title}
          </span>
        </div>
        <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
      </Link>
    </NavigationMenuLink>
  </li>
);

export function ServicesDropdownItem({ dictionary, locale }: { dictionary: any, locale: string }) {
  const t = dictionary.nav.services_dropdown;

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-muted-foreground hover:text-primary transition-all text-base lg:text-lg font-bold tracking-wide whitespace-nowrap bg-transparent">
        {dictionary.nav.services}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[850px] p-8 grid grid-cols-[1fr_1fr_1fr_300px] gap-8 bg-[#050505] rounded-2xl overflow-hidden shadow-2xl">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-foreground font-bold text-lg flex items-center gap-2">
                <Laptop size={18} className="text-primary" />
                {t.col1_title}
              </h3>
              <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                {t.col1_desc}
              </p>
            </div>
            <ul className="flex flex-col gap-1">
              <ServiceLink title={t.links.creare_site} href={`/${locale}/creare-site-web-targu-mures`} />
              <ServiceLink title={t.links.magazin_online} href={`/${locale}/#contact`} />
              <ServiceLink title={t.links.landing_pages} href={`/${locale}/#contact`} />
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-foreground font-bold text-lg flex items-center gap-2">
                <TrendingUp size={18} className="text-primary" />
                {t.col2_title}
              </h3>
              <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                {t.col2_desc}
              </p>
            </div>
            <ul className="flex flex-col gap-1">
              <ServiceLink title={t.links.seo_local} href={`/${locale}/optimizare-seo-targu-mures`} />
              <ServiceLink title={t.links.seo_growth} href={`/${locale}/optimizare-seo-targu-mures`} />
              <ServiceLink title={t.links.optimizare_conversii} href={`/${locale}/#solutions`} />
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-foreground font-bold text-lg flex items-center gap-2">
                <Settings size={18} className="text-primary" />
                {t.col3_title}
              </h3>
              <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                {t.col3_desc}
              </p>
            </div>
            <ul className="flex flex-col gap-1">
              <ServiceLink title={t.links.redesign} href={`/${locale}/redesign-website-targu-mures`} />
              <ServiceLink title={t.links.mentenanta} href={`/${locale}/mentenanta-website-targu-mures`} />
            </ul>
          </div>

          {/* CTA Card */}
          <div className="relative group/card h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-2xl border border-white/10 group-hover/card:border-primary/30 transition-colors duration-500" />
            <div className="relative p-6 flex flex-col h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5">
              <div className="mb-4 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <MessageCircle size={20} />
              </div>
              <h4 className="text-foreground font-bold text-base leading-tight mb-2">
                {t.card_title}
              </h4>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {t.card_desc}
              </p>
              <Link
                href={`/${locale}/#contact`}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-full text-sm font-bold hover:scale-[1.02] active:scale-95 transition-all w-full group/btn"
              >
                {t.card_cta}
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}


// Mobile Accordion Component
export function ServicesAccordion({ dictionary, locale, closeMenu }: { dictionary: any, locale: string, closeMenu: () => void }) {
  const t = dictionary.nav.services_dropdown;
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between py-3 text-foreground/80 hover:text-primary transition-colors text-base font-semibold border-b border-white/5"
      >
        <span>{dictionary.nav.services}</span>
        <ChevronRight className={cn("transition-transform duration-200", isOpen && "rotate-90")} size={20} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="flex flex-col gap-6 py-4 pl-4 border-l border-white/10 mt-2"
        >
          {/* Col 1 */}
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-wider font-bold mb-3">{t.col1_title}</p>
            <div className="flex flex-col gap-3">
              <Link href={`/${locale}/creare-site-web-targu-mures`} onClick={closeMenu} className="text-foreground/90 font-medium">{t.links.creare_site}</Link>
              <Link href={`/${locale}/#contact`} onClick={closeMenu} className="text-foreground/90 font-medium">{t.links.magazin_online}</Link>
              <Link href={`/${locale}/#contact`} onClick={closeMenu} className="text-foreground/90 font-medium">{t.links.landing_pages}</Link>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-wider font-bold mb-3">{t.col2_title}</p>
            <div className="flex flex-col gap-3">
              <Link href={`/${locale}/optimizare-seo-targu-mures`} onClick={closeMenu} className="text-foreground/90 font-medium">{t.links.seo_local}</Link>
              <Link href={`/${locale}/#contact`} onClick={closeMenu} className="text-foreground/90 font-medium">{t.links.seo_growth}</Link>
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-wider font-bold mb-3">{t.col3_title}</p>
            <div className="flex flex-col gap-3">
              <Link href={`/${locale}/redesign-website-targu-mures`} onClick={closeMenu} className="text-foreground/90 font-medium">{t.links.redesign}</Link>
              <Link href={`/${locale}/mentenanta-website-targu-mures`} onClick={closeMenu} className="text-foreground/90 font-medium">{t.links.mentenanta}</Link>
            </div>
          </div>

          {/* Card Mobile */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-foreground font-bold mb-1">{t.card_title}</p>
            <p className="text-muted-foreground text-sm mb-4">{t.card_desc}</p>
            <Link
              href={`/${locale}/#contact`}
              onClick={closeMenu}
              className="inline-flex items-center gap-2 text-primary font-bold text-sm"
            >
              {t.card_cta} <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
