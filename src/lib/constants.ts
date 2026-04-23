export const SITE = {
  name: "Leadsmaskinen",
  url: "https://leadsmaskinen.se",
  description:
    "Bygg din automatiserade B2B-leadmotor. Från ICP till kvalificerat möte på 1–3 veckor. Resultatbaserad betalning.",
  founder: "Stefan Vikström",
  email: "stefan@leadsmaskinen.se",
} as const;

export const NAV_LINKS = [
  { label: "Så funkar det", href: "/#process" },
  { label: "Paket", href: "/#packages" },
  { label: "ROI", href: "/#roi" },
  { label: "Guide", href: "/#guide" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const HERO = {
  title: "Sluta prospektera. Börja stänga.",
  subtitle:
    "Vi bygger er säljmaskin och levererar färdigbokade möten direkt i kalendern. Sänk era möteskostnader och frigör 40 % av säljarnas tid.",
  cta: "Räkna på er ROI här",
  ctaHref: "/kalkylator",
} as const;

export const PROBLEMS = [
  {
    icon: "TrendingDown",
    title: "Ojämnt leadflöde",
    description:
      "Beroende av personliga nätverk och rekommendationer – ingen förutsägbarhet.",
  },
  {
    icon: "MousePointerClick",
    title: "Låg konvertering",
    description:
      "Generiska hemsidor som inte är byggda för att konvertera besökare till leads.",
  },
  {
    icon: "Clock",
    title: "Ingen automation",
    description:
      "Manuell uppföljning som tappar leads och slösar värdefull tid.",
  },
  {
    icon: "Receipt",
    title: "Byrå utan resultat",
    description:
      "Timdebitering och retainers utan koppling till faktiska affärer.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Precision, inte volym.",
    description:
      "Vi identifierar de beslutsfattare som faktiskt kan säga ja – och kontaktar dem med ett erbjudande de inte ignorerar. Inga massutskick. Inga gissningar.",
    icon: "Target",
  },
  {
    step: 2,
    title: "Besökaren får värde. Du får ett lead.",
    description:
      "En ROI-kalkylator, en audit, en guide – något besökaren faktiskt vill ha. I utbyte lämnar de sina uppgifter. Det är ingen trickkonvertering, det är en affär båda vinner på.",
    icon: "LayoutTemplate",
  },
  {
    step: 3,
    title: "Dina leads bokar möten medan du sover.",
    description:
      "En automatiserad mejlserie som bygger förtroende steg för steg – tills din lead själv klickar \"boka möte\". Du stänger. Vi levererar.",
    icon: "Workflow",
  },
] as const;

export const PACKAGES = {
  portal: {
    name: "Portal",
    label: "Premium",
    popular: true,
    originalPrice: "75 000",
    price: "25 000",
    unit: "kr",
    priceNote: "Introduktionspris",
    delivery: "3 veckor",
    features: [
      "ICP Persona Workshop (inkluderad)",
      "Nischad portal med 5+ CTA:er",
      "ROI-kalkylator, audit, quiz, boka möte",
      "Cold email + LinkedIn-outreach",
      "1 marketing automation-funnel (5 mejl)",
      "Löpande: Pay-per-lead",
    ],
    cta: "Bygg min leadmotor",
  },
  landing: {
    name: "Landningssida",
    label: "Standard",
    popular: false,
    price: "9 900",
    unit: "kr",
    priceNote: "Engångsavgift",
    delivery: "1 vecka",
    features: [
      "ICP Persona Workshop (inkluderad)",
      "Landningssida med 1 konverteringspunkt",
      "Cold email + LinkedIn-outreach",
      "1 marketing automation-funnel (5 mejl)",
      "Löpande: Pay-per-lead eller 2 900 kr/mån",
    ],
    cta: "Kom igång snabbt",
  },
} as const;

export const ROI_STATS = [
  { value: "100 000 kr", label: "Genomsnittligt affärsvärde" },
  { value: "150", label: "Marketing Qualified Leads" },
  { value: "45", label: "Sales Qualified Leads" },
  { value: "23", label: "Stängda affärer" },
] as const;

export const ROI_RESULT = {
  revenue: "2 250 000 kr",
  investment: "310 000 kr",
  savings: "374 400 kr",
  profit: "739 400 kr",
  roi: "338%",
} as const;

export const COMPARISON = [
  {
    dimension: "Betalning",
    agency: "Timmar & retainers",
    leadsmaskinen: "Resultatbaserad (pay-per-lead)",
  },
  {
    dimension: "Incitament",
    agency: "Fler timmar = mer intäkt",
    leadsmaskinen: "Fler leads = mer intäkt",
  },
  {
    dimension: "Transparens",
    agency: "Månadsrapporter",
    leadsmaskinen: "Delad dashboard i realtid",
  },
  {
    dimension: "Leverans",
    agency: "Manuellt, personberoende",
    leadsmaskinen: "Automatiserat, produktifierat",
  },
  {
    dimension: "Tid till resultat",
    agency: "Veckor–månader",
    leadsmaskinen: "1–3 veckor",
  },
  {
    dimension: "Optimering",
    agency: "Eftertanke",
    leadsmaskinen: "Månadsvis optimeringsloop",
  },
] as const;

export const IDEAL_FIT = [
  "B2B med höga priser eller goda marginaler",
  "Fungerande erbjudande men ojämnt leadflöde",
  "Beredd att delta i en ICP-workshop",
  "Kan vara bollplank kring budskap och erbjudanden",
  "Har kapacitet att följa upp leads som kommer in",
  "Öppen för AI och automation",
] as const;

export const POOR_FIT = [
  "Nystartat utan bevisad affärsmodell",
  "B2C eller låga marginaler",
  "Ingen som aktivt bearbetar leads",
  "Vill ha snabba engångsresultat",
  "Inte intresserad av dialog kring målgrupp och budskap",
  "Intern oenighet om säljstrategi",
] as const;

export const FAQ_ITEMS = [
  {
    question: "Vad räknas som en lead?",
    answer:
      "Vi skiljer på MQL (Marketing Qualified Lead) och SQL (Sales Qualified Lead / bokat möte). Definitionen sätts gemensamt innan start så att det är glasklart vad du betalar för.",
  },
  {
    question: "Hur säkerställer ni kvaliteten på leads?",
    answer:
      "Genom ICP Persona Workshop definierar vi exakt din idealkund. Kvalitetsfilter och en gemensam dashboard ger full transparens – du ser varje lead i realtid.",
  },
  {
    question: "Hur snabbt kan vi vara igång?",
    answer:
      "Landningssida: 1 vecka. Portal: 3 veckor. Vi börjar med en ICP Persona Workshop och har dina outbound-kampanjer och automation redo vid lansering.",
  },
  {
    question: "Vad krävs av oss som kund?",
    answer:
      "Delta i en ICP-workshop (ca 2 timmar), var bollplank kring budskap, och ha kapacitet att följa upp inkommande leads. Vi tar hand om resten.",
  },
  {
    question: "Vad händer om ni inte levererar tillräckligt?",
    answer:
      "Pay-per-lead innebär att du bara betalar för levererade leads. Vi har gemensamma incitament – ingen leverans, ingen kostnad utöver startavgiften.",
  },
  {
    question: "Varför finns det en startavgift?",
    answer:
      "Startavgiften täcker ICP-audit, portalbygge/landningssida, outbound-setup och automationskonfiguration. Det är ingen retainer – det är en engångsinvestering i din leadmotor.",
  },
  {
    question: "Kan vi börja med bara en ICP Persona Workshop?",
    answer:
      "Ja. En fristående ICP Persona Workshop kostar 7 500 kr. Om du sedan väljer att gå vidare med ett paket räknas den av mot startavgiften.",
  },
] as const;

// --- Service pages ---

export const SERVICE_NAV_LINKS = [
  { label: "ICP & Outreach", href: "/tjanster/icp-outreach" },
  { label: "Landningssida", href: "/tjanster/landningssida" },
  { label: "Nischportal", href: "/tjanster/portal" },
  { label: "Marketing Automation", href: "/tjanster/automation" },
  { label: "ICP Workshop", href: "/tjanster/workshop" },
] as const;

export const SERVICE_TRUST = {
  title: "Varför Leadsmaskinen?",
  body: "Vi levererar inte timmar. Vi levererar leads. Med vår pay-per-lead-modell har vi samma mål som du: Att stänga fler affärer.",
} as const;

export const SERVICE_FAQ = [
  {
    question: "Hur snabbt ser jag resultat?",
    answer:
      "Outreach-motorn startar ofta inom 1–3 veckor. De första leadsen kommer vanligtvis direkt efter lansering.",
  },
  {
    question: "Vad kostar ett lead?",
    answer:
      "Vi har en flex-modell baserad på ditt affärsvärde, men våra golvpriser börjar på 400 kr för ett MQL.",
  },
] as const;
