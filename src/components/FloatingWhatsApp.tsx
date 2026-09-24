"use client";

import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = getWhatsAppUrl(
    "Olá, gostaria de falar com um advogado da SAF Advocacia e Consultoria."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip elegante */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#111722]/95 border border-saf-gold/40 text-xs text-saf-light shadow-xl shadow-black/60 animate-in fade-in slide-in-from-right-3 duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <div>
            <p className="font-semibold text-saf-gold text-[11px] uppercase tracking-wider">
              SAF Advocacia e Consultoria
            </p>
            <p className="text-saf-muted text-[11px]">
              Fale agora com um advogado
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="ml-2 text-saf-subtle hover:text-saf-light text-xs"
            aria-label="Fechar aviso"
          >
            ×
          </button>
        </div>
      )}

      {/* Botão Flutuante */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com SAF Advocacia e Consultoria"
        className="relative group p-4 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white shadow-2xl shadow-emerald-950/70 border border-emerald-400/40 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center"
      >
        {/* Anel de Pulso Sutil */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-pulse pointer-events-none"></span>

        <MessageSquare className="w-6 h-6 fill-white text-emerald-700 relative z-10" />
      </a>
    </div>
  );
}
