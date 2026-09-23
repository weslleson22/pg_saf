"use client";

import React, { useEffect } from "react";
import { X, CheckCircle2, MessageSquare, Shield, Award } from "lucide-react";
import { Lawyer, getWhatsAppUrl } from "@/config/site";

interface LawyerModalProps {
  lawyer: Lawyer | null;
  onClose: () => void;
}

export default function LawyerModal({ lawyer, onClose }: LawyerModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (lawyer) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lawyer, onClose]);

  if (!lawyer) return null;

  const whatsappUrl = getWhatsAppUrl(lawyer.whatsappMessage);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Perfil de ${lawyer.name}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-xl bg-[#121822] border border-saf-gold/40 shadow-2xl shadow-black/80 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#1A2332]/80 hover:bg-saf-gold hover:text-[#0A0D12] text-saf-muted transition-colors border border-saf-border"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Coluna da Imagem Secundária de Atuação (foto2.jpg) */}
          <div className="md:col-span-5 relative bg-[#0D1219] overflow-hidden min-h-[300px] md:min-h-[440px]">
            <img
              src={lawyer.photo2}
              alt={`${lawyer.name} em atuação`}
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121822] via-transparent to-transparent md:hidden"></div>
            <div className="absolute bottom-3 left-3 right-3 p-2 rounded bg-[#0A0E14]/85 backdrop-blur-sm border border-saf-border/70 text-center">
              <span className="text-[10px] uppercase tracking-widest text-saf-gold font-semibold">
                Foto de Atuação / Consultoria
              </span>
            </div>
          </div>

          {/* Coluna de Informações e Credenciais */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded bg-saf-gold/15 border border-saf-gold/30 text-saf-gold text-[11px] font-semibold uppercase tracking-wider">
                  {lawyer.role}
                </span>
                <span className="text-xs text-saf-subtle font-mono">{lawyer.oab}</span>
              </div>

              <h3 className="font-serif text-2xl text-saf-light font-bold mb-1">
                {lawyer.name}
              </h3>

              <p className="text-xs sm:text-sm text-saf-gold font-medium mb-4">
                {lawyer.specialty}
              </p>

              <p className="text-xs sm:text-sm text-saf-muted leading-relaxed mb-6">
                {lawyer.description}
              </p>

              <div className="mb-6">
                <h4 className="text-[11px] uppercase tracking-wider text-saf-light font-semibold mb-3 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-saf-gold" />
                  Credenciais e Experiência Técnica:
                </h4>
                <ul className="space-y-2">
                  {lawyer.credentials.map((cred, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-saf-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-saf-gold shrink-0 mt-0.5" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-saf-border/60 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded bg-saf-gold hover:bg-saf-gold-light text-[#0A0D12] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-[#0A0D12]" />
                <span>Consultar com {lawyer.name.split(" ")[1]}</span>
              </a>

              <button
                onClick={onClose}
                className="px-4 py-3 rounded border border-saf-border hover:border-saf-gold/50 bg-[#161F2C] text-saf-muted hover:text-saf-light text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
