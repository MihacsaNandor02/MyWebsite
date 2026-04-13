"use client";

import { useDictionary } from "@/components/DictionaryProvider";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const dictionary = useDictionary();
  const params = useParams();
  const locale = (params?.locale as string) || "ro";

  return (
    <footer className="py-12 px-4 border-t border-border bg-card/30" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <img src="/portfolio/Future Builds - Written-Transparent-Cropped.png" alt="Future Builds — Agenție Web Design Târgu Mureș" className="h-8 md:h-10 w-auto object-contain" />
          <p className="text-sm text-muted-foreground mt-2">{dictionary.footer.tagline}</p>
        </div>
        <div className="flex gap-x-6 gap-y-3 text-sm text-muted-foreground flex-wrap justify-center">
          <Link href={`/${locale}/`} className="hover:text-primary transition-colors">{dictionary.footer.link_home}</Link>
          <Link href={`/${locale}/creare-site-web-targu-mures/`} className="hover:text-primary transition-colors">{locale === 'ro' ? 'Creare Site Web' : 'Web Design'}</Link>
          <Link href={`/${locale}/optimizare-seo-targu-mures/`} className="hover:text-primary transition-colors">{locale === 'ro' ? 'Optimizare SEO' : 'SEO Services'}</Link>
          <Link href={`/${locale}/redesign-website-targu-mures/`} className="hover:text-primary transition-colors">{locale === 'ro' ? 'Redesign Website' : 'Website Redesign'}</Link>
          <Link href={`/${locale}/mentenanta-website-targu-mures/`} className="hover:text-primary transition-colors">{locale === 'ro' ? 'Mentenanță' : 'Maintenance'}</Link>
          <Link href={`/${locale}/#portfolio`} className="hover:text-primary transition-colors">{dictionary.footer.link_portfolio}</Link>
          <Link href={`/${locale}/#pricing`} className="hover:text-primary transition-colors">{dictionary.footer.link_pricing}</Link>
          <Link href={`/${locale}/#contact`} className="hover:text-primary transition-colors">{dictionary.footer.link_contact}</Link>
          <Link href={`/${locale}/privacy-policy`} className="hover:text-primary transition-colors">{dictionary.footer.link_privacy}</Link>
          <Link href={`/${locale}/terms-of-service`} className="hover:text-primary transition-colors">{dictionary.footer.link_terms}</Link>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          {/* Visible NAP for Local SEO */}
          <address className="not-italic text-xs text-muted-foreground/60 text-center md:text-right leading-relaxed">
            <span className="font-medium text-muted-foreground/80">Future Builds</span><br />
            Bulevardul 1 Decembrie 1918 213, Târgu Mureș 540000<br />
            <a href="tel:+40768919621" className="hover:text-primary transition-colors">+40 768 919 621</a>
            {" · "}
            <a href="mailto:contact@futurebuilds.ro" className="hover:text-primary transition-colors">contact@futurebuilds.ro</a>
          </address>
          <a
            href="https://share.google/NDhbCtHrpMYGIuXLh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary/60 hover:text-primary transition-colors mt-1"
          >
            📍 {locale === 'ro' ? 'Vezi pe Google Maps' : 'View on Google Maps'}
          </a>
          <p className="text-xs text-muted-foreground/50 mt-1">{dictionary.footer.copyright.replace('{{year}}', new Date().getFullYear().toString())}</p>
        </div>
      </div>
    </footer>
  );
}
