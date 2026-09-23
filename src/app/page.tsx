import React from "react";
import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import AboutOffice from "@/components/AboutOffice";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-saf-bg text-saf-muted selection:bg-saf-gold/30 selection:text-saf-light">
      {/* Faixa Superior de Emergência para Flagrantes / Custódia */}
      <EmergencyBar />

      {/* Header Fixo com Monograma e Ações */}
      <Navbar />

      <main className="flex-1">
        {/* Primeira Dobra / Hero com autoridade na defesa penal */}
        <Hero />

        {/* Especialidades com destaque para Direito Penal e áreas correlatas */}
        <Specialties />

        {/* Sobre o Escritório com foto/SAF/equipe.jpg */}
        <AboutOffice />

        {/* Corpo Jurídico com fotos foto1/foto2 e modal de credenciais */}
        <TeamSection />

        {/* Perguntas Frequentes / Dúvidas de Urgência */}
        <FAQSection />
      </main>

      {/* Rodapé com endereço, compliance OAB e contatos */}
      <Footer />

      {/* Botão Flutuante de WhatsApp com pulso de plantão */}
      <FloatingWhatsApp />
    </div>
  );
}
