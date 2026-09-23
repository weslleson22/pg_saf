"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Scale,
  ArrowUp,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="bg-[#090C11] text-saf-muted border-t border-saf-border pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-saf-border/60">
          
          {/* Coluna 1: Marca & Filosofia */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-10 h-10 rounded border border-saf-gold/40 bg-gradient-to-b from-[#1C2533] to-[#121822] flex items-center justify-center text-saf-gold font-serif font-bold text-lg tracking-wider">
                SAF
              </div>
              <div>
                <span className="font-serif text-lg tracking-wider text-saf-light font-semibold block">
                  SANTOS, ARAÚJO &amp; FONSECA
                </span>
                <span className="text-[10px] tracking-[0.25em] text-saf-gold uppercase font-medium">
                  Advocacia &amp; Consultoria Jurídica
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-saf-muted leading-relaxed mb-6">
              Sociedade de advogados pautada pelo rigor dogmático, atuação combativa em defesa das garantias
              constitucionais e atendimento artesanal de alta discrição.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#131A24] border border-saf-border text-[11px] text-saf-light">
              <ShieldCheck className="w-3.5 h-3.5 text-saf-gold" />
              <span>{SITE_CONFIG.oabRegistration}</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold text-saf-light uppercase tracking-[0.2em] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#inicio" className="hover:text-saf-gold transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-saf-gold transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-saf-gold transition-colors">
                  O Escritório
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-saf-gold transition-colors">
                  Corpo Jurídico
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-saf-gold transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Especialidades Principais */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold text-saf-light uppercase tracking-[0.2em] mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="text-saf-gold font-medium">
                • Direito Penal &amp; Econômico
              </li>
              <li>• Habeas Corpus (TJ / TRF / STJ / STF)</li>
              <li>• Flagrantes &amp; Custódia 24h</li>
              <li>• Tribunal do Júri Especializado</li>
              <li>• Direito Civil &amp; Contratual</li>
              <li>• Família &amp; Planejamento Sucessório</li>
              <li>• Empresarial &amp; Tributário</li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Plantão */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold text-saf-light uppercase tracking-[0.2em] mb-4">
              Atendimento &amp; Sede
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-saf-gold shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-saf-gold shrink-0" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-saf-gold shrink-0" />
                <span>Plantão Criminal: 24 Horas / 7 Dias</span>
              </li>
            </ul>

            <div className="mt-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#151D29] hover:bg-saf-gold hover:text-[#0A0D12] text-saf-gold border border-saf-gold/40 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Plantão 24h</span>
              </a>
            </div>
          </div>
        </div>

        {/* Nota Ética OAB e Direitos */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-saf-subtle text-center md:text-left">
          <p className="max-w-3xl leading-relaxed">
            <strong>Aviso de Conformidade Ética:</strong> Esta página possui caráter estritamente institucional e informativo,
            em plena observância ao Código de Ética e Disciplina da OAB e ao Provimento nº 205/2021 do Conselho Federal da OAB,
            não configurando promessa de resultado, captação indevida ou mercantilização da profissão jurídica.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 rounded bg-[#131A24] border border-saf-border hover:border-saf-gold text-saf-muted hover:text-saf-light transition-colors shrink-0"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-saf-gold" />
          </button>
        </div>

        <div className="pt-6 text-center text-[10px] text-saf-subtle/70">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
