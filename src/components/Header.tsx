"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useDictionary } from "@/components/DictionaryProvider";
import { t } from "@/lib/t";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";

const navLinks = [
  { label: "nav.solutions", href: "#solutions" },
  { label: "nav.seo_design", href: "#seo" },
  { label: "nav.portfolio", href: "#portfolio" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const dictionary = useDictionary();
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const locale = params?.locale as string || "ro";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If we're on the home page, just scroll
    if (pathname === `/${locale}/` || pathname === `/${locale}`) {
      if (href.startsWith("#")) {
        e.preventDefault();
        const element = document.getElementById(href.substring(1));
        element?.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    } else {
      // If we're on a service page, use standard navigation back to home + hash
      // The browser will handle the scroll to hash on load
      setMobileMenuOpen(false);
    }
  };

  const handleCTAClick = () => {
    if (pathname === `/${locale}/` || pathname === `/${locale}`) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/${locale}/#contact`);
    }
    setMobileMenuOpen(false);
  };

  // Dynamic header effects based on scroll
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(10, 10, 10, 0.4)", "rgba(10, 10, 10, 0.8)"]
  );
  const headerBlur = useTransform(scrollY, [0, 50], ["blur(12px)", "blur(20px)"]);
  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ["1px solid rgba(255, 255, 255, 0.1)", "1px solid rgba(255, 255, 255, 0.15)"]
  );

  return (
    <motion.header
      style={{ fontSize: '1.25rem' }}
      className="sticky top-3 inset-x-0 z-50 w-[95%] max-w-7xl mx-auto transition-transform duration-300 "
      role="banner"
    >
      <motion.nav
        style={{
          backgroundColor: headerBg,
          backdropFilter: headerBlur,
          border: headerBorder,
        }}
        className="flex items-center justify-between px-6 lg:px-10 py-2 mb-5 sm:py-3 lg:py-4 rounded-full shadow-[0_1.25rem_3.125rem_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)]"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo - Flex Basis to balance with Action Area */}
        <div className="flex-1 lg:flex-none lg:w-[200px] xl:w-[230px] ">
          <Link href={`/${locale}/`} className="flex items-center hover:opacity-80 transition-opacity" aria-label="Future Builds Home">
            <img src="/portfolio/Future Builds - Written-Transparent-Cropped.png" alt="Future Builds — Agenție Web Design Târgu Mureș" className="h-6 max-[400px]:h-5 sm:h-7 md:h-7 2xl:h-7.25 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation - Centered in the middle */}
        <ul className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-1 px-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={`/${locale}/${link.href}`}
                className="text-muted-foreground hover:text-primary transition-all text-base lg:text-lg font-bold tracking-wide whitespace-nowrap"
                onClick={(e: any) => handleNavClick(e, link.href)}
              >
                {t(dictionary, link.label)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Area - Balanced Flex Basis */}
        <div className="flex-1 lg:flex-none lg:w-auto xl:min-w-[360px] flex items-center justify-end gap-3 sm:gap-6">
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>

          <Button
            className="hidden lg:flex rounded-full px-6 py-5 lg:py-6 font-bold text-[1.1rem] shadow-lg shadow-primary/20"
            size="sm"
            onClick={handleCTAClick}
          >
            {t(dictionary, 'nav.cta')}
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mt-2 bg-background/98 backdrop-blur-2xl rounded-2xl border border-white/10 p-6 shadow-2xl"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={`/${locale}/${link.href}`}
                  className="text-foreground/80 hover:text-primary transition-colors text-base font-semibold block py-3 border-b border-white/5 last:border-0"
                  onClick={(e: any) => handleNavClick(e, link.href)}
                >
                  {t(dictionary, link.label)}
                </Link>
              </li>
            ))}
            <li className="pt-4 mt-2 border-t border-white/10">
              <Button
                className="w-full rounded-full py-6 font-bold text-lg shadow-xl shadow-primary/20"
                onClick={handleCTAClick}
              >
                {t(dictionary, 'nav.cta')}
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
