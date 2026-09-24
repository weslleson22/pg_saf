"use client";

import React from "react";
import {
  Building2,
  ShieldAlert,
  Users2,
  Scale,
  MessageCircle,
  ArrowDown,
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG, TRUST_BADGES, getWhatsAppUrl } from "@/config/site";

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl(
    "Olá, gostaria de falar com um advogado da SAF Advocacia e Consultoria."
  );

  const badgeIcons = [Building2, Scale, ShieldAlert, ShieldCheck];

  const quickAreas = [
    { label: "Direito Imobiliário & Negócios (Carro-Chefe)", href: "#especialidades", highlight: true },
    { label: "Direito Criminal / Penal Estratégico", href: "#especialidades", highlight: false },
    { label: "Direito de Família e Sucessões", href: "#especialidades", highlight: false },
    { label: "Direito Civil e Contratos", href: "#especialidades", highlight: false },
    { label: "Consultoria Empresarial e Tributária", href: "#especialidades", highlight: false },
  ];

  return (
    <section id="inicio" className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-saf-bg">
      {/* Background Sóbrio & Nobre */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1B2638] via-[#0F141C]/40 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#241E15]/30 to-transparent blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge Institucional - Autoridade em Direito Imobiliário */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saf-gold/30 bg-[#161F2C]/80 text-saf-gold text-xs font-semibold uppercase tracking-[0.2em] mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-saf-gold animate-pulse"></span>
            SAF Advocacia e Consultoria &bull; Referência em Direito Imobiliário
          </div>

          {/* Headline Clara: Destaque Direito Imobiliário & Patrimônio */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-saf-light font-bold tracking-tight leading-[1.15] mb-6">
            Segurança Jurídica, Regularização e Estratégia para o Seu{" "}
            <span className="gold-gradient-text italic font-normal">Patrimônio Imobiliário e Negócios</span>
          </h1>

          {/* Subtítulo apresentando a autoridade imobiliária e a equipe integrada */}
          <p className="text-base sm:text-lg md:text-xl text-saf-muted font-normal leading-relaxed mb-8 max-w-3xl mx-auto">
            Banca de advocacia de alto padrão especializada em <strong className="text-saf-light font-semibold">Direito Imobiliário</strong>,
            regularização fundiária, incorporações e contratos patrimoniais complexos, com corpo jurídico coeso atuando
            de forma integrada em <strong className="text-saf-light font-semibold">Direito Criminal, Família e Sucessões, Civil e Empresarial</strong>.
          </p>

          {/* Pílulas de Áreas Atendidas em Destaque com o Imobiliário em Evidência */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {quickAreas.map((area) => (
              <a
                key={area.label}
                href={area.href}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${
                  area.highlight
                    ? "bg-[#1B2535] border border-saf-gold/60 text-saf-gold shadow-sm shadow-saf-gold/10"
                    : "bg-[#131B26] border border-saf-border hover:border-saf-gold/50 text-saf-light/90 hover:text-saf-gold"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${area.highlight ? "bg-saf-gold" : "bg-saf-muted"}`}></span>
                <span>{area.label}</span>
              </a>
            ))}
          </div>

          {/* Ações / CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded border border-saf-gold bg-gradient-to-r from-[#9E7D53] via-[#C5A880] to-[#D4AF37] text-[#0A0D12] text-sm font-bold uppercase tracking-wider hover:brightness-110 active:scale-[0.99] transition-all shadow-lg shadow-black/40 group"
            >
              <MessageCircle className="w-5 h-5 text-[#0A0D12]" />
              <span>Fale com Nossos Especialistas</span>
            </a>

            <a
              href="#especialidades"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded border border-saf-border hover:border-saf-gold/50 bg-saf-surface/80 hover:bg-saf-surface text-saf-light hover:text-saf-gold text-sm font-medium tracking-wide transition-all"
            >
              <span>Conhecer Nossas Áreas</span>
              <ArrowDown className="w-4 h-4 text-saf-gold" />
            </a>
          </div>
        </div>

        {/* 4 Badges de Confiança Institucional */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-saf-border/60">
          {TRUST_BADGES.map((badge, idx) => {
            const Icon = badgeIcons[idx] || ShieldCheck;
            return (
              <div
                key={badge.title}
                className="p-5 rounded bg-gradient-to-b from-[#151D29] to-[#101621] border border-saf-border hover:border-saf-gold/40 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 rounded bg-[#1C2636] text-saf-gold group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4 text-saf-gold" />
                  </div>
                  <h3 className="font-serif text-sm font-semibold text-saf-light tracking-wide">
                    {badge.title}
                  </h3>
                </div>
                <p className="text-xs text-saf-muted leading-relaxed">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}