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
  title: `${SITE_CONFIG.shortName} | Advocacia Multidisciplinar & Defesa Especializada`,
  description: "Banca jurídica multidisciplinar de alto padrão. Equipe de advogados especialistas em Direito Criminal, Cível, Família e Sucessões, Empresarial, Tributário e Trabalhista.",
  keywords: [
    "advocacia criminal",
    "advogado criminalista",
    "direito penal são luís",
    "plantão criminal 24h",
    "habeas corpus",
    "audiência de custódia",
    "tribunal do júri",
    "direito penal econômico",
    "SAF advocacia",
    "Santos Araújo e Fonseca"
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    title: `${SITE_CONFIG.name} | Defesa Penal Estratégica`,
    description: "Atuação célere, sigilosa e combativa na defesa de direitos fundamentais perante todas as instâncias judiciais.",
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
    "description": "Banca de advocacia de alta performance especializada em Direito Criminal e consultoria estratégica.",
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
