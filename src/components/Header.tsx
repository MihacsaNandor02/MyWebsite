import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, TrendingUp } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "#about" },
  { label: "Case Studies", href: "#cases" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
    >
      <nav className="flex items-center justify-between px-6 py-3 bg-[hsl(220,18%,13%)] backdrop-blur-xl rounded-full border border-[hsl(220,14%,20%)]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-foreground font-semibold text-lg">
          <TrendingUp className="w-5 h-5 text-foreground" />
          designfast
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[hsl(220,10%,65%)] hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button className="hidden md:flex rounded-full px-5" size="sm">
          Contact us
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 bg-secondary/95 backdrop-blur-xl rounded-xl border border-border p-4"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button className="w-full" size="sm">
                Contact us
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
