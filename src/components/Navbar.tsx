"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Menu, X, Shield, Phone } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "O Escritório", href: "#sobre" },
    { label: "Corpo Jurídico", href: "#equipe" },
    { label: "Perguntas Frequentes", href: "#faq" },
  ];

  const whatsappUrl = getWhatsAppUrl();

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-saf-bg/95 backdrop-blur-md border-b border-saf-border shadow-xl shadow-black/40 py-3"
          : "bg-saf-bg/80 backdrop-blur-sm border-b border-saf-border/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Monograma Institucional */}
          <a href="#inicio" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded border border-saf-gold/40 bg-gradient-to-b from-[#1C2533] to-[#121822] flex items-center justify-center text-saf-gold font-serif font-bold text-lg tracking-wider shadow-inner group-hover:border-saf-gold transition-colors">
              SAF
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg tracking-wider text-saf-light font-semibold group-hover:text-saf-gold transition-colors leading-tight">
                SANTOS, ARAÚJO &amp; FONSECA
              </span>
              <span className="text-[10px] tracking-[0.25em] text-saf-gold uppercase font-medium">
                Advocacia &amp; Consultoria
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-saf-muted hover:text-saf-gold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-saf-gold hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA WhatsApp Plantão */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded border border-saf-gold/40 hover:border-saf-gold bg-[#151D29] hover:bg-[#1A2433] text-saf-light hover:text-saf-gold-light text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Plantão 24h</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 text-emerald-400 bg-saf-surface border border-saf-border rounded"
              aria-label="WhatsApp Plantão"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-saf-muted hover:text-saf-light bg-saf-surface border border-saf-border rounded transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-saf-border pb-4 animate-in fade-in duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm text-saf-light hover:text-saf-gold hover:bg-saf-surface rounded transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-saf-border/60">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded bg-[#17212E] border border-saf-gold/50 text-saf-gold text-xs font-semibold uppercase tracking-wider hover:bg-saf-gold hover:text-saf-bg transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Falar no WhatsApp (Plantão 24h)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
