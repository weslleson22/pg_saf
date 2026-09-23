"use client";

import React from "react";
import { ShieldCheck, Award, Target, Scale, Check } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";

export default function AboutOffice() {
  const whatsappUrl = getWhatsAppUrl(
    "Olá! Gostaria de agendar uma reunião institucional para conhecer o escritório SAF Advocacia."
  );

  return (
    <section id="sobre" className="py-20 md:py-28 bg-saf-bg relative border-t border-saf-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Coluna da Imagem Oficial da Equipe (foto/SAF/equipe.jpg) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-saf-gold/30 bg-[#161F2C] p-2 shadow-2xl group">
              <div className="relative overflow-hidden rounded-lg">
                {/* Tag obrigatória conforme especificação */}
                <img
                  src="/foto/SAF/equipe.jpg"
                  alt="Equipe de Advogados Santos, Araújo e Fonseca Advocacia"
                  loading="lazy"
                  className="w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradiente sutil inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12]/90 via-transparent to-transparent opacity-80"></div>
                
                {/* Legenda embutida na foto */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded bg-[#0F141C]/90 backdrop-blur-md border border-saf-border flex items-center justify-between">
                  <div>
                    <p className="text-xs font-serif font-semibold text-saf-light">
                      SAF — Santos, Araújo &amp; Fonseca
                    </p>
                    <p className="text-[10px] text-saf-gold uppercase tracking-wider">
                      Reunião de Alinhamento Técnico &amp; Estratégico
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
                <p className="text-xs font-bold text-saf-light">Atuação Artesanal &amp; Ética</p>
                <p className="text-[11px] text-saf-muted">Defesa técnica sem atalhos processuais</p>
              </div>
            </div>
          </div>

          {/* Coluna de Texto Institucional */}
          <div className="lg:col-span-6">
            <div className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-saf-gold mb-3">
              O Escritório
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl text-saf-light font-bold tracking-tight mb-6 leading-tight">
              Solidez Jurídica, Confidencialidade e Foco Inegociável em{" "}
              <span className="gold-gradient-text">Resultados Legítimos</span>
            </h2>

            <p className="text-sm sm:text-base text-saf-muted leading-relaxed mb-6">
              A <strong className="text-saf-light">Santos, Araújo e Fonseca Advocacia</strong> consolidou-se como
              uma banca jurídica de vanguarda, alicerçada na dedicação profunda a cada causa e no respeito
              irrestrito às garantias constitucionais de nossos representados.
            </p>

            <p className="text-sm sm:text-base text-saf-muted leading-relaxed mb-8">
              Repudiamos soluções automatizadas. Cada investigação, inquérito, mandado ou processo cível
              recebe análise minuciosa de provas, mapeamento de nulidades processuais e formulação de teses
              recursais de alto nível técnico, garantindo uma defesa combativa perante tribunais locais e Cortes Superiores.
            </p>

            {/* Pilares Institucionais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded bg-saf-card border border-saf-border">
                <div className="w-7 h-7 rounded bg-[#1D2736] flex items-center justify-center text-saf-gold shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-saf-light uppercase tracking-wider mb-1">
                    Pronta Resposta
                  </h3>
                  <p className="text-xs text-saf-muted leading-relaxed">
                    Advogados disponíveis 24 horas para intervenção imediata em delegacias e flagrantes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded bg-saf-card border border-saf-border">
                <div className="w-7 h-7 rounded bg-[#1D2736] flex items-center justify-center text-saf-gold shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-saf-light uppercase tracking-wider mb-1">
                    Sigilo Profissional
                  </h3>
                  <p className="text-xs text-saf-muted leading-relaxed">
                    Proteção integral de dados, relatos e estratégias sob o rigor do Estatuto da OAB.
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
                    Domínio aprofundado da jurisprudência contemporânea do STJ e do STF.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded bg-saf-card border border-saf-border">
                <div className="w-7 h-7 rounded bg-[#1D2736] flex items-center justify-center text-saf-gold shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-saf-light uppercase tracking-wider mb-1">
                    Atendimento Humano
                  </h3>
                  <p className="text-xs text-saf-muted leading-relaxed">
                    Clareza e transparência no diálogo com clientes e familiares em momentos críticos.
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
                <span>Agendar Consulta Institucional</span>
                <span className="text-saf-gold">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
