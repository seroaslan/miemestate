"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Projeler", href: "#projeler" },
  { name: "Faaliyet Alanları", href: "#faaliyet" },
  { name: "Kurumsal", href: "#kurumsal" },
  { name: "Blog", href: "#blog" },
  { name: "İletişim", href: "#iletisim" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <img 
              src="/miem-logo-wide.svg"
              alt="MİEM Yapı Logo"
              className={`h-9 md:h-10 w-auto transition-all duration-300 ${!isScrolled ? 'brightness-0 invert drop-shadow-md' : ''}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-brand-blue transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-white/90 drop-shadow-md'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full px-6">
              Teklif Al
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden z-50 transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100 py-6 px-4 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-800 hover:text-brand-blue transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white w-full mt-4 rounded-full">
              Teklif Al
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
