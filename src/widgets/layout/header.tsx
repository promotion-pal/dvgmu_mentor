"use client";

import { appConfig } from "@/shared/app";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "О центре", href: "#about-center" },
    { label: "О программе", href: "#about" },
    { label: "Документы", href: "#documents" },
    { label: "Состав УМЦ", href: "#teachers" },
    { label: "Контакты", href: "#contacts" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a1a2e] text-[#c9a84c] rounded-full flex items-center justify-center text-lg sm:text-xl font-serif font-bold border-2 border-[#c9a84c]/30 group-hover:border-[#c9a84c] transition-all duration-300">
            ДВ
          </div>
          <div>
            <div className="text-base sm:text-lg font-serif font-bold text-[#1a1a2e] tracking-wide">
              {appConfig.company.shortName}
            </div>
            <div className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#c9a84c] font-sans">
              Medical University
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs xl:text-sm uppercase tracking-widest font-sans">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-[#1a1a2e] hover:text-[#c9a84c] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#c9a84c] after:transition-all hover:after:w-full cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={appConfig.contacts.phones[0].link}
            className="hidden md:flex items-center gap-2 text-xs sm:text-sm font-sans text-[#1a1a2e] hover:text-[#c9a84c] transition"
          >
            <span className="text-[#c9a84c]">✦</span>
            {appConfig.contacts.phones[0].label}
          </a>

          <button
            onClick={() => handleNavClick("#form")}
            className="bg-[#1a1a2e] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-sm font-sans uppercase tracking-widest hover:bg-[#c9a84c] hover:text-[#1a1a2e] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            Записаться
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#1a1a2e] hover:text-[#c9a84c] transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-[#1a1a2e] hover:text-[#c9a84c] transition font-sans text-sm uppercase tracking-widest py-2 border-b border-gray-100 text-left"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#form")}
            className="bg-[#c9a84c] text-[#1a1a2e] py-3 rounded-full font-sans text-sm uppercase tracking-widest hover:bg-[#d4b85c] transition mt-2"
          >
            Записаться
          </button>
          <div className="pt-2 space-y-2">
            {appConfig.contacts.phones.map((phone, i) => (
              <a
                key={i}
                href={phone.link}
                className="block text-sm text-[#1a1a2e] hover:text-[#c9a84c] transition font-sans"
              >
                {phone.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};
