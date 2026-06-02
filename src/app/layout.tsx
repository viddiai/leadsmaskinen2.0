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
        <Script
          id="linkedin-insight-partner-id"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `_linkedin_partner_id = "1789420";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);`,
          }}
        />
        <Script
          id="linkedin-insight-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=1789420&fmt=gif"
          />
        </noscript>
        <Script
          id="plerdy-tracking"
          strategy="afterInteractive"
          data-plerdy_code="1"
          dangerouslySetInnerHTML={{
            __html: `var _protocol="https:"==document.location.protocol?"https://":"http://";
_site_hash_code = "595aae008c4ef319c52a0cb4d494589c",_suid=77254, plerdyScript=document.createElement("script");
plerdyScript.setAttribute("defer",""),plerdyScript.dataset.plerdymainscript="plerdymainscript",
plerdyScript.src="https://d.plerdy.com/public/js/click/main.js?v="+Math.random();
var plerdymainscript=document.querySelector("[data-plerdymainscript='plerdymainscript']");
plerdymainscript&&plerdymainscript.parentNode.removeChild(plerdymainscript);
try{document.head.appendChild(plerdyScript)}catch(t){console.log(t,"unable add script tag")}`,
          }}
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
