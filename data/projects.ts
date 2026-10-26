export interface Project {
  slug: string;
  name: string;
  url: string;
  tagline: string;
  resultMetric: string;
  image: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  isDemo?: boolean;
}

export const projects: Project[] = [
  {
    slug: "kraamzorg-t-gouden-hartje",
    name: "Kraamzorg 'T Gouden Hartje",
    url: "https://www.kraamzorg-tgoudenhartje.nl/", 
    tagline: "Warm en persoonlijk platform voor kraamzorg in Almere, gericht op rust, vertrouwen en een liefdevolle start.",
    resultMetric: "100/100 PageSpeed · Perfecte Core Web Vitals",
    image: "/images/portfolio/Kraamzorg-tgoudenhartje-hero.jpg", // Pas dit pad aan naar de exacte locatie van je upload
    testimonial: {
      quote: "Als kraamverzorgende wil ik dat ouders zich direct op hun gemak voelen. De nieuwe website straalt precies die warmte en rust uit die ik in mijn praktijk breng. Ik word nu veel beter gevonden door gezinnen in Almere en kan mijn verhaal op een prachtige manier vertellen.",
      author: "Hanan",
      role: "Eigenaresse, Kraamzorg 'T Gouden Hartje",
    },
  },
  {
    slug: "marleys-kraamzorg",
    name: "Marley's Kraamzorg",
    url: "https://www.marleyskraamzorg.nl",
    tagline: "Volledig maatwerkplatform met een warme, betrouwbare branding en intuïtieve aanmeldingsflow.",
    resultMetric: "Laadtijd 0.6s · 100/100 PageSpeed",
    image: "/images/portfolio/marleyskraamzorg-hero.jpg",
    testimonial: {
      quote: "Ik ben ontzettend blij met mijn nieuwe website. Het geeft precies de warme, persoonlijke uitstraling die ik wilde. Klanten vinden mij nu veel makkelijker online en de site voelt echt als een verlengstuk van mijn praktijk.",
      author: "Lisa",
      role: "Oprichter, Marley's Kraamzorg",
    },
  },
  {
    slug: "dtg-cleaning",
    name: "DTG Cleaning",
    url: "https://dtgcleaning.nl",
    tagline: "Razendsnel lokaal SEO-platform ingericht op directe offerte-aanvragen in de schoonmaakbranche.",
    resultMetric: "Top 3 posities · Stijging in online aanvragen",
    image: "/images/portfolio/dtg-cleaning.jpg",
    testimonial: {
      quote: "De nieuwe website is een enorme sprong vooruit. Hij laadt razendsnel en ziet er professioneel uit. Ik krijg nu veel meer aanvragen via de site.",
      author: "Dominique",
      role: "Eigenaar, D.T.G. Cleaning",
    },
  },
  {
    slug: "autorijschool-valberg",
    name: "Autorijschool Valberg",
    url: "https://autorijschoolvalberg.nl",
    tagline: "Conversiegerichte landingspagina's met slimme call-to-actions voor een constante stroom nieuwe leerlingen.",
    resultMetric: "5-Sterren UX · Flink meer lesaanmeldingen",
    image: "/images/portfolio/valberg.jpg",
    testimonial: {
      quote: "De website is modern, overzichtelijk en trekt precies de juiste doelgroep aan. Het aantal aanmeldingen via de site is flink gestegen.",
      author: "Roy",
      role: "Eigenaar, Autorijschool Valberg",
    },
  },
  {
    slug: "luxe-webshop",
    name: "Luxe Webshop",
    url: "https://luxe-webshop.vercel.app",
    tagline: "High-end, ultrasnel e-commerce platform met maatwerk design en vlekkeloze betaalintegraties.",
    resultMetric: "Headless Commerce Showcase",
    image: "/images/portfolio/luxe-webshop.jpg",
    isDemo: true,
  },
  {
    slug: "inas-kraamzorg",
    name: "Inas Kraamzorg",
    url: "https://inaskraamzorg.nl",
    tagline: "Zorgplatform met meertalige ondersteuning en een uiterst toegankelijke mobiele structuur.",
    resultMetric: "100% Core Web Vitals score",
    image: "/images/portfolio/inas.jpg",
    testimonial: {
      quote: "De website straalt precies de warmte en professionaliteit uit die bij mijn praktijk past. Ik merk dat aanstaande ouders mij nu makkelijker weten te vinden.",
      author: "Fatima",
      role: "Oprichter, Inas Kraamzorg",
    },
  },
  {
    slug: "cindys-kraamzorg",
    name: "Cindy's Kraamzorg",
    url: "https://cindyskraamzorg.nl",
    tagline: "WordPress migratie naar Next.js. Volledige modernisering en eliminatie van plugin-onderhoud.",
    resultMetric: "Hostingkosten verlaagd · 3x snellere laadtijd",
    image: "/images/portfolio/cindys-kraamzorg.jpg",
    testimonial: {
      quote: "De nieuwe website is zoveel sneller en professioneler. En ik bespaar nu maandelijks op mijn hostingkosten. Maar wat ik het fijnste vind: de site voelt weer als mij.",
      author: "Cindy",
      role: "Eigenaar, Cindy's Kraamzorg",
    },
  },
];
