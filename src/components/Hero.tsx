"use client";

import React from "react";
import {
  Users2,
  Clock,
  Scale,
  ShieldCheck,
  MessageCircle,
  ArrowDown,
  Briefcase,
  FileText,
  ShieldAlert,
  ChevronRight,
} from "lucide-react";
import { SITE_CONFIG, TRUST_BADGES, getWhatsAppUrl } from "@/config/site";

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl(
    "Olá! Gostaria de consultar a equipe de advogados da SAF Advocacia sobre um caso jurídico."
  );

  const badgeIcons = [Users2, Clock, Scale, ShieldCheck];

  const quickAreas = [
    { label: "Direito Criminal & Plantão 24h", href: "#especialidades" },
    { label: "Direito Civil & Contratos", href: "#especialidades" },
    { label: "Família & Sucessões", href: "#especialidades" },
    { label: "Empresarial & Tributário", href: "#especialidades" },
    { label: "Trabalhista Corporativo", href: "#especialidades" },
  ];

  return (
    <section id="inicio" className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-saf-bg">
      {/* Background Sóbrio & Nobre (Sem clichês de IA) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1B2638] via-[#0F141C]/40 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#241E15]/30 to-transparent blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge Institucional Multidisciplinar */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saf-gold/30 bg-[#161F2C]/80 text-saf-gold text-xs font-semibold uppercase tracking-[0.2em] mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-saf-gold"></span>
            Banca Multidisciplinar de Alto Padrão &amp; Defesa Estratégica
          </div>

          {/* Headline Clara: Todas as Áreas + Rigor Técnico */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-saf-light font-bold tracking-tight leading-[1.15] mb-6">
            Excelência Jurídica &amp; Defesa Estratégica para Seus{" "}
            <span className="gold-gradient-text italic font-normal">Direitos, Família &amp; Negócios</span>
          </h1>

          {/* Subtítulo esclarecendo que a equipe atende TODAS as áreas */}
          <p className="text-base sm:text-lg md:text-xl text-saf-muted font-normal leading-relaxed mb-8 max-w-3xl mx-auto">
            Uma estrutura completa de advogados especialistas preparados para prestar assessoria jurídica integral
            a pessoas físicas e empresas. Atuamos de forma consultiva, preventiva e no contencioso de alta complexidade
            em <strong className="text-saf-light font-semibold">todas as áreas do Direito</strong>, com{" "}
            <strong className="text-saf-light font-semibold">Plantão Criminal Permanente 24 Horas</strong> para
            urgências e flagrantes.
          </p>

          {/* Pílulas de Áreas Atendidas em Destaque */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {quickAreas.map((area) => (
              <a
                key={area.label}
                href={area.href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#131B26] border border-saf-border hover:border-saf-gold/50 text-[11px] font-medium text-saf-light/90 hover:text-saf-gold transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-saf-gold"></span>
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

        {/* 4 Badges de Confiança Institucional Multidisciplinar */}
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
