import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://safadvocacia.com.br"),
  title: `${SITE_CONFIG.name} | Direito Imobiliário & Advocacia Especializada`,
  description: "Banca jurídica de alto padrão com atuação destacada em Direito Imobiliário & Negócios, Regularização Fundiária, Direito Criminal Estratégico, Família e Sucessões, Civil e Empresarial.",
  keywords: [
    "SAF Advocacia e Consultoria",
    "SAF Advocacia",
    "direito imobiliario",
    "regularizacao fundiaria",
    "usucapiao extrajudicial",
    "contratos imobiliarios",
    "leiloes de imoveis",
    "assessoria a condominios",
    "direito criminal estrategico",
    "direito de familia e sucessoes",
    "direito civil e contratos",
    "consultoria empresarial",
    "advogado sao luis ma"
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    title: `${SITE_CONFIG.name} | Direito Imobiliário & Defesa Jurídica Estratégica`,
    description: "Atuação célere, sigilosa e estratégica na regularização de imóveis, consultoria imobiliária e defesa combativa perante todas as instâncias.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/foto/SAF/equipe.jpg",
        width: 1024,
        height: 683,
        alt: `${SITE_CONFIG.name} - Corpo Jurídico`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": SITE_CONFIG.name,
    "alternateName": SITE_CONFIG.shortName,
    "description": "Banca de advocacia de alta performance especializada em Direito Imobiliário & Negócios, Regularização Fundiária e Consultoria Jurídica Estratégica.",
    "telephone": SITE_CONFIG.phoneDisplay,
    "email": SITE_CONFIG.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Colares Moreira, Renascença II",
      "addressLocality": "São Luís",
      "addressRegion": "MA",
      "addressCountry": "BR"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "image": "/foto/SAF/equipe.jpg",
    "priceRange": "$$$$"
  };

  return (
    <html lang="pt-BR" className={`${cinzel.variable} ${plusJakarta.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-saf-bg text-saf-muted antialiased selection:bg-saf-gold/30 selection:text-saf-light">
        {children}
      </body>
    </html>
  );
}
