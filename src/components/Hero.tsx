"use client";

import React from "react";
import { ShieldCheck, Clock, Scale, Building2, MessageCircle, ArrowDown } from "lucide-react";
import { SITE_CONFIG, TRUST_BADGES, getWhatsAppUrl } from "@/config/site";

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl(
    "Olá! Estou visitando o site da SAF Advocacia e necessito de atendimento com um advogado criminalista."
  );

  const badgeIcons = [ShieldCheck, Clock, Scale, Building2];

  return (
    <section id="inicio" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-saf-bg">
      {/* Background Sóbrio & Nobre (Sem clichês de IA) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1B2638] via-[#0F141C]/40 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#241E15]/30 to-transparent blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge Institucional */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-saf-gold/30 bg-[#161F2C]/80 text-saf-gold text-xs font-semibold uppercase tracking-[0.2em] mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-saf-gold"></span>
            Defesa Penal Estratégica &amp; Consultoria Jurídica de Alto Padrão
          </div>

          {/* Headline de Alto Peso Jurídico */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-saf-light font-bold tracking-tight leading-[1.15] mb-6">
            Rigor Técnico e Defesa Intransigente da Sua{" "}
            <span className="gold-gradient-text italic font-normal">Liberdade &amp; Direitos</span>
          </h1>

          {/* Subtítulo focado em agilidade e sigilo */}
          <p className="text-base sm:text-lg md:text-xl text-saf-muted font-normal leading-relaxed mb-10 max-w-3xl mx-auto">
            Atuação técnica, célere e combativa em momentos decisivos. Plantão criminal 24 horas para flagrantes,
            audiências de custódia, inquéritos e recursos perante os Tribunais de Justiça, TRFs, STJ e STF.
            <strong className="text-saf-light font-medium block mt-2">
              Absoluto sigilo profissional e acompanhamento artesanal.
            </strong>
          </p>

          {/* Ações / CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded border border-saf-gold bg-gradient-to-r from-[#9E7D53] via-[#C5A880] to-[#D4AF37] text-[#0A0D12] text-sm font-bold uppercase tracking-wider hover:brightness-110 active:scale-[0.99] transition-all shadow-lg shadow-black/40 group"
            >
              <MessageCircle className="w-5 h-5 text-[#0A0D12]" />
              <span>Fale com um Especialista Agora</span>
            </a>

            <a
              href="#especialidades"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded border border-saf-border hover:border-saf-gold/50 bg-saf-surface/80 hover:bg-saf-surface text-saf-light hover:text-saf-gold text-sm font-medium tracking-wide transition-all"
            >
              <span>Conhecer Especialidades</span>
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
