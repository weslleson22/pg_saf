"use client";

import React from "react";
import { PhoneCall, ShieldAlert, ArrowRight } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";

export default function EmergencyBar() {
  const whatsappUrl = getWhatsAppUrl(SITE_CONFIG.emergencyWhatsAppMessage);

  return (
    <aside aria-label="Aviso de Plantão Criminal" className="bg-[#121924] border-b border-saf-border/80 text-xs py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-saf-light tracking-wide flex items-center gap-1.5 uppercase text-[11px]">
            <ShieldAlert className="w-3.5 h-3.5 text-saf-gold inline-block" />
            Plantão Criminal 24 Horas
          </span>
          <span className="hidden md:inline text-saf-subtle">•</span>
          <span className="hidden md:inline text-saf-muted">
            Assistência imediata para prisões em flagrante, audiência de custódia e mandados.
          </span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-saf-gold hover:text-saf-gold-light font-medium tracking-wide transition-colors group"
        >
          <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
          <span>Falar com Advogado de Plantão</span>
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </aside>
  );
}
