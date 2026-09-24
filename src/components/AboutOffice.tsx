"use client";

import React from "react";
import { ShieldCheck, Check } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";

export default function AboutOffice() {
  const whatsappUrl = getWhatsAppUrl(
    "Olá, gostaria de falar com um advogado da SAF Advocacia e Consultoria."
  );

  return (
    <section id="sobre" className="py-20 md:py-28 bg-saf-bg relative border-t border-saf-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Coluna da Imagem Oficial da Equipe (foto/SAF/equipe.jpg) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-saf-gold/30 bg-[#161F2C] p-2 shadow-2xl group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/foto/SAF/equipe.jpg"
                  alt="Equipe de Advogados SAF Advocacia e Consultoria"
                  loading="lazy"
                  className="w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradiente sutil inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12]/90 via-transparent to-transparent opacity-80"></div>
                
                {/* Legenda embutida na foto */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded bg-[#0F141C]/90 backdrop-blur-md border border-saf-border flex items-center justify-between">
                  <div>
                    <p className="text-xs font-serif font-semibold text-saf-light">
                      SAF Advocacia e Consultoria
                    </p>
                    <p className="text-[10px] text-saf-gold uppercase tracking-wider">
                      Banca de Excelência Jurídica &amp; Estratégia
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded border border-saf-gold/40 flex items-center justify-center text-saf-gold text-xs font-serif font-bold">
                    SAF
                  </div>
                </div>
              </div>
            </div>

            {/* Selo Flutuante de Excelência */}
            <div className="hidden sm:flex absolute -bottom-6 -right-4 bg-gradient-to-br from-[#1C2637] to-[#121822] border border-saf-gold/50 rounded-lg p-4 shadow-xl items-center gap-3">
              <div className="w-10 h-10 rounded bg-saf-gold/20 flex items-center justify-center text-saf-gold shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-saf-light">Atuação Estratégica &amp; Ética</p>
                <p className="text-[11px] text-saf-muted">Segurança jurídica e solidez processual</p>
              </div>
            </div>
          </div>

          {/* Coluna de Texto Institucional */}
          <div className="lg:col-span-6">
            <div className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-saf-gold mb-3">
              O Escritório
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl text-saf-light font-bold tracking-tight mb-6 leading-tight">
              Solidez Jurídica, Rigor Técnico e Foco Inegociável em{" "}
              <span className="gold-gradient-text">Resultados Legítimos</span>
            </h2>

            <p className="text-sm sm:text-base text-saf-muted leading-relaxed mb-6">
              A <strong className="text-saf-light">SAF Advocacia e Consultoria</strong> consolidou-se como
              uma banca jurídica de referência, alicerçada na dedicação profunda a cada causa e no compromisso
              com a proteção patrimonial, conformidade jurídica e defesa combativa dos direitos de nossos representados.
            </p>

            <p className="text-sm sm:text-base text-saf-muted leading-relaxed mb-8">
              Repudiamos soluções automatizadas. Seja na condução de regularizações fundiárias, empreendimentos imobiliários
              e contratos de alta complexidade, seja na atuação contenciosa em Direito Civil, Sucessões ou na defesa criminal
              estratégica, cada caso recebe análise minuciosa de provas, mapeamento preventivo de riscos e formulação de
              teses sólidas perante cartórios, órgãos administrativos e Tribunais Superiores.
            </p>

            {/* Pilares Institucionais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded bg-saf-card border border-saf-border">
                <div className="w-7 h-7 rounded bg-[#1D2736] flex items-center justify-center text-saf-gold shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-saf-light uppercase tracking-wider mb-1">
                    Autoridade Imobiliária
                  </h3>
                  <p className="text-xs text-saf-muted leading-relaxed">
                    Especialistas em regularização de imóveis, usucapião, loteamentos e condomínios.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded bg-saf-card border border-saf-border">
                <div className="w-7 h-7 rounded bg-[#1D2736] flex items-center justify-center text-saf-gold shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-saf-light uppercase tracking-wider mb-1">
                    Sigilo &amp; Conformidade
                  </h3>
                  <p className="text-xs text-saf-muted leading-relaxed">
                    Proteção integral de dados, contratos e estratégias sob o rigor do Estatuto da OAB.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded bg-saf-card border border-saf-border">
                <div className="w-7 h-7 rounded bg-[#1D2736] flex items-center justify-center text-saf-gold shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-saf-light uppercase tracking-wider mb-1">
                    Técnica Processual
                  </h3>
                  <p className="text-xs text-saf-muted leading-relaxed">
                    Domínio aprofundado da jurisprudência contemporânea do STJ, STF e tribunais estaduais.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded bg-saf-card border border-saf-border">
                <div className="w-7 h-7 rounded bg-[#1D2736] flex items-center justify-center text-saf-gold shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-saf-light uppercase tracking-wider mb-1">
                    Atendimento Integrado
                  </h3>
                  <p className="text-xs text-saf-muted leading-relaxed">
                    Corpo jurídico multidisciplinar com atuação ágil e suporte para demandas urgentes.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded border border-saf-gold/40 hover:border-saf-gold bg-[#151E2B] hover:bg-[#1A2536] text-saf-light hover:text-saf-gold text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <span>Falar com Nossos Advogados</span>
                <span className="text-saf-gold">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
