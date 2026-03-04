import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, TrendingUp } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#Pricing" },
  { label: "Case Studies", href: "#cases" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

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
  const headerY = useTransform(scrollY, [0, 50], [0, -10]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ y: headerY, fontSize: '1.25rem' }}
      className="sticky top-3 inset-x-0 z-50 w-[95%] max-w-5xl mx-auto"
    >
      <motion.nav
        style={{
          backgroundColor: headerBg,
          backdropFilter: headerBlur,
          border: headerBorder,
        }}
        className="flex items-center justify-between px-8 py-4 rounded-full shadow-[0_1.25rem_3.125rem_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)]"
      >
        {/* Logo - Flex Basis to balance with Action Area */}
        <div className="flex-1 lg:flex-none lg:w-[200px]">
          <a href="/" className="flex items-center gap-2 text-foreground font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">
            <TrendingUp className="w-6 h-6 text-primary" />
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Design Hug</span>
          </a>
        </div>

        {/* Desktop Navigation - Centered in the middle */}
        <ul className="hidden md:flex items-center justify-center gap-8 flex-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-all text-base lg:text-lg font-bold tracking-wide whitespace-nowrap"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Area - Balanced Flex Basis */}
        <div className="flex-1 lg:flex-none lg:w-[200px] flex items-center justify-end gap-4">
          <Button
            className="hidden md:flex rounded-full px-6 font-bold shadow-lg shadow-primary/20"
            size="sm"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact us
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 bg-background/98 backdrop-blur-2xl rounded-2xl border border-white/10 p-6 shadow-2xl"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors text-base font-semibold block py-3 border-b border-white/5 last:border-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
