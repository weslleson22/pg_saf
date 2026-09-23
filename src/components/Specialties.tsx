"use client";

import React from "react";
import {
  ShieldAlert,
  FileCheck2,
  Users2,
  Landmark,
  Briefcase,
  CheckCircle2,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { PRACTICE_AREAS, getWhatsAppUrl } from "@/config/site";

export default function Specialties() {
  const mainArea = PRACTICE_AREAS.find((area) => area.isMain);
  const secondaryAreas = PRACTICE_AREAS.filter((area) => !area.isMain);

  const getAreaIcon = (id: string) => {
    switch (id) {
      case "criminal":
        return ShieldAlert;
      case "civil":
        return FileCheck2;
      case "familia":
        return Users2;
      case "empresarial":
        return Landmark;
      case "trabalhista":
        return Briefcase;
      default:
        return FileCheck2;
    }
  };

  return (
    <section id="especialidades" className="py-20 md:py-28 bg-[#0B0F15] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-saf-gold mb-3">
            Atuação Jurídica Estratégica
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-saf-light font-bold tracking-tight mb-4">
            Áreas de Excelência e Dedicação Técnica
          </h2>
          <p className="text-saf-muted text-sm sm:text-base leading-relaxed">
            Com especialização destacada no contencioso criminal de urgência, nossa banca oferece suporte
            jurídico integral em áreas determinantes para a segurança e patrimônio de pessoas físicas e jurídicas.
          </p>
        </div>

        {/* Card Destaque: DIREITO CRIMINAL / PENAL ECONÔMICO */}
        {mainArea && (
          <div className="mb-14 rounded-xl border-2 border-saf-gold/40 bg-gradient-to-br from-[#182232] via-[#121924] to-[#0E131A] p-6 sm:p-10 shadow-2xl shadow-black/60 relative overflow-hidden group">
            {/* Efeito sutil de iluminação */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-saf-gold/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-saf-border/80">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-saf-gold/15 border border-saf-gold/40 text-saf-gold-light text-xs font-bold uppercase tracking-wider mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  {mainArea.badge}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-saf-light font-bold mb-3 tracking-wide">
                  {mainArea.title}
                </h3>
                <p className="text-saf-muted text-sm sm:text-base leading-relaxed">
                  {mainArea.description}
                </p>
              </div>

              {/* Botão de Ação Imediata do Plantão */}
              <div className="flex-shrink-0">
                <a
                  href={getWhatsAppUrl(mainArea.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded bg-saf-gold hover:bg-saf-gold-light text-[#0A0D12] font-semibold text-sm uppercase tracking-wider transition-all shadow-md group/btn"
                >
                  <ShieldAlert className="w-5 h-5 text-[#0A0D12]" />
                  <span>{mainArea.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Checklist de Serviços Penais de Alta Complexidade */}
            <div className="mt-8">
              <h4 className="text-xs uppercase tracking-wider text-saf-gold font-semibold mb-4">
                Atuação Abrangente na Defesa Penal:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {mainArea.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 p-3 rounded bg-[#101722]/80 border border-saf-border/70 hover:border-saf-gold/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-saf-gold shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-saf-light/90 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Grid das Demais Áreas Integradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryAreas.map((area) => {
            const Icon = getAreaIcon(area.id);
            const whatsappUrl = getWhatsAppUrl(area.whatsappMessage);

            return (
              <div
                key={area.id}
                className="rounded-lg bg-saf-card border border-saf-border hover:border-saf-gold/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 saf-card-glow group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded bg-[#1A2332] border border-saf-border flex items-center justify-center text-saf-gold group-hover:border-saf-gold/50 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-saf-gold/80 px-2.5 py-1 rounded bg-[#161E2A] border border-saf-border/60">
                      Consultoria &amp; Litígio
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-saf-light font-bold mb-2.5 tracking-wide">
                    {area.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-saf-gold/90 font-medium mb-3 italic">
                    {area.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-saf-muted leading-relaxed mb-6">
                    {area.description}
                  </p>

                  <ul className="space-y-2 mb-6 border-t border-saf-border/50 pt-4">
                    {area.items.map((service) => (
                      <li key={service} className="flex items-center gap-2 text-xs text-saf-light/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-saf-gold shrink-0"></span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-saf-border/50">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded bg-[#161F2C] hover:bg-[#1C2738] border border-saf-border hover:border-saf-gold text-saf-light hover:text-saf-gold-light text-xs font-semibold uppercase tracking-wider transition-all group/link"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-3.5 h-3.5 text-saf-gold" />
                      Tirar dúvidas sobre esta área
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
