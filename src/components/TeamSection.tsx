"use client";

import React, { useState } from "react";
import { MessageSquare, ArrowUpRight, Eye, RefreshCw } from "lucide-react";
import { LAWYERS, Lawyer, getWhatsAppUrl } from "@/config/site";
import LawyerModal from "./LawyerModal";

export default function TeamSection() {
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null);
  // Controla individualmente cards que o usuário optou por alternar a foto
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const togglePhoto = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="equipe" className="py-20 md:py-28 bg-[#0B0F15] relative border-t border-saf-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-saf-gold mb-3">
            Corpo Jurídico de Excelência
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-saf-light font-bold tracking-tight mb-4">
            Sócios e Advogados Especialistas
          </h2>
          <p className="text-saf-muted text-sm sm:text-base leading-relaxed">
            Uma equipe altamente qualificada, com pós-graduações, sólida experiência prática e histórico
            combativo na defesa intransigente de direitos em instâncias ordinárias e Tribunais Superiores.
          </p>
        </div>

        {/* Grid de Advogados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {LAWYERS.map((lawyer) => {
            const isFlipped = !!flippedCards[lawyer.id];
            const currentPhoto = isFlipped ? lawyer.photo2 : lawyer.photo1;
            const whatsappUrl = getWhatsAppUrl(lawyer.whatsappMessage);

            return (
              <div
                key={lawyer.id}
                className="rounded-xl bg-saf-card border border-saf-border hover:border-saf-gold/50 flex flex-col justify-between overflow-hidden transition-all duration-300 saf-card-glow group"
              >
                {/* Container da Imagem com Alternância foto1 / foto2 */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0A0E14]">
                  <img
                    src={currentPhoto}
                    alt={`${lawyer.name} - ${lawyer.role}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradiente escuro sutil sobre a foto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131923] via-transparent to-transparent opacity-90"></div>

                  {/* Badges superiores */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-[#0A0D12]/80 backdrop-blur-sm border border-saf-gold/30 text-saf-gold text-[10px] font-semibold uppercase tracking-wider">
                      {lawyer.role}
                    </span>

                    {/* Botão para alternar entre foto1 e foto2 */}
                    <button
                      onClick={(e) => togglePhoto(lawyer.id, e)}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#0A0D12]/80 backdrop-blur-sm border border-saf-border hover:border-saf-gold text-saf-light text-[10px] font-medium transition-colors"
                      title="Alternar entre foto de perfil e foto de atuação"
                    >
                      <RefreshCw className="w-3 h-3 text-saf-gold" />
                      <span>{isFlipped ? "Foto 1" : "Foto 2"}</span>
                    </button>
                  </div>

                  {/* Detalhes na base da foto */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] font-mono text-saf-gold/90 uppercase tracking-widest block mb-0.5">
                      {lawyer.oab}
                    </span>
                    <h3 className="font-serif text-lg text-saf-light font-bold leading-snug">
                      {lawyer.name}
                    </h3>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold text-saf-gold mb-2.5 line-clamp-1">
                      {lawyer.specialty}
                    </p>
                    <p className="text-xs text-saf-muted leading-relaxed line-clamp-3 mb-4">
                      {lawyer.description}
                    </p>
                  </div>

                  {/* Ações do Card */}
                  <div className="pt-3 border-t border-saf-border/60 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedLawyer(lawyer)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded bg-[#161F2C] hover:bg-[#1E293B] border border-saf-border hover:border-saf-gold/50 text-saf-light text-xs font-medium transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-saf-gold" />
                      <span>Ver Perfil</span>
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded bg-[#161F2C] hover:bg-saf-gold hover:text-[#0A0D12] text-emerald-400 border border-saf-border hover:border-saf-gold transition-colors"
                      aria-label={`Contato via WhatsApp com ${lawyer.name}`}
                      title="Conversar no WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Reutilizável de Detalhes do Advogado */}
      <LawyerModal
        lawyer={selectedLawyer}
        onClose={() => setSelectedLawyer(null)}
      />
    </section>
  );
}
