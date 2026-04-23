import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExitIntentModal } from "@/components/forms/ExitIntentModal";
import { StructuredData } from "@/components/shared/StructuredData";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const larsseit = localFont({
  src: [
    { path: "../../public/fonts/LarsseitLight.woff", weight: "300", style: "normal" },
    { path: "../../public/fonts/LarsseitMedium.woff", weight: "500", style: "normal" },
    { path: "../../public/fonts/LarsseitBold.woff", weight: "700", style: "normal" },
    { path: "../../public/fonts/LarsseitExtraBold.woff", weight: "800", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leadsmaskinen.se"),
  title: {
    default: "Leadsmaskinen – Automatiserad B2B-leadgenerering",
    template: "%s | Leadsmaskinen",
  },
  description:
    "Bygg din automatiserade B2B-leadmotor. Från ICP till kvalificerat möte på 1–3 veckor. Resultatbaserad betalning.",
  keywords: [
    "B2B leadgenerering",
    "lead generation Sverige",
    "automatiserad leadmotor",
    "pay per lead",
    "B2B pipeline",
    "ICP audit",
    "outbound marketing",
  ],
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "Leadsmaskinen",
    title: "Leadsmaskinen – Automatiserad B2B-leadgenerering",
    description:
      "Bygg din automatiserade B2B-leadmotor. Från ICP till kvalificerat möte på 1–3 veckor.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/l_ikon_vit.png",
    apple: "/l_ikon_vit.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={`${montserrat.variable} ${larsseit.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className="bg-white text-graphite antialiased">
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ExitIntentModal />
      </body>
    </html>
  );
}
