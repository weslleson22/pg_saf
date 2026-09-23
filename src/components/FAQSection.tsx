"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { FAQ_LIST, SITE_CONFIG, getWhatsAppUrl } from "@/config/site";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = getWhatsAppUrl(
    "Olá! Gostaria de tirar uma dúvida jurídica específica com a equipe da SAF Advocacia."
  );

  return (
    <section id="faq" className="py-20 md:py-28 bg-saf-bg relative border-t border-saf-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-14">
          <div className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-saf-gold mb-3">
            Dúvidas Frequentes &amp; Esclarecimentos
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-saf-light font-bold tracking-tight mb-4">
            Perguntas Cruciais em Momentos de Urgência
          </h2>
          <p className="text-saf-muted text-sm sm:text-base leading-relaxed">
            Respostas diretas e transparentes sobre atuação em flagrantes, custódia, sigilo e procedimentos de defesa.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-12">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-lg border border-saf-border bg-saf-card overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#18212E] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-sm sm:text-base font-semibold text-saf-light leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#18212E] border border-saf-border flex items-center justify-center text-saf-gold shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-saf-gold text-[#0A0D12]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-saf-muted leading-relaxed border-t border-saf-border/50 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Caixa de Apoio CTA */}
        <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#141C27] to-[#172230] border border-saf-gold/30 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h3 className="font-serif text-lg font-bold text-saf-light mb-1">
              Sua dúvida não foi listada aqui?
            </h3>
            <p className="text-xs sm:text-sm text-saf-muted">
              Fale diretamente com nossa equipe de advogados em sigilo absoluto.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-saf-gold hover:bg-saf-gold-light text-[#0A0D12] text-xs font-bold uppercase tracking-wider transition-all shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consultar Agora</span>
          </a>
        </div>

      </div>
    </section>
  );
}
